import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Studio Mantovan – Fisioterapia in Movimento | Broni (PV)',
    template: '%s | Studio Mantovan – Fisioterapia Broni',
  },
  description:
    'Fisioterapista a Broni, Oltrepò Pavese. Percorsi 1:1 personalizzati per tornare alle attività che contano per te. Prima visita gratuita. Umberto Mantovan.',
  keywords: ['fisioterapista Broni', 'fisioterapia Broni', 'fisioterapia Oltrepò Pavese', 'mal di schiena Broni'],
  authors: [{ name: 'Umberto Mantovan' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://umbertomantovan.net',
    siteName: 'Studio Mantovan – Fisioterapia in Movimento',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${jakarta.variable} ${lora.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
