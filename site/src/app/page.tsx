import Image from 'next/image'
import Link from 'next/link'
import { patologie } from '@/lib/patologie'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/fade-in'
import { FaqSection } from '@/components/FaqSection'
import { CheckCircle2, ArrowRight, Quote } from 'lucide-react'

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg pt-16">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-primary/8 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-secondary/6 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <FadeIn>
            <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Fisioterapia · Broni, Oltrepò Pavese
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-[1.08] tracking-tight">
              Hai già provato tutto.
              <br />
              <span className="text-brand-primary">Eppure il dolore</span>
              <br />è ancora lì.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-lg text-brand-text/65 leading-relaxed max-w-[500px]">
              Ti aiuto a tornare alle attività che contano per te — non solo a stare meglio qualche settimana.
              Percorso 1:1, costruito su di te. Nessun protocollo standard.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://wa.me/393519242517"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-700 px-6 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-primary/25"
              >
                Prenota la valutazione gratuita
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:+393519242517"
                className="inline-flex items-center gap-1.5 text-sm text-brand-text/55 hover:text-brand-primary transition-colors pt-3.5"
              >
                Oppure chiama: 351 924 2517
              </a>
            </div>
            <p className="mt-3 text-xs text-brand-text/40">
              Rispondo di persona entro 24 ore · Senza impegno
            </p>
          </FadeIn>

          {/* Proof strip */}
          <FadeIn delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-brand-text/50">
              {['Prima visita gratuita', 'Solo sedute 1:1', 'Nessun macchinario passivo'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-brand-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Photo */}
        <FadeIn delay={0.1} direction="right">
          <div className="relative w-full max-w-[480px] mx-auto">
            <div className="absolute -inset-6 bg-brand-secondary/12 rounded-[2.5rem] blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/f1-trattamento-lombare.jpg"
                alt="Umberto Mantovan fisioterapista Broni durante una seduta di trattamento"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-secondary/15 flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <div className="text-xs font-700 text-brand-text" style={{ fontWeight: 700 }}>5+ anni di esperienza</div>
                <div className="text-[10px] text-brand-text/50">Oltre 100 pazienti seguiti</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROBLEMA
───────────────────────────────────────────── */
function ProblemaSection() {
  const painPoints = [
    'Hai già fatto fisioterapia, massaggi, tecar. Ha aiutato — ma dopo qualche settimana il dolore è tornato.',
    'Ti hanno detto di stare fermo, evitare certi movimenti, aspettare che passi da solo.',
    'Hai visto la risonanza: ernie, protrusioni, usura. Adesso hai più paura di muoverti di prima.',
  ]

  return (
    <section className="bg-brand-surface">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Il problema</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text leading-tight" style={{ fontWeight: 800 }}>
              Ti riconosci in questo?
            </h2>
            <p className="mt-5 text-brand-text/60 leading-relaxed">
              Il dolore cronico non sparisce con il riposo o con una manciata di sedute. Se fosse così semplice, non saresti qui.
            </p>
          </FadeIn>

          <StaggerChildren className="flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-5 flex gap-4 items-start border-l-4 border-brand-secondary shadow-sm">
                  <CheckCircle2 size={20} className="text-brand-secondary shrink-0 mt-0.5" />
                  <p className="text-brand-text/80 text-sm leading-relaxed">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-xl md:text-2xl font-700 text-brand-text max-w-2xl mx-auto leading-snug">
              Non è colpa tua.{' '}
              <span className="text-brand-primary">
                Ma c&apos;è un motivo per cui non è passato — e si può cambiare.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   METODO — 3 FASI
───────────────────────────────────────────── */
const fasi = [
  {
    num: '01',
    titolo: 'Capiamo cosa sta succedendo davvero',
    corpo:
      'Prima visita gratuita: ti ascolto, esploro la tua storia, capiamo insieme i tuoi obiettivi concreti. Uscirai con una comprensione diversa di quello che ti sta succedendo — non solo una lista di esercizi.',
    tag: 'Valutazione gratuita',
  },
  {
    num: '02',
    titolo: 'Il corpo impara di nuovo che muoversi è sicuro',
    corpo:
      'Sedute 1:1, pochi esercizi scelti su misura, esposizione graduale alle attività che evitavi. Nessun macchinario passivo: lavoriamo insieme, tu in prima persona.',
    tag: 'Percorso attivo',
  },
  {
    num: '03',
    titolo: 'Torni alle attività che contano per te',
    corpo:
      "Frequenza in calo, autonomia crescente. L'obiettivo non è non avere più dolore — è tornare a fare quello che conta. Il lavoro, lo sport, muoverti senza pensarci su.",
    tag: 'Autonomia',
  },
]

function MetodoSection() {
  return (
    <section className="bg-brand-bg">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Come lavoro</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text" style={{ fontWeight: 800 }}>
              Il dolore ha una storia.
              <br />
              <span className="text-brand-primary">Il percorso parte da lì.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fasi.map((fase, i) => (
            <StaggerItem key={i}>
              <div className="relative bg-brand-surface rounded-3xl p-7 h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="absolute -top-4 -right-2 text-[7rem] leading-none select-none text-brand-primary/6"
                  style={{ fontWeight: 800 }}
                >
                  {fase.num}
                </div>
                <span className="inline-block bg-brand-primary/10 text-brand-primary text-[10px] font-700 uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                  {fase.tag}
                </span>
                <div className="text-3xl text-brand-primary mb-3" style={{ fontWeight: 800 }}>
                  {fase.num}
                </div>
                <h3 className="text-lg font-700 text-brand-text mb-3 leading-snug">{fase.titolo}</h3>
                <p className="text-sm text-brand-text/65 leading-relaxed">{fase.corpo}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PER CHI / PATOLOGIE
───────────────────────────────────────────── */
function PerChiSection() {
  const target = [
    { icon: '🔁', testo: 'Hai dolore da settimane o mesi e hai già provato altre strade senza risultati duraturi' },
    { icon: '🧠', testo: 'Vuoi capire cosa ti sta succedendo davvero — non solo ricevere esercizi da fare a casa' },
    { icon: '🏋️', testo: 'Sei uno sportivo che vuole tornare ad allenarsi, non solo smettere di soffrire' },
    { icon: '😟', testo: 'Hai paura di muoverti perché temi di peggiorare o farti del male' },
  ]

  return (
    <section className="bg-brand-text text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <FadeIn direction="left">
              <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Per chi è</span>
              <h2 className="mt-3 text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 800 }}>
                Questo percorso
                <br />è pensato per te se&hellip;
              </h2>
            </FadeIn>

            <StaggerChildren className="mt-8 flex flex-col gap-5">
              {target.map((t, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{t.icon}</span>
                    <p className="text-white/75 leading-relaxed">{t.testo}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.4}>
              <a
                href="https://wa.me/393519242517"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-700 px-6 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
              >
                Prenota la valutazione gratuita
                <ArrowRight size={15} />
              </a>
            </FadeIn>
          </div>

          {/* Patologie links */}
          <FadeIn direction="right" delay={0.1}>
            <p className="text-white/40 text-xs uppercase tracking-widest font-700 mb-4">Le aree cliniche</p>
            <div className="flex flex-col gap-2">
              {patologie.map((p) => (
                <Link
                  key={p.slug}
                  href={`/patologie/${p.slug}`}
                  className="group flex items-center justify-between bg-white/5 hover:bg-brand-primary/20 border border-white/10 hover:border-brand-primary/40 rounded-2xl px-5 py-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.emoji}</span>
                    <span className="text-sm font-600 text-white group-hover:text-brand-secondary-light transition-colors">
                      {p.nome}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/30 group-hover:text-brand-secondary-light group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CASO REALE — LUCA
───────────────────────────────────────────── */
function CasoRealeSection() {
  return (
    <section className="bg-brand-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-6 bg-brand-primary/8 rounded-[3rem] blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/f6-deadlift.jpg"
                  alt="Paziente di Studio Mantovan esegue un deadlift con bilanciere — risultato del percorso riabilitativo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white rounded-2xl px-4 py-3 text-sm font-700 shadow-xl">
                Foto reale · nessuna modifica
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.1}>
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Un caso reale</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text leading-tight" style={{ fontWeight: 800 }}>
              Da non riuscire
              <br />ad allacciarsi le scarpe
              <br />
              <span className="text-brand-primary">al deadlift con bilanciere.</span>
            </h2>
            <p className="mt-6 text-brand-text/65 leading-relaxed">
              Luca è arrivato da me con un mal di schiena che durava da anni. Aveva smesso di andare in palestra,
              evitava di chinarsi, aveva paura di qualsiasi sforzo. Con un percorso costruito su di lui — pochi
              esercizi, obiettivi concreti, nessun protocollo uguale per tutti — ha sollevato il bilanciere per
              la prima volta in vita sua.
            </p>
            <p className="mt-4 text-brand-text/65 leading-relaxed">
              Non era il suo obiettivo quando è entrato nello studio. Era meglio.
            </p>
            <div className="mt-8 border-l-4 border-brand-secondary pl-5">
              <p className="text-brand-text font-700 italic font-serif text-[15px]">
                &ldquo;Non pensavo fosse possibile. Adesso vado in palestra tre volte a settimana.&rdquo;
              </p>
              <p className="text-sm text-brand-text/50 mt-2">— Luca, 38 anni, Broni</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   TESTIMONIANZE
───────────────────────────────────────────── */
const testimonianze = [
  {
    testo:
      'Avevo mal di schiena da 3 anni, non riuscivo a stare seduta più di 20 minuti senza che iniziasse a bruciare. Dopo 6 settimane con Umberto sono tornata a correre.',
    nome: 'Paola',
    info: '41 anni · Casteggio',
    iniziali: 'P',
  },
  {
    testo:
      'Pensavo che la sciatalgia fosse qualcosa con cui dovevo imparare a convivere per sempre. Ho sbagliato. Il percorso è stato diverso da tutto quello che avevo già provato.',
    nome: 'Marco',
    info: '52 anni · Broni',
    iniziali: 'M',
  },
  {
    testo:
      "Prima di arrivare da Umberto avevo già visto due fisioterapisti. La differenza? Qui mi ha spiegato cosa stava succedendo davvero — e ho smesso di avere paura di muovermi.",
    nome: 'Giulia',
    info: '35 anni · Voghera',
    iniziali: 'G',
  },
]

function TestimonianzeSection() {
  return (
    <section className="bg-brand-surface">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Testimonianze</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text" style={{ fontWeight: 800 }}>
              Quello che dicono le persone
              <br />
              <span className="text-brand-primary">che erano dove sei tu adesso.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonianze.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-3xl p-7 h-full flex flex-col border-l-4 border-brand-secondary shadow-sm">
                <Quote size={24} className="text-brand-secondary/40 mb-4" />
                <p className="text-brand-text/80 leading-relaxed italic font-serif flex-1 text-[15px]">
                  &ldquo;{t.testo}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-surface">
                  <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-700 shrink-0">
                    {t.iniziali}
                  </div>
                  <div>
                    <div className="text-sm font-700 text-brand-text">{t.nome}</div>
                    <div className="text-xs text-brand-text/50">{t.info}</div>
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

/* ─────────────────────────────────────────────
   CHI SONO
───────────────────────────────────────────── */
function ChiSonoSection() {
  return (
    <section className="bg-brand-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative max-w-[400px]">
              <div className="absolute -inset-6 bg-brand-secondary/10 rounded-[3rem] blur-2xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/photos/f3-ritratto.jpg"
                  alt="Umberto Mantovan fisioterapista Studio Mantovan Broni"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">Chi sono</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text leading-tight" style={{ fontWeight: 800 }}>
              Una sola regola:
              <br />
              <span className="text-brand-primary">nessun paziente uguale all&apos;altro.</span>
            </h2>
            <p className="mt-6 text-brand-text/65 leading-relaxed">
              Sono <strong className="text-brand-text font-700">Umberto Mantovan</strong>, fisioterapista. Ho 28 anni e
              ho aperto Studio Mantovan a Broni nel 2025 dopo anni di esperienza in libera professione a Sanremo e
              in uno studio convenzionato SSN a Casteggio.
            </p>
            <p className="mt-4 text-brand-text/65 leading-relaxed">
              Ho visto come funziona il modello standard: terapie passive, protocolli uguali per tutti, pazienti
              che tornano con gli stessi problemi. Ho scelto un approccio diverso.
            </p>
            <p className="mt-4 text-brand-text/65 leading-relaxed">
              Nel mio studio non trovi macchinari passivi. Trovi un fisioterapista che ti ascolta, che ti spiega
              cosa sta succedendo, e che costruisce un percorso su quello che vuoi tornare a fare — non sulla tua diagnosi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Laureato Università di Pavia", "Approccio CFT (O'Sullivan)", "First Contact Practitioner"].map(
                (item) => (
                  <span key={item} className="bg-brand-surface text-brand-text/70 text-xs font-600 px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                )
              )}
            </div>
            <Link
              href="/chi-sono"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-brand-primary hover:text-brand-primary-dark transition-colors"
            >
              Scopri di più su di me <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CTA MID
───────────────────────────────────────────── */
function CtaMidSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-black/5 blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 800 }}>
            Inizia con una valutazione gratuita.
            <br />
            Senza impegno, senza obbligo.
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            Nella prima visita capisco la tua situazione e ti spiego chiaramente se e come posso aiutarti.
            Se non sono la persona giusta, te lo dico.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393519242517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-700 px-7 py-4 rounded-full text-sm hover:bg-brand-bg transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Prenota la valutazione gratuita <ArrowRight size={15} />
            </a>
            <a
              href="tel:+393519242517"
              className="inline-flex items-center justify-center text-white/80 hover:text-white text-sm transition-colors py-4"
            >
              Chiama: 351 924 2517
            </a>
          </div>
          <p className="mt-4 text-white/50 text-xs">Rispondo di persona entro 24 ore</p>
        </FadeIn>
      </div>
    </section>
  )
}
