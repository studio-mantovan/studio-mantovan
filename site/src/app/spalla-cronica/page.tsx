import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import WhatsAppButton from '@/components/WhatsAppButton'
import {
  Pill, Zap, Syringe, BedDouble, ArrowUp, ArrowDown, Weight, Hammer,
  Stethoscope, Dumbbell, CalendarCheck, BadgePercent, Flag,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dolore alla Spalla da Mesi? | Studio Mantovan',
  description:
    'Dolore alla spalla che non passa da mesi? Percorso di fisioterapia attiva a Broni (PV), 8 settimane. Visita fisioterapica gratuita: 351 924 2517.',
  robots: { index: false, follow: false },
}

/* ─── Design system (da landing-page-style.md) ─── */
const C = {
  primary:        '#1A9EC9',
  primaryDark:    '#147FA0',
  secondary:      '#5DBFB0',
  bg:             '#FAFAF8',
  text:           '#2C2C2C',
  surface:        '#F0F4F5',
  white:          '#FFFFFF',
  radius:         '16px',
  radiusSm:       '8px',
  radiusLg:       '24px',
  container:      '1100px',
  pad:            '1.5rem',
}

const TEL = '+393519242517'
const TEL_DISPLAY = '351 924 2517'
// Link "leggi le recensioni": ricerca diretta della scheda su Google Maps.
// Se hai un link più preciso dalla dashboard di Google Business Profile, si sostituisce qui.
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Studio+Mantovan+Fisioterapia+in+Movimento+Broni+PV'

/* ─── CTA primaria ─── */
function CtaButton({ center = false, mt = '2rem', label = 'Prenota la tua visita gratuita →' }: { center?: boolean; mt?: string; label?: string }) {
  return (
    <div style={{ marginTop: mt, display: 'flex', justifyContent: center ? 'center' : 'flex-start' }}>
      <a
        href="/prenota"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.primary, color: '#fff',
          fontWeight: 700, fontSize: '1.05rem',
          padding: '16px 30px', borderRadius: '50px',
          textDecoration: 'none', letterSpacing: '0.01em',
          boxShadow: '0 6px 24px rgba(26,158,201,0.28)',
          maxWidth: '100%', justifyContent: 'center', textAlign: 'center',
        }}
      >
        {label}
      </a>
    </div>
  )
}

export default function SpallaCronicaLandingPage() {
  return (
    <div style={{ background: C.bg }}>
      <StickyTopBar />
      <HeroSection />
      <ProofStrip />
      <ProblemaSection />
      <SoluzioneSection />
      <WallOfLoveSection />
      <ConfrontoSection />
      <TendineLesionatoSection />
      <ChiSonoSection />
      <CtaFinaleSection />
      <MinimalFooter />
      <WhatsAppButton />
    </div>
  )
}

/* ─────────────────── TOP BAR — sempre visibile ─────────────────── */
function StickyTopBar() {
  return (
    <div
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${C.surface}`,
      }}
    >
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `0.85rem ${C.pad}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
      }}>
        <div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: C.primary, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            Studio Mantovan
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: `${C.text}99`, letterSpacing: '0.03em', lineHeight: 1.35 }}>
            Fisioterapia in Movimento
          </div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, color: `${C.text}77`, letterSpacing: '0.03em', lineHeight: 1.35 }}>
            Via Enzo Togni, 75 · Broni (PV)
          </div>
        </div>
        <a
          href={`tel:${TEL}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: C.primary, color: '#fff',
            fontWeight: 700, fontSize: '0.85rem',
            padding: '9px 16px', borderRadius: '50px',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(26,158,201,0.25)',
          }}
        >
          📞 {TEL_DISPLAY}
        </a>
      </div>
    </div>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div
        style={{ maxWidth: C.container, margin: '0 auto', padding: `2.5rem ${C.pad} 3rem`, position: 'relative' }}
        className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-center"
      >
        <div style={{ textAlign: 'center' }}>
          <FadeIn>
            <span style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.secondary, marginBottom: '0.9rem',
            }}>
              Cerchi un fisioterapista specializzato nella spalla vicino a te?
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 4.2vw, 2.9rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
            }}>
              Torna a fare ciò che oggi il dolore alla spalla ti impedisce di fare.
            </h1>
            <p style={{ margin: '1.1rem auto 0', maxWidth: '560px', fontSize: 'clamp(1.02rem, 1.7vw, 1.2rem)', fontWeight: 600, color: C.text, lineHeight: 1.6 }}>
              Spalla in Movimento è il mio percorso di 8 settimane di fisioterapia attiva per aiutarti a recuperare i movimenti e le attività che per te contano davvero: lavoro, vita quotidiana e sport.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div style={{
              marginTop: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(93,191,176,0.12)', borderRadius: '50px',
              padding: '0.6rem 1.1rem', maxWidth: '480px',
            }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>87%</span>
              <span style={{ fontSize: '0.85rem', color: C.text, fontWeight: 600, lineHeight: 1.4 }}>
                di successo riferito dai pazienti con un percorso di fisioterapia attiva basato su esercizio
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ margin: '1.5rem auto 0', fontSize: '0.85rem', fontWeight: 700, color: C.secondary, letterSpacing: '0.02em' }}>
              Prima visita gratuita →
            </p>
            <CtaButton center mt="0.5rem" label="Prenota la tua prima visita gratuita →" />
            <p style={{ margin: '0.75rem auto 0', fontSize: '0.85rem', color: `${C.text}88`, lineHeight: 1.6, maxWidth: '440px' }}>
              Ti rispondo personalmente entro 24-48 ore.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} direction="right">
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute', inset: '-1.5rem',
              background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.18) 0%, transparent 70%)',
              borderRadius: '2.5rem', filter: 'blur(20px)',
            }} />
            <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
              <Image
                src="/photos/f-spalla-davide.jpg"
                alt="Paziente che solleva un bilanciere sopra la testa senza dolore, dopo un percorso attivo in studio"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 42%' }}
                priority
                sizes="(max-width: 768px) 300px, 300px"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStrip() {
  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.75rem',
      }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: '0.01em',
            textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(255,255,255,0.4)',
          }}
        >
          <span style={{ color: '#FFD34D', fontSize: '0.85rem' }}>★★★★★</span>
          Più di 30 recensioni verificate su Google
        </a>
        {[
          '5+ anni di trattamenti di spalla in ambulatorio',
          '2 anni di attività a Broni',
          'Prima visita gratuita',
        ].map((testo) => (
          <div key={testo} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
          }}>
            <span style={{ color: '#fff', fontWeight: 800 }}>✓</span>
            {testo}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── PROBLEMA ─────────────────── */
const tentativi = [
  { Icon: Pill, label: 'Farmaci' },
  { Icon: Zap, label: 'Tecar' },
  { Icon: Syringe, label: 'Infiltrazioni' },
  { Icon: BedDouble, label: 'Riposo' },
]

const evitati = [
  { Icon: ArrowUp, label: 'Alzare il braccio sopra la testa', sub: undefined },
  { Icon: Hammer, label: 'Fare sforzi', sub: undefined },
  { Icon: Weight, label: 'Sollevare oggetti pesanti', sub: undefined },
  { Icon: Dumbbell, label: 'Evitare sport e hobby', sub: '“che possono dare problemi alla spalla”' },
]

function IconCard({ Icon, label, sub, tone = 'primary' }: { Icon: LucideIcon; label: string; sub?: string; tone?: 'primary' | 'muted' }) {
  const color = tone === 'primary' ? C.primary : `${C.text}88`
  const bg = tone === 'primary' ? 'rgba(26,158,201,0.1)' : 'rgba(44,44,44,0.07)'
  return (
    <div
      className="w-[calc(50%_-_0.5rem)] md:w-[calc(25%_-_0.75rem)]"
      style={{
        background: C.white, borderRadius: C.radius, padding: '1.6rem 0.75rem 1.25rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)', textAlign: 'center', minHeight: '10rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '0.7rem',
      }}
    >
      <div style={{
        width: '52px', height: '52px', borderRadius: '50%', background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={24} color={color} strokeWidth={2} />
      </div>
      <div>
        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: C.text, lineHeight: 1.3, display: 'block' }}>{label}</span>
        {sub && <span style={{ fontSize: '0.75rem', color: `${C.text}88`, lineHeight: 1.3, display: 'block', marginTop: '0.2rem' }}>{sub}</span>}
      </div>
    </div>
  )
}

function CardRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="gap-4 md:gap-6" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
      {children}
    </div>
  )
}

function LabelPill({ children, color, shadow }: { children: React.ReactNode; color: string; shadow: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span style={{
        display: 'inline-block', background: color, color: '#fff', fontSize: '0.9rem', fontWeight: 800,
        padding: '0.65rem 1.4rem', borderRadius: '50px', textAlign: 'center', lineHeight: 1.35,
        maxWidth: '100%', boxShadow: `0 4px 14px ${shadow}`,
      }}>
        {children}
      </span>
    </div>
  )
}

function ProblemaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4rem ${C.pad} 1.75rem` }}>
        <FadeIn>
          <h2 style={{ margin: '0 auto 2rem', maxWidth: '640px', textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
            Ecco cosa succede di solito a chi soffre di dolore alla spalla
          </h2>
          <LabelPill color={C.primary} shadow="rgba(26,158,201,0.3)">Quello che consigliano</LabelPill>
          <CardRow>
            {tentativi.map((t) => (
              <IconCard key={t.label} Icon={t.Icon} label={t.label} />
            ))}
          </CardRow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ marginTop: '2.5rem' }}>
            <LabelPill color="#C8403A" shadow="rgba(200,64,58,0.3)">Cosa invece sconsigliano</LabelPill>
          </div>
          <CardRow>
            {evitati.map((e) => (
              <IconCard key={e.label} Icon={e.Icon} label={e.label} sub={e.sub} tone="muted" />
            ))}
          </CardRow>
        </FadeIn>

        <FadeIn delay={0.14}>
          <div style={{
            marginTop: '2.5rem', textAlign: 'center',
            background: 'rgba(26,158,201,0.09)', borderRadius: C.radius, padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.5 }}>
              Farmaci e terapie passive, da soli, non ti faranno tornare ad usare la tua spalla come vorresti.
            </p>
            <p style={{ margin: '0.5rem 0 0', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.5 }}>
              Lo dicono le ricerche scientifiche più aggiornate.
            </p>
          </div>

          <div style={{
            marginTop: '1.25rem', textAlign: 'center',
            background: C.white, borderRadius: C.radiusLg, padding: '1.5rem 1.75rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: C.primary, lineHeight: 1, flexShrink: 0 }}>87%</div>
            <div style={{ flex: '0 1 340px' }}>
              <p style={{ margin: 0, color: C.text, fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.5 }}>
                di successo riferito dai pazienti con un percorso basato su esercizio terapeutico.
              </p>
              <p style={{ margin: '0.4rem 0 0', color: `${C.text}88`, fontSize: '0.85rem', lineHeight: 1.6 }}>
                Revisione sistematica Cochrane su oltre 250 persone.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ margin: 0, color: C.text, fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', fontWeight: 800, lineHeight: 1.4 }}>
              Ecco quello che ho pensato per chi ha dolore alla spalla da più di tre mesi.
            </p>
            <ArrowDown size={26} color={C.primary} strokeWidth={2.5} style={{ marginTop: '0.5rem' }} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── SOLUZIONE — SPALLA IN MOVIMENTO ─────────────────── */
const garanzie = [
  { Icon: Stethoscope, titolo: 'Visita fisioterapica gratuita', testo: 'Ti propongo il percorso solo se sei idoneo: ci sono precisi criteri clinici da rispettare, e non sono di facciata.' },
  { Icon: CalendarCheck, titolo: 'Pagamento mensile', testo: 'Puoi interrompere a metà percorso.' },
  { Icon: BadgePercent, titolo: 'Sconto sul percorso intero', testo: 'Se scegli tutte le 8 settimane insieme.' },
]

function SoluzioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `2rem ${C.pad} 4rem` }}>
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Spalla in Movimento
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              8 settimane. Una seduta a settimana.
            </h2>
            <p style={{ margin: '0.9rem auto 0', maxWidth: '560px', color: `${C.text}88`, fontSize: '1rem', lineHeight: 1.7 }}>
              Tendini e muscoli rispondono al carico e all&apos;esposizione graduale, non al riposo. Solo così puoi tornare ai movimenti che hai smesso di fare.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {['1 seduta / settimana', '60 minuti', '1:1 con me'].map((chip) => (
              <span key={chip} style={{
                background: 'rgba(93,191,176,0.14)', color: C.text, fontSize: '0.8rem', fontWeight: 700,
                padding: '0.4rem 0.9rem', borderRadius: '50px',
              }}>
                {chip}
              </span>
            ))}
          </div>

          <div style={{ position: 'relative', marginTop: '2rem', padding: '0 4px' }}>
            <div style={{
              position: 'absolute', left: '20px', right: '20px', top: '50%', height: '3px',
              background: `linear-gradient(90deg, ${C.secondary}, ${C.primary})`, transform: 'translateY(-50%)', borderRadius: '3px',
            }} />
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div key={n} style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: n === 8 ? C.primary : C.white,
                  color: n === 8 ? '#fff' : C.primary,
                  border: `3px solid ${C.primary}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.9rem',
                  boxShadow: '0 2px 8px rgba(26,158,201,0.2)',
                }}>
                  {n === 8 ? <Flag size={16} /> : n}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.6rem', fontSize: '0.75rem', fontWeight: 700, color: `${C.text}88` }}>
            <span>Settimana 1: si parte</span>
            <span>Settimana 8: confronto finale</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: '2.25rem' }}>
            {garanzie.map(({ Icon, titolo, testo }) => (
              <div key={titolo} style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1.75rem 1.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: `3px solid ${C.secondary}`,
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,158,201,0.14), rgba(93,191,176,0.24))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                }}>
                  <Icon size={28} color={C.primary} strokeWidth={2} />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>{titolo}</h3>
                <p style={{ margin: '0.5rem 0 0', maxWidth: '260px', fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.6 }}>{testo}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.8rem', color: `${C.text}77` }}>
            Non prometto una guarigione completa in otto settimane, ma è un lasso di tempo clinicamente coerente per riscontrare i primi miglioramenti.
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <CtaButton center mt="1.75rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CONFRONTO ─────────────────── */
function ConfrontoSection() {
  const tradizionale = [
    'Visita a pagamento in cui si guardano solo le carte del medico o le risonanze',
    'Terapie passive (tecar, laser, ultrasuoni) come trattamento principale',
    'Seduta di 20-30 minuti, gran parte passata sul lettino',
    'Stessi esercizi generici per ogni paziente',
    'Focus solo sul dolore del momento',
  ]
  const movimento = [
    'Visita gratuita in cui valuto attentamente i tuoi referti medici, ma soprattutto le tue sensazioni, i tuoi movimenti e i tuoi obiettivi',
    'L\'esercizio guidato e progressivo è il centro del trattamento',
    'Seduta di 60 minuti garantiti, dedicata interamente a te',
    'Carico progressivo per ricostruire la capacità di movimento e di carico della spalla',
  ]

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              La differenza si sente
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              Fisioterapia tradizionale vs. Fisioterapia in Movimento
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            style={{ borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            <div style={{ background: C.white, padding: '2rem 1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: '1.1rem' }}>Fisioterapia tradizionale</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tradizionale.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: `${C.text}99`, lineHeight: 1.6 }}>
                    <span style={{ opacity: 0.5, flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: C.text, padding: '2rem 1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.secondary, marginBottom: '1.1rem' }}>Fisioterapia in Movimento</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {movimento.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                    <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── WALL OF LOVE ─────────────────── */
const walletReviews = [
  { file: 'testimonianza-romulus-google.png', alt: 'Recensione Google di Romulus Halangescu su Studio Mantovan' },
  { file: 'testimonianza-antonio-ferrari-google.png', alt: 'Recensione Google di Antonio Ferrari su Studio Mantovan' },
  { file: 'testimonianza-giacomo-maini-google.png', alt: 'Recensione Google di Giacomo Maini su Studio Mantovan' },
  { file: 'testimonianza-letizia-casella-google.png', alt: 'Recensione Google di Letizia Casella su Studio Mantovan' },
  { file: 'testimonianza-bianca-ciocca-google.png', alt: 'Recensione Google di Bianca Ciocca su Studio Mantovan' },
  { file: 'testimonianza-roby-mada-google.png', alt: 'Recensione Google di Roby Mada su Studio Mantovan' },
  { file: 'testimonianza-manuela-ascagni-google.png', alt: 'Recensione Google di Manuela Ascagni su Studio Mantovan' },
  { file: 'testimonianza-carlotta-polatti-google.png', alt: 'Recensione Google di Carlotta Polatti su Studio Mantovan' },
  { file: 'testimonianza-simona-prun-google.png', alt: 'Recensione Google di Simona Prun su Studio Mantovan' },
]

function WallOfLoveSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Recensioni vere, screenshot veri
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.6rem' }}>
              Cosa dicono le persone che erano dove sei tu adesso
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {walletReviews.map((r, i) => (
            <StaggerItem key={r.file}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: `4px solid ${C.secondary}`,
                height: '100%',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/1', borderRadius: C.radiusSm, overflow: 'hidden' }}>
                  <Image
                    src={`/photos/${r.file}`}
                    alt={r.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    loading={i === 0 ? undefined : 'lazy'}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.1}>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.9rem', fontWeight: 700, color: C.primary, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Leggi tutte le recensioni su Google →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
const certificati = [
  { file: 'certificato-master-terapia-manuale-ortopedica.jpg', label: 'Master in Terapia Manuale Ortopedica' },
  { file: 'certificato-master-fisioterapia-sportiva.jpg', label: 'Master in Fisioterapia Sportiva' },
]

function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-center">
          <FadeIn direction="left">
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan, fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '53% 30%' }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <p style={{ marginTop: '0.9rem', color: C.text, fontSize: '1.08rem', fontWeight: 600, lineHeight: 1.7 }}>
              Mi chiamo Umberto Mantovan, sono nato e cresciuto a Broni e ho più di 5 anni di esperienza in ambito muscolo-scheletrico, tra libera professione e studi convenzionati.
            </p>
            <p style={{ marginTop: '0.9rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              La prima visita è gratuita perché voglio che tu scelga con chiarezza se questo percorso fa per te, prima ancora di iniziarlo.
            </p>

            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {certificati.map((c) => (
                <a
                  key={c.file}
                  href={`/photos/${c.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Apri l'attestato: ${c.label}`}
                  style={{
                    position: 'relative', display: 'block', flex: '1 1 0', minWidth: '140px', maxWidth: '200px',
                    aspectRatio: '1 / 1.414', borderRadius: C.radiusSm, overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: `1px solid ${C.surface}`,
                  }}
                >
                  <Image
                    src={`/photos/${c.file}`}
                    alt={`Attestato ${c.label} — Umberto Mantovan`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="200px"
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── HAI UN TENDINE LESIONATO? ─────────────────── */
function TendineLesionatoSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }}>
        <FadeIn>
          <div
            style={{
              background: C.surface, borderRadius: C.radiusLg, padding: '2rem',
              border: `1px solid ${C.primary}22`,
            }}
            className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 items-center"
          >
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
                Guarda il video
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
                Hai un tendine lesionato?
              </h2>
              <p style={{ margin: '1rem 0 0', color: `${C.text}99`, fontSize: '1rem', lineHeight: 1.7 }}>
                In questo video tratto un ragazzo con una lesione alla cuffia dei rotatori.
              </p>
            </div>

            <div style={{ width: '100%', maxWidth: '340px', margin: '0 auto' }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/videos/spalla-lesione-verticale-poster.jpg"
                style={{
                  width: '100%', maxWidth: '300px', margin: '0 auto', aspectRatio: '9 / 16', objectFit: 'contain',
                  borderRadius: C.radiusLg, background: '#000',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.15)', display: 'block',
                }}
              >
                <source src="/videos/spalla-lesione-verticale.mp4" type="video/mp4" />
              </video>
              <CtaButton center mt="1.25rem" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINALE ─────────────────── */
function CtaFinaleSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: C.text }}>
      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Prenota la tua visita gratuita.
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            In circa 60 minuti valuto la tua spalla e ti dico con sincerità se Spalla in Movimento è il percorso adatto a te.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
                letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(26,158,201,0.3)', whiteSpace: 'nowrap',
              }}
            >
              Prenota ora →
            </a>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={`tel:${TEL}`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}>
              📞 {TEL_DISPLAY}
            </a>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER MINIMALE ─────────────────── */
function MinimalFooter() {
  return (
    <footer style={{ background: C.text, padding: `1.5rem ${C.pad}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem',
        fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center',
      }}>
        <span>© {new Date().getFullYear()} Studio Mantovan – Umberto Mantovan · P.IVA 02842510188</span>
        <a href="/privacy" style={{ color: 'rgba(255,255,255,0.35)' }}>Privacy Policy</a>
        <a href="/cookie" style={{ color: 'rgba(255,255,255,0.35)' }}>Cookie Policy</a>
      </div>
    </footer>
  )
}
