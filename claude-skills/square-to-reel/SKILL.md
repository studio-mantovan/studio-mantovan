---
name: square-to-reel
description: Usa questa skill ogni volta che devi convertire immagini quadrate 1:1 (1080×1080) nel formato verticale 9:16 (1080×1920) per Reel e Stories Instagram. Triggera quando l'utente dice: converti in reel, adatta per story, formato verticale, 9:16, da quadrato a verticale. Usa FFmpeg. Produce PNG 1080×1920 pronti per reel-animator.
---

# Square to Reel

Converte PNG 1:1 (1080×1080) in formato verticale 9:16 (1080×1920) per Reel e Stories Instagram. Usa FFmpeg per creare uno sfondo branded che riempie le bande superiore e inferiore.

## Input attesi

| Parametro | Tipo | Default | Note |
|-----------|------|---------|------|
| `images` | array di path PNG | obbligatorio | PNG 1080×1080 dai caroselli |
| `output_dir` | directory | `./reel_frames/` | Dove salvare i PNG 9:16 |
| `background` | string | `blur` | Tipo di sfondo (vedi sotto) |
| `bg_color` | hex | `#1A1A2E` | Colore sfondo (se `solid`) |
| `padding` | int px | `0` | Padding attorno all'immagine quadrata |
| `logo` | path PNG | null | Logo da aggiungere in basso (opzionale) |

## Tipi di sfondo

- **`blur`** — sfondo sfumato estratto dall'immagine stessa (effetto professionale)
- **`solid`** — colore solido definito da `bg_color`
- **`gradient_teal`** — gradiente verticale teal→cream (#1A9EC9 → #F5F0EB)
- **`gradient_dark`** — gradiente scuro (#1A1A2E → #0D0D1A)
- **`brand_cream`** — sfondo pieno cream #F5F0EB

## Linee guida sfondo per tipo di contenuto

- Clinico/professionale → `blur` o `gradient_teal`
- Motivazionale → `gradient_dark`
- Slide testuali chiare → `brand_cream`

## Workflow

1. Verifica path PNG e crea output_dir
2. Per ogni PNG, genera frame 9:16 con FFmpeg
3. Applica sfondo secondo parametro
4. Salva PNG 1080×1920 numerati (`frame_01.png`, `frame_02.png`, …)
5. Report: elenca file creati, pronti per `reel-animator`

## Script principale

Usa `scripts/square_to_reel.py`.

## Esempio di utilizzo

```
Converti queste slide in formato 9:16 per reel:
- slide_01.png, slide_02.png, slide_03.png, slide_04.png, slide_05.png

Sfondo: blur
Output: ./reel_frames/
```

## Esempio comando

```bash
python square_to_reel.py slide_01.png slide_02.png slide_03.png slide_04.png slide_05.png \
  --background blur \
  --padding 40 \
  --output-dir ./reel_frames/
```

## Output atteso

```
reel_frames/
├── frame_01.png   (1080×1920)
├── frame_02.png   (1080×1920)
├── frame_03.png   (1080×1920)
├── frame_04.png   (1080×1920)
└── frame_05.png   (1080×1920)
```

Pronti per essere passati a `reel-animator`.

## Colori brand Studio Mantovan

```
Teal:  #1A9EC9
Mint:  #5DBFB0
Cream: #F5F0EB
Coral: #E8503A
```

## Dipendenze

```bash
ffmpeg -version   # verifica installazione
# Se mancante: winget install ffmpeg
```
