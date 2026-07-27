const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_FILE = path.resolve(__dirname, 'carosello-34.html');
const OUTPUT_DIR = path.resolve(__dirname, 'png-34');

async function exportSlides() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 });
  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2500));

  await page.evaluate(() => {
    document.querySelectorAll('.slide').forEach(s => {
      s.style.transform = 'none';
      s.style.marginBottom = '0';
    });
    document.body.style.gap = '0';
    document.body.style.padding = '0';
  });

  const handles = await page.$$('.slide');
  const exported = [];

  for (let i = 0; i < handles.length; i++) {
    const filename = `slide-${String(i + 1).padStart(2, '0')}.png`;
    const outputPath = path.join(OUTPUT_DIR, filename);
    await handles[i].screenshot({ path: outputPath });

    // verifica dimensioni
    const { width, height } = await handles[i].boundingBox();
    console.log(`✓ ${filename} — ${Math.round(width)}×${Math.round(height)}`);
    exported.push(outputPath);
  }

  await browser.close();
  console.log(`\nEXPORT_PATHS:${exported.join('|')}`);
}

exportSlides().catch(console.error);
