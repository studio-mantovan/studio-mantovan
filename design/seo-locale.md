# Studio Mantovan — SEO Locale: Guida Operativa per Landing Page

*Correlati: [[landing-page-style]] · [[copywriting-rules]] · [[tecniche-design]] · [[brand-colors]]*

---

## 1. Obiettivo della pagina

Una landing page locale ha **due obiettivi simultanei**: rankare su Google e convertire il visitatore in paziente.

- **Chi cerca:** paziente locale che usa Google (mobile, voce, mappa)
- **Come cerca:** "fisioterapista Broni", "fisioterapia Oltrepò Pavese", "fisioterapista vicino a me"
- **Cosa vuole:** trovare un professionista affidabile, contattarlo subito
- **Azione desiderata:** inviare un messaggio / chiamare / prenotare

---

## 2. Keyword Research Locale

### Logica di targeting

Combina sempre: **servizio + localizzazione**

Esempi:
- "fisioterapista Broni"
- "fisioterapia Oltrepò Pavese"
- "riabilitazione post-operatoria Pavia"
- "fisioterapista lombalgia Casteggio"
- "fisioterapia sportiva vicino a me"

### Regole

- Usa keyword **non brandizzate** sulla landing page locale (la homepage gestisce il brand)
- Includi varianti long-tail: "dove trovo un fisioterapista a Broni", "fisioterapia per sciatalgia Broni"
- Priorità: keyword con intento locale esplicito > keyword generiche
- Fonti: Google Suggest, "Ricerche correlate", "Le persone chiedono anche"

---

## 3. Struttura URL

```
umbertomantovan.net/fisioterapia-broni/
umbertomantovan.net/riabilitazione-post-operatoria-broni/
umbertomantovan.net/fisioterapia-sportiva-oltrepo-pavese/
```

**Regole:**
- Tutto minuscolo, parole separate da trattino
- Includi città o area geografica nell'URL
- Evita parametri dinamici (`?id=123`) per pagine SEO
- URL brevi e leggibili

---

## 4. Struttura On-Page Obbligatoria

### Tag HTML prioritari

```html
<title>Fisioterapista a Broni | Studio Mantovan – Fisioterapia in Movimento</title>
<meta name="description" content="Fisioterapista a Broni specializzato in riabilitazione, dolore cronico e fisioterapia sportiva. Prima visita gratuita. Prenota ora: 351 924 2517">
```

- `<title>`: max 60 caratteri, include keyword locale + nome studio
- `<meta description>`: max 155 caratteri, include CTA esplicita e keyword locale
- Non usare lo stesso title/description su più pagine

### Struttura Heading

```
H1 — Fisioterapista a Broni: [Promessa principale]
  H2 — Servizi offerti a Broni e Oltrepò Pavese
    H3 — Riabilitazione post-operatoria
    H3 — Fisioterapia sportiva
    H3 — Trattamento del dolore cronico
  H2 — Perché scegliere Studio Mantovan
  H2 — Dove siamo / Come raggiungerci
  H2 — Recensioni dei pazienti di Broni
  H2 — Domande frequenti
```

**Regole heading:**
- Un solo H1 per pagina, deve contenere la keyword locale principale
- Includi città e area geografica negli H2 dove naturale
- No keyword stuffing: il testo deve essere leggibile

---

## 5. Contenuto — Regole Fondamentali

### Unicità del contenuto

Google riconosce immediatamente le pagine copia-incolla con solo il nome città cambiato.

- Scrivi almeno **40–60% di contenuto unico** per ogni pagina locale
- Idealmente riscrivi tutto da zero, pensando a quel territorio specifico
- Menziona elementi locali reali: quartieri, riferimenti geografici, patologie tipiche della zona

### Tono e stile

Coerente con la filosofia Studio Mantovan — vedi [[copywriting-rules]]:
- Linguaggio diretto, educativo, che sfida credenze comuni
- Focus sul "perché", non solo sul "cosa"
- Prima o seconda persona: mai generico/istituzionale
- Evita gergo medico senza spiegazione

### Elementi di contenuto obbligatori

- Value proposition chiara **nell'hero / above the fold**
- NAP visibile (Nome, Indirizzo, Telefono)
- Servizi specifici per quella pagina/area
- Prova sociale locale: recensioni di pazienti della zona (nominativo o iniziali + città)
- CTA multipli: almeno 3 punti nella pagina (hero, metà pagina, footer)
- FAQ con domande reali dei pazienti
- Mappa Google incorporata o link a Google Maps
- Foto reali: dello studio, del professionista — mai stock photo generiche

---

## 6. NAP — Nome, Indirizzo, Telefono

Il NAP è il **segnale di fiducia locale più importante**. Deve essere identico su: sito web, Google Business Profile, Facebook, Instagram, directory online.

```
Studio Mantovan – Fisioterapia in Movimento
[Indirizzo completo, Broni (PV)]
Tel: 351 924 2517
Email: studio.mantovan@gmail.com
P.IVA: 02842510188
```

**Regole NAP:**
- Usa sempre il nome ufficiale esatto (non abbreviazioni diverse)
- Inserisci il NAP nel **footer di ogni pagina** E nella sezione contatti della landing
- Formato telefono **consistente ovunque** (scegli uno e usalo sempre: "351 924 2517")
- Il NAP nel codice HTML deve essere testo selezionabile, non immagine

---

## 7. Schema Markup (JSON-LD)

Inserire nel `<head>` o prima di `</body>`. Adattare con dati reali.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "PhysicalTherapist",
  "name": "Studio Mantovan – Fisioterapia in Movimento",
  "url": "https://umbertomantovan.net",
  "telephone": "+393519242517",
  "email": "studio.mantovan@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[VIA E NUMERO CIVICO]",
    "addressLocality": "Broni",
    "addressRegion": "PV",
    "postalCode": "[CAP]",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LATITUDINE],
    "longitude": [LONGITUDINE]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "€€",
  "sameAs": [
    "https://www.instagram.com/studio.mantovan",
    "https://www.facebook.com/studio.mantovan"
  ],
  "description": "Fisioterapista a Broni specializzato in riabilitazione post-operatoria, fisioterapia sportiva e trattamento del dolore cronico. Approccio attivo e personalizzato 1:1.",
  "image": "https://umbertomantovan.net/[immagine-studio.jpg]",
  "founder": {
    "@type": "Person",
    "name": "Umberto Mantovan"
  }
}
</script>
```

### Schema aggiuntivi consigliati

- **FAQPage** — sulla sezione FAQ della landing (aumenta probabilità di rich results)
- **Review / AggregateRating** — se hai recensioni verificate da mostrare
- **MedicalBusiness** come alternativa a `PhysicalTherapist` se più appropriato

**Regole schema:**
- Usa JSON-LD (formato preferito da Google), non Microdata
- Verifica su: [Google Rich Results Test](https://search.google.com/test/rich-results)
- NAP nello schema deve essere **identico** a quello nel testo della pagina
- Includi coordinate geografiche precise (cerca su Google Maps)

---

## 8. CTA — Call to Action

Per Studio Mantovan, le CTA prioritarie sono:

1. **"Invia messaggio"** → WhatsApp o Messenger (principale)
2. **"Chiama ora"** → link `tel:+393519242517`
3. **"Prima visita gratuita"** → form contatto o WhatsApp

**Regole CTA:**
- Almeno **3 CTA** nella pagina: hero, sezione centrale, footer
- Il bottone deve essere visibile **senza scroll** (above the fold)
- Testo del bottone: specifico ("Prenota la prima visita gratuita"), non generico ("Clicca qui")
- Su mobile: bottone telefono cliccabile direttamente

---

## 9. Technical SEO

### Performance

- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Comprimere le immagini (WebP, max 200kb per foto)
- Niente slider/carousel pesanti above the fold

### Mobile-first

- Layout progettato prima per mobile (la maggioranza delle ricerche locali è da mobile)
- Font leggibile senza zoom (min 16px)
- Bottoni touch-friendly (min 44×44px)
- Mappa incorporata responsive

### Velocità

- Massimo 2 famiglie di font
- CSS critico inline, resto lazy-loaded
- Immagini con `loading="lazy"` (tranne hero)

### Indicizzazione

- Ogni landing page locale deve avere un `canonical` che punta a se stessa
- Sitemap XML aggiornata con le pagine locali
- `robots.txt`: assicurarsi che la pagina non sia bloccata

---

## 10. Google Business Profile (GBP)

La landing page locale funziona in sinergia con il GBP. Verificare che:

- Nome, indirizzo, telefono su GBP = **identici** al sito
- URL del sito nel GBP punta alla landing page corretta
- Categoria principale GBP: "Fisioterapista" o "Centro di fisioterapia"
- Foto aggiornate su GBP (studio, professionista, trattamenti)
- Recensioni Google: rispondi sempre, cita il luogo nelle risposte

---

## 11. Errori Comuni da Evitare

| Errore | Perché è un problema |
|---|---|
| Copiare la stessa pagina cambiando solo la città | Google lo riconosce e non indicizza |
| NAP diverso su sito e GBP | Crea sfiducia algoritmica, penalizza il ranking |
| Nessuna foto reale | Riduce conversioni e credibilità |
| CTA solo nel footer | La maggior parte non scrolla fino in fondo |
| Schema markup con errori | Niente rich results, spreco di opportunità |
| Pagina non mobile-friendly | Il 70%+ delle ricerche locali è da mobile |
| Testo generico senza riferimenti locali | Non distingue la pagina dalla concorrenza |
| Stock photo generiche | Riduce fiducia, sembra un sito template |

---

## 12. Checklist Finale Prima di Pubblicare

- [ ] Title e meta description con keyword locale
- [ ] H1 con keyword locale
- [ ] NAP visibile e identico a GBP
- [ ] Schema JSON-LD validato su Rich Results Test
- [ ] Almeno 3 CTA nella pagina
- [ ] Sezione recensioni/testimonianze locali
- [ ] Sezione FAQ con markup FAQPage
- [ ] Mappa Google incorporata o link
- [ ] Foto reali (studio, professionista)
- [ ] Mobile-friendly verificato (Chrome DevTools)
- [ ] Velocità verificata (PageSpeed Insights)
- [ ] Nessun errore in Google Search Console
