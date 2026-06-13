import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Articolo: ${slug}`,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  // Placeholder — in futuro MDX o CMS
  if (!slug) notFound()

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-brand-text/50 hover:text-brand-primary transition-colors mb-8"
        >
          ← Tutti gli articoli
        </Link>
        <h1 className="text-3xl font-extrabold text-brand-text mb-4">Articolo in arrivo</h1>
        <p className="text-brand-text/60">Questo contenuto verrà pubblicato presto.</p>
      </div>
    </div>
  )
}
