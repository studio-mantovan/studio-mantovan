import type { Metadata } from 'next'
import { PrenotaClient } from './PrenotaClient'

export const metadata: Metadata = {
  title: 'Prenota la prima visita – Studio Mantovan',
  description: 'Prenota la tua prima visita fisioterapica gratuita con Umberto Mantovan a Broni (PV). Scrivimi su WhatsApp, chiamami o inviami un messaggio.',
}

export default function PrenotaPage() {
  return <PrenotaClient />
}
