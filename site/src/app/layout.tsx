import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'
import CookieBanner from '@/components/CookieBanner'
import MetaPixel from '@/components/MetaPixel'

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

const jsonLdPhysicalTherapist = {
  '@context': 'https://schema.org',
  '@type': 'PhysicalTherapist',
  name: 'Studio Mantovan – Fisioterapia in Movimento',
  url: 'https://umbertomantovan.net',
  telephone: '+393519242517',
  email: 'studio.mantovan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Enzo Togni 75',
    addressLocality: 'Broni',
    addressRegion: 'PV',
    postalCode: '27043',
    addressCountry: 'IT',
  },
  areaServed: [
    { '@type': 'City', name: 'Broni' },
    { '@type': 'City', name: 'Stradella' },
    { '@type': 'City', name: 'Casteggio' },
    { '@type': 'City', name: 'Canneto Pavese' },
    { '@type': 'City', name: 'Santa Giuletta' },
    { '@type': 'AdministrativeArea', name: 'Oltrepò Pavese' },
  ],
  priceRange: '€€',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '14:00', closes: '19:00' },
  ],
  sameAs: [
    'https://www.instagram.com/studio.mantovan',
    'https://www.facebook.com/studio.mantovan',
  ],
  description:
    'Fisioterapista a Broni, Oltrepò Pavese. Percorsi 1:1 personalizzati, prima visita gratuita. Umberto Mantovan.',
  founder: { '@type': 'Person', name: 'Umberto Mantovan' },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://umbertomantovan.net'),
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPhysicalTherapist) }} />
        <SiteChrome>{children}</SiteChrome>
        <CookieBanner />
        <MetaPixel />
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1940242186680276');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1940242186680276&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  )
}
