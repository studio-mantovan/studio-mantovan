---
name: carosello-feed
description: Usa questa skill ogni volta che devi creare un carosello Instagram per il feed (formato 1:1, 1080×1080px). Triggera quando l'utente menziona: carosello feed, slide Instagram, post carosello, formato quadrato, 1:1. Output: HTML + PNG esportati via Playwright.
---

# SKILL: Carosello Instagram Feed (1080×1080)

## Scopo

Genera caroselli Instagram in formato 1:1 (1080×1080px) per feed e Meta Ads (placement Feed). Output: file HTML + PNG esportati via Playwright.

## Stack tecnico

- HTML/CSS per il layout delle slide
- Playwright (Python, `sync_api`) per l'export PNG
- Pillow per verifica dimensioni
- Font: Google Fonts — Fraunces (serif, per quote) + Archivo (sans, per tutto il resto)

## Palette colori ufficiale (NON modificare)

```
--cream:      #F5F0EB   → sfondo slide (cream caldo)
--cream-2:    #FBF8F4   → sfondo alternativo / testo su scuro
--blue:       #1A9EC9   → colore primario (quote, link, button)
--blue-soft:  #8FCBDE   → progress bar vuota
--green:      #5DBFB0   → mint, progress bar "now"
--green-deep: #3A8C7F   → eyebrow, dettagli
--coral:      #E8503A   → accento, CTA, accent-line
--ink:        #1F3A40   → testo body, sfondo slide CTA
```

## Struttura HTML base

```html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Carosello — [TITOLO]</title>
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

  *{ box-sizing: border-box; }

  body{
    margin: 0;
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

  /* Ogni slide è 1080×1080, scalata a 0.5 per anteprima */
  .slide{
    width: 1080px;
    height: 1080px;
    background: var(--cream);
    position: relative;
    padding: 84px;
    color: var(--ink);
    overflow: hidden;
    flex-shrink: 0;
    transform: scale(0.5);
    transform-origin: top center;
    margin-bottom: -540px;
  }

  /* Progress bar */
  .progress{
    display: flex;
    gap: 10px;
    margin-bottom: 56px;
  }
  .progress span{
    flex: 1; height: 10px; border-radius: 6px;
    background: transparent;
    border: 2px solid var(--blue-soft);
  }
  .progress span.done{ background: var(--blue); border-color: var(--blue); }
  .progress span.now{ background: var(--green); border-color: var(--green); }

  /* Accent line coral sopra l'eyebrow */
  .accent-line{
    width: 64px; height: 5px;
    background: var(--coral);
    border-radius: 3px;
    margin-bottom: 24px;
  }

  /* Eyebrow label */
  .eyebrow{
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--green-deep);
    margin-bottom: 28px;
  }

  /* Quote principale (Fraunces serif) */
  .quote{
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 78px;
    line-height: 1.28;
    color: var(--blue);
    max-width: 880px;
    margin: 0;
  }
  .quote.small{ font-size: 64px; max-width: 760px; }
  .quote.xsmall{ font-size: 52px; max-width: 800px; }

  /* Body text */
  .body-text{
    font-size: 36px;
    line-height: 1.65;
    color: var(--ink);
    max-width: 820px;
    margin-top: 40px;
  }
  .body-text strong{ color: var(--blue); }

  /* Steplist */
  .steplist{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .steplist-item{ display: flex; gap: 28px; align-items: flex-start; }
  .steplist-num{
    font-family: 'Fraunces', serif;
    font-size: 44px;
    font-weight: 600;
    color: var(--green-deep);
    line-height: 1.4;
  }
  .steplist-text{ font-size: 36px; line-height: 1.5; max-width: 700px; }

  /* Footer brand */
  .footer{
    position: absolute;
    bottom: 84px; left: 84px; right: 84px;
  }
  .brand{
    font-size: 22px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--blue);
  }

  /* Layout 2 colonne (slide 1) */
  .slide-1-inner{
    display: flex;
    gap: 0;
    height: calc(1080px - 84px - 84px - 56px - 20px);
    align-items: stretch;
  }
  .slide-1-left{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 48px;
  }
  .slide-1-right{
    width: 340px;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 20px 44px rgba(31,58,64,0.18);
    flex-shrink: 0;
    position: relative;
  }
  .slide-1-right img{
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
    display: block;
  }

  /* Foto wide in basso */
  .portrait-full{
    position: absolute;
    left: 84px; right: 84px; bottom: 84px;
    height: 460px;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 20px 44px rgba(31,58,64,0.18);
  }
  .portrait-full img{
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: 50% 25%;
    display: block;
  }

  /* Tag nome sul ritratto */
  .portrait-tag{
    position: absolute;
    right: 28px; bottom: 24px;
    background: var(--coral);
    color: var(--cream-2);
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding: 12px 24px;
    border-radius: 100px;
    box-shadow: 0 8px 18px rgba(232,80,58,0.35);
  }

  /* Slide CTA */
  .slide.cta{ background: var(--ink); color: var(--cream-2); }
  .slide.cta .progress span{ border-color: rgba(251,248,244,0.35); }
  .slide.cta .progress span.done,
  .slide.cta .progress span.now{ background: var(--green); border-color: var(--green); }
  .slide.cta .quote{ color: var(--cream-2); }
  .slide.cta .body-text{ color: rgba(251,248,244,0.85); }
  .slide.cta .brand{ color: var(--cream-2); }

  /* Pulsante CTA */
  .cta-button{
    margin-top: 56px;
    display: inline-flex;
    align-items: center;
    background: var(--blue);
    color: var(--cream-2);
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 34px;
    padding: 28px 52px;
    border-radius: 100px;
    width: fit-content;
  }
</style>
</head>
<body>

<!-- SLIDE 1 — layout 2 colonne -->
<div class="label">Slide 1 / N — Hook</div>
<div class="slide">
  <div class="progress">
    <span class="now"></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="slide-1-inner">
    <div class="slide-1-left">
      <div class="accent-line"></div>
      <p class="eyebrow">[EYEBROW]</p>
      <p class="quote" style="font-size:66px;">[HOOK PRINCIPALE]</p>
      <p class="body-text"><strong style="color:var(--coral);">[SOTTOTITOLO HOOK]</strong></p>
    </div>
    <div class="slide-1-right">
      <img src="[FOTO].jpg" alt="[ALT]">
      <div class="portrait-tag">Umberto Mantovan · Fisioterapista</div>
    </div>
  </div>
</div>

<!-- SLIDE 2-N — contenuto standard -->
<div class="label">Slide 2 / N — [TITOLO]</div>
<div class="slide">
  <div class="progress">
    <span class="done"></span><span class="now"></span><span></span><span></span><span></span>
  </div>
  <div class="accent-line"></div>
  <p class="eyebrow">[EYEBROW]</p>
  <p class="quote small">[QUOTE PRINCIPALE]</p>
  <p class="body-text">[TESTO CORPO]</p>
  <div class="footer">
    <div class="brand">Studio Mantovan · Fisioterapia a Broni</div>
  </div>
</div>

<!-- SLIDE FINALE — CTA -->
<div class="label">Slide N / N — CTA</div>
<div class="slide cta">
  <div class="progress">
    <span class="done"></span><span class="done"></span><span class="done"></span><span class="done"></span><span class="now"></span>
  </div>
  <div class="accent-line" style="background: var(--coral);"></div>
  <p class="eyebrow" style="color: var(--green);">[EYEBROW CTA]</p>
  <p class="quote small">[QUOTE CTA]</p>
  <p class="body-text" style="margin-top: 32px;">[TESTO CTA]</p>
  <div class="cta-button">[TESTO PULSANTE] →</div>
</div>

</body>
</html>
```

## Regole di layout

### Progress bar
- Segmenti = numero totale slide del carosello (5 o 6)
- Slide corrente: `class="now"` (verde mint)
- Slide precedenti: `class="done"` (blue teal)
- Slide future: vuote (trasparenti con bordo blue-soft)

### Slide 1 — tre varianti di layout
1. **Due colonne** (testo sinistra + ritratto verticale destra) — usare `.slide-1-inner`
2. **Foto wide in basso** (testo sopra + `.portrait-full` in basso) — foto occupa 460px in fondo
3. **Foto top** (riquadro wide sopra, testo sotto) — `div.portrait-top` con `height:480px`

### Slide 2-N (contenuto)
- Sempre: `accent-line` → `eyebrow` → `quote` → `body-text` → `footer`
- Il footer `.brand` è sempre `position: absolute; bottom: 84px`
- Verificare che body-text non si sovrapponga al footer
- Per liste: usare `.steplist` con `.steplist-item` + `.steplist-num`

### Slide CTA (ultima)
- Sfondo: `var(--ink)` scuro
- Nessun footer brand
- Solo: accent-line coral → eyebrow green → quote cream → body-text → cta-button

## Export PNG con Playwright

```python
from playwright.sync_api import sync_playwright
from PIL import Image
import os

def export_carosello(html_path: str, output_dir: str, n_slides: int):
    os.makedirs(output_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()

        # Export piena risoluzione 1080×1080
        page2 = browser.new_page(viewport={'width': 1200, 'height': 1200}, device_scale_factor=1)
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
            out_path = f'{output_dir}/slide_{i}.png'
            slide.screenshot(path=out_path)
            im = Image.open(out_path)
            assert im.size == (1080, 1080), f'Slide {i}: dimensioni errate {im.size}'
            print(f'✓ slide_{i}.png — 1080×1080')

        browser.close()

    print(f'\nExport completato: {n_slides} slide in {output_dir}/')
```

## Regole copy (CFT / biopsicosociale)

- MAI implicare movimenti "sbagliati" o "corretti"
- MAI promesse di guarigione garantita o tempi specifici per il singolo paziente
- MAI framing passivo ("ricevere terapie") — sempre paziente protagonista
- Usare prima persona (io, fisioterapista) e seconda persona diretta (tu, il tuo caso)
- "Attività che contano per te" come obiettivo finale
- CTA standard: "Prenota la prima visita gratuita →" oppure "Scrivimi →"
- Brand footer: sempre `Studio Mantovan · Fisioterapia a Broni`
- Tag ritratto: sempre `Umberto Mantovan · Fisioterapista`

## Checklist pre-consegna

- [ ] Tutte le slide sono 1080×1080px
- [ ] Nessun testo sovrapposto al footer brand
- [ ] Progress bar aggiornata slide per slide
- [ ] Accent-line coral presente su ogni slide
- [ ] Slide CTA: sfondo ink, no footer, cta-button blue
- [ ] Copy rispetta le regole CFT
- [ ] File HTML + PNG nella stessa cartella
