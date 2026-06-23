import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 15000 })

// Forza visibilità di tutto (bypassa framer-motion opacity:0)
await page.evaluate(() => {
  const style = document.createElement('style')
  style.textContent = `* { animation-play-state: running !important; transition-duration: 0s !important; }`
  document.head.appendChild(style)
  // Rende visibili tutti gli elementi con opacity 0 iniettati da Framer Motion
  document.querySelectorAll('[style]').forEach(el => {
    const s = el.style
    if (s.opacity === '0') s.opacity = '1'
    if (s.transform && s.transform.includes('translate')) s.transform = 'none'
  })
})
await new Promise(r => setTimeout(r, 800))

await page.screenshot({ path: 'screenshot-full2.png', fullPage: true })
console.log('screenshot ok')
await browser.close()
