import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Fisioterapia e movimento',
  description: 'Articoli su fisioterapia, dolore cronico, movimento e riabilitazione. Studio Mantovan, Broni.',
}

export default function BlogPage() {
  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-extrabold text-brand-text mb-4">Blog</h1>
        <p className="text-brand-text/60 mb-12 text-lg">
          Approfondimenti su fisioterapia, dolore e movimento. In costruzione.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-brand-surface rounded-2xl p-6 animate-pulse">
              <div className="h-3 bg-brand-text/10 rounded w-1/3 mb-4" />
              <div className="h-5 bg-brand-text/15 rounded w-3/4 mb-3" />
              <div className="h-4 bg-brand-text/10 rounded w-full mb-1" />
              <div className="h-4 bg-brand-text/10 rounded w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
