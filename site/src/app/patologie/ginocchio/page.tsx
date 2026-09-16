import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Ginocchio: riabilitazione post-operatoria a Broni | Studio Mantovan',
  description:
    'L’intervento è andato bene ma il ginocchio non è come prima? Il deficit di forza del quadricipite va recuperato attivamente. Prima visita gratuita: 351 924 2517.',
  keywords: [
    'riabilitazione ginocchio Broni',
    'fisioterapia dopo artroscopia menisco',
    'fisioterapia pre-operatoria protesi ginocchio',
    'deficit quadricipite',
    'fisioterapista ginocchio Oltrepò Pavese',
    'riabilitazione post-operatoria ginocchio',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/ginocchio',
  },
}

/* ─── Costanti design system (da landing-page-style.md) ─── */
const C = {
  primary:        '#1A9EC9',
  primaryDark:    '#147FA0',
  secondary:      '#5DBFB0',
  secondaryLight: '#7ED4C8',
  bg:             '#FAFAF8',
  text:           '#2C2C2C',
  surface:        '#F0F4F5',
  white:          '#FFFFFF',
  radius:         '16px',
  radiusSm:       '8px',
  radiusLg:       '24px',
  container:      '1100px',
  pad:            '1.5rem',
}

/* ─── CTA primaria ─── */
function CtaButton({ center = false, mt = '2rem' }: { center?: boolean; mt?: string }) {
  return (
    <div style={{ marginTop: mt, display: 'flex', justifyContent: center ? 'center' : 'flex-start' }}>
      <a
        href="/prenota"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.primary, color: '#fff',
          fontWeight: 700, fontSize: '1rem',
          padding: '14px 28px', borderRadius: '50px',
          textDecoration: 'none', letterSpacing: '0.01em',
          boxShadow: '0 6px 24px rgba(26,158,201,0.28)',
          whiteSpace: 'nowrap',
        }}
      >
        Prenota la valutazione gratuita →
      </a>
    </div>
  )
}

const faqGinocchio = [
  {
    q: 'Il chirurgo mi ha detto che l’intervento è andato bene. Perché il ginocchio non è come prima?',
    a: 'È molto comune: dopo l’intervento il quadricipite perde forza rapidamente — un meccanismo di protezione, non un danno. Va recuperato con un lavoro attivo, non torna da solo.',
  },
  {
    q: 'Camminare un po’ non basta a recuperare?',
    a: 'No. Il cammino normale richiede molta meno forza di scale, alzarsi dalla sedia o tornare allo sport — serve un lavoro specifico e progressivo su quel muscolo.',
  },
  {
    q: 'Devo fare fisioterapia anche prima dell’intervento, se devo operarmi?',
    a: 'Sì, se possibile. Arrivare all’intervento con più forza e aspettative realistiche rende il recupero dopo più veloce e meno faticoso.',
  },
  {
    q: 'Sono passati mesi dall’intervento: è tardi per iniziare un percorso?',
    a: 'No. Un ginocchio che non si è mai allenato correttamente dopo l’operazione può ancora recuperare — serve un punto di partenza onesto, non importa quanto tempo sia passato.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGinocchio.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function GinocchioPage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStripGinocchio />
      <ProblemaSection />
      <SoluzioneSection />
      <TestSection />
      <FasiSection />
      <PercorsiSection />
      <CtaMidSection />
      <ChiSonoSection />
      <DoveSiamoSection />
      <FaqGinocchioSection />
      <FaqSection />
      <CtaFinaleSection />
    </div>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', paddingTop: '68px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div
        style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad} 3.5rem`, position: 'relative' }}
        className="grid grid-cols-1"
      >
        <div style={{ maxWidth: '680px' }}>
          <FadeIn>
            <span style={{
              display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
            }}>
              Fisioterapista a Broni · Ginocchio e riabilitazione post-operatoria
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Il chirurgo mi ha detto che è andato tutto bene.&rdquo;
              <br />
              <span style={{ color: C.primary }}>Ma il ginocchio non è come prima.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un altro &ldquo;cammina un po&apos; e vedrai&rdquo;. Una valutazione che parte da quanta forza hai recuperato davvero, non dal referto chirurgico.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              L&apos;intervento sistema la struttura. Il lavoro per tornare a fare le scale, lo sport, la tua vita, comincia dopo — ed è quello che faccio io.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
              Rispondo di persona entro 24 ore — nessuna diagnosi prima di averti visitato
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStripGinocchio() {
  const items = [
    { icon: '50-70%', testo: 'di forza del quadricipite persa nelle prime 48 ore dopo l’intervento' },
    { icon: '✓', testo: 'Prima visita gratuita' },
    { icon: '✓', testo: '5+ anni in ambito muscolo-scheletrico' },
  ]

  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
      }}>
        {items.map((item) => {
          const isStat = item.icon !== '✓'
          return (
            <div key={item.testo} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
            }}>
              <span style={{
                minWidth: isStat ? 'auto' : '22px', height: isStat ? 'auto' : '22px',
                padding: isStat ? '2px 10px' : 0,
                borderRadius: isStat ? '50px' : '50%', background: C.secondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isStat ? '0.85rem' : '0.72rem', fontWeight: 800, color: '#fff', flexShrink: 0,
              }}>
                {item.icon}
              </span>
              {item.testo}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─────────────────── PROBLEMA ─────────────────── */
function ProblemaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Ti riconosci in questo?
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.05rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.4 }}>
            &ldquo;Mi hanno detto solo di camminare un po&apos; e muoverlo nel letto. Nessuno mi ha parlato di riprendere forza.&rdquo;
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '2rem' }}>
            È quello che sento raccontare più spesso, anche mesi dopo un&apos;artroscopia o una protesi: i punti si sono chiusi, il referto dice tutto ok, ma scendere le scale resta un&apos;impresa e il ginocchio si sente instabile in salita.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '1.25rem' }}>
            &ldquo;Il ginocchio funziona dal punto di vista chirurgico&rdquo; e &ldquo;il ginocchio funziona nella tua vita di tutti i giorni&rdquo; sono due cose diverse — e nessuno te lo ha spiegato in ospedale.
          </p>
          <div style={{
            marginTop: '1.75rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
              L&apos;intervento sistema la struttura. Non ti restituisce automaticamente la forza.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── SOLUZIONE ─────────────────── */
function SoluzioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Perché è diverso
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Il quadricipite non si spegne per un danno.
              <br />
              <span style={{ color: C.primary }}>Si spegne per proteggerti — e va riacceso.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem',
          }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>50-70%</div>
            <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.95rem', lineHeight: 1.8, margin: '0.6rem 0 0' }}>
              È il deficit di forza del quadricipite che si misura nelle prime 24-48 ore dopo l&apos;intervento, rispetto alla gamba sana. Non è un danno muscolare: il gonfiore e il dolore articolare inibiscono il muscolo come meccanismo di protezione. Il muscolo c&apos;è — semplicemente non si &ldquo;accende&rdquo; come prima.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
            Il cammino normale non basta a riattivarlo: richiede molta meno forza rispetto a salire una scala, alzarsi da una sedia o tornare allo sport.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Se non si lavora attivamente per recuperare quella forza, il deficit può restare per mesi — anche quando il referto dice che è tutto a posto.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Non uso macchinari passivi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Il ginocchio ritrova forza e stabilità muovendosi, con carico progressivo e su misura — non ricevendo un trattamento passivo seduta dopo seduta.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <CtaButton mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── IL TEST CHE PUOI FARE A CASA ─────────────────── */
function TestSection() {
  const punti = [
    'Riesci ad alzarti senza usare le mani per spingere?',
    'Il ginocchio rimane stabile o tende a cedere verso l’interno?',
    'C’è una differenza evidente di difficoltà tra i due lati?',
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <FadeIn>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Un test che puoi fare a casa
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.35, maxWidth: '620px' }}>
              Alzati da una sedia su una sola gamba. Prima con la sana, poi con quella operata.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              Non sostituisce una valutazione professionale, ma ti dà un riferimento concreto. Se la differenza tra le due gambe è marcata — o non riesci a completare il movimento sul lato operato — il quadricipite non ha ancora recuperato la forza necessaria per le attività di tutti i giorni. Non è un problema grave: è un punto di partenza su cui lavorare.
            </p>
            <FadeIn delay={0.1}>
              <CtaButton mt="1.75rem" />
            </FadeIn>
          </FadeIn>

          <FadeIn delay={0.1} direction="right">
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.95rem', marginBottom: '1rem' }}>
                Cosa osservare:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {punti.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                    <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                    <p style={{ margin: 0, color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.6 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── LE 3 FASI ─────────────────── */
const fasi = [
  {
    num: '01',
    titolo: 'Valutazione iniziale',
    corpo: 'Guardiamo insieme forza, mobilità, stabilità e quali movimenti o attività creano ancora difficoltà. Esci dalla visita gratuita con un quadro chiaro della situazione reale — non di quella attesa secondo un protocollo standard.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Percorso attivo',
    corpo: 'Programma di esercizio progressivo calibrato sul tuo punto di partenza e sui tuoi obiettivi concreti: le scale, il lavoro, lo sport. Dove serve, aggiungo terapia manuale per recuperare i movimenti dell\'articolazione — mai come trattamento isolato.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Ritorno alle attività',
    corpo: 'Lavoriamo verso un ritorno graduale alle attività che per te contano, con la fiducia nel ginocchio che si costruisce passo dopo passo — non da un giorno all\'altro.',
    tag: 'Autonomia',
  },
]

function FasiSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come lavoro sul ginocchio
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Il percorso in 3 fasi
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fasi.map((fase) => (
            <StaggerItem key={fase.num}>
              <div style={{
                position: 'relative', background: C.white, borderRadius: C.radiusLg,
                padding: '2rem', height: '100%', overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  position: 'absolute', top: '-16px', right: '-8px',
                  fontSize: '7rem', fontWeight: 800, lineHeight: 1,
                  color: `${C.primary}0F`, userSelect: 'none',
                }}>
                  {fase.num}
                </div>
                <span style={{
                  display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                  fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '4px 10px', borderRadius: '50px', marginBottom: '1rem',
                }}>
                  {fase.tag}
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {fase.titolo}
                </h3>
                <p style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.8, margin: 0 }}>
                  {fase.corpo}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <CtaButton center mt="3rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PERCORSO ─────────────────── */
function PercorsiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Il percorso
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Non compri sedute.
              <br />
              <span style={{ color: C.primary }}>Entri in un percorso.</span>
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              I tempi dipendono dal tipo di intervento — non trovi un pacchetto standard, trovi un percorso costruito sul tuo punto di partenza reale.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
            maxWidth: '820px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🦵</div>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem',
            }}>
              Riabilitazione post-operatoria ginocchio
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.6rem' }}>
              Artroscopia, protesi, meniscectomia, sutura del menisco
            </h3>
            <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '560px' }}>
              Pensato sia per chi deve ancora affrontare l&apos;intervento (fisioterapia pre-operatoria) sia per chi lo ha già fatto e non ha ancora recuperato del tutto.
            </p>

            <div style={{
              background: 'rgba(26,158,201,0.06)', borderLeft: `4px solid ${C.primary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '1.1rem 1.4rem', marginBottom: '1.25rem',
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: C.text, fontWeight: 600, lineHeight: 1.5, marginBottom: '0.4rem' }}>
                Tempistiche realistiche (indicative, non scadenze)
              </p>
              <p style={{ margin: 0, fontSize: '0.86rem', color: `${C.text}99`, lineHeight: 1.7 }}>
                Dopo una <strong>meniscectomia parziale</strong>, molte persone tornano alle attività quotidiane senza grosse limitazioni in <strong>3-6 settimane</strong>, e a un&apos;attività sportiva moderata in <strong>2-3 mesi</strong> — se il lavoro sulla forza viene affrontato attivamente. Dopo una <strong>sutura del menisco</strong> i tessuti hanno bisogno di più tempo: il ritorno allo sport richiede in genere <strong>4-6 mesi</strong>. Per una <strong>protesi</strong>, il recupero completo richiede mesi, non settimane — chi arriva all&apos;intervento con più forza recupera più velocemente e con meno dolore.
              </p>
            </div>

            <p style={{ margin: 0, fontSize: '0.85rem', color: `${C.text}77`, lineHeight: 1.7 }}>
              <strong style={{ color: C.text }}>Frequenza:</strong> più intensa nelle prime settimane, quando il deficit di forza è più marcato; si dirada man mano che recuperi forza e autonomia negli esercizi. Nessun numero fisso di sedute: la cadenza si calibra su come risponde il tuo ginocchio.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: 0, lineHeight: 1.7 }}>
              Se sono passati mesi dall&apos;intervento e non hai mai fatto un percorso attivo —
            </p>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginTop: '0.25rem', lineHeight: 1.7 }}>
              non è tardi. Ne parliamo in prima visita, che è gratuita.
            </p>
            <CtaButton center mt="1.25rem" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CTA AZZURRA ─────────────────── */
function CtaMidSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: C.primary }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }} />
      </div>
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Il recupero non finisce quando si chiude la ferita.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
            Finisce quando il ginocchio torna a fare quello che ti serve: le scale, il lavoro, lo sport, la vita che avevi prima.
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
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)', whiteSpace: 'nowrap',
              }}
            >
              Prenota la valutazione gratuita →
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            Senza impegno · Prima visita gratuita
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV · 📞{' '}
            <a href="tel:+393519242517" style={{ color: '#fff', textDecoration: 'underline' }}>351 924 2517</a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div style={{ maxWidth: '680px' }}>
          <FadeIn>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Sono Umberto Mantovan, fisioterapista.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Nel mio studio a Broni non uso tecar, laser o ultrasuoni: il ginocchio ritrova forza
              e stabilità muovendosi, con un percorso costruito insieme a te — mai un protocollo
              uguale per tutti.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Ogni seduta è 1:1, dedicata completamente a te. E prima di iniziare qualsiasi
              percorso, la prima visita è gratuita: serve a capire insieme se questa è davvero la
              strada giusta per te.
            </p>
            <CtaButton mt="1.75rem" />
            <Link
              href="/chi-sono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '1rem',
                fontSize: '0.9rem', fontWeight: 600, color: C.primary, textDecoration: 'none',
              }}
            >
              Scopri di più su di me →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DOVE SIAMO ─────────────────── */
function DoveSiamoSection() {
  const info = [
    { label: 'Indirizzo', value: 'Via Enzo Togni, 75, 27043 Broni PV' },
    { label: 'Orari', value: 'Lun, Mer, Gio 08–20 · Sab 14–19 · Solo su appuntamento' },
    { label: 'Telefono', value: '351 924 2517' },
    { label: 'Email', value: 'studio.mantovan@gmail.com' },
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Dove siamo
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Studio Mantovan · Broni (PV)
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <FadeIn direction="left">
            <div style={{
              borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              aspectRatio: '16/9', position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.123456789!2d9.259!3d45.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787c3c3c3c3c3c3%3A0x0!2sVia+Enzo+Togni+75%2C+27043+Broni+PV!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Mantovan – Via Enzo Togni, 75, Broni PV"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}>
              {info.map((item) => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.secondary }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: C.text, fontWeight: 500, lineHeight: 1.6 }}>
                    {item.value}
                  </span>
                </div>
              ))}

              <div style={{ paddingTop: '0.5rem', borderTop: `1px solid ${C.surface}`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://wa.me/393519242517"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                    padding: '12px 20px', borderRadius: '50px', textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                  }}
                >
                  Scrivimi su WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Via+Enzo+Togni+75,+Broni+PV"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.85rem', fontWeight: 600, color: C.primary, textDecoration: 'none',
                  }}
                >
                  Apri in Google Maps →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FAQ SPECIFICHE GINOCCHIO ─────────────────── */
function FaqGinocchioSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sul ginocchio
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqGinocchio.map((f, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: C.radius, padding: '1.5rem' }}>
                <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.92rem' }}>{f.q}</p>
                <p style={{ marginTop: '0.5rem', color: `${C.text}88`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.5rem 0 0' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINALE ─────────────────── */
function CtaFinaleSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: C.text }}>
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Hai già aspettato settimane, o mesi?
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: C.secondary, lineHeight: 1.3 }}>
            Non è tardi per iniziare.
          </p>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.8 }}>
            La prima visita è gratuita, senza impegno.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
                letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(26,158,201,0.3)', whiteSpace: 'nowrap',
              }}
            >
              Prenota la valutazione gratuita →
            </a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV
          </p>
          <p style={{ marginTop: '0.35rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📞 351 924 2517 · ✉️ studio.mantovan@gmail.com
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
