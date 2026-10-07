import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'
import { Dumbbell, Stethoscope, Activity, Snowflake, RotateCcw, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dolore alla Spalla e Cuffia dei Rotatori a Broni | Studio Mantovan',
  description:
    'Un referto con "lesione della cuffia" o un\'infiltrazione che non ha risolto il problema? Percorso di fisioterapia attiva 1 a 1 a Broni (PV). Prima visita fisioterapica gratuita: 351 924 2517.',
  keywords: [
    'dolore spalla Broni',
    'fisioterapista spalla Broni',
    'cuffia dei rotatori',
    'lesione cuffia rotatori',
    'RCRSP',
    'fisioterapia spalla Oltrepò Pavese',
    'spalla congelata',
    'capsulite adesiva',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/spalla',
  },
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
const GOOGLE_REVIEWS_URL = 'https://share.google/Z9RQOLbXwiA9FFpQp'
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.123456789!2d9.259!3d45.062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787c3c3c3c3c3c3%3A0x0!2sVia+Enzo+Togni+75%2C+27043+Broni+PV!5e0!3m2!1sit!2sit!4v1234567890'

const faqSpalla = [
  {
    q: 'Ho una lesione alla cuffia dei rotatori alla risonanza: devo operarmi?',
    a: 'Non necessariamente: fino al 39% delle persone senza alcun dolore ha una lesione della cuffia visibile in imaging. Ne parliamo nella tua valutazione, guardando il quadro clinico completo, non solo il referto.',
  },
  {
    q: 'Il cortisone mi ha aiutato per un po’, poi il dolore è tornato: cosa faccio adesso?',
    a: 'È un pattern comune: le infiltrazioni danno spesso un beneficio modesto e temporaneo. Il passo successivo utile è un percorso di carico progressivo che lavori sulla causa del sovraccarico, non solo sul sintomo.',
  },
  {
    q: 'Ho paura che muovere la spalla peggiori la situazione.',
    a: 'Nella maggior parte dei casi è il contrario: il movimento guidato e progressivo è il trattamento centrale, non il rischio. Ne parliamo con calma nella tua valutazione gratuita.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSpalla.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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

export default function SpallaPage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStrip />
      <MetodoSection />
      <AreeClinicheSection />
      <ConfrontoSection />
      <ValutazioneSection />
      <WallOfLoveSection />
      <ChiSonoSection />
      <DoveTrovarmiSection />
      <FaqSpallaSection />
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
        className="grid grid-cols-1"
      >
        <div style={{ maxWidth: '680px' }}>
          <FadeIn>
            <span style={{
              display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
            }}>
              Fisioterapista a Broni · Spalla e cuffia dei rotatori
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Nel referto hanno scritto &lsquo;lesione della cuffia dei rotatori&rsquo;.&rdquo;
              <br />
              <span style={{ color: C.primary }}>Ma nessuno mi ha spiegato se devo davvero operarmi.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un&apos;altra infiltrazione che allevia il dolore per qualche settimana. Non un altro &ldquo;evita di muoverla&rdquo;. Una valutazione che parte dal tuo quadro clinico completo, non solo dal referto.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Molte lesioni della cuffia viste in risonanza non causano alcun dolore: vanno sempre lette insieme ai tuoi movimenti, alla tua storia e a cosa oggi non riesci più a fare.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
              Rispondo di persona entro 24 ore — nessuna diagnosi prima di averti visitato
            </p>
          </FadeIn>
        </div>
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
          34 recensioni Google a 5 stelle
        </a>
        {[
          '5+ anni di trattamenti di spalla in ambulatorio',
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

/* ─────────────────── IL METODO — FISIOTERAPIA IN MOVIMENTO ─────────────────── */
const metodo = [
  {
    Icon: Dumbbell,
    foto: 'f-spalla-davide.jpg',
    alt: 'Paziente che solleva un bilanciere sopra la testa, guidato da Umberto Mantovan',
    titolo: 'Esercizio terapeutico specifico',
    testo: 'Il centro del percorso. Movimenti ed esercizi scelti sulla tua spalla e sulla tua condizione, non un protocollo standard: il carico e la difficoltà aumentano passo dopo passo, insieme a te.',
  },
  {
    Icon: Stethoscope,
    foto: 'f10-valutazione-manuale-spalla.jpg',
    alt: 'Umberto Mantovan esegue una mobilizzazione manuale della spalla su una paziente in studio',
    titolo: 'Terapia manuale',
    testo: 'Un supporto nei momenti in cui può aiutarti a muoverti meglio, non il trattamento principale. Non voglio che tu debba dipendere dal lettino o dalle sedute per stare meglio.',
  },
]

function MetodoSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '720px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Il metodo
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              Torni a muovere la spalla con la Fisioterapia in Movimento
            </h2>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, fontSize: '1rem', lineHeight: 1.8 }}>
              Fisioterapia in Movimento non è altro che una combinazione di esercizio terapeutico specifico per la tua condizione e, quando utile, terapia manuale. Lo facciamo insieme, in studio, 1 a 1.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {metodo.map(({ Icon, foto, alt, titolo, testo }, i) => (
            <FadeIn key={titolo} delay={i * 0.08}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                  <Image
                    src={`/photos/${foto}`}
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div style={{ padding: '1.5rem 1.75rem 1.75rem', borderTop: `3px solid ${C.secondary}` }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'rgba(26,158,201,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem',
                  }}>
                    <Icon size={19} color={C.primary} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: C.text, marginBottom: '0.6rem' }}>{titolo}</h3>
                  <p style={{ fontSize: '0.94rem', color: `${C.text}99`, lineHeight: 1.8, margin: 0 }}>{testo}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PER CHI È PENSATO ─────────────────── */
const areeCliniche = [
  { Icon: Activity, label: 'Tendinopatia o lesione della cuffia dei rotatori, quando è indicato un percorso conservativo.' },
  { Icon: Snowflake, label: 'Spalla congelata (capsulite adesiva), per gestire il dolore e recuperare progressivamente la mobilità.' },
  { Icon: RotateCcw, label: 'Instabilità della spalla, anche in chi pratica sport o ha avuto episodi ricorrenti.' },
  { Icon: Stethoscope, label: 'Recupero dopo un intervento chirurgico, seguendo personalmente il percorso riabilitativo.' },
  { Icon: Clock, label: 'Dolore persistente alla spalla, anche quando hai già provato altri trattamenti senza ottenere il risultato che cercavi.' },
]

function AreeClinicheSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <h2 style={{
            textAlign: 'center', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800,
            color: C.text, lineHeight: 1.3, margin: '0 auto 2rem', maxWidth: '620px',
          }}>
            Posso aiutarti se il problema della tua spalla è...
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col" stagger={0.08}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {areeCliniche.map(({ Icon, label }) => (
              <StaggerItem key={label}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.9rem',
                  background: C.white, borderRadius: C.radius, padding: '1.1rem 1.3rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(26,158,201,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={18} color={C.primary} strokeWidth={2} />
                  </div>
                  <p style={{ margin: 0, color: C.text, fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 600 }}>{label}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <p style={{ marginTop: '2rem', textAlign: 'center', color: `${C.text}88`, fontSize: '0.95rem', lineHeight: 1.7 }}>
            Non significa che esista un percorso uguale per tutti.
            <br />
            Prima ti valuto. Poi decidiamo insieme da dove partire.
          </p>
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
    <section style={{ background: C.surface }}>
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

/* ─────────────────── A COSA SERVE LA VALUTAZIONE ─────────────────── */
const valutazioneSteps = [
  'mi racconti cosa è successo e cosa oggi ti limita;',
  'valutiamo insieme i movimenti e la funzione della spalla;',
  'eseguo i test clinici più indicati per la tua situazione;',
  'guardiamo insieme eventuali esami che hai già fatto;',
  'ti spiego quello che emerge in modo semplice e comprensibile;',
  'definiamo un possibile percorso, con frequenza e obiettivi realistici.',
]

function ValutazioneSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto', aspectRatio: '3/4', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
              <Image
                src="/photos/f11-esercizio-guidato-spalla.jpg"
                alt="Umberto Mantovan guida il movimento di sollevamento del braccio di una paziente durante una valutazione"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </FadeIn>

          <div style={{ maxWidth: '560px' }}>
            <FadeIn>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
                A cosa serve la tua valutazione fisioterapica gratuita?
              </h2>
              <p style={{ marginTop: '1.1rem', color: `${C.text}99`, fontSize: '1rem', lineHeight: 1.8 }}>
                La prima valutazione serve a conoscerci, capire il problema della tua spalla e valutare se posso aiutarti. Durante l&apos;incontro:
              </p>
            </FadeIn>

            <StaggerChildren className="flex flex-col" stagger={0.06}>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {valutazioneSteps.map((s) => (
                  <StaggerItem key={s}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span style={{ color: C.secondary, fontWeight: 800, fontSize: '1rem', lineHeight: 1.6, flexShrink: 0 }}>✔</span>
                      <p style={{ margin: 0, color: C.text, fontSize: '0.98rem', lineHeight: 1.65 }}>{s}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>

            <FadeIn delay={0.2}>
              <p style={{ marginTop: '1.5rem', color: `${C.text}88`, fontSize: '0.95rem', lineHeight: 1.7 }}>
                Non ti propongo un pacchetto di sedute deciso prima di averti visto.
                <br />
                Prima capiamo il problema. Poi, se ha senso lavorare insieme, decidiamo come farlo.
              </p>
              <CtaButton mt="1.5rem" />
            </FadeIn>
          </div>
        </div>
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

const esperienza = [
  'Oltre 5 anni di esperienza clinica in ambito muscoloscheletrico.',
  'Laurea in Fisioterapia presso l’Università degli Studi di Pavia.',
  'Formazione in Terapia Manuale Ortopedica e Fisioterapia Sportiva.',
  'Esperienza con dolore muscoloscheletrico, riabilitazione post-chirurgica e recupero dopo infortunio.',
  '34 recensioni Google a 5 stelle.',
]

function ChiSonoSection() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
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
              Dalla prima valutazione al recupero, ci sono sempre io
            </span>
            <p style={{ marginTop: '0.9rem', color: C.text, fontSize: '1.08rem', fontWeight: 600, lineHeight: 1.7 }}>
              Sono Umberto Mantovan, fisioterapista e titolare dello Studio Mantovan – Fisioterapia in Movimento a Broni.
            </p>
            <p style={{ marginTop: '0.9rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Ho scelto di lavorare in uno studio professionale indipendente perché voglio poter seguire personalmente ogni persona che entra dalla mia porta. Non vieni valutato da una persona e trattato da un&apos;altra.
            </p>
            <p style={{ marginTop: '0.9rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              La tua storia, i tuoi obiettivi e i tuoi progressi rimangono al centro del percorso.
            </p>

            <h3 style={{ marginTop: '1.75rem', fontSize: '1rem', fontWeight: 700, color: C.text }}>La mia esperienza</h3>
            <ul style={{ margin: '0.75rem 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {esperienza.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: `${C.text}99`, lineHeight: 1.6 }}>
                  <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                  {item}
                </li>
              ))}
            </ul>

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

/* ─────────────────── DOVE TROVARMI ─────────────────── */
function DoveTrovarmiSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Dove trovarmi
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text, marginTop: '0.6rem' }}>
              Studio Mantovan – Fisioterapia in Movimento
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <FadeIn direction="left">
            <div style={{ borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', aspectRatio: '4/3', position: 'relative' }}>
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%" height="100%"
                style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Mantovan – Via Enzo Togni, 75, Broni PV"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.08}>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '1rem' }}>
                Studio Mantovan – Fisioterapia in Movimento
              </p>
              <p style={{ marginTop: '0.4rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7 }}>
                Via Enzo Togni, 75, 27043 Broni PV
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.92rem' }}>
                📞 <a href={`tel:${TEL}`} style={{ color: C.text, textDecoration: 'none', fontWeight: 600 }}>{TEL_DISPLAY}</a>
              </p>
              <p style={{ marginTop: '0.4rem', color: `${C.text}99`, fontSize: '0.92rem' }}>
                ✉️ <a href="mailto:studio.mantovan@gmail.com" style={{ color: C.text, textDecoration: 'none', fontWeight: 600 }}>studio.mantovan@gmail.com</a>
              </p>

              <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', marginTop: '1.1rem' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '6px 0', borderBottom: `1px solid ${C.surface}`, color: C.text, fontWeight: 600 }}>Lun · Mer · Gio</td>
                    <td style={{ padding: '6px 0', borderBottom: `1px solid ${C.surface}`, textAlign: 'right', color: `${C.text}88` }}>08:00–20:00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 0', borderBottom: `1px solid ${C.surface}`, color: C.text, fontWeight: 600 }}>Sabato</td>
                    <td style={{ padding: '6px 0', borderBottom: `1px solid ${C.surface}`, textAlign: 'right', color: `${C.text}88` }}>14:00–19:00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 0', color: C.text, fontWeight: 600 }}>Mar · Ven · Dom</td>
                    <td style={{ padding: '6px 0', textAlign: 'right', color: `${C.text}88` }}>Chiuso</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="/prenota"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    background: C.primary, color: '#fff', width: '100%',
                    fontWeight: 700, fontSize: '0.92rem',
                    padding: '12px 20px', borderRadius: '50px',
                    textDecoration: 'none', letterSpacing: '0.01em',
                    boxShadow: '0 4px 16px rgba(26,158,201,0.25)',
                  }}
                >
                  Richiedi la tua valutazione gratuita →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FAQ SPECIFICHE SPALLA ─────────────────── */
function FaqSpallaSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sulla spalla
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqSpalla.map((f, i) => (
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
      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', padding: `4.5rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Prenota la tua visita gratuita.
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            In circa 60 minuti valuto la tua spalla e ti dico con sincerità se e come posso aiutarti.
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
