import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog – Fisioterapia e movimento',
  description: 'Articoli su fisioterapia, dolore cronico, movimento e riabilitazione. Studio Mantovan, Broni.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-extrabold text-brand-text mb-4">Blog</h1>
        <p className="text-brand-text/60 mb-12 text-lg">
          Approfondimenti su fisioterapia, dolore e movimento.
        </p>

        {posts.length === 0 ? (
          <p className="text-brand-text/50">Primo articolo in arrivo.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-brand-surface hover:bg-white border border-transparent hover:border-brand-primary/20 rounded-2xl p-6 flex flex-col transition-all hover:shadow-md"
              >
                {post.date && (
                  <span className="text-xs font-700 uppercase tracking-widest text-brand-secondary mb-2">
                    {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                )}
                <h2 className="font-700 text-lg text-brand-text group-hover:text-brand-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-brand-text/55 leading-relaxed line-clamp-3 mb-4">{post.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-700 text-brand-primary">
                  Leggi l&apos;articolo
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
