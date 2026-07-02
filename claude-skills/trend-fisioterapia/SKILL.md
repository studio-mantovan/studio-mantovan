---
name: trend-fisioterapia
description: >
  Usa questa skill quando l'utente chiede di trovare argomenti di tendenza,
  trend di ricerca, o proposte di contenuto in ambito fisioterapico e di
  dolori muscolo-scheletrici. Triggera su: "trend fisioterapia", "argomenti
  di tendenza", "cosa cercano i pazienti", "proposte contenuto", "idee
  carousel/reel", "cosa cercano online sul mal di schiena/ginocchio/ecc".
  Produce un report con 3-5 proposte di argomento pronte da passare al
  workflow di produzione contenuti, basate su dati reali di ricerca
  (Google Trends + Google Suggest + ricerca web), filtrate secondo le
  regole editoriali di Studio Mantovan.
---

# Trend Fisioterapia — Skill Operativa

Questa skill individua argomenti di tendenza in ambito fisioterapico/dolore
muscolo-scheletrico usando solo fonti gratuite, e produce proposte di
contenuto coerenti con il posizionamento CFT di Studio Mantovan.

**IMPORTANTE**: questa skill richiede accesso a internet (rete attiva) e un
interprete Python funzionante sulla macchina locale.

---

## 1. Argomenti seme

Lista di base (modificabile in `scripts/seeds.txt`):

```
lombalgia
cervicalgia
sciatalgia
dolore al ginocchio
dolore alla spalla
tendinite
mal di schiena
ernia del disco
dolore cronico
riabilitazione post operatoria
```

Aggiungi o togli argomenti a seconda della stagione (es. "infortuni da corsa"
in primavera/autunno, "colpo della strega" in inverno).

---

## 2. Step operativi (in ordine)

### Step 1 — Google Trends (pytrends)

Esegui `scripts/fetch_trends.py`. Per ogni argomento seme, lo script
recupera:
- andamento interesse ultimi 3 mesi in Italia (geo='IT')
- query correlate "in crescita" (rising related queries)

Se pytrends non è installato:

```bash
pip install pytrends
```

Nota: Google applica rate limiting. Lo script include una pausa di 5-10
secondi tra una query e l'altra: non rimuoverla, altrimenti Google blocca
temporaneamente le richieste.

### Step 2 — Google Suggest

Esegui `scripts/fetch_suggest.py`. Per ogni argomento seme, interroga
l'endpoint pubblico di Google Suggest e restituisce gli autocomplete reali
(query effettive digitate dagli utenti, spesso più specifiche e utili dei
dati di Trends).

### Step 3 — Verifica con ricerca web

Per i 5-6 argomenti che risultano più promettenti dopo Step 1 e 2, usa lo
strumento di ricerca web nativo di Claude Code per:
- confermare che l'interesse sia reale e non rumore statistico
- capire se l'argomento è già saturo di contenuti (molti articoli recenti)
  o ha ancora spazio
- raccogliere eventuale contesto stagionale o di attualità

### Step 4 — Filtro editoriale

Prima di proporre un argomento, verificalo contro le regole editoriali del
vault: `marketing/content-rules-v2.md` [[content-rules-v2]],
`clinica/clinical-philosophy.md` [[clinical-philosophy]],
`copy/copywriting-rules.md` [[copywriting-rules]]. Scarta o riformula se
l'argomento porterebbe a:
- promettere risultati specifici o guarigione
- parlare di "movimento corretto/scorretto"
- un taglio non coerente con l'approccio CFT/biopsicosociale

### Step 5 — Output

Produci un report con 3-5 proposte, ognuna con questa struttura:

```
## [Tema]
- Perché è di tendenza: [dato Trends/Suggest + eventuale contesto stagionale]
- Query correlate rilevanti: [lista breve]
- Angolo editoriale: [taglio mito-da-sfatare / educational, coerente con CFT]
- Formato consigliato: [carousel | reel]
- Note: [eventuali avvertenze, es. tema già saturo altrove]
```

---

## 3. Frequenza d'uso consigliata

Esegui questa skill 1 volta a settimana (es. lunedì mattina) per alimentare
il workflow di produzione contenuti, non più spesso: i dati di Trends non
cambiano abbastanza velocemente da giustificare un uso più frequente, e
useresti solo rate limit inutilmente.

---

## 4. Errori comuni da evitare

| Errore | Perché è un problema |
|--------|----------------------|
| Troppe query pytrends ravvicinate | Google blocca temporaneamente le richieste |
| Proporre argomenti senza filtro editoriale | Rischio di contenuti non coerenti col posizionamento CFT |
| Ignorare la stagionalità | Si perdono argomenti rilevanti (es. running in primavera) |
| Usare solo Trends senza Suggest | Trends dà volumi, Suggest dà l'intento reale dietro la ricerca |
| Proporre temi già super-saturi senza un angolo nuovo | Contenuto che non si distingue dalla concorrenza |
