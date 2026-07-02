export type ZonaServita = {
  slug: 'broni' | 'stradella' | 'casteggio'
  citta: string
  eyebrow: string
  h1: string
  metaTitle: string
  metaDescription: string
  heroIntro: string
  personale: string[]
  distanza: string
  foto: string
  fotoAlt: string
  faq: { q: string; a: string }[]
  teaser: string
}

export const zoneServite: ZonaServita[] = [
  {
    slug: 'broni',
    citta: 'Broni',
    eyebrow: 'Fisioterapista a Broni',
    h1: 'Fisioterapista a Broni: la fisioterapia attiva nel paese dove sono cresciuto',
    metaTitle: 'Fisioterapista a Broni | Studio Mantovan – Fisioterapia in Movimento',
    metaDescription:
      'Fisioterapista a Broni specializzato in dolore cronico, riabilitazione post-operatoria e fisioterapia sportiva. Prima visita gratuita. Prenota: 351 924 2517.',
    heroIntro:
      'Se cerchi un fisioterapista a Broni, il mio studio è qui, in Via Enzo Togni 75 — nel paese dove sono nato e cresciuto.',
    personale: [
      'Sono originario di Broni. Dopo la laurea a Pavia ho lavorato per un periodo a Sanremo, poi in uno studio convenzionato con il SSN a Casteggio, dove ho affiancato anche gli studenti di Fisioterapia dell\'Università di Pavia durante il tirocinio.',
      'Nel 2025 ho scelto di tornare qui, nel paese dove sono cresciuto, e aprire il mio studio. Non è stata una scelta di comodo — è stata una scelta di cuore: portare a Broni un modello di fisioterapia diverso, in un posto che conosco e dove conosco le persone.',
    ],
    distanza: 'Lo studio si trova proprio qui a Broni, in Via Enzo Togni 75.',
    foto: '/photos/f7-studio.jpg',
    fotoAlt: 'Sala trattamento Studio Mantovan a Broni',
    faq: [
      {
        q: 'Dove si trova esattamente lo studio a Broni?',
        a: 'In Via Enzo Togni 75, 27043 Broni (PV). Trovi la mappa e tutte le indicazioni nella pagina Dove trovarmi.',
      },
      {
        q: 'Serve una prescrizione del medico per venire in studio?',
        a: 'No. Lavoro come First Contact Practitioner: puoi prenotare direttamente la prima visita, senza passare prima dal medico o dall\'ortopedico.',
      },
      {
        q: 'Tratti anche pazienti che arrivano da fuori Broni?',
        a: 'Sì — molti pazienti arrivano da Stradella, Casteggio e dal resto dell\'Oltrepò Pavese. Lo studio è facilmente raggiungibile in auto da tutta la zona.',
      },
    ],
    teaser: 'Il mio studio, nel paese dove sono nato e cresciuto.',
  },
  {
    slug: 'stradella',
    citta: 'Stradella',
    eyebrow: 'Fisioterapista per Stradella',
    h1: 'Fisioterapista per Stradella: il mio studio a pochi minuti da casa tua',
    metaTitle: 'Fisioterapista per Stradella | Studio Mantovan – Fisioterapia in Movimento',
    metaDescription:
      'Fisioterapista per chi vive a Stradella: studio a Broni, a pochi minuti d\'auto. Dolore cronico, infortuni, riabilitazione post-operatoria. Prima visita gratuita.',
    heroIntro:
      'Se vivi a Stradella e cerchi un fisioterapista, il mio studio è a pochi minuti da te — e io stesso vivo qui, a Stradella.',
    personale: [
      'Vivo a Stradella. Il mio studio si trova a Broni, a pochissimi minuti d\'auto: un tragitto breve per un percorso costruito davvero sulla tua situazione, non su un protocollo standard.',
      'Conosco bene la zona perché la vivo ogni giorno, e questo mi aiuta a capire meglio le abitudini e i ritmi di chi arriva da qui — chi lavora in vigna, chi fa il pendolare, chi gestisce un\'attività in centro: il percorso si costruisce intorno alla tua vita reale, non al contrario.',
    ],
    distanza: 'Da Stradella raggiungi il mio studio a Broni in pochi minuti d\'auto.',
    foto: '/photos/f9-sala-attesa.webp',
    fotoAlt: 'Sala d\'attesa Studio Mantovan, a pochi minuti da Stradella',
    faq: [
      {
        q: 'Quanto dista il tuo studio da Stradella?',
        a: 'Pochi minuti d\'auto. Lo studio si trova a Broni, in Via Enzo Togni 75 — un tragitto breve lungo la stessa zona dell\'Oltrepò Pavese.',
      },
      {
        q: 'Lavori spesso con pazienti di Stradella?',
        a: 'Sì, vivendo a Stradella conosco bene la zona e diversi pazienti arrivano proprio da qui — per dolore cronico, infortuni sportivi o riabilitazione dopo un intervento.',
      },
      {
        q: 'C\'è parcheggio vicino allo studio?',
        a: 'Sì, trovi parcheggio comodamente nelle vicinanze. Trovi indicazioni precise nella pagina Dove trovarmi.',
      },
    ],
    teaser: 'La cittadina in cui vivo.',
  },
  {
    slug: 'casteggio',
    citta: 'Casteggio',
    eyebrow: 'Fisioterapista per Casteggio',
    h1: 'Fisioterapista per Casteggio: 5 anni di esperienza nel territorio',
    metaTitle: 'Fisioterapista per Casteggio | Studio Mantovan – Fisioterapia in Movimento',
    metaDescription:
      'Fisioterapista con 5 anni di esperienza a Casteggio (studio convenzionato SSN). Oggi nel mio studio a Broni, a pochi minuti di distanza. Prima visita gratuita.',
    heroIntro:
      'Se vivi a Casteggio, probabilmente la zona la conosco già bene: ci ho lavorato per 5 anni prima di aprire il mio studio.',
    personale: [
      'Ho lavorato per 5 anni in uno studio convenzionato con il Servizio Sanitario Nazionale a Casteggio, dove ho seguito centinaia di pazienti del territorio e affiancato gli studenti di Fisioterapia dell\'Università di Pavia durante il tirocinio clinico.',
      'Quell\'esperienza mi ha fatto conoscere a fondo le persone di Casteggio e le condizioni più comuni della zona — ma mi ha anche mostrato i limiti di un modello fatto di protocolli standardizzati e poca personalizzazione. Oggi accolgo i pazienti di Casteggio nel mio studio a Broni, a pochi minuti di distanza, con un approccio che a Casteggio non potevo offrire.',
    ],
    distanza: 'Da Casteggio raggiungi il mio studio a Broni in pochi minuti d\'auto.',
    foto: '/photos/f3-ritratto.jpg',
    fotoAlt: 'Umberto Mantovan, fisioterapista con 5 anni di esperienza nel territorio di Casteggio',
    faq: [
      {
        q: 'Hai davvero lavorato a Casteggio?',
        a: 'Sì, per 5 anni in uno studio convenzionato con il SSN, dove ho seguito molti pazienti del territorio e affiancato i tirocinanti dell\'Università di Pavia.',
      },
      {
        q: 'Perché ora lavori a Broni e non più a Casteggio?',
        a: 'Perché ho scelto di costruire un modello di fisioterapia diverso da quello dei protocolli standardizzati — percorsi 1:1, costruiti sulla persona, non sul numero di sedute. Il mio studio è a Broni, a pochi minuti da Casteggio.',
      },
      {
        q: 'Conosci le condizioni più comuni della zona?',
        a: 'Sì, anche grazie ai 5 anni di lavoro diretto sul territorio: dolore cronico, infortuni sportivi e riabilitazione post-operatoria sono le richieste più frequenti che incontro ancora oggi.',
      },
    ],
    teaser: '5 anni di lavoro diretto sul territorio, in uno studio convenzionato SSN.',
  },
]

export function getZonaServita(slug: string): ZonaServita | undefined {
  return zoneServite.find((z) => z.slug === slug)
}
