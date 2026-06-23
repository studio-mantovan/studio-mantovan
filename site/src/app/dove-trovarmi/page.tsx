import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dove trovarmi – Studio Mantovan, Broni (PV)',
  description:
    'Studio Mantovan – Via Enzo Togni 75, 27043 Broni (PV). Lunedì–Venerdì 15:00–20:00, solo su appuntamento. Prima visita gratuita.',
}

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  container: '1100px',
  pad:       '1.5rem',
}

const info = [
  { emoji: '📍', label: 'Indirizzo', value: 'Via Enzo Togni 75, 27043 Broni (PV)' },
  { emoji: '🕒', label: 'Orari',     value: 'Lun – Ven: 15:00 – 20:00 · Solo su appuntamento' },
  { emoji: '📞', label: 'Telefono',  value: '351 924 2517',              href: 'tel:+393519242517' },
  { emoji: '✉️', label: 'Email',     value: 'studio.mantovan@gmail.com', href: 'mailto:studio.mantovan@gmail.com' },
]

export default function DoveTrovarmiPage() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px' }}>
      <section style={{ padding: `4rem ${C.pad}` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

            {/* Mappa */}
            <div style={{
              borderRadius: C.radiusLg, overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              aspectRatio: '4/3', position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.123456789!2d9.259!3d45.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787c3c3c3c3c3c3%3A0x0!2sVia+Enzo+Togni+75%2C+27043+Broni+PV!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Mantovan – Via Enzo Togni 75, Broni (PV)"
              />
            </div>

            {/* Info + CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg,
                padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
              }}>
                {info.map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.secondary, marginBottom: '0.2rem' }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.95rem', color: C.text, fontWeight: 500, lineHeight: 1.6, textDecoration: 'none' }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.95rem', color: C.text, fontWeight: 500, lineHeight: 1.6 }}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/prenota"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
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

              <a
                href="https://maps.google.com/?q=Via+Enzo+Togni+75,+Broni+PV"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  background: C.white, color: C.text,
                  fontWeight: 600, fontSize: '0.9rem',
                  padding: '13px 28px', borderRadius: '50px',
                  textDecoration: 'none',
                  border: '1px solid #E0E5E6',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                Apri in Google Maps →
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
