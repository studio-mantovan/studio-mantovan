import type { Metadata } from 'next'
import Link from 'next/link'
import { zoneServite } from '@/lib/zoneServite'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zone servite — Broni, Stradella, Casteggio',
  description:
    'Studio Mantovan segue pazienti da Broni, Stradella, Casteggio e da tutto l\'Oltrepò Pavese. Scopri il mio legame con ciascuna zona e come raggiungere lo studio.',
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

export default function ZoneServitePage() {
  return (
    <div style={{ background: C.bg, paddingTop: '68px' }}>
      <section>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad} 3rem` }}>
          <span style={{
            display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
            padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
          }}>
            Zone servite
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: C.text,
            lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: '700px', margin: 0,
          }}>
            Broni, Stradella, Casteggio: tre zone, una storia condivisa con l&apos;Oltrepò Pavese.
          </h1>
          <p style={{ marginTop: '1.25rem', fontSize: '1.02rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '620px' }}>
            Il mio studio è a Broni, ma il mio legame con il territorio va oltre i confini del paese:
            ci sono nato, ci vivo, e ci ho lavorato per anni prima di aprire il mio studio.
            Scopri il legame specifico con la tua zona.
          </p>
        </div>
      </section>

      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }} className="md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {zoneServite.map((z) => (
              <Link
                key={z.slug}
                href={`/fisioterapia-${z.slug}`}
                style={{
                  background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                  display: 'flex', flexDirection: 'column', textDecoration: 'none',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
                }}
                className="group hover:shadow-md transition-shadow"
              >
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: C.secondary, marginBottom: '0.5rem',
                }}>
                  {z.citta}
                </span>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: C.text, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {z.teaser}
                </h2>
                <p style={{ fontSize: '0.85rem', color: `${C.text}77`, lineHeight: 1.65, marginBottom: '1.5rem', flex: 1 }}>
                  {z.distanza}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.85rem', fontWeight: 700, color: C.primary,
                }}>
                  Scopri di più <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.primary }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: `4rem ${C.pad}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Da qualunque zona arrivi, la prima visita è gratuita.
          </h2>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary, fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
              }}
            >
              Prenota la prima visita gratuita →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
