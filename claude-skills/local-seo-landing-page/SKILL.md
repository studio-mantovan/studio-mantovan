# Skill: SEO Locale — Landing Page

## Quando leggere questo file

Prima di creare o modificare qualsiasi landing page locale per Studio Mantovan:
landing page, pagina locale, SEO locale, posizionamento Google, "fisioterapista Broni", ecc.

---

## 1. Obiettivo della pagina

Due obiettivi simultanei: **rankare su Google** e **convertire il visitatore in paziente**.

- Chi cerca: paziente locale su Google (mobile, voce, mappa)
- Come cerca: "fisioterapista Broni", "fisioterapia Oltrepò Pavese", "fisioterapista vicino a me"
- Azione desiderata: inviare un messaggio / chiamare / prenotare

---

## 2. Keyword Research Locale

Combina sempre: **servizio + localizzazione**

Esempi target:
- "fisioterapista Broni"
- "fisioterapia Oltrepò Pavese"
- "riabilitazione post-operatoria Pavia"
- "fisioterapista lombalgia Casteggio"
- "fisioterapia sportiva vicino a me"

Regole:
- Keyword non brandizzate sulla landing (la homepage gestisce il brand)
- Includi varianti long-tail naturali
- Priorità: intento locale esplicito > keyword generiche
- Fonti: Google Suggest, "Ricerche correlate", "Le persone chiedono anche"

---

## 3. Struttura URL

```
umbertomantovan.net/fisioterapia-broni/
umbertomantovan.net/riabilitazione-post-operatoria-broni/
umbertomantovan.net/fisioterapia-sportiva-oltrepo-pavese/
```

- Tutto minuscolo, trattini come separatori
- Includi città o area geografica nell'URL
- URL brevi e leggibili

---

## 4. Tag HTML Obbligatori

```html
<title>Fisioterapista a Broni | Studio Mantovan – Fisioterapia in Movimento</title>
<meta name="description" content="Fisioterapista a Broni specializzato in riabilitazione, dolore cronico e fisioterapia sportiva. Prima visita gratuita. Prenota ora: 351 924 2517">
```

- `<title>`: max 60 caratteri, keyword locale + nome studio
- `<meta description>`: max 155 caratteri, CTA esplicita + keyword locale
- Title e description unici per ogni pagina

---

## 5. Struttura Heading

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

- Un solo H1 per pagina con keyword locale principale
- Includi città negli H2 dove naturale
- No keyword stuffing

---

## 6. Contenuto

- Almeno **40–60% di contenuto unico** per ogni pagina locale
- Menziona elementi locali reali: quartieri, riferimenti geografici, patologie tipiche della zona
- Tono: diretto, educativo, sfida credenze comuni — vedi `references/copywriting-rules.md`
- Elementi obbligatori:
  - Value proposition nell'hero / above the fold
  - NAP visibile
  - Prova sociale locale (recensioni con nominativo/iniziali + città)
  - Almeno 3 CTA (hero, metà pagina, footer)
  - FAQ con domande reali dei pazienti
  - Mappa Google o link Maps
  - Foto reali dello studio/professionista (mai stock photo)

---

## 7. NAP — Nome, Indirizzo, Telefono

Deve essere **identico** su sito, Google Business Profile, Facebook, Instagram, directory.

```
Studio Mantovan – Fisioterapia in Movimento
[Indirizzo completo, Broni (PV)]
Tel: 351 924 2517
Email: studio.mantovan@gmail.com
P.IVA: 02842510188
```

- Sempre nel footer E nella sezione contatti della landing
- Formato telefono consistente ovunque: "351 924 2517"
- Testo selezionabile nell'HTML, mai immagine

---

## 8. Schema Markup JSON-LD

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

Schema aggiuntivi consigliati: **FAQPage**, **Review/AggregateRating**

- Usa JSON-LD (non Microdata)
- Verifica su: Google Rich Results Test
- NAP nello schema = identico al testo della pagina
- Includi coordinate geografiche precise

---

## 9. CTA

CTA prioritarie per Studio Mantovan:
1. "Invia messaggio" → WhatsApp o Messenger (principale)
2. "Chiama ora" → `tel:+393519242517`
3. "Prima visita gratuita" → form o WhatsApp

Regole:
- Almeno 3 CTA: hero, sezione centrale, footer
- Visibile above the fold
- Testo specifico ("Prenota la prima visita gratuita"), non generico ("Clicca qui")
- Su mobile: bottone telefono cliccabile direttamente

---

## 10. Technical SEO

- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Immagini WebP, max 200kb, `loading="lazy"` (tranne hero)
- Mobile-first: font min 16px, bottoni min 44×44px
- Max 2 famiglie di font
- `canonical` che punta a se stessa su ogni landing
- Sitemap XML aggiornata

---

## 11. Errori da Evitare

| Errore | Problema |
|---|---|
| Copia-incolla con solo città cambiata | Google non indicizza |
| NAP diverso su sito e GBP | Penalizza il ranking |
| CTA solo nel footer | La maggior parte non scrolla |
| Schema con errori | Niente rich results |
| Pagina non mobile-friendly | 70%+ ricerche locali da mobile |
| Stock photo generiche | Riduce fiducia |

---

## 12. Checklist Finale

- [ ] Title e meta description con keyword locale
- [ ] H1 con keyword locale
- [ ] NAP visibile e identico a GBP
- [ ] Schema JSON-LD validato su Rich Results Test
- [ ] Almeno 3 CTA nella pagina
- [ ] Sezione recensioni/testimonianze locali
- [ ] Sezione FAQ con markup FAQPage
- [ ] Mappa Google incorporata o link
- [ ] Foto reali
- [ ] Mobile-friendly verificato
- [ ] Velocità verificata (PageSpeed Insights)
- [ ] Nessun errore in Google Search Console

---

*Vault Obsidian: `claude-skills/local-seo-landing-page/SKILL.md`*
