#!/usr/bin/env python3
"""
build_ass_overlay.py — Genera un file .ass (sottotitoli avanzati) con overlay
testuali animati in stile brand Studio Mantovan, a partire da un JSON di frasi.
Genera anche il comando FFmpeg pronto (video + audio) in base alla config "audio".

USO:
    python build_ass_overlay.py frasi.json overlay.ass
    (lo script stampa anche il/i comando/i ffmpeg da eseguire)

FORMATO frasi.json:
{
  "video_width": 1080,
  "video_height": 1920,
  "phrases": [
    {"role": "hook",     "text": "Le avevano detto di non piegarsi mai.", "start": 0.0, "end": 2.5, "effect": "pop"},
    {"role": "credenza", "text": "Niente flessioni della schiena, le avevano detto.", "start": 2.5, "end": 5.0, "effect": "slide", "direction": "left"},
    {"role": "prova",    "text": "Oggi: 3 serie di stacchi da terra, zero dolore.", "start": 5.0, "end": 8.0, "effect": "typewriter"},
    {"role": "chiusura", "text": "Non tutte le regole valgono per sempre.", "start": 8.0, "end": 10.5, "effect": "fade"}
  ],
  "audio": {
    "mode": "mix",
    "video_in": "input.mp4",
    "video_out": "output_finale.mp4",
    "music_file": "musica.mp3",
    "music_volume": 0.25,
    "original_volume": 1.0,
    "music_start": 0.0,
    "duck": false
  }
}

Ruoli supportati: hook, credenza, prova, chiusura.
Effetti supportati per frase (campo "effect", default "fade"): fade, pop, slide, typewriter.
Per "slide" specifica anche "direction": left, right, up, down (default left).
Il blocco "audio" è opzionale: se assente, lo script genera solo il file .ass
e stampa il comando ffmpeg minimo (solo overlay, audio originale invariato).
audio.mode: "mix" (aggiunge musica), "replace" (sostituisce audio), "volume_only"
(regola solo il volume dell'audio esistente, nessun file musica).
"""

import json
import sys

# --- Palette brand Studio Mantovan, convertita in formato ASS (&HAABBGGRR&) ---
CREAM = "&H00EBF0F5&"
TEAL = "&H00C99E1A&"
MINT = "&H00B0BF5D&"
CORAL = "&H003A50E8&"
INK = "&H00403A1F&"

# Alignment ASS (numpad-style): 8 = top-center, 5 = middle-center, 2 = bottom-center
STYLES = {
    "hook":     {"name": "Hook",     "font": "Fraunces", "size": 78, "color": CREAM, "outline": INK, "align": 8, "margin_v": 140},
    "credenza": {"name": "Credenza", "font": "Archivo",  "size": 52, "color": TEAL,  "outline": INK, "align": 5, "margin_v": 0},
    "prova":    {"name": "Prova",    "font": "Archivo",  "size": 58, "color": CORAL, "outline": INK, "align": 2, "margin_v": 160},
    "chiusura": {"name": "Chiusura", "font": "Fraunces", "size": 60, "color": CREAM, "outline": INK, "align": 2, "margin_v": 100},
}

FADE_MS = 300  # fade in/out in millisecondi
POP_MS = 250   # durata animazione pop
SLIDE_MS = 300  # durata animazione slide
TYPEWRITER_MAX_REVEAL = 1.2  # secondi massimi dedicati all'effetto di scrittura
TYPEWRITER_CHAR_MS = 45      # ms per carattere (indicativo)


def sec_to_ass_time(s: float) -> str:
    h = int(s // 3600)
    m = int((s % 3600) // 60)
    sec = s % 60
    return f"{h:d}:{m:02d}:{sec:05.2f}"


def build_style_lines():
    lines = []
    for st in STYLES.values():
        # Format: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,
        # Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,
        # Alignment,MarginL,MarginR,MarginV,Encoding
        lines.append(
            f"Style: {st['name']},{st['font']},{st['size']},{st['color']},&H000000FF,"
            f"{st['outline']},&H00000000,-1,0,0,0,100,100,0,0,1,3,1,{st['align']},60,60,{st['margin_v'] or 40},1"
        )
    return lines


def target_position(role, width, height):
    """Coordinate (x,y) approssimative del punto finale del testo, dedotte
    dall'alignment/margin_v dello stile associato al ruolo."""
    st = STYLES.get(role, STYLES["prova"])
    align = st["align"]
    margin_v = st["margin_v"] or 60
    x = width // 2
    if align in (7, 8, 9):        # top
        y = margin_v + 40
    elif align in (4, 5, 6):      # middle
        y = height // 2
    else:                          # bottom
        y = height - margin_v - 40
    return x, y


def effect_tag(p, width, height):
    """Restituisce il tag ASS (override + eventuale \\move/\\t) per l'effetto
    scelto. Non gestisce 'typewriter', che richiede eventi multipli separati."""
    effect = p.get("effect", "fade")
    role = p.get("role", "prova")
    tx, ty = target_position(role, width, height)

    if effect == "pop":
        return f"{{\\fscx0\\fscy0\\t(0,{POP_MS},\\fscx100\\fscy100)\\fad(0,{FADE_MS})}}"

    if effect == "slide":
        direction = p.get("direction", "left")
        if direction == "left":
            x0, y0 = -400, ty
        elif direction == "right":
            x0, y0 = width + 400, ty
        elif direction == "up":
            x0, y0 = tx, height + 300
        elif direction == "down":
            x0, y0 = tx, -300
        else:
            x0, y0 = -400, ty
        return f"{{\\move({x0},{y0},{tx},{ty},0,{SLIDE_MS})\\fad(0,{FADE_MS})}}"

    # default: fade
    return f"{{\\fad({FADE_MS},{FADE_MS})}}"


def build_typewriter_events(p, style_name):
    """Genera più righe Dialogue che rivelano il testo progressivamente."""
    text = p["text"]
    start, end = p["start"], p["end"]
    n = len(text)
    if n == 0:
        return []
    reveal = min(end - start, min(TYPEWRITER_MAX_REVEAL, n * TYPEWRITER_CHAR_MS / 1000))
    per_char = reveal / n
    lines = []
    for i in range(1, n + 1):
        seg_start = start + (i - 1) * per_char
        seg_end = start + i * per_char
        partial = text[:i].replace("\n", "\\N")
        lines.append(
            f"Dialogue: 0,{sec_to_ass_time(seg_start)},{sec_to_ass_time(seg_end)},{style_name},,0,0,0,,{partial}"
        )
    # tieni il testo completo visibile fino a 'end'
    if start + reveal < end:
        full = text.replace("\n", "\\N")
        lines.append(
            f"Dialogue: 0,{sec_to_ass_time(start + reveal)},{sec_to_ass_time(end)},{style_name},,0,0,0,,{full}"
        )
    return lines


def build_events(phrases, width, height):
    lines = []
    for p in phrases:
        role = p.get("role", "prova")
        style = STYLES.get(role, STYLES["prova"])["name"]
        effect = p.get("effect", "fade")

        if effect == "typewriter":
            lines.extend(build_typewriter_events(p, style))
            continue

        start = sec_to_ass_time(p["start"])
        end = sec_to_ass_time(p["end"])
        text = p["text"].replace("\n", "\\N")
        tag = effect_tag(p, width, height)
        lines.append(f"Dialogue: 0,{start},{end},{style},,0,0,0,,{tag}{text}")
    return lines


def build_ffmpeg_commands(audio_cfg, ass_path):
    """Costruisce il comando ffmpeg in base alla config audio (o il comando
    minimo se audio_cfg è assente)."""
    if not audio_cfg:
        return [
            'ffmpeg -i input.mp4 -vf "ass=' + ass_path + '" -c:a copy output_con_overlay.mp4'
        ]

    video_in = audio_cfg.get("video_in", "input.mp4")
    video_out = audio_cfg.get("video_out", "output_finale.mp4")
    mode = audio_cfg.get("mode", "volume_only")
    orig_vol = audio_cfg.get("original_volume", 1.0)

    if mode == "volume_only":
        cmd = (
            f'ffmpeg -i {video_in} -vf "ass={ass_path}" '
            f'-af "volume={orig_vol}" -c:v libx264 -crf 18 -preset medium '
            f'-c:a aac {video_out}'
        )
        return [cmd]

    if mode == "replace":
        music = audio_cfg.get("music_file", "nuovo_audio.mp3")
        cmd = (
            f'ffmpeg -i {video_in} -i {music} -vf "ass={ass_path}" '
            f'-map 0:v -map 1:a -c:v libx264 -crf 18 -preset medium '
            f'-shortest -c:a aac {video_out}'
        )
        return [cmd]

    if mode == "mix":
        music = audio_cfg.get("music_file", "musica.mp3")
        music_vol = audio_cfg.get("music_volume", 0.25)
        music_start_ms = int(audio_cfg.get("music_start", 0.0) * 1000)
        duck = audio_cfg.get("duck", False)

        if not duck:
            filter_complex = (
                f'[0:a]volume={orig_vol}[a0];'
                f'[1:a]volume={music_vol},adelay={music_start_ms}|{music_start_ms}[a1];'
                f'[a0][a1]amix=inputs=2:duration=first:dropout_transition=2[aout]'
            )
        else:
            # ducking: la musica si abbassa automaticamente quando c'è il parlato originale
            filter_complex = (
                f'[1:a]volume={music_vol},adelay={music_start_ms}|{music_start_ms}[music];'
                f'[0:a]asplit=2[a0][sc];'
                f'[music][sc]sidechaincompress=threshold=0.05:ratio=8:attack=5:release=200[ducked];'
                f'[a0]volume={orig_vol}[a0v];'
                f'[a0v][ducked]amix=inputs=2:duration=first[aout]'
            )

        cmd = (
            f'ffmpeg -i {video_in} -i {music} -vf "ass={ass_path}" '
            f'-filter_complex "{filter_complex}" '
            f'-map 0:v -map "[aout]" -c:v libx264 -crf 18 -preset medium '
            f'-c:a aac {video_out}'
        )
        return [cmd]

    return [f'# modalità audio "{mode}" non riconosciuta, controlla il JSON']


def main():
    if len(sys.argv) != 3:
        print("Uso: python build_ass_overlay.py frasi.json overlay.ass")
        sys.exit(1)

    in_path, out_path = sys.argv[1], sys.argv[2]
    with open(in_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    width = data.get("video_width", 1080)
    height = data.get("video_height", 1920)
    phrases = data["phrases"]
    audio_cfg = data.get("audio")

    header = f"""[Script Info]
Title: Studio Mantovan - Reel Hook Overlay
ScriptType: v4.00+
PlayResX: {width}
PlayResY: {height}
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,MarginR,MarginV,Encoding
{chr(10).join(build_style_lines())}

[Events]
Format: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text
{chr(10).join(build_events(phrases, width, height))}
"""

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(header)

    print(f"File ASS generato: {out_path} ({len(phrases)} frasi)")
    print("\nComando/i FFmpeg da eseguire:\n")
    for cmd in build_ffmpeg_commands(audio_cfg, out_path):
        print(cmd)
        print()


if __name__ == "__main__":
    main()