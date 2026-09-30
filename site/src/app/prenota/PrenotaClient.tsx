'use client'

import { useState } from 'react'
import { trackMetaEvent } from '@/lib/meta-pixel'

const trackContact = () => trackMetaEvent('Lead')

const C = {
  primary:   '#1A9EC9',
  secondary: '#5DBFB0',
  bg:        '#FAFAF8',
  text:      '#2C2C2C',
  surface:   '#F0F4F5',
  white:     '#FFFFFF',
  radiusLg:  '24px',
  radiusSm:  '8px',
  container: '760px',
  pad:       '1.5rem',
}

export function PrenotaClient() {
  return (
    <main style={{ background: C.bg, paddingTop: '68px', minHeight: '100svh' }}>
      <section style={{ padding: `5rem ${C.pad}` }}>
        <div style={{ maxWidth: C.container, margin: '0 auto' }}>

          {/* Titolo */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(26,158,201,0.1)', color: C.primary,
              fontSize: '0.7rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              padding: '6px 14px', borderRadius: '50px', marginBottom: '1rem',
            }}>
              Prima visita gratuita
            </span>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800,
              color: C.text, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0,
            }}>
              Scegli come vuoi
              <br />
              <span style={{ color: C.primary }}>contattarmi.</span>
            </h1>
            <p style={{ marginTop: '1rem', fontSize: '1rem', color: `${C.text}88`, lineHeight: 1.8, maxWidth: '480px', margin: '1rem auto 0' }}>
              Rispondo di persona a tutti i messaggi entro 24 ore.
              Nessuna lista d&apos;attesa — puoi iniziare subito.
            </p>
          </div>

          {/* Canali diretti */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/393519242517"
              target="_blank" rel="noopener noreferrer"
              onClick={trackContact}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                background: C.white, borderRadius: C.radiusLg,
                padding: '1.75rem', textDecoration: 'none',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#25D366'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(37,211,102,0.15)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'rgba(37,211,102,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="#25D366">
                  <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.354.638 4.638 1.849 6.638L2.667 29.333l6.854-1.797A13.285 13.285 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16c0-7.362-5.968-13.333-13.33-13.333zm0 24.267a11.01 11.01 0 0 1-5.617-1.541l-.402-.239-4.068 1.067 1.085-3.962-.263-.412A10.98 10.98 0 0 1 5.003 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.03-8.23c-.33-.165-1.954-.964-2.257-1.074-.303-.11-.523-.165-.744.165-.22.33-.853 1.074-1.046 1.294-.193.22-.385.248-.715.083-.33-.165-1.394-.514-2.656-1.638-.982-.874-1.645-1.953-1.837-2.283-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.794-1.019-2.456-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.881.413-.303.33-1.156 1.129-1.156 2.754s1.184 3.194 1.349 3.414c.165.22 2.33 3.558 5.648 4.991.79.341 1.406.544 1.886.697.792.252 1.514.216 2.084.131.636-.095 1.954-.799 2.23-1.571.275-.771.275-1.432.193-1.571-.083-.138-.303-.22-.633-.385z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: C.text, marginBottom: '0.2rem' }}>
                  Scrivimi su WhatsApp
                </div>
                <div style={{ fontSize: '0.82rem', color: `${C.text}66`, lineHeight: 1.5 }}>
                  Il modo più rapido — rispondo subito
                </div>
              </div>
              <div style={{ marginLeft: 'auto', color: `${C.text}33`, fontSize: '1.2rem' }}>→</div>
            </a>

            {/* Chiamata */}
            <a
              href="tel:+393519242517"
              onClick={trackContact}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                background: C.white, borderRadius: C.radiusLg,
                padding: '1.75rem', textDecoration: 'none',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = C.primary
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(26,158,201,0.15)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'rgba(26,158,201,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1A9EC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: C.text, marginBottom: '0.2rem' }}>
                  Chiama il 351 924 2517
                </div>
                <div style={{ fontSize: '0.82rem', color: `${C.text}66`, lineHeight: 1.5 }}>
                  Lun, Mer, Gio 08–20 · Sab 14–19
                </div>
              </div>
              <div style={{ marginLeft: 'auto', color: `${C.text}33`, fontSize: '1.2rem' }}>→</div>
            </a>
          </div>

          {/* Separatore */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.75rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#E5E9EA' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: `${C.text}55`, whiteSpace: 'nowrap' }}>
              oppure scrivimi qui
            </span>
            <div style={{ flex: 1, height: '1px', background: '#E5E9EA' }} />
          </div>

          <ContactForm />

        </div>
      </section>
    </main>
  )
}

/* ─────────────────── MODULO CONTATTI (Web3Forms) ─────────────────── */
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: se questo campo (invisibile per un utente reale) risulta compilato, è un bot.
    if (String(data.get('botcheck') || '').length > 0) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(result.message || 'Qualcosa è andato storto. Riprova o scrivimi su WhatsApp.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Qualcosa è andato storto. Riprova o scrivimi su WhatsApp.')
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
      {/* Honeypot anti-spam — invisibile per le persone, i bot lo compilano */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>Nome e cognome</label>
          <input id="name" name="name" type="text" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input id="email" name="email" type="email" required style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>Telefono <span style={{ fontWeight: 400, color: `${C.text}55` }}>(facoltativo)</span></label>
        <input id="phone" name="phone" type="tel" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Messaggio</label>
        <textarea id="message" name="message" required rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
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
        {status === 'submitting' ? 'Invio in corso…' : 'Invia messaggio'}
      </button>
    </form>
  )
}
