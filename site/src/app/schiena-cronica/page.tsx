import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ContactForm } from '@/components/ContactForm'
import {
  ArrowDown, Dumbbell,
  Pill, BedDouble, Syringe, ClipboardList,
  Armchair, Weight, Footprints,
  Stethoscope, CalendarCheck, RefreshCw,
  TrendingUp, Unlock,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mal di Schiena o Sciatalgia da Mesi? | Studio Mantovan',
  description:
    'Mal di schiena o sciatalgia che dura da mesi? Percorso di fisioterapia attiva a Broni (PV), mese per mese, senza pacchetti di sedute fisse. Visita gratuita: 351 924 2517.',
  robots: { index: false, follow: false },
}

/* ─── Design system (da landing-page-style.md) ─── */
const C = {
  primary:        '#1A9EC9',
  primaryDark:    '#147FA0',
  secondary:      '#5DBFB0',
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

const TEL = '+393519242517'
const TEL_DISPLAY = '351 924 2517'
const GOOGLE_REVIEWS_URL = 'https://share.google/Z9RQOLbXwiA9FFpQp'

/* ─── CTA primaria ─── */
function CtaButton({ center = false, mt = '2rem', label = 'Prenota la tua visita gratuita →' }: { center?: boolean; mt?: string; label?: string }) {
  return (
    <div style={{ marginTop: mt, display: 'flex', justifyContent: center ? 'center' : 'flex-start' }}>
      <a
        href="#modulo-contatti"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.primary, color: '#fff',
          fontWeight: 700, fontSize: '1.05rem',
          padding: '16px 30px', borderRadius: '50px',
          textDecoration: 'none', letterSpacing: '0.01em',
          boxShadow: '0 6px 24px rgba(26,158,201,0.28)',
          maxWidth: '100%', justifyContent: 'center', textAlign: 'center',
        }}
      >
        {label}
      </a>
    </div>
  )
}

export default function SchienaCronicaLandingPage() {
  return (
    <div style={{ background: C.bg }}>
      <StickyTopBar />
      <HeroSection />
      <ProofStrip />
      <ProblemaSection />
      <SoluzioneSection />
      <BeneficiSection />
      <CasoRealeSection />
      <WallOfLoveSection />
      <ConfrontoSection />
      <ChiSonoSection />
      <MitiSection />
      <CtaFinaleSection />
      <MinimalFooter />
      <WhatsAppButton />
    </div>
  )
}

/* ─────────────────── TOP BAR — sempre visibile ─────────────────── */
function StickyTopBar() {
  return (
    <div
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${C.surface}`,
      }}
    >
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `0.85rem ${C.pad}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
      }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: C.primary, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            Studio Mantovan
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: `${C.text}99`, letterSpacing: '0.03em', lineHeight: 1.35 }}>
            Fisioterapia in Movimento
          </div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, color: `${C.text}77`, letterSpacing: '0.03em', lineHeight: 1.35 }}>
            Via Enzo Togni, 75 · Broni (PV)
          </div>
        </a>
        <a
          href={`tel:${TEL}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: C.primary, color: '#fff',
            fontWeight: 700, fontSize: '0.85rem',
            padding: '9px 16px', borderRadius: '50px',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(26,158,201,0.25)',
          }}
        >
          📞 {TEL_DISPLAY}
        </a>
      </div>
    </div>
  )
}

/* ─────────────────── HERO — video subito sotto il titolo ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div
        style={{ maxWidth: C.container, margin: '0 auto', padding: `2.5rem ${C.pad} 3rem`, position: 'relative' }}
        className="grid grid-cols-1 md:grid-cols-[1fr_340px] md:grid-rows-[auto_auto] gap-x-12 gap-y-0"
      >
        <div className="order-1 md:order-none md:col-start-1 md:row-start-1" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.secondary, marginBottom: '0.9rem',
            }}>
              Cerchi un fisioterapista per mal di schiena o sciatalgia vicino a te?
            </span>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.4vw, 3.1rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Ho fatto le mie 10 sedute, stavo meglio. Poi è tornato tutto come prima.&rdquo;
            </h1>
          </FadeIn>
        </div>

        <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <FadeIn delay={0.08} direction="right">
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '1.75rem auto 0' }} className="md:mt-0">
              <div style={{
                position: 'absolute', inset: '-1rem',
                background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.18) 0%, transparent 70%)',
                borderRadius: '2.5rem', filter: 'blur(20px)',
              }} />
              <video
                controls
                playsInline
                preload="metadata"
                poster="/videos/schiena-flessione-senza-piegare-gambe-poster.jpg"
                style={{
                  position: 'relative', width: '100%', aspectRatio: '9 / 16', objectFit: 'cover',
                  borderRadius: C.radiusLg, background: '#000',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.15)', display: 'block',
                }}
              >
                <source src="/videos/schiena-flessione-senza-piegare-gambe.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        </div>

        <div className="order-3 md:order-none md:col-start-1 md:row-start-2" style={{ textAlign: 'center' }}>
          <FadeIn delay={0.14}>
            <p style={{ margin: '1.5rem auto 0', maxWidth: '520px', fontSize: 'clamp(1.02rem, 1.7vw, 1.2rem)', fontWeight: 600, color: C.text, lineHeight: 1.6 }}>
              Schiena in Movimento è il mio percorso di fisioterapia attiva per il mal di schiena e la sciatalgia che durano da mesi o anni. Un percorso costruito sulla tua situazione e sul tempo realmente necessario per ottenere un recupero concreto e duraturo.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <CtaButton center mt="1.5rem" label="Prenota la tua prima visita gratuita →" />
            <p style={{ margin: '0.75rem auto 0', fontSize: '0.85rem', color: `${C.text}88`, lineHeight: 1.6, maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
              Ti rispondo personalmente entro 24-48 ore.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStrip() {
  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.75rem',
      }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: '0.01em',
            textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(255,255,255,0.4)',
          }}
        >
          <span style={{ color: '#FFD34D', fontSize: '0.85rem' }}>★★★★★</span>
          Più di 30 recensioni verificate su Google
        </a>
        {[
          '5+ anni di trattamenti su dolore cronico',
          '2 anni di attività a Broni',
          'Prima visita gratuita',
        ].map((testo) => (
          <div key={testo} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
          }}>
            <span style={{ color: '#fff', fontWeight: 800 }}>✓</span>
            {testo}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── PROBLEMA ─────────────────── */
const tentativi = [
  { Icon: Pill, label: 'Farmaci' },
  { Icon: BedDouble, label: 'Riposo' },
  { Icon: Syringe, label: 'Infiltrazione' },
  { Icon: ClipboardList, label: 'Un ciclo di 10 sedute' },
]

const evitati = [
  { Icon: Armchair, label: 'Piegarti in avanti' },
  { Icon: Weight, label: 'Sollevare pesi' },
  { Icon: Footprints, label: 'Stare a lungo in piedi' },
  { Icon: Dumbbell, label: 'Fare sport' },
]

function Chip({ Icon, label, tone = 'primary' }: { Icon: LucideIcon; label: string; tone?: 'primary' | 'muted' }) {
  const color = tone === 'primary' ? C.primary : '#B3413A'
  const bg = tone === 'primary' ? 'rgba(26,158,201,0.1)' : 'rgba(179,65,58,0.08)'
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '7px',
      background: bg, color: C.text, fontSize: '0.85rem', fontWeight: 700,
      padding: '0.55rem 1rem', borderRadius: '50px',
    }}>
      <Icon size={16} color={color} strokeWidth={2.5} />
      {label}
    </span>
  )
}

function ChipRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginTop: '0.9rem' }}>
      {children}
    </div>
  )
}

function ChipLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: 0, textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: `${C.text}77` }}>
      {children}
    </p>
  )
}

function ProblemaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: `4rem ${C.pad} 1.75rem` }}>
        <FadeIn>
          <h2 style={{ margin: '0 auto 1.75rem', textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
            Ecco cosa succede di solito a chi ha mal di schiena o sciatalgia da mesi
          </h2>

          <ChipLabel>Probabilmente hai già provato</ChipLabel>
          <ChipRow>
            {tentativi.map((t) => <Chip key={t.label} {...t} />)}
          </ChipRow>

          <p style={{ margin: '1.25rem 0 0', textAlign: 'center', color: `${C.text}99`, fontSize: '0.95rem', lineHeight: 1.7 }}>
            E per un po&apos; è andata meglio. Poi il dolore è tornato, e con lui la paura di muoverti.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ marginTop: '1.75rem' }}>
            <ChipLabel>E probabilmente ti hanno detto di evitare</ChipLabel>
            <ChipRow>
              {evitati.map((e) => <Chip key={e.label} {...e} tone="muted" />)}
            </ChipRow>
          </div>
          <p style={{ margin: '0.9rem 0 0', textAlign: 'center', color: `${C.text}88`, fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.6 }}>
            &laquo;per paura di peggiorare quello che hai alla schiena&raquo;
          </p>

        </FadeIn>

        <FadeIn delay={0.14}>
          <div style={{
            marginTop: '1.75rem', textAlign: 'center',
            background: 'rgba(26,158,201,0.09)', borderRadius: C.radius, padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.5 }}>
              Ma evitare i movimenti che oggi ti fanno male ti ha aiutato a far passare il mal di schiena?
            </p>
            <p style={{ margin: '0.6rem 0 0', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.6 }}>
              Probabilmente no. E no, non è perché non hai fatto gli esercizi a casa.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ margin: 0, color: C.text, fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', fontWeight: 800, lineHeight: 1.4 }}>
              Ecco quello che ho pensato per chi ha mal di schiena o sciatalgia già da diversi mesi o anni e vuole tornare a muoversi come prima di avere dolore.
            </p>
            <ArrowDown size={26} color={C.primary} strokeWidth={2.5} style={{ marginTop: '0.5rem' }} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── SOLUZIONE — SCHIENA IN MOVIMENTO ─────────────────── */
const garanzie = [
  { Icon: Stethoscope, titolo: 'Visita fisioterapica gratuita', testo: 'Ti propongo il percorso solo se sei idoneo: ci sono precisi criteri clinici da rispettare, valutati davvero.' },
  { Icon: CalendarCheck, titolo: 'Pagamento mensile, nessun vincolo', testo: 'Non firmi un pacchetto da X sedute. Puoi interrompere quando vuoi.' },
  { Icon: RefreshCw, titolo: 'Rivalutazione ogni mese', testo: 'Insieme decidiamo se continuare, ridurre la frequenza o fermarci.' },
]

const fasi = [
  { label: 'Fase 1', titolo: '1 seduta a settimana', testo: 'Per costruire il percorso, lavorare sul movimento e capire come risponde la tua schiena.' },
  { label: 'Fase 2', titolo: '1 seduta ogni due settimane', testo: 'Quando hai più controllo e sicurezza, la frequenza si riduce.' },
  { label: 'Fase 3', titolo: '1 seduta ogni tre settimane', testo: 'Fino al termine del percorso, per consolidare l’autonomia raggiunta.' },
]

function SoluzioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `2rem ${C.pad} 4rem` }}>
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Schiena in Movimento
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              Non ti vendo un numero di sedute. Costruiamo il percorso in base a come risponde la tua schiena.
            </h2>
            <p style={{ margin: '0.9rem auto 0', maxWidth: '580px', color: `${C.text}88`, fontSize: '1rem', lineHeight: 1.7 }}>
              Chi ti propone 10 sedute prima ancora di averti visitato ha già deciso il percorso prima di conoscere te.
            </p>
            <p style={{ margin: '0.75rem auto 0', maxWidth: '580px', color: `${C.text}88`, fontSize: '1rem', lineHeight: 1.7 }}>
              Con <strong style={{ color: C.text }}>Schiena in Movimento</strong>, invece, la frequenza non è stabilita a tavolino.
            </p>
            <p style={{ margin: '0.75rem auto 0', maxWidth: '580px', color: `${C.text}88`, fontSize: '1rem', lineHeight: 1.7 }}>
              All&apos;inizio possiamo lavorare con maggiore continuità, poi, quando la tua schiena recupera e acquisisci gli strumenti per gestirla, le sedute si diradano.
            </p>

            <div style={{
              margin: '1.5rem auto 0', maxWidth: '520px',
              background: 'rgba(26,158,201,0.09)', borderRadius: C.radius, padding: '1.1rem 1.5rem',
            }}>
              <p style={{ margin: 0, color: C.text, fontSize: '1.02rem', fontWeight: 800, lineHeight: 1.5 }}>
                L&apos;obiettivo non è farti venire più a lungo. È renderti sempre più autonomo.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4" style={{ marginTop: '1.75rem' }}>
              {fasi.flatMap((f, i) => [
                <div key={`box-${f.label}`} className="w-full md:flex-1" style={{ background: 'rgba(26,158,201,0.09)', borderRadius: C.radius, padding: '1.1rem 1.35rem', textAlign: 'center', maxWidth: '380px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem' }}>
                    {f.label}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>{f.titolo}</div>
                  <div style={{ fontSize: '0.8rem', color: `${C.text}88`, marginTop: '0.4rem', lineHeight: 1.5 }}>{f.testo}</div>
                </div>,
                i < fasi.length - 1
                  ? <span key={`arrow-${f.label}`} className="md:-rotate-90" style={{ fontSize: '1.2rem', color: C.primary, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>↓</span>
                  : null,
              ])}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: '2.25rem' }}>
            {garanzie.map(({ Icon, titolo, testo }) => (
              <div key={titolo} style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.75rem 1.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: `3px solid ${C.secondary}`,
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,158,201,0.14), rgba(93,191,176,0.24))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                }}>
                  <Icon size={28} color={C.primary} strokeWidth={2} />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>{titolo}</h3>
                <p style={{ margin: '0.5rem 0 0', maxWidth: '260px', fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.6 }}>{testo}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.8rem', color: `${C.text}77` }}>
            Non prometto una guarigione in un tempo fisso. Ti prometto un percorso costruito sul tempo che la tua condizione richiede davvero, verificato mese dopo mese, non deciso a priori.
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <CtaButton center mt="1.75rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── BENEFICI RISPETTO A 10 SEDUTE FISSE E LETTINO ─────────────────── */
const benefici = [
  { Icon: Dumbbell, titolo: 'Lavori con esercizio e carico attivo, non solo sul lettino', testo: 'Ogni seduta è movimento. Non 20 minuti di tecar o laser mentre resti fermo.' },
  { Icon: TrendingUp, titolo: 'Il miglioramento dura, non si esaurisce in una settimana', testo: 'Il carico progressivo costruisce capacità reale di reggere sforzo, non un sollievo che se ne va dopo pochi giorni.' },
  { Icon: Unlock, titolo: 'Torni alle attività che oggi eviti', testo: 'Piegarti per allacciarti le scarpe, stare in piedi a lungo, sollevare la spesa, senza doverci pensare ogni volta.' },
]

function BeneficiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa cambia per te
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              I benefici di un percorso costruito sul tempo, non sul lettino
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefici.map(({ Icon, titolo, testo }) => (
            <StaggerItem key={titolo}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.75rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,158,201,0.14), rgba(93,191,176,0.24))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                }}>
                  <Icon size={24} color={C.primary} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, margin: 0, lineHeight: 1.35 }}>{titolo}</h3>
                <p style={{ margin: '0.6rem 0 0', fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.6 }}>{testo}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── CASO REALE — FEDERICO ─────────────────── */
function CasoRealeSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }}>
        <FadeIn>
          <div style={{
            background: C.surface, borderRadius: C.radiusLg, padding: '2.25rem',
            border: `1px solid ${C.primary}22`, textAlign: 'center', maxWidth: '720px', margin: '0 auto',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Un caso reale
            </span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.35 }}>
              &ldquo;Avevo smesso di piegarmi per paura della protrusione&rdquo;
            </h2>
            <p style={{ margin: '1rem 0 0', color: `${C.text}99`, fontSize: '1rem', lineHeight: 1.7 }}>
              Federico si bloccava con la schiena ogni pochi mesi ed evitava di piegarsi per paura di una protrusione discale. Con un percorso di carico progressivo e un lavoro sulle sue paure, ha ripreso i movimenti che aveva smesso di fare.
            </p>
            <a
              href="/blog/come-federico-ha-smesso-di-bloccarsi-con-la-schiena"
              style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 700, color: C.primary, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Leggi la storia di Federico →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── WALL OF LOVE ─────────────────── */
const walletReviews = [
  { file: 'testimonianza-romulus-google.png', alt: 'Recensione Google di Romulus Halangescu su Studio Mantovan' },
  { file: 'testimonianza-antonio-ferrari-google.png', alt: 'Recensione Google di Antonio Ferrari su Studio Mantovan' },
  { file: 'testimonianza-giacomo-maini-google.png', alt: 'Recensione Google di Giacomo Maini su Studio Mantovan' },
  { file: 'testimonianza-letizia-casella-google.png', alt: 'Recensione Google di Letizia Casella su Studio Mantovan' },
  { file: 'testimonianza-bianca-ciocca-google.png', alt: 'Recensione Google di Bianca Ciocca su Studio Mantovan' },
  { file: 'testimonianza-roby-mada-google.png', alt: 'Recensione Google di Roby Mada su Studio Mantovan' },
  { file: 'testimonianza-manuela-ascagni-google.png', alt: 'Recensione Google di Manuela Ascagni su Studio Mantovan' },
  { file: 'testimonianza-carlotta-polatti-google.png', alt: 'Recensione Google di Carlotta Polatti su Studio Mantovan' },
  { file: 'testimonianza-simona-prun-google.png', alt: 'Recensione Google di Simona Prun su Studio Mantovan' },
]

function WallOfLoveSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Recensioni vere, screenshot veri
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.6rem' }}>
              Cosa dicono le persone che erano dove sei tu adesso
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {walletReviews.map((r, i) => (
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
                    sizes="(max-width: 768px) 100vw, 360px"
                    loading={i === 0 ? undefined : 'lazy'}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.1}>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.9rem', fontWeight: 700, color: C.primary, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Leggi tutte le recensioni su Google →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CONFRONTO ─────────────────── */
function ConfrontoSection() {
  const tradizionale = [
    'Un pacchetto di sedute già deciso prima di conoscerti',
    'Terapie passive (tecar, laser, ultrasuoni) come trattamento principale',
    'Seduta di 20-30 minuti, gran parte passata sul lettino',
    'Stessi esercizi generici per ogni paziente',
    'Focus solo sul dolore del momento',
  ]
  const movimento = [
    'Visita gratuita in cui valuto attentamente i tuoi referti medici, ma soprattutto le tue sensazioni, i tuoi movimenti e i tuoi obiettivi',
    'L\'esercizio guidato e progressivo è il centro del trattamento',
    'Seduta di 60 minuti garantiti, dedicata interamente a te',
    'Percorso mensile che si rivaluta in base a come rispondi, non a un numero di sedute deciso a priori',
  ]

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              La differenza si sente
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              Fisioterapia tradizionale vs. Fisioterapia in Movimento
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            style={{ borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            <div style={{ background: C.white, padding: '2rem 1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: '1.1rem' }}>Fisioterapia tradizionale</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tradizionale.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: `${C.text}99`, lineHeight: 1.6 }}>
                    <span style={{ opacity: 0.5, flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: C.text, padding: '2rem 1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.secondary, marginBottom: '1.1rem' }}>Fisioterapia in Movimento</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {movimento.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                    <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
const certificati = [
  { file: 'certificato-master-terapia-manuale-ortopedica.jpg', label: 'Master in Terapia Manuale Ortopedica' },
  { file: 'certificato-master-fisioterapia-sportiva.jpg', label: 'Master in Fisioterapia Sportiva' },
]

function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-center">
          <FadeIn direction="left">
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan, fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '53% 30%' }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <p style={{ marginTop: '0.9rem', color: C.text, fontSize: '1.08rem', fontWeight: 600, lineHeight: 1.7 }}>
              Mi chiamo Umberto Mantovan, sono nato e cresciuto a Broni e ho più di 5 anni di esperienza in ambito muscolo-scheletrico, tra libera professione e studi convenzionati.
            </p>
            <p style={{ marginTop: '0.9rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              La prima visita è gratuita perché voglio che tu scelga con chiarezza se questo percorso fa per te, prima ancora di iniziarlo.
            </p>

            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {certificati.map((c) => (
                <a
                  key={c.file}
                  href={`/photos/${c.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Apri l'attestato: ${c.label}`}
                  style={{
                    position: 'relative', display: 'block', flex: '1 1 0', minWidth: '140px', maxWidth: '200px',
                    aspectRatio: '1 / 1.414', borderRadius: C.radiusSm, overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: `1px solid ${C.surface}`,
                  }}
                >
                  <Image
                    src={`/photos/${c.file}`}
                    alt={`Attestato ${c.label}, Umberto Mantovan`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="200px"
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── MITI DA SFATARE ─────────────────── */
const miti = [
  {
    mito: '«Se ho l’ernia, non posso piegarmi.»',
    verita: 'Nel 60-70% dei casi le ernie e le protrusioni si riassorbono da sole nel tempo. Muoversi in modo guidato non le fa peggiorare.',
  },
  {
    mito: '«Se mi fa male, vuol dire che mi sto facendo peggio.»',
    verita: 'Nel dolore cronico il dolore dipende anche da un sistema nervoso più sensibile, non solo da quello che succede nei tessuti in quel momento.',
  },
  {
    mito: '«Devo aspettare che passi il dolore prima di muovermi.»',
    verita: 'Il movimento progressivo e guidato è parte della cura, non una fase successiva.',
  },
]

function MitiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Miti da sfatare
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.6rem' }}>
              Quello che pensi sia vero, spesso non lo è
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-4">
          {miti.map(({ mito, verita }) => (
            <StaggerItem key={mito}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.5rem 1.75rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, fontStyle: 'italic', color: `${C.text}99`, lineHeight: 1.4 }}>
                  {mito}
                </h3>
                <p style={{ margin: '0.6rem 0 0', fontSize: '0.92rem', color: C.text, lineHeight: 1.65 }}>{verita}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINALE ─────────────────── */
function CtaFinaleSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: C.text }}>
      <div id="modulo-contatti" style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', padding: `4.5rem ${C.pad}`, scrollMarginTop: '90px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
              Prenota la tua visita gratuita.
            </h2>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              In circa 60 minuti valuto la tua schiena e ti dico con sincerità se Schiena in Movimento è il percorso adatto a te. Compila il modulo qui sotto, ti ricontatto io personalmente entro 24 ore.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <ContactForm accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_SCHIENA_CRONICA} />
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a href={`tel:${TEL}`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}>
              📞 {TEL_DISPLAY}
            </a>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER MINIMALE ─────────────────── */
function MinimalFooter() {
  return (
    <footer style={{ background: C.text, padding: `1.5rem ${C.pad}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem',
        fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center',
      }}>
        <span>© {new Date().getFullYear()} Studio Mantovan – Umberto Mantovan · P.IVA 02842510188</span>
        <a href="/privacy" style={{ color: 'rgba(255,255,255,0.35)' }}>Privacy Policy</a>
        <a href="/cookie" style={{ color: 'rgba(255,255,255,0.35)' }}>Cookie Policy</a>
      </div>
    </footer>
  )
}
