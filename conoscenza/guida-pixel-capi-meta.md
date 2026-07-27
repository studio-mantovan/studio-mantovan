# Guida Pixel + Conversion API (CAPI) — Meta Ads

*Correlati: [[guida-meta-ads-instagram-2026]] · [[guida-deploy-sito-nextjs]]*

---

## Contesto

Il solo Meta Pixel (client-side, nel browser) non basta più per via delle restrizioni privacy (iOS, ad-blocker, ITP). La **Conversion API (CAPI)** è un secondo canale, server-side, che invia gli stessi eventi direttamente a Meta senza passare dal browser dell'utente — è un requisito obbligatorio indicato in [[guida-meta-ads-instagram-2026]] §7 prima di lanciare qualsiasi campagna.

Questa guida documenta l'implementazione tecnica fatta sul sito **Studio Mantovan** (Next.js) e il processo — non banale — di configurazione lato Meta Business Manager, comprese le difficoltà incontrate e come risolverle.

Pixel ID: `1940242186680276`

---

## 1. Architettura implementata

```
site/src/lib/meta-pixel.ts        ← helper condiviso: trackMetaEvent('PageView' | 'Lead')
site/src/app/api/meta-capi/route.ts  ← route server-side: inoltra l'evento al Graph API di Meta
site/src/components/MetaPixel.tsx    ← componente client: traccia PageView a ogni cambio pagina
site/src/app/layout.tsx              ← carica lo script fbq (beforeInteractive) + <MetaPixel />
site/src/components/WhatsAppButton.tsx   ← traccia 'Lead' al click (fab globale)
site/src/app/prenota/PrenotaClient.tsx   ← traccia 'Lead' al click (WhatsApp + telefono)
```

**Come funziona la deduplica:** per ogni evento, `trackMetaEvent()` genera un `event_id` univoco (`crypto.randomUUID()`) e lo usa sia nella chiamata `fbq('track', ...)` (client) sia nel payload POST verso `/api/meta-capi` (server). Meta riconosce che i due segnali rappresentano lo stesso evento e li deduplica automaticamente, evitando di contare la stessa conversione due volte.

**Eventi tracciati:**
- `PageView` — a ogni caricamento pagina e ogni navigazione client-side (App Router)
- `Lead` — al click su WhatsApp o sul numero di telefono (fab globale + pagina `/prenota`)

**Comportamento senza token:** se `META_CAPI_ACCESS_TOKEN` non è configurato, la route risponde `{"skipped": true}` senza errori — il sito continua a funzionare normalmente con il solo Pixel client-side finché il token non viene aggiunto.

---

## 2. Creare il System User su Meta Business Manager (da zero)

Percorso completo, incluse le difficoltà reali incontrate la prima volta.

### 2.1 Creare l'utente di sistema

1. **Impostazioni aziendali → Utenti → Utenti di sistema**
2. Crea un nuovo utente di sistema, tipo **Admin** (non "Employee" — i permessi disponibili sono più ristretti e possono causare l'errore "Nessuna autorizzazione disponibile" più avanti)

### 2.2 Assegnare le risorse

Nella schermata dell'utente di sistema, **Assegna risorse**:
- **Pixel/Dataset** → `1940242186680276`
- **WhatsApp** (se collegato)
- **Account pubblicitario**

⚠️ **Se il Pixel non compare nella lista:** non è ancora una risorsa del Business Manager attivo. Verifica in **Impostazioni aziendali → Origini dati → Pixel** (a volte etichettato "Dataset"): se non lo vedi nemmeno lì, va collegato da **Aggiungi → Collega un pixel esistente** con l'ID del pixel. Controlla anche di essere nel Business Manager giusto (in alto a sinistra), se ne gestisci più di uno.

### 2.3 Creare e collegare un'app

Il token di sistema richiede un'app associata. Se non ne hai una:

1. **Impostazioni aziendali → Account → App → Aggiungi → Crea una nuova app**
2. Tipo app: **Business**
3. Caso d'uso: **Altro** (Other) — non serve nessuna integrazione specifica (Facebook Login, WhatsApp Business, ecc.), solo l'accesso a Marketing API/CAPI

### 2.4 Assegnare l'app all'utente di sistema

Passo facile da dimenticare, causa dell'errore più comune (vedi §4):

1. Torna su **Utenti di sistema → [il tuo utente] → Assegna risorse**
2. Categoria **App** → seleziona l'app appena creata
3. Ruolo: **Amministratore** (controllo completo)

### 2.5 Generare il token

1. Dalla stessa schermata utente di sistema → **Genera nuovo token**
2. Seleziona l'app
3. Autorizzazioni: `ads_management` + `business_management`
4. Genera e **copia subito il token** — non sarà più visibile dopo aver chiuso la finestra

---

## 3. Variabili d'ambiente

| Variabile | Dove trovarla | Dove va inserita |
|---|---|---|
| `META_CAPI_ACCESS_TOKEN` | Generata al passo 2.5 | `site/.env.local` + Vercel (Production + Preview) |
| `META_CAPI_TEST_EVENT_CODE` | Gestione Eventi → Pixel → scheda **Eventi di test** | `site/.env.local` + Vercel (Production + Preview) — **solo temporaneo**, vedi §5 |

**Su Vercel:** Settings → Environment Variables. Se marchi il token come variabile **sensibile**, Vercel non permette di includerlo nell'ambiente **Development** (per evitare che finisca in locale via `vercel env pull`) — non è un problema: lo sviluppo locale legge già il valore direttamente da `.env.local`.

Dopo aver aggiunto/modificato variabili su Vercel serve un **redeploy** (Deployments → ultimo deploy → "..." → Redeploy) per applicarle — non avviene automaticamente sui deploy già esistenti.

---

## 4. Problemi noti e soluzioni

| Problema | Causa | Soluzione |
|---|---|---|
| Il Pixel non compare in "Assegna risorse" | Non è ancora risorsa del Business Manager attivo | Verifica/collega da Origini dati → Pixel; controlla di essere nel BM giusto |
| "Nessuna autorizzazione disponibile" alla generazione token | L'app non ha un ruolo assegnato per l'utente di sistema, oppure non ha il prodotto **Marketing API** attivo | 1) Assegna l'app come risorsa all'utente di sistema con ruolo Admin (§2.4). 2) Su developers.facebook.com → l'app → Aggiungi prodotto → **Marketing API** |
| Development non selezionabile su Vercel per una variabile | Comportamento voluto per variabili marcate "sensibili" | Usa solo Production + Preview; in locale il valore arriva da `.env.local`, non da Vercel |
| Route risponde sempre `{"skipped": true}` | `META_CAPI_ACCESS_TOKEN` assente o vuoto nell'ambiente attivo | Verifica che la variabile sia impostata e che il server sia stato riavviato dopo la modifica |

---

## 5. Testare con "Eventi di test"

1. **Gestione Eventi** (business.facebook.com/events_manager2) → seleziona il Pixel/Dataset → scheda **Eventi di test**
2. Copia il codice mostrato (es. `TEST12345`) in `META_CAPI_TEST_EVENT_CODE`
3. Apri il sito (locale o produzione), naviga tra le pagine e clicca su WhatsApp/telefono
4. Nella stessa pagina "Eventi di test" dovresti vedere comparire `PageView` e `Lead` in tempo reale, con provenienza sia **Browser** (Pixel) sia **Server** (CAPI) per lo stesso evento — è la conferma che la deduplica funziona

⚠️ Il codice test è legato alla sessione della pagina: se la riapri in un momento diverso potrebbe cambiare.

---

## 6. Checklist prima del lancio di una campagna

- [ ] `META_CAPI_ACCESS_TOKEN` impostato in produzione (Vercel) e verificato con Eventi di test
- [ ] `META_CAPI_TEST_EVENT_CODE` **rimosso/svuotato** sia da `.env.local` sia da Vercel — altrimenti Meta continua a trattare il traffico come test, non lo usa per ottimizzare le campagne reali
- [ ] Redeploy effettuato dopo la rimozione del test event code
- [ ] Eventi `PageView` e `Lead` verificati almeno una volta in produzione (non solo in locale)

---

*Creato: luglio 2026*
*Stack: Next.js (App Router) · Meta Graph API v21.0 · Vercel*
