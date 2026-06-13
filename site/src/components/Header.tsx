'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { patologie } from '@/lib/patologie'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
        backgroundColor: scrolled ? 'rgba(250,250,248,0.97)' : 'rgba(250,250,248,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 0 #E5E9EA' : 'none',
        transition: 'background-color 0.3s, box-shadow 0.3s',
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
        {/* ── Logo ── */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="Studio Mantovan – Fisioterapia in Movimento"
            width={52}
            height={52}
            priority
            style={{ display: 'block' }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: '2rem', flex: 1, justifyContent: 'center' }}
        >
          <Link href="/" className={navLinkClass}>Home</Link>

          {/* Dropdown patologie */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={navLinkClass}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              aria-expanded={dropdownOpen}
            >
              Patologie
              <ChevronDown
                size={14}
                style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '12px',
                  width: '260px',
                  zIndex: 100,
                }}
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(26,158,201,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                    border: '1px solid #F0F4F5',
                    padding: '8px',
                    overflow: 'hidden',
                  }}
                >
                  {patologie.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/patologie/${p.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        color: '#2C2C2C',
                        fontSize: '14px',
                        fontWeight: 600,
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => {
                        ;(e.currentTarget as HTMLAnchorElement).style.background = '#F0F4F5'
                        ;(e.currentTarget as HTMLAnchorElement).style.color = '#1A9EC9'
                      }}
                      onMouseLeave={e => {
                        ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                        ;(e.currentTarget as HTMLAnchorElement).style.color = '#2C2C2C'
                      }}
                    >
                      <span style={{ fontSize: '18px', lineHeight: 1 }}>{p.emoji}</span>
                      <span style={{ lineHeight: 1.3 }}>{p.nome}</span>
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid #F0F4F5', marginTop: '8px', paddingTop: '8px' }}>
                    <Link
                      href="/patologie"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#1A9EC9',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'background 0.15s',
                      }}
                    >
                      Tutte le patologie →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className={navLinkClass}>Blog</Link>
          <Link href="/chi-sono" className={navLinkClass}>Chi sono</Link>
        </nav>

        {/* ── CTA desktop ── */}
        <div className="hidden md:flex items-center" style={{ gap: '12px', flexShrink: 0 }}>
          <a
            href="tel:+393519242517"
            style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1A9EC9')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
          >
            351 924 2517
          </a>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
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
            Visita gratuita
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
            <div style={{ padding: '8px 12px 4px', fontSize: '11px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Patologie
            </div>
            {patologie.map((p) => (
              <Link key={p.slug} href={`/patologie/${p.slug}`} onClick={() => setMobileOpen(false)}
                style={{ ...mobileNavStyle, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>{p.emoji}</span>{p.nome}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #F0F4F5', margin: '8px 0 4px' }} />
            <Link href="/blog" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Blog</Link>
            <Link href="/chi-sono" onClick={() => setMobileOpen(false)} style={mobileNavStyle}>Chi sono</Link>
            <div style={{ paddingTop: '12px' }}>
              <a
                href="https://wa.me/393519242517"
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
                Prenota la visita gratuita
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
