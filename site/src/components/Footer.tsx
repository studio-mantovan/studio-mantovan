'use client'

import Link from 'next/link'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  text:      '#2C2C2C',
  container: '1100px',
  pad:       '1.5rem',
}

export default function Footer() {
  return (
    <footer style={{ background: C.text, color: 'rgba(255,255,255,0.75)' }}>

      {/* CTA strip */}
      <div style={{ background: C.primary }}>
        <div style={{
          maxWidth: C.container, margin: '0 auto',
          padding: `2.5rem ${C.pad}`,
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.3, margin: 0 }}>
              Prima visita gratuita, senza impegno.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginTop: '4px', marginBottom: 0 }}>
              Scopri se questo è l&apos;approccio giusto per te.
            </p>
          </div>
          <a
            href="/prenota"
            style={{
              flexShrink: 0,
              background: '#fff', color: C.primary,
              fontWeight: 700, fontSize: '0.9rem',
              padding: '12px 24px', borderRadius: '50px',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Prenota la prima visita gratuita →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10"
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: '1rem', lineHeight: 1.3 }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Studio Mantovan</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>
              Fisioterapia in Movimento
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '300px', margin: '0 0 1.5rem' }}>
            Fisioterapia 1:1 per tornare alle attività che contano per te.
            Senza protocolli standard, senza macchinari passivi.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ color: C.secondary, flexShrink: 0 }}>📍</span>
              Via Enzo Togni 75, 27043 Broni (PV)
            </li>
            <li>
              <a href="tel:+393519242517" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                <span style={{ color: C.secondary }}>📞</span>
                351 924 2517
              </a>
            </li>
            <li>
              <a href="mailto:studio.mantovan@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                <span style={{ color: C.secondary }}>✉️</span>
                studio.mantovan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Link */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem', marginTop: 0 }}>
              Pagine
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/',               label: 'Home' },
                { href: '/chi-sono',       label: 'Chi sono' },
                { href: '/percorsi',       label: 'Percorsi e tariffe' },
                { href: '/blog',           label: 'Blog' },
                { href: '/dove-trovarmi',  label: 'Dove trovarmi' },
                { href: '/prenota',        label: 'Prenota la visita' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem', marginTop: 0 }}>
              Legale
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/cookie',  label: 'Cookie Policy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{
          maxWidth: C.container, margin: '0 auto',
          padding: `1.25rem ${C.pad}`,
          fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Studio Mantovan – Umberto Mantovan · P.IVA 02842510188
        </div>
      </div>

    </footer>
  )
}
