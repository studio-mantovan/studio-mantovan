'use client'

import Link from 'next/link'
import Image from 'next/image'
import { patologie } from '@/lib/patologie'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  container: '1100px',
  pad:       '1.5rem',
  radius:    '16px',
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: C.text, color: 'rgba(255,255,255,0.75)' }}>
      {/* CTA strip */}
      <div style={{ background: C.primary }}>
        <div style={{
          maxWidth: C.container, margin: '0 auto',
          padding: `2.5rem ${C.pad}`,
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          alignItems: 'flex-start',
        }}
          className="sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.3, margin: 0 }}>
              Prima visita gratuita, senza impegno.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginTop: '4px', marginBottom: 0 }}>
              Scopri se questo è l&apos;approccio giusto per te.
            </p>
          </div>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              background: '#fff', color: C.primary,
              fontWeight: 700, fontSize: '0.9rem',
              padding: '12px 24px', borderRadius: '50px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
          >
            Scrivimi su WhatsApp →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <Image src="/logo.png" alt="Studio Mantovan" width={48} height={48} style={{ display: 'block', opacity: 0.9 }} />
          </div>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '260px', margin: '0 0 1.25rem' }}>
            Fisioterapia 1:1 per tornare alle attività che contano per te. Senza protocolli standard, senza macchinari passivi.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { href: 'https://instagram.com/studio.mantovan', icon: <IconInstagram />, label: 'Instagram' },
              { href: 'https://facebook.com/studio.mantovan', icon: <IconFacebook />, label: 'Facebook' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'background 0.2s, color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background = C.primary
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Patologie */}
        <div>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', marginTop: 0 }}>
            Patologie
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {patologie.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/patologie/${p.slug}`}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {p.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', marginTop: 0 }}>
            Contatti
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ color: C.secondary, flexShrink: 0, marginTop: '2px' }}>📍</span>
              <span>
                Studio Mantovan – Fisioterapia in Movimento
                <br />Broni (PV), Oltrepò Pavese
              </span>
            </li>
            <li>
              <a href="tel:+393519242517" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                <span style={{ color: C.secondary }}>📞</span>
                351 924 2517
              </a>
            </li>
            <li>
              <a href="mailto:studio.mantovan@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                <span style={{ color: C.secondary }}>✉️</span>
                studio.mantovan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{
          maxWidth: C.container, margin: '0 auto',
          padding: `1.25rem ${C.pad}`,
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)',
        }}
          className="sm:flex-row sm:justify-between sm:items-center"
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Studio Mantovan – Umberto Mantovan. P.IVA 02842510188</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link>
            <Link href="/cookie" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
