declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export const META_PIXEL_ID = '1940242186680276'

export type MetaEventName = 'PageView' | 'Lead'

// Traccia lo stesso evento sia via Pixel (client) sia via CAPI (server),
// con lo stesso event_id: Meta deduplica automaticamente i due segnali.
export function trackMetaEvent(eventName: MetaEventName) {
  if (typeof window === 'undefined') return

  const eventId = crypto.randomUUID()

  window.fbq?.('track', eventName, {}, { eventID: eventId })

  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
    }),
    keepalive: true,
  }).catch(() => {})
}
