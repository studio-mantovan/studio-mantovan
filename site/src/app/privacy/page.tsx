import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – Studio Mantovan',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) – Studio Mantovan, Umberto Mantovan.',
}

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  radiusSm:  '8px',
  container: '760px',
  pad:       '1.5rem',
}

export default function PrivacyPage() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px' }}>
      <section style={{ padding: `4rem ${C.pad} 6rem` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.85rem', color: `${C.text}66`, marginBottom: '3rem' }}>
            Ultimo aggiornamento: giugno 2025
          </p>

          <Sezione titolo="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento dei dati personali è:
            </p>
            <InfoBox>
              <strong>Umberto Mantovan</strong> – Studio Mantovan, Fisioterapia in Movimento<br />
              Via Enzo Togni 75, 27043 Broni (PV)<br />
              P.IVA 02842510188<br />
              Email: <a href="mailto:studio.mantovan@gmail.com" style={{ color: C.primary }}>studio.mantovan@gmail.com</a><br />
              Tel: <a href="tel:+393519242517" style={{ color: C.primary }}>351 924 2517</a>
            </InfoBox>
          </Sezione>

          <Sezione titolo="2. Dati raccolti e finalità del trattamento">
            <p>Il sito raccoglie i seguenti dati personali:</p>

            <Sottotitolo>2.1 Modulo di contatto (/prenota)</Sottotitolo>
            <p>
              Quando compili il form di richiesta appuntamento, vengono raccolti: nome e cognome,
              indirizzo email, numero di telefono (facoltativo) e il testo del messaggio.
              Questi dati vengono utilizzati esclusivamente per rispondere alla tua richiesta e,
              se lo desideri, per fissare un appuntamento.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>Base giuridica:</strong> esecuzione di misure precontrattuali adottate su
              richiesta dell&apos;interessato (art. 6, par. 1, lett. b, GDPR).
            </p>

            <Sottotitolo>2.2 Dati di navigazione</Sottotitolo>
            <p>
              I sistemi informatici e le procedure software deputate al funzionamento di questo sito
              acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui
              trasmissione è implicita nell&apos;uso dei protocolli di comunicazione di Internet.
              Si tratta di informazioni che non sono raccolte per essere associate a interessati
              identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed
              associazioni con dati detenuti da terzi, permettere di identificare gli utenti.
              In questa categoria di dati rientrano gli indirizzi IP, il tipo di browser, il sistema
              operativo, il nome a dominio e gli indirizzi dei siti da cui è avvenuto l&apos;accesso.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>Base giuridica:</strong> legittimo interesse del titolare al corretto
              funzionamento del sito (art. 6, par. 1, lett. f, GDPR).
            </p>

            <Sottotitolo>2.3 Cookie</Sottotitolo>
            <p>
              Il sito utilizza cookie tecnici necessari al funzionamento. Per maggiori informazioni
              consulta la <Link href="/cookie" style={{ color: C.primary }}>Cookie Policy</Link>.
            </p>
          </Sezione>

          <Sezione titolo="3. Modalità di trattamento e conservazione">
            <p>
              I dati raccolti tramite il modulo di contatto vengono trasmessi via email al titolare
              e conservati nella casella di posta elettronica. Non vengono registrati in database
              separati né condivisi con terze parti, salvo i casi indicati al punto 4.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              I dati vengono conservati per il tempo strettamente necessario a gestire la
              richiesta e, in caso di avvio di un rapporto professionale, per il periodo previsto
              dalla normativa vigente in materia sanitaria (10 anni dalla conclusione del trattamento,
              ai sensi del D.Lgs. 196/2003 e successive modificazioni).
            </p>
          </Sezione>

          <Sezione titolo="4. Comunicazione dei dati a terzi">
            <p>
              I dati personali non vengono ceduti, venduti né comunicati a terzi per finalità
              commerciali o di marketing.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Per il solo invio delle email generate dal form di contatto, il sito si avvale del
              servizio SMTP di Google (Gmail). Google LLC agisce in qualità di responsabile del
              trattamento. Per informazioni sulle modalità di trattamento dei dati da parte di
              Google, si rimanda alla{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.primary }}>
                Privacy Policy di Google
              </a>.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Il sito è ospitato su Vercel Inc. (USA). Il trasferimento dei dati verso gli USA
              avviene nel rispetto del Data Privacy Framework UE-USA. Per informazioni:
              {' '}<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: C.primary }}>Privacy Policy Vercel</a>.
            </p>
          </Sezione>

          <Sezione titolo="5. Diritti dell'interessato">
            <p>
              Ai sensi degli artt. 15-22 del GDPR, hai il diritto di:
            </p>
            <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Accesso</strong> — ottenere conferma che sia in corso un trattamento di dati che ti riguardano e di accedere a tali dati;</li>
              <li><strong>Rettifica</strong> — richiedere la correzione di dati inesatti o incompleti;</li>
              <li><strong>Cancellazione</strong> — richiedere la cancellazione dei tuoi dati ("diritto all&apos;oblio");</li>
              <li><strong>Limitazione</strong> — richiedere la limitazione del trattamento in determinati casi;</li>
              <li><strong>Portabilità</strong> — ricevere i tuoi dati in formato strutturato e leggibile da dispositivo automatico;</li>
              <li><strong>Opposizione</strong> — opporti al trattamento basato sul legittimo interesse del titolare;</li>
              <li><strong>Revoca del consenso</strong> — revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente alla revoca.</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              Per esercitare i tuoi diritti, puoi scrivere a{' '}
              <a href="mailto:studio.mantovan@gmail.com" style={{ color: C.primary }}>studio.mantovan@gmail.com</a>.
              Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali
              (www.garanteprivacy.it).
            </p>
          </Sezione>

          <Sezione titolo="6. Modifiche alla presente informativa">
            <p>
              Il titolare si riserva il diritto di modificare la presente informativa in qualsiasi
              momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data
              in calce. Si consiglia di consultare periodicamente questa pagina.
            </p>
          </Sezione>

        </div>
      </section>
    </main>
  )
}

/* ── Componenti locali ── */
function Sezione({ titolo, children }: { titolo: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2C2C2C', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #F0F4F5' }}>
        {titolo}
      </h2>
      <div style={{ fontSize: '0.95rem', color: '#2C2C2C99', lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  )
}

function Sottotitolo({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontWeight: 700, color: '#2C2C2C', marginTop: '1.25rem', marginBottom: '0.4rem', fontSize: '0.92rem' }}>
      {children}
    </p>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#F0F4F5', borderRadius: '12px',
      padding: '1.25rem 1.5rem', marginTop: '0.75rem',
      fontSize: '0.9rem', lineHeight: 1.8, color: '#2C2C2C',
    }}>
      {children}
    </div>
  )
}
