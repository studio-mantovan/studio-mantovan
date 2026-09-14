import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'Valutazione fisioterapica, fisioterapia in studio e a domicilio, mal di schiena, cervicalgia, spalla, dolore cronico, infortuni sportivi. Studio Mantovan, Broni.',
  alternates: { canonical: '/servizi' },
}

/* ─── Design system (da landing-page-style.md) ─── */
const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  container: '1100px',
  pad:       '1.5rem',
}

// I nomi qui sotto ("nome") sono scritti per combaciare alla lettera con l'elenco
// servizi del profilo Google Business Profile — è il modo più diretto per dire a
// Google che il sito e la scheda parlano della stessa cosa. Se cambi un nome su
// Google Business, aggiornalo anche qui.
type Servizio = {
  nome: string
  descrizione: string
  href: string
  icon: string
  isBlog?: boolean
}

const servizi: Servizio[] = [
  {
    nome: 'Valutazione fisioterapica',
    descrizione: 'Il primo passo di ogni percorso: capiamo insieme cosa sta succedendo e se posso aiutarti davvero. Sempre gratuita.',
    href: '/prenota',
    icon: '📋',
  },
  {
    nome: 'Fisioterapia in studio',
    descrizione: 'Il percorso classico, nel mio studio a Broni: valutazione, esercizio attivo, attrezzatura completa.',
    href: '/',
    icon: '🏥',
  },
  {
    nome: 'Fisioterapia a domicilio',
    descrizione: 'Non riesci ancora a spostarti dopo un intervento, una frattura o per una difficoltà di mobilità? Vengo io da te.',
    href: '/fisioterapia-a-domicilio',
    icon: '🏠',
  },
  {
    nome: 'Mal di schiena (Lombalgia e Sciatalgia)',
    descrizione: 'Dal dolore lombare occasionale alla sciatalgia che dura da mesi: un percorso attivo per uscire dal circolo dolore-riposo-recidiva.',
    href: '/patologie/lombalgia',
    icon: '🦴',
  },
  {
    nome: 'Cervicalgia e Brachialgia',
    descrizione: 'Dolore al collo che scende nel braccio: capiamo la causa prima di trattare il sintomo.',
    href: '/patologie/cervicale',
    icon: '🔄',
  },
  {
    nome: 'Dolore alla spalla e cuffia dei rotatori',
    descrizione: 'Una lesione della cuffia dei rotatori nel referto non significa dover operare. Un percorso attivo, costruito su di te.',
    href: '/patologie/spalla',
    icon: '💪',
  },
  {
    nome: 'Dolore Cronico (oltre tre mesi)',
    descrizione: 'Il dolore che dura da mesi o anni non è solo fisico. Lavoriamo insieme su corpo, credenze e paure.',
    href: '/patologie/dolore-cronico',
    icon: '🌀',
  },
  {
    nome: 'Riabilitazione per infortuni sportivi',
    descrizione: 'Per lo sportivo il dolore è un blocco, non solo un disturbo. L’obiettivo è tornare ad allenarti, non solo smettere di soffrire.',
    href: '/patologie/fisioterapia-sportiva',
    icon: '🏋️',
  },
  {
    nome: 'Fisioterapia post-intervento chirurgico',
    descrizione: 'Dopo un intervento ortopedico — protesi, artroscopia — il lavoro vero comincia qui: progressione, non protocolli fissi.',
    href: '/patologie/ginocchio',
    icon: '🏃',
  },
  {
    nome: 'Colpo di Frusta Cervicale',
    descrizione: 'Dopo un incidente stradale: cosa fare davvero nelle prime settimane, e cosa evitare.',
    href: '/blog/colpo-di-frusta-dopo-un-incidente-stradale-cosa-fare-davvero-e-cosa-evitare',
    icon: '🚗',
    isBlog: true,
  },
]

export default function ServiziPage() {
  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servizi.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.nome,
      url: `https://umbertomantovan.net${s.href}`,
    })),
  }

  return (
    <div style={{ background: C.bg, paddingTop: '68px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      {/* Hero */}
      <section>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `4.5rem ${C.pad} 3rem` }}>
          <span style={{
            display: 'inline-block', background: 'rgba(26,158,201,0.1)', color: C.primary,
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
            padding: '6px 14px', borderRadius: '50px', marginBottom: '1.25rem',
          }}>
            Servizi
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: C.text,
            lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: '700px', margin: 0,
          }}>
            Cosa posso fare per te
          </h1>
          <p style={{ marginTop: '1.25rem', fontSize: '1.02rem', color: `${C.text}99`, lineHeight: 1.8, maxWidth: '620px' }}>
            Nessun protocollo standard, nessun pacchetto fisso: ogni percorso è costruito sulla persona. Qui sotto trovi le aree in cui lavoro di più — scegli quella più vicina alla tua situazione.
          </p>
        </div>
      </section>

      {/* Griglia servizi */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: C.container, margin: '0 auto', padding: `3.5rem ${C.pad}` }} className="md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servizi.map((s) => (
              <Link
                key={s.nome}
                href={s.href}
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: C.white, borderRadius: C.radiusLg, padding: '2rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
                  textDecoration: 'none', height: '100%',
                }}
                className="group hover:shadow-md transition-shadow"
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: C.text, marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {s.nome}
                </h2>
                <p style={{ fontSize: '0.88rem', color: `${C.text}88`, lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {s.descrizione}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '1.1rem',
                  fontSize: '0.85rem', fontWeight: 700, color: C.primary,
                }}>
                  {s.isBlog ? 'Leggi l’articolo' : 'Scopri di più'} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section style={{ background: C.primary }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: `4rem ${C.pad}`, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Non sei sicuro di quale servizio ti serva?
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.78)', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Ne parliamo nella prima visita, gratuita e senza impegno.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="/prenota"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff', color: C.primary, fontWeight: 700, fontSize: '1rem',
                padding: '14px 28px', borderRadius: '50px', textDecoration: 'none',
              }}
            >
              Prenota la prima visita gratuita →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
