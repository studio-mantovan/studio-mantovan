import type { Metadata } from 'next'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Percorsi e tariffe',
  description:
    'Niente pacchetti da 10 sedute: percorsi di fisioterapia costruiti sul tempo che la tua condizione richiede. Prima visita gratuita.',
}

const C = {
  primary:   '#1A9EC9',
  primaryDark: '#147FA0',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radius:    '16px',
  radiusSm:  '8px',
  radiusLg:  '24px',
  container: '1100px',
  pad:       '1.5rem',
}

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
        Prenota la prima visita gratuita →
      </a>
    </div>
  )
}

const percorsi = [
  {
    icon: '🧠',
    tag: 'Dolore persistente · Condizione persistente',
    titolo: 'Dolore persistente',
    corpo: 'Lombalgia cronica, cervicalgia, sciatalgia e cervico-brachialgia.',
    durata: '3–6 mesi',
    frequenza: 'Bassa frequenza settimanale',
    bonus: 'Completando il percorso: 1 seduta di rivalutazione gratuita ogni 3 mesi di trattamento',
    bonusColore: C.secondary,
  },
  {
    icon: '⚡',
    tag: 'Infortunio · Fase acuta',
    titolo: 'Infortunio',
    corpo: 'Distorsioni, lesioni muscolari, tendiniti.',
    durata: '2–8 settimane',
    frequenza: 'Media frequenza settimanale',
    bonus: 'Completando il percorso: valutazione "return to activity" gratuita a 30 giorni dal termine',
    bonusColore: C.primary,
  },
  {
    icon: '🏥',
    tag: 'Post-operatorio · Riabilitazione chirurgica',
    titolo: 'Post-operatorio',
    corpo: 'Protesi, artroscopia, schiena o spalla.',
    durata: '2–6 mesi',
    frequenza: 'Alta frequenza all\'inizio del percorso, poi decrescente',
    bonus: 'Completando il percorso: check-up gratuito entro 6 mesi dal termine',
    bonusColore: C.secondary,
  },
]

export default function PercorsiPage() {
  return (
    <div style={{ background: C.bg }}>
      <HeroSection />
      <FilosofiaSection />
      <ComeSiDecideSection />
      <TariffaSection />
      <PagamentoSection />
      <CategorieSection />
      <FaqSection />
    </div>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '68px' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-120px', right: '-140px',
          width: '560px', height: '560px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,158,201,0.08) 0%, transparent 70%)',
        }} />
      </div>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad} 3.5rem`, position: 'relative' }}>
        <FadeIn>
          <span style={{
            display: 'inline-block',
            background: 'rgba(26,158,201,0.1)', color: C.primary,
            fontSize: '0.7rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
          }}>
            Percorsi e tariffe
          </span>
          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.1rem)', fontWeight: 800,
            color: C.text, lineHeight: 1.18, letterSpacing: '-0.02em',
            maxWidth: '720px', margin: 0,
          }}>
            Non compri sedute.<br />
            <span style={{ color: C.primary }}>Entri in un percorso.</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '620px' }}>
            Le linee guida internazionali per i disturbi muscolo-scheletrici parlano di settimane
            e mesi — mai di un numero fisso di appuntamenti. Per questo qui non trovi pacchetti:
            trovi percorsi costruiti sul tempo reale che la tua condizione richiede.
          </p>
          <CtaButton mt="2rem" />
          <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}55` }}>
            Rispondo di persona entro 24 ore · Nessun impegno
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── FILOSOFIA ─────────────────── */
function FilosofiaSection() {
  const motivi = [
    { icon: '📜', testo: 'Convenzione storica — nasce dai rimborsi SSN e assicurativi, non dalla clinica' },
    { icon: '💬', testo: '"10 sedute" è semplice da dire e da vendere, ma non da nessuna parte nella letteratura scientifica' },
    { icon: '🤝', testo: 'Le persone si aspettano un numero finito — ma il recupero reale non funziona a numero fisso' },
  ]

  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeIn direction="left">
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Perché non trovi pacchetti
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Le linee guida non parlano mai di numero di sedute.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Parlano di tempistiche, frequenza consigliata e progressione per fasi. Proporre
              10 sedute a prescindere dalla tua condizione non ha nessun senso clinico — eppure
              è il modello più diffuso. Perché?
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {motivi.map((m, i) => (
                <div key={i} style={{
                  background: C.white, borderRadius: C.radiusLg,
                  padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{m.icon}</span>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: C.text, lineHeight: 1.7 }}>{m.testo}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CATEGORIE ─────────────────── */
function CategorieSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Per chi è adatto
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Le condizioni che meglio si adattano a questo tipo di percorso.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Durata e frequenza indicative — quelle reali emergono dalla valutazione iniziale. La frequenza esatta la definiamo insieme dopo la prima visita.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {percorsi.map((p, i) => (
            <StaggerItem key={i}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                height: '100%', display: 'flex', flexDirection: 'column',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <span style={{
                  display: 'inline-block', background: 'rgba(93,191,176,0.12)', color: C.secondary,
                  fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                  padding: '3px 10px', borderRadius: '50px', marginBottom: '0.75rem', alignSelf: 'flex-start',
                }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: '0.5rem' }}>
                  {p.titolo}
                </h3>
                <p style={{ fontSize: '0.85rem', color: `${C.text}77`, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {p.corpo}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: `${C.text}55` }}>Durata indicativa: </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: C.text }}>{p.durata}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: `${C.text}55` }}>Frequenza tipica: </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: C.text }}>{p.frequenza}</span>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(93,191,176,0.08)', borderLeft: `3px solid ${p.bonusColore}`,
                  borderRadius: `0 ${C.radiusSm} ${C.radiusSm} 0`, padding: '0.75rem 1rem', marginTop: 'auto',
                }}>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: C.text, fontWeight: 600, lineHeight: 1.5 }}>
                    🎁 {p.bonus}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────── TARIFFA ─────────────────── */
function TariffaSection() {
  return (
    <section style={{ background: C.surface }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
          <FadeIn direction="left">
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Tariffa
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              Una tariffa che si riduce scegliendo un percorso più lungo.
            </h2>
            <p style={{ marginTop: '1.25rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Il costo medio per seduta scende in base al percorso che scegli insieme a me in prima
              visita — più lungo è il percorso concordato, più conviene.
            </p>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.85, fontSize: '1rem' }}>
              Il prezzo esatto del tuo percorso te lo presento sempre in studio, dopo la valutazione
              iniziale — perché dipende dalla frequenza e dalla durata che la tua condizione richiede
              davvero, non da un listino uguale per tutti.
            </p>
            <div style={{
              marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {[
                { icon: '📅', testo: 'Pagamento mensile anticipato, nessun vincolo contrattuale' },
                { icon: '🔄', testo: 'Rivalutazioni mensili: al termine di ogni mese valutiamo insieme i progressi e aggiustiamo la frequenza' },
                { icon: '🚪', testo: 'Puoi interrompere il percorso in qualsiasi momento, senza penali' },
              ].map((n, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{n.icon}</span>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: `${C.text}99`, lineHeight: 1.7 }}>{n.testo}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)', textAlign: 'center',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: `${C.text}55` }}>
                Tariffa
              </span>
              <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', fontWeight: 700, color: C.text, lineHeight: 1.5 }}>
                Il costo medio scende con i percorsi più lunghi
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: `${C.text}77`, lineHeight: 1.6 }}>
                Te lo presento in studio, dopo la valutazione iniziale
              </p>
              <div style={{ height: '1px', background: C.surface, margin: '1.5rem 0' }} />
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: C.text, marginBottom: '0.5rem' }}>
                Prima visita gratuita
              </p>
              <p style={{ fontSize: '0.82rem', color: `${C.text}77`, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Valutazione completa, senza impegno e senza costi.
              </p>
              <CtaButton center mt="0" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PAGAMENTO ─────────────────── */
function PagamentoSection() {
  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Le opzioni di pagamento
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.2 }}>
              A seconda delle tue necessità, ho pensato a tre tipologie di percorso.
            </h2>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.8, maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1rem' }}>
              Nessun vincolo contrattuale: puoi interrompere il percorso in qualsiasi momento, senza penali né conguagli.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn direction="left" delay={0.05}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
              height: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              borderTop: `5px solid ${C.primary}`,
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📌</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>
                Seduta per seduta
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}77`, lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Paghi ogni seduta singolarmente dopo l&apos;appuntamento. Nessun impegno anticipato.
              </p>
              <p style={{ fontSize: '0.85rem', color: C.primary, fontWeight: 600, marginTop: 'auto' }}>
                Ideale per controlli post-riabilitazione
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
              height: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              borderTop: `5px solid ${C.secondary}`,
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📅</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>
                Mensile
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}77`, lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Paghi mese per mese in base alla frequenza consigliata. Costo per seduta ridotto.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#3A8C7F', fontWeight: 600, marginTop: 'auto' }}>
                Bonus: check-up gratuiti + sconto seduta. Ideale per condizioni acute e infortuni
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div style={{
              background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
              height: '100%', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              borderTop: '5px solid #EEAE30',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🗓️</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: C.text, marginBottom: '0.5rem' }}>
                Trimestrale
              </h3>
              <p style={{ fontSize: '0.92rem', color: `${C.text}77`, lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Paghi 3 mesi in anticipo. Costo per seduta inferiore al mensile.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#9a7200', fontWeight: 600, marginTop: 'auto' }}>
                Bonus: 1 seduta gratuita ogni trimestre completato. Ideale per dolore cronico e riabilitazione post-intervento
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p style={{
            marginTop: '2rem', textAlign: 'center',
            fontSize: '0.85rem', color: `${C.text}55`, lineHeight: 1.7,
          }}>
            Il costo esatto te lo presento in studio, dopo la valutazione iniziale — dipende dalla frequenza e dalla durata che la tua condizione richiede davvero.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────── COME SI DECIDE ─────────────────── */
function ComeSiDecideSection() {
  const step = [
    { num: '01', titolo: 'Valutazione', testo: 'Capisco davvero qual è il tuo problema grazie a test specifici per il tuo dolore estremamente affidabili.' },
    { num: '02', titolo: 'Frequenza consigliata', testo: 'In base all\'esito dei test clinici, è possibile stabilire la frequenza settimanale consigliata per il tuo problema.' },
    { num: '03', titolo: 'Durata stimata', testo: 'Dopodiché è possibile definire le reali tempistiche di miglioramento.' },
  ]

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad}` }} className="md:py-24">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.secondary }}>
              Come si decide
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: C.text, marginTop: '0.75rem', lineHeight: 1.25 }}>
              Come nasce il tuo percorso.
            </h2>
            <p style={{ marginTop: '1rem', color: `${C.text}88`, lineHeight: 1.8, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              Tre passaggi fondamentali che ogni percorso serio dovrebbe seguire — a partire dalla prima visita gratuita.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {step.map((s) => (
            <StaggerItem key={s.num}>
              <div style={{
                background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: C.primary, marginBottom: '0.75rem' }}>{s.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, marginBottom: '0.5rem' }}>{s.titolo}</h3>
                <p style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.7, margin: 0 }}>{s.testo}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <CtaButton center mt="0" />
            <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: `${C.text}44` }}>
              Rispondo di persona entro 24 ore · Nessun impegno
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
