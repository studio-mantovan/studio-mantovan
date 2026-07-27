import type { Metadata } from 'next'
import { getZonaServita } from '@/lib/zoneServite'
import { ZonaServitaPage } from '@/components/ZonaServitaPage'

const zona = getZonaServita('casteggio')!

export const metadata: Metadata = {
  title: zona.metaTitle,
  description: zona.metaDescription,
  alternates: { canonical: '/fisioterapia-casteggio' },
}

export default function FisioterapiaCasteggioPage() {
  return <ZonaServitaPage slug="casteggio" />
}
