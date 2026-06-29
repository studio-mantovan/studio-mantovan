import type { Metadata } from 'next'
import { getZonaServita } from '@/lib/zoneServite'
import { ZonaServitaPage } from '@/components/ZonaServitaPage'

const zona = getZonaServita('stradella')!

export const metadata: Metadata = {
  title: zona.metaTitle,
  description: zona.metaDescription,
}

export default function FisioterapiaStradellaPage() {
  return <ZonaServitaPage slug="stradella" />
}
