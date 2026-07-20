'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackMetaEvent } from '@/lib/meta-pixel'

// Traccia il PageView (Pixel + CAPI) a ogni cambio pagina,
// incluse le navigazioni client-side dell'App Router.
export default function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    trackMetaEvent('PageView')
  }, [pathname])

  return null
}
