# SKILL: HTML → PNG per Meta Ads

## Quando usare questa skill

Usa questa skill ogni volta che Umberto:

- Manda o indica un file HTML di un carousel (es. "eccoti il file HTML", "converti questo in PNG", "esportami questo carousel")
- Dice frasi come "trasformalo in PNG", "esportami le card", "preparami i file per Meta"
- Passa un file HTML che contiene card con classe `.card`

Questa skill è pensata per file HTML generati in chat con Claude.ai e poi inoltrati a Claude Code.

---

## Workflow

### Step 1 — Ricevi e salva il file HTML

- Se Umberto incolla il percorso di un file già su disco: usalo direttamente
- Se Umberto manda il contenuto HTML come testo: salvalo in un file temporaneo `_carousel_temp.html` nella cartella di lavoro corrente (`C:\Users\umber\studio-mantovan\` o la cartella del progetto aperto)

### Step 2 — Verifica il file

Prima di procedere, apri il file e verifica:

- Che contenga elementi con classe `.card`
- Che contenga un elemento con id `track`

Se manca uno dei due, avvisa Umberto che il file potrebbe non essere un carousel compatibile e chiedi conferma prima di procedere.

### Step 3 — Installa Puppeteer se necessario

```bash
npm install puppeteer --save-dev
```

Esegui solo se `node_modules/puppeteer` non esiste già. Fallo silenziosamente senza chiedere conferma.

### Step 4 — Genera ed esegui lo script di export

Crea un file temporaneo `_html_to_png_temp.js` nella stessa cartella dell'HTML con questo contenuto (sostituisci HTML_FILEPATH con il percorso assoluto del file):

```javascript
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_FILE = 'HTML_FILEPATH';
const OUTPUT_DIR = path.join(path.dirname(HTML_FILE), 'carousel-export');
const CARD_WIDTH = 340;
const CARD_GAP = 10;
const SCALE = 1080 / 340;

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: Math.round((CARD_WIDTH + CARD_GAP) * 8 + 200),
    height: 600,
    deviceScaleFactor: SCALE,
  });

  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const cardCount = await page.evaluate(() =>
    document.querySelectorAll('.card').length
  );
  console.log(`Trovate ${cardCount} card`);

  const exported = [];

  for (let i = 0; i < cardCount; i++) {
    await page.evaluate((idx, w, g) => {
      const track = document.getElementById('track');
      if (track) track.scrollLeft = idx * (w + g);
    }, i, CARD_WIDTH, CARD_GAP);
    await new Promise(r => setTimeout(r, 400));

    const box = await page.evaluate((idx) => {
      const card = document.querySelectorAll('.card')[idx];
      if (!card) return null;
      const r = card.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }, i);

    if (!box) { console.log(`Card ${i} non trovata, salto`); continue; }

    const filename = `card-${String(i + 1).padStart(2, '0')}.png`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    await page.screenshot({
      path: outputPath,
      clip: { x: box.x, y: box.y, width: box.width, height: box.height },
    });

    exported.push(outputPath);
    console.log(`✓ ${filename}`);
  }

  await browser.close();
  console.log(`EXPORT_PATHS:${exported.join('|')}`);
}

run().catch(console.error);
```

Esegui lo script:

```bash
node _html_to_png_temp.js
```

### Step 5 — Mostra i PNG in chat

1. Leggi l'output e trova la riga `EXPORT_PATHS:...`
2. Usa `present_files` per mostrare ogni PNG in chat
3. Di' ad Umberto: "Ecco i [N] PNG pronti — 1080×1080px, formato Meta Ads."

### Step 6 — Cleanup

Elimina i file temporanei:

- `_html_to_png_temp.js`
- `_carousel_temp.html` (solo se era stato creato da testo incollato)

---

## Formato output

- Dimensione: 1080×1080px
- Formato: PNG
- Nomi: `card-01.png`, `card-02.png`, ecc.
- Cartella: `./carousel-export/` accanto al file HTML di origine

---

## Gestione errori

| Errore | Soluzione |
|---|---|
| `Cannot find module 'puppeteer'` | Esegui `npm install puppeteer` poi riprova |
| `card non trovata` | Il file HTML potrebbe avere struttura diversa — avvisa Umberto |
| File HTML non trovato | Chiedi ad Umberto di indicare il percorso corretto |
| Schermata nera | Aumenta il timeout da 2000 a 4000ms e riprova |

---

## Note importanti

- Non chiedere conferme: ricevuto l'HTML, esegui tutto in autonomia
- I file HTML generati da Claude.ai hanno sempre `.card` come classe delle card e `#track` come id del contenitore scorrevole — la skill è ottimizzata per questo formato
- Se il carousel ha card di dimensioni diverse da 340px, rileva la larghezza automaticamente dal primo elemento `.card` prima di generare lo script
