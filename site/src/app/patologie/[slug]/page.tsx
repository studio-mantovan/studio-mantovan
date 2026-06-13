import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { patologie, getPatologia } from '@/lib/patologie'
import { ArrowRight } from 'lucide-react'
import { FaqSection } from '@/components/FaqSection'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return patologie.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getPatologia(slug)
  if (!p) return {}
  return {
    title: p.titolo,
    description: p.sottotitolo,
    keywords: p.keywords,
  }
}

export default async function PatologiaPage({ params }: Props) {
  const { slug } = await params
  const patologia = getPatologia(slug)
  if (!patologia) notFound()

  return (
    <div className="bg-brand-bg">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-5">
          <Link
            href="/patologie"
            className="inline-flex items-center gap-1.5 text-sm text-brand-text/50 hover:text-brand-primary transition-colors mb-6"
          >
            ← Tutte le patologie
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{patologia.emoji}</span>
            <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">
              {patologia.nome}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-text leading-tight mb-5">
            {patologia.titolo}
          </h1>
          <p className="text-lg text-brand-text/65 leading-relaxed max-w-2xl mb-8">
            {patologia.descrizione}
          </p>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-700 px-6 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-primary/20"
          >
            Prenota la valutazione gratuita
            <ArrowRight size={15} />
          </a>
          <p className="mt-3 text-xs text-brand-text/40">Prima visita gratuita · Rispondo entro 24 ore</p>
        </div>
      </section>

      {/* Contenuto — placeholder articoli */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-xl font-700 text-brand-text mb-8">Approfondimenti su {patologia.nome}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-brand-surface rounded-2xl p-6 animate-pulse">
              <div className="h-3 bg-brand-text/10 rounded w-1/3 mb-4" />
              <div className="h-5 bg-brand-text/15 rounded w-3/4 mb-2" />
              <div className="h-4 bg-brand-text/10 rounded w-full mb-1" />
              <div className="h-4 bg-brand-text/10 rounded w-5/6" />
            </div>
          ))}
          <div className="bg-brand-primary/5 border-2 border-dashed border-brand-primary/20 rounded-2xl p-6 flex items-center justify-center">
            <p className="text-sm text-brand-text/40 text-center">
              Articoli in arrivo su {patologia.nome}
            </p>
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  )
}
