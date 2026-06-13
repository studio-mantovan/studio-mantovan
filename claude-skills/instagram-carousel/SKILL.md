---
name: instagram-carousel
description: >
  Usa questa skill ogni volta che devi creare un carosello Instagram per Studio Mantovan.
  Triggera quando l'utente menziona: carosello, carousel, slide Instagram, post Instagram,
  contenuto social, repurposing articolo, diapositive social, post educativo.
  Contiene struttura narrativa, regole di design, specifiche tecniche e workflow di produzione.
---
# Instagram Carousel — Skill Operativa
# Studio Mantovan – Fisioterapia in Movimento
Prima di scrivere codice o contenuti, interiorizza tutte le sezioni seguenti.
---
## 1. Obiettivo del carosello
Un carosello Instagram per Studio Mantovan ha tre scopi simultanei:
1. **Educare** — sfidare una credenza errata o spiegare un concetto clinico
2. **Costruire autorevolezza** — posizionare Umberto come fisioterapista esperto e affidabile
3. **Generare contatto** — ogni carosello deve concludersi con una CTA chiara
Il formato carosello è ideale perché:
- Aumenta il tempo di permanenza sul post (segnale positivo per l'algoritmo)
- Permette una narrazione progressiva (problema → analisi → soluzione)
- Può essere salvato e ricondiviso facilmente
---
## 2. Struttura narrativa standard
### Slide 1 — Hook (OBBLIGATORIA)
- Unica funzione: fermare lo scroll
- Deve contenere una **tensione narrativa** o **credenza da sfidare**
- Formato: affermazione provocatoria, domanda, statistica inaspettata
- Esempi efficaci:
  - "Il riposo non guarisce la sciatalgia."
  - "Perché il tuo mal di schiena non passa con il massaggio?"
  - "3 cose che i fisioterapisti NON ti dicono sul dolore cronico"
- Niente testo lungo. Massimo 8-10 parole.
- Visivamente: testo grande, occupazione 60-70% dello spazio
### Slide 2-3 — Problema/Contesto
- Identifica il problema che il paziente vive
- Usa linguaggio del paziente, non clinico
- Valida l'esperienza: "Molti pazienti mi dicono che..."
- Può includere mito da sfatare
### Slide 4-6 — Contenuto Educativo (corpo principale)
- Una informazione chiave per slide
- Regola: **un concetto = una slide**
- Linguaggio semplice, analogie concrete
- Se ci sono liste: massimo 3 punti per slide
- Puoi usare numeri progressivi (1/3, 2/3, 3/3)
### Slide 7-8 — Soluzione/Approccio
- Come Studio Mantovan affronta il problema
- Non descrivere tecniche: descrivi il risultato nella vita del paziente
- Frame: "Il mio approccio si basa su..."
- Rinforza i valori differenzianti: 1:1, evidence-based, attivo, personalizzato
### Slide finale (ultima) — CTA
- Una sola azione chiara
- Opzioni principali:
  - "Scrivimi su WhatsApp per la prima visita gratuita"
  - "Salva questo post e mandalo a chi potrebbe averne bisogno"
  - "Commenta con una domanda, rispondo a tutti"
- Includi sempre: nome studio, handle Instagram (@studio.mantovan)
---
## 3. Specifiche tecniche
### Formato file
- **Dimensioni**: 1080 × 1080 px (feed quadrato) — formato primario
- **Alternativa**: 1080 × 1350 px (portrait 4:5) — più spazio visivo nel feed
- **NON usare 16:9** per i caroselli (è per Reels/Stories)
- **Numero slide**: minimo 4, massimo 10. Ottimale: 6-8
- **Formato output**: HTML/CSS statico per ogni slide (poi screenshot o export)
### Palette colori Studio Mantovan
```css
--primary: #1A9EC9;      /* Teal principale */
--secondary: #5DBFB0;    /* Mint secondario */
--text-dark: #1a1a2e;    /* Testo primario */
--text-light: #ffffff;   /* Testo su sfondi scuri */
--bg-light: #f8fafb;     /* Sfondo chiaro */
--accent: #e8f7fa;       /* Sfondo accent leggero */
```
### Tipografia
- **Titoli/Hook**: font sans-serif bold, grande (min 48px equivalent)
- **Corpo testo**: font sans-serif regular, leggibile (min 24px equivalent)
- **Font web da usare in HTML**: Inter, o system-ui come fallback
- Gerarchia chiara: titolo >> sottotitolo >> corpo >> note piccole
### Layout per slide
- **Margini**: minimo 60px su tutti i lati
- **Safe area**: tutto il contenuto importante entro 80px dai bordi
- **Sfondo**: può variare tra slide (teal pieno, bianco, mint leggero) per varietà visiva
- **Logo/handle**: sempre visibile, discreto, in basso a destra o sinistra
---
## 4. Regole di copy e tono
Derivate dalla filosofia clinica e comunicativa di Studio Mantovan:
### MAI scrivere
- "movimenti sbagliati" o "movimenti giusti" — non esistono movimenti sbagliati in assoluto
- "abbassare il dolore" come unico obiettivo — l'obiettivo è tornare a fare ciò che conta
- "il massaggio risolve" o "la terapia passiva guarisce"
- Termini spaventosi: "ernia pericolosa", "nervo compromesso", "lesione grave"
- Promesse di guarigione rapida o garantita
### SEMPRE scrivere
- Prima persona: "il mio approccio", "lavoro con i miei pazienti"
- Focus su attività reali del paziente: "tornare a correre", "giocare con i tuoi figli", "stare seduto senza dolore"
- Credenze da sfidare: "contrariamente a quello che si pensa..."
- Evidence-based senza essere pedante: "la ricerca ci dice che..."
- Tono caldo, diretto, mai condescendente
### Lunghezza del testo per slide
- Hook: 5-10 parole
- Slide informative: 15-35 parole
- Slide con lista: 3 punti × max 8 parole ciascuno
- CTA finale: 10-15 parole + handle
---
## 5. Workflow di produzione con Claude Code
### Step 1 — Briefing
Claude Code riceve:
- Argomento/topic del carosello
- Eventuale articolo blog di partenza (per repurposing)
- Numero di slide desiderato
- Tono preferito (più educativo / più emozionale / più provocatorio)
### Step 2 — Struttura narrativa
Claude Code produce:
- Titolo hook (slide 1)
- Scaletta slide per slide con testo definitivo
- CTA finale
Umberto approva o modifica il copy PRIMA di passare al design.
### Step 3 — Generazione HTML/CSS
Claude Code genera un singolo file HTML con:
- Ogni slide come `<div class="slide slide-N">` con dimensioni fisse 1080×1080px
- Tutti gli stili inline o in `<style>` interno (niente file CSS esterni)
- Navigazione opzionale tra slide per preview
- Bottone "Stampa / Esporta" o istruzioni per screenshot
### Step 4 — Export
Per ottenere le immagini da caricare su Instagram:
- **Metodo A (raccomandato)**: aprire il file HTML in Chrome → DevTools → impostare viewport 1080×1080 → screenshot di ogni slide
- **Metodo B**: usare `html2canvas` o `puppeteer` via Claude Code per export automatico PNG
- **Metodo C**: copiare il design in Canva manualmente (meno efficiente)
---
## 6. Template HTML base
Usa questo template come punto di partenza per ogni carosello:
```html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Carosello — Studio Mantovan</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #e0e0e0;
    padding: 20px;
  }
  .slide {
    width: 1080px;
    height: 1080px;
    position: relative;
    overflow: hidden;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
  }
  .bg-primary   { background: #1A9EC9; color: #ffffff; }
  .bg-secondary { background: #5DBFB0; color: #ffffff; }
  .bg-white     { background: #ffffff; color: #1a1a2e; }
  .bg-light     { background: #f8fafb; color: #1a1a2e; }
  .bg-dark      { background: #1a1a2e; color: #ffffff; }
  .hook       { font-size: 72px; font-weight: 800; line-height: 1.1; }
  .title      { font-size: 52px; font-weight: 700; line-height: 1.2; margin-bottom: 24px; }
  .subtitle   { font-size: 36px; font-weight: 600; line-height: 1.3; margin-bottom: 20px; }
  .body-text  { font-size: 30px; font-weight: 400; line-height: 1.5; }
  .small-text { font-size: 22px; font-weight: 400; line-height: 1.4; opacity: 0.85; }
  .tag {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    border-radius: 40px;
    padding: 8px 24px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 32px;
  }
  .divider {
    width: 80px;
    height: 5px;
    background: currentColor;
    opacity: 0.4;
    margin: 24px 0;
    border-radius: 3px;
  }
  .list-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.4;
  }
  .list-number {
    min-width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
    flex-shrink: 0;
  }
  .brand {
    position: absolute;
    bottom: 40px;
    right: 60px;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.7;
  }
  .slide-counter {
    position: absolute;
    top: 40px;
    right: 60px;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.5;
  }
  .circle-deco {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
  }
</style>
</head>
<body>
  <!-- SLIDE 1 — HOOK -->
  <div class="slide bg-primary">
    <span class="tag">Fisioterapia</span>
    <p class="hook">Il riposo non guarisce la sciatalgia.</p>
    <div class="divider"></div>
    <p class="body-text">Ecco cosa funziona davvero →</p>
    <div class="brand">@studio.mantovan</div>
    <div class="circle-deco" style="width:400px;height:400px;bottom:-100px;right:-100px;"></div>
  </div>
  <!-- SLIDE 2 — PROBLEMA -->
  <div class="slide bg-white">
    <div class="slide-counter">2 / 7</div>
    <p class="subtitle" style="color:#1A9EC9;">Il problema</p>
    <h2 class="title">Molti pazienti aspettano che il dolore passi da solo.</h2>
    <div class="divider" style="background:#1A9EC9;opacity:1;"></div>
    <p class="body-text" style="color:#555;">Settimane a letto, stop allo sport, rinuncia alle attività. Poi il dolore torna, uguale o peggiore.</p>
    <div class="brand" style="color:#1A9EC9;">@studio.mantovan</div>
  </div>
  <!-- SLIDE 3-6: aggiungi le slide informative qui -->
  <!-- SLIDE FINALE — CTA -->
  <div class="slide bg-dark">
    <p class="subtitle" style="color:#5DBFB0;">Prima visita gratuita</p>
    <h2 class="title" style="color:#ffffff;">Inizia da qui.</h2>
    <div class="divider" style="background:#5DBFB0;opacity:1;"></div>
    <p class="body-text" style="color:rgba(255,255,255,0.85);">Scrivimi su WhatsApp. Valutiamo insieme cosa ti serve.</p>
    <div style="margin-top:40px;">
      <p style="font-size:28px;font-weight:700;color:#5DBFB0;">📲 351 924 2517</p>
    </div>
    <div class="brand" style="color:rgba(255,255,255,0.5);">@studio.mantovan</div>
    <div class="circle-deco" style="width:300px;height:300px;top:-80px;right:-80px;background:rgba(26,158,201,0.15);"></div>
  </div>
</body>
</html>
```
---
## 7. Temi visivi per variare
| Slide | Tema consigliato | Uso |
|-------|-----------------|-----|
| Hook (1) | `bg-primary` teal pieno | Massimo impatto visivo |
| Problema (2) | `bg-white` o `bg-light` | Respiro, leggibilità |
| Informativa (3-5) | Alternare `bg-light` e `bg-secondary` | Varietà senza perdere coerenza |
| Soluzione (6) | `bg-primary` o gradient | Momento di svolta |
| CTA (ultima) | `bg-dark` | Chiusura netta, memorabile |
---
## 8. Argomenti editoriali prioritari
1. **Lombalgia/LBP** — miti sul riposo, il ruolo del movimento, CFT
2. **Sciatalgia/ernia** — cosa significa davvero un'ernia, perché si guarisce
3. **Dolore cronico** — dolore ≠ danno, sistema nervoso sensibilizzato
4. **Fisioterapia post-operatoria** — quando iniziare, cosa aspettarsi
5. **Tendinopatie** — il carico progressivo come trattamento
6. **Cervicale** — postura, schermo, mal di testa
7. **Fisioterapia sportiva** — return to sport, prevenzione
8. **"Prima visita gratuita"** — perché Umberto la offre, cosa succede
---
## 9. Repurposing da articolo blog
1. Claude Code legge l'articolo completo
2. Identifica i **3-5 concetti chiave** più utili per il paziente
3. Costruisce la scaletta del carosello attorno a quei concetti
4. Il copy del carosello è **riscritto** per il formato social (più breve, più diretto)
5. NON copia frasi dall'articolo: il tono social è diverso da quello SEO
---
## 10. Checklist prima di consegnare le slide
- [ ] Slide 1: hook forte, max 10 parole, impatto visivo
- [ ] Ogni slide: un solo concetto chiave
- [ ] Nessuna slide con più di 40 parole di testo
- [ ] Palette colori rispettata (#1A9EC9, #5DBFB0, #1a1a2e)
- [ ] Handle @studio.mantovan presente in ogni slide
- [ ] CTA finale specifica e chiara
- [ ] Nessun termine che implica "movimenti sbagliati"
- [ ] Nessuna promessa di guarigione garantita
- [ ] Copy approvato da Umberto PRIMA dell'export finale
- [ ] Dimensioni: 1080×1080px per ogni slide
