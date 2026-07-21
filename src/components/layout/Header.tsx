'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST — REVISED INSTITUTIONAL HEADER
// Harvard Business Review Editorial Format · Golf Club Lounge Aesthetic
// Forest Green #1B4332 · Brass #B8956B · Cream #FAF9F6
// ──────────────────────────────────────────────────────────────

import { usePathname } from 'next/navigation'
import { countryNavConfig, type CountrySlug } from '@/lib/country-nav-config'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ChevronDown,
  LogIn,
  TrendingUp,
  Phone,
  X,
  MapPin,
  ArrowUpRight,
  Globe,
  Building2,
  BarChart3,
  FileText,
  Users,
  BookOpen,
  Menu,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MOBILE_OPEN_EVENT = 'murivest:mobile-open'

/* ═══════════════════════════════════════════════════════════════
   GLOBAL NAVIGATION CONFIGURATION
   ═══════════════════════════════════════════════════════════════ */

const GLOBAL_NAV = {
  capital: {
    label: 'Capital Markets',
    description: 'Institutional advisory and underwriting',
    icon: BarChart3,
    items: [
      {
        label: 'Underwrite a Deal',
        href: '/cre-underwriting',
        description: 'Submit a deal for institutional review',
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
        description: 'Family offices and sovereign co-investment',
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
    description: 'Global real estate mandates',
    icon: Building2,
    markets: [
      {
        region: 'East Africa',
        flag: '🇰🇪',
        items: [
          { label: 'Kenya Portfolio', href: '/kenya', sub: 'Nairobi · Mombasa · Coast' },
          { label: 'Land Portfolio', href: '/land-portfolio', sub: 'Strategic land banking' },
        ],
      },
      {
        region: 'Gulf & Middle East',
        flag: '🇦🇪',
        items: [
          { label: 'UAE Portfolio', href: '/united-arab-emirates', sub: 'Dubai · Abu Dhabi · Sharjah' },
        ],
      },
      {
        region: 'Southeast Asia',
        flag: '🇸🇬',
        items: [
          { label: 'Singapore Portfolio', href: '/singapore', sub: 'Core · Value-Add · Development' },
          { label: 'Thailand Portfolio', href: '/thailand', sub: 'Bangkok · Phuket · Hospitality' },
        ],
      },
      {
        region: 'Western Europe',
        flag: '🇬🇧',
        items: [
          { label: 'UK Portfolio', href: '/united-kingdom', sub: 'London · Regional Cities' },
        ],
      },
      {
        region: 'North America',
        flag: '🇺🇸',
        items: [
          { label: 'US Portfolio', href: '/united-states', sub: 'Major Metro Markets' },
        ],
      },
      {
        region: 'Sub-Saharan Africa',
        flag: '🇿🇦',
        items: [
          { label: 'South Africa Portfolio', href: '/south-africa', sub: 'Johannesburg · Cape Town' },
        ],
      },
    ],
    quicklinks: [
      { label: 'International Properties', href: '/international-properties' },
      { label: 'Land Portfolio', href: '/land-portfolio' },
      { label: 'Off-Market', href: '/off-market' },
    ],
  },

  intelligence: {
    label: 'Intelligence',
    description: 'Research and market analytics',
    icon: BookOpen,
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
        label: 'Video Commentary',
        href: '/videos',
        description: 'Executive market briefings',
      },
    ],
  },

  firm: {
    label: 'The Firm',
    description: 'Corporate identity and advisory structure',
    icon: Users,
    items: [
      {
        label: 'About',
        href: '/about',
        description: 'Murivest overview and philosophy',
      },
      {
        label: 'Leadership',
        href: '/leadership',
        description: 'Advisory board and directors',
      },
      {
        label: 'Compliance',
        href: '/compliance',
        description: 'Regulatory status and licences',
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

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS — Golf Club Lounge Aesthetic
   ═══════════════════════════════════════════════════════════════ */

const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  forestDark: '#0F2E22',
  forestDeep: '#163828',
  brass: '#B8956B',
  brassLight: '#C4B59D',
  brassPale: '#D4C4A8',
  cream: '#FAF9F6',
  creamWarm: '#F8F7F4',
  sage: '#5A7A6A',
  sageMuted: '#6B8A7A',
  charcoal: '#1A1A1A',
  stone: '#8A8A8A',
  border: 'rgba(45, 90, 69, 0.25)',
}

/* ═══════════════════════════════════════════════════════════════
   MEGA MENU COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

const StandardMegaMenu = ({
  section,
  onClose,
}: {
  section: any
  onClose: () => void
}) => {
  const Icon = section.icon || FileText

  return (
    <div className="absolute left-0 top-[calc(100%+1px)] w-[440px] bg-[#FAF9F6] border border-[#2D5A45]/15 shadow-[0_8px_40px_rgba(0,0,0,0.12)] z-50">
      <div className="p-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-1">
          <Icon size={16} strokeWidth={1.5} className="text-[#B8956B]" />
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A]">
            {section.description}
          </p>
        </div>

        <h3 className="text-2xl font-serif text-[#1B4332] mb-6 tracking-tight">
          {section.label}
        </h3>

        <div className="space-y-0">
          {section.items.map((item: any) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`group block p-4 transition-all duration-300 border-b border-[#2D5A45]/10 last:border-b-0 ${
                item.accent ? 'bg-[#1B4332]/[0.03]' : 'hover:bg-[#1B4332]/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[13px] tracking-wide ${
                    item.accent
                      ? 'font-semibold text-[#1B4332]'
                      : 'text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-[11px] text-[#8A8A8A] mt-1 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const PortfolioMegaMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="absolute left-0 top-[calc(100%+1px)] w-[800px] bg-[#FAF9F6] border border-[#2D5A45]/15 shadow-[0_8px_40px_rgba(0,0,0,0.12)] z-50">
    <div className="p-8">
      <div className="flex items-center gap-3 mb-1">
        <Building2 size={16} strokeWidth={1.5} className="text-[#B8956B]" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A]">
          Global Real Estate Mandates
        </p>
      </div>

      <h3 className="text-2xl font-serif text-[#1B4332] mb-8 tracking-tight">
        Portfolio
      </h3>

      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {GLOBAL_NAV.portfolio.markets.map((market) => (
          <div key={market.region}>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2D5A45]/10">
              <span className="text-base">{market.flag}</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A7A6A] font-medium">
                {market.region}
              </span>
            </div>

            <div className="space-y-1">
              {market.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group block p-2.5 -mx-2.5 rounded-sm hover:bg-[#1B4332]/[0.03] transition-colors"
                >
                  <div className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-[#8A8A8A] mt-0.5 leading-relaxed">
                    {item.sub}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick links footer */}
      <div className="mt-6 pt-4 border-t border-[#2D5A45]/10">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A7A6A] mb-3">
          Quick Access
        </p>
        <div className="flex flex-wrap gap-2">
          {GLOBAL_NAV.portfolio.quicklinks.map((ql) => (
            <a
              key={ql.href}
              href={ql.href}
              onClick={onClose}
              className="px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase border border-[#2D5A45]/20 text-[#5A7A6A] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
            >
              {ql.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const MarketsMegaMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="absolute right-0 top-[calc(100%+1px)] w-[380px] bg-[#FAF9F6] border border-[#2D5A45]/15 shadow-[0_8px_40px_rgba(0,0,0,0.12)] z-50">
    <div className="p-8">
      <div className="flex items-center gap-3 mb-1">
        <Globe size={16} strokeWidth={1.5} className="text-[#B8956B]" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A]">
          Regional Coverage
        </p>
      </div>

      <h3 className="text-2xl font-serif text-[#1B4332] mb-6 tracking-tight">
        Markets
      </h3>

      <div className="space-y-0">
        {Object.entries(countryNavConfig).map(([slug, market]) => (
          <a
            key={slug}
            href={`/${slug}`}
            onClick={onClose}
            className="group flex items-center justify-between p-4 hover:bg-[#1B4332]/[0.03] transition-colors border-b border-[#2D5A45]/10 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{market.flag}</span>
              <div>
                <span className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors block">
                  {market.label}
                </span>
                <span className="text-[10px] text-[#8A8A8A] tracking-wide">
                  {market.dateline}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#5A7A6A] tracking-[0.15em] uppercase block">
                {market.listingCount} Mandates
              </span>
              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
                className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-0.5"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
)

/* ═══════════════════════════════════════════════════════════════
   NAV ITEM COMPONENT — Desktop Dropdown
   ═══════════════════════════════════════════════════════════════ */

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
  const [clicked, setClicked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setClicked(false)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [close])

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (!clicked) {
      timerRef.current = setTimeout(() => setOpen(false), 150)
    }
  }

  const handleClick = () => {
    setClicked((c) => !c)
    setOpen((o) => !o)
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 py-8 outline-none ${
          scrolled
            ? open
              ? 'text-[#1B4332]'
              : 'text-[#1A1A1A] hover:text-[#1B4332]'
            : open
              ? 'text-[#B8956B]'
              : 'text-[#FAF9F6] hover:text-[#C4B59D]'
        }`}
      >
        {label}
        <ChevronDown
          size={11}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {children(close)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

const MobileSection = ({
  title,
  children,
  isOpen,
  onToggle,
  icon: Icon,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
}) => (
  <div className="border-b border-[#2D5A45]/30 last:border-b-0">
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full py-5 px-6 hover:bg-[#2D5A45]/10 transition-colors"
      style={{ minHeight: 56 }}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon size={14} strokeWidth={1.5} className="text-[#B8956B]" />}
        <span className="text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium">
          {title}
        </span>
      </div>
      <ChevronDown
        size={15}
        strokeWidth={1.5}
        className={`text-[#B8956B] transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
      />
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
)

const MobileLinks = ({
  items,
  onClose,
}: {
  items: { label: string; href: string; description?: string; accent?: boolean }[]
  onClose: () => void
}) => (
  <ul className="py-3 px-4 space-y-0.5">
    {items.map((item) => (
      <li key={item.href}>
        <a
          href={item.href}
          onClick={onClose}
          className={`block py-3 px-3 text-[13px] transition-all rounded-sm ${
            item.accent
              ? 'text-[#B8956B] font-medium bg-[#B8956B]/10'
              : 'text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20'
          }`}
          style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
        >
          {item.label}
          {item.description && (
            <span className="ml-auto text-[10px] text-[#5A7A6A] hidden sm:block">
              {item.description}
            </span>
          )}
        </a>
      </li>
    ))}
  </ul>
)

const MobilePortfolioLinks = ({
  onClose,
}: {
  onClose: () => void
}) => (
  <div className="py-3 px-4 space-y-4">
    {GLOBAL_NAV.portfolio.markets.map((market) => (
      <div key={market.region}>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] px-3 mb-1">
          {market.flag} {market.region}
        </p>
        {market.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block py-3 px-3 text-[13px] text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20 transition-all rounded-sm"
            style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    ))}
    <div className="border-t border-[#2D5A45]/30 pt-3">
      <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] px-3 mb-2">
        Quick Access
      </p>
      <div className="flex flex-wrap gap-2 px-3 pb-2">
        {GLOBAL_NAV.portfolio.quicklinks.map((ql) => (
          <a
            key={ql.href}
            href={ql.href}
            onClick={onClose}
            className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase border border-[#2D5A45] text-[#C4B59D] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
          >
            {ql.label}
          </a>
        ))}
      </div>
    </div>
  </div>
)

/* ═══════════════════════════════════════════════════════════════
   MAIN HEADER COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [section, setSection] = useState<string | null>(null)

  const pathname = usePathname()
  const firstSegment = pathname.split('/')[1] as CountrySlug
  const isCountryRoute = firstSegment in countryNavConfig
  const activeMarket = isCountryRoute ? countryNavConfig[firstSegment] : null

  const toggleSection = (name: string) => {
    setSection((prev) => (prev === name ? null : name))
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (event: Event) => {
      const { detail } = event as CustomEvent<boolean>
      if (typeof detail === 'boolean') setMobileOpen(detail)
    }
    window.addEventListener(MOBILE_OPEN_EVENT, handler)
    return () => window.removeEventListener(MOBILE_OPEN_EVENT, handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF9F6] border-b border-[#2D5A45]/10 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-[#1B4332]'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 xl:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── LOGO ── */}
            <a href="/" className="flex flex-col min-w-fit group shrink-0">
              <span
                className={`text-xl md:text-[22px] font-serif tracking-[0.12em] transition-colors duration-500 leading-none ${
                  scrolled
                    ? 'text-[#1B4332] group-hover:text-[#B8956B]'
                    : 'text-[#FAF9F6]'
                }`}
              >
                MURIVEST
              </span>
              <span
                className={`text-[8px] md:text-[9px] tracking-[0.45em] font-light uppercase mt-0.5 transition-colors duration-500 ${
                  scrolled ? 'text-[#B8956B]' : 'text-[#C4B59D]'
                }`}
              >
                Nairobi Private Office
              </span>
            </a>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden xl:flex items-center gap-8">
              {!isCountryRoute && (
                <>
                  <NavItem label="Capital Markets" scrolled={scrolled}>
                    {(close) => <StandardMegaMenu section={GLOBAL_NAV.capital} onClose={close} />}
                  </NavItem>

                  <NavItem label="Portfolio" scrolled={scrolled}>
                    {(close) => <PortfolioMegaMenu onClose={close} />}
                  </NavItem>

                  <NavItem label="Intelligence" scrolled={scrolled}>
                    {(close) => <StandardMegaMenu section={GLOBAL_NAV.intelligence} onClose={close} />}
                  </NavItem>

                  <NavItem label="The Firm" scrolled={scrolled}>
                    {(close) => <StandardMegaMenu section={GLOBAL_NAV.firm} onClose={close} />}
                  </NavItem>

                  <div
                    className={`w-px h-5 ${
                      scrolled ? 'bg-[#2D5A45]/20' : 'bg-white/20'
                    }`}
                  />

                  <a
                    href="/login"
                    className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      scrolled
                        ? 'text-[#1A1A1A] hover:text-[#1B4332]'
                        : 'text-[#FAF9F6] hover:text-[#C4B59D]'
                    }`}
                  >
                    <LogIn size={13} strokeWidth={1.5} />
                    Investor Portal
                  </a>

                  <a
                    href="/cre-underwriting"
                    className={`px-5 py-2.5 border text-[10px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                      scrolled
                        ? 'border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-[#FAF9F6]'
                        : 'border-[#FAF9F6] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#1B4332]'
                    }`}
                  >
                    <TrendingUp size={13} strokeWidth={1.5} />
                    Underwrite
                  </a>
                </>
              )}

              {/* Markets dropdown — always visible */}
              <NavItem
                label={isCountryRoute ? `${activeMarket?.shortLabel} · Markets` : 'Markets'}
                scrolled={scrolled}
              >
                {(close) => <MarketsMegaMenu onClose={close} />}
              </NavItem>
            </nav>

            {/* ── MOBILE ACTIONS ── */}
            <div className="flex items-center gap-3 xl:hidden">
              <a
                href="/investor-portal"
                className={`p-2 transition-colors ${
                  scrolled ? 'text-[#1B4332]' : 'text-[#C4B59D]'
                }`}
                style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
              >
                <LogIn size={16} strokeWidth={1.5} />
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 -mr-2 flex flex-col items-end gap-1.5"
                style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}
                aria-label="Open navigation"
              >
                <div
                  className={`w-6 h-[1.5px] transition-colors duration-500 ${
                    scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'
                  }`}
                />
                <div
                  className={`w-4 h-[1.5px] transition-colors duration-500 ${
                    scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE PANEL ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#0A1F15]/85 z-[60] xl:hidden"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[380px] bg-[#1B4332] z-[70] xl:hidden overflow-hidden flex flex-col"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D5A45]/40 shrink-0">
                <div>
                  <p className="text-[#F8F7F4] font-serif text-[16px] tracking-[0.15em] uppercase">
                    Murivest
                  </p>
                  <p className="text-[#B8956B] text-[9px] tracking-[0.3em] uppercase mt-0.5">
                    Realty · Advisory
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#C4B59D] hover:text-white transition-colors"
                  style={{
                    minWidth: 44,
                    minHeight: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <X size={22} strokeWidth={1} />
                </button>
              </div>

              {/* Investor portal banner */}
              <div className="px-6 py-4 border-b border-[#2D5A45]/30 bg-[#2D5A45]/15 shrink-0">
                <a
                  href="/investor-portal"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B8956B] flex items-center justify-center shrink-0">
                    <LogIn size={15} strokeWidth={1.5} className="text-[#B8956B]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B]">
                      Investor Portal
                    </p>
                    <p className="text-[13px] text-[#F8F7F4]">Login / Register</p>
                  </div>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="ml-auto text-[#B8956B] -rotate-90"
                  />
                </a>
              </div>

              {/* Scrollable nav */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <nav className="py-2">
                  <MobileSection
                    title="Capital Markets"
                    icon={BarChart3}
                    isOpen={section === 'capital'}
                    onToggle={() => toggleSection('capital')}
                  >
                    <MobileLinks items={GLOBAL_NAV.capital.items} onClose={() => setMobileOpen(false)} />
                  </MobileSection>

                  <MobileSection
                    title="Portfolio"
                    icon={Building2}
                    isOpen={section === 'portfolio'}
                    onToggle={() => toggleSection('portfolio')}
                  >
                    <MobilePortfolioLinks onClose={() => setMobileOpen(false)} />
                  </MobileSection>

                  <MobileSection
                    title="Intelligence"
                    icon={BookOpen}
                    isOpen={section === 'intelligence'}
                    onToggle={() => toggleSection('intelligence')}
                  >
                    <MobileLinks items={GLOBAL_NAV.intelligence.items} onClose={() => setMobileOpen(false)} />
                  </MobileSection>

                  <MobileSection
                    title="The Firm"
                    icon={Users}
                    isOpen={section === 'firm'}
                    onToggle={() => toggleSection('firm')}
                  >
                    <MobileLinks items={GLOBAL_NAV.firm.items} onClose={() => setMobileOpen(false)} />
                  </MobileSection>

                  {/* Markets quick access */}
                  <div className="border-b border-[#2D5A45]/30">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] px-6 py-4">
                      Regional Markets
                    </p>
                    <div className="px-4 pb-3 space-y-0.5">
                      {Object.entries(countryNavConfig).map(([slug, market]) => (
                        <a
                          key={slug}
                          href={`/${slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-3 px-3 text-[13px] text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20 transition-all rounded-sm"
                          style={{ minHeight: 44 }}
                        >
                          <span className="flex items-center gap-2">
                            <span>{market.flag}</span>
                            {market.label}
                          </span>
                          <span className="text-[10px] text-[#5A7A6A]">
                            {market.shortLabel}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* CTA block */}
                <div className="p-5 space-y-2.5 border-t border-[#2D5A45]/30">
                  <a
                    href="/cre-underwriting"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#B8956B] text-[#1B4332] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#C4B59D] transition-colors"
                    style={{ minHeight: 48 }}
                  >
                    <TrendingUp size={13} strokeWidth={2} />
                    Underwrite a Deal
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
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
                    <span className="text-[8px] tracking-[0.35em] uppercase text-[#5A7A6A]">
                      Murivest
                    </span>
                    <div className="w-10 h-[1px] bg-[#B8956B]/30" />
                  </div>
                  <p className="text-[9px] text-[#5A7A6A] tracking-wide">
                    Nairobi · Dubai · London · Singapore
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <a
                      href="/compliance"
                      onClick={() => setMobileOpen(false)}
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
      <div className="h-[72px]" />
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE OPEN HELPER (for external triggers)
   ═══════════════════════════════════════════════════════════════ */

export function setMobileOpen(open: boolean): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<boolean>(MOBILE_OPEN_EVENT, { detail: open })
  )
}