---
tags: [instagram, carosello, social, design, strategia]
fonte: @brock11johnson (Instagram) — serie "Carousel's Don't Have..." + "Carousel Framework"
data: 2026-07-09
correlati: [[content-rules-v2]] · [[carosello-feed]] · [[carosello-stories]] · [[strategia-contenuti-social]]
---

# Anatomia del Carosello Instagram

Riferimento operativo ricavato dagli screenshot della serie di @brock11johnson. Integra e supera le regole di formato precedenti dove in conflitto.

---

## 1. Formato ottimale — dimensioni

| Formato | Dimensioni | Indicazione |
|---|---|---|
| **3:4** | 1080×1440 | ✅ IL MIGLIORE — massima visibilità nel feed |
| **4:5** | 1080×1350 | ⚠️ Usalo se boosti a pagamento |
| **1:1** | 1080×1080 | ❌ Non pubblicarlo |

**Aggiornamento SKILL [[carosello-feed]]:** il template esistente è 1:1. Per nuove produzioni usare 3:4. Il file HTML `carosello-34.html` nel primo carosello prodotto (sciatalgia) è il riferimento di template per il formato 3:4.

---

## 2. Safe zone (per caroselli con musica → appaiono nelle Reels)

Quando un carosello ha musica associata, Instagram lo mostra anche nel tab Reels. In quel contesto la cover viene ritagliata secondo la safe zone:

- **180px** top e bottom
- **50px** sinistra
- **120px** destra

Nessun testo o elemento importante deve uscire da questi margini sulla slide 1.

> Nota pratica: per caroselli educativi senza musica la safe zone è meno critica. Tenerla a mente se si aggiunge audio in fase di pubblicazione.

---

## 3. Dimensioni font minime

| Elemento | Minimo consigliato |
|---|---|
| Headline | 50pt (su 1080px → ≥ 60px) |
| Body copy | 14pt (su 1080px → ≥ 36px) |

Font più piccoli fanno smettere di leggere. Il template attuale rispetta già questi minimi.

---

## 4. Struttura narrativa — anatomia delle slide

Fonte: slide 6–10/11 della serie "The Carousel Anatomy"

| Posizione | Nome | Funzione |
|---|---|---|
| Slide 1 | **THE HOOK** | Ferma lo scroll. Nessun testo di contesto — solo impatto visivo o frase forte. |
| Slide 2 | **THE TRANSITION** | Risponde a: cosa guadagna l'utente? / cosa evita? / perché sei qualificato? |
| Slide 3–7 | **THE TEASE** | Rivela informazioni bit by bit. Usa esempi, statistiche, visual. Non svelare tutto subito — ogni slide deve spingere a swipare. |
| Slide 8–9 | **THE CLIMAX** | L'"aha moment": il grande reveal, la lezione, la frase quotable, l'insight pratico. |
| Slide 10 | **THE ACTION** | CTA chiara. Rendi il passo successivo ovvio. |

### Framework 10 slide (visione d'insieme)

```
1          → Stop the scroll / hook
2–3        → Build interest with an example
4–5        → Retain attention
6–9        → Practical information + diagrams
10         → Simple CTA
```

> Per caroselli più corti (6–7 slide) comprimere: hook → transition → 2–3 tease → climax → action.

---

## 5. Cinque formati di contenuto

| # | Formato | Template narrativo | Esempio sanitario |
|---|---|---|---|
| 1 | **Comparison** | X vs Y — cosa cambia davvero | "Fisioterapia passiva vs attiva" |
| 2 | **Tutorial** | Come fare X in N passi | "Come capire se il tuo dolore è sciatalgia" |
| 3 | **Native** | Ho fatto X — ecco cosa ho imparato | "Ho trattato 200 pazienti con mal di schiena" |
| 4 | **Compilation** | Guida completa su X | "Tutto sulla sciatalgia nel 2026" |
| 5 | **Story** | Quando X è successo — ecco cosa è venuto dopo | "Un paziente stava smettendo di camminare. Ecco cosa è successo." |

---

## 6. Regola engagement — cosa chiedere nella CTA

> Posts that ask for **Shares** get more Shares.
> Posts that ask for **Comments** get more Comments.
> Posts that ask for **Saves** get more Saves.
> **Posts that ask for Likes get FEWER Likes.**

**Applicazione pratica:**
- Nella slide finale o nella caption: chiedere salvataggi o commenti, **mai like**.
- Formula testata: *"Salva questo post — ti servirà rileggerlo."* (discreta, sotto il pulsante CTA)
- In caption: *"Se ti è utile, salvalo per rileggerlo quando ne hai bisogno."*

---

## 7. Applicazione al template [[carosello-feed]]

Il file `carosello-34.html` prodotto per il carosello sciatalgia (luglio 2026) è il primo template in formato 3:4. Dimensioni chiave per la preview Puppeteer:

```css
.slide {
  width: 1080px;
  height: 1440px;
  transform: scale(0.4);
  transform-origin: top center;
  margin-bottom: -864px; /* -(1440 × 0.6) */
}
```

Export: `_export_34.js` nella stessa cartella del carosello — usa Puppeteer con `viewport: { width: 1200, height: 1600 }`.

---

## Riferimenti produzione

- Primo carosello prodotto in 3:4: `content/caroselli/2026-07-sciatalgia-quanto-dura/` [[sciatalgia-quanto-dura]]
- Regole copy: [[content-rules-v2]], [[voice-style]]
- Regole cliniche: [[clinical-philosophy]]
- Template feed precedente (1:1): [[carosello-feed]]
