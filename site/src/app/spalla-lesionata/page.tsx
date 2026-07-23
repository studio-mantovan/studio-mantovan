import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'

export const metadata: Metadata = {
  title: 'Spalla in Movimento',
  description:
    'Percorso riabilitativo di 6 settimane per il dolore alla spalla e alla cuffia dei rotatori. Visita fisioterapica gratuita: 351 924 2517.',
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

/* ─── CTA primaria ─── */
function CtaButton({ center = false, mt = '2rem', label = 'Prenota la visita fisioterapica gratuita →' }: { center?: boolean; mt?: string; label?: string }) {
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
        {label}
      </a>
    </div>
  )
}

export default function SpallaLesionataLandingPage() {
  return (
    <div style={{ background: C.bg }}>
      <MinimalTopBar />
      <HeroSection />
      <ProofStrip />
      <RiconosciSection />
      <ReframeSection />
      <ObiettiviSection />
      <MitiSection />
      <PercheSection />
      <ComeFunzionaSection />
      <PrezzoSection />
      <CasoRealeSection />
      <TestimonianzeSection />
      <CtaMidSection />
      <FaqSection />
      <CtaFinaleSection />
      <MinimalFooter />
    </div>
  )
}

/* ─────────────────── TOP BAR MINIMALE ─────────────────── */
function MinimalTopBar() {
  return (
    <div style={{ padding: '1.5rem var(--container-padding, 1.5rem) 0' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `0 ${C.pad}` }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: C.primary, letterSpacing: '-0.01em' }}>
          Studio Mantovan
        </div>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, color: `${C.text}66`, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Fisioterapia in Movimento · Broni (PV)
        </div>
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
        style={{ maxWidth: C.container, margin: '0 auto', padding: `2.5rem ${C.pad} 3.5rem`, position: 'relative' }}
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center"
      >
        <div>
          <FadeIn>
            <h1 style={{
              fontSize: 'clamp(2.1rem, 4.4vw, 3rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0,
            }}>
              Spalla <span style={{ color: C.primary }}>in Movimento</span>
            </h1>
            <p style={{ marginTop: '0.85rem', fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', fontWeight: 700, color: C.text, lineHeight: 1.4 }}>
              Il percorso riabilitativo di 6 settimane per tornare a muovere la tua spalla con meno dolore.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.02rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Se ti è stata diagnosticata una lesione della cuffia dei rotatori o di un tendine della spalla, non significa che l&apos;unica soluzione sia limitare i movimenti o operarsi.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.02rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Con Spalla in Movimento seguirai un programma riabilitativo attivo e personalizzato per aiutare la tua spalla a recuperare forza, tornare ad alzare il braccio con più facilità e ridurre il dolore nelle attività di tutti i giorni.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <CtaButton mt="2rem" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: `${C.text}66`, lineHeight: 1.6, maxWidth: '440px' }}>
              Ti rispondo personalmente entro 24 ore. Durante la visita valuto se Spalla in Movimento è il percorso più adatto alla tua situazione.
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
                src="/photos/f-spalla-davide.jpg"
                alt="Paziente che solleva un bilanciere sopra la testa senza dolore, dopo un percorso attivo in studio"
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
function ProofStrip() {
  const items = [
    { icon: '★★★★★', testo: '5 su Google · 31 recensioni' },
    { icon: '✓', testo: 'Visita fisioterapica gratuita' },
    { icon: '✓', testo: '5+ anni in ambito muscolo-scheletrico' },
  ]

  return (
    <div style={{ background: C.primary, borderTop: `3px solid ${C.secondary}` }}>
      <div style={{
        maxWidth: C.container, margin: '0 auto', padding: `1.1rem ${C.pad}`,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
      }}>
        {items.map((item) => (
          <div key={item.testo} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.88rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em',
          }}>
            <span style={{ color: '#FFD34D', fontSize: '0.85rem' }}>
              {item.icon}
            </span>
            {item.testo}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── TI RICONOSCI IN QUESTO? ─────────────────── */
const situazioni = [
  'Ti fa male alzare il braccio sopra la testa?',
  'Hai difficoltà a prendere un oggetto da uno scaffale, vestirti o infilare una maglietta?',
  'Dormire sul lato della spalla è diventato fastidioso?',
  'Hai già provato riposo, farmaci o infiltrazioni, ma il dolore continua a tornare?',
  'Hai una risonanza che parla di una lesione della cuffia dei rotatori e ora non sai quale sia il passo successivo?',
]

function RiconosciSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Ti riconosci in una di queste situazioni?
          </span>
        </FadeIn>

        <StaggerChildren className="flex flex-col" stagger={0.08}>
          <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {situazioni.map((s) => (
              <StaggerItem key={s}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: C.primary, fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0 }}>?</span>
                  <p style={{ margin: 0, color: C.text, fontSize: '1.02rem', lineHeight: 1.7, fontWeight: 500 }}>{s}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn delay={0.15}>
          <div style={{
            marginTop: '2rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.7 }}>
              Se ti riconosci anche solo in una di queste situazioni, continua a leggere.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── REFRAME — NON SIGNIFICA DOVER OPERARE ─────────────────── */
function ReframeSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Una lesione del tendine non significa automaticamente operarsi.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', maxWidth: '720px' }}>
            Quando sul referto compare la parola &ldquo;lesione&rdquo;, è normale pensare al peggio. In realtà, in molti casi il primo approccio consigliato è un percorso fisioterapico ben strutturato, basato su esercizio terapeutico e progressione del carico.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Il tendine è una struttura viva. Può adattarsi e migliorare la propria capacità attraverso un&apos;esposizione graduale ai carichi. Per questo una lesione o una modifica del tendine non significa necessariamente dover rinunciare alle attività che contano per te.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            marginTop: '2rem',
            background: C.white, borderRadius: C.radiusLg, padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.primary, lineHeight: 1 }}>39%</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                delle persone <strong>senza alcun dolore</strong> alla spalla ha una lesione della cuffia dei rotatori visibile in ecografia.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: C.secondary, lineHeight: 1 }}>2 su 3</div>
              <p style={{ marginTop: '0.6rem', color: `${C.text}99`, fontSize: '0.92rem', lineHeight: 1.7, margin: '0.6rem 0 0' }}>
                lesioni della cuffia dopo i 60 anni <strong>non danno nessun sintomo</strong>. Non sono automaticamente la causa del tuo dolore.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── OBIETTIVI ─────────────────── */
const obiettivi = [
  'Tornare ad alzare il braccio.',
  'Tornare a lavorare senza limitazioni.',
  'Tornare ad allenarti.',
  'Tornare a vivere la tua quotidianità con meno dolore e maggiore libertà di movimento.',
]

function ObiettiviSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3, marginBottom: '2rem' }}>
            L&apos;obiettivo di questo percorso è molto concreto.
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col" stagger={0.08}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {obiettivi.map((o) => (
              <StaggerItem key={o}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: C.secondary, fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0 }}>✔</span>
                  <p style={{ margin: 0, color: C.text, fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>{o}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <p style={{ marginTop: '2rem', color: `${C.text}77`, fontSize: '0.92rem', lineHeight: 1.8, maxWidth: '680px' }}>
            Il tempo da solo raramente ricostruisce la fiducia nel movimento: più a lungo eviti un gesto, più diventa &ldquo;pericoloso&rdquo; nella tua testa, anche se la spalla nel frattempo potrebbe tollerarlo bene. Prima capisci cosa puoi fare in sicurezza, prima ricominci a farlo davvero.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── MITI VS RICERCA ─────────────────── */
const miti = [
  {
    mito: 'Con un tendine lesionato devi solo aspettare.',
    verita: 'Il riposo assoluto raramente è la soluzione. Un tendine ha bisogno di essere caricato in modo graduale e progressivo.',
  },
  {
    mito: 'Se senti dolore significa che stai peggiorando la lesione.',
    verita: 'Il dolore non corrisponde sempre al reale stato del tessuto. Per questo è importante capire quali movimenti sono utili e quali vanno modificati temporaneamente.',
  },
  {
    mito: 'Conta solo quello che si vede nella risonanza.',
    verita: 'La risonanza è uno strumento utile, ma da sola non basta. La scelta del trattamento dipende anche dai sintomi, dalla visita fisioterapica e dagli obiettivi della persona.',
  },
  {
    mito: 'Bastano gli esercizi con gli elastici.',
    verita: 'Gli esercizi fanno la differenza quando sono scelti in base alla tua situazione e vengono adattati nel tempo.',
  },
]

function MitiSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Quello che ti hanno detto… e quello che dice la ricerca.
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="flex flex-col" stagger={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '820px', margin: '0 auto' }}>
            {miti.map((m) => (
              <StaggerItem key={m.mito}>
                <div style={{
                  background: C.white, borderRadius: C.radiusLg, padding: '1.75rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}>
                  <p style={{ margin: 0, color: '#B3413A', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.6 }}>
                    ❌ &ldquo;{m.mito}&rdquo;
                  </p>
                  <p style={{ margin: '0.75rem 0 0', color: C.text, fontSize: '0.95rem', lineHeight: 1.75 }}>
                    <span style={{ color: C.secondary, fontWeight: 700 }}>✅ </span>{m.verita}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── PERCHÉ HO CREATO SPALLA IN MOVIMENTO ─────────────────── */
function PercheSection() {
  return (
    <section style={{ background: C.surface, overflow: 'hidden' }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '340px' }}>
              <div style={{ position: 'relative', aspectRatio: '1', borderRadius: C.radiusLg, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista – Studio Mantovan Broni"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Perché ho creato Spalla in Movimento
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.3 }}>
              Non mancava la voglia di migliorare. Mancava un percorso.
            </h2>
            <p style={{ marginTop: '1.1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Negli anni ho visto molte persone arrivare in studio dopo mesi di dolore. Molti avevano già provato riposo, antinfiammatori, infiltrazioni o esercizi trovati su internet.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Un percorso con obiettivi chiari, esercizi personalizzati e momenti di verifica durante il trattamento. Per questo ho creato Spalla in Movimento: un programma di sei settimane pensato per capire come risponde la tua spalla al trattamento e ottenere i primi miglioramenti su cui costruire il resto del recupero.
            </p>
            <p style={{ marginTop: '1rem', color: C.text, fontWeight: 600, lineHeight: 1.8 }}>
              L&apos;obiettivo non è promettere una guarigione completa in sei settimane. L&apos;obiettivo è farti tornare ad usare la spalla, per dimostrarti che puoi tornare alle tue attività preferite.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COME FUNZIONA ─────────────────── */
function ComeFunzionaSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Come funziona Spalla in Movimento?
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '820px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: `3px solid ${C.secondary}` }}>
              <span style={{
                display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                padding: '4px 10px', borderRadius: '50px', marginBottom: '0.9rem',
              }}>
                Step 1
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: '0.6rem' }}>
                Visita fisioterapica gratuita
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.8, margin: 0 }}>
                Valuto la tua spalla, la tua storia clinica e gli eventuali esami che hai già eseguito. Al termine della visita ti dirò con sincerità se Spalla in Movimento è il percorso più adatto al tuo caso. Se ritengo che non sia la scelta migliore, te lo dirò chiaramente.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: `3px solid ${C.secondary}` }}>
              <span style={{
                display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                padding: '4px 10px', borderRadius: '50px', marginBottom: '0.9rem',
              }}>
                Step 2
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: '0.6rem' }}>
                Il percorso di 6 settimane
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.8, margin: 0 }}>
                Seguirai un programma riabilitativo costruito sulle tue capacità, sui tuoi obiettivi e sulla risposta della tua spalla agli esercizi. Ogni seduta viene adattata in base ai tuoi progressi. L&apos;obiettivo delle prime settimane è aiutare la spalla a tollerare sempre meglio il movimento e il carico.
              </p>
              <div style={{
                marginTop: '1.25rem',
                background: 'rgba(26,158,201,0.06)', borderLeft: `4px solid ${C.primary}`,
                borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '1.1rem 1.4rem',
              }}>
                <p style={{ margin: 0, fontSize: '0.86rem', color: C.text, fontWeight: 700, lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  ✔ Check dopo la terza seduta
                </p>
                <p style={{ margin: 0, fontSize: '0.86rem', color: `${C.text}99`, lineHeight: 1.75 }}>
                  Dopo le prime tre sedute rivaluto dolore, movimento e funzionalità della spalla. Non continuo il percorso semplicemente perché è iniziato. Voglio verificare che la tua spalla stia rispondendo come previsto. Se i miglioramenti sono quelli attesi, proseguiamo. Se invece la risposta non è quella che mi aspetto, ne parliamo insieme e rivalutiamo la strategia. Preferisco essere trasparente piuttosto che farti proseguire un trattamento senza un reale razionale clinico.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div style={{ background: C.white, borderRadius: C.radiusLg, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: `3px solid ${C.secondary}` }}>
              <span style={{
                display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                padding: '4px 10px', borderRadius: '50px', marginBottom: '0.9rem',
              }}>
                Step 3
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: '0.6rem' }}>
                Rivalutazione finale
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.8, margin: 0 }}>
                Al termine delle sei settimane confronto la tua situazione con quella di partenza. Valuto i cambiamenti nel dolore, nella mobilità, nella forza e nella funzionalità della spalla. Per alcune persone questo sarà sufficiente per tornare alle attività desiderate. Per altre rappresenterà il primo passo di un recupero più lungo. In entrambi i casi saprai con chiarezza quali risultati hai ottenuto e quali saranno i passi successivi.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── QUANTO COSTA ─────────────────── */
function PrezzoSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
              Quanto costa?
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '1.5rem 2rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)', maxWidth: '820px', margin: '0 auto 1.25rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem',
          }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, color: C.text, fontSize: '0.98rem' }}>Visita fisioterapica</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: `${C.text}77` }}>
                Serve a capire se Spalla in Movimento è il percorso più adatto alla tua situazione.
              </p>
            </div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: C.secondary, whiteSpace: 'nowrap' }}>Gratuita</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: `1px solid ${C.primary}22`,
            maxWidth: '820px', margin: '0 auto',
          }}>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '1rem',
            }}>
              Spalla in Movimento
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: C.text }}>
                Percorso riabilitativo di 6 settimane
              </h3>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: C.primary }}>240€</span>
            </div>
            <p style={{ margin: '0 0 1.5rem', fontSize: '0.85rem', color: `${C.text}77` }}>
              1 seduta a settimana, per 6 settimane — 40€ a seduta.
            </p>

            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.5rem' }}>
              {[
                'Visita fisioterapica gratuita',
                'Programma riabilitativo personalizzato',
                'Progressione degli esercizi durante tutto il percorso',
                'Check clinico dopo la terza seduta',
                'Rivalutazione finale',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: C.text, lineHeight: 1.6 }}>
                  <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ margin: 0, fontSize: '0.8rem', color: `${C.text}66` }}>
              Nessun costo nascosto.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <CtaButton center mt="2.5rem" />
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── CASO REALE — ROMULUS ─────────────────── */
function CasoRealeSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">
          <FadeIn direction="left">
            <div style={{ position: 'relative', maxWidth: '420px' }}>
              <div style={{
                position: 'absolute', inset: '-1.5rem',
                background: 'radial-gradient(ellipse at center, rgba(93,191,176,0.12) 0%, transparent 70%)',
                borderRadius: '3rem', filter: 'blur(20px)',
              }} />
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '1rem',
                boxShadow: '0 16px 48px rgba(0,0,0,0.1)', position: 'relative',
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1079/565', borderRadius: C.radiusSm, overflow: 'hidden' }}>
                  <Image
                    src="/photos/testimonianza-romulus-google.png"
                    alt="Recensione Google di Romulus Halangescu su Studio Mantovan"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Caso reale
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Romulus, 50 anni
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.85 }}>
              Romulus è arrivato in studio dopo un problema serio a un tendine della spalla.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.85 }}>
              Il percorso è stato costruito seduta dopo seduta, con attenzione specifica alla sua situazione.
            </p>
            <p style={{ marginTop: '1rem', color: C.text, fontWeight: 600, lineHeight: 1.85 }}>
              Oggi Romulus è tornato a muovere la spalla normalmente — questa è la sua recensione, pubblicata su Google.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}99`, lineHeight: 1.85 }}>
              Romulus non è un caso isolato: è uno dei tanti pazienti che hanno seguito questo percorso attivo. Qui sotto trovi altre recensioni reali. E non è solo la mia esperienza clinica a dirlo: il carico progressivo come trattamento centrale per la spalla è anche quello che indica la ricerca scientifica su questo tipo di dolore.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COSA DICONO I MIEI PAZIENTI ─────────────────── */
const recensioni = [
  { file: 'testimonianza-antonio-ferrari-google.png', alt: 'Recensione Google di Antonio Ferrari su Studio Mantovan' },
  { file: 'testimonianza-giacomo-maini-google.png', alt: 'Recensione Google di Giacomo Maini su Studio Mantovan' },
  { file: 'testimonianza-letizia-casella-google.png', alt: 'Recensione Google di Letizia Casella su Studio Mantovan' },
  { file: 'testimonianza-bianca-ciocca-google.png', alt: 'Recensione Google di Bianca Ciocca su Studio Mantovan' },
  { file: 'testimonianza-roby-mada-google.png', alt: 'Recensione Google di Roby Mada su Studio Mantovan' },
  { file: 'testimonianza-manuela-ascagni-google.png', alt: 'Recensione Google di Manuela Ascagni su Studio Mantovan' },
  { file: 'testimonianza-carlotta-polatti-google.png', alt: 'Recensione Google di Carlotta Polatti su Studio Mantovan' },
  { file: 'testimonianza-simona-prun-google.png', alt: 'Recensione Google di Simona Prun su Studio Mantovan' },
]

function TestimonianzeSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: C.text }}>
              Cosa dicono i miei pazienti
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recensioni.map((r, i) => (
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
                    sizes="(max-width: 768px) 100vw, 520px"
                    loading={i === 0 ? undefined : 'lazy'}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
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
      </div>
      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}`, textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Devi solo fare il primo passo.
          </h2>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
            Ogni settimana che passa senza un piano chiaro è una settimana in cui continui ad adattare la tua vita al dolore. Inizia oggi da una visita fisioterapica gratuita e scopri se Spalla in Movimento è il percorso giusto per te.
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
              Prenota la visita fisioterapica gratuita →
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            Senza impegno · Visita gratuita
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── FAQ ─────────────────── */
const faq = [
  {
    q: 'Se il tendine è lesionato, gli esercizi possono peggiorarlo?',
    a: 'Quando gli esercizi vengono scelti e dosati correttamente rappresentano uno dei principali strumenti della riabilitazione. L\'obiettivo è aumentare gradualmente la capacità del tendine di tollerare il carico, rispettando la sua risposta.',
  },
  {
    q: 'Devo avere una risonanza magnetica per iniziare?',
    a: 'No. Valuto i tuoi sintomi, il movimento della spalla e gli eventuali esami che hai già eseguito. Se saranno necessari ulteriori accertamenti, te lo spiegherò.',
  },
  {
    q: 'Dopo sei settimane sarò guarito?',
    a: 'Dipende dalla tua situazione di partenza. Se il dolore è presente da molti mesi o la lesione è più complessa, sei settimane potrebbero non essere sufficienti per un recupero completo. Per questo Spalla in Movimento è pensato per ottenere i primi miglioramenti, capire come risponde la tua spalla e decidere con maggiore consapevolezza i passi successivi.',
  },
  {
    q: 'E se durante il percorso non noto miglioramenti?',
    a: 'Per questo motivo è prevista una rivalutazione dopo la terza seduta. Non aspetto la fine delle sei settimane per capire se il trattamento sta funzionando. Se la tua spalla non sta rispondendo come previsto, rivaluto la situazione e ti spiego quale ritengo sia il percorso più appropriato.',
  },
]

function FaqSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad}` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f) => (
              <div key={f.q} style={{ background: C.white, borderRadius: C.radius, padding: '1.5rem' }}>
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
            È il momento di capire se questo percorso fa per te.
          </h2>
          <p style={{ marginTop: '1rem', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: C.secondary, lineHeight: 1.4 }}>
            Prenota la tua visita fisioterapica gratuita.
          </p>
          <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            In circa 45 minuti valuterò la tua spalla e capiremo insieme:
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'left', maxWidth: '480px', margin: '1.25rem auto 0' }}>
            {[
              'se il problema è compatibile con una lesione della cuffia dei rotatori;',
              'se Spalla in Movimento è il percorso più indicato per te;',
              'quali risultati possiamo realisticamente aspettarci nelle prime sei settimane.',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <span style={{ color: C.secondary, fontWeight: 800, flexShrink: 0 }}>✔</span>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
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
              Prenota ora la visita gratuita →
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
