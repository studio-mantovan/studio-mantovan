import type { Metadata } from 'next'
import Link from 'next/link'
import { patologie } from '@/lib/patologie'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patologie trattate',
  description: 'Fisioterapia per lombalgia, sciatalgia, cervicalgia, dolore alla spalla, ginocchio e dolore cronico a Broni, Oltrepò Pavese.',
}

export default function PatologiePage() {
  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-extrabold text-brand-text mb-4">Patologie trattate</h1>
        <p className="text-brand-text/60 mb-12 text-lg leading-relaxed max-w-xl">
          Ogni percorso è costruito su di te, non sulla diagnosi. Scegli l&apos;area che ti interessa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {patologie.map((p) => (
            <Link
              key={p.slug}
              href={`/patologie/${p.slug}`}
              className="group bg-brand-surface hover:bg-white border border-transparent hover:border-brand-primary/20 rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-md"
            >
              <span className="text-3xl mt-0.5">{p.emoji}</span>
              <div className="flex-1 min-w-0">
                <h2 className="font-700 text-brand-text group-hover:text-brand-primary transition-colors mb-1">
                  {p.nome}
                </h2>
                <p className="text-sm text-brand-text/55 leading-relaxed line-clamp-2">{p.descrizione}</p>
              </div>
              <ArrowRight size={18} className="text-brand-text/20 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
