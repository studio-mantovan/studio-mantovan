import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { META_PIXEL_ID } from '@/lib/meta-pixel'

const ALLOWED_EVENTS = new Set(['PageView', 'Lead'])
const GRAPH_API_VERSION = 'v21.0'

interface TrackRequestBody {
  event_name?: string
  event_id?: string
  event_source_url?: string
}

export async function POST(request: NextRequest) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!accessToken) {
    // CAPI non ancora configurata (manca il token di sistema Meta in .env.local):
    // non blocchiamo il client, semplicemente non inviamo nulla.
    return NextResponse.json({ skipped: true })
  }

  const body: TrackRequestBody | null = await request.json().catch(() => null)
  const eventName = body?.event_name
  const eventId = body?.event_id

  if (!eventName || !ALLOWED_EVENTS.has(eventName) || typeof eventId !== 'string') {
    return NextResponse.json({ error: 'Payload non valido' }, { status: 400 })
  }

  const headersList = await headers()
  const cookieStore = await cookies()

  const clientIp =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    undefined

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: body?.event_source_url,
        action_source: 'website',
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: headersList.get('user-agent') || undefined,
          fbp: cookieStore.get('_fbp')?.value,
          fbc: cookieStore.get('_fbc')?.value,
        },
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE
      ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE }
      : {}),
  }

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  if (!res.ok) {
    console.error('Meta CAPI error:', await res.text())
    return NextResponse.json({ error: 'Invio a Meta fallito' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
