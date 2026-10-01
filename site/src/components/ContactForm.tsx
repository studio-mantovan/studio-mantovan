'use client'

import { useState } from 'react'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { trackGoogleAdsLeadFormConversion } from '@/lib/google-ads'

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  text:      '#2C2C2C',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  radiusSm:  '8px',
}

/* ─────────────────── MODULO CONTATTI (Web3Forms) ─────────────────── */
export function ContactForm({
  accessKey,
  showEmail = true,
  messageLabel = 'Messaggio',
}: { accessKey?: string; showEmail?: boolean; messageLabel?: string } = {}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: se questo campo (invisibile per un utente reale) risulta compilato, è un bot.
    if (data.get('botcheck')) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    try {
      const payload = {
        access_key: accessKey || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: 'Nuovo messaggio dal sito – Studio Mantovan',
        from_name: 'Sito Studio Mantovan',
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        message: data.get('message'),
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (result.success) {
        trackMetaEvent('Lead')
        trackGoogleAdsLeadFormConversion()
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(result.message || 'Qualcosa è andato storto. Riprova o chiamami al 351 924 2517.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Qualcosa è andato storto. Riprova o chiamami al 351 924 2517.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: C.white, borderRadius: C.radiusLg, padding: '2.5rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)', textAlign: 'center',
      }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(93,191,176,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem',
          fontSize: '1.5rem', color: C.secondary,
        }}>
          ✓
        </div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: C.text, margin: 0 }}>
          Messaggio inviato.
        </h3>
        <p style={{ marginTop: '0.5rem', fontSize: '0.92rem', color: `${C.text}88`, lineHeight: 1.6 }}>
          Grazie — ti risponderò di persona entro 24 ore.
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.85rem 1rem', borderRadius: C.radiusSm,
    border: '1px solid #E0E5E6', fontSize: '0.95rem', color: C.text,
    background: C.white, fontFamily: 'inherit',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.8rem', fontWeight: 700, color: C.text, marginBottom: '0.4rem',
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: C.white, borderRadius: C.radiusLg, padding: '2rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        display: 'flex', flexDirection: 'column', gap: '1.1rem',
      }}
    >
      {/* Honeypot anti-spam — display:none, mai visto né autocompilato da browser reali (anche mobile); i bot che compilano tutti i campi lo riempiono comunque */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>Nome e cognome</label>
          <input id="name" name="name" type="text" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Telefono</label>
          <input id="phone" name="phone" type="tel" required style={inputStyle} />
        </div>
      </div>

      {showEmail && (
        <div>
          <label htmlFor="email" style={labelStyle}>Email <span style={{ fontWeight: 400, color: `${C.text}55` }}>(facoltativo)</span></label>
          <input id="email" name="email" type="email" style={inputStyle} />
        </div>
      )}

      <div>
        <label htmlFor="message" style={labelStyle}>{messageLabel} <span style={{ fontWeight: 400, color: `${C.text}55` }}>(facoltativo)</span></label>
        <textarea id="message" name="message" rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: `${C.text}99`, lineHeight: 1.5 }}>
        <input type="checkbox" name="privacy" required style={{ marginTop: '0.2rem', flexShrink: 0 }} />
        <span>
          Ho letto l&apos;<a href="/privacy" style={{ color: C.primary, fontWeight: 600 }}>informativa sulla privacy</a> e acconsento al trattamento dei miei dati per essere ricontattato.
        </span>
      </label>

      {status === 'error' && (
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#B3413A', fontWeight: 600 }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          background: C.primary, color: '#fff', fontWeight: 700, fontSize: '1rem',
          padding: '14px 28px', borderRadius: '50px', border: 'none',
          cursor: status === 'submitting' ? 'default' : 'pointer',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}
      >
        {status === 'submitting' ? 'Invio in corso…' : 'Prenota la tua visita'}
      </button>
    </form>
  )
}
