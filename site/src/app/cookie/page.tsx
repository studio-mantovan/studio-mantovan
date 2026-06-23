import type { Metadata } from 'next'
import Link from 'next/link'
import { ResetButton } from './ResetButton'

export const metadata: Metadata = {
  title: 'Cookie Policy – Studio Mantovan',
  description: 'Informativa sull\'uso dei cookie sul sito di Studio Mantovan – Umberto Mantovan, fisioterapista a Broni (PV).',
}

const C = {
  primary:  '#1A9EC9',
  text:     '#2C2C2C',
  surface:  '#F0F4F5',
  bg:       '#FAFAF8',
  container:'760px',
  pad:      '1.5rem',
}

export default function CookiePage() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px' }}>
      <section style={{ padding: `4rem ${C.pad} 6rem` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '0.85rem', color: `${C.text}66`, marginBottom: '3rem' }}>
            Ultimo aggiornamento: giugno 2025
          </p>

          <Sezione titolo="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al browser, dove vengono
              memorizzati per essere ritrasmessi alla visita successiva. Consentono al sito di ricordare
              le tue azioni e preferenze nel tempo, in modo che non le debba reinserire ogni volta che
              torni sul sito o navighi da una pagina all&apos;altra.
            </p>
          </Sezione>

          <Sezione titolo="Cookie utilizzati da questo sito">

            <TabellaRow header>
              <span>Tipo</span>
              <span>Nome</span>
              <span>Finalità</span>
              <span>Durata</span>
            </TabellaRow>
            <TabellaRow>
              <span>Tecnico</span>
              <span><code>cookie_consent</code></span>
              <span>Memorizza la tua scelta sul banner cookie</span>
              <span>1 anno</span>
            </TabellaRow>
            <TabellaRow>
              <span>Tecnico</span>
              <span>Cookie di sessione Next.js</span>
              <span>Necessari al funzionamento del sito</span>
              <span>Sessione</span>
            </TabellaRow>

            <p style={{ marginTop: '1.5rem' }}>
              Questo sito <strong>non utilizza cookie di profilazione, cookie di tracciamento
              pubblicitario o cookie di terze parti</strong> (Google Analytics, Facebook Pixel,
              ecc.) senza il tuo esplicito consenso.
            </p>
          </Sezione>

          <Sezione titolo="Come gestire i cookie">
            <p>
              Puoi revocare il consenso in qualsiasi momento cliccando il pulsante qui sotto,
              oppure cancellando i cookie dal tuo browser (Impostazioni → Privacy → Cancella dati
              di navigazione).
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Puoi anche configurare il browser per rifiutare tutti i cookie o per ricevere una
              notifica ogni volta che viene inviato un cookie. Tieni presente che disabilitare i
              cookie tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>
            <ResetButton />
          </Sezione>

          <Sezione titolo="Ulteriori informazioni">
            <p>
              Per informazioni più dettagliate sul trattamento dei dati personali, consulta la{' '}
              <Link href="/privacy" style={{ color: C.primary }}>Privacy Policy</Link>.
              Per domande sull&apos;uso dei cookie puoi scrivere a{' '}
              <a href="mailto:studio.mantovan@gmail.com" style={{ color: C.primary }}>
                studio.mantovan@gmail.com
              </a>.
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

function TabellaRow({ children, header }: { children: React.ReactNode; header?: boolean }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1.5fr 2.5fr 1fr',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      background: header ? '#F0F4F5' : '#fff',
      borderBottom: '1px solid #F0F4F5',
      fontSize: header ? '0.75rem' : '0.85rem',
      fontWeight: header ? 700 : 400,
      color: header ? '#2C2C2C' : '#2C2C2C99',
      borderRadius: header ? '8px 8px 0 0' : '0',
    }}>
      {children}
    </div>
  )
}

