'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

// Landing page da traffico Ads: zero vie di uscita (niente nav, niente footer
// di sito, niente fab WhatsApp) per non distrarre il traffico freddo dalla CTA
// principale — vedi anatomia-landing-page-perfetta.md, "meno è più".
const CHROMELESS_ROUTES = ['/spalla-lesionata']

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const chromeless = CHROMELESS_ROUTES.includes(pathname)

  if (chromeless) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
