import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

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

/* ─── CTA primaria — componente condiviso ─── */
function CtaButton({ center = false, mt = '2rem' }: { center?: boolean; mt?: string }) {
  return (
    <div style={{
      marginTop: mt,
      display: 'flex',
      justifyContent: center ? 'center' : 'flex-start',
    }}>
      <a
        href="/prenota"
        style={{
            display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: C.primary,
          color: '#fff',
          fontWeight: 700,
          fontSize: '1rem',
          padding: '14px 28px',
          borderRadius: '50px',
          textDecoration: 'none',
          letterSpacing: '0.01em',
          boxShadow: `0 6px 24px rgba(26,158,201,0.28)`,
          whiteSpace: 'nowrap',
        }}
      >
        Prenota la prima visita gratuita →
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <DoveTrovarmiSection />
      <PerChiSection />
      <ProblemaSection />
      <SoluzioneSection />
      <MetodoSection />
      <PercorsiSection />
      <ChiSonoSection />
      <RecensioniSection />
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
        display: 'grid', gap: '3rem',
        position: 'relative', width: '100%',
      }}
        className="grid-cols-1 md:grid-cols-[1fr_420px]"
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
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: C.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Torna alle attività<br />
              <span style={{ color: C.primary }}>che davvero contano</span><br />
              con la{' '}
              <span style={{ color: C.secondary }}>fisioterapia moderna.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{
              marginTop: '1.5rem',
              fontSize: '1.05rem',
              color: `${C.text}99`,
              lineHeight: 1.8,
              maxWidth: '500px',
            }}>
              Se soffri di dolore cronico, hai subito un infortunio o stai recuperando da un
              intervento chirurgico, puoi tornare alle tue attività con un percorso riabilitativo
              specifico per la tua condizione.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
              Rispondo di persona entro 24 ore · Nessuna lista d&apos;attesa
            </p>
          </FadeIn>

        </div>

        {/* Foto */}
        <FadeIn delay={0.1} direction="right">
          <div style={{ position: 'relative', width: '100%', maxWidth: '460px', margin: '0 auto' }}>
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
                src="/photos/f7-studio.jpg"
                alt="Sala trattamento Studio Mantovan – fisioterapia a Broni, Oltrepò Pavese"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center', filter: 'brightness(1.15)' }}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
            {/* Badge flottante */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '10px',
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
                <div style={{ fontSize: '10px', color: `${C.text}55`, lineHeight: 1.4 }}>Dolore cronico · post-operatorio · infortuni</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStrip() {
  const items = [
    { icon: '✓', testo: 'Zero tempi di attesa' },
    { icon: '✓', testo: 'Prima visita gratuita' },
    { icon: '✓', testo: '5+ anni in ambito muscolo-scheletrico' },
  ]

  return (
    <div style={{
      background: C.primary,
      borderTop: `3px solid ${C.secondary}`,
    }}>
      <div style={{
        maxWidth: C.container,
        margin: '0 auto',
        padding: `1.1rem ${C.pad}`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
      }}>
        {items.map((item) => (
          <div key={item.testo} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.88rem', fontWeight: 600, color: '#fff',
            letterSpacing: '0.01em',
          }}>
            <span style={{
              width: '22px', height: '22px', borderRadius: '50%',
              background: C.secondary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.72rem', fontWeight: 800, color: '#fff',
              flexShrink: 0,
            }}>
              {item.icon}
            </span>
            {item.testo}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── DOVE TROVARMI ─────────────────── */
function DoveTrovarmiSection() {
  const info = [
    { label: 'Indirizzo', value: 'Via Enzo Togni 75, 27043 Broni (PV)' },
    { label: 'Orari', value: 'Lun – Ven: 15:00 – 20:00 · Solo su appuntamento' },
    { label: 'Telefono', value: '351 924 2517' },
    { label: 'Email', value: 'studio.mantovan@gmail.com' },
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-20">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Dove trovarmi
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Studio Mantovan · Broni (PV)
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Mappa */}
          <FadeIn direction="left">
            <div style={{
              borderRadius: C.radiusLg,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              aspectRatio: '16/9',
              position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.123456789!2d9.259!3d45.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787c3c3c3c3c3c3%3A0x0!2sVia+Enzo+Togni+75%2C+27043+Broni+PV!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Mantovan – Via Enzo Togni 75, Broni (PV)"
              />
            </div>
          </FadeIn>

          {/* Info contatti */}
          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: C.white,
              borderRadius: C.radiusLg,
              padding: '2rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              {info.map((item) => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.secondary }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: C.text, fontWeight: 500, lineHeight: 1.6 }}>
                    {item.value}
                  </span>
                </div>
              ))}

              <div style={{ paddingTop: '0.5rem', borderTop: `1px solid ${C.surface}`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://wa.me/393519242517"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: '#25D366', color: '#fff',
                    fontWeight: 700, fontSize: '0.9rem',
                    padding: '12px 20px', borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="#fff">
                    <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.354.638 4.638 1.849 6.638L2.667 29.333l6.854-1.797A13.285 13.285 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16c0-7.362-5.968-13.333-13.33-13.333zm0 24.267a11.01 11.01 0 0 1-5.617-1.541l-.402-.239-4.068 1.067 1.085-3.962-.263-.412A10.98 10.98 0 0 1 5.003 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.03-8.23c-.33-.165-1.954-.964-2.257-1.074-.303-.11-.523-.165-.744.165-.22.33-.853 1.074-1.046 1.294-.193.22-.385.248-.715.083-.33-.165-1.394-.514-2.656-1.638-.982-.874-1.645-1.953-1.837-2.283-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.794-1.019-2.456-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.881.413-.303.33-1.156 1.129-1.156 2.754s1.184 3.194 1.349 3.414c.165.22 2.33 3.558 5.648 4.991.79.341 1.406.544 1.886.697.792.252 1.514.216 2.084.131.636-.095 1.954-.799 2.23-1.571.275-.771.275-1.432.193-1.571-.083-.138-.303-.22-.633-.385z" />
                  </svg>
                  Scrivimi su WhatsApp
                </a>

                <a
                  href="https://maps.google.com/?q=Via+Enzo+Togni+75,+Broni+PV"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.85rem', fontWeight: 600, color: C.primary,
                    textDecoration: 'none',
                  }}
                >
                  Apri in Google Maps →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PER CHI È ─────────────────── */
const profili = [
  {
    icon: '🌀',
    tag: 'Dolore cronico',
    titolo: 'Soffri di dolore cronico',
    corpo: 'Lombalgia, cervicalgia, sciatalgia — un dolore che non passa mai davvero, che migliora per qualche settimana e poi torna. Magari hai già provato qualcosa, senza risultati duraturi. Con un percorso costruito sulla tua situazione reale impari a muoverti senza paura e torni alle attività che contano per te.',
  },
  {
    icon: '⚡',
    tag: 'Infortunio',
    titolo: 'Hai subito un infortunio',
    corpo: 'Una distorsione, una lesione muscolare, una tendinopatia che non guarisce. Sai che devi fare qualcosa ma non vuoi rischiare di peggiorare. Con un percorso graduato e progressivo torni allo sport o alle tue attività quotidiane nel modo più adatto alla tua condizione.',
  },
  {
    icon: '🏥',
    tag: 'Post-operatorio',
    titolo: 'Stai recuperando da un intervento chirurgico',
    corpo: 'Protesi, artroscopia, intervento alla schiena o alla spalla. Il recupero che fa la differenza non è quello che ti riporta a "stare discretamente" — è quello che ti riporta a fare. Con un percorso individuale costruito sulla tua situazione post-operatoria lavoriamo insieme per recuperare al meglio della tua condizione.',
  },
]

function PerChiSection() {
  return (
    <section style={{ background: C.text, color: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Per chi è
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', marginTop: '0.75rem', lineHeight: 1.2 }}>
              Questo percorso fa per te se…
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profili.map((p, i) => (
            <StaggerItem key={i}>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                borderLeft: `3px solid ${C.secondary}`,
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <span style={{
                  display: 'inline-block',
                  background: `rgba(93,191,176,0.15)`,
                  color: C.secondary,
                  fontSize: '0.68rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '3px 10px', borderRadius: '50px',
                  marginBottom: '0.75rem', alignSelf: 'flex-start',
                }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {p.titolo}
                </h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.8, flex: 1 }}>
                  {p.corpo}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <CtaButton mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── IL PROBLEMA ─────────────────── */
function ProblemaSection() {
  const problemPoints = [
    'Sono troppo generici, non costruiti sulla tua situazione reale',
    'Sono scollegati da quello che vuoi tornare a fare',
    'Sono noiosi, difficili da seguire nel tempo',
    'Non affrontano le paure e le abitudini che mantengono il problema',
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '720px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Il problema
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Perché molte persone che fanno fisioterapia
              <br />
              <span style={{ color: C.primary }}>non risolvono davvero il loro problema.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start" style={{ marginTop: '3rem' }}>
          <FadeIn direction="left">
            <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Hai presente quella sensazione di migliorare durante le sedute, e poi ricominciare
              da capo appena finiscono?
            </p>
            <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', marginTop: '1rem' }}>
              Non è sfortuna. È il limite di un modello che si concentra sul togliere il dolore
              nel breve periodo — non sul darti gli strumenti per non ritrovarti nella stessa situazione.
            </p>
            <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', marginTop: '1rem' }}>
              Il modello standard funziona così: terapie passive per ridurre il dolore, qualche
              tecnica manuale, una lista di movimenti da evitare. E alla fine, un foglio con gli
              esercizi da fare a casa. Tutto concentrato sul sintomo. Niente sulla persona.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: C.white,
              borderRadius: C.radiusLg,
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}>
              <p style={{ fontWeight: 700, color: C.text, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                Perché quegli esercizi, nella maggior parte dei casi, non funzionano:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {problemPoints.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#E05A5A', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>—</span>
                    <p style={{ margin: 0, color: `${C.text}88`, fontSize: '0.9rem', lineHeight: 1.7 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: '1.5rem',
              background: `rgba(26,158,201,0.06)`,
              borderLeft: `4px solid ${C.primary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
              padding: '1.25rem 1.5rem',
            }}>
              <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
                Il risultato? Qualche settimana di miglioramento, poi il dolore torna. E ricomincia
                il ciclo. Non perché il tuo caso sia difficile. Ma perché un percorso standardizzato
                non risolve un problema specifico.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── LA SOLUZIONE ─────────────────── */
const confronto = [
  { standard: 'Terapie passive: tecar, ultrasuoni, massaggi', studio: 'Esercizio terapeutico attivo, in seduta' },
  { standard: 'Pacchetti da 10 sedute uguali per tutti', studio: 'Percorso costruito sulla tua situazione reale' },
  { standard: 'Lista di movimenti da evitare', studio: 'Ritorno graduale a quello che vuoi tornare a fare' },
  { standard: 'Esercizi a casa da fare da soli', studio: 'Indicazioni pratiche legate alle tue attività quotidiane' },
  { standard: 'Si tratta il sintomo', studio: 'Si lavora sulla persona' },
  { standard: 'Il paziente riceve', studio: 'Il paziente è protagonista del recupero' },
  { standard: 'Torni ogni volta che il dolore si ripresenta', studio: 'Esci con gli strumenti per non aver più bisogno di me' },
]

function SoluzioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              La soluzione
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Un approccio diverso esiste.
              <br />
              <span style={{ color: C.primary }}>Ecco su cosa si fonda il mio lavoro.</span>
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Non si tratta di essere &ldquo;alternativi&rdquo; o di rifiutare la tradizione per principio.
              Si tratta di fare quello che le evidenze scientifiche indicano come efficace —
              e di farlo davvero, non a metà.
            </p>
          </div>
        </FadeIn>

        {/* Tabella comparativa — scroll orizzontale su mobile */}
        <FadeIn delay={0.1}>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: C.radiusLg }}>
            <div style={{
              background: C.white,
              borderRadius: C.radiusLg,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              minWidth: '560px',
            }}>
              {/* Header tabella */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '1rem 1.5rem', background: C.surface, borderBottom: `2px solid ${C.surface}` }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: `${C.text}66` }}>
                    Fisioterapia standard
                  </span>
                </div>
                <div style={{ padding: '1rem 1.5rem', background: C.primary, borderBottom: `2px solid ${C.primaryDark}` }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)' }}>
                    Studio Mantovan
                  </span>
                </div>
              </div>

              {/* Righe */}
              {confronto.map((riga, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${C.surface}` }}>
                  <div style={{
                    padding: '1rem 1.5rem',
                    background: i % 2 === 0 ? C.white : `${C.surface}66`,
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}>
                    <span style={{ color: '#E05A5A', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem' }}>✗</span>
                    <span style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.6 }}>{riga.standard}</span>
                  </div>
                  <div style={{
                    padding: '1rem 1.5rem',
                    background: i % 2 === 0 ? `rgba(26,158,201,0.04)` : `rgba(26,158,201,0.08)`,
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}>
                    <span style={{ color: C.secondary, fontWeight: 700, flexShrink: 0, fontSize: '0.85rem' }}>✓</span>
                    <span style={{ fontSize: '0.88rem', color: C.text, fontWeight: 500, lineHeight: 1.6 }}>{riga.studio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <CtaButton mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COME LAVORO — 3 FASI ─────────────────── */
const fasi = [
  {
    num: '01',
    titolo: 'Prima visita gratuita: capire davvero cosa sta succedendo',
    corpo: 'Non parto dalla tua diagnosi o dal tuo referto. Parto da te — dalla tua storia, da quello che hai già provato, da quello che non riesci più a fare. Nella prima visita ascolto, valuto e costruiamo insieme un quadro chiaro della tua situazione. Uscirai già con una comprensione diversa del tuo problema — indipendentemente da quello che deciderai di fare dopo.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Percorso attivo: sedute individuali, esercizio al centro',
    corpo: 'Niente macchinari passivi, niente protocolli standard. Ogni seduta è costruita sulla tua situazione e si adatta settimana dopo settimana ai tuoi progressi. L\'esercizio terapeutico è lo strumento principale — progressivo, graduato, pensato per riportarti a fare quello che conta per te.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Seguito fino alla fine: nessun passo fatto da solo',
    corpo: 'Ogni fase del percorso ha un inizio e una fine chiari. Ogni seduta ha un senso preciso nel percorso complessivo — e lo saprai anche tu. Quando il percorso finisce, finisce perché stai davvero bene — non perché le sedute sono finite.',
    tag: 'Autonomia',
  },
]

function MetodoSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come lavoro
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Come funziona il percorso
            </h2>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.8, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Se l&apos;obiettivo è renderti autonomo, il percorso deve essere costruito per
              arrivarci — non per tenerti in studio il più a lungo possibile.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fasi.map((fase) => (
            <StaggerItem key={fase.num}>
              <div style={{
                position: 'relative',
                background: C.white,
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
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
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {fase.titolo}
                </h3>
                <p style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.8, margin: 0 }}>
                  {fase.corpo}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <CtaButton center mt="3rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PERCORSI ─────────────────── */
const percorsi = [
  {
    icon: '🌀',
    tag: 'Dolore cronico · Condizione persistente',
    titolo: 'Dolore cronico',
    corpo: 'Lombalgia cronica, cervicalgia, sciatalgia persistente.',
    durata: '3 mesi',
    bonus: '1 seduta gratuita, cedibile a chi vuoi — se completi i 3 mesi di percorso',
    bonusColore: C.secondary,
  },
  {
    icon: '⚡',
    tag: 'Infortunio · Fase subacuta',
    titolo: 'Infortunio',
    corpo: 'Distorsioni, lesioni muscolari, tendinopatie.',
    durata: '2 mesi',
    bonus: 'Visita di controllo gratuita al termine, per valutare il ritorno completo all\'attività',
    bonusColore: C.primary,
  },
  {
    icon: '🏥',
    tag: 'Post-operatorio · Riabilitazione',
    titolo: 'Post-operatorio',
    corpo: 'Protesi, artroscopia, interventi alla schiena o alla spalla.',
    durata: '3 mesi',
    bonus: 'Visita di controllo gratuita a 30 giorni dal termine del percorso',
    bonusColore: C.secondary,
  },
]

function PercorsiSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">

        {/* Intestazione */}
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              I percorsi
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Non compri sedute.
              <br />
              <span style={{ color: C.primary }}>Entri in un percorso.</span>
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Le linee guida internazionali per i disturbi muscolo-scheletrici parlano di settimane
              e mesi — mai di un numero fisso di appuntamenti. Per questo non trovi pacchetti:
              trovi percorsi strutturati sul tempo reale che la tua condizione richiede.
            </p>
          </div>
        </FadeIn>

        {/* Card percorsi */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {percorsi.map((p, i) => (
            <StaggerItem key={i}>
              <div style={{
                background: C.white,
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                border: `1px solid rgba(0,0,0,0.04)`,
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{p.icon}</div>

                <span style={{
                  display: 'inline-block',
                  background: `rgba(93,191,176,0.12)`,
                  color: C.secondary,
                  fontSize: '0.65rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '3px 10px', borderRadius: '50px',
                  marginBottom: '0.75rem', alignSelf: 'flex-start',
                }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.5rem' }}>
                  {p.titolo}
                </h3>
                <p style={{ fontSize: '0.85rem', color: `${C.text}77`, lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {p.corpo}
                </p>

                {/* Durata */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: `${C.text}55` }}>Durata indicativa:</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: C.text }}>{p.durata}</span>
                </div>

                {/* Bonus */}
                <div style={{
                  background: `rgba(93,191,176,0.08)`,
                  borderLeft: `3px solid ${p.bonusColore}`,
                  borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
                  padding: '0.75rem 1rem',
                }}>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: C.text, fontWeight: 600, lineHeight: 1.5 }}>
                    🎁 {p.bonus}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Note di servizio */}
        <FadeIn delay={0.2}>
          <div style={{
            marginTop: '2.5rem',
            background: C.surface,
            borderRadius: C.radiusLg,
            padding: '1.75rem 2rem',
          }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { icon: '📅', titolo: 'Pagamento mensile anticipato', testo: 'Nessun vincolo contrattuale.' },
              { icon: '🔄', titolo: 'Rivalutazione ogni mese', testo: 'La frequenza si adatta ai tuoi progressi.' },
              { icon: '💬', titolo: 'Il percorso si definisce in valutazione', testo: 'Durata e frequenza si definiscono nella prima visita — non prima.' },
            ].map((nota, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem', marginTop: '1px', flexShrink: 0 }}>{nota.icon}</span>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: C.text }}>{nota.titolo}</p>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: `${C.text}77`, lineHeight: 1.6 }}>{nota.testo}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.25}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: '0', lineHeight: 1.7 }}>
              Non sai in quale categoria rientri? La prima visita è gratuita — e serve esattamente a questo.
            </p>
            <CtaButton center mt="1.25rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}44` }}>
              Rispondo di persona entro 24 ore · Nessun impegno
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
function ChiSonoSection() {
  return (
    <section style={{ background: C.surface, overflow: 'hidden' }}>
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
                  alt="Umberto Mantovan fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
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
            <p style={{ marginTop: '1.5rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Sono nato a Broni, nel cuore dell&apos;Oltrepò Pavese. Un luogo dove la vita scorre
              lenta, tra colline e volti familiari.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Mi sono laureato in Fisioterapia all&apos;Università di Pavia, nel pieno della pandemia —
              un periodo che mi ha insegnato ad adattarmi e a costruire, giorno dopo giorno, il
              coraggio di trovare la mia strada.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Dopo la laurea mi sono trasferito a Sanremo, dove ho aperto la mia Partita IVA. È stato
              il primo vero salto nel vuoto: nuove responsabilità, e quella sensazione — bella e un po&apos;
              spaventosa — di iniziare davvero a costruire qualcosa di mio.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Un anno dopo sono tornato in Oltrepò, in uno studio convenzionato SSN a Casteggio,
              dove ho affiancato gli studenti di Fisioterapia dell&apos;Università di Pavia durante il
              tirocinio. Ma quell&apos;esperienza mi ha mostrato anche l&apos;altra faccia della medaglia:
              protocolli standardizzati, poca personalizzazione, percorsi di cura rallentati da
              vincoli gestionali.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Così, nel 2025, ho aperto il mio studio a Broni — il paese dove sono cresciuto.
              Non solo uno spazio di lavoro, ma il luogo dove la mia idea di fisioterapia ha
              finalmente preso forma: trasparente, basata sulle evidenze scientifiche, e attenta
              agli aspetti comunicativi e cognitivi del dolore.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Fisioterapia ad accesso diretto', 'Comunicazione efficace', 'Fisioterapia basata sulle evidenze'].map((item) => (
                <span key={item} style={{
                  background: C.white,
                  color: `${C.text}BB`,
                  fontSize: '0.78rem', fontWeight: 600,
                  padding: '6px 14px', borderRadius: '50px',
                  border: `1px solid ${C.surface}`,
                }}>
                  {item}
                </span>
              ))}
            </div>
            <CtaButton mt="1.75rem" />
            <Link
              href="/chi-sono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginTop: '1rem',
                fontSize: '0.9rem', fontWeight: 600, color: C.primary,
                textDecoration: 'none',
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

/* ─────────────────── RECENSIONI GOOGLE ─────────────────── */
const recensioni = [
  {
    testo: 'Attento, preparato e capace di spiegare ogni passaggio in modo chiaro, mettendoti sempre a tuo agio. Consiglio vivamente questo studio a chi cerca un fisioterapista competente, aggiornato e capace di creare un percorso su misura.',
    nome: 'Letizia C.',
    iniziali: 'L',
  },
  {
    testo: 'Una persona particolarmente attenta, paziente e scrupolosa, oltre che molto preparata e professionale. Mi sono trovata benissimo — grazie a lui mi sento decisamente bene. Consigliatissimo!',
    nome: 'Manuela A.',
    iniziali: 'M',
  },
  {
    testo: 'Un professionista molto competente, attento e disponibile. Consiglio vivamente a chi cerca un fisioterapista serio e preparato.',
    nome: 'Carlotta P.',
    iniziali: 'C',
  },
  {
    testo: 'Professionale e molto disponibile. Ha saputo individuare il problema e spiegare con minuzia il percorso da seguire.',
    nome: 'Giacomo M.',
    iniziali: 'G',
  },
  {
    testo: 'Studio molto valido. Super preparato e competente — ha risolto in poco tempo una problematica che altri fisioterapisti non erano riusciti a migliorare. Consiglio vivamente!',
    nome: 'Bianca C.',
    iniziali: 'B',
  },
  {
    testo: 'Dei diversi professionisti che mi hanno trattata, Umberto ha fatto la differenza: preparazione e professionalità a parte, dietro ogni sintomo c\'è una storia — ed è da qui che parte la sua cura, con ascolto attivo ed empatia. Non solo pazienti, ma persone che hanno voglia di stare bene.',
    nome: 'Roberta M.',
    iniziali: 'R',
  },
]

function RecensioniSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa dicono di me
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Cosa dicono i pazienti.
            </h2>
            <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#FBBC04', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
              <span style={{ fontSize: '0.85rem', color: `${C.text}77`, fontWeight: 600 }}>Recensioni Google verificate</span>
            </div>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recensioni.map((r, i) => (
            <StaggerItem key={i}>
              <div style={{
                background: C.surface,
                borderRadius: C.radiusLg,
                padding: '2rem',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                borderLeft: `4px solid ${C.secondary}`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{ color: '#FBBC04', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: `${C.text}CC`,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}>
                  &ldquo;{r.testo}&rdquo;
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginTop: '1.5rem', paddingTop: '1.25rem',
                  borderTop: `1px solid rgba(0,0,0,0.06)`,
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: C.primary,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '13px', fontWeight: 700, flexShrink: 0,
                  }}>
                    {r.iniziali}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: C.text }}>{r.nome}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://g.page/r/studmantovan/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '0.85rem', fontWeight: 600, color: C.primary,
                textDecoration: 'none',
              }}
            >
              Lascia anche tu una recensione →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CTA AZZURRA ─────────────────── */
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
            Se c&apos;è qualcosa che hai smesso di fare
            e vorresti riprendere, partiamo da una conversazione.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Nella prima visita ti ascolto, esploro la tua storia e capiamo insieme
            cosa sta bloccando il tuo recupero. Uscirai con una comprensione diversa
            della tua situazione — indipendentemente da quello che deciderai di fare dopo.
            Se non sono la persona giusta per te, te lo dico apertamente
            e ti indirizzo verso chi può aiutarti meglio.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary,
                fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                whiteSpace: 'nowrap',
              }}
            >
              Prenota la prima visita gratuita →
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
