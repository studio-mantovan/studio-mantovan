import Link from 'next/link'
import Image from 'next/image'
import { patologie } from '@/lib/patologie'
import { MapPin, Phone, Mail } from 'lucide-react'

function IconInstagram({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white/80">
      {/* CTA strip */}
      <div className="bg-brand-primary">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-800 text-xl leading-snug" style={{ fontWeight: 800 }}>
              Prima visita gratuita, senza impegno.
            </p>
            <p className="text-white/80 text-sm mt-1">Scopri se questo è l&apos;approccio giusto per te.</p>
          </div>
          <a
            href="https://wa.me/393519242517"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-brand-primary font-700 px-6 py-3 rounded-full text-sm hover:bg-brand-bg transition-colors"
            style={{ fontWeight: 700 }}
          >
            Scrivimi su WhatsApp →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image src="/logo.png" alt="Studio Mantovan" width={32} height={32} className="rounded-md opacity-90" />
            <div className="leading-tight">
              <div className="text-white font-700 text-sm">Studio Mantovan</div>
              <div className="text-white/50 text-[10px] uppercase tracking-wide">Fisioterapia in Movimento</div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Fisioterapia 1:1 per tornare alle attività che contano per te. Senza protocolli standard, senza macchinari passivi.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://instagram.com/studio.mantovan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <IconInstagram size={14} />
            </a>
            <a
              href="https://facebook.com/studio.mantovan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <IconFacebook size={14} />
            </a>
          </div>
        </div>

        {/* Patologie */}
        <div>
          <h3 className="text-white font-700 text-sm mb-4 uppercase tracking-wide">Patologie</h3>
          <ul className="flex flex-col gap-2">
            {patologie.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/patologie/${p.slug}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {p.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-white font-700 text-sm mb-4 uppercase tracking-wide">Contatti</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span>
                Studio Mantovan – Fisioterapia in Movimento
                <br />
                Broni (PV), Oltrepò Pavese
              </span>
            </li>
            <li>
              <a href="tel:+393519242517" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={14} className="shrink-0 text-brand-secondary" />
                351 924 2517
              </a>
            </li>
            <li>
              <a
                href="mailto:studio.mantovan@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={14} className="shrink-0 text-brand-secondary" />
                studio.mantovan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Studio Mantovan – Umberto Mantovan. P.IVA 02842510188</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white/60 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
