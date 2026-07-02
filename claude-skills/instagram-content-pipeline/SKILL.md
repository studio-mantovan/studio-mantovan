---
name: instagram-content-pipeline
description: Usa questa skill ogni volta che vuoi creare contenuto Instagram completo partendo da zero — dal testo fino al video Reel — in un unico flusso. Triggera quando l'utente dice: crea tutto, pipeline completa, dalla slide al reel, crea il contenuto per instagram, genera carosello e reel, workflow completo instagram, fai tutto. Orchestra le tre skill in sequenza: carosello-feed → square-to-reel → reel-animator.
---

# Instagram Content Pipeline

Pipeline completa in 3 fasi per creare contenuto Instagram professionale partendo da contenuto testuale o immagini esistenti.

```
[Contenuto / Testo]
       │
       ▼
  ┌─────────────────────┐
  │  1. carosello-feed  │  → PNG 1:1 (1080×1080)
  │                     │     5 slide branded
  └─────────────────────┘
       │
       ▼
  ┌─────────────────────┐
  │  2. square-to-reel  │  → PNG 9:16 (1080×1920)
  │                     │     sfondo blur/gradient
  └─────────────────────┘
       │
       ▼
  ┌─────────────────────┐
  │  3. reel-animator   │  → MP4 finale
  │                     │     Ken Burns + transizioni
  └─────────────────────┘
       │
       ▼
  [Feed: 5 PNG 1:1]  +  [Reel: 1 MP4 9:16]
```

## Modalità di utilizzo

- **Modalità A** — Pipeline completa (da contenuto): l'utente fornisce argomento e testo → Claude esegue tutte e tre le fasi
- **Modalità B** — Da PNG 1:1 esistenti: esegui solo fasi 2 e 3
- **Modalità C** — Da PNG 9:16 già pronti: esegui solo fase 3

## Parametri globali

```yaml
# Fase 1 — Carosello
topic: "lombalgia cronica"
slides_data: [...]

# Fase 2 — Conversione 9:16
background: "blur"       # blur | gradient_teal | gradient_dark | brand_cream
padding: 40

# Fase 3 — Animazione
animation: "ken_burns_alt"
transition: "fade"
duration_per_slide: 3.5
music: null
```

## Workflow di esecuzione

1. Identifica la modalità (A, B o C) in base agli input
2. **Fase 1** (se modalità A): leggi `claude-skills/carosello-feed/SKILL.md`, genera i PNG 1:1
3. **Fase 2**: leggi `claude-skills/square-to-reel/SKILL.md`, converti in 9:16
4. **Fase 3**: leggi `claude-skills/reel-animator/SKILL.md`, genera il video MP4
5. Report finale con file prodotti e prossimi step (upload, didascalia, ecc.)

## Output finale atteso

```
output/
├── carousel/
│   ├── slide_01.png    (1080×1080)
│   ├── slide_02.png
│   ├── slide_03.png
│   ├── slide_04.png
│   └── slide_05.png
├── reel_frames/        (intermedi, eliminabili)
│   ├── frame_01.png    (1080×1920)
│   └── ...
└── reel_output.mp4     ← Reel pronto per upload
```

## Dipendenze

- **Node.js + Playwright** — generazione PNG slide (fase 1)
- **FFmpeg** — conversione 9:16 e animazione (fasi 2 e 3)
- **Python 3** — script di orchestrazione
- **Pillow** — verifica dimensioni

```bash
node --version
ffmpeg -version
python --version
```

## Skill di riferimento per ogni fase

- Fase 1 → `claude-skills/carosello-feed/SKILL.md`
- Fase 2 → `claude-skills/square-to-reel/SKILL.md`
- Fase 3 → `claude-skills/reel-animator/SKILL.md`
