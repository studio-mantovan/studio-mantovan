import Image from 'next/image'
import Link from 'next/link'
import { getZonaServita } from '@/lib/zoneServite'
import { FaqSection } from '@/components/FaqSection'
import { ArrowRight } from 'lucide-react'

const C = {
  primary:   '#1A9EC9',
  primaryDark: '#147FA0',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radius:    '16px',
  radiusLg:  '24px',
  container: '1100px',
  pad:       '1.5rem',
}

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
        Prenota la prima visita gratuita →
      </a>
    </div>
  )
}

const servizi = [
  { icon: '🌀', titolo: 'Dolore cronico', testo: 'Lombalgia, cervicalgia, sciatalgia persistente: lavoriamo su un percorso che ti riporta a muoverti senza paura.' },
  { icon: '⚡', titolo: 'Infortuni', testo: 'Distorsioni, lesioni muscolari, tendiniti: un percorso graduato per tornare allo sport o alle attività quotidiane.' },
  { icon: '🏥', titolo: 'Riabilitazione post-operatoria', testo: 'Protesi, artroscopia, interventi alla schiena o alla spalla: ti accompagno passo dopo passo nel recupero.' },
]

export function ZonaServitaPage({ slug }: { slug: 'broni' | 'stradella' | 'casteggio' }) {
  const zona = getZonaServita(slug)
  if (!zona) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PhysicalTherapist',
    name: 'Studio Mantovan – Fisioterapia in Movimento',
    url: `https://studio-mantovan.vercel.app/fisioterapia-${zona.slug}`,
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
    description: zona.metaDescription,
    founder: { '@type': 'Person', name: 'Umberto Mantovan' },
  }

  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ paddingTop: '68px' }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad} 3.5rem` }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
            <div>
              <span style={{
                display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
                padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
              }}>
                {zona.eyebrow}
              </span>
              <h1 style={{
                fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 800,
                color: C.text, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
              }}>
                {zona.h1}
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '560px' }}>
                {zona.heroIntro}
              </p>
              <CtaButton mt="2rem" />
              <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
                Rispondo di persona entro 24 ore · Nessun impegno
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
              <Image src={zona.foto} alt={zona.fotoAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 420px" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Dettaglio personale */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Il mio legame con {zona.citta}
          </span>
          {zona.personale.map((p, i) => (
            <p key={i} style={{ marginTop: i === 0 ? '0.75rem' : '1rem', color: `${C.text}99`, lineHeight: 1.85, fontSize: '1.02rem' }}>
              {p}
            </p>
          ))}
          <p style={{ marginTop: '1.25rem', fontWeight: 700, color: C.text, fontSize: '0.95rem' }}>
            📍 {zona.distanza}
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Servizi
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Cosa posso fare per te
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {servizi.map((s, i) => (
              <div key={i} style={{
                background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>{s.titolo}</h3>
                <p style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.7, margin: 0 }}>{s.testo}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/percorsi" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600, color: C.primary, textDecoration: 'none' }}>
              Scopri percorsi e tariffe <ArrowRight size={15} />
            </Link>
          </div>
          <CtaButton center mt="2.5rem" />
        </div>
      </section>

      {/* FAQ locali */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti su {zona.citta}
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {zona.faq.map((f, i) => (
              <div key={i} style={{ background: C.white, borderRadius: C.radius, padding: '1.5rem' }}>
                <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.92rem' }}>{f.q}</p>
                <p style={{ marginTop: '0.5rem', color: `${C.text}88`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.5rem 0 0' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  )
}
