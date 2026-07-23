import Image from 'next/image'
import Link from 'next/link'
import { getZonaServita } from '@/lib/zoneServite'
import { FaqSection } from '@/components/FaqSection'
import { recensioni } from '@/lib/recensioni'
import { ArrowRight } from 'lucide-react'

const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.123456789!2d9.259!3d45.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787c3c3c3c3c3c3%3A0x0!2sVia+Enzo+Togni+75%2C+27043+Broni+PV!5e0!3m2!1sit!2sit!4v1234567890'

// Sottoinsiemi diversi per pagina: evita di ripetere lo stesso blocco recensioni identico su tutte e tre le zone
const recensioniPerZona: Record<'broni' | 'stradella' | 'casteggio', number[]> = {
  broni: [0, 1],
  stradella: [2, 3],
  casteggio: [4, 5],
}

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

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: zona.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const recensioniZona = recensioniPerZona[slug].map((i) => recensioni[i])

  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

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

      {/* Dove trovarmi — NAP + mappa */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
            <div style={{ borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', aspectRatio: '4/3', position: 'relative' }}>
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%" height="100%"
                style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Studio Mantovan – Via Enzo Togni, 75, Broni PV, a pochi minuti da ${zona.citta}`}
              />
            </div>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
                Dove trovarmi
              </span>
              <p style={{ marginTop: '0.75rem', fontWeight: 700, color: C.text, fontSize: '1rem' }}>
                Studio Mantovan – Fisioterapia in Movimento
              </p>
              <p style={{ marginTop: '0.4rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7 }}>
                Via Enzo Togni, 75, 27043 Broni PV
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.92rem' }}>
                📞 <a href="tel:+393519242517" style={{ color: C.text, textDecoration: 'none', fontWeight: 600 }}>351 924 2517</a>
              </p>
              <p style={{ marginTop: '0.4rem', color: `${C.text}99`, fontSize: '0.92rem' }}>
                ✉️ <a href="mailto:studio.mantovan@gmail.com" style={{ color: C.text, textDecoration: 'none', fontWeight: 600 }}>studio.mantovan@gmail.com</a>
              </p>
              <a
                href="https://maps.google.com/?q=Via+Enzo+Togni+75,+Broni+PV"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '1.25rem', fontSize: '0.88rem', fontWeight: 600, color: C.primary, textDecoration: 'none' }}
              >
                Apri in Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recensioni Google */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4rem ${C.pad}` }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa dicono di me
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', fontWeight: 800, color: C.text, marginTop: '0.5rem' }}>
              Recensioni Google verificate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {recensioniZona.map((r, i) => (
              <div key={i} style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.75rem',
                borderLeft: `4px solid ${C.secondary}`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{ color: '#FBBC04', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic', fontSize: '0.92rem', color: `${C.text}CC`, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;{r.testo}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1.1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>
                    {r.iniziali}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: C.text }}>{r.nome}</div>
                </div>
              </div>
            ))}
          </div>
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
