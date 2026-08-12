'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST — COUNTRY SUBNAVIGATION
// Dropdowns render via fixed positioning to escape all clipping contexts
// Kept as a shared source module so every country layout resolves consistently in production.
// z-index: 100 ensures above hero, carousels, and all page content
// ──────────────────────────────────────────────────────────────

import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect, useCallback } from 'react'
import type { CountrySlug } from '@/lib/country-nav-config'
import { countryNavConfig } from '@/lib/country-nav-config'
import { ChevronDown, MapPin, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Constants ─────────────────────────────────────────────── */

const MAX_VISIBLE_MARKETS = 4
const MAX_VISIBLE_SECTIONS = 5

/* ═══════════════════════════════════════════════════════════════
   FIXED DROPDOWN MENU — Renders outside normal document flow
   Uses fixed positioning + coordinate calculation to appear
   directly below trigger, above all page content
   ═══════════════════════════════════════════════════════════════ */

const FixedDropdownMenu = ({
  items,
  activeHref,
  label,
  triggerRef,
  onClose,
  variant = 'markets',
}: {
  items: { label: string; href: string; sub?: string; description?: string; accent?: boolean }[]
  activeHref: string
  label: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
  onClose: () => void
  variant?: 'markets' | 'sections'
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 })

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: variant === 'markets' ? 320 : 360,
      })
    }

    const handleScroll = () => onClose()
    const handleResize = () => onClose()
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [triggerRef, onClose, variant])

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bg-[#FAF9F6] border border-[#2D5A45]/15 shadow-[0_12px_48px_rgba(0,0,0,0.15)] z-[100]"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
        maxHeight: 'calc(100vh - ' + position.top + 'px - 24px)',
        overflowY: 'auto',
      }}
    >
      {/* Dropdown header */}
      <div className="px-6 py-3 border-b border-[#2D5A45]/10 bg-[#1B4332]/[0.02] sticky top-0">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A7A6A]">
          {variant === 'markets' ? 'Regional Markets' : 'Advisory Sections'}
        </p>
      </div>

      {/* Dropdown items */}
      <div className="py-1">
        {items.map((item) => {
          const isActive = activeHref.startsWith(item.href)
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`group flex items-start justify-between px-6 py-3.5 transition-all ${
                isActive
                  ? 'bg-[#1B4332]/[0.04] text-[#B8956B]'
                  : 'text-[#1A1A1A] hover:bg-[#1B4332]/[0.03]'
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[13px] ${isActive ? 'font-medium text-[#1B4332]' : ''}`}>
                    {item.label}
                  </span>
                  {item.accent && (
                    <span className="shrink-0 px-1.5 py-0.5 text-[8px] tracking-[0.15em] uppercase bg-[#B8956B]/10 text-[#B8956B]">
                      Featured
                    </span>
                  )}
                </div>
                {(item.sub || item.description) && (
                  <p className="text-[11px] text-[#8A8A8A] mt-1 leading-relaxed">
                    {item.sub || item.description}
                  </p>
                )}
              </div>
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className={`text-[#B8956B] mt-0.5 shrink-0 ml-3 transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   DROPDOWN TRIGGER — Manages open/close state and trigger ref
   ═══════════════════════════════════════════════════════════════ */

const DropdownTrigger = ({
  label,
  items,
  activeHref,
  variant,
}: {
  label: string
  items: { label: string; href: string; sub?: string; description?: string; accent?: boolean }[]
  activeHref: string
  variant?: 'markets' | 'sections'
}) => {
  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setClicked(false)
  }, [])

  // Close on click outside
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        // Check if click is inside the fixed dropdown (it won't be in DOM tree)
        // Use a data attribute to identify our dropdowns
        const target = e.target as HTMLElement
        if (!target.closest('[data-country-dropdown]')) {
          close()
        }
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, close])

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (!clicked) setOpen(true)
  }

  const handleMouseLeave = () => {
    if (!clicked) {
      timerRef.current = setTimeout(() => setOpen(false), 200)
    }
  }

  const handleClick = () => {
    setClicked((c) => !c)
    setOpen((o) => !o)
  }

  const hasActive = items.some((i) => activeHref.startsWith(i.href))

  return (
    <>
      <button
        ref={triggerRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`shrink-0 flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase font-medium pb-1 border-b transition-colors duration-300 outline-none ${
          hasActive || open
            ? 'text-[#B8956B] border-[#B8956B]'
            : 'text-[#C4B59D]/70 border-transparent hover:text-[#F8F7F4] hover:border-[#2D5A45]'
        }`}
        style={{ minHeight: 32 }}
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
          <div data-country-dropdown>
            <FixedDropdownMenu
              items={items}
              activeHref={activeHref}
              label={label}
              triggerRef={triggerRef}
              onClose={close}
              variant={variant}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE OVERFLOW ACCORDION
   ═══════════════════════════════════════════════════════════════ */

const MobileOverflowAccordion = ({
  markets,
  sections,
  activeHref,
}: {
  markets: { label: string; href: string; sub?: string }[]
  sections: { label: string; href: string; description?: string }[]
  activeHref: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden border-t border-[#2D5A45]/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 px-6 text-[12px] tracking-[0.15em] uppercase text-[#C4B59D]"
        style={{ minHeight: 48 }}
      >
        <span>More Navigation</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-[#B8956B] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden bg-[#163828]/60"
          >
            {markets.length > 0 && (
              <div className="py-2">
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] px-6 py-2">
                  Additional Markets
                </p>
                {markets.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-8 py-3 text-[13px] transition-colors ${
                      activeHref.startsWith(item.href)
                        ? 'text-[#B8956B] bg-[#2D5A45]/20'
                        : 'text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/15'
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    {item.label}
                    {item.sub && <span className="block text-[10px] text-[#5A7A6A] mt-0.5">{item.sub}</span>}
                  </a>
                ))}
              </div>
            )}
            {sections.length > 0 && (
              <div className="py-2 border-t border-[#2D5A45]/20">
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B] px-6 py-2">
                  Additional Sections
                </p>
                {sections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-8 py-3 text-[13px] transition-colors ${
                      activeHref.startsWith(item.href)
                        ? 'text-[#B8956B] bg-[#2D5A45]/20'
                        : 'text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/15'
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    {item.label}
                    {item.description && (
                      <span className="block text-[10px] text-[#5A7A6A] mt-0.5">{item.description}</span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function CountrySubnav({ country }: { country: CountrySlug }) {
  const pathname = usePathname()
  const config = countryNavConfig[country]

  if (!config) return null

  const linkClass = (active: boolean) =>
    `shrink-0 text-[11px] tracking-[0.15em] uppercase font-medium pb-1 border-b transition-colors duration-300 ${
      active
        ? 'text-[#B8956B] border-[#B8956B]'
        : 'text-[#C4B59D]/70 border-transparent hover:text-[#F8F7F4] hover:border-[#2D5A45]'
    }`

  const sectionLinkClass = (active: boolean) =>
    `shrink-0 text-[10px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${
      active ? 'text-[#B8956B]' : 'text-[#5A7A6A] hover:text-[#C4B59D]'
    }`

  const visibleMarkets = config.markets.slice(0, MAX_VISIBLE_MARKETS)
  const overflowMarkets = config.markets.slice(MAX_VISIBLE_MARKETS)
  const visibleSections = config.sections.slice(0, MAX_VISIBLE_SECTIONS)
  const overflowSections = config.sections.slice(MAX_VISIBLE_SECTIONS)

  return (
    <div className="relative bg-[#163828] border-b border-[#2D5A45]/40 z-[55]">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-12">
        {/* ── Dateline Row ── */}
        <div className="flex items-center justify-between pt-5 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-lg">{config.flag}</span>
            <span className="text-[#F8F7F4] text-[15px] font-serif tracking-tight">
              {config.label}
            </span>
            <span className="text-[#5A7A6A]">·</span>
            <span className="text-[#5A7A6A] text-[10px] tracking-[0.25em] uppercase">
              {config.dateline}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-3 px-2 py-0.5 bg-[#2D5A45]/20 text-[#B8956B] text-[9px] tracking-[0.2em] uppercase">
              <MapPin size={10} strokeWidth={1.5} />
              {config.regionTag}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[#5A7A6A] text-[10px] tracking-[0.25em] uppercase">
              Institutional Advisory
            </span>
            <span className="text-[#5A7A6A] text-[10px]">
              {config.listingCount} Active Mandates
            </span>
          </div>
        </div>

        {/* ── Tier 1: Markets / Geography (Desktop) ── */}
        {config.markets.length > 0 && (
          <nav
            className="hidden md:flex items-center gap-7 overflow-x-auto pb-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <a
              href={`/${country}`}
              className={linkClass(pathname === `/${country}`)}
            >
              Overview
            </a>

            {visibleMarkets.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(pathname.startsWith(item.href))}
              >
                {item.label}
              </a>
            ))}

            {overflowMarkets.length > 0 && (
              <DropdownTrigger
                label="More Markets"
                items={overflowMarkets}
                activeHref={pathname}
                variant="markets"
              />
            )}
          </nav>
        )}

        {/* ── Tier 1: Markets (Mobile) ── */}
        {config.markets.length > 0 && (
          <nav className="flex md:hidden items-center gap-5 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none' }}>
            <a href={`/${country}`} className={linkClass(pathname === `/${country}`)}>
              Overview
            </a>
            {visibleMarkets.map((item) => (
              <a key={item.href} href={item.href} className={linkClass(pathname.startsWith(item.href))}>
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* ── Tier 2: Functional Sections (Desktop) ── */}
        <nav
          className={`hidden md:flex items-center gap-6 overflow-x-auto pb-4 ${
            config.markets.length > 0 ? 'border-t border-[#2D5A45]/25 pt-3' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {config.markets.length === 0 && (
            <a href={`/${country}`} className={linkClass(pathname === `/${country}`)}>
              Overview
            </a>
          )}

          {visibleSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={sectionLinkClass(pathname.startsWith(item.href))}
            >
              {item.label}
            </a>
          ))}

          {overflowSections.length > 0 && (
            <DropdownTrigger
              label="More"
              items={overflowSections.map((s) => ({
                label: s.label,
                href: s.href,
                description: s.description,
                accent: s.accent,
              }))}
              activeHref={pathname}
              variant="sections"
            />
          )}
        </nav>

        {/* ── Tier 2: Functional Sections (Mobile) ── */}
        <nav
          className={`flex md:hidden items-center gap-5 overflow-x-auto pb-4 ${
            config.markets.length > 0 ? 'border-t border-[#2D5A45]/25 pt-3' : ''
          }`}
          style={{ scrollbarWidth: 'none' }}
        >
          {config.markets.length === 0 && (
            <a href={`/${country}`} className={linkClass(pathname === `/${country}`)}>
              Overview
            </a>
          )}
          {visibleSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={sectionLinkClass(pathname.startsWith(item.href))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Mobile Overflow Accordion ── */}
        {(overflowMarkets.length > 0 || overflowSections.length > 0) && (
          <MobileOverflowAccordion
            markets={overflowMarkets}
            sections={overflowSections}
            activeHref={pathname}
          />
        )}
      </div>
    </div>
  )
}
