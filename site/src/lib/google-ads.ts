declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

// "Invio modulo per i lead (1)" — conversione Google Ads per il modulo contatti del sito.
const GOOGLE_ADS_LEAD_FORM_SEND_TO = 'AW-17629463594/GhTCCLbewIsdEKqIsdZB'

export function trackGoogleAdsLeadFormConversion() {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: GOOGLE_ADS_LEAD_FORM_SEND_TO })
}
