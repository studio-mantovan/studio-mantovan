'use client'

import { FadeIn } from '@/components/ui/fade-in'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faq = [
  {
    q: 'Ho già fatto fisioterapia e non ha funzionato. Perché dovrebbe andare diversamente?',
    a: "Probabilmente prima hai ricevuto un trattamento passivo — tecar, massaggi, ultrasuoni. Queste terapie possono dare sollievo temporaneo, ma non modificano il modo in cui il tuo corpo gestisce il movimento e non lavorano sulle credenze che alimentano il dolore. L'approccio che uso qui è diverso per struttura, non solo per tecnica. Ne parliamo nella prima visita gratuita.",
  },
  {
    q: "Ho un'ernia o una protrusione. Posso davvero muovermi?",
    a: "Nella maggior parte dei casi, sì. Ernie e protrusioni sono molto più comuni di quello che pensi, anche in persone completamente asintomatiche. Studi di imaging mostrano che il 60–70% delle ernie si riassorbono spontaneamente. Il problema non è quasi mai la struttura — è come il tuo sistema nervoso ha imparato a interpretarla. Ne parliamo insieme.",
  },
  {
    q: 'Quante sedute ci vorranno? Qual è il costo?',
    a: "Dipende dalla tua situazione — per questo non esistono pacchetti standard. Lo definiamo insieme dopo la prima visita gratuita, sulla base dei tuoi obiettivi reali. Quello che posso dirti: il percorso è costruito per aumentare la tua autonomia nel tempo, non per creare dipendenza dalle sedute.",
  },
  {
    q: 'La prima visita è davvero gratuita, senza impegno?',
    a: "Sì, senza condizioni e senza impegno di nessun tipo. Voglio che tu possa valutare se questo è l'approccio giusto per te prima di qualsiasi decisione economica. Se arrivi e capisco che non sono la persona giusta per aiutarti, te lo dico — e, se posso, ti indirizzo verso chi può farlo.",
  },
  {
    q: 'Devo avere una diagnosi o una prescrizione medica per venire?',
    a: "No. Lavoro come First Contact Practitioner: puoi venire direttamente senza passare prima dal medico o dall'ortopedico. La valutazione clinica la facciamo insieme nella prima visita. Se durante la valutazione emergono segnali che richiedono indagini mediche, te lo segnalo io.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-brand-bg">
      <div className="max-w-3xl mx-auto px-5 py-20 md:py-28">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-brand-text" style={{ fontWeight: 800 }}>
              Hai qualche dubbio?
              <br />
              <span className="text-brand-primary">È normale.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion multiple={false} className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-brand-surface rounded-2xl border-none px-6 py-1"
              >
                <AccordionTrigger className="text-left text-sm font-700 text-brand-text hover:text-brand-primary hover:no-underline py-5 gap-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-brand-text/65 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center mt-10 text-sm text-brand-text/50">
            Hai un&apos;altra domanda?{' '}
            <a href="https://wa.me/393519242517" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline font-600">
              Scrivimi su WhatsApp
            </a>{' '}
            — rispondo di persona.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
