'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const TEL = 'tel:+393519242517'
const TEL_DISPLAY = '351 924 2517'
const MAPS_URL = 'https://share.google/Z9RQOLbXwiA9FFpQp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = `text-sm font-semibold transition-colors hover:text-[#1A9EC9] ${
    scrolled ? 'text-[#2C2C2C]' : 'text-[#2C2C2C]'
  }`

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(250,250,248,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 #E5E9EA' : 'none',
        transition: 'background-color 0.35s, box-shadow 0.35s, backdrop-filter 0.35s',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-padding)',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* ── Logo testuale ── */}
        <Link href="/" style={{ flexShrink: 0, textDecoration: 'none', lineHeight: 1.2 }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1A9EC9', letterSpacing: '-0.01em' }}>
            Studio Mantovan
          </div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#2C2C2C99', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Fisioterapia in Movimento
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: '2rem', flex: 1, justifyContent: 'center' }}
        >
          <Link href="/" className={navLinkClass}>Home</Link>
          <Link href="/chi-sono" className={navLinkClass}>Chi sono</Link>
          <Link href="/servizi" className={navLinkClass}>Servizi</Link>
          <Link href="/blog" className={navLinkClass}>Blog</Link>
          <Link href="/dove-trovarmi" className={navLinkClass}>Dove trovarmi</Link>
        </nav>

        {/* ── CTA desktop ── */}
        <div className="hidden md:flex items-center" style={{ gap: '16px', flexShrink: 0 }}>
          <a
            href={MAPS_URL}
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1A9EC9')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
          >
            <MapPin size={14} strokeWidth={2} />
            Via Enzo Togni, 75
          </a>
          <a
            href={TEL}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1A9EC9')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
          >
            <Phone size={14} strokeWidth={2} />
            {TEL_DISPLAY}
          </a>
          <a
            href="/prenota"
            style={{
              background: '#1A9EC9',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              display: 'inline-block',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = '#147FA0'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = '#1A9EC9'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}
          >
            Prenota la prima visita gratuita
          </a>
        </div>

        {/* ── Indirizzo + telefono — sempre visibili su mobile, tra logo e menu ── */}
        <div className="flex md:hidden items-center" style={{ gap: '10px' }}>
          <a
            href={MAPS_URL}
            target="_blank" rel="noopener noreferrer"
            aria-label="Apri l'indirizzo dello studio su Google Maps"
            style={{ display: 'inline-flex', color: '#6B7280', textDecoration: 'none' }}
          >
            <MapPin size={19} strokeWidth={2} />
          </a>
          <a
            href={TEL}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              fontSize: '13px', fontWeight: 700, color: '#1A9EC9',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            <Phone size={15} strokeWidth={2.25} />
            {TEL_DISPLAY}
          </a>
        </div>

        {/* ── Hamburger mobile ── */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#2C2C2C' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          style={{
            background: '#FAFAF8',
            borderTop: '1px solid #F0F4F5',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        >
          <nav
            style={{
              maxWidth: 'var(--container-max)',
              margin: '0 auto',
              padding: '1rem var(--container-padding)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <Link href="/" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Home</Link>
            <Link href="/chi-sono" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Chi sono</Link>
            <Link href="/servizi" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Servizi</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Blog</Link>
            <Link href="/dove-trovarmi" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Dove trovarmi</Link>
            <div style={{ paddingTop: '12px' }}>
              <a
                href="/prenota"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#1A9EC9',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '14px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                }}
              >
                Prenota la prima visita gratuita
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const mobileNavStyle: React.CSSProperties = {
  display: 'block',
  padding: '10px 12px',
  borderRadius: '10px',
  textDecoration: 'none',
  color: '#2C2C2C',
  fontSize: '14px',
  fontWeight: 600,
  transition: 'background 0.15s, color 0.15s',
}
