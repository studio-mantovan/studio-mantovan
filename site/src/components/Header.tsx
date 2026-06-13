'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { patologie } from '@/lib/patologie'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.png" alt="Studio Mantovan" width={36} height={36} className="rounded-lg" />
          <div className="leading-tight">
            <div className="text-sm font-800 text-brand-text" style={{ fontWeight: 800 }}>Studio Mantovan</div>
            <div className="text-[10px] text-brand-text/50 font-500 tracking-wide uppercase">Fisioterapia in Movimento</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-600 text-brand-text/70">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>

          {/* Patologie dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-brand-primary transition-colors"
              aria-expanded={dropdownOpen}
            >
              Patologie
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="bg-white rounded-2xl shadow-xl border border-brand-surface p-2 overflow-hidden">
                  {patologie.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/patologie/${p.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-surface transition-colors group"
                    >
                      <span className="text-lg">{p.emoji}</span>
                      <span className="text-sm font-600 text-brand-text group-hover:text-brand-primary transition-colors leading-tight">
                        {p.nome}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-brand-surface mt-2 pt-2">
                    <Link
                      href="/patologie"
                      className="flex items-center justify-center px-3 py-2 text-xs font-600 text-brand-primary hover:bg-brand-surface rounded-xl transition-colors"
                    >
                      Tutte le patologie →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-brand-primary transition-colors">
            Blog
          </Link>
          <Link href="/chi-sono" className="hover:text-brand-primary transition-colors">
            Chi sono
          </Link>
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+393519242517"
            className="flex items-center gap-1.5 text-sm text-brand-text/60 hover:text-brand-primary transition-colors"
          >
            <Phone size={13} />
            351 924 2517
          </a>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary hover:bg-brand-primary-dark text-white text-sm font-700 px-4 py-2 rounded-full transition-all hover:-translate-y-px"
            style={{ fontWeight: 700 }}
          >
            Visita gratuita
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-brand-text/70 hover:text-brand-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-surface shadow-xl">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm font-600 text-brand-text hover:text-brand-primary hover:bg-brand-surface rounded-xl transition-colors"
            >
              Home
            </Link>

            <div className="px-3 py-1.5 text-xs font-700 text-brand-text/40 uppercase tracking-wider mt-1">
              Patologie
            </div>
            {patologie.map((p) => (
              <Link
                key={p.slug}
                href={`/patologie/${p.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-500 text-brand-text hover:text-brand-primary hover:bg-brand-surface rounded-xl transition-colors"
              >
                <span>{p.emoji}</span>
                {p.nome}
              </Link>
            ))}

            <div className="border-t border-brand-surface mt-2 pt-2 flex flex-col gap-1">
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-600 text-brand-text hover:text-brand-primary hover:bg-brand-surface rounded-xl transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/chi-sono"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-600 text-brand-text hover:text-brand-primary hover:bg-brand-surface rounded-xl transition-colors"
              >
                Chi sono
              </Link>
            </div>

            <div className="border-t border-brand-surface mt-2 pt-3">
              <a
                href="https://wa.me/393519242517"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-primary text-white font-700 py-3 rounded-full text-sm transition-colors hover:bg-brand-primary-dark"
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
