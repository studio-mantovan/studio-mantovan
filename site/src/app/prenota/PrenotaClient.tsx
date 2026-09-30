'use client'

import { ContactForm } from '@/components/ContactForm'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  radiusSm:  '8px',
  container: '760px',
  pad:       '1.5rem',
}

export function PrenotaClient() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px', minHeight: '100svh' }}>
      <section style={{ padding: `2.5rem ${C.pad} 5rem` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>

          {/* Titolo */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1rem',
            }}>
              Prima visita gratuita
            </span>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.35, letterSpacing: '-0.01em', margin: '0 auto', maxWidth: '560px',
            }}>
              Compila il modulo qui sotto con i tuoi dati per prenotare la tua visita fisioterapica gratuita.
            </h1>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: C.primary, lineHeight: 1.6, margin: '0.75rem auto 0' }}>
              Ti ricontatterò io personalmente entro 24 ore.
            </p>
          </div>

          {/* Indirizzo */}
          <a
            href="https://share.google/Z9RQOLbXwiA9FFpQp"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              textDecoration: 'none', color: `${C.text}88`, fontSize: '0.9rem', fontWeight: 600,
              marginBottom: '2rem',
            }}
          >
            <span>📍</span>
            Via Enzo Togni, 75, 27043 Broni PV
          </a>

          <ContactForm />

        </div>
      </section>
    </main>
  )
}
