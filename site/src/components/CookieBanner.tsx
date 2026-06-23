'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const C = {
  primary:  '#1A9EC9',
  text:     '#2C2C2C',
  white:    '#FFFFFF',
  surface:  '#F0F4F5',
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      zIndex: 999,
      background: C.text,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.15)',
      padding: '1.25rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <p style={{
          margin: 0, flex: 1, minWidth: '220px',
          fontSize: '0.85rem', color: 'rgba(255,255,255,0.78)',
          lineHeight: 1.6,
        }}>
          Questo sito usa cookie tecnici necessari al funzionamento.{' '}
          <Link href="/cookie" style={{ color: C.primary, textDecoration: 'underline' }}>
            Cookie Policy
          </Link>
          {' '}·{' '}
          <Link href="/privacy" style={{ color: C.primary, textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={reject}
            style={{
              background: 'transparent', color: 'rgba(255,255,255,0.55)',
              fontWeight: 600, fontSize: '0.85rem',
              padding: '9px 18px', borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            Solo tecnici
          </button>
          <button
            onClick={accept}
            style={{
              background: C.primary, color: C.white,
              fontWeight: 700, fontSize: '0.85rem',
              padding: '9px 18px', borderRadius: '50px',
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(26,158,201,0.35)',
            }}
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
