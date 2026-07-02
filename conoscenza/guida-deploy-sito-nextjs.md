# Guida Deploy — Sito Next.js + GitHub + Vercel

*Correlati: [[landing-page-style]] · [[brand-colors]] · [[copywriting-rules]]*

---

## Contesto

Questa guida documenta il processo completo per pubblicare il sito **Studio Mantovan** (`umbertomantovan.net`) costruito con Next.js, versionato su GitHub e hostato su Vercel.

Stack usato:
- **Framework:** Next.js (App Router)
- **Repository:** GitHub — `studio-mantovan/studio-mantovan`
- **Hosting:** Vercel
- **Dominio:** registrato su Hostinger
- **Root directory del sito:** `site/` (monorepo — il vault Obsidian è la root del repo)

---

## 1. Struttura del monorepo

```
studio-mantovan/          ← root del repo e vault Obsidian
├── site/                 ← progetto Next.js (root directory per Vercel)
│   ├── src/app/          ← pagine (App Router)
│   ├── src/components/   ← componenti React
│   ├── src/lib/          ← utility e dati (es. patologie.ts)
│   ├── public/photos/    ← foto ottimizzate per il sito
│   └── package.json
├── brand/                ← colori, logo, posizionamento
├── clinica/              ← knowledge base clinica e filosofia
├── copy/                 ← regole copywriting e voice
├── design/               ← linee guida visive
├── servizi/              ← pricing e percorsi
└── marketing/            ← strategie e tempi clinici
```

**Regola foto:** le foto pubbliche del sito vanno in `site/public/photos/`. Per aggiungerle al sito usare il percorso `/photos/nome-file.jpg` (relativo alla cartella `public/`).

---

## 2. Workflow sviluppo locale

```bash
cd site
npm run dev       # avvia su http://localhost:3000
npm run build     # verifica che la build non abbia errori
npm run lint      # controlla errori TypeScript/ESLint
```

Prima di ogni push, eseguire `npm run build` per intercettare errori che bloccherebbero il deploy su Vercel.

---

## 3. Commit e push su GitHub

### Convenzione commit

Due commit separati per tenere la storia pulita:

**Commit 1 — sito:**
```bash
git add site/
git commit -m "feat/fix/chore: descrizione breve"
```

**Commit 2 — vault:**
```bash
git add .
git commit -m "chore: aggiornamenti vault — copy, design, marketing"
```

### Push
```bash
git push origin main
```

Vercel si accorge automaticamente del push e avvia un nuovo deploy.

---

## 4. Setup Vercel (prima volta)

1. Vai su [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → `studio-mantovan/studio-mantovan`
3. Nella configurazione del progetto:
   - **Root Directory:** `site` ← obbligatorio, il repo è un monorepo
   - Framework: Vercel lo rileva automaticamente come Next.js
   - Build Command: lasciare default (`next build`)
   - Output Directory: lasciare default (`.next`)
4. Clicca **Deploy**

Il sito sarà live su `studio-mantovan.vercel.app` in pochi minuti.

---

## 5. Collegare il dominio personalizzato

### Opzione consigliata — Nameserver Vercel (la più pulita)

Questa opzione trasferisce la gestione DNS interamente a Vercel ed evita conflitti con CDN o altri record di Hostinger.

**Su Vercel:**
1. Progetto → **Settings → Domains**
2. Aggiungi `umbertomantovan.net` e `www.umbertomantovan.net`
3. Vercel mostra i nameserver da usare

**Su Hostinger (hPanel):**
1. **Domini** → `umbertomantovan.net` → **Nameservers**
2. Cambia a **Custom nameservers**:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Salva

**Attesa propagazione:** da 30 minuti a 24 ore. Monitorare su [whatsmydns.net/#NS/umbertomantovan.net](https://www.whatsmydns.net/#NS/umbertomantovan.net). Quando la maggioranza dei server mostra i nameserver Vercel, il dominio si attiva automaticamente.

### Alternativa — Record DNS su Hostinger (se CDN è disabilitato)

Se si vuole mantenere Hostinger come DNS provider, disabilitare prima il CDN (hPanel → CDN → disattiva), poi aggiungere:

| Tipo | Nome | Valore |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

⚠️ Con CDN attivo su Hostinger, i record A non possono essere aggiunti. In quel caso usare i nameserver Vercel.

---

## 6. Variabili d'ambiente

Se il sito usa variabili d'ambiente (API key, token, ecc.):

1. Vercel → Progetto → **Settings → Environment Variables**
2. Aggiungere le variabili per Production / Preview / Development
3. Dopo aver aggiunto variabili, fare un nuovo deploy (o **Redeploy** dall'ultimo deployment)

In locale usare il file `site/.env.local` (non committare mai questo file — è già in `.gitignore`).

---

## 7. Deploy automatici

Ogni push su `main` trigghera un deploy automatico su Vercel. Non serve fare nulla manualmente.

Per vedere lo stato del deploy: [vercel.com/dashboard](https://vercel.com/dashboard) → progetto → tab **Deployments**.

---

## 8. Rollback

Se un deploy rompe qualcosa:
1. Vercel → Deployments → seleziona il deployment precedente
2. Clicca **... → Promote to Production**

Il sito torna istantaneamente alla versione precedente.

---

## 9. Checklist deploy nuovo sito (da zero)

- [ ] Creare repo GitHub sotto l'organizzazione `studio-mantovan`
- [ ] Struttura monorepo con `site/` come root Next.js
- [ ] Aggiungere `.gitignore` (node_modules, .env.local, .next)
- [ ] Primo commit e push su `main`
- [ ] Importare su Vercel con Root Directory = `site`
- [ ] Verificare deploy su `*.vercel.app`
- [ ] Aggiungere dominio su Vercel (Settings → Domains)
- [ ] Cambiare nameserver su Hostinger → Vercel
- [ ] Attendere propagazione DNS (monitorare su whatsmydns.net)
- [ ] Verificare HTTPS attivo (lucchetto verde in Vercel → Domains)
- [ ] Aggiornare link su Google My Business con il dominio definitivo

---

## 10. Problemi noti e soluzioni

| Problema | Causa | Soluzione |
|----------|-------|-----------|
| `Cannot add A record when CDN is enabled` | CDN Hostinger attivo | Usare nameserver Vercel invece dei record A |
| `Invalid Configuration` su Vercel dopo cambio nameserver | Propagazione DNS non completata | Attendere 2-24 ore, monitorare su whatsmydns.net |
| Build fallisce su Vercel ma funziona in locale | Dipendenze mancanti o import errati | Eseguire `npm run build` in locale prima del push |
| Foto non visibili in produzione | Percorso errato | Foto devono stare in `site/public/photos/`, path nel codice: `/photos/nome.jpg` |
| Sito non carica dal link Google My Business | Dominio non ancora propagato | Normale durante la propagazione DNS, si risolve da solo |

---

*Creato: giugno 2026*
*Stack: Next.js · GitHub · Vercel · Hostinger*
