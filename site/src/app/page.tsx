import Image from 'next/image'
import Link from 'next/link'
import { patologie } from '@/lib/patologie'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'
import { PatologieLinks } from '@/components/PatologieLinks'

/* ─── Costanti design system (da landing-page-style.md) ─── */
const C = {
  primary:        '#1A9EC9',
  primaryDark:    '#147FA0',
  secondary:      '#5DBFB0',
  secondaryLight: '#7ED4C8',
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemaSection />
      <MetodoSection />
      <PerChiSection />
      <CasoRealeSection />
      <TestimonianzeSection />
      <ChiSonoSection />
      <CtaMidSection />
      <FaqSection />
    </>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: C.bg,
        paddingTop: '68px',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93,191,176,0.07) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}`,
        display: 'grid', gridTemplateColumns: '1fr', gap: '3rem',
        position: 'relative', width: '100%',
      }}
        className="lg:grid-cols-[1fr_460px]"
      >
        {/* Testo */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <FadeIn>
            <span style={{
              display: 'inline-block',
              background: `rgba(26,158,201,0.1)`,
              color: C.primary,
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              padding: '6px 14px',
              borderRadius: '50px',
              marginBottom: '1.5rem',
            }}>
              Fisioterapia · Broni, Oltrepò Pavese
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: C.text,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Hai già provato tutto.
              <br />
              <span style={{ color: C.primary }}>Eppure il dolore</span>
              <br />è ancora lì.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              color: `${C.text}99`,
              lineHeight: 1.75,
              maxWidth: '480px',
            }}>
              Ti aiuto a tornare alle attività che contano per te — non solo a stare meglio qualche settimana.
              Percorso 1:1, costruito su di te. Nessun protocollo standard.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://wa.me/393519242517"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: C.primary, color: '#fff',
                  fontWeight: 700, fontSize: '1rem',
                  padding: '14px 28px', borderRadius: '50px',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  boxShadow: `0 6px 24px rgba(26,158,201,0.28)`,
                  width: 'fit-content',
                  transition: 'background 0.2s, transform 0.15s',
                }}
              >
                Prenota la valutazione gratuita →
              </a>
              <p style={{ fontSize: '0.78rem', color: `${C.text}55`, margin: 0 }}>
                Rispondo di persona entro 24 ore · Senza impegno
              </p>
            </div>
          </FadeIn>

          {/* Proof strip */}
          <FadeIn delay={0.32}>
            <div style={{
              marginTop: '2.5rem',
              display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
              fontSize: '0.85rem', color: `${C.text}66`,
            }}>
              {['Prima visita gratuita', 'Solo sedute 1:1', 'Nessun macchinario passivo'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: C.secondary, fontSize: '1rem' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Foto */}
        <FadeIn delay={0.1} direction="right">
          <div style={{ position: 'relative', width: '100%', maxWidth: '460px', margin: '0 auto' }}>
            {/* Glow blob */}
            <div style={{
              position: 'absolute', inset: '-1.5rem',
              background: `radial-gradient(ellipse at center, rgba(93,191,176,0.18) 0%, transparent 70%)`,
              borderRadius: '2.5rem', filter: 'blur(20px)',
            }} />
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: C.radiusLg,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
            }}>
              <Image
                src="/photos/f1-trattamento-lombare.jpg"
                alt="Umberto Mantovan fisioterapista Broni durante una seduta di trattamento lombare"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
            {/* Badge flottante */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-20px',
              background: '#fff',
              borderRadius: C.radius,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: `rgba(93,191,176,0.15)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}>🏆</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.text }}>5+ anni di esperienza</div>
                <div style={{ fontSize: '10px', color: `${C.text}55` }}>Oltre 100 pazienti seguiti</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PROBLEMA ─────────────────── */
function ProblemaSection() {
  const painPoints = [
    'Hai già fatto fisioterapia, massaggi, tecar. Ha aiutato — ma dopo qualche settimana il dolore è tornato.',
    'Ti hanno detto di stare fermo, evitare certi movimenti, aspettare che passi da solo.',
    'Hai visto la risonanza: ernie, protrusioni, usura. Adesso hai più paura di muoverti di prima.',
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }}
        className="md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn direction="left">
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Il problema
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Ti riconosci in questo?
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}77`, lineHeight: 1.75 }}>
              Il dolore cronico non sparisce con il riposo o con una manciata di sedute. Se fosse così semplice, non saresti qui.
            </p>
          </FadeIn>

          <StaggerChildren className="flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: C.white,
                  borderRadius: C.radius,
                  padding: '1.25rem 1.5rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  borderLeft: `4px solid ${C.secondary}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  <span style={{ color: C.secondary, fontSize: '1.1rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
                  <p style={{ margin: 0, color: `${C.text}CC`, fontSize: '0.95rem', lineHeight: 1.7 }}>{point}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: C.text, maxWidth: '640px', margin: '0 auto', lineHeight: 1.5 }}>
              Non è colpa tua.{' '}
              <span style={{ color: C.primary }}>
                Ma c&apos;è un motivo per cui non è passato — e si può cambiare.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── METODO — 3 FASI ─────────────────── */
const fasi = [
  {
    num: '01',
    titolo: 'Capiamo cosa sta succedendo davvero',
    corpo: 'Prima visita gratuita: ti ascolto, esploro la tua storia, capiamo insieme i tuoi obiettivi concreti. Uscirai con una comprensione diversa di quello che ti sta succedendo — non solo una lista di esercizi.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Il corpo impara di nuovo che muoversi è sicuro',
    corpo: 'Sedute 1:1, pochi esercizi scelti su misura, esposizione graduale alle attività che evitavi. Nessun macchinario passivo: lavoriamo insieme, tu in prima persona.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Torni alle attività che contano per te',
    corpo: "Frequenza in calo, autonomia crescente. L'obiettivo non è non avere più dolore — è tornare a fare quello che conta. Il lavoro, lo sport, muoverti senza pensarci su.",
    tag: 'Autonomia',
  },
]

function MetodoSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come lavoro
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Il dolore ha una storia.
              <br />
              <span style={{ color: C.primary }}>Il percorso parte da lì.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fasi.map((fase) => (
            <StaggerItem key={fase.num}>
              <div style={{
                position: 'relative',
                background: C.surface,
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s',
              }}>
                {/* Numero watermark */}
                <div style={{
                  position: 'absolute', top: '-16px', right: '-8px',
                  fontSize: '7rem', fontWeight: 800, lineHeight: 1,
                  color: `${C.primary}0F`, userSelect: 'none',
                }}>
                  {fase.num}
                </div>

                <span style={{
                  display: 'inline-block',
                  background: `rgba(26,158,201,0.1)`,
                  color: C.primary,
                  fontSize: '0.7rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '4px 10px', borderRadius: '50px',
                  marginBottom: '1rem',
                }}>
                  {fase.tag}
                </span>

                <div style={{ fontSize: '2rem', fontWeight: 800, color: C.primary, marginBottom: '0.75rem' }}>
                  {fase.num}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: C.text, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {fase.titolo}
                </h3>
                <p style={{ fontSize: '0.9rem', color: `${C.text}88`, lineHeight: 1.75, margin: 0 }}>
                  {fase.corpo}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── PER CHI ─────────────────── */
function PerChiSection() {
  const target = [
    { icon: '🔁', testo: 'Hai dolore da settimane o mesi e hai già provato altre strade senza risultati duraturi' },
    { icon: '🧠', testo: 'Vuoi capire cosa ti sta succedendo davvero — non solo ricevere esercizi da fare a casa' },
    { icon: '🏋️', testo: 'Sei uno sportivo che vuole tornare ad allenarsi, non solo smettere di soffrire' },
    { icon: '😟', testo: 'Hai paura di muoverti perché temi di peggiorare o farti del male' },
  ]

  return (
    <section style={{ background: C.text, color: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Colonna sinistra */}
          <div>
            <FadeIn direction="left">
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
                Per chi è
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', marginTop: '0.75rem', lineHeight: 1.2 }}>
                Questo percorso
                <br />è pensato per te se&hellip;
              </h2>
            </FadeIn>

            <div style={{ marginTop: '2rem' }}>
            <StaggerChildren className="flex flex-col gap-5">
              {target.map((t, i) => (
                <StaggerItem key={i}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ fontSize: '1.4rem', marginTop: '1px' }}>{t.icon}</span>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{t.testo}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            </div>

            <FadeIn delay={0.4}>
              <a
                href="https://wa.me/393519242517"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: C.primary, color: '#fff',
                  fontWeight: 700, fontSize: '0.95rem',
                  padding: '13px 24px', borderRadius: '50px',
                  textDecoration: 'none',
                  marginTop: '2.5rem',
                  transition: 'background 0.2s',
                }}
              >
                Prenota la valutazione gratuita →
              </a>
            </FadeIn>
          </div>

          {/* Colonna destra — link patologie (client component per hover) */}
          <FadeIn direction="right" delay={0.1}>
            <PatologieLinks />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CASO REALE ─────────────────── */
function CasoRealeSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Foto */}
          <FadeIn direction="left">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-1.5rem',
                background: `radial-gradient(ellipse at center, rgba(26,158,201,0.1) 0%, transparent 70%)`,
                borderRadius: '3rem', filter: 'blur(20px)',
              }} />
              <div style={{
                position: 'relative', aspectRatio: '4/5',
                borderRadius: C.radiusLg, overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
              }}>
                <Image
                  src="/photos/f6-deadlift.jpg"
                  alt="Paziente di Studio Mantovan esegue deadlift con bilanciere — risultato percorso riabilitativo lombalgia"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '-14px', right: '-14px',
                background: C.primary, color: '#fff',
                borderRadius: C.radius,
                padding: '10px 16px',
                fontSize: '0.85rem', fontWeight: 700,
                boxShadow: '0 8px 20px rgba(26,158,201,0.35)',
              }}>
                Foto reale · nessuna modifica
              </div>
            </div>
          </FadeIn>

          {/* Testo */}
          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Un caso reale
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Da non riuscire
              <br />ad allacciarsi le scarpe
              <br />
              <span style={{ color: C.primary }}>al deadlift con bilanciere.</span>
            </h2>
            <p style={{ marginTop: '1.5rem', color: `${C.text}99`, lineHeight: 1.75 }}>
              Luca è arrivato da me con un mal di schiena che durava da anni. Aveva smesso di andare in palestra,
              evitava di chinarsi, aveva paura di qualsiasi sforzo. Con un percorso costruito su di lui — pochi
              esercizi, obiettivi concreti, nessun protocollo uguale per tutti — ha sollevato il bilanciere per
              la prima volta in vita sua.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.75 }}>
              Non era il suo obiettivo quando è entrato nello studio. Era meglio.
            </p>
            <blockquote style={{
              marginTop: '2rem',
              borderLeft: `4px solid ${C.secondary}`,
              paddingLeft: '1.25rem',
              margin: '2rem 0 0',
            }}>
              <p style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: C.text,
                fontWeight: 600,
                lineHeight: 1.6,
                margin: 0,
              }}>
                &ldquo;Non pensavo fosse possibile. Adesso vado in palestra tre volte a settimana.&rdquo;
              </p>
              <cite style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.85rem', color: `${C.text}66`, fontStyle: 'normal' }}>
                — Luca, 38 anni, Broni
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── TESTIMONIANZE ─────────────────── */
const testimonianze = [
  {
    testo: 'Avevo mal di schiena da 3 anni, non riuscivo a stare seduta più di 20 minuti senza che iniziasse a bruciare. Dopo 6 settimane con Umberto sono tornata a correre.',
    nome: 'Paola',
    info: '41 anni · Casteggio',
    iniziali: 'P',
  },
  {
    testo: 'Pensavo che la sciatalgia fosse qualcosa con cui dovevo imparare a convivere per sempre. Ho sbagliato. Il percorso è stato diverso da tutto quello che avevo già provato.',
    nome: 'Marco',
    info: '52 anni · Broni',
    iniziali: 'M',
  },
  {
    testo: "Prima di arrivare da Umberto avevo già visto due fisioterapisti. La differenza? Qui mi ha spiegato cosa stava succedendo davvero — e ho smesso di avere paura di muovermi.",
    nome: 'Giulia',
    info: '35 anni · Voghera',
    iniziali: 'G',
  },
]

function TestimonianzeSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Testimonianze
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Quello che dicono le persone
              <br />
              <span style={{ color: C.primary }}>che erano dove sei tu adesso.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonianze.map((t, i) => (
            <StaggerItem key={i}>
              <div style={{
                background: C.white,
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                borderLeft: `4px solid ${C.secondary}`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <span style={{ fontSize: '1.5rem', color: `${C.secondary}55`, marginBottom: '1rem', lineHeight: 1 }}>&ldquo;</span>
                <p style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: `${C.text}CC`,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}>
                  {t.testo}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginTop: '1.5rem', paddingTop: '1.25rem',
                  borderTop: `1px solid ${C.surface}`,
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: C.primary,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '13px', fontWeight: 700, flexShrink: 0,
                  }}>
                    {t.iniziali}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: C.text }}>{t.nome}</div>
                    <div style={{ fontSize: '0.75rem', color: `${C.text}66` }}>{t.info}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">
          {/* Foto */}
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '420px' }}>
              <div style={{
                position: 'absolute', inset: '-1.5rem',
                background: `radial-gradient(ellipse at center, rgba(93,191,176,0.12) 0%, transparent 70%)`,
                borderRadius: '3rem', filter: 'blur(20px)',
              }} />
              <div style={{
                position: 'relative', aspectRatio: '1',
                borderRadius: C.radiusLg, overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
              }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </FadeIn>

          {/* Testo */}
          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Una sola regola:
              <br />
              <span style={{ color: C.primary }}>nessun paziente uguale all&apos;altro.</span>
            </h2>
            <p style={{ marginTop: '1.5rem', color: `${C.text}99`, lineHeight: 1.75 }}>
              Sono <strong style={{ color: C.text, fontWeight: 700 }}>Umberto Mantovan</strong>, fisioterapista. Ho 28 anni
              e ho aperto Studio Mantovan a Broni nel 2025 dopo anni di esperienza in libera professione a Sanremo e
              in uno studio convenzionato SSN a Casteggio.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.75 }}>
              Ho visto come funziona il modello standard: terapie passive, protocolli uguali per tutti, pazienti
              che tornano con gli stessi problemi. Ho scelto un approccio diverso.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.75 }}>
              Nel mio studio non trovi macchinari passivi. Trovi un fisioterapista che ti ascolta, che ti spiega
              cosa sta succedendo, e che costruisce un percorso su quello che vuoi tornare a fare — non sulla tua diagnosi.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Laureato Università di Pavia", "Approccio CFT (O'Sullivan)", "First Contact Practitioner"].map((item) => (
                <span key={item} style={{
                  background: C.surface,
                  color: `${C.text}BB`,
                  fontSize: '0.78rem', fontWeight: 600,
                  padding: '6px 14px', borderRadius: '50px',
                }}>
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/chi-sono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginTop: '1.5rem',
                fontSize: '0.9rem', fontWeight: 600, color: C.primary,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              Scopri di più su di me →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CTA MID ─────────────────── */
function CtaMidSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: C.primary }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(0,0,0,0.05)',
        }} />
      </div>
      <div style={{
        position: 'relative',
        maxWidth: '760px', margin: '0 auto',
        padding: `5rem ${C.pad}`,
        textAlign: 'center',
      }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25 }}>
            Inizia con una valutazione gratuita.
            <br />
            Senza impegno, senza obbligo.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Nella prima visita capisco la tua situazione e ti spiego chiaramente se e come posso aiutarti.
            Se non sono la persona giusta, te lo dico.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://wa.me/393519242517"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary,
                fontWeight: 700, fontSize: '1rem',
                padding: '15px 32px', borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            >
              Prenota la valutazione gratuita →
            </a>
            <a href="tel:+393519242517" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}>
              Chiama: 351 924 2517
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            Rispondo di persona entro 24 ore
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
