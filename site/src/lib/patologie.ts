export type Patologia = {
  slug: string
  nome: string
  titolo: string
  sottotitolo: string
  descrizione: string
  emoji: string
  keywords: string[]
}

export const patologie: Patologia[] = [
  {
    slug: 'lombalgia',
    nome: 'Lombalgia & Sciatalgia',
    titolo: 'Mal di schiena e sciatalgia: torni a muoverti, non a gestire il dolore.',
    sottotitolo: 'Percorso 1:1 per uscire dal circolo di dolore, riposo e recidive.',
    descrizione:
      'Il mal di schiena cronico non è una condanna. Nella maggior parte dei casi il problema non è strutturale — è come il corpo ha imparato a muoversi (e a non muoversi). Lavoriamo insieme su questo.',
    emoji: '🦴',
    keywords: ['mal di schiena', 'lombalgia', 'sciatalgia', 'ernia lombare', 'dolore lombare', 'schiena'],
  },
  {
    slug: 'cervicale',
    nome: 'Cervicalgia & Cervicobrachialgia',
    titolo: 'Dolore al collo, alla spalla, al braccio: capire prima di trattare.',
    sottotitolo: 'Dalla cervicalgia alla radiculopatia cervicale: percorso su misura.',
    descrizione:
      'Il dolore cervicale che scende lungo il braccio ha spesso cause diverse da quello che mostrano i referti. Ti aiuto a capire cosa sta succedendo davvero — e a tornare a muoverti.',
    emoji: '🔄',
    keywords: ['cervicale', 'dolore collo', 'cervicobrachialgia', 'nervo cervicale', 'dolore braccio'],
  },
  {
    slug: 'spalla',
    nome: 'Dolore alla spalla',
    titolo: 'Spalla che fa male? Prima capiamo perché.',
    sottotitolo: 'Sindrome da conflitto, cuffia dei rotatori, calcificazioni: percorso attivo.',
    descrizione:
      'Il dolore alla spalla limita ogni gesto quotidiano. Un approccio basato sull\'esercizio graduale ottiene risultati che le terapie passive non riescono a mantenere.',
    emoji: '💪',
    keywords: ['dolore spalla', 'cuffia rotatori', 'sindrome conflitto spalla', 'spalla infiammata'],
  },
  {
    slug: 'ginocchio',
    nome: 'Ginocchio & Riabilitazione post-op',
    titolo: 'Dopo l\'operazione al ginocchio, il lavoro vero comincia qui.',
    sottotitolo: 'Riabilitazione post-LCA, protesi, gonalgia: torno a correre è un obiettivo concreto.',
    descrizione:
      'La riabilitazione dopo un intervento al ginocchio richiede progressione, non protocolli fissi. Costruiamo insieme il percorso sulla tua situazione e sui tuoi obiettivi reali.',
    emoji: '🏃',
    keywords: ['ginocchio', 'LCA', 'riabilitazione ginocchio', 'gonalgia', 'post-operatorio ginocchio'],
  },
  {
    slug: 'dolore-cronico',
    nome: 'Dolore cronico persistente',
    titolo: 'Hai già provato tutto. C\'è ancora un motivo per cui non è passato.',
    sottotitolo: 'Approccio biopsicosociale per chi ha dolore da mesi o anni.',
    descrizione:
      'Il dolore cronico non è solo fisico. Le credenze, le paure e le abitudini di movimento entrano in gioco tanto quanto la struttura. Lavoriamo su tutto, insieme.',
    emoji: '🌀',
    keywords: ['dolore cronico', 'dolore persistente', 'fibromialgia', 'dolore cronico schiena'],
  },
  {
    slug: 'fisioterapia-sportiva',
    nome: 'Fisioterapia sportiva',
    titolo: 'Tornare ad allenarsi, non solo smettere di soffrire.',
    sottotitolo: 'Infortuni da sport, tendinopatie, recupero: l\'obiettivo è la performance.',
    descrizione:
      'Per lo sportivo il dolore non è solo un disturbo — è un blocco. Lavoriamo per tornare all\'allenamento con un corpo più forte e consapevole di prima.',
    emoji: '🏋️',
    keywords: ['fisioterapia sportiva', 'infortuni sportivi', 'tendinopatia', 'dolore sportivo'],
  },
]

export function getPatologia(slug: string): Patologia | undefined {
  return patologie.find((p) => p.slug === slug)
}
