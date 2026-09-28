import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'
import { recensioni } from '@/lib/recensioni'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

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
      <SoluzioneSection />
      <MetodoSection />
      <ComePrenotareSection />
      <DoveTrovarmiSection />
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
              <span style={{ color: C.primary }}>Fisioterapia in Movimento.</span><br />
              Per tornare a muoverti<br />
              <span style={{ color: C.secondary }}>senza che il dolore decida per te.</span>
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
              Percorsi riabilitativi individuali per chi convive con dolore persistente, ha subito
              un infortunio o sta recuperando da un intervento chirurgico. Ogni percorso è
              costruito per aiutarti a tornare alle attività che hanno valore per te.
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
                src="/photos/f6-deadlift.jpg"
                alt="Paziente che esegue uno stacco da terra con bilanciere seguito da Umberto Mantovan – fisioterapia in movimento a Broni, Oltrepò Pavese"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
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

/* ─────────────────── LA SOLUZIONE — differenze con la fisioterapia passiva ─────────────────── */
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
              La differenza
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
                    Fisioterapia tradizionale
                  </span>
                </div>
                <div style={{ padding: '1rem 1.5rem', background: C.primary, borderBottom: `2px solid ${C.primaryDark}` }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)' }}>
                    Fisioterapia in movimento
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

        {/* Rassicurazione sulla frequenza — al posto dei pacchetti/prezzi */}
        <FadeIn delay={0.2}>
          <div style={{
            marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto',
            background: C.white, borderRadius: C.radiusLg, padding: '1.5rem 2rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)', textAlign: 'center',
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
              <span style={{ fontWeight: 700, color: C.text }}>Devo venire tutti i giorni? </span>
              <span style={{ color: `${C.text}88` }}>No — la maggior parte dei percorsi prevede una seduta a settimana, poi si scala nel tempo verso l&apos;autonomia.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COME PRENOTARE ─────────────────── */
function ComePrenotareSection() {
  const steps = [
    { n: '1', testo: 'Scrivimi su WhatsApp o chiama al 351 924 2517.' },
    { n: '2', testo: 'Ne parliamo brevemente: capiamo insieme la tua situazione.' },
    { n: '3', testo: 'Fissiamo la prima visita gratuita in studio.' },
  ]

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come prenotare
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Tre passaggi, semplici
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: `3px solid ${C.secondary}`, height: '100%',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', background: C.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.9rem',
                }}>
                  {s.n}
                </div>
                <p style={{ margin: 0, fontSize: '0.96rem', color: C.text, lineHeight: 1.7, fontWeight: 600 }}>
                  {s.testo}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <CtaButton center mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── DOVE TROVARMI ─────────────────── */
function DoveTrovarmiSection() {
  const info = [
    { label: 'Indirizzo', value: 'Via Enzo Togni, 75, 27043 Broni PV' },
    { label: 'Orari', value: 'Lun, Mer, Gio 08–20 · Sab 14–19 · Solo su appuntamento' },
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
                title="Studio Mantovan – Via Enzo Togni, 75, Broni PV"
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

/* ─────────────────── RECENSIONI GOOGLE ─────────────────── */
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
            Se c&apos;è qualcosa che hai smesso di fare e che vorresti riprendere,
            inizia il tuo percorso parlandomi del tuo problema.
            La prima visita è gratuita.
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
