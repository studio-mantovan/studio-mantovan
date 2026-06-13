# Guida completa: Claude Code + Obsidian per neofiti

Questa guida ti accompagna passo dopo passo nell'installazione e configurazione di Claude Code e Obsidian sul tuo computer Windows, partendo da zero. Non è necessaria alcuna esperienza di programmazione.

File correlati: [[CLAUDE.md]] [[MEMORY.md]] [[REFERENCES.md]]

---

## Glossario

Prima di iniziare, ecco i termini che incontrerai più spesso.

**Claude Code**
È l'assistente AI di Anthropic (la stessa azienda dietro Claude) che funziona direttamente nel terminale del tuo computer. A differenza della versione web, Claude Code può leggere, creare e modificare i file sul tuo disco, eseguire comandi e lavorare direttamente dentro il tuo progetto.

**PowerShell**
È il terminale integrato di Windows: una finestra nera (o blu) dove puoi dare comandi testuali al computer. Non è necessario sapere programmare per usarlo: in questa guida ti mostreremo esattamente cosa scrivere.

**Token**
È l'unità di misura con cui i modelli AI "leggono" il testo. Grossomodo, 1 token corrisponde a ¾ di parola inglese. Ogni conversazione con Claude consuma token: più è lunga la conversazione (e più file vengono caricati), più token vengono usati.

**Obsidian**
È un'applicazione gratuita per prendere appunti in formato Markdown. La caratteristica principale è il **grafo dei collegamenti**: puoi collegare i tuoi appunti tra loro con i wiki-link e visualizzare le connessioni come una rete. Tutti i file rimangono sul tuo computer, in formato `.md` leggibile da qualsiasi editor.

**Vault**
È la cartella principale di Obsidian. Tutto ciò che metti dentro quella cartella diventa parte del tuo vault e può essere collegato, cercato e visualizzato nel grafo. Nel nostro caso, il vault coincide con la cartella `studio-mantovan`.

**Wiki-link**
È un tipo speciale di collegamento usato in Obsidian. Si scrive con doppie parentesi quadre: `[[nome-file]]`. Quando clicchi su un wiki-link in Obsidian, apre direttamente quel file. Se il file non esiste ancora, Obsidian lo crea al momento del clic.

**PATH**
È una variabile di sistema di Windows che contiene l'elenco delle cartelle dove il sistema cerca i programmi. Se un programma non è nel PATH, Windows non lo trova quando scrivi il suo nome nel terminale. Molti problemi di installazione derivano da un PATH non configurato correttamente.

**CLAUDE.md**
È un file speciale riconosciuto da Claude Code. Quando avvii Claude Code in una cartella, legge automaticamente il file `CLAUDE.md` presente nella cartella (e nelle cartelle superiori). È il modo per dare istruzioni permanenti a Claude: chi sei, come vuoi lavorare, quali regole seguire.

---

## Parte 1 — Installazione di Claude Code su Windows

### 1.1 Installare Node.js e npm

Claude Code richiede Node.js (un ambiente per eseguire JavaScript sul computer). npm è il gestore di pacchetti incluso con Node.js e serve per installare Claude Code.

1. Vai su **nodejs.org** e scarica la versione **LTS** (Long Term Support), quella consigliata per la maggior parte degli utenti.
2. Esegui il file `.msi` scaricato e segui il wizard di installazione lasciando tutte le opzioni predefinite.
3. Al termine, **riavvia il computer** (importante: il PATH viene aggiornato solo dopo il riavvio).

Per verificare che l'installazione sia andata a buon fine, apri PowerShell e scrivi:

```powershell
node --version
```

Dovresti vedere qualcosa come `v22.0.0`. Poi verifica npm:

```powershell
npm --version
```

Dovresti vedere qualcosa come `10.0.0`. Se entrambi i comandi funzionano, puoi andare al passo successivo.

---

### 1.2 Installare Git

Git è uno strumento per il controllo versione del codice. Claude Code lo richiede come dipendenza.

1. Vai su **git-scm.com** e scarica Git per Windows.
2. Esegui il file `.exe` e segui il wizard. Puoi lasciare tutte le opzioni predefinite.
3. Alla schermata "Adjusting your PATH environment" seleziona **"Git from the command line and also from 3rd-party software"**.

Verifica l'installazione:

```powershell
git --version
```

Dovresti vedere `git version 2.x.x`.

---

### 1.3 Installare Claude Code

Con Node.js e npm installati, l'installazione di Claude Code è un singolo comando:

```powershell
npm install -g @anthropic-ai/claude-code
```

Il flag `-g` significa "globale": installa Claude Code per tutto il sistema, non solo per una cartella specifica.

Al termine, verifica:

```powershell
claude --version
```

---

### 1.4 Fix PATH (se il comando `claude` non viene trovato)

Se dopo l'installazione scrivi `claude` e PowerShell risponde con un errore del tipo `il termine 'claude' non è riconosciuto`, significa che la cartella dove npm installa i pacchetti globali non è nel PATH di sistema.

Per trovare dove npm installa i pacchetti globali:

```powershell
npm config get prefix
```

Solitamente il risultato è qualcosa come:
```
C:\Users\TuoNome\AppData\Roaming\npm
```

Copia quel percorso. Ora aggiungi quella cartella al PATH:

1. Premi **Win + S** e cerca "Variabili d'ambiente".
2. Clicca su **"Modifica le variabili d'ambiente per il sistema"**.
3. Nella sezione "Variabili utente", seleziona la riga **Path** e clicca **Modifica**.
4. Clicca **Nuovo** e incolla il percorso copiato sopra.
5. Clicca **OK** su tutte le finestre aperte.
6. **Chiudi e riapri PowerShell** (il PATH viene ricaricato solo nelle nuove sessioni).

Riprova:

```powershell
claude --version
```

---

### 1.5 Autenticazione con Anthropic

Al primo avvio, Claude Code richiede di collegare un account Anthropic. Avvia Claude Code in qualsiasi cartella:

```powershell
claude
```

Ti verrà mostrato un URL da aprire nel browser per autenticarti. Segui le istruzioni a schermo: dovrai accedere (o creare) un account su **console.anthropic.com** e autorizzare la CLI.

Una volta autenticato, tornerai al terminale e vedrai il prompt di Claude Code attivo.

Per uscire dalla sessione interattiva di Claude Code:

```powershell
/exit
```

---

## Parte 2 — Creazione della cartella di progetto e file di memoria

### 2.1 Creare la cartella di lavoro

Scegli dove vuoi tenere i file del tuo studio. Nel nostro caso abbiamo scelto:

```
C:\Users\umber\studio-mantovan
```

Per crearla da PowerShell (se non esiste già):

```powershell
New-Item -ItemType Directory -Path "C:\Users\umber\studio-mantovan"
```

Per spostarti dentro la cartella:

```powershell
cd "C:\Users\umber\studio-mantovan"
```

---

### 2.2 Il file CLAUDE.md — istruzioni permanenti per Claude

Il file [[CLAUDE.md]] è il cuore della configurazione. Claude Code lo legge automaticamente ogni volta che viene avviato nella cartella. Contiene:

- Chi sei e che tipo di lavoro fai
- Il tono che vuoi usare nelle risposte
- Le regole operative (es. chiedere conferma prima di eliminare file)
- Istruzioni specifiche per il vault Obsidian

Per crearlo puoi usare Claude Code stesso, oppure qualsiasi editor di testo (anche il Blocco Note di Windows). L'importante è che si chiami esattamente `CLAUDE.md` e si trovi nella radice della cartella di progetto.

Struttura minima consigliata:

```markdown
# Nome del Progetto

## Chi sono
[Descrizione di te e del tuo lavoro]

## Approccio
[Come vuoi lavorare con Claude]

## Note operative
[Regole specifiche: lingua, tono, conferme prima delle modifiche, ecc.]
```

---

### 2.3 Il file MEMORY.md — indice della memoria persistente

Il file [[MEMORY.md]] funziona come un indice: elenca le aree tematiche e punta ad altri file più dettagliati. Claude Code può leggerlo per avere rapidamente il quadro completo del progetto senza dover aprire decine di file.

La struttura consigliata è semplice: sezioni con titoli e brevi descrizioni, eventualmente con wiki-link verso file più specifici.

---

### 2.4 Il file REFERENCES.md — risorse e riferimenti

Il file [[REFERENCES.md]] raccoglie link utili, strumenti, risorse scientifiche o qualsiasi altro riferimento esterno che usi regolarmente. Averlo nel vault ti permette di citarlo nei prompt a Claude e di mantenerlo sempre aggiornato in un posto solo.

---

### 2.5 Avviare Claude Code nella cartella di progetto

Ogni volta che vuoi lavorare con Claude Code sul tuo progetto:

```powershell
cd "C:\Users\umber\studio-mantovan"
claude
```

Claude leggerà automaticamente `CLAUDE.md` e sarà già al corrente di chi sei e come vuoi lavorare.

---

## Parte 3 — Installazione di Obsidian e collegamento del vault

### 3.1 Scaricare e installare Obsidian

1. Vai su **obsidian.md** e scarica la versione per Windows.
2. Esegui il file `.exe`: Obsidian non richiede installazione vera e propria, si avvia direttamente.
3. Al primo avvio ti chiederà di aprire o creare un vault.

---

### 3.2 Collegare Obsidian alla cartella studio-mantovan

Invece di creare un vault nuovo, colleghi Obsidian alla cartella che già esiste sul tuo computer:

1. Nella schermata iniziale di Obsidian clicca su **"Apri cartella come vault"** (o "Open folder as vault").
2. Naviga fino a `C:\Users\umber\studio-mantovan`.
3. Clicca **Seleziona cartella**.

Obsidian caricherà tutti i file `.md` presenti nella cartella. I file `CLAUDE.md`, `MEMORY.md`, `REFERENCES.md` e `GUIDA-CLAUDE-OBSIDIAN.md` appariranno subito nell'elenco.

---

### 3.3 Esplorare l'interfaccia di Obsidian

Una volta aperto il vault, troverai:

- **Pannello sinistro** — elenco di tutti i file del vault
- **Area centrale** — editor del file aperto; alterna tra modalità modifica (matita) e anteprima (occhio) con `Ctrl+E`
- **Pannello destro** — pannello dei backlink (quali file puntano a quello aperto) e altri plugin
- **Grafo** — accessibile da `Ctrl+G`; mostra tutti i file come nodi e i wiki-link come archi

---

### 3.4 La cartella .obsidian

Quando colleghi una cartella come vault, Obsidian crea automaticamente una sottocartella nascosta `.obsidian` con la sua configurazione (temi, plugin, impostazioni). Non è necessario toccarla manualmente.

---

## Parte 4 — Regole wiki-link e come funziona il grafo

### 4.1 Come scrivere un wiki-link

Un wiki-link si scrive sempre con doppie parentesi quadre attorno al nome del file, **senza l'estensione `.md`**:

```
[[MEMORY]]
[[REFERENCES]]
[[GUIDA-CLAUDE-OBSIDIAN]]
```

Se il file si trova in una sottocartella, puoi specificare il percorso relativo:

```
[[sottocartella/nome-file]]
```

Oppure, se hai abilitato la risoluzione automatica (impostazione predefinita in Obsidian), basta il nome del file anche se si trova in una sottocartella.

---

### 4.2 Wiki-link con testo alternativo

Se vuoi che il link mostri un testo diverso dal nome del file, usa la barra verticale `|`:

```
[[MEMORY|Memoria del progetto]]
[[REFERENCES|Risorse utili]]
```

In questo caso il link punterà al file corretto ma mostrerà il testo che hai scelto.

---

### 4.3 Come funziona il grafo

Il grafo di Obsidian (`Ctrl+G`) è una visualizzazione interattiva delle connessioni tra i tuoi file. Ogni file è un **nodo** e ogni wiki-link è un **arco** che collega due nodi.

Più un file ha wiki-link che puntano verso di lui (backlink), più il suo nodo apparirà grande nel grafo. File senza nessun collegamento appaiono come nodi isolati ai margini.

Il grafo è utile per:
- Vedere a colpo d'occhio quali argomenti sono più connessi
- Scoprire file "orfani" che hai dimenticato di collegare
- Navigare il vault in modo visuale invece che gerarchico

---

### 4.4 La regola del cross-linking

Collegare i file tra loro non serve solo a navigare: serve a costruire una **rete di conoscenza**. La regola pratica è:

> Quando crei o modifichi un file, pensa se esistono altri file nel vault che trattano argomenti correlati. Se la correlazione è specifica e sostanziale, aggiungi un wiki-link.

Esempio: se crei un file con appunti su una tecnica di terapia manuale, e nel vault esiste già un file sul dolore cronico, ha senso aggiungere `[[dolore-cronico]]` nel nuovo file. Non ha senso invece aggiungere `[[CLAUDE.md]]` solo perché esiste.

---

### 4.5 Backlink: chi parla di me?

In Obsidian, il pannello dei **backlink** mostra tutti i file che contengono un wiki-link verso il file aperto in quel momento. È l'operazione inversa rispetto al wiki-link: invece di vedere "dove vado", vedi "chi mi cita".

Per aprire il pannello backlink: clicca sull'icona a freccia nel pannello destro, oppure usa `Ctrl+P` e cerca "Mostra backlink".

---

## Sezione finale — Come funzionano insieme Claude Code e Obsidian

### Il flusso di lavoro integrato

Claude Code e Obsidian si completano a vicenda in modo molto naturale:

**Obsidian** è dove *organizzi e visualizzi* la tua conoscenza. Vedi i file come una rete, navighi tra appunti collegati, costruisci il grafo delle idee.

**Claude Code** è dove *lavori attivamente* sui file. Crei nuovi documenti, modifichi quelli esistenti, fai ricerche, generi testi, scrivi script — tutto direttamente nella cartella del vault.

Poiché entrambi lavorano sugli stessi file `.md` nella stessa cartella, ogni modifica fatta con Claude Code appare immediatamente in Obsidian, e viceversa.

---

### Un esempio pratico

Immagina di voler creare una nota su una nuova tecnica che hai studiato:

1. Apri PowerShell e avvia Claude Code nella cartella del vault:
   ```powershell
   cd "C:\Users\umber\studio-mantovan"
   claude
   ```

2. Chiedi a Claude di creare il file:
   ```
   Crea un file note/tecnica-CFT.md con una sintesi della Cognitive Functional Therapy
   ```

3. Claude crea il file, e — seguendo le regole del CLAUDE.md — aggiunge automaticamente wiki-link verso file correlati già presenti nel vault (per esempio verso un file sul dolore cronico, se esiste).

4. Apri Obsidian: il nuovo file è già visibile nell'elenco. Il grafo mostra il nuovo nodo connesso agli altri.

5. Se vuoi fare piccole modifiche manuali o aggiungere appunti personali, lo fai direttamente in Obsidian nell'editor visuale.

---

### Perché CLAUDE.md è così importante

Senza `CLAUDE.md`, ogni volta che avvii Claude Code dovresti rispiegargli chi sei, come lavori, quali regole seguire. Con `CLAUDE.md`, Claude legge tutto questo automaticamente all'avvio e mantiene un comportamento coerente tra una sessione e l'altra.

È come avere un collaboratore che prima di iniziare a lavorare rilegge sempre le note operative condivise. Non devi ripetere le stesse cose ogni volta.

---

### I limiti da tenere presenti

**Claude Code non ha memoria persistente tra sessioni** (a meno di non usare strumenti appositi). Ogni volta che avvii una nuova sessione, Claude ricomincia da capo — ma legge `CLAUDE.md` e tutti i file che gli mostri. Per questo è importante mantenere `CLAUDE.md` e `MEMORY.md` aggiornati: sono la tua "memoria esternalizzata".

**Obsidian non è un database**: è un sistema di file `.md` con una visualizzazione intelligente. Questo è un vantaggio (nessun vendor lock-in, i file sono tuoi per sempre) ma anche un limite (non ha funzionalità avanzate di ricerca full-text come un database).

**I token si consumano**: più file apri in una sessione di Claude Code, più token vengono usati. Mantieni i file di contesto (CLAUDE.md, MEMORY.md) snelli e precisi, così non sprechi token su informazioni ridondanti.

---

*Guida aggiornata a giugno 2026. Per aggiornamenti sugli strumenti, controlla [[REFERENCES]] per i link ufficiali.*
