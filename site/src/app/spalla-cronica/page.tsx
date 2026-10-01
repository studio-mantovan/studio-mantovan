import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ContactForm } from '@/components/ContactForm'
import { Stethoscope, Dumbbell, Activity, Droplet, Flame, Bone, Bandage } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dolore alla Spalla da Mesi? | Studio Mantovan',
  description:
    'Dolore alla spalla che non passa da mesi? Percorso di fisioterapia attiva a Broni (PV) per borsite, tendinite, tendinopatia della cuffia dei rotatori e recupero post-intervento. Visita fisioterapica gratuita: 351 924 2517.',
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
// Link diretto alla scheda Google Business Profile — usato per "leggi le recensioni"
// e per aprire l'indirizzo nella barra in alto.
const GOOGLE_REVIEWS_URL = 'https://share.google/Z9RQOLbXwiA9FFpQp'

export default function SpallaCronicaLandingPage() {
  return (
    <div id="top" style={{ background: C.bg }}>
      <StickyTopBar />
      <HeroFormSection />
      <ProofStrip />
      <CasiDusoSection />
      <WallOfLoveSection />
      <ChiSonoSection />
      <ConfrontoSection />
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

/* ─────────────────── HERO — TITOLO + MODULO ─────────────────── */
function HeroFormSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{ maxWidth: '560px', margin: '0 auto', padding: `3rem ${C.pad} 3.5rem`, position: 'relative' }}>
        <FadeIn>
          <h1 style={{
            textAlign: 'center', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800,
            color: C.text, lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0,
          }}>
            Ottieni la tua valutazione fisioterapica gratuita per la spalla.
          </h1>
          <p style={{ margin: '1rem auto 0', maxWidth: '440px', textAlign: 'center', fontSize: '1rem', color: `${C.text}99`, lineHeight: 1.6 }}>
            Compila il modulo qui sotto: ti ricontatto io personalmente entro 24 ore.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ marginTop: '2rem' }}>
            <ContactForm
              accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_SPALLA_CRONICA}
              showEmail={false}
              messageLabel="Descrivi il problema"
            />
          </div>
        </FadeIn>
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
        {[
          '5+ anni di trattamenti di spalla in ambulatorio',
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

/* ─────────────────── CASI D'USO ─────────────────── */
const casiDuso = [
  { Icon: Droplet, label: 'Borsite' },
  { Icon: Flame, label: 'Tendinite' },
  { Icon: Dumbbell, label: 'Tendinopatia della cuffia dei rotatori' },
  { Icon: Activity, label: 'Lesione del tendine, sia parziale che massiva' },
  { Icon: Stethoscope, label: 'Recupero post-intervento chirurgico' },
  { Icon: Bone, label: 'Recupero post-frattura o post-trauma' },
  { Icon: Bandage, label: 'Strappi muscolari' },
]

function CasiDusoSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `2.75rem ${C.pad}` }}>
        <FadeIn>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)', fontWeight: 800,
            color: C.text, lineHeight: 1.35, margin: '0 auto 1.5rem', maxWidth: '560px',
          }}>
            La Fisioterapia in Movimento è indicata per
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem' }}>
            {casiDuso.map(({ Icon, label }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.white, color: C.text,
                fontSize: '0.85rem', fontWeight: 600,
                padding: '0.55rem 1rem', borderRadius: '50px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}>
                <Icon size={15} color={C.primary} strokeWidth={2.2} />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CONFRONTO ─────────────────── */
function ConfrontoSection() {
  const tradizionale = [
    'Visita a pagamento in cui si guardano solo le carte del medico o le risonanze',
    'Terapie passive (tecar, laser, ultrasuoni) come trattamento principale',
    'Seduta di 20-30 minuti, gran parte passata sul lettino',
    'Stessi esercizi generici per ogni paziente',
    'Focus solo sul dolore del momento',
  ]
  const movimento = [
    'Visita gratuita in cui valuto attentamente i tuoi referti medici, ma soprattutto le tue sensazioni, i tuoi movimenti e i tuoi obiettivi',
    'L\'esercizio guidato e progressivo è il centro del trattamento',
    'Seduta di 60 minuti garantiti, dedicata interamente a te',
    'Carico progressivo per ricostruire la capacità di movimento e di carico della spalla',
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
                    alt={`Attestato ${c.label} — Umberto Mantovan`}
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

/* ─────────────────── CTA FINALE ─────────────────── */
function CtaFinaleSection() {
  return (
    <div style={{ background: C.bg, padding: `2.5rem ${C.pad} 3.5rem`, textAlign: 'center' }}>
      <a
        href="#top"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.primary, color: '#fff',
          fontWeight: 700, fontSize: '1.05rem',
          padding: '16px 30px', borderRadius: '50px',
          textDecoration: 'none', letterSpacing: '0.01em',
          boxShadow: '0 6px 24px rgba(26,158,201,0.28)',
        }}
      >
        Ottieni la tua visita gratuita per la spalla →
      </a>
    </div>
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
