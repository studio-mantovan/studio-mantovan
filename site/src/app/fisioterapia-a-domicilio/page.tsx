import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { recensioni } from '@/lib/recensioni'

const OG_DESCRIPTION =
  'Fisioterapia e riabilitazione a domicilio a Broni, Stradella, Santa Maria della Versa e Oltrepò Pavese. Consulto telefonico gratuito: 351 924 2517.'

export const metadata: Metadata = {
  title: 'Fisioterapia e Riabilitazione a Domicilio',
  description: OG_DESCRIPTION,
  alternates: { canonical: '/fisioterapia-a-domicilio' },
  openGraph: {
    title: 'Fisioterapia e Riabilitazione a Domicilio | Studio Mantovan',
    description: OG_DESCRIPTION,
    url: 'https://umbertomantovan.net/fisioterapia-a-domicilio',
    type: 'website',
  },
}

/* ─── Design system (da landing-page-style.md) ─── */
const C = {
  primary:     '#1A9EC9',
  primaryDark: '#147FA0',
  secondary:   '#5DBFB0',
  bg:          '#FAFAF8',
  text:        '#2C2C2C',
  surface:     '#F0F4F5',
  white:       '#FFFFFF',
  radius:      '16px',
  radiusSm:    '8px',
  radiusLg:    '24px',
  container:   '1100px',
  pad:         '1.5rem',
}

const comuniSenzaSupplemento = ['Broni', 'Stradella', 'Santa Maria della Versa', 'Pietra de’ Giorgi', 'Canneto Pavese', 'Castana']

const faq = [
  {
    q: 'La visita a domicilio è gratuita come la prima in studio?',
    a: 'No. Solo il consulto telefonico iniziale è gratuito: la visita a domicilio ha un costo fin dalla prima seduta.',
  },
  {
    q: 'Quanto costa la visita a domicilio?',
    a: 'A Broni, Stradella, Santa Maria della Versa e nelle colline vicine la tariffa è la stessa dello studio, senza supplementi. Negli altri comuni è previsto un piccolo supplemento per lo spostamento.',
  },
  {
    q: 'Quanto dura una visita a domicilio?',
    a: 'Circa 45 minuti, come in studio.',
  },
  {
    q: 'Devo preparare qualcosa in casa?',
    a: 'Basta un po’ di spazio libero e una sedia. Il resto lo porto io.',
  },
  {
    q: 'Per quanto tempo continuiamo a domicilio?',
    a: 'Dopo un intervento o una frattura, valutiamo insieme il passaggio in studio appena torni autonomo. Se invece la difficoltà a uscire di casa è la tua situazione, continui a domicilio finché ne hai bisogno.',
  },
  {
    q: 'Serve la prescrizione del medico?',
    a: 'No. Puoi scrivermi direttamente, anche prima della dimissione dall’ospedale.',
  },
]

export default function FisioterapiaADomicilioPage() {
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fisioterapia e riabilitazione a domicilio',
    provider: {
      '@type': 'PhysicalTherapist',
      name: 'Studio Mantovan – Fisioterapia in Movimento',
      url: 'https://umbertomantovan.net',
      telephone: '+393519242517',
    },
    areaServed: [
      ...comuniSenzaSupplemento.map((c) => ({ '@type': 'City', name: c })),
      { '@type': 'AdministrativeArea', name: 'Oltrepò Pavese' },
    ],
    description:
      'Fisioterapia attiva a domicilio per chi non può ancora spostarsi dopo un intervento, una frattura o per una difficoltà di mobilità.',
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://umbertomantovan.net' },
      { '@type': 'ListItem', position: 2, name: 'Fisioterapia a domicilio', item: 'https://umbertomantovan.net/fisioterapia-a-domicilio' },
    ],
  }

  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <HeroSection />
      <ProofStrip />
      <ProblemaSection />
      <PerChiSection />
      <ComuniServitiSection />
      <ComePrenotareSection />
      <TestimonianzeSection />
      <FaqSection />
      <CtaFinaleSection />
    </div>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '68px' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div
        style={{ maxWidth: C.container, margin: '0 auto', padding: `2.5rem ${C.pad} 3.5rem`, position: 'relative' }}
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center"
      >
        <div>
          <FadeIn>
            {/* H1 — piccolo, keyword SEO: "fisioterapia" + "riabilitazione a domicilio" */}
            <h1 style={{
              display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem', lineHeight: 1.5,
            }}>
              Fisioterapia e riabilitazione a domicilio a Broni e nell&apos;Oltrepò Pavese
            </h1>
            {/* H2 — il titolo grande, riconoscibile */}
            <h2 style={{
              fontSize: 'clamp(2rem, 4.2vw, 2.9rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
            }}>
              La <span style={{ color: C.primary }}>Fisioterapia in Movimento</span> arriva direttamente a casa tua.
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.02rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Dopo un intervento, una frattura o per difficoltà a uscire di casa, arrivare in studio può essere un ostacolo. Vengo io da te, con lo stesso approccio attivo che uso in ambulatorio.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div style={{ marginTop: '2rem' }}>
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
                Richiedi il consulto telefonico gratuito →
              </a>
            </div>
            <p style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: `${C.text}66`, lineHeight: 1.6 }}>
              Ti rispondo entro 24 ore. La prima chiamata per capire la tua situazione è sempre gratuita.
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
                src="/photos/f3-ritratto.jpg"
                alt="Umberto Mantovan, fisioterapista a domicilio a Broni e nell'Oltrepò Pavese"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
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
function ProofStrip() {
  const items = [
    { icon: '✓', testo: '5+ anni di esperienza nell’ambito muscolo-scheletrico' },
    { icon: '✓', testo: 'Consulto telefonico gratuito' },
    { icon: '✓', testo: 'Vengo io a casa tua' },
  ]

  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
      }}>
        {items.map((item) => (
          <div key={item.testo} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
          }}>
            <span style={{ color: '#FFD34D', fontSize: '0.85rem' }}>{item.icon}</span>
            {item.testo}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── PROBLEMA + SOLUZIONE (sezione unica, breve) ─────────────────── */
function ProblemaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Quando lo studio non è raggiungibile
          </span>
          <p style={{
            marginTop: '1.1rem', fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', color: C.text, lineHeight: 1.6, fontWeight: 500,
          }}>
            &ldquo;Dopo l&apos;operazione all&apos;anca, con le stampelle e senza poter guidare, andare in studio mi sembrava impossibile.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ marginTop: '1.5rem', color: `${C.text}99`, fontSize: '1.02rem', lineHeight: 1.85 }}>
            Non sono il classico fisioterapista a domicilio che porta solo massaggi passivi. Il lavoro è lo stesso che faccio in studio — esercizio mirato, obiettivi reali — portato a casa tua, senza bisogno di macchinari.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PER CHI È ─────────────────── */
const target = [
  { titolo: 'Riabilitazione post-operatoria', testo: 'Sei nelle prime settimane dopo un intervento ortopedico — protesi d’anca, di ginocchio, chirurgia alla colonna.' },
  { titolo: 'Frattura', testo: 'Hai subito una frattura e nella fase iniziale non puoi ancora spostarti.' },
  { titolo: 'Difficoltà a muoverti da casa', testo: 'Per età o per un’altra condizione, uscire di casa è un ostacolo concreto — anche a lungo termine.' },
]

function PerChiSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
            Per chi è pensata
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col" stagger={0.08}>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {target.map((t) => (
              <StaggerItem key={t.titolo}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.9rem',
                  background: C.white, borderRadius: C.radiusLg, padding: '1.25rem 1.5rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}>
                  <span style={{ color: C.secondary, fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0 }}>✔</span>
                  <p style={{ margin: 0, color: C.text, fontSize: '0.96rem', lineHeight: 1.6 }}>
                    <strong>{t.titolo}.</strong> {t.testo}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn delay={0.24}>
          <p style={{ marginTop: '1.5rem', color: `${C.text}77`, fontSize: '0.9rem', lineHeight: 1.8 }}>
            Dopo un intervento o una frattura, il percorso a domicilio accompagna la fase iniziale: appena torni autonomo, valutiamo insieme il passaggio in studio. Se invece la difficoltà a uscire di casa è la tua situazione, continui a domicilio finché ne hai bisogno — senza nessun obbligo di spostarti.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COMUNI SERVITI ─────────────────── */
function ComuniServitiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4rem ${C.pad}` }} className="md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Comuni serviti
            </h2>
            <p style={{ marginTop: '0.9rem', color: `${C.text}99`, fontSize: '0.98rem', lineHeight: 1.8, maxWidth: '540px' }}>
              A Broni, Stradella, Santa Maria della Versa e nelle colline vicine la tariffa è la stessa dello studio, senza supplementi.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {comuniSenzaSupplemento.map((c) => (
                <span key={c} style={{
                  background: C.white, color: C.text, fontWeight: 700, fontSize: '0.88rem',
                  padding: '8px 16px', borderRadius: '50px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  {c}
                </span>
              ))}
            </div>

            <p style={{ marginTop: '1.5rem', color: `${C.text}99`, fontSize: '0.94rem', lineHeight: 1.8, maxWidth: '540px' }}>
              Negli altri comuni dell&apos;Oltrepò Pavese il servizio è comunque disponibile, con un piccolo supplemento per lo spostamento.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{
                display: 'inline-block', background: 'transparent', color: C.primary, fontWeight: 700, fontSize: '0.88rem',
                padding: '8px 16px', borderRadius: '50px', border: `1.5px dashed ${C.primary}55`,
              }}>
                Altri comuni · con supplemento
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '1.75rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.95rem' }}>
                Studio Mantovan – Fisioterapia in Movimento
              </p>
              <p style={{ marginTop: '0.4rem', color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.7 }}>
                Via Enzo Togni, 75, 27043 Broni PV
              </p>
              <p style={{ marginTop: '0.7rem', color: `${C.text}99`, fontSize: '0.88rem' }}>
                📞 <a href="tel:+393519242517" style={{ color: C.text, textDecoration: 'none', fontWeight: 600 }}>351 924 2517</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COME PRENOTARE ─────────────────── */
function ComePrenotareSection() {
  const steps = [
    { n: '1', testo: 'Scrivimi su WhatsApp o chiama al 351 924 2517.' },
    { n: '2', testo: 'Prenota il tuo consulto telefonico.' },
    { n: '3', testo: 'Fissiamo la prima visita direttamente a casa tua.' },
  ]

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Come prenotare
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.75rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: `3px solid ${C.secondary}`, height: '100%',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', background: C.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.9rem',
                }}>
                  {s.n}
                </div>
                <p style={{ margin: 0, fontSize: '0.94rem', color: C.text, lineHeight: 1.7, fontWeight: 600 }}>
                  {s.testo}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
                letterSpacing: '0.01em', boxShadow: '0 6px 24px rgba(26,158,201,0.28)', whiteSpace: 'nowrap',
              }}
            >
              Richiedi il consulto telefonico gratuito →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── TESTIMONIANZE ─────────────────── */
function TestimonianzeSection() {
  const scelte = [recensioni[5], recensioni[1], recensioni[3]]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 800, color: C.text }}>
              Cosa dicono i miei pazienti
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scelte.map((r) => (
            <StaggerItem key={r.nome}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.5rem',
                borderLeft: `4px solid ${C.secondary}`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%',
              }}>
                <div style={{ color: '#FBBC04', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '0.6rem' }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic', fontSize: '0.88rem', color: `${C.text}CC`, lineHeight: 1.65, margin: 0 }}>
                  &ldquo;{r.testo}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1rem', paddingTop: '0.9rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>
                    {r.iniziali}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: C.text }}>{r.nome}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── COSE UTILI DA SAPERE ─────────────────── */
function FaqSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 800, color: C.text, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            Cose utili da sapere
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {faq.map((f) => (
              <div key={f.q} style={{ background: C.surface, borderRadius: C.radius, padding: '1.35rem 1.5rem' }}>
                <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.92rem' }}>{f.q}</p>
                <p style={{ marginTop: '0.4rem', color: `${C.text}88`, fontSize: '0.88rem', lineHeight: 1.65, margin: '0.4rem 0 0' }}>{f.a}</p>
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
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Broni, Stradella, Santa Maria della Versa o nelle colline vicine?
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1.05rem, 1.9vw, 1.3rem)', fontWeight: 700, color: C.secondary, lineHeight: 1.4 }}>
            Vengo direttamente da te.
          </p>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Il consulto telefonico è sempre gratuito, senza impegno.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
                letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(26,158,201,0.3)', whiteSpace: 'nowrap',
              }}
            >
              Richiedi ora il consulto telefonico gratuito →
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
