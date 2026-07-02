#!/usr/bin/env python3
"""
whisper-transcribe.py – Trascrive un video e genera il blocco transcript per props.json
Uso: python3 scripts/whisper-transcribe.py starter/public/mio-reel.mp4

Prerequisiti:
  pip install openai-whisper
  (La prima esecuzione scarica il modello ~244MB)
"""

import sys
import json

def transcribe(video_path: str):
    try:
        import whisper
    except ImportError:
        print("❌  Whisper non installato. Esegui:")
        print("    pip install openai-whisper")
        sys.exit(1)

    print(f"🎙  Carico il modello Whisper (small)...")
    model = whisper.load_model("small")

    print(f"🔊  Trascrivo: {video_path}")
    result = model.transcribe(video_path, language="it")

    print("\n" + "="*60)
    print("BLOCCO transcript – copia nel tuo props.json:")
    print("="*60)

    segments = []
    for seg in result["segments"]:
        segment = {
            "start": round(seg["start"], 1),
            "end":   round(seg["end"], 1),
            "text":  seg["text"].strip()
        }
        segments.append(segment)

    print(json.dumps(segments, ensure_ascii=False, indent=4))

    print("\n" + "="*60)
    print("⚠️  Controlla manualmente:")
    print("  - Nomi brand (es. 'Studio Mantovan', 'NDI', 'CFT')")
    print("  - Numeri e percentuali")
    print("  - Termini clinici specifici")
    print("="*60)

    # Salva anche su file
    output_file = video_path.replace(".mp4", "-transcript.json").replace(".MOV", "-transcript.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(segments, f, ensure_ascii=False, indent=4)
    print(f"\n💾  Salvato anche in: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 scripts/whisper-transcribe.py percorso/video.mp4")
        sys.exit(1)
    transcribe(sys.argv[1])