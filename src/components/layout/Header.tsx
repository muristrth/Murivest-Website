'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST — REVISED GLOBAL HEADER
// Universal Menu · Country Switcher · Modern Menu Button
// Forest Green #1B4332 · Brass #B8956B · Cream #FAF9F6
// ──────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  X,
  ArrowUpRight,
  LogIn,
  Globe,
  Briefcase,
  BarChart3,
  Mail,
  Users,
  Building2,
  Compass,
  FileText,
  Phone,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getMarketHref } from '@/lib/markets'

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════════════════════════ */

const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  forestDark: '#0F2E22',
  brass: '#B8956B',
  brassLight: '#C4B59D',
  cream: '#FAF9F6',
  creamWarm: '#F8F7F4',
  sage: '#5A7A6A',
  charcoal: '#1A1A1A',
  stone: '#8A8A8A',
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION DATA
   ═══════════════════════════════════════════════════════════════ */

type NavColumn = {
  title: string
  links: { label: string; href: string; sub?: string }[]
}

type NavItem = {
  label: string
  href?: string
  description: string
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  columns: NavColumn[]
}

const GLOBAL_NAV: NavItem[] = [
  {
    label: 'Services',
    description: 'Integrated real estate services across the value chain',
    icon: Briefcase,
    columns: [
      {
        title: 'Advisory',
        links: [
          { label: 'Investment Sales', href: '/services/investment-sales', sub: 'Capital placement' },
          { label: 'Underwriting', href: '/cre-underwriting', sub: 'Institutional review' },
          { label: 'Due Diligence', href: '/due-diligence', sub: 'Technical validation' },
          { label: 'Valuation', href: '/services/valuation', sub: 'Appraisal & advisory' },
        ],
      },
      {
        title: 'Management',
        links: [
          { label: 'Asset Management', href: '/services/asset-management', sub: 'Portfolio optimization' },
          { label: 'Property Management', href: '/services/property-management', sub: 'Operational excellence' },
          { label: 'Development', href: '/services/development', sub: 'Ground-up & repositioning' },
          { label: 'Leasing', href: '/services/leasing', sub: 'Tenant representation' },
        ],
      },
      {
        title: 'Specialist',
        links: [
          { label: 'Land Banking', href: '/land-portfolio', sub: 'Strategic acquisition' },
          { label: 'Off-Market', href: '/off-market', sub: 'Private treaty' },
          { label: 'Sustainability', href: '/services/sustainability', sub: 'ESG advisory' },
        ],
      },
    ],
  },
  {
    label: 'Research',
    description: 'Market intelligence and institutional insights',
    icon: BarChart3,
    columns: [
      {
        title: 'Intelligence',
        links: [
          { label: 'Market Reports', href: '/research/reports', sub: 'Quarterly outlooks' },
          { label: 'CRE Insights', href: '/insights-cre', sub: 'Sector commentary' },
          { label: 'Transaction Data', href: '/market-data', sub: 'Pricing analytics' },
        ],
      },
      {
        title: 'Leadership',
        links: [
          { label: 'Perspectives', href: '/research/perspectives', sub: 'Executive briefings' },
          { label: 'Video Commentary', href: '/videos', sub: 'Market briefings' },
          { label: 'Global Outlook', href: '/research/outlook', sub: 'Cross-border' },
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    description: 'Global real estate mandates and opportunities',
    icon: Building2,
    columns: [
      {
        title: 'By Region',
        links: [
          { label: 'East Africa', href: '/kenya', sub: 'Kenya · 12 mandates' },
          { label: 'Gulf & Middle East', href: '/united-arab-emirates', sub: 'UAE · 8 mandates' },
          { label: 'Western Europe', href: '/united-kingdom', sub: 'UK · 6 mandates' },
          { label: 'Southeast Asia', href: '/singapore', sub: 'Singapore · 4 mandates' },
        ],
      },
      {
        title: 'By Asset Class',
        links: [
          { label: 'Commercial', href: '/portfolio/commercial', sub: 'Office · Retail · Industrial' },
          { label: 'Residential', href: '/portfolio/residential', sub: 'Multifamily' },
          { label: 'Land', href: '/land-portfolio', sub: 'Development & banking' },
          { label: 'Hospitality', href: '/portfolio/hospitality', sub: 'Hotels & resorts' },
        ],
      },
    ],
  },
  {
    label: 'About',
    description: 'Firm profile, history, and governance',
    icon: Compass,
    columns: [
      {
        title: 'Firm',
        links: [
          { label: 'Our Story', href: '/about', sub: 'Heritage & philosophy' },
          { label: 'Leadership', href: '/leadership', sub: 'Advisory board' },
          { label: 'Compliance', href: '/compliance', sub: 'Regulatory' },
        ],
      },
      {
        title: 'Governance',
        links: [
          { label: 'ESG Commitment', href: '/about/esg', sub: 'Sustainability' },
          { label: 'Investor Relations', href: '/investor-relations', sub: 'Partners' },
          { label: 'Press', href: '/press', sub: 'Announcements' },
        ],
      },
    ],
  },
  {
    label: 'People & Office',
    description: 'Advisors, offices, and global presence',
    icon: Users,
    columns: [
      {
        title: 'Team',
        links: [
          { label: 'Advisors', href: '/people', sub: 'Senior team' },
          { label: 'Partners', href: '/people/partners', sub: 'Strategic alliances' },
        ],
      },
      {
        title: 'Offices',
        links: [
          { label: 'Nairobi', href: '/office/nairobi', sub: 'Headquarters' },
          { label: 'Dubai', href: '/office/dubai', sub: 'Middle East hub' },
          { label: 'London', href: '/office/london', sub: 'European coverage' },
          { label: 'Singapore', href: '/office/singapore', sub: 'Asia Pacific' },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    description: 'Join the Murivest advisory team',
    icon: FileText,
    columns: [
      {
        title: 'Opportunities',
        links: [
          { label: 'Open Positions', href: '/careers', sub: 'Current vacancies' },
          { label: 'Graduate Programme', href: '/careers/graduate', sub: 'Analyst track' },
          { label: 'Experienced Hire', href: '/careers/experienced', sub: 'Lateral recruitment' },
        ],
      },
      {
        title: 'Culture',
        links: [
          { label: 'Our Values', href: '/careers/culture', sub: 'Values & environment' },
          { label: 'Benefits', href: '/careers/benefits', sub: 'Compensation' },
          { label: 'Diversity', href: '/careers/diversity', sub: 'Inclusion' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    description: 'Private office and advisory inquiries',
    icon: Mail,
    columns: [
      {
        title: 'Inquiries',
        links: [
          { label: 'General Enquiry', href: '/contact', sub: 'info@murivest.co.ke' },
          { label: 'Investment Mandate', href: '/sell', sub: 'Submit a property' },
          { label: 'Media', href: '/contact/media', sub: 'Press' },
        ],
      },
      {
        title: 'Offices',
        links: [
          { label: 'Nairobi', href: '/contact/nairobi', sub: 'Private office' },
          { label: 'Dubai', href: '/contact/dubai', sub: 'DIFC Gate Village' },
          { label: 'Schedule a Call', href: '/contact/schedule', sub: 'Book session' },
        ],
      },
    ],
  },
]

const MARKETS = [
  { slug: 'kenya', label: 'Kenya', flag: '🇰🇪', sub: 'Nairobi Office' },
  { slug: 'united-arab-emirates', label: 'UAE', flag: '🇦🇪', sub: 'Dubai Office' },
  { slug: 'united-kingdom', label: 'United Kingdom', flag: '🇬🇧', sub: 'London Office' },
  { slug: 'singapore', label: 'Singapore', flag: '🇸🇬', sub: 'Singapore Office' },
  { slug: 'south-africa', label: 'South Africa', flag: '🇿🇦', sub: 'Johannesburg Office' },
  { slug: 'thailand', label: 'Thailand', flag: '🇹🇭', sub: 'Bangkok Office' },
  { slug: 'united-states', label: 'United States', flag: '🇺🇸', sub: 'New York Office' },
]

/* ═══════════════════════════════════════════════════════════════
   MODERN MENU BUTTON
   ═══════════════════════════════════════════════════════════════ */

const MenuButton = ({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-3 outline-none"
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      {/* Text label — hidden on smallest screens */}
      <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors duration-300 font-medium">
        {open ? 'Close' : 'Menu'}
      </span>

      {/* Geometric icon */}
      <div
        className={`relative w-9 h-9 flex items-center justify-center border transition-all duration-500 ${
          open
            ? 'border-[#B8956B] bg-[#1B4332] rotate-90'
            : 'border-[#1B4332]/20 bg-transparent group-hover:border-[#1B4332]/40'
        }`}
      >
        <div className="relative w-4 h-2.5 flex flex-col justify-between items-end">
          {/* Top line */}
          <span
            className={`block h-[1.5px] transition-all duration-500 ${
              open
                ? 'w-4 bg-[#FAF9F6] rotate-45 translate-y-[4.5px]'
                : 'w-4 bg-[#1B4332] group-hover:w-3.5'
            }`}
          />
          {/* Bottom line — brass accent */}
          <span
            className={`block h-[1.5px] transition-all duration-500 ${
              open
                ? 'w-4 bg-[#FAF9F6] -rotate-45 -translate-y-[4.5px]'
                : 'w-2.5 bg-[#B8956B] group-hover:w-4'
            }`}
          />
        </div>
      </div>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MARKETS DROPDOWN
   ═══════════════════════════════════════════════════════════════ */

const MarketsDropdown = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute right-0 top-[calc(100%+8px)] w-[280px] bg-[#FAF9F6] border border-[#2D5A45]/10 shadow-[0_12px_40px_rgba(0,0,0,0.1)] z-50 overflow-hidden"
        >
          <div className="p-6">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A] font-medium mb-4">
              Select Market
            </p>
            <div className="space-y-0">
              {MARKETS.map((market) => (
                <a
                  key={market.slug}
                  href={getMarketHref(market.slug)}
                  onClick={onClose}
                  className="group flex items-center justify-between py-3 border-b border-[#2D5A45]/5 last:border-b-0 hover:bg-[#1B4332]/[0.02] px-2 -mx-2 rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{market.flag}</span>
                    <div>
                      <span className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors block">
                        {market.label}
                      </span>
                      <span className="text-[10px] text-[#8A8A8A]">{market.sub}</span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FULL-SCREEN MENU OVERLAY
   ═══════════════════════════════════════════════════════════════ */

const FullScreenMenu = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(GLOBAL_NAV[0]?.label ?? null)

  const activeNav = GLOBAL_NAV.find((n) => n.label === activeItem)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[60] bg-[#1B4332] overflow-hidden"
        >
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,80,0.08),transparent_60%)]" />

          <div className="relative z-10 h-full flex flex-col max-w-[1600px] mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 xl:px-10 h-[56px] shrink-0 border-b border-[#2D5A45]/20">
              <a href="/" onClick={onClose} className="flex items-center gap-3 group">
                <span className="text-[17px] font-serif tracking-[0.14em] text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors duration-300">
                  MURIVEST
                </span>
                <span className="hidden sm:block w-px h-4 bg-[#FAF9F6]/15" />
                <span className="hidden sm:block text-[8px] tracking-[0.35em] uppercase text-[#5A7A6A] font-light">
                  Global CRE Advisory
                </span>
              </a>

              <button
                onClick={onClose}
                className="group flex items-center gap-3 outline-none"
              >
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-[#C4B59D] group-hover:text-[#FAF9F6] transition-colors duration-300 font-medium">
                  Close
                </span>
                <div className="w-9 h-9 flex items-center justify-center border border-[#B8956B] bg-[#1B4332] rotate-90 transition-all duration-500">
                  <div className="relative w-4 h-2.5 flex flex-col justify-between items-end">
                    <span className="block w-4 h-[1.5px] bg-[#FAF9F6] rotate-45 translate-y-[4.5px]" />
                    <span className="block w-4 h-[1.5px] bg-[#FAF9F6] -rotate-45 -translate-y-[4.5px]" />
                  </div>
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="flex flex-col lg:flex-row min-h-full">
                {/* Left — Main nav items */}
                <div className="lg:w-[45%] xl:w-[40%] p-6 xl:p-10 lg:border-r border-[#2D5A45]/20">
                  <nav className="space-y-0">
                    {GLOBAL_NAV.map((item, i) => {
                      const Icon = item.icon
                      const isActive = activeItem === item.label

                      return (
                        <button
                          key={item.label}
                          onClick={() => setActiveItem(item.label)}
                          onMouseEnter={() => setActiveItem(item.label)}
                          className={`group w-full text-left py-5 lg:py-6 border-b border-[#2D5A45]/15 transition-colors duration-300 ${
                            isActive ? 'bg-[#2D5A45]/10' : 'hover:bg-[#2D5A45]/5'
                          }`}
                        >
                          <div className="flex items-start gap-4 px-2">
                            <span className="text-[#5A7A6A] text-[10px] font-mono mt-1.5">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Icon
                                    size={14}
                                    strokeWidth={1.5}
                                    className={`transition-colors duration-300 ${
                                      isActive ? 'text-[#B8956B]' : 'text-[#5A7A6A]'
                                    }`}
                                  />
                                  <span
                                    className={`font-display text-xl lg:text-2xl transition-colors duration-300 ${
                                      isActive ? 'text-[#FAF9F6]' : 'text-[#C4B59D]'
                                    }`}
                                  >
                                    {item.label}
                                  </span>
                                </div>
                                <ArrowUpRight
                                  size={14}
                                  strokeWidth={1.5}
                                  className={`transition-all duration-300 ${
                                    isActive
                                      ? 'text-[#B8956B] opacity-100'
                                      : 'text-[#5A7A6A] opacity-0 group-hover:opacity-50'
                                  }`}
                                />
                              </div>
                              <p
                                className={`text-[11px] mt-1.5 leading-relaxed max-w-sm transition-colors duration-300 ${
                                  isActive ? 'text-[#8A8A8A]' : 'text-[#5A7A6A]'
                                }`}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </nav>
                </div>

                {/* Right — Active item sub-links */}
                <div className="lg:w-[55%] xl:w-[60%] p-6 xl:p-10 bg-[#163828]/30">
                  <AnimatePresence mode="wait">
                    {activeNav && (
                      <motion.div
                        key={activeNav.label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex items-center gap-2.5 mb-8">
                          <activeNav.icon
                            size={15}
                            strokeWidth={1.5}
                            className="text-[#B8956B]"
                          />
                          <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A] font-medium">
                            {activeNav.description}
                          </p>
                        </div>

                        <div
                          className="grid gap-x-8 gap-y-8"
                          style={{
                            gridTemplateColumns: `repeat(${Math.min(
                              activeNav.columns.length,
                              3
                            )}, minmax(160px, 1fr))`,
                          }}
                        >
                          {activeNav.columns.map((col) => (
                            <div key={col.title}>
                              <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] font-medium mb-4 pb-2 border-b border-[#2D5A45]/20">
                                {col.title}
                              </p>
                              <ul className="space-y-0">
                                {col.links.map((link) => (
                                  <li key={link.href}>
                                    <a
                                      href={link.href}
                                      onClick={onClose}
                                      className="group flex items-start justify-between py-3 border-b border-[#2D5A45]/10 last:border-b-0 hover:bg-[#FAF9F6]/[0.03] px-2 -mx-2 rounded-sm transition-colors"
                                    >
                                      <div>
                                        <span className="text-[13px] text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors block">
                                          {link.label}
                                        </span>
                                        {link.sub && (
                                          <span className="text-[10px] text-[#5A7A6A] mt-0.5 block leading-relaxed">
                                            {link.sub}
                                          </span>
                                        )}
                                      </div>
                                      <ArrowUpRight
                                        size={11}
                                        strokeWidth={1.5}
                                        className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                                      />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {activeNav.href && (
                          <a
                            href={activeNav.href}
                            onClick={onClose}
                            className="inline-flex items-center gap-2 mt-10 px-5 py-2.5 border border-[#B8956B]/30 text-[#B8956B] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#B8956B]/10 transition-colors"
                          >
                            See All {activeNav.label}
                            <ArrowUpRight size={11} strokeWidth={1.5} />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-6 xl:px-10 py-8 border-t border-[#2D5A45]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <a
                    href="/portal"
                    onClick={onClose}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#C4B59D] hover:text-[#FAF9F6] transition-colors"
                  >
                    <LogIn size={13} strokeWidth={1.5} />
                    Investor Portal
                  </a>
                  <a
                    href="/cre-underwriting"
                    onClick={onClose}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#C4B59D] hover:text-[#FAF9F6] transition-colors"
                  >
                    <Phone size={12} strokeWidth={1.5} />
                    Underwrite
                  </a>
                </div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A]">
                  Nairobi · Dubai · London · Singapore
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [marketsOpen, setMarketsOpen] = useState(false)
  const pathname = usePathname()

  const marketsRef = useRef<HTMLDivElement>(null)

  // Close markets on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) {
        setMarketsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false)
    setMarketsOpen(false)
  }, [pathname])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6] border-b border-[#2D5A45]/10 h-[56px]">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0 group">
              <span className="text-[17px] font-serif tracking-[0.14em] text-[#1B4332] group-hover:text-[#B8956B] transition-colors duration-300">
                MURIVEST
              </span>
              <span className="hidden sm:block w-px h-4 bg-[#2D5A45]/15" />
              <span className="hidden sm:block text-[8px] tracking-[0.35em] uppercase text-[#5A7A6A] font-light">
                Global CRE Advisory
              </span>
            </a>

            {/* Right actions — all screens */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Investor Portal */}
              <a
                href="/portal"
                className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A] hover:text-[#1B4332] transition-colors"
              >
                <LogIn size={13} strokeWidth={1.5} />
                <span className="hidden md:inline">Investor Portal</span>
              </a>

              {/* Markets */}
              <div ref={marketsRef} className="relative">
                <button
                  onClick={() => setMarketsOpen((o) => !o)}
                  className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 outline-none ${
                    marketsOpen ? 'text-[#1B4332]' : 'text-[#1A1A1A] hover:text-[#1B4332]'
                  }`}
                >
                  <Globe size={12} strokeWidth={1.5} />
                  <span className="hidden sm:inline">Markets</span>
                  <ChevronDown
                    size={9}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${marketsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <MarketsDropdown open={marketsOpen} onClose={() => setMarketsOpen(false)} />
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-4 bg-[#2D5A45]/15" />

              {/* Modern Menu Button */}
              <MenuButton open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen menu — all devices */}
      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Spacer */}
      <div className="h-[56px]" />
    </>
  )
}
