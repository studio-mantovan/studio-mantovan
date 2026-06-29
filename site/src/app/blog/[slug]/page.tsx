import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPost } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.description,
    url: `https://umbertomantovan.net/blog/${post.slug}/`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Umberto Mantovan',
      jobTitle: 'Fisioterapista',
      url: 'https://umbertomantovan.net',
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Studio Mantovan – Fisioterapia in Movimento',
      url: 'https://umbertomantovan.net',
      telephone: '+393519242517',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Broni',
        addressRegion: 'PV',
        addressCountry: 'IT',
      },
    },
  }

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-2xl mx-auto px-5 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-brand-text/50 hover:text-brand-primary transition-colors mb-8"
        >
          ← Tutti gli articoli
        </Link>

        {post.date && (
          <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary">
            {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        )}

        <article
          className="mt-3
            [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-extrabold [&_h1]:text-brand-text [&_h1]:leading-tight [&_h1]:mb-6
            [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-brand-text [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-lg [&_h3]:font-700 [&_h3]:text-brand-text [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-brand-text/75 [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-[1.05rem]
            [&_strong]:text-brand-text [&_strong]:font-700
            [&_em]:text-brand-text/85
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul]:space-y-1.5
            [&_li]:text-brand-text/75 [&_li]:leading-relaxed
            [&_a]:text-brand-primary [&_a]:underline [&_a]:underline-offset-2
            [&_hr]:border-brand-text/10 [&_hr]:my-10
            [&_small]:text-brand-text/40 [&_small]:text-xs"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-12 bg-brand-primary/5 border border-brand-primary/15 rounded-2xl p-6 text-center">
          <p className="text-brand-text font-700 mb-3">Vuoi capire la tua situazione?</p>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-700 px-6 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-primary/20"
          >
            Prenota la prima visita gratuita
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
