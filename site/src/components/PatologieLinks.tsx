'use client'

import Link from 'next/link'
import { patologie } from '@/lib/patologie'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  radius:    '16px',
}

export function PatologieLinks() {
  return (
    <div>
      <p style={{
        fontSize: '0.7rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.35)', marginBottom: '1rem', margin: '0 0 1rem',
      }}>
        Le aree cliniche
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {patologie.map((p) => (
          <Link
            key={p.slug}
            href={`/patologie/${p.slug}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: C.radius,
              padding: '14px 18px',
              textDecoration: 'none',
              color: '#fff',
              transition: 'background 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = `rgba(26,158,201,0.2)`
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(26,158,201,0.4)`
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>{p.emoji}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{p.nome}</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
