import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi sono – Umberto Mantovan, fisioterapista',
  description:
    'Umberto Mantovan, fisioterapista a Broni (PV). Approccio basato su evidenze, percorsi 1:1, prima visita gratuita.',
}

export default function ChiSonoPage() {
  return (
    <div className="pt-24 max-w-3xl mx-auto px-5 py-20">
      <h1 className="text-4xl font-extrabold text-brand-text mb-6">Chi sono</h1>
      <p className="text-brand-text/60">Pagina in costruzione — in arrivo presto.</p>
    </div>
  )
}
