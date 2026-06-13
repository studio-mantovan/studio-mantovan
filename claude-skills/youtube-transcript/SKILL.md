# Skill: YouTube Transcript + Rielaborazione

Usa questa skill ogni volta che l'utente fornisce un link o un ID di un video YouTube e chiede di trascriverlo, rielaborarlo, riassumerlo, o estrarne i contenuti. Triggera anche per frasi come "trascrivi questo video", "fammi le note di questo video", "rielabora questo video YouTube", "estrai i contenuti", "cosa dice questo video". Usala anche se l'utente menziona un video di un congresso, webinar, lezione, o intervista clinica da YouTube.

**Skill correlate:** [[instagram-carousel]] (per repurposing del contenuto in slide), [[blog-article]] (per trasformare il video in articolo SEO), [[voice-style]] (per adattare il tono nella rielaborazione).

---

## Dipendenze

Questa skill usa **Node.js** (disponibile sul sistema). Non richiede Python.

Pacchetto npm: `youtube-transcript` — da installare nella cartella temporanea `%TEMP%\yt-transcript` se non già presente.

---

## Step 1 — Prepara la cartella temporanea e installa la dipendenza

```powershell
$tmpDir = "$env:TEMP\yt-transcript"
New-Item -ItemType Directory -Force $tmpDir | Out-Null
Set-Location $tmpDir
npm init -y | Out-Null
npm install youtube-transcript 2>&1 | Select-Object -Last 3
```

Esegui solo se non già installata (verificare se esiste `node_modules/youtube-transcript`).

---

## Step 2 — Crea lo script di estrazione

Salva questo file in `%TEMP%\yt-transcript\extract.mjs`:

```javascript
import { YoutubeTranscript } from 'youtube-transcript';

const url = process.argv[2];

try {
  const transcript = await YoutubeTranscript.fetchTranscript(url, { lang: 'it' })
    .catch(() => YoutubeTranscript.fetchTranscript(url, { lang: 'en' }))
    .catch(() => YoutubeTranscript.fetchTranscript(url));

  const text = transcript.map(item => item.text).join(' ');
  console.log(text);
} catch (err) {
  process.stderr.write('ERRORE: ' + err.message + '\n');
  process.exit(1);
}
```

---

## Step 3 — Estrai la trascrizione

```powershell
Set-Location "$env:TEMP\yt-transcript"
node extract.mjs "<URL_VIDEO>" 2>&1
```

Lo script:
- Accetta URL completo (`https://www.youtube.com/watch?v=...`) o ID diretto
- Preferisce sottotitoli italiani → fallback su inglese → fallback su qualsiasi lingua disponibile
- Restituisce testo continuo su stdout

Se lo script restituisce un errore, comunicarlo all'utente con il messaggio esatto.

---

## Step 4 — Mostra la trascrizione grezza

Prima di rielaborare, mostrare la trascrizione pulita con questa intestazione:

```
## Trascrizione grezza
**Video:** <titolo se recuperabile, altrimenti URL>
**Lingua originale:** <lingua rilevata>
---
<testo>
```

Chiedere: *"Vuoi che proceda con la rielaborazione?"*

Se l'utente ha già chiesto esplicitamente la rielaborazione nel prompt iniziale, procedere direttamente senza chiedere.

---

## Step 5 — Rielaborazione strutturata

Produrre un documento in italiano con queste sezioni (adattarle al contenuto, non tutte sono sempre necessarie):

```markdown
# [Titolo del video o argomento principale]

**Fonte:** [URL YouTube]
**Data rielaborazione:** [data odierna]

---

## Contesto e presentazione
Chi parla, in quale contesto, qual è l'obiettivo del video.

## Concetti chiave
I costrutti teorici, definizioni, modelli presentati.

## Evidenze e riferimenti citati
Studi, dati, autori menzionati nel video.

## Applicazioni pratiche / Implicazioni cliniche
Cosa è direttamente applicabile nel lavoro professionale.

## Punti di attenzione o limiti
Aspetti critici, limiti dichiarati dall'autore, elementi da approfondire.

## Citazioni rilevanti
Frasi significative pronunciate nel video (in corsivo, con attribuzione).
```

### Regole per la rielaborazione
- Non è un riassunto: mantenere la sostanza e il ragionamento, non solo le conclusioni
- Scrivere in italiano chiaro e professionale, adatto a note di studio
- Non inventare informazioni non presenti nella trascrizione
- Omettere sezioni senza contenuto rilevante nel video specifico

---

## Step 6 — Wiki-link Obsidian nella rielaborazione

Prima di salvare, cercare nel vault file correlati al contenuto del video e aggiungere wiki-link sostanziali. Esempi:
- Video su comunicazione/marketing → [[voice-style]], [[copywriting-rules]], [[instagram-carousel]]
- Video clinico su patologia → file corrispondente in `knowledge-base/`
- Video su contenuti/blog → [[blog-article]]

Linkare solo quando la correlazione è specifica e utile per navigare il vault.

---

## Step 7 — Salvataggio (solo su richiesta dell'utente)

Se l'utente conferma e chiede di salvare:

1. Cartella: `conoscenza/` nel vault (`C:\Users\umber\studio-mantovan\conoscenza\`)
2. Nome file: `[anno]-[mese]-[titolo-kebab-case].md`
3. Frontmatter YAML:

```yaml
---
titolo: "..."
fonte: "URL YouTube"
data: YYYY-MM-DD
tipo: video
tags: [argomento, autore, area]
stato: rivisto
---
```

Se l'utente chiede anche un riassunto sintetico, aggiungerlo in fondo:

```markdown
## Riassunto sintetico
[3-5 frasi che catturano l'essenziale]
```

---

## Gestione errori comuni

| Errore | Causa | Soluzione |
|---|---|---|
| `TranscriptsDisabled` | Il canale ha disabilitato i sottotitoli | Comunicarlo all'utente |
| `NoTranscriptFound` | Nessuna lingua disponibile | Verificare se il video è molto vecchio o privato |
| `VideoUnavailable` | Video privato o rimosso | Comunicarlo all'utente |
| Traduzione imprecisa | Accento forte o terminologia tecnica | Segnalare che la traduzione potrebbe avere imprecisioni |
| `npm` non risponde | Rete aziendale/proxy | Provare con `npm install --prefer-offline` |
