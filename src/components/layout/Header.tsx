'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronDown,
  LogIn,
  TrendingUp,
  Phone,
  X,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MOBILE_OPEN_EVENT = 'murivest:mobile-open'

/* ──────────────────────────────────────────────────────────────
   MURIVEST — REVISED INSTITUTIONAL HEADER
   Theme:
   - Forest Green Header
   - White Navigation
   - White Header on Scroll
   - Black Text on Scroll
────────────────────────────────────────────────────────────── */

const NAV = {
  capital: {
    label: 'Capital Markets',
    description: 'Institutional advisory and underwriting',
    items: [
      {
        label: 'Underwrite a Deal',
        href: '/cre-underwriting',
        description: 'Submit a deal for underwriting review',
        accent: true,
      },
      {
        label: 'Due Diligence',
        href: '/due-diligence',
        description: 'Legal, technical, and investment due diligence',
      },
      {
        label: 'Institutional Partners',
        href: '/institutional-investors',
        description: 'Family offices and institutional co-investment',
      },
      {
        label: 'Submit a Property',
        href: '/sell',
        description: 'Mandate Murivest as your advisor',
      },
    ],
  },

  portfolio: {
    label: 'Portfolio',
    markets: [
      {
        region: 'East Africa',
        flag: '🇰🇪',
        items: [
          {
            label: 'Kenya Portfolio',
            href: '/properties',
            sub: 'Nairobi · Coast · Commercial',
          },
          {
            label: 'Land Portfolio',
            href: '/land-portfolio',
            sub: 'Strategic land banking',
          },
        ],
      },

      {
        region: 'United Kingdom',
        flag: '🇬🇧',
        items: [
          {
            label: 'UK Portfolio',
            href: '/uk-properties',
            sub: 'London · Regional Cities',
          },
        ],
      },

      {
        region: 'United Arab Emirates',
        flag: '🇦🇪',
        items: [
          {
            label: 'UAE Portfolio',
            href: '/uae-properties',
            sub: 'Dubai · Abu Dhabi',
          },
        ],
      },

      {
        region: 'United States',
        flag: '🇺🇸',
        items: [
          {
            label: 'US Portfolio',
            href: '/us-properties',
            sub: 'Major Metro Markets',
          },
        ],
      },
    ],
    quicklinks: [
      { label: 'Land', href: '/land-portfolio' },
      { label: 'International', href: '/international-properties' },
    ],
  },

  intelligence: {
    label: 'Intelligence',
    description: 'Research and market analytics',
    items: [
      {
        label: 'Research',
        href: '/research',
        description: 'Market reports and investment insights',
      },
      {
        label: 'CRE Insights',
        href: '/insights-cre',
        description: 'Commercial real estate commentary',
      },
      {
        label: 'Market Data',
        href: '/market-data',
        description: 'Pricing and transaction intelligence',
      },
      {
        label: 'CRE News',
        href: '/videos',
        description: 'Video market commentary',
      },
    ],
  },

  firm: {
    label: 'The Firm',
    description: 'Corporate identity and advisory structure',
    items: [
      {
        label: 'About',
        href: '/about',
        description: 'Murivest overview',
      },
      {
        label: 'Leadership',
        href: '/leadership',
        description: 'Advisory board and directors',
      },
      {
        label: 'Compliance',
        href: '/compliance',
        description: 'Regulatory status',
      },
      {
        label: 'Careers',
        href: '/careers',
        description: 'Join the Murivest team',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Private office contact',
      },
    ],
  },
}



/* ──────────────────────────────────────────────────────────────
   STANDARD MEGA MENU
────────────────────────────────────────────────────────────── */

const StandardMegaMenu = ({
  section,
  onClose,
}: {
  section: any
  onClose: () => void
}) => (
  <div className="absolute left-0 top-[calc(100%+1px)] w-[420px] bg-white border border-neutral-200 shadow-2xl z-50">
    <div className="p-8">
      <p className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
        {section.description}
      </p>

      <h3 className="text-2xl font-serif text-black mb-6">
        {section.label}
      </h3>

      <div className="space-y-1">
        {section.items.map((item: any) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block p-4 transition-all duration-300 hover:bg-neutral-50 border-b border-neutral-100 ${
              item.accent ? 'bg-[#1B4332]/5' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-[14px] ${
                  item.accent
                    ? 'font-semibold text-[#1B4332]'
                    : 'text-black'
                }`}
              >
                {item.label}
              </span>

              <div className="h-[1px] w-0 bg-[#1B4332] group-hover:w-4 transition-all" />
            </div>

            <p className="text-[11px] text-neutral-500 mt-1">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────────────────────────
   PORTFOLIO MENU
────────────────────────────────────────────────────────────── */

const PortfolioMegaMenu = ({
  onClose,
}: {
  onClose: () => void
}) => (
  <div className="absolute left-0 top-[calc(100%+1px)] w-[720px] bg-white border border-neutral-200 shadow-2xl z-50">
    <div className="p-8">
      <p className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
        Global Real Estate Mandates
      </p>

      <h3 className="text-2xl font-serif text-black mb-8">
        Portfolio
      </h3>

      <div className="grid grid-cols-2 gap-8">
        {NAV.portfolio.markets.map((market) => (
          <div key={market.region}>
            <div className="flex items-center gap-2 mb-4">
              <span>{market.flag}</span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {market.region}
              </span>
            </div>

            <div className="space-y-2">
              {market.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block p-3 hover:bg-neutral-50 transition-colors"
                >
                  <div className="text-[14px] text-black">
                    {item.label}
                  </div>

                  <div className="text-[11px] text-neutral-500 mt-1">
                    {item.sub}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────────────────────────
   NAV ITEM
────────────────────────────────────────────────────────────── */

const MobileSection = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-[#2D5A45]/30 last:border-b-0">
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full py-5 px-6 hover:bg-[#2D5A45]/10 transition-colors"
      style={{ minHeight: 56 }}
    >
      <span className="text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium">{title}</span>
      <ChevronDown size={15} className={`text-[#B8956B] transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden bg-[#163828]/40"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

  // ── Mobile link list helper ────────────────────────────────────────────────
  const MobileLinks = ({ items }: { items: { label: string; href: string; description?: string }[] }) => (
    <ul className="py-3 px-4 space-y-0.5">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="block py-3 px-3 text-[13px] text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20 transition-all rounded-sm"
            style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

const NavItem = ({
  label,
  children,
  scrolled,
}: {
  label: string
  children: (close: () => void) => React.ReactNode
  scrolled: boolean
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () =>
      document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 py-8 ${
          scrolled
            ? 'text-black hover:text-[#1B4332]'
            : 'text-white hover:text-neutral-200'
        }`}
      >
        {label}

        <ChevronDown
          size={11}
          className={`transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {children(() => setOpen(false))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────
   MAIN HEADER
────────────────────────────────────────────────────────────── */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [section, setSection] = useState<string | null>(null)

  const toggleSection = (name: string) => {
    setSection((prev) => (prev === name ? null : name))
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)

    return () =>
      window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (event: Event) => {
      const { detail } = event as CustomEvent<boolean>

      if (typeof detail === 'boolean') {
        setMobileOpen(detail)
      }
    }

    window.addEventListener(MOBILE_OPEN_EVENT, handler)

    return () =>
      window.removeEventListener(MOBILE_OPEN_EVENT, handler)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-500 ${
          scrolled
            ? 'bg-white border-b border-neutral-200 shadow-sm'
            : 'bg-[#1B4332]'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 xl:px-12">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            {/* BRANDING - Club Letterhead Style */}
            <a href="/" className="flex flex-col min-w-fit group shrink-0">
              <span className={`text-xl md:text-2xl font-serif tracking-[0.1em] transition-colors duration-500 ${
                scrolled ? 'text-[#1B4332] group-hover:text-[#B8956B]' : 'text-[#F8F7F4]'
              }`}>
                MURIVEST
              </span>
              <span className={`text-[8px] md:text-[9px] tracking-[0.4em] font-light uppercase -mt-1 transition-colors duration-500 ${
                scrolled ? 'text-[#B8956B]' : 'text-[#C4B59D]'
              }`}>
                Nairobi Private Office
              </span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center gap-8">
              <NavItem
                label="Capital Markets"
                scrolled={scrolled}
              >
                {(close) => (
                  <StandardMegaMenu
                    section={NAV.capital}
                    onClose={close}
                  />
                )}
              </NavItem>

              <NavItem
                label="Portfolio"
                scrolled={scrolled}
              >
                {(close) => (
                  <PortfolioMegaMenu onClose={close} />
                )}
              </NavItem>

              <NavItem
                label="Intelligence"
                scrolled={scrolled}
              >
                {(close) => (
                  <StandardMegaMenu
                    section={NAV.intelligence}
                    onClose={close}
                  />
                )}
              </NavItem>

              <NavItem
                label="The Firm"
                scrolled={scrolled}
              >
                {(close) => (
                  <StandardMegaMenu
                    section={NAV.firm}
                    onClose={close}
                  />
                )}
              </NavItem>

              {/* Divider */}
              <div
                className={`w-px h-5 ${
                  scrolled
                    ? 'bg-neutral-300'
                    : 'bg-white/20'
                }`}
              />

              {/* Portal */}
              <a
                href="/login"
                className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-black hover:text-[#1B4332]'
                    : 'text-white hover:text-neutral-200'
                }`}
              >
                <LogIn size={13} />

                Investor Portal
              </a>

              {/* CTA */}
              <a
                href="/cre-underwriting"
                className={`px-5 py-3 border text-[10px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  scrolled
                    ? 'border-black text-black hover:bg-black hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#1B4332]'
                }`}
              >
                <TrendingUp size={13} />

                Underwrite
              </a>
            </nav>

            {/* ── Mobile actions ────────────────────────────────── */}
            <div className="flex items-center gap-3 xl:hidden">
              <a href="/investor-portal"
                className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${
                  scrolled ? 'text-[#1B4332]' : 'text-[#C4B59D]'
                }`}
                style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
              >
                <LogIn size={14} strokeWidth={1.5} />
              </a>
 
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 -mr-2 flex flex-col items-end gap-1.5"
                style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}
                aria-label="Open navigation"
              >
                <div className={`w-6 h-[1px] transition-colors duration-500 ${scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'}`} />
                <div className={`w-4 h-[1px] transition-colors duration-500 ${scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>
 
      {/* ── MOBILE PANEL ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#0A1F15]/80 z-[60] xl:hidden"
              style={{ WebkitBackdropFilter: 'blur(6px)', backdropFilter: 'blur(6px)' }}
              onClick={() => setMobileOpen(false)}
            />
 
            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] bg-[#1B4332] z-[70] xl:hidden overflow-hidden flex flex-col"
              style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D5A45]/40 shrink-0">
                <div>
                  <p className="text-[#F8F7F4] font-serif text-[15px] tracking-[0.15em] uppercase">Murivest</p>
                  <p className="text-[#B8956B] text-[9px] tracking-[0.3em] uppercase mt-0.5">Realty · Advisory</p>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-[#C4B59D] hover:text-white transition-colors" style={{ minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X size={22} strokeWidth={1} />
                </button>
              </div>
 
              {/* Investor portal banner */}
              <div className="px-6 py-4 border-b border-[#2D5A45]/30 bg-[#2D5A45]/15 shrink-0">
                <a href="/investor-portal" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B8956B] flex items-center justify-center shrink-0">
                    <LogIn size={15} strokeWidth={1.5} className="text-[#B8956B]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B]">Investor Portal</p>
                    <p className="text-[13px] text-[#F8F7F4]">Login / Register</p>
                  </div>
                  <ChevronDown size={14} className="ml-auto text-[#B8956B] -rotate-90" />
                </a>
              </div>
 
              {/* Scrollable nav */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <nav className="py-2">
                  <MobileSection title="Capital Markets" isOpen={section === 'capital'} onToggle={() => toggleSection('capital')}>
                    <MobileLinks items={NAV.capital.items} />
                  </MobileSection>
 
                  <MobileSection title="Portfolio" isOpen={section === 'portfolio'} onToggle={() => toggleSection('portfolio')}>
                    <div className="py-3 px-4 space-y-4">
                      {NAV.portfolio.markets.map((market) => (
                        <div key={market.region}>
                          <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] px-3 mb-1">
                            {market.flag} {market.region}
                          </p>
                          {market.items.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                              className="block py-3 px-3 text-[13px] text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20 transition-all rounded-sm"
                              style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                      <div className="border-t border-[#2D5A45]/30 pt-3">
                        <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] px-3 mb-2">By Category</p>
                        <div className="flex flex-wrap gap-2 px-3 pb-2">
                          {NAV.portfolio.quicklinks.map((ql) => (
                            <a key={ql.href} href={ql.href} onClick={() => setMobileOpen(false)}
                              className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase border border-[#2D5A45] text-[#C4B59D] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors rounded-none"
                            >
                              {ql.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MobileSection>
 
                  <MobileSection title="Intelligence" isOpen={section === 'intelligence'} onToggle={() => toggleSection('intelligence')}>
                    <MobileLinks items={NAV.intelligence.items} />
                  </MobileSection>
 
                  <MobileSection title="The Firm" isOpen={section === 'firm'} onToggle={() => toggleSection('firm')}>
                    <MobileLinks items={NAV.firm.items} />
                  </MobileSection>
                </nav>
 
                {/* CTA block */}
                <div className="p-5 space-y-2.5 border-t border-[#2D5A45]/30">
                  <a href="/cre-underwriting" onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#B8956B] text-[#1B4332] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#C4B59D] transition-colors"
                    style={{ minHeight: 48 }}
                  >
                    <TrendingUp size={13} strokeWidth={2} />
                    Underwrite a Deal
                  </a>
                  <a href="/contact" onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 border border-[#B8956B] text-[#B8956B] text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B]/10 transition-colors"
                    style={{ minHeight: 48 }}
                  >
                    <Phone size={13} strokeWidth={1.5} />
                    Request Consultation
                  </a>
                </div>
 
                {/* Footer */}
                <div className="px-6 py-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-10 h-[1px] bg-[#B8956B]/30" />
                    <span className="text-[8px] tracking-[0.35em] uppercase text-[#5A7A6A]">Murivest</span>
                    <div className="w-10 h-[1px] bg-[#B8956B]/30" />
                  </div>
                  <p className="text-[9px] text-[#5A7A6A] tracking-wide">
                    Nairobi · Dubai · London
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <a href="/compliance" onClick={() => setMobileOpen(false)}
                      className="text-[8px] tracking-[0.2em] uppercase text-[#5A7A6A] hover:text-[#B8956B] transition-colors"
                    >
                      EARB · RERA Regulated
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
 
      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  )
}

function setMobileOpen(arg0: boolean): void {
  if (typeof window === 'undefined') return

  window.dispatchEvent(
    new CustomEvent<boolean>(MOBILE_OPEN_EVENT, {
      detail: arg0,
    }),
  )
}
