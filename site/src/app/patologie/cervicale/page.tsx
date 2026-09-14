import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Dolore cervicale e al braccio a Broni | Studio Mantovan',
  description:
    'Bruciore o formicolio che scende dal collo verso il braccio? Una valutazione che parte da cosa non riesci più a fare, non dalla risonanza. Prima visita gratuita: 351 924 2517.',
  keywords: [
    'cervicalgia Broni',
    'radicolopatia cervicale',
    'dolore braccio dal collo',
    'formicolio braccio',
    'ernia cervicale',
    'cervicobrachialgia',
    'fisioterapista cervicale Oltrepò Pavese',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/cervicale',
  },
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

/* ─── CTA primaria ─── */
function CtaButton({ center = false, mt = '2rem' }: { center?: boolean; mt?: string }) {
  return (
    <div style={{ marginTop: mt, display: 'flex', justifyContent: center ? 'center' : 'flex-start' }}>
      <a
        href="/prenota"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.primary, color: '#fff',
          fontWeight: 700, fontSize: '1rem',
          padding: '14px 28px', borderRadius: '50px',
          textDecoration: 'none', letterSpacing: '0.01em',
          boxShadow: '0 6px 24px rgba(26,158,201,0.28)',
          whiteSpace: 'nowrap',
        }}
      >
        Prenota la valutazione gratuita →
      </a>
    </div>
  )
}

const faqCervicale = [
  {
    q: 'Ho il formicolio al braccio: devo preoccuparmi?',
    a: 'Spesso è il segnale di una radice nervosa irritata al collo. È fastidioso, ma nella grande maggioranza dei casi si risolve con il trattamento conservativo giusto.',
  },
  {
    q: 'Ho fatto la risonanza e c’è un’ernia: devo operarmi?',
    a: 'Non necessariamente. Il trattamento conservativo produce risultati a lungo termine comparabili alla chirurgia nella maggior parte dei casi — ne parliamo nella valutazione.',
  },
  {
    q: 'Da quanto tempo devo avere questi sintomi prima di venire da un fisioterapista?',
    a: 'Prima vai, meglio è. Aspettare non aiuta e rischia solo di allungare il percorso di recupero.',
  },
  {
    q: 'Quanto tempo ci vorrà per stare meglio?',
    a: 'Dipende dalla durata e intensità dei sintomi, ma la maggior parte delle persone nota miglioramenti significativi già nelle prime settimane di trattamento attivo.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCervicale.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function CervicalePage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStripCervicale />
      <ProblemaSection />
      <SoluzioneSection />
      <NonBastaSection />
      <FasiSection />
      <PercorsiSection />
      <CtaMidSection />
      <ChiSonoSection />
      <DoveSiamoSection />
      <FaqCervicaleSection />
      <FaqSection />
      <CtaFinaleSection />
    </div>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', paddingTop: '68px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-160px', right: '-160px',
          width: '680px', height: '680px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.09) 0%, transparent 70%)',
        }} />
      </div>

      <div
        style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad} 3.5rem`, position: 'relative' }}
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center"
      >
        <div>
          <FadeIn>
            <span style={{
              display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
            }}>
              Fisioterapista a Broni · Dolore cervicale e al braccio
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Mi hanno detto che ho un&apos;ernia cervicale.&rdquo;
              <br />
              <span style={{ color: C.primary }}>Ma nessuno mi ha spiegato perché il formicolio non passa.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un&apos;altra settimana con il collarino. Non un altro &ldquo;vedrai che passa&rdquo;. Una valutazione che parte da cosa non riesci più a fare, non dalla risonanza.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Molte persone notano i primi miglioramenti già nelle prime settimane di percorso attivo.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
              Rispondo di persona entro 24 ore — nessuna diagnosi prima di averti visitato
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} direction="right">
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute', inset: '-1.5rem',
              background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.18) 0%, transparent 70%)',
              borderRadius: '2.5rem', filter: 'blur(20px)',
            }} />
            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
              <Image
                src="/photos/f2-trattamento-a.jpg"
                alt="Umberto Mantovan durante un trattamento manuale in studio"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── PROOF STRIP ─────────────────── */
function ProofStripCervicale() {
  const items = [
    { icon: '83%', testo: 'migliora senza chirurgia entro 4-6 mesi' },
    { icon: '✓', testo: 'Prima visita gratuita' },
    { icon: '✓', testo: '5+ anni in ambito muscolo-scheletrico' },
  ]

  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
      }}>
        {items.map((item) => {
          const isStat = item.icon !== '✓'
          return (
            <div key={item.testo} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
            }}>
              <span style={{
                minWidth: isStat ? 'auto' : '22px', height: isStat ? 'auto' : '22px',
                padding: isStat ? '2px 10px' : 0,
                borderRadius: isStat ? '50px' : '50%', background: C.secondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isStat ? '0.85rem' : '0.72rem', fontWeight: 800, color: '#fff', flexShrink: 0,
              }}>
                {item.icon}
              </span>
              {item.testo}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─────────────────── PROBLEMA ─────────────────── */
function ProblemaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Ti riconosci in questo?
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.05rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.4 }}>
            &ldquo;Il formicolio mi sveglia di notte. Al lavoro, dopo un&apos;ora al PC, il braccio comincia a bruciare.&rdquo;
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '2rem' }}>
            È la descrizione che sento più spesso: un dolore che parte dal collo e scende verso spalla, braccio, a volte fino alle dita. Peggiora tenendo il volante, asciugandoti i capelli, dormendo su un fianco.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '1.25rem' }}>
            Hai già fatto una risonanza. C&apos;è scritta la parola &ldquo;ernia&rdquo;. E da quel momento ogni movimento del collo ti sembra un rischio — anche se nessuno ti ha ancora spiegato cosa significhi davvero quel referto.
          </p>
          <div style={{
            marginTop: '1.75rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Il referto ti dice cosa c&apos;è. Non ti dice cosa fare.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── SOLUZIONE ─────────────────── */
function SoluzioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Perché è diverso
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Vedere un&apos;ernia nel referto
              <br />
              <span style={{ color: C.primary }}>non significa dover operare.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem',
          }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>83%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                delle persone con un&apos;ernia cervicale <strong>migliora in modo significativo entro 4-6 mesi</strong>, anche senza chirurgia.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.secondary, lineHeight: 1 }}>57%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                delle persone <strong>senza alcun sintomo</strong> over 64 ha un&apos;ernia visibile in risonanza.
              </p>
              <p style={{ color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.4rem 0 0' }}>
                L&apos;immagine da sola non spiega il tuo dolore.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
            Nel mio studio non parto dalla risonanza.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Parto da te: dove senti il dolore, cosa lo scatena, cosa hai già provato — e ti spiego cosa significa davvero quello che hai letto nel referto.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            La radice nervosa irritata risponde bene al movimento guidato — non a stare fermi ad aspettare.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Non uso macchinari passivi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Uso anche la terapia manuale e tecniche specifiche per il nervo come strumenti per farti muovere prima e con meno fastidio — mai come unico trattamento.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <CtaButton mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COSA NON BASTA DA SOLO ─────────────────── */
function NonBastaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <FadeIn>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Cosa non basta da solo
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.35, maxWidth: '620px' }}>
              &ldquo;Se pensi che per il formicolio al braccio serva solo il collarino o aspettare che passi, ti hanno sempre consigliato male.&rdquo;
            </h2>

            <p style={{ marginTop: '1.5rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              Collarino, riposo prolungato, antinfiammatori: sono le risposte più comuni al dolore cervicale — e da sole sono anche le meno risolutive. Il riposo prolungato non è la soluzione: rallenta il recupero invece di favorirlo.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              La strada che funziona meglio è l&apos;esposizione graduale: tornare a muovere il collo e il braccio nei gesti di tutti i giorni — PC, guida, sonno — in modo progressivo e controllato.
            </p>

            <FadeIn delay={0.15}>
              <CtaButton mt="2rem" />
            </FadeIn>
          </FadeIn>

          <FadeIn delay={0.1} direction="right">
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.6rem', lineHeight: 1 }}>⚖️</div>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
                Il trattamento conservativo ha <strong>risultati a lungo termine comparabili alla chirurgia</strong> nella maggior parte dei casi.
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}66`, fontSize: '0.75rem', lineHeight: 1.6, margin: '0.75rem 0 0' }}>
                Dato di letteratura, non una garanzia individuale.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── LE 3 FASI ─────────────────── */
const fasi = [
  {
    num: '01',
    titolo: 'Capire cosa sta succedendo davvero',
    corpo: 'Un\'ernia nel referto non è ancora una diagnosi. Nella valutazione gratuita ascolto la tua storia, guardo cosa riesci e non riesci a fare, e ti spiego cosa significa — e cosa non significa — quello che hai letto nel referto.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Tornare a fidarti del movimento',
    corpo: 'Il collo e il braccio si riattivano muovendosi, non stando fermi. Uso anche tecniche specifiche per il nervo per ridurne l\'irritazione, insieme a esercizi scelti su misura e carico che aumenta in modo progressivo.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Riprendere la tua vita',
    corpo: 'L\'obiettivo non è solo meno dolore. È dormire senza svegliarti, guidare senza fastidio, tornare al lavoro senza pensarci. Frequenza che si riduce nel tempo, programma costruito sui tuoi obiettivi reali.',
    tag: 'Autonomia',
  },
]

function FasiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come lavoriamo insieme
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Il percorso in 3 fasi
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {fasi.map((fase) => (
            <StaggerItem key={fase.num}>
              <div style={{
                position: 'relative', background: C.white, borderRadius: C.radiusLg,
                padding: '2rem', height: '100%', overflow: 'hidden',
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
                  display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                  fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '4px 10px', borderRadius: '50px', marginBottom: '1rem',
                }}>
                  {fase.tag}
                </span>
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

/* ─────────────────── PERCORSO ─────────────────── */
function PercorsiSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Il percorso
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Non compri sedute.
              <br />
              <span style={{ color: C.primary }}>Entri in un percorso.</span>
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Le linee guida internazionali per il dolore cervicale parlano di settimane e mesi, non di un numero fisso di sedute.
            </p>
            <p style={{ marginTop: '0.75rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Per questo non trovi un pacchetto: trovi un percorso costruito sul tempo reale che la tua situazione richiede.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
            maxWidth: '820px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🔄</div>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem',
            }}>
              Dolore cervicale persistente
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.6rem' }}>
              Cervicalgia, cervicobrachialgia, formicolio al braccio
            </h3>
            <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '560px' }}>
              Pensato per chi convive con dolore al collo o al braccio da settimane o mesi — con o senza ernia visibile in risonanza.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '1.75rem' }}>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Primi risultati</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>già in 4-6 settimane</span>
              </div>
              <div style={{ background: C.surface, borderRadius: C.radiusSm, padding: '1rem 1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: `${C.text}66`, display: 'block', marginBottom: '0.25rem' }}>Frequenza tipica</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text }}>1-2×/settimana</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(26,158,201,0.06)', borderLeft: `4px solid ${C.primary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '1.1rem 1.4rem',
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: C.text, fontWeight: 600, lineHeight: 1.5, marginBottom: '0.4rem' }}>
                Tempistiche realistiche
              </p>
              <p style={{ margin: 0, fontSize: '0.86rem', color: `${C.text}99`, lineHeight: 1.7 }}>
                Con 1-2 sedute a settimana, molte persone notano i primi miglioramenti concreti già nelle prime 4-6 settimane — meno dolore, meno formicolio, più fiducia nel movimento. Il recupero completo richiede in genere più tempo, con la frequenza che scala verso il basso man mano che torni autonomo. Qualche fase di riacutizzazione è normale e non significa che il percorso non stia funzionando.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: 0, lineHeight: 1.7 }}>
              Se noti segnali diversi — debolezza che peggiora, difficoltà a camminare —
            </p>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginTop: '0.25rem', lineHeight: 1.7 }}>
              te lo dico subito in prima visita, che è gratuita, e ti indirizzo nel modo giusto.
            </p>
            <CtaButton center mt="1.25rem" />
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
      </div>
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Non devi decidere se operarti oggi.
            <br />
            Devi solo fare il primo passo.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
            Se ti sei riconosciuto in quello che hai letto, il primo passo è una chiacchierata —
            non un impegno.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary,
                fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none', letterSpacing: '0.01em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)', whiteSpace: 'nowrap',
              }}
            >
              Prenota la valutazione gratuita →
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            Senza impegno · Prima visita gratuita
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV · 📞{' '}
            <a href="tel:+393519242517" style={{ color: '#fff', textDecoration: 'underline' }}>351 924 2517</a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CHI SONO ─────────────────── */
function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '380px' }}>
              <div style={{ position: 'relative', aspectRatio: '1', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Sono Umberto Mantovan, fisioterapista.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Nel mio studio a Broni non uso tecar, laser o ultrasuoni: il collo e il braccio
              ritrovano mobilità muovendosi, con un percorso costruito insieme a te — mai un
              protocollo uguale per tutti.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Ogni seduta è 1:1, dedicata completamente a te. E prima di iniziare qualsiasi
              percorso, la prima visita è gratuita: serve a capire insieme se questa è davvero la
              strada giusta per te.
            </p>
            <CtaButton mt="1.75rem" />
            <Link
              href="/chi-sono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '1rem',
                fontSize: '0.9rem', fontWeight: 600, color: C.primary, textDecoration: 'none',
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

/* ─────────────────── DOVE SIAMO ─────────────────── */
function DoveSiamoSection() {
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
              Dove siamo
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Studio Mantovan · Broni (PV)
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <FadeIn direction="left">
            <div style={{
              borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              aspectRatio: '16/9', position: 'relative',
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

          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
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
                    background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                    padding: '12px 20px', borderRadius: '50px', textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                  }}
                >
                  Scrivimi su WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Via+Enzo+Togni+75,+Broni+PV"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.85rem', fontWeight: 600, color: C.primary, textDecoration: 'none',
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

/* ─────────────────── FAQ SPECIFICHE CERVICALE ─────────────────── */
function FaqCervicaleSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sul dolore cervicale
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqCervicale.map((f, i) => (
              <div key={i} style={{ background: C.white, borderRadius: C.radius, padding: '1.5rem' }}>
                <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.92rem' }}>{f.q}</p>
                <p style={{ marginTop: '0.5rem', color: `${C.text}88`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.5rem 0 0' }}>{f.a}</p>
              </div>
            ))}
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
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Il primo passo non è decidere se operarti.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: C.secondary, lineHeight: 1.3 }}>
            È capire cosa sta succedendo davvero.
          </p>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.8 }}>
            La prima visita è gratuita, senza impegno.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
                letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(26,158,201,0.3)', whiteSpace: 'nowrap',
              }}
            >
              Prenota la valutazione gratuita →
            </a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📍 Via Enzo Togni, 75, 27043 Broni PV
          </p>
          <p style={{ marginTop: '0.35rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            📞 351 924 2517 · ✉️ studio.mantovan@gmail.com
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
