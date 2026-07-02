---
name: carosello-stories
description: Usa questa skill ogni volta che devi creare slide per Instagram Stories, Reels o Meta Ads (placement Stories/Reels) in formato 9:16 (1080×1920px). Triggera quando l'utente menziona: stories, story, reel, formato verticale, 9:16, slide per reel. Output: HTML + PNG esportati via Playwright.
---

# SKILL: Carosello Instagram Stories / Reels (1080×1920)

## Scopo

Genera slide per Instagram Stories, Reels e Meta Ads (placement Stories/Reels) in formato 9:16 (1080×1920px). Output: file HTML + PNG esportati via Playwright. Stesso brand identity del carosello feed — solo il formato e il layout cambiano.

## Stack tecnico

- HTML/CSS per il layout delle slide
- Playwright (Python, `sync_api`) per l'export PNG
- Pillow per verifica dimensioni
- Font: Google Fonts — Fraunces (serif) + Archivo (sans)

## Palette colori (identica al feed — NON modificare)

```
--cream:      #F5F0EB
--cream-2:    #FBF8F4
--blue:       #1A9EC9
--blue-soft:  #8FCBDE
--green:      #5DBFB0
--green-deep: #3A8C7F
--coral:      #E8503A
--ink:        #1F3A40
```

## Zone sicure Instagram (RISPETTARE SEMPRE)

```
Top:    160px — coperto da notch + progress Stories di Instagram
Bottom: 200px — coperto da barra gesture + UI Instagram
Lati:   90px  — margine laterale minimo
```

## Struttura HTML base

```html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Stories — [TITOLO]</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Archivo:wght@400;500;600;700&display=swap');

  :root{
    --cream: #F5F0EB;
    --cream-2: #FBF8F4;
    --blue: #1A9EC9;
    --blue-soft: #8FCBDE;
    --green: #5DBFB0;
    --green-deep: #3A8C7F;
    --coral: #E8503A;
    --ink: #1F3A40;
  }

  *{ box-sizing: border-box; margin: 0; padding: 0; }

  body{
    background: #E0DAD0;
    font-family: 'Archivo', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding: 48px 0 120px;
  }

  .label{
    font-size: 14px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8a8676;
    font-weight: 600;
  }

  /* Slide 9:16 — scalata a 0.3 per anteprima */
  .slide{
    width: 1080px;
    height: 1920px;
    background: var(--cream);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    transform: scale(0.3);
    transform-origin: top center;
    margin-bottom: -1344px;
  }

  /* Progress bar */
  .progress{
    position: absolute;
    top: 72px; left: 80px; right: 80px;
    display: flex; gap: 12px;
    z-index: 10;
  }
  .progress span{
    flex: 1; height: 8px; border-radius: 4px;
    background: rgba(31,58,64,0.18);
  }
  .progress span.done{ background: var(--blue); }
  .progress span.now{ background: var(--green); }

  /* Area contenuto — rispetta safe zone */
  .content{
    position: absolute;
    top: 155px; bottom: 0; left: 0; right: 0;
    padding: 64px 90px 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Brand header */
  .brand-row{
    display: flex; align-items: center; gap: 18px;
    margin-bottom: 52px;
  }
  .brand-dot{
    width: 16px; height: 16px;
    border-radius: 50%; background: var(--coral);
  }
  .brand-name{
    font-size: 30px; font-weight: 700;
    letter-spacing: 0.10em; text-transform: uppercase;
    color: var(--ink);
  }

  .accent-line{
    width: 80px; height: 7px;
    background: var(--coral); border-radius: 4px;
    margin-bottom: 40px;
  }

  .eyebrow{
    font-size: 32px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--green-deep);
  }

  .quote{
    font-family: 'Fraunces', serif;
    font-weight: 500;
    line-height: 1.22;
    color: var(--blue);
    margin-bottom: 56px;
  }

  .body-text{
    font-size: 52px;
    line-height: 1.55;
    color: var(--ink);
    margin-bottom: 36px;
  }
  .body-text:last-of-type{ margin-bottom: 0; }
  .body-text strong{ color: var(--blue); }

  /* Slide 1 — full bleed */
  .slide-1-bg{ position: absolute; inset: 0; }
  .slide-1-bg img{
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: 50% 18%;
    display: block;
  }
  .slide-1-overlay{
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(31,58,64,0.10) 0%,
      rgba(31,58,64,0.04) 30%,
      rgba(31,58,64,0.55) 58%,
      rgba(31,58,64,0.93) 100%
    );
    z-index: 1;
  }
  .slide-1-text{
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 2;
    padding: 0 90px 210px;
    display: flex; flex-direction: column; gap: 36px;
  }
  .slide-1-tag{
    display: inline-flex; align-items: center;
    background: var(--coral); color: var(--cream-2);
    font-weight: 700; font-size: 28px;
    padding: 14px 32px; border-radius: 100px;
    width: fit-content;
    box-shadow: 0 8px 24px rgba(232,80,58,0.4);
  }

  /* CTA slide */
  .slide.cta{ background: var(--ink); }
  .slide.cta .progress span{ background: rgba(251,248,244,0.22); }
  .slide.cta .progress span.done,
  .slide.cta .progress span.now{ background: var(--green); }
  .slide.cta .eyebrow{ color: var(--green); }
  .slide.cta .quote{ color: var(--cream-2); }
  .slide.cta .body-text{ color: rgba(251,248,244,0.88); }
  .slide.cta .brand-name{ color: rgba(251,248,244,0.65); }

  .cta-button{
    margin-top: 64px;
    display: inline-flex; align-items: center;
    background: var(--blue); color: var(--cream-2);
    font-weight: 700; font-size: 48px;
    padding: 42px 76px; border-radius: 100px;
    width: fit-content;
  }

  .swipe-hint{
    position: absolute; bottom: 96px;
    left: 50%; transform: translateX(-50%);
    font-size: 26px; color: rgba(251,248,244,0.38);
    letter-spacing: 0.14em; text-transform: uppercase;
    font-weight: 600; white-space: nowrap;
  }
</style>
</head>
<body>

<!-- STORY 1 — HOOK (full bleed con overlay) -->
<div class="label">Story 1 / N — Hook</div>
<div class="slide">
  <div class="progress">
    <span class="now"></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="slide-1-bg">
    <img src="[FOTO].jpg" alt="[ALT]">
  </div>
  <div class="slide-1-overlay"></div>
  <div class="slide-1-text">
    <div class="slide-1-tag">Umberto Mantovan — Fisioterapista</div>
    <p style="font-family:'Fraunces',serif; font-size:92px; line-height:1.22; color:var(--cream-2); font-weight:500;">[HOOK PRINCIPALE]</p>
    <p style="font-size:54px; line-height:1.5; color:var(--cream-2); font-weight:600;">[INTRO] <span style="color:var(--coral); font-weight:700;">[PUNTO CHIAVE IN CORAL]</span></p>
  </div>
</div>

<!-- STORY 2-N — contenuto -->
<div class="label">Story 2 / N — [TITOLO]</div>
<div class="slide">
  <div class="progress">
    <span class="done"></span><span class="now"></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="content">
    <div>
      <div class="brand-row">
        <div class="brand-dot"></div>
        <div class="brand-name">Studio Mantovan · Fisioterapia a Broni</div>
      </div>
      <div class="accent-line"></div>
      <p class="eyebrow">[EYEBROW]</p>
    </div>
    <div>
      <p class="quote" style="font-size:110px;">[QUOTE PRINCIPALE]</p>
      <p class="body-text">[TESTO CORPO 1]</p>
      <p class="body-text" style="margin-top:44px;">[TESTO CORPO 2]</p>
    </div>
  </div>
</div>

<!-- STORY FINALE — CTA -->
<div class="label">Story N / N — CTA</div>
<div class="slide cta">
  <div class="progress">
    <span class="done"></span><span class="done"></span><span class="done"></span><span class="done"></span><span class="done"></span><span class="now"></span>
  </div>
  <div class="content">
    <div>
      <div class="brand-row">
        <div class="brand-dot"></div>
        <div class="brand-name">Studio Mantovan · Fisioterapia a Broni</div>
      </div>
      <div class="accent-line" style="background:var(--coral);"></div>
      <p class="eyebrow">[EYEBROW CTA]</p>
    </div>
    <div>
      <p class="quote" style="font-size:100px;">[QUOTE CTA]</p>
      <p class="body-text">[TESTO CTA]</p>
      <div class="cta-button">[TESTO PULSANTE] →</div>
    </div>
  </div>
  <div class="swipe-hint">↑ Scorri su per scrivere</div>
</div>

</body>
</html>
```

## Regole di layout stories

### Slide 1 — sempre full bleed
- La foto occupa tutta la slide (1080×1920), niente bordi o padding
- Overlay degradante dal basso: trasparente in alto → `rgba(31,58,64,0.93)` in fondo
- Testo sovrapposto: `position: absolute; bottom: 0; padding-bottom: 210px`
- Tag nome: pill coral in basso, poi quote grande bianca, poi sottotitolo
- Regolare `object-position` sulla foto per centrare il volto

### Slide 2-N — layout space-between
- Il `.content` usa `justify-content: space-between`
- Blocco top: brand-row + accent-line + eyebrow
- Blocco bottom: quote + body-text

### Dimensioni font — FONDAMENTALE

```
quote principale:  100-130px
body-text:         52-64px
eyebrow:           32px
brand-name:        30px
cta-button:        48px
```

Se il testo è corto, aumentare il font. MAI scendere sotto i minimi.

### CTA slide
- Sfondo: `var(--ink)` scuro
- Aggiungere `.swipe-hint` con "↑ Scorri su per scrivere" a `bottom: 96px`

## Export PNG con Playwright

```python
from playwright.sync_api import sync_playwright
from PIL import Image
import os

def export_stories(html_path: str, output_dir: str):
    os.makedirs(output_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()

        page2 = browser.new_page(
            viewport={'width': 1080, 'height': 1920},
            device_scale_factor=1
        )
        page2.goto(f'file://{os.path.abspath(html_path)}')
        page2.wait_for_timeout(800)
        page2.evaluate('''
            document.querySelectorAll('.slide').forEach(s => {
                s.style.transform = 'scale(1)';
                s.style.marginBottom = '0px';
            });
            document.body.style.gap = '20px';
        ''')
        page2.wait_for_timeout(300)
        slides2 = page2.query_selector_all('.slide')
        for i, slide in enumerate(slides2, 1):
            out_path = f'{output_dir}/story_{i}.png'
            slide.screenshot(path=out_path)
            im = Image.open(out_path)
            assert im.size == (1080, 1920), f'Story {i}: dimensioni errate {im.size}'
            print(f'✓ story_{i}.png — 1080×1920')

        browser.close()

    print(f'\nExport completato in {output_dir}/')
```

## Regole copy (identiche al feed)

- MAI movimenti "sbagliati" o "corretti"
- MAI promesse di guarigione o tempi specifici per il singolo paziente
- Prima persona (fisioterapista) + seconda persona diretta (paziente)
- CTA: "Scrivimi →" (Stories) oppure "Prenota la prima visita gratuita →"
- Brand: `Studio Mantovan · Fisioterapia a Broni`
- Tag foto: `Umberto Mantovan — Fisioterapista`

## Checklist pre-consegna

- [ ] Tutte le slide sono 1080×1920px
- [ ] Slide 1: foto full bleed, overlay degradante, testo leggibile su sfondo scuro
- [ ] Slide 2-N: blocco top e blocco bottom distribuiti con space-between
- [ ] Font ≥52px per body-text, ≥100px per quote principali
- [ ] Safe zone rispettata (top 160px, bottom 200px)
- [ ] Progress bar visibile su ogni slide
- [ ] Swipe hint nella slide CTA finale
- [ ] Copy rispetta le regole CFT
- [ ] File HTML + foto nella stessa cartella
