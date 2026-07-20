import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Dolore alla spalla a Broni | Studio Mantovan',
  description:
    'Hai un referto con scritto "lesione della cuffia"? Prima di operarti o rifare un\'infiltrazione, una valutazione vera a Broni. Prima visita gratuita: 351 924 2517.',
  keywords: [
    'dolore spalla Broni',
    'fisioterapista spalla Broni',
    'cuffia dei rotatori',
    'lesione cuffia rotatori',
    'RCRSP',
    'fisioterapia spalla Oltrepò Pavese',
    'spalla congelata',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/spalla',
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

const jsonLdPhysicalTherapist = {
  '@context': 'https://schema.org',
  '@type': 'PhysicalTherapist',
  name: 'Studio Mantovan – Fisioterapia in Movimento',
  url: 'https://umbertomantovan.net/patologie/spalla',
  telephone: '+393519242517',
  email: 'studio.mantovan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Enzo Togni 75',
    addressLocality: 'Broni',
    addressRegion: 'PV',
    postalCode: '27043',
    addressCountry: 'IT',
  },
  areaServed: ['Broni', 'Stradella', 'Casteggio', 'Oltrepò Pavese'],
  priceRange: '€€',
  sameAs: [
    'https://www.instagram.com/studio.mantovan',
    'https://www.facebook.com/studio.mantovan',
  ],
  description:
    'Fisioterapista a Broni per dolore alla spalla e cuffia dei rotatori. Percorso attivo 1:1, prima visita gratuita.',
  founder: { '@type': 'Person', name: 'Umberto Mantovan' },
}

const faqSpalla = [
  {
    q: 'Ho una lesione alla cuffia dei rotatori: devo operarmi?',
    a: 'Non necessariamente. Il referto va sempre letto insieme al quadro clinico completo — ne parliamo nella prima visita gratuita.',
  },
  {
    q: 'Il cortisone mi ha aiutato per un po’, poi il dolore è tornato: cosa faccio adesso?',
    a: 'È un pattern comune. Il passo successivo è costruire un percorso che lavori sulla causa del sovraccarico, non solo sul sintomo del momento.',
  },
  {
    q: 'Quante sedute mi serviranno?',
    a: 'Non lo so ancora — dipende da cosa emerge in valutazione. Non vendo sedute, costruisco un percorso: la durata te la spiego chiaramente in prima visita, che è gratuita.',
  },
  {
    q: 'Ho paura che muovere la spalla peggiori la situazione.',
    a: 'Nella maggior parte dei casi il movimento guidato è la soluzione, non il rischio. Ne parliamo insieme, con calma, in valutazione.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSpalla.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function SpallaPage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPhysicalTherapist) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStripSpalla />
      <ProblemaSection />
      <SoluzioneSection />
      <NonBastaSection />
      <FasiSection />
      <PercorsiSection />
      <CasoRealeSection />
      <TestimonianzaSection />
      <CtaMidSection />
      <ChiSonoSection />
      <DoveSiamoSection />
      <FaqSpallaSection />
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
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center"
      >
        <div>
          <FadeIn>
            <span style={{
              display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
            }}>
              Fisioterapista a Broni · Dolore alla spalla e cuffia dei rotatori
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              Hai un referto che dice &ldquo;lesione della cuffia&rdquo;
              <br />
              <span style={{ color: C.primary }}>e nessuno ti ha ancora spiegato cosa significa per te.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un&apos;altra infiltrazione. Non un altro &ldquo;aspetta e vedi&rdquo;. Una valutazione che parte da cosa non riesci più a fare, non dall&apos;immagine.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              I primi risultati arrivano spesso già nelle prime 6 settimane di percorso attivo.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
              Rispondo di persona entro 24 ore — nessuna diagnosi prima di averti visitato
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} direction="right">
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute', inset: '-1.5rem',
              background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.18) 0%, transparent 70%)',
              borderRadius: '2.5rem', filter: 'blur(20px)',
            }} />
            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
              <Image
                src="/photos/f-spalla-davide.jpg"
                alt="Paziente che solleva un bilanciere sopra la testa senza dolore, dopo un percorso attivo in studio"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStripSpalla() {
  const items = [
    { icon: '39%', testo: 'delle persone senza dolore ha una lesione della cuffia visibile in ecografia' },
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
            &ldquo;Mi hanno detto che devo operarmi. Ma nessuno mi ha chiesto cosa faccio
            tutto il giorno con quella spalla.&rdquo;
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '2rem' }}>
            È la frase che sento più spesso in prima visita. Il referto arriva prima della conversazione. La cuffia della risonanza diventa la spiegazione di tutto — anche di cose che quella lesione, da sola, non spiega.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '1.25rem' }}>
            Nel frattempo la vita si restringe: la giacca che non infili più di scatto, la notte che si spezza quando ti giri, lo scaffale alto che eviti. Non perché la spalla sia rotta — perché nessuno ti ha ancora detto cosa puoi davvero fare con quello che hai.
          </p>
          <div style={{
            marginTop: '1.75rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Il referto che hai in mano ti dice cosa c&apos;è. Non ti dice cosa fare.
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
              Vedere una lesione nel referto
              <br />
              <span style={{ color: C.primary }}>non significa dover operare.</span>
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
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>39%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                delle persone <strong>senza alcun dolore</strong> alla spalla ha una lesione della cuffia dei rotatori visibile in ecografia.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.secondary, lineHeight: 1 }}>2 su 3</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                lesioni della cuffia dopo i 60 anni <strong>non danno nessun sintomo</strong>.
              </p>
              <p style={{ color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.4rem 0 0' }}>
                Non sono automaticamente la causa del tuo dolore attuale.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
            Nel mio studio non parto dall&apos;immagine.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Parto da te: cosa non riesci più a fare, da quanto tempo, cosa hai già provato.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            La valutazione clinica — non solo la risonanza — è quello che guida la decisione su cosa fare davvero.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Non uso macchinari passivi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            La spalla recupera forza e mobilità muovendosi, in modo graduale e su misura — non ricevendo un trattamento passivo seduta dopo seduta.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Se fai sport (nuoto, tennis, pallavolo, lancio), guardo anche oltre la spalla.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Spesso il sovraccarico nasce più in basso, da anca o gambe che non trasferiscono più la forza come dovrebbero.
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
              &ldquo;Se pensi che per una lesione alla cuffia serva solo operarti, o smettere di sforzare il braccio, ti hanno sempre consigliato male.&rdquo;
            </h2>

            <p style={{ marginTop: '1.5rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              Riposo assoluto, evitare ogni movimento doloroso, infiltrazioni, onde d&apos;urto: sono le prescrizioni più comuni per il dolore alla spalla — e da sole sono anche le meno risolutive. Possono ridurre il dolore per un periodo limitato, ma nessuno studio dimostra che sostituiscano un percorso di carico attivo.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              La strada che funziona meglio è l&apos;esposizione graduale: tornare a muovere la spalla nei gesti che fanno male — anche e soprattutto con i pesi — in modo progressivo e controllato.
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
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>9 su 10</div>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
                persone, in un percorso riabilitativo strutturato, <strong>evitano l&apos;intervento chirurgico</strong>.
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}66`, fontSize: '0.75rem', lineHeight: 1.6, margin: '0.75rem 0 0' }}>
                Dato di popolazione da programmi conservativi strutturati, non una garanzia individuale.
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
    corpo: 'Una lesione nel referto non è ancora una diagnosi. Nella valutazione gratuita ascolto la tua storia, guardo cosa riesci e non riesci a fare, e ti spiego cosa significa — e cosa non significa — quello che hai letto nel referto.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Ritrovare fiducia nel movimento',
    corpo: 'La spalla si riattiva muovendosi, non stando ferma. Esercizi scelti su misura, carico che aumenta in modo progressivo. Uso anche la terapia manuale come strumento per iniziare a muoverti prima e con meno fatica — mai come unico trattamento.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Tornare alle attività che contano per te',
    corpo: 'L’obiettivo non è solo meno dolore. È rimettere la giacca senza pensarci, tornare in acqua, tornare in campo. Frequenza che si riduce nel tempo, programma costruito sui tuoi obiettivi reali.',
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
              Le linee guida internazionali per i disturbi muscolo-scheletrici parlano di settimane e mesi, non di un numero fisso di sedute.
            </p>
            <p style={{ marginTop: '0.75rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Per questo non trovi un pacchetto: trovi un percorso costruito sul tempo reale che il tuo tipo di dolore richiede.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
            maxWidth: '820px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🌀</div>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem',
            }}>
              Dolore persistente alla spalla
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.6rem' }}>
              Cuffia dei rotatori, dolore cronico o ricorrente
            </h3>
            <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '560px' }}>
              Pensato per chi convive con dolore alla spalla da settimane o mesi — con o senza lesione visibile in imaging, con o senza infiltrazioni già tentate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '1.75rem' }}>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Primi risultati</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>già in 6 settimane</span>
              </div>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Frequenza tipica</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>1×/settimana</span>
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
                Con un trattamento a settimana, già nelle prime 6 settimane molte persone notano i primi risultati concreti: meno dolore, più libertà di movimento. Per una risoluzione stabile del problema servono invece, statisticamente, 3–6 mesi di percorso. Non è una linea retta: qualche fase di riacutizzazione è normale e non significa che il percorso non stia funzionando.
              </p>
            </div>

            <div style={{
              background: 'rgba(93,191,176,0.08)', borderLeft: `3px solid ${C.secondary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '0.85rem 1.1rem',
            }}>
              <p style={{ margin: 0, fontSize: '0.8rem', color: C.text, fontWeight: 600, lineHeight: 1.5 }}>
                🎁 Completando il percorso: 1 seduta di rivalutazione gratuita ogni 3 mesi di trattamento, da usare entro 30 giorni dal termine.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: 0, lineHeight: 1.7 }}>
              Se il tuo caso è diverso — un trauma recente o una fase post-operatoria —
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

/* ─────────────────── CASO REALE — ROMULUS ─────────────────── */
function CasoRealeSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '420px' }}>
              <div style={{
                position: 'absolute', inset: '-1.5rem',
                background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.12) 0%, transparent 70%)',
                borderRadius: '3rem', filter: 'blur(20px)',
              }} />
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1rem',
                boxShadow: '0 16px 48px rgba(0,0,0,0.1)', position: 'relative',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1079/565', borderRadius: C.radiusSm, overflow: 'hidden' }}>
                  <Image
                    src="/photos/testimonianza-romulus-google.png"
                    alt="Recensione Google di Romulus Halangescu su Studio Mantovan"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Caso reale
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Romulus, 50 anni
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.85 }}>
              Romulus è arrivato in studio dopo un problema serio a un tendine della spalla.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.85 }}>
              Il percorso è stato costruito seduta dopo seduta, con attenzione specifica alla sua situazione.
            </p>
            <p style={{ marginTop: '1rem', color: C.text, fontWeight: 600, lineHeight: 1.85 }}>
              Oggi Romulus è tornato a muovere la spalla normalmente — questa è la sua recensione, pubblicata su Google.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── TESTIMONIANZE — RECENSIONI GOOGLE ─────────────────── */
const recensioniSpalla = [
  { file: 'testimonianza-antonio-ferrari-google.png', alt: 'Recensione Google di Antonio Ferrari su Studio Mantovan' },
  { file: 'testimonianza-giacomo-maini-google.png', alt: 'Recensione Google di Giacomo Maini su Studio Mantovan' },
  { file: 'testimonianza-letizia-casella-google.png', alt: 'Recensione Google di Letizia Casella su Studio Mantovan' },
]

function TestimonianzaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa dicono i pazienti
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem' }}>
              Recensioni Google verificate
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recensioniSpalla.map((r, i) => (
            <StaggerItem key={r.file}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: `4px solid ${C.secondary}`,
                height: '100%',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/1', borderRadius: C.radiusSm, overflow: 'hidden' }}>
                  <Image
                    src={`/photos/${r.file}`}
                    alt={r.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 520px"
                    loading={i === 0 ? undefined : 'lazy'}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
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
            Non devi decidere se operarti oggi.
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
            📍 Via Enzo Togni 75, 27043 Broni (PV) · 📞{' '}
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
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '380px' }}>
              <div style={{ position: 'relative', aspectRatio: '1', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Sono Umberto Mantovan, fisioterapista.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Nel mio studio a Broni non uso tecar, laser o ultrasuoni: la spalla riprende forza e
              mobilità muovendosi, con un percorso costruito insieme a te — mai un protocollo
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
    { label: 'Indirizzo', value: 'Via Enzo Togni 75, 27043 Broni (PV)' },
    { label: 'Orari', value: 'Lun 15–20 · Mer–Gio 08–20 · Sab 14–19 · Solo su appuntamento' },
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
                title="Studio Mantovan – Via Enzo Togni 75, Broni (PV)"
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

/* ─────────────────── FAQ SPECIFICHE SPALLA ─────────────────── */
function FaqSpallaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sulla spalla
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqSpalla.map((f, i) => (
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
            Il primo passo non è decidere se operarti.
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
            📍 Via Enzo Togni 75, 27043 Broni (PV)
          </p>
          <p style={{ marginTop: '0.35rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📞 351 924 2517 · ✉️ studio.mantovan@gmail.com
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
