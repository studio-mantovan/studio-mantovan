# SKILL: Carousel Export PNG per Meta Ads

## Quando usare questa skill

Usa questa skill ogni volta che Umberto dice una di queste frasi (o simili):

* "ok, esportami il carousel"
* "preparami i PNG"
* "è tutto ok, mandami i file"
* "procedi con l'export"
* "mandami le card"

Non aspettare ulteriori istruzioni: quando arriva l'ok finale sul carousel, esegui automaticamente questa skill.

## Requisiti

* Node.js installato
* Puppeteer: se non presente, esegui `npm install puppeteer` nella cartella del progetto prima di procedere
* File HTML del carousel già generato e approvato

## Workflow export

### Step 1 — Identifica il file HTML

Cerca nella cartella di lavoro corrente il file HTML del carousel più recente. Priorità: cerca file con pattern `carousel-*.html` o `carosello-*.html`. Se ce ne sono più di uno, usa quello con timestamp più recente o chiedi conferma.

### Step 2 — Crea lo script di export

Genera uno script temporaneo `_export_temp.js` nella stessa cartella del file HTML con questo contenuto (sostituisci HTML_FILENAME con il nome del file trovato):

```javascript
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_FILE = path.resolve(__dirname, 'HTML_FILENAME');
const OUTPUT_DIR = path.resolve(__dirname, 'carousel-export');
const CARD_WIDTH = 340;
const CARD_GAP = 10;
const SCALE = 1080 / 340; // scala a 1080px (formato Meta Ads 1:1)

async function exportCards() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Viewport scalato per avere output 1080px
  await page.setViewport({
    width: Math.round((CARD_WIDTH + CARD_GAP) * 6 + 100),
    height: 500,
    deviceScaleFactor: SCALE,
  });

  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000)); // attendi font e immagini

  // Conta le card presenti
  const cardCount = await page.evaluate(() => document.querySelectorAll('.card').length);
  console.log(`Trovate ${cardCount} card`);

  const exported = [];

  for (let i = 0; i < cardCount; i++) {
    // Scorri alla card
    await page.evaluate((idx, w, g) => {
      document.getElementById('track').scrollLeft = idx * (w + g);
    }, i, CARD_WIDTH, CARD_GAP);
    await new Promise(r => setTimeout(r, 400));

    // Prendi le coordinate della card
    const box = await page.evaluate((idx) => {
      const card = document.querySelectorAll('.card')[idx];
      const r = card.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }, i);

    const filename = `card-${String(i + 1).padStart(2, '0')}.png`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    await page.screenshot({
      path: outputPath,
      clip: { x: box.x, y: box.y, width: box.width, height: box.height },
    });

    exported.push(outputPath);
    console.log(`✓ card-${String(i + 1).padStart(2, '0')}.png`);
  }

  await browser.close();
  console.log(`\nEXPORT_PATHS:${exported.join('|')}`);
}

exportCards().catch(console.error);
```

### Step 3 — Esegui lo script

```bash
node _export_temp.js
```

### Step 4 — Mostra i file in chat

Dopo l'esecuzione:

1. Leggi l'output per trovare la riga `EXPORT_PATHS:...`
2. Usa il tool `present_files` per mostrare ogni PNG in chat
3. Elimina il file temporaneo `_export_temp.js`
4. Comunica ad Umberto: "Ecco i [N] PNG pronti per Meta Ads — formato 1080×1080px."

### Step 5 — Cleanup

Elimina `_export_temp.js` dopo l'export.

## Formato output

* Dimensione: 1080×1080px (formato Meta Ads feed 1:1)
* Formato: PNG
* Nomi file: `card-01.png`, `card-02.png`, ecc.
* Cartella: `./carousel-export/` nella stessa directory del file HTML

## Note

* Se Puppeteer non è installato, installalo silenziosamente prima di procedere: `npm install puppeteer --save-dev`
* Se il file HTML non si trova, chiedi ad Umberto il percorso
* Non chiedere conferme intermedie: quando arriva l'ok, esegui tutto in autonomia
* In caso di errore, mostra il messaggio di errore e suggerisci la soluzione
