import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Fisioterapia sportiva a Broni | Studio Mantovan',
  description:
    'Un infortunio sportivo non deve significare smettere di allenarti. Percorso graduato per tornare in campo più forte di prima. Prima visita gratuita: 351 924 2517.',
  keywords: [
    'fisioterapia sportiva Broni',
    'infortuni sportivi',
    'ritorno allo sport',
    'tendinopatia sportiva',
    'fisioterapista sportivo Oltrepò Pavese',
  ],
  alternates: {
    canonical: 'https://umbertomantovan.net/patologie/fisioterapia-sportiva',
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

const faqSportiva = [
  {
    q: 'Posso continuare ad allenarmi mentre recupero da un infortunio?',
    a: 'Spesso sì, in forma modificata. Fermarsi del tutto non è quasi mai necessario: nella valutazione capiamo insieme cosa puoi continuare a fare in sicurezza.',
  },
  {
    q: 'Quanto tempo ci vorrà per tornare a gareggiare?',
    a: 'Dipende dal tipo di infortunio e da come risponde il tuo corpo al carico — non lo so ancora prima di valutarti. Il percorso si costruisce sui tuoi progressi reali, non su un calendario fisso.',
  },
  {
    q: 'Ho paura di infortunarmi di nuovo appena torno ad allenarmi.',
    a: 'È una paura comune e giustificata. Il percorso include proprio questo: ricostruire la fiducia nel gesto sportivo con un carico progressivo e controllato, non un rientro improvviso.',
  },
  {
    q: 'Serve una diagnosi dello specialista sportivo prima di venire da te?',
    a: 'No. Puoi venire direttamente: valuto io la situazione e, se serve un consulto specialistico, te lo dico chiaramente.',
  },
]

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSportiva.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FisioterapiaSportivaPage() {
  return (
    <div style={{ background: C.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }} />
      <HeroSection />
      <ProofStripSportiva />
      <ProblemaSection />
      <SoluzioneSection />
      <NonBastaSection />
      <FasiSection />
      <PercorsiSection />
      <CtaMidSection />
      <ChiSonoSection />
      <DoveSiamoSection />
      <FaqSportivaSection />
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
              Fisioterapista a Broni · Fisioterapia sportiva
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.28, letterSpacing: '-0.02em', margin: 0,
            }}>
              &ldquo;Mi hanno detto di fermarmi del tutto.&rdquo;
              <br />
              <span style={{ color: C.primary }}>Ma fermarsi non è l&apos;unica strada per guarire.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              Non un altro riposo assoluto. Non un altro &ldquo;quando non senti più dolore puoi ripartire&rdquo;. Una valutazione che parte da cosa ti serve per tornare ad allenarti, non solo da cosa fa male.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '540px' }}>
              L&apos;obiettivo non è solo smettere di soffrire. È tornare in campo più forte di prima.
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
function ProofStripSportiva() {
  const items = [
    { icon: '✓', testo: 'Prima visita gratuita' },
    { icon: '✓', testo: '5+ anni in ambito muscolo-scheletrico' },
    { icon: '✓', testo: 'Approccio attivo, mai protocolli standard' },
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
            <span style={{
              width: '22px', height: '22px', borderRadius: '50%', background: C.secondary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.72rem', fontWeight: 800, color: '#fff', flexShrink: 0,
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
            &ldquo;Ho un infortunio da settimane. Ho paura che riprendere ad allenarmi peggiori le cose — ma stare fermo mi sta facendo perdere tutto quello che ho costruito.&rdquo;
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '2rem' }}>
            Per chi si allena o fa sport a livello agonistico o amatoriale, un infortunio non è solo un dolore — è un blocco. Salta la stagione, si perde la forma fisica costruita in mesi, cala la fiducia nel proprio corpo.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.9, fontSize: '1.02rem', marginTop: '1.25rem' }}>
            &ldquo;Riposo assoluto finché non senti più dolore&rdquo; è il consiglio più comune — e spesso il meno utile: durante l&apos;inattività perdi proprio la forza e la resistenza che ti servono per tornare in campo in sicurezza.
          </p>
          <div style={{
            marginTop: '1.75rem',
            background: 'rgba(26,158,201,0.06)',
            borderLeft: `4px solid ${C.primary}`,
            borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`,
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, color: C.text, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Fermarsi del tutto non ti prepara a ripartire. Ti prepara solo a fermarti.
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
              L&apos;obiettivo non è solo farti smettere di soffrire.
              <br />
              <span style={{ color: C.primary }}>È riportarti in campo, più forte di prima.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
            Per lo sportivo il dolore non è solo un disturbo: è un blocco che tocca allenamento, prestazione, identità.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Nel mio studio non parto dalla lista di movimenti da evitare.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Parto da: che sport pratichi, a che livello, quali gesti tecnici usi di più, cosa hai smesso di fare da quando ti sei infortunato.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '1.25rem' }}>
            Non uso macchinari passivi.
          </p>
          <p style={{ color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px', marginTop: '0.75rem' }}>
            Il corpo ritrova forza e fiducia muovendosi e caricandosi in modo progressivo — con esercizi scelti sul tuo sport specifico, non un protocollo generico.
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
              &ldquo;Se pensi che basti aspettare che il dolore sparisca per tornare ad allenarti come prima, rischi di infortunarti di nuovo.&rdquo;
            </h2>

            <p style={{ marginTop: '1.5rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              L&apos;assenza di dolore non significa che il tessuto abbia recuperato la capacità di reggere lo sforzo sportivo. Chi rientra di colpo, con la stessa intensità di prima, è tra i più a rischio di recidiva.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem', maxWidth: '620px' }}>
              La strada che funziona meglio è la progressione graduale del carico: tornare ad allenarti per gradi, aumentando intensità e volume solo quando il corpo dimostra di tollerarli — non secondo il calendario della stagione.
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
              <div style={{ fontSize: '2.6rem', lineHeight: 1 }}>🏃</div>
              <p style={{ marginTop: '0.75rem', color: `${C.text}99`, fontSize: '0.88rem', lineHeight: 1.7, margin: '0.75rem 0 0' }}>
                Il <strong>carico progressivo</strong> è il fattore più legato alla prevenzione delle recidive negli infortuni sportivi.
              </p>
              <p style={{ marginTop: '0.75rem', color: `${C.text}66`, fontSize: '0.75rem', lineHeight: 1.6, margin: '0.75rem 0 0' }}>
                Principio consolidato in letteratura, non una garanzia individuale.
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
    corpo: 'Nella valutazione gratuita capiamo insieme cosa hai, cosa può fare il tuo corpo oggi e cosa ti serve per tornare al tuo sport — non un protocollo generico, ma un piano costruito sul tuo gesto sportivo specifico.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Percorso attivo, carico progressivo',
    corpo: 'Esercizi scelti su misura, con un carico che aumenta gradualmente man mano che il tessuto dimostra di tollerarlo. Lavoriamo sui gesti tecnici del tuo sport, non solo su esercizi generici.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Ritorno allo sport',
    corpo: 'Non torni in campo appena il dolore sparisce: torni quando il tuo corpo ha davvero ricostruito la capacità di reggere lo sforzo — con la fiducia per allenarti senza il pensiero costante di infortunarti di nuovo.',
    tag: 'Ritorno allo sport',
  },
]

function FasiSection() {
  return (
    <section style={{ background: C.bg }}>
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
    <section style={{ background: C.surface }}>
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
              I tempi dipendono dal tipo di infortunio e dal tuo sport — non trovi un pacchetto standard, trovi un percorso costruito sul tuo obiettivo reale: tornare in campo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
            maxWidth: '820px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🏋️</div>
            <span style={{
              display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem',
            }}>
              Infortuni sportivi
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.6rem' }}>
              Distorsioni, lesioni muscolari, tendinopatie da sovraccarico
            </h3>
            <p style={{ fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '560px' }}>
              Pensato per chi si allena o fa sport, a livello agonistico o amatoriale, e vuole tornare all&apos;attività in sicurezza — non solo smettere di sentire dolore.
            </p>

            <div style={{
              background: 'rgba(26,158,201,0.06)', borderLeft: `4px solid ${C.primary}`,
              borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '1.1rem 1.4rem',
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: C.text, fontWeight: 600, lineHeight: 1.5, marginBottom: '0.4rem' }}>
                Tempistiche realistiche
              </p>
              <p style={{ margin: 0, fontSize: '0.86rem', color: `${C.text}99`, lineHeight: 1.7 }}>
                Dipendono dal tipo e dalla gravità dell&apos;infortunio, oltre che dal tuo sport. Quello che vale sempre: il ritorno all&apos;attività è un processo per gradi, non un interruttore che si accende quando il dolore sparisce. Qualche fase di adattamento al carico è normale e fa parte del percorso, non è un segnale che qualcosa non va.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginBottom: 0, lineHeight: 1.7 }}>
              Qualunque sia il tuo sport, il tuo livello o il tipo di infortunio —
            </p>
            <p style={{ fontSize: '0.95rem', color: `${C.text}88`, marginTop: '0.25rem', lineHeight: 1.7 }}>
              ne parliamo insieme in prima visita, che è gratuita.
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
            Non devi scegliere tra fermarti e rischiare di peggiorare.
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
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `5rem ${C.pad}` }} className="md:py-28">
        <div style={{ maxWidth: '680px' }}>
          <FadeIn>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Chi sono
            </span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Sono Umberto Mantovan, fisioterapista.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}99`, lineHeight: 1.8 }}>
              Nel mio studio a Broni non uso tecar, laser o ultrasuoni: il corpo ritrova forza e
              fiducia muovendosi, con un percorso costruito insieme a te — mai un protocollo
              uguale per tutti.
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

/* ─────────────────── FAQ SPECIFICHE SPORTIVA ─────────────────── */
function FaqSportivaSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: `4rem ${C.pad} 1rem` }}>
        <FadeIn>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
            Domande frequenti sulla fisioterapia sportiva
          </span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqSportiva.map((f, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: C.radius, padding: '1.5rem' }}>
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
            Non aspettare la fine della stagione
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: C.secondary, lineHeight: 1.3 }}>
            per capire come tornare in campo.
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
