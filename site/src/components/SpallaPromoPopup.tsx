'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sm-popup-spalla-dismissed'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  text:      '#2C2C2C',
  white:     '#FFFFFF',
}

export default function SpallaPromoPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {}
    const t = setTimeout(() => setVisible(true), 1600)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {}
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spalla-popup-title"
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(20,20,20,0.55)', backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          position: 'relative', width: '100%', maxWidth: '420px',
          background: C.white, borderRadius: '24px', padding: '2.25rem 1.75rem 2rem',
          boxShadow: '0 24px 64px rgba(0,0,0,0.3)', textAlign: 'center',
        }}
      >
        <button
          onClick={close}
          aria-label="Chiudi"
          style={{
            position: 'absolute', top: '0.9rem', right: '0.9rem',
            width: '32px', height: '32px', borderRadius: '50%',
            border: 'none', background: '#F0F4F5', color: C.text,
            fontSize: '1.1rem', lineHeight: 1, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>

        <span style={{
          display: 'inline-block', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: C.secondary, marginBottom: '0.75rem',
        }}>
          Dolore alla spalla da più di 3 mesi?
        </span>

        <h2 id="spalla-popup-title" style={{
          fontSize: '1.4rem', fontWeight: 800, color: C.text, lineHeight: 1.3, margin: 0,
        }}>
          Torna a fare ciò che oggi il dolore alla spalla ti impedisce di fare.
        </h2>

        <p style={{ marginTop: '0.85rem', fontSize: '0.95rem', color: `${C.text}99`, lineHeight: 1.6 }}>
          Scopri Spalla in Movimento: il mio percorso di 8 settimane di fisioterapia attiva.
        </p>

        <a
          href="/spalla-cronica"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            marginTop: '1.25rem', background: C.primary, color: '#fff',
            fontWeight: 700, fontSize: '0.98rem',
            padding: '13px 26px', borderRadius: '50px',
            textDecoration: 'none', letterSpacing: '0.01em', width: '100%',
            boxShadow: '0 6px 20px rgba(26,158,201,0.3)',
          }}
        >
          Scopri il percorso →
        </a>
      </div>
    </div>
  )
}
