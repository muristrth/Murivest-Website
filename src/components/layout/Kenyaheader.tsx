'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST KENYA — COUNTRY SUB-HEADER
// Sits beneath Global Header · 48px · Institutional Minimalism
// Forest Green #1B4332 · Brass #B8956B · Cream #FAF9F6
// ──────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ChevronDown,
  X,
  Menu,
  ArrowUpRight,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Building2,
  BarChart3,
  FileText,
  Users,
  BookOpen,
  Briefcase,
  LandPlot,
  Warehouse,
  Store,
  Hotel,
  Home,
  TreePine,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION CONFIGURATION — Kenya
   ═══════════════════════════════════════════════════════════════ */

type DropdownItem = {
  label: string
  href: string
  sub?: string
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
}

type NavSection = {
  label: string
  href?: string
  description: string
  columns: DropdownItem[][]
}

const KENYA_NAV: NavSection[] = [
  {
    label: 'Investments',
    description: 'Direct investment opportunities across Kenya',
    columns: [
      [
        { label: 'Investment Opportunities', href: '/kenya/investments', sub: 'All active mandates' },
        { label: 'Off-Market Opportunities', href: '/kenya/off-market', sub: 'Private treaty access' },
        { label: 'Income-Producing Assets', href: '/kenya/income-assets', sub: 'Yield-focused acquisitions' },
        { label: 'Development Opportunities', href: '/kenya/development', sub: 'Ground-up & repositioning' },
        { label: 'Land Banking', href: '/kenya/land-portfolio', sub: 'Strategic land acquisition' },
        { label: 'Sale & Leaseback', href: '/kenya/sale-leaseback', sub: 'Corporate real estate' },
      ],
    ],
  },
  {
    label: 'Advisory',
    description: 'Institutional advisory and capital markets',
    columns: [
      [
        { label: 'Capital Markets', href: '/kenya/capital-markets', sub: 'Debt & equity placement' },
        { label: 'Acquisition Advisory', href: '/kenya/acquisition', sub: 'Buy-side representation' },
        { label: 'Disposition Advisory', href: '/kenya/disposition', sub: 'Sell-side representation' },
        { label: 'Valuation & Underwriting', href: '/kenya/valuation', sub: 'Institutional-grade analysis' },
        { label: 'Asset Management', href: '/kenya/asset-management', sub: 'Portfolio optimization' },
        { label: 'Property Management', href: '/kenya/property-management', sub: 'Operational excellence' },
      ],
    ],
  },
  {
    label: 'Property',
    description: 'Commercial real estate by sector',
    columns: [
      [
        { label: 'Office', href: '/kenya/properties/office', sub: 'Grade A & B stock', icon: Building2 },
        { label: 'Industrial', href: '/kenya/properties/industrial', sub: 'Warehousing & logistics', icon: Warehouse },
        { label: 'Retail', href: '/kenya/properties/retail', sub: 'Malls & high street', icon: Store },
        { label: 'Hospitality', href: '/kenya/properties/hospitality', sub: 'Hotels & resorts', icon: Hotel },
        { label: 'Residential', href: '/kenya/properties/residential', sub: 'Multifamily & estates', icon: Home },
        { label: 'Development Land', href: '/kenya/land-portfolio', sub: 'Strategic parcels', icon: LandPlot },
      ],
    ],
  },
  {
    label: 'Research',
    description: 'Market intelligence and sector analysis',
    columns: [
      [
        { label: 'Kenya Research', href: '/kenya/research', sub: 'Macro overview & outlook' },
        { label: 'Nairobi Office Market', href: '/kenya/research/nairobi-office', sub: 'Vacancy & rent trends' },
        { label: 'Industrial Market', href: '/kenya/research/industrial', sub: 'Supply chain & yields' },
        { label: 'Investment Yields', href: '/kenya/research/yields', sub: 'Return benchmarks' },
        { label: 'Market Reports', href: '/kenya/research/reports', sub: 'Quarterly publications' },
        { label: 'Insights', href: '/kenya/insights', sub: 'Executive commentary' },
      ],
    ],
  },
  {
    label: 'Markets',
    description: 'Regional coverage and market access',
    href: '/kenya/markets',
    columns: [
      [
        { label: 'Nairobi', href: '/kenya/nairobi', sub: 'Capital region' },
        { label: 'Mombasa', href: '/kenya/mombasa', sub: 'Coastal corridor' },
        { label: 'Kisumu', href: '/kenya/kisumu', sub: 'Western gateway' },
        { label: 'Nakuru', href: '/kenya/nakuru', sub: 'Rift valley hub' },
      ],
    ],
  },
  {
    label: 'About',
    description: 'Firm profile and private office access',
    columns: [
      [
        { label: 'About Murivest Kenya', href: '/kenya/about', sub: 'Heritage & philosophy' },
        { label: 'Leadership', href: '/kenya/leadership', sub: 'Advisory team' },
        { label: 'Contact', href: '/kenya/contact', sub: 'Private office inquiry' },
        { label: 'Compliance', href: '/kenya/compliance', sub: 'Licences & regulation' },
      ],
    ],
  },
]

/* ═══════════════════════════════════════════════════════════════
   COMPACT DROPDOWN — Single Column, Restrained
   ═══════════════════════════════════════════════════════════════ */

const CompactDropdown = ({
  section,
  onClose,
}: {
  section: NavSection
  onClose: () => void
}) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#FAF9F6] border border-[#2D5A45]/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-[#2D5A45]/8">
          <p className="text-[8px] tracking-[0.3em] uppercase text-[#5A7A6A] font-medium mb-1">
            {section.description}
          </p>
          <h4 className="text-[15px] font-serif text-[#1B4332] tracking-tight">
            {section.label}
          </h4>
        </div>

        {/* Links */}
        <div className="p-2">
          {section.columns.flat().map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-sm hover:bg-[#1B4332]/[0.03] transition-colors"
              >
                {Icon && (
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#B8956B] mt-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors font-medium">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={10}
                      strokeWidth={1.5}
                      className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </div>
                  {item.sub && (
                    <p className="text-[10px] text-[#8A8A8A] mt-0.5 leading-relaxed">
                      {item.sub}
                    </p>
                  )}
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        {section.href && (
          <div className="px-4 pb-4 pt-1">
            <a
              href={section.href}
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#2D5A45]/15 text-[9px] tracking-[0.18em] uppercase text-[#5A7A6A] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
            >
              See All {section.label}
              <ArrowUpRight size={10} strokeWidth={1.5} />
            </a>
          </div>
        )}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   DESKTOP NAV ITEM
   ═══════════════════════════════════════════════════════════════ */

const DesktopNavItem = ({
  section,
  active,
  onActivate,
  onDeactivate,
}: {
  section: NavSection
  active: boolean
  onActivate: () => void
  onDeactivate: () => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onDeactivate()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onDeactivate])

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    onActivate()
  }

  const handleLeave = () => {
    timerRef.current = setTimeout(() => onDeactivate(), 160)
  }

  return (
    <div
      ref={ref}
      className="relative h-full flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {section.href && !section.columns[0]?.length ? (
        <a
          href={section.href}
          className={`flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 h-full ${
            active ? 'text-[#B8956B]' : 'text-[#1A1A1A] hover:text-[#1B4332]'
          }`}
        >
          {section.label}
        </a>
      ) : (
        <button
          onClick={() => (active ? onDeactivate() : onActivate())}
          className={`flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 outline-none h-full ${
            active ? 'text-[#B8956B]' : 'text-[#1A1A1A] hover:text-[#1B4332]'
          }`}
        >
          {section.label}
          <ChevronDown
            size={9}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${active ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      <AnimatePresence>
        {active && section.columns[0]?.length > 0 && (
          <CompactDropdown section={section} onClose={onDeactivate} />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

const MobileAccordion = ({
  section,
  isOpen,
  onToggle,
  onClose,
}: {
  section: NavSection
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) => {
  return (
    <div className="border-b border-[#2D5A45]/10">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-5 hover:bg-[#1B4332]/[0.02] transition-colors"
        style={{ minHeight: 48 }}
      >
        <span className="text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A] font-medium">
          {section.label}
        </span>
        <ChevronDown
          size={12}
          strokeWidth={1.5}
          className={`text-[#5A7A6A] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden bg-[#F8F7F4]/60"
          >
            <div className="px-5 py-3 space-y-0.5">
              {section.columns.flat().map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 py-3 border-b border-[#2D5A45]/5 last:border-b-0"
                  >
                    {Icon && (
                      <Icon
                        size={13}
                        strokeWidth={1.5}
                        className="text-[#B8956B] mt-0.5 shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">
                          {item.label}
                        </span>
                        <ArrowUpRight
                          size={10}
                          strokeWidth={1.5}
                          className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      {item.sub && (
                        <p className="text-[10px] text-[#8A8A8A] mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </a>
                )
              })}
              {section.href && (
                <a
                  href={section.href}
                  onClick={onClose}
                  className="flex items-center gap-2 mt-3 py-2.5 text-[10px] tracking-[0.14em] uppercase text-[#5A7A6A] hover:text-[#B8956B] transition-colors"
                >
                  View All {section.label}
                  <ArrowUpRight size={10} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function KenyaHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  const closeAll = useCallback(() => {
    setActiveDropdown(null)
    setMobileOpen(false)
    setExpandedMobile(null)
  }, [])

  // Close on route change
  useEffect(() => {
    closeAll()
  }, [closeAll]) // In practice, you'd use pathname here

  return (
    <>
      <header className="sticky top-[56px] z-40 bg-[#F8F7F4] border-b border-[#2D5A45]/8 h-[48px]">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            {/* ── LEFT: Country Identity ── */}
            <a
              href="/kenya"
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <span className="text-[13px] font-serif tracking-[0.12em] text-[#1B4332] group-hover:text-[#B8956B] transition-colors duration-300">
                MURIVEST KENYA
              </span>
              <span className="hidden md:block w-px h-3 bg-[#2D5A45]/15" />
              <span className="hidden md:block text-[8px] tracking-[0.3em] uppercase text-[#5A7A6A] font-light">
                Nairobi Office
              </span>
            </a>

            {/* ── CENTER: Desktop Nav ── */}
            <nav className="hidden lg:flex items-center h-full gap-7 xl:gap-9">
              {KENYA_NAV.map((section) => (
                <DesktopNavItem
                  key={section.label}
                  section={section}
                  active={activeDropdown === section.label}
                  onActivate={() => setActiveDropdown(section.label)}
                  onDeactivate={() => setActiveDropdown(null)}
                />
              ))}
            </nav>

            {/* ── RIGHT: Actions ── */}
            <div className="flex items-center gap-4">
              <a
                href="/kenya/contact"
                className="hidden md:flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-[#5A7A6A] hover:text-[#1B4332] transition-colors"
              >
                <Phone size={11} strokeWidth={1.5} />
                <span>Private Office</span>
              </a>

              <a
                href="/cre-underwriting"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1B4332] text-[#FAF9F6] text-[9px] uppercase tracking-[0.16em] font-medium hover:bg-[#2D5A45] transition-colors"
              >
                <TrendingUp size={10} strokeWidth={1.5} />
                Underwrite
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="lg:hidden p-2 -mr-2 text-[#1B4332]"
                style={{ minWidth: 44, minHeight: 44 }}
              >
                {mobileOpen ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <Menu size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE PANEL ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0A1F15]/60 z-[55] lg:hidden"
              style={{ WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}
              onClick={closeAll}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="fixed left-0 right-0 top-[104px] bg-[#FAF9F6] border-b border-[#2D5A45]/10 shadow-[0_12px_40px_rgba(0,0,0,0.1)] z-[56] lg:hidden max-h-[calc(100vh-104px)] overflow-y-auto overscroll-contain"
            >
              <div className="py-2">
                {KENYA_NAV.map((section) => (
                  <MobileAccordion
                    key={section.label}
                    section={section}
                    isOpen={expandedMobile === section.label}
                    onToggle={() =>
                      setExpandedMobile((prev) =>
                        prev === section.label ? null : section.label
                      )
                    }
                    onClose={closeAll}
                  />
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-[#2D5A45]/10 space-y-2.5">
                <a
                  href="/cre-underwriting"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1B4332] text-[#FAF9F6] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#2D5A45] transition-colors"
                >
                  <TrendingUp size={12} strokeWidth={1.5} />
                  Underwrite a Deal
                </a>
                <a
                  href="/kenya/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#1B4332] text-[#1B4332] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#1B4332] hover:text-[#FAF9F6] transition-colors"
                >
                  <Mail size={12} strokeWidth={1.5} />
                  Contact Private Office
                </a>
              </div>

              <div className="px-5 py-4 text-center border-t border-[#2D5A45]/8">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A8A8A]">
                  Nairobi · Mombasa · Kisumu · Nakuru
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}