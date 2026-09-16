import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Mal di schiena a Broni | Studio Mantovan',
  description:
    'Lombalgia e sciatalgia che tornano sempre? Una valutazione che parte da cosa non riesci più a fare, non dalla risonanza. Prima visita gratuita: 351 924 2517.',
  keywords: [
    'mal di schiena Broni',
    'fisioterapista lombalgia Broni',
    'sciatalgia Broni',
    'lombalgia cronica',
    'ernia del disco',
    'fisioterapia schiena Oltrepò Pavese',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/lombalgia',
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

const faqLombalgia = [
  {
    q: 'Ho la risonanza che parla di ernia o protrusione: devo preoccuparmi?',
    a: 'Ernie e protrusioni sono molto comuni anche in persone senza alcun dolore. Da sole non spiegano quasi mai quello che senti — ne parliamo insieme nella valutazione.',
  },
  {
    q: 'Devo riposare finché non passa?',
    a: 'Il riposo prolungato di solito peggiora la situazione: indebolisce i muscoli e alimenta la paura di muoversi. Il movimento, fatto nel modo giusto, è parte della soluzione.',
  },
  {
    q: 'Ho paura che piegarmi o sollevare pesi mi faccia peggiorare.',
    a: 'È la paura più comune che incontro in studio. Nella maggior parte dei casi il problema non è il movimento in sé, ma quanto e come il corpo lo tollera oggi — lo costruiamo insieme, gradualmente.',
  },
  {
    q: 'Quante sedute mi serviranno?',
    a: 'Non lo so ancora — dipende da cosa emerge in valutazione. Non vendo sedute, costruisco un percorso: la durata te la spiego chiaramente in prima visita, che è gratuita.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqLombalgia.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function LombalgiaPage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStripLombalgia />
      <ProblemaSection />
      <SoluzioneSection />
      <NonBastaSection />
      <FasiSection />
      <PercorsiSection />
      <CtaMidSection />
      <ChiSonoSection />
      <DoveSiamoSection />
      <FaqLombalgiaSection />
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
              Fisioterapista a Broni · Mal di schiena e sciatalgia
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Mi hanno detto che è solo mal di schiena.&rdquo;
              <br />
              <span style={{ color: C.primary }}>Ma nessuno ti ha spiegato perché continua a tornare.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un&apos;altra settimana di riposo. Non un altro &ldquo;stai attento a come ti pieghi&rdquo;. Una valutazione che parte da cosa non riesci più a fare, non dalla risonanza.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Molte persone notano i primi miglioramenti già nelle prime settimane di percorso attivo.
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
function ProofStripLombalgia() {
  const items = [
    { icon: '1 su 13', testo: 'persone nel mondo convive con mal di schiena' },
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
            &ldquo;Mi hanno detto di stare attento e aspettare che passasse. È passato.
            Poi è tornato — come sempre.&rdquo;
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '2rem' }}>
            È il pattern che sento raccontare più spesso: un episodio acuto, un periodo di riposo, un miglioramento — e poi, prima o poi, il dolore ricomincia. Magari con la valigia, un movimento brusco, un periodo di stress.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '1.25rem' }}>
            Nel frattempo la vita si restringe: eviti di piegarti, chiedi aiuto per sollevare, ti muovi con più cautela di prima. Non perché la schiena sia fragile — perché nessuno ti ha ancora spiegato cosa la mantiene davvero bloccata.
          </p>
          <div style={{
            marginTop: '1.75rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Il riposo toglie il dolore per un po&apos;. Non spiega perché continua a tornare.
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
              Non serve trovare cosa c&apos;è di &ldquo;rotto&rdquo;.
              <br />
              <span style={{ color: C.primary }}>Serve capire cosa lo mantiene bloccato.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem',
          }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>62%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                delle persone seguite con un percorso attivo e personalizzato raggiunge un <strong>miglioramento significativo e duraturo</strong>, a distanza di 3 anni — contro il 33% con le cure standard.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.secondary, lineHeight: 1 }}>&gt;90%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                dei casi di mal di schiena cronico <strong>non ha una causa strutturale identificabile</strong> — non è colpa di un&apos;immagine, è come il sistema nervoso ha imparato a rispondere.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
            Nel mio studio non parto dalla risonanza.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Parto da te: cosa non riesci più a fare, da quanto tempo, cosa hai già provato — e cosa ti hanno detto che potrebbe succedere se ti muovi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Le paure e le convinzioni sul movimento sono dati clinici tanto quanto il dolore stesso — e spesso sono proprio quelle a tenere il problema bloccato.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Non uso macchinari passivi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            La schiena ritrova forza e fiducia muovendosi, in modo graduale e su misura — non ricevendo un trattamento passivo seduta dopo seduta.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <CtaButton mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COSA NON BASTA DA SOLO ─────────────────── */
function NonBastaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <FadeIn>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa non basta da solo
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.35, maxWidth: '620px' }}>
              &ldquo;Se pensi che per il mal di schiena serva solo riposare o stare attento ai movimenti, ti hanno sempre consigliato male.&rdquo;
            </h2>

            <p style={{ marginTop: '1.5rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              Riposo prolungato, antinfiammatori, liste di movimenti da evitare: sono le risposte più comuni al mal di schiena — e da sole sono anche le meno risolutive. Il dolore innesca la paura, la paura porta a evitare il movimento, l&apos;evitamento indebolisce il corpo, e un corpo indebolito fa più male. Il ciclo si chiude da solo, se non lo si interrompe.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              La strada che funziona meglio è l&apos;opposto: tornare a muoversi nei gesti che spaventano di più — piegarsi, sollevare, girarsi — in modo progressivo e controllato.
            </p>

            <FadeIn delay={0.15}>
              <CtaButton mt="2rem" />
            </FadeIn>
          </FadeIn>

          <FadeIn delay={0.1} direction="right">
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>#1</div>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
                causa di disabilità al mondo — non per gravità della struttura, ma perché <strong>gestito nel modo sbagliato</strong> più di ogni altro disturbo muscolo-scheletrico.
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}66`, fontSize: '0.75rem', lineHeight: 1.6, margin: '0.75rem 0 0' }}>
                Dato OMS 2023, di popolazione — non una previsione individuale.
              </p>
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
    titolo: 'Capire cosa sta succedendo davvero',
    corpo: 'Una risonanza non è ancora una diagnosi. Nella valutazione gratuita ascolto la tua storia, guardo cosa riesci e non riesci a fare, e ti spiego cosa significa — e cosa non significa — quello che hai letto nel referto.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Tornare a fidarti del movimento',
    corpo: 'La schiena si riattiva muovendosi, non stando ferma. Esercizi scelti su misura, carico che aumenta in modo progressivo — proprio sui movimenti che oggi eviti perché ti spaventano di più.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Riprendere la tua vita',
    corpo: 'L\'obiettivo non è solo meno dolore. È piegarti senza pensarci, sollevare tuo figlio, tornare a fare sport. Frequenza che si riduce nel tempo, programma costruito sui tuoi obiettivi reali.',
    tag: 'Autonomia',
  },
]

function FasiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come lavoriamo insieme
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
    <section style={{ background: C.bg }}>
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
              Le linee guida internazionali per il mal di schiena parlano di settimane e mesi, non di un numero fisso di sedute.
            </p>
            <p style={{ marginTop: '0.75rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Per questo non trovi un pacchetto: trovi un percorso costruito sul tempo reale che la tua situazione richiede.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
            maxWidth: '820px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🦴</div>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem',
            }}>
              Mal di schiena persistente
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.6rem' }}>
              Lombalgia cronica, sciatalgia, blocchi ricorrenti
            </h3>
            <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '560px' }}>
              Pensato per chi convive con mal di schiena da settimane o mesi — con o senza ernia visibile in risonanza, con o senza episodi acuti ricorrenti.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '1.75rem' }}>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Primi risultati</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>già in 4-6 settimane</span>
              </div>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Frequenza tipica</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>1-2×/settimana</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(26,158,201,0.06)', borderLeft: `4px solid ${C.primary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '1.1rem 1.4rem', marginBottom: '1.25rem',
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: C.text, fontWeight: 600, lineHeight: 1.5, marginBottom: '0.4rem' }}>
                Tempistiche realistiche
              </p>
              <p style={{ margin: 0, fontSize: '0.86rem', color: `${C.text}99`, lineHeight: 1.7 }}>
                Con 1-2 sedute a settimana, molte persone notano i primi miglioramenti concreti già nelle prime 4-6 settimane — meno dolore, più fiducia nel movimento. Per un cambiamento stabile e duraturo servono statisticamente alcuni mesi di percorso, con la frequenza che scala verso il basso man mano che torni autonomo. Qualche fase di riacutizzazione è normale e non significa che il percorso non stia funzionando.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: 0, lineHeight: 1.7 }}>
              Se il tuo caso è diverso — un episodio acuto recente o una fase post-operatoria —
            </p>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginTop: '0.25rem', lineHeight: 1.7 }}>
              lo capiamo insieme in prima visita, che è gratuita.
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
            Non devi imparare a convivere con il dolore.
            <br />
            Devi solo fare il primo passo.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
            Se ti sei riconosciuto in quello che hai letto, il primo passo è una chiacchierata —
            non un impegno.
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
              Nel mio studio a Broni non uso tecar, laser o ultrasuoni: la schiena ritrova forza e
              fiducia muovendosi, con un percorso costruito insieme a te — mai un protocollo
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

/* ─────────────────── FAQ SPECIFICHE LOMBALGIA ─────────────────── */
function FaqLombalgiaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sul mal di schiena
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqLombalgia.map((f, i) => (
              <div key={i} style={{ background: C.white, borderRadius: C.radius, padding: '1.5rem' }}>
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
            Il primo passo non è decidere di sopportare ancora.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: C.secondary, lineHeight: 1.3 }}>
            È capire cosa sta succedendo davvero.
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
