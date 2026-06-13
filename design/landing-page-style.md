# Studio Mantovan — Linee Guida per Landing Page

*Correlati: [[copywriting-rules]] · [[tecniche-design]] · [[brand-colors]] · [[local-seo-landing-page]]*

---

## Identità visiva

**Studio:** Studio Mantovan – Fisioterapia in Movimento  
**Professionista:** Umberto Mantovan, fisioterapista  
**Approccio:** Cure 1:1 personalizzate, fisioterapia attiva basata su evidenze, prima visita gratuita  
**Pubblico:** Persone con dolore acuto/cronico, sportivi, pazienti post-operatori — non necessariamente esperti di salute

---

## Palette colori

| Nome | Ruolo | HEX | RGB | HSL |
|------|-------|-----|-----|-----|
| Blu Teal | Colore primario — CTA, titoli principali, elementi UI forti | `#1A9EC9` | `rgb(26, 158, 201)` | `hsl(197, 77%, 45%)` |
| Verde Menta | Colore secondario — accenti, badge, dettagli, highlights | `#5DBFB0` | `rgb(93, 191, 176)` | `hsl(173, 43%, 56%)` |
| Bianco caldo | Sfondi principali | `#FAFAF8` | — | — |
| Grigio testo | Testo corpo | `#2C2C2C` | — | — |
| Grigio chiaro | Sfondi sezioni alternate, separatori | `#F0F4F5` | — | — |

### Variabili CSS da usare sempre
```css
:root {
  --color-primary:    #1A9EC9;
  --color-secondary:  #5DBFB0;
  --color-bg:         #FAFAF8;
  --color-text:       #2C2C2C;
  --color-surface:    #F0F4F5;
  --color-primary-dark:   #147FA0;   /* hover su primary */
  --color-secondary-light: #7ED4C8;  /* tinte chiare secondario */
}
```

---

## Tipografia

### Font consigliati
- **Display / Titoli:** `Plus Jakarta Sans` (700, 800) — moderno, caldo, leggibile, non clinico
- **Corpo:** `Plus Jakarta Sans` (400, 500) o `DM Sans` — leggibile, amichevole
- **Alternativa serif per elementi di autorevolezza:** `Lora` in italic per citazioni/testimonianze

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Lora:ital@1&display=swap');

:root {
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;
  --font-quote:   'Lora', serif;
}
```

### Scala tipografica
| Elemento | Dimensione | Peso | Note |
|----------|-----------|------|------|
| H1 hero | 3rem–4rem | 800 | Max 10 parole |
| H2 sezione | 2rem–2.4rem | 700 | — |
| H3 card | 1.25rem | 700 | — |
| Corpo | 1rem–1.1rem | 400 | Line-height 1.7 |
| CTA button | 1rem | 700 | Uppercase, letter-spacing 0.05em |
| Label/badge | 0.8rem | 600 | Uppercase |

---

## Mood e tono visivo

**Rassicurante + Caldo + Umano.** Mai clinico, mai freddo, mai tecnico.

### Principi chiave
1. **Spazio bianco generoso** — respiro tra i blocchi, mai affollato
2. **Foto reali** prima delle illustrazioni — Umberto nello studio, il paziente che si muove, mani su una spalla (niente stock patinato)
3. **Tono diretto ma empatico** — headline che sfidano luoghi comuni (stile "Il riposo non guarisce la sciatalgia. Il movimento sì.")
4. **Blocchi chiari e separati** — una idea per sezione, niente pareti di testo
5. **Proof sociale prominente** — testimonianze con nome e problema risolto, non solo stelle

### Da evitare
- Azzurro/bianco stile ospedale → usare sempre warmth (beige, off-white, non bianco puro)
- Immagini di scheletri, spine, anatomia → trasmettono paura
- Gergo tecnico medico nella hero section
- Layout simmetrici rigidi → leggermente asimmetrici è più umano
- Troppi colori → massimo primary + secondary + neutri

---

## Layout e struttura landing page

### Struttura consigliata (ordine sezioni)
1. **Hero** — headline forte, sottotitolo, CTA primaria (WhatsApp/messaggio), foto reale
2. **Problema** — "Ti riconosci in questo?" — lista di situazioni (dolore cronico, post-op, ecc.)
3. **Soluzione / Metodo** — come lavora Umberto, cosa rende diverso lo studio
4. **Prova sociale** — testimonianze reali con nome + problema
5. **Per chi è** — target specifici (sportivi, lavoratori, ecc.)
6. **CTA centrale** — ripetere invito a contatto con urgenza morbida
7. **FAQ** — obiezioni più comuni
8. **CTA finale** — prima visita gratuita, contatti, mappa

### Griglia
```css
:root {
  --container-max: 1100px;
  --container-padding: 1.5rem;
  --section-padding: 5rem 0;
  --border-radius: 16px;
  --border-radius-sm: 8px;
}
```

---

## Componenti UI

### Bottone CTA primario
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.03em;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

### Badge / label
```css
.badge {
  background: color-mix(in srgb, var(--color-secondary) 15%, white);
  color: var(--color-primary);
  border-radius: 50px;
  padding: 0.3rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

### Card testimonianza
- Sfondo bianco su `--color-surface`
- Border-left 4px in `--color-secondary`
- Font corpo normale, nome in grassetto, font-quote in italic per la citazione
- Niente stelle anonime — nome + problema risolto

---

## Immagini

### Principi generali
- **Foto reali** dello studio e di Umberto al lavoro: priorità assoluta su qualsiasi stock
- **Stile:** naturale, luce morbida, non in posa — autenticità sopra la perfezione tecnica
- **Mix:** foto umane per sezioni emotive, icone lineari per sezioni informative
- **Formato:** WebP ottimizzato, `object-fit: cover`, aspect-ratio consistente per card
- **Trattamento colore consigliato:** lieve warm-up delle foto (temperatura +5/10, saturazione -5) per coerenza con la palette teal/menta ed evitare il look "clinico freddo"

### Catalogo foto disponibili

| ID | File | Soggetto | Uso consigliato | Punto di forza |
|----|------|----------|-----------------|----------------|
| F1 | `5a7ee4bc...jpg` | Umberto tratta la lombare di un paziente sul lettino — spalle di entrambi, spazio con scaletta svedese e palloni | Hero section, sezione "Come lavoro", ads trattamento manuale | Mostra il lavoro reale, dinamico, non patinato |
| F2 | `20250808_173953.jpg` | Sala d'attesa — sedie design, pianta, quadro colorato, ingresso con logo visibile sul vetro | Sezione "Lo studio", footer, Google My Business | Ambiente accogliente, non clinico, logo ben visibile |
| F3 | `20250808_172426.jpg` | Umberto alla scrivania, braccia conserte, sorriso — luce diffusa dalla finestra | Sezione "Chi sono", bio, about page | Espressione aperta e fiduciosa, molto umana |
| F4 | `20250808_173236.jpg` | Umberto alla scrivania nello studio teal — più contestualizzato, con diplomi/certificati sul muro | Sezione "Chi sono" alternativa, credibilità | Mostra l'ambiente di studio, trasmette competenza |
| F5 | `20250808_173744.jpg` | Sala trattamento vuota — lettino blu, scaletta svedese con elastici colorati, scrivania | Sezione "Lo studio", tour virtuale | Spazio pulito e attrezzato, colori in linea con brand |
| F6 | `PXL_20251223...jpg` | Umberto osserva un paziente fare deadlift con bilanciere — sala con power rack | Sezione "Fisioterapia sportiva / esercizio attivo", hero per sportivi | Unica nel settore fisioterapia — messaggio forte sull'approccio attivo |
| F7 | `af6c2864...jpg` | Umberto tratta il ginocchio di un paziente sul lettino — visione laterale nitida | Hero section alternativa, sezione trattamenti, ads dolore articolare | Mani sul ginocchio = immediato riconoscimento del problema da parte del paziente |

### Abbinamento sezioni → foto

| Sezione landing | Foto primaria | Foto secondaria |
|----------------|---------------|-----------------|
| Hero (dolore/riabilitazione) | F7 o F1 | — |
| Hero (sportivi/attivo) | F6 | F1 |
| Chi sono / About | F3 | F4 |
| Lo studio | F5 | F2 |
| Metodo / Esercizio attivo | F6 | F1 |
| Trattamento manuale | F7 | F1 |
| Sala d'attesa / Accoglienza | F2 | — |

### Note di post-produzione
- **F2 (sala attesa):** raddrizzare leggermente la prospettiva (ora un po' distorta dal grandangolo), crop per escludere l'angolo scuro a destra
- **F3 (ritratto scrivania):** ottima per hero "Chi sono" — se possibile rimuovere lo sfondo o aggiungere un leggero bokeh artificiale
- **F4 (ritratto studio teal):** la parete teal sullo sfondo è perfetta — si integra naturalmente con i colori del brand
- **F6 (deadlift):** foto potente e differenziante — usarla in posizione prominente per target sportivi; considerare un leggero contrasto boost

---

## Copy e messaggistica

- **Headline:** sfida il luogo comune → beneficio concreto → identità del paziente
  - Es: "Il riposo non guarisce la sciatalgia. Il movimento sì."
  - Es: "Non devi imparare a convivere col dolore."
- **CTA:** sempre azione + beneficio
  - "Prenota la prima visita gratuita"
  - "Scrivi su WhatsApp — rispondo entro 24h"
- **Tono:** diretto, caldo, senza paternalismi. Mai "noi offriamo", sempre "tu puoi"

---

---

## Approccio clinico — Lombalgia & Sciatalgia

*(Sezione di riferimento per copy, landing page e contenuti su questo tema)*

### Paziente tipo
Adulti di mezza età, qualsiasi lavoro (ufficio o fisico pesante). Dolore spesso presente da molto tempo, ma anche casi acuti recenti. Hanno già girato: tecar, terapie strumentali, focus sulla postura, approcci passivi. Arrivano stanchi di soluzioni che non durano.

### Cosa non funziona (e Umberto non fa)
- Terapie passive
- Focus sulla postura come causa principale
- Abbassare il dolore solo nel breve termine senza cambiare il movimento

### L'approccio di Umberto
- **Prima visita gratuita:** ascolto approfondito, obiettivi concreti del paziente, valutazione clinica
- **Piano su misura:** nessun pacchetto uguale per tutti — ogni percorso è costruito sugli obiettivi reali del paziente (tornare a correre, giocare con i figli, fare il proprio lavoro senza dolore)
- **Pochi esercizi, scelti come strumenti** per obiettivi reali — non una lista da eseguire meccanicamente
- **Neurodinamica:** mobilizzazione delle strutture nervose per migliorare la salute del nervo sciatico — spiegato al paziente come "movimenti che migliorano lo stato di salute del nervo"
- **Esposizione graduale:** mai terapie d'urto, il progresso è controllato e sostenibile
- **Approccio CFT (Sullivan):** lavoro sulle credenze e sull'evitamento del movimento insieme alla parte fisica

### Come gestisce le paure
Non spiegoni teorici. Usa il lessico del paziente, domande aperte, ragionamento condiviso. Lo fa muovere *prima* di spiegargli perché può farlo. Non impone il pensiero — costruisce consapevolezza insieme al paziente.

### Frequenza e sostenibilità
- Si parte da 1-2 sedute/settimana, poi si scala verso il basso
- Percorso sostenibile nel tempo, non intensivo
- Esercizi a casa: pochi, fattibili, integrati nei movimenti quotidiani
- Nessun pacchetto standard — ogni piano è creato su misura

### Risultati attesi
- **Acuto:** miglioramento in qualche settimana
- **Cronico:** primi risultati concreti in 1-2 mesi, focus sul medio-lungo periodo
- L'obiettivo non è "togliere il dolore" ma "tornare a fare quello che ami"

### Caso di riferimento — Luca
Paziente arrivato incapace di allacciarsi le scarpe. Percorso con sedute settimanali, pochi esercizi a casa, esercizio usato come strumento (non come condanna). Risultato finale: deadlift con bilanciere carico. Foto/video del deadlift disponibile — prova visiva più forte dell'approccio attivo. *(Foto F6 nel catalogo immagini)*

### Le tre fasi del percorso (modello CFT — per landing e comunicazione)

Queste fasi sono il modo in cui il percorso viene **comunicato al paziente** nella landing page. Non sono fasi rigide o pacchetti fissi — sono una mappa comprensibile di come funziona il lavoro insieme.

**Fase 1 — Capire il tuo dolore**
*"Il dolore non significa che stai facendo danno."*
Valutazione gratuita: ascolto approfondito, capire la storia del paziente, i suoi obiettivi, le sue paure. Smontare le credenze che bloccano il movimento (postura, ernia, riposo obbligato). Il paziente esce dalla prima visita con una comprensione diversa del proprio dolore.

**Fase 2 — Ritrovare fiducia nel movimento**
*"Il corpo impara di nuovo che muoversi è sicuro."*
Sedute 1-2/settimana, pochi esercizi scelti su misura, esposizione graduale. Neurodinamica per il nervo sciatico. Gli esercizi non sono una lista da eseguire — sono strumenti per obiettivi concreti. Il paziente inizia a muoversi senza paura.

**Fase 3 — Tornare a fare quello che ami**
*"Non gestisci il dolore. Torni a vivere."*
Frequenza in calo (1 seduta/settimana poi meno), programma progressivo, autonomia crescente. Obiettivo: riprendere le attività di valore — lavoro, sport, hobby, vita quotidiana. Il caso Luca: da non riuscire ad allacciarsi le scarpe al deadlift con bilanciere.

---

### Struttura piani di trattamento (per comunicazione in studio)

*Da proporre dopo la valutazione gratuita — mai in landing page.*
*Il prezzo in landing crea barriere prima che il paziente capisca il valore.*

| Piano | Struttura | Prezzo indicativo | Per chi |
|-------|-----------|-------------------|---------|
| **Seduta singola** | 1 seduta, 45 min | €45 | Pazienti già seguiti, check-in |
| **Avvio – 4 sedute** | 4 sedute in 4 settimane (1/sett.) | €160 (€40 cad.) | Fase iniziale, bassa barriera |
| **Percorso Fase 2 – 8 sedute** | 8 sedute in 6-8 settimane | €320 (€40 cad.) | Fase di progressione principale |
| **Mensile – 4 sedute/mese** | Abbonamento mensile scalabile | €160-180/mese | Pazienti che preferiscono continuità |
| **Mantenimento – 2 sedute/mese** | Abbonamento ridotto | €90/mese | Fase finale, autonomia alta |

**Regole operative:**
- Nessun pacchetto uguale per tutti — i piani sopra sono opzioni, non protocolli
- Il piano viene proposto **dopo** la valutazione gratuita, sulla base degli obiettivi del paziente
- Sconto integrato nel prezzo per sedute multiple (€40 vs €45 singola) — non comunicarlo come "sconto" ma come prezzo del percorso
- La frequenza si scala verso il basso nel tempo — comunicarlo subito per gestire le aspettative

---

### Credenze da sfatare (comuni in questo target)
- "Devo riposare finché non passa"
- "Ho l'ernia, non posso muovermi"
- "È colpa della mia postura"
- "Sarà così per sempre"
- Evitamento del movimento (pain avoidance) come strategia principale

---

## Contatti Studio

| Campo | Valore |
|-------|--------|
| Studio | Studio Mantovan – Fisioterapia in Movimento, Broni (PV) |
| Email | studio.mantovan@gmail.com |
| Tel / WhatsApp | 3519242517 |
| Sito | umbertomantovan.net |
| Social | @studio.mantovan (Instagram & Facebook) |
| P.IVA | 02842510188 |
