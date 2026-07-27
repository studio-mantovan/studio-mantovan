---
name: reel-hook-overlay
description: Genera frasi hook/prova in stile Studio Mantovan e le inserisce come overlay testuali animati sui video Reels/motion (non sottotitoli del parlato). Usa questa skill ogni volta che l'utente parla di "frasi sui video", "hook video", "testo overlay reel", "caption sul video", "frasi che compaiono nel video", o chiede di aggiungere testo/scritte a un Reel già montato o in fase di montaggio. Copre sia la generazione del copy (credenza esterna + prova fisica, framework inside/outside test) sia il rendering grafico via ASS + FFmpeg con palette e font brand. NON usare per sottotitoli che seguono il parlato (quella è la pipeline ASS già esistente per il video stacco).
---

---

## name: reel-hook-overlay description: Genera frasi hook/prova in stile Studio Mantovan e le inserisce come overlay testuali animati (con effetti di entrata configurabili) sui video Reels/motion, con possibilità di modificare l'audio (musica, volume, sostituzione traccia). Usa questa skill ogni volta che l'utente parla di "frasi sui video", "hook video", "testo overlay reel", "caption sul video", "effetti di entrata", "modificare l'audio del video", "aggiungere musica al reel", o chiede di aggiungere testo/scritte/audio a un Reel già montato o in fase di montaggio. Copre generazione copy (credenza esterna + prova fisica, framework inside/outside test), rendering grafico via ASS + FFmpeg con palette/font brand ed effetti (fade, pop, slide, typewriter), e gestione audio (mix musica, volume, sostituzione, ducking). NON usare per sottotitoli che seguono il parlato (quella è la pipeline ASS già esistente per il video stacco).

# Reel Hook Overlay

Skill per aggiungere frasi testuali animate (hook + prova fisica) sopra i video Reels di Studio Mantovan. Le frasi NON sono una trascrizione del parlato: sono affermazioni scritte a sé stanti, sincronizzate a momenti specifici del video, con la stessa logica editoriale dei caroselli.

## Prima di iniziare: carica il contesto brand

Se non sono già in contesto in questa sessione, leggi:

- `clinica/clinical-philosophy.md`
- `marketing/copywriting-rules.md`
- `marketing/territorio-e-lente.md`

Questi file contengono le regole che governano OGNI frase generata da questa skill (vedi sotto).

## Step 1 — Raccogli l'input clinico

Chiedi (o estrai dalla conversazione) questi elementi minimi:

1. **Credenza esterna**: cosa ha detto/fatto credere a questo paziente un'altra figura sanitaria o un'autorità (es. "un altro fisioterapista le aveva detto di non piegarsi mai in avanti")
2. **Prova fisica**: cosa è successo davvero in seduta che la contraddice (fatto concreto, osservabile, non un'opinione — es. "ha fatto 3 serie di stacchi da terra senza dolore")
3. **Durata del video** e, se disponibile, i momenti chiave (secondi) dove il video "regge" meglio un testo (es. inquadratura ferma, rallenty, primo piano)

Se l'utente fornisce solo il video senza contesto clinico, chiedi questi due elementi prima di generare qualsiasi frase — sono il cuore del test inside/outside e non si inventano.

## Step 2 — Genera le frasi (checkpoint obbligatorio)

Struttura standard a 3-4 frasi, in quest'ordine:

|Ruolo|Funzione|Timing indicativo|
|---|---|---|
|Hook|Frase breve, in prima persona o diretta, cattura l'attenzione nei primi 2-3s|0:00–0:03|
|Credenza|Nomina esplicitamente la credenza esterna ricevuta|dopo il hook|
|Prova|Il fatto fisico specifico osservato in seduta, in tono neutro e concreto|sul momento clou del video (es. l'esecuzione del gesto)|
|Chiusura (opzionale)|Frase breve di sintesi, MAI una promessa di guarigione|ultimi 2-3s|

Regole di copy (obbligatorie, da `copywriting-rules.md` / `clinical-philosophy.md`):

- Frasi brevi, italiano semplice, zero anglicismi
- Mai promesse tipo "tornare come prima" → usa "al meglio della tua condizione" o simili
- Mai contenuto motivazionale generico, mai consigli posturali, mai urgenza promozionale (fuori dal territorio del brand)
- La credenza va nominata con precisione (chi/cosa l'ha detta, se noto), non genericizzata
- Tono: dimostrare con i fatti della seduta, non controargomentare a parole

**Mostra le frasi generate in chat e aspetta un "ok frasi" (o correzioni) prima di passare al rendering.** Stesso principio del checkpoint "ok carosello" che usi per i caroselli — non generare il video overlay a frasi non approvate.

## Step 3 — Effetti di entrata (scegli frase per frase, non un default fisso)

Per ogni frase decidi l'effetto più adatto al ritmo di quel momento specifico del video — non applicare lo stesso a tutte:

|Effetto|Quando usarlo|
|---|---|
|`fade`|default neutro, dissolvenza in entrata/uscita|
|`pop`|frasi brevi e d'impatto (spesso il hook), entra "a scatto" da piccolo a normale|
|`slide` (con `direction`: left/right/up/down)|quando vuoi accompagnare un movimento nel video (es. slide da sinistra durante un gesto laterale)|
|`typewriter`|frasi che vuoi far "leggere" con più attenzione (spesso la prova fisica), si scrivono lettera per lettera|

Nel JSON delle frasi ogni oggetto ha un campo `effect` (e `direction` solo per `slide`). Se non lo specifichi, `fade` è il default.

## Step 4 — Styling (palette e font brand)

Palette Studio Mantovan (stessa dei caroselli):

- Cream `#F5F0EB` — testo principale su sfondo scuro
- Teal `#1A9EC9` — accenti, seconda frase
- Mint `#5DBFB0` — dettagli secondari
- Coral `#E8503A` — evidenziazioni, CTA
- Ink `#1F3A40` — sfondo scuro dietro al testo, outline

Font: Fraunces (hook/titoli) + Archivo (testo secondario). Se questi font non sono installati come font di sistema su Windows, il rendering ASS farà fallback a un font simile — installali prima (Google Fonts) per coerenza col resto del brand.

Posizionamento consigliato: hook in alto o al centro nei primi secondi, prova in basso durante l'esecuzione del gesto, per non coprire mai il soggetto in movimento.

## Step 5 — Modifiche audio (opzionale, chiedi cosa serve)

Prima di generare, chiedi se serve toccare l'audio e cosa esattamente:

- **Aggiungere/mixare musica di sottofondo** (`mode: "mix"`) — specifica `music_file` e `music_volume` (0-1). Se vuoi che la musica si abbassi automaticamente quando c'è parlato nel video originale, imposta `duck: true` (sidechain compression).
- **Regolare solo il volume esistente** (`mode: "volume_only"`) — utile se il video ha già l'audio giusto ma troppo basso/alto.
- **Sostituire completamente l'audio** (`mode: "replace"`) — specifica `music_file` come nuova traccia; l'audio originale viene scartato.

Questi parametri vanno nel blocco `"audio"` del JSON (vedi Step 6). Se l'utente non menziona l'audio, ometti il blocco: lo script genererà solo il comando minimo che aggiunge l'overlay senza toccare l'audio.

## Step 6 — Genera il file ASS e il comando FFmpeg

Usa `scripts/build_ass_overlay.py` per generare il file `.ass` a partire da un JSON di frasi/timing (con effetti) ed eventuale config audio:

```bash
python scripts/build_ass_overlay.py frasi.json overlay.ass
```

Lo script stampa direttamente il comando `ffmpeg` pronto da eseguire (già combinato: overlay video + gestione audio in un solo passaggio). Il formato completo di `frasi.json`, inclusi i campi `effect`, `direction` e il blocco `audio`, è documentato in testa allo script — leggilo prima di costruire il JSON.

## Step 7 — Consegna

Consegna sia il video renderizzato sia il file `.ass` separato: l'utente lo modifica facilmente a mano (testo, timing, colori) senza dover rigenerare tutto da capo se vuole solo un piccolo aggiustamento.

## Nota su CLAUDE.md

Se vuoi che questa skill si attivi automaticamente insieme al caricamento dei file brand (come fai già per `ad-copy`), aggiungi un trigger block in `CLAUDE.md` con parole chiave tipo: "frasi video", "hook reel", "overlay testo", "caption video" → auto-load di `clinical-philosophy.md`, `copywriting-rules.md`, `territorio-e-lente.md`.