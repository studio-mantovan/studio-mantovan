import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chi sono – Umberto Mantovan, fisioterapista a Broni',
  description:
    'Sono Umberto Mantovan, fisioterapista a Broni (PV). Ho aperto il mio studio a fine 2024 dopo anni di esperienza a Sanremo e in uno studio convenzionato. Approccio basato su evidenze, percorsi 1:1, prima visita gratuita.',
}

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  radius:    '16px',
  container: '1100px',
  pad:       '1.5rem',
}

export default function ChiSonoPage() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px' }}>

      {/* ── HERO ── */}
      <section style={{ background: C.bg, padding: `5rem ${C.pad} 3rem` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">

            {/* Foto */}
            <div style={{ position: 'relative', maxWidth: '420px', margin: '0 auto', width: '100%' }}>
              <div style={{
                position: 'absolute', inset: '-1.5rem',
                background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.12) 0%, transparent 70%)',
                borderRadius: '3rem', filter: 'blur(20px)',
                zIndex: 0,
              }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista – Studio Mantovan Broni"
                  width={420}
                  height={420}
                  style={{ objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Intro */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(26,158,201,0.1)', color: C.primary,
                fontSize: '0.7rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
              }}>
                Chi sono
              </span>
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
                color: C.text, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0,
              }}>
                Una sola regola:{' '}
                <span style={{ color: C.primary }}>nessun paziente uguale all&apos;altro.</span>
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.85 }}>
                Sono <strong style={{ color: C.text }}>Umberto Mantovan</strong>, ho 28 anni e sono
                fisioterapista. Ho aperto il mio studio a Broni a fine 2024, nel paese dove sono cresciuto,
                dopo un percorso che mi ha portato lontano — e poi riportato a casa con un&apos;idea
                molto precisa di come voglio lavorare.
              </p>
              <div style={{ marginTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Fisioterapia ad accesso diretto', 'Approccio basato su evidenze', 'Comunicazione efficace'].map((item) => (
                  <span key={item} style={{
                    background: C.white, color: `${C.text}BB`,
                    fontSize: '0.78rem', fontWeight: 600,
                    padding: '6px 14px', borderRadius: '50px',
                    border: `1px solid ${C.surface}`,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORIA ── */}
      <section style={{ background: C.surface, padding: `5rem ${C.pad}` }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <Paragrafo
            label="Le origini"
            titolo="Sono cresciuto a Broni, tra colline e volti familiari."
          >
            L&apos;Oltrepò Pavese è il posto dove sono nato. Una zona dove la vita scorre con un ritmo
            diverso, dove ci si conosce, dove il rapporto umano conta più di qualsiasi altra cosa.
            Credo che questo abbia plasmato molto il modo in cui mi sono avvicinato alla professione:
            con l&apos;idea che dietro ogni paziente ci sia sempre una persona, una storia, un contesto.
          </Paragrafo>

          <Divider />

          <Paragrafo
            label="La formazione"
            titolo="Mi sono laureato a Pavia, nel pieno della pandemia."
          >
            Il Covid ha reso tutto più difficile — tirocini ridotti, università a distanza, esami
            rinviati. Ma quel periodo mi ha insegnato qualcosa di prezioso: ad adattarmi, a trovare
            soluzioni dove sembrava non ce ne fossero, e a non dare nulla per scontato. Mi sono
            laureato in Fisioterapia all&apos;Università degli Studi di Pavia con la convinzione che
            il percorso di studi fosse solo l&apos;inizio — non il punto di arrivo.
          </Paragrafo>

          <Divider />

          <Paragrafo
            label="Sanremo"
            titolo="Il primo salto nel vuoto: aprire la Partita IVA a Sanremo."
          >
            Dopo la laurea me ne sono andato. Ho aperto la mia Partita IVA a Sanremo e ho iniziato
            a costruire qualcosa di mio. È stato il momento più formativo della mia carriera —
            non per quello che ho imparato sui libri, ma per quello che ho imparato su me stesso.
            Cosa significa avere la responsabilità piena di un paziente. Cosa significa decidere,
            senza nessuno alle spalle. Cosa significa sbagliare, e capire da soli dove si è sbagliato.
          </Paragrafo>

          <Divider />

          <Paragrafo
            label="Il ritorno"
            titolo="Lo studio convenzionato: tanti pazienti, poca persona."
          >
            Un anno dopo sono tornato in Oltrepò, in uno studio convenzionato a Casteggio.
            Lì ho avuto la possibilità di lavorare con un volume di pazienti molto alto e di
            affiancare gli studenti di Fisioterapia dell&apos;Università di Pavia durante il tirocinio
            clinico. Guidarli mi ha insegnato che spiegare è la forma più alta di comprensione —
            se non riesci a spiegare una cosa in modo semplice, probabilmente non l&apos;hai ancora
            capita davvero. Ma quell&apos;esperienza mi ha mostrato anche il rovescio della medaglia:
            protocolli standardizzati, poca personalizzazione, tempi stretti che non lasciano spazio
            alla persona.
          </Paragrafo>

          <Divider />

          <Paragrafo
            label="Il mio studio"
            titolo="Fine 2024: apro Studio Mantovan a Broni. Non è una coincidenza."
          >
            Tornare nel paese dove sono cresciuto non è stata una scelta casuale. È stata una scelta
            consapevole: portare un modello di fisioterapia diverso in un posto dove lo conoscevo
            già, dove potevo costruire un rapporto autentico con le persone. Studio Mantovan non è
            solo uno spazio di lavoro — è il luogo dove la mia idea di fisioterapia ha preso forma.
            Trasparente. Basata sulle evidenze scientifiche. Attenta agli aspetti cognitivi,
            psicologici e comunicativi del dolore. Centrata sulla persona, non sul sintomo.
          </Paragrafo>

          <Divider />

          <Paragrafo
            label="L'approccio"
            titolo="La parte più bella — e più difficile — del mio lavoro."
          >
            Mi sono avvicinato con curiosità e rispetto alla parte più profonda di questa professione:
            quella psicologica, relazionale e comunicativa. Il dolore non è mai solo una questione
            meccanica. Dietro ogni lombalgia, ogni sciatalgia, ogni tendinopatia che non guarisce,
            c&apos;è quasi sempre qualcosa di più: paure, credenze, aspettative, storie di vita che
            influenzano il modo in cui una persona si muove e si percepisce. È lì, in quella zona
            d&apos;ombra dove corpo e mente si incontrano, che oggi sento di giocarmi la sfida più
            grande — e più bella — del mio percorso.
          </Paragrafo>

        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: C.primary }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.05)',
          }} />
        </div>
        <div style={{
          position: 'relative', maxWidth: '720px', margin: '0 auto',
          padding: `5rem ${C.pad}`, textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25 }}>
            Se vuoi capire se sono il fisioterapista giusto per te,
            partiamo da una conversazione.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            La prima visita è gratuita — e serve esattamente a questo. Nessun impegno,
            nessuna pressione. Se non sono la persona giusta per il tuo problema,
            te lo dico apertamente.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary,
                fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none', letterSpacing: '0.01em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                whiteSpace: 'nowrap',
              }}
            >
              Prenota la prima visita gratuita →
            </a>
            <a href="tel:+393519242517" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}>
              Chiama: 351 924 2517
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            Rispondo di persona entro 24 ore
          </p>
        </div>
      </section>

    </main>
  )
}

/* ── Componenti locali ── */
function Paragrafo({ label, titolo, children }: { label: string; titolo: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={{
        display: 'inline-block',
        fontSize: '0.68rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: '#5DBFB0', marginBottom: '0.5rem',
      }}>
        {label}
      </span>
      <h2 style={{
        fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 800,
        color: '#2C2C2C', lineHeight: 1.25, marginBottom: '1rem',
      }}>
        {titolo}
      </h2>
      <p style={{ color: '#2C2C2C99', lineHeight: 1.9, fontSize: '1rem' }}>
        {children}
      </p>
    </div>
  )
}

function Divider() {
  return (
    <div style={{
      margin: '3rem 0',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #5DBFB044, transparent)',
    }} />
  )
}
