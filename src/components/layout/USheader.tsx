"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION CONFIGURATION — USA (7 primary items + More)
   ═══════════════════════════════════════════════════════════════ */

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

// Original items (excluding the ones we'll move under "More")
const PRIMARY_ITEMS: NavItem[] = [
  {
    label: "Invest",
    href: "/usa/invest",
    children: [
      { label: "Investment Strategies", href: "/usa/invest/strategies" },
      { label: "Investment Criteria", href: "/usa/invest/criteria" },
      { label: "Mandates", href: "/usa/invest/mandates" },
      { label: "Opportunities", href: "/usa/invest/opportunities" },
    ],
  },
  {
    label: "Acquire",
    href: "/usa/acquire",
    children: [
      { label: "Off-Market", href: "/usa/acquire/off-market" },
      { label: "Stabilized", href: "/usa/acquire/stabilized" },
      { label: "Value-Add", href: "/usa/acquire/value-add" },
      { label: "Opportunistic", href: "/usa/acquire/opportunistic" },
      { label: "Distressed", href: "/usa/acquire/distressed" },
    ],
  },
  {
    label: "Sell",
    href: "/usa/sell",
    children: [
      { label: "Investment Sales", href: "/usa/sell/investment-sales" },
      { label: "Portfolio Sales", href: "/usa/sell/portfolio-sales" },
      { label: "Disposition Advisory", href: "/usa/sell/disposition" },
    ],
  },
  {
    label: "Capital",
    href: "/usa/capital",
    children: [
      { label: "Capital Advisory", href: "/usa/capital/capital-advisory" },
      { label: "Capital Introductions", href: "/usa/capital/capital-introduction" },
      { label: "Equity", href: "/usa/capital/equity" },
      { label: "Debt", href: "/usa/capital/debt" },
      { label: "Recapitalization", href: "/usa/capital/recapitalization" },
    ],
  },
  {
    label: "Properties",
    href: "/usa/properties",
    children: [
      { label: "Office", href: "/usa/properties/office" },
      { label: "Industrial", href: "/usa/properties/industrial" },
      { label: "Logistics", href: "/usa/properties/logistics" },
      { label: "Multifamily", href: "/usa/properties/multifamily" },
      { label: "Retail", href: "/usa/properties/retail" },
      { label: "Hospitality", href: "/usa/properties/hospitality" },
      { label: "Healthcare", href: "/usa/properties/healthcare" },
      { label: "Self-Storage", href: "/usa/properties/self-storage" },
      { label: "Data Centers", href: "/usa/properties/data-centers" },
      { label: "Net Lease", href: "/usa/properties/net-lease" },
    ],
  },
  {
    label: "Markets",
    href: "/usa/markets",
    children: [
      { label: "Texas", href: "/usa/markets/texas" },
      { label: "Florida", href: "/usa/markets/florida" },
      { label: "California", href: "/usa/markets/california" },
      { label: "New York", href: "/usa/markets/new-york" },
      { label: "Georgia", href: "/usa/markets/georgia" },
      { label: "Arizona", href: "/usa/markets/arizona" },
      { label: "North Carolina", href: "/usa/markets/north-carolina" },
      { label: "South Carolina", href: "/usa/markets/south-carolina" },
      { label: "Tennessee", href: "/usa/markets/tennessee" },
      { label: "Nevada", href: "/usa/markets/nevada" },
      { label: "Colorado", href: "/usa/markets/colorado" },
    ],
  },
  {
    label: "Research",
    href: "/usa/research",
    children: [
      { label: "Market Reports", href: "/usa/research/market-reports" },
      { label: "Investment Theses", href: "/usa/research/investment-theses" },
      { label: "Sector Research", href: "/usa/research/sector-research" },
      { label: "Market Outlook", href: "/usa/research/market-outlook" },
      { label: "Intelligence", href: "/usa/research/intelligence" },
    ],
  },
];

// Items to be grouped under "More"
const MORE_ITEMS: NavItem[] = [
  {
    label: "Investors",
    href: "/usa/investors",
    children: [
      { label: "Family Offices", href: "/usa/investors/family-offices" },
      { label: "Private Equity", href: "/usa/investors/private-equity" },
      { label: "Institutional", href: "/usa/investors/institutional" },
      { label: "High Net Worth", href: "/usa/investors/high-net-worth" },
      { label: "UHNW Investors", href: "/usa/investors/ultra-high-net-worth" },
      { label: "International", href: "/usa/investors/international" },
      { label: "Developers", href: "/usa/investors/developers" },
    ],
  },
  {
    label: "Deals",
    href: "/usa/deals",
    children: [
      { label: "Featured", href: "/usa/deals/featured" },
      { label: "Off-Market", href: "/usa/deals/off-market" },
      { label: "Institutional", href: "/usa/deals/institutional" },
      { label: "Private", href: "/usa/deals/private" },
    ],
  },
  {
    label: "Advisory",
    href: "/usa/advisory",
    children: [
      { label: "Acquisition Advisory", href: "/usa/advisory/acquisition" },
      { label: "Disposition Advisory", href: "/usa/advisory/disposition" },
      { label: "Portfolio Advisory", href: "/usa/advisory/portfolio" },
      { label: "Strategy", href: "/usa/advisory/strategy" },
      { label: "Valuation", href: "/usa/advisory/valuation" },
    ],
  },
  {
    label: "Brokerage",
    href: "/usa/brokerage",
    children: [
      { label: "Acquisition", href: "/usa/brokerage/acquisition" },
      { label: "Disposition", href: "/usa/brokerage/disposition" },
      { label: "Investment Sales", href: "/usa/brokerage/investment-sales" },
    ],
  },
  {
    label: "Developers",
    href: "/usa/developers",
    children: [
      { label: "Development Sites", href: "/usa/developers/development-sites" },
      { label: "Land", href: "/usa/developers/land" },
      { label: "Joint Ventures", href: "/usa/developers/joint-ventures" },
    ],
  },
  {
    label: "Owners",
    href: "/usa/owners",
    children: [
      { label: "Asset Sales", href: "/usa/owners/asset-sales" },
      { label: "Portfolio Sales", href: "/usa/owners/portfolio-sales" },
      { label: "Recapitalization", href: "/usa/owners/recapitalization" },
    ],
  },
  {
    label: "Insights",
    href: "/usa/insights",
    children: [
      { label: "Articles", href: "/usa/insights/articles" },
      { label: "Analysis", href: "/usa/insights/analysis" },
      { label: "Commentary", href: "/usa/insights/commentary" },
    ],
  },
  {
    label: "Resources",
    href: "/usa/resources",
    children: [
      { label: "Guides", href: "/usa/resources/guides" },
      { label: "Glossary", href: "/usa/resources/glossary" },
      { label: "Calculators", href: "/usa/resources/calculators" },
      { label: "Checklists", href: "/usa/resources/checklists" },
    ],
  },
  {
    label: "1031 Exchange",
    href: "/usa/1031-exchange",
  },
  {
    label: "Sale-Leaseback",
    href: "/usa/sale-leaseback",
  },
  {
    label: "Portfolio",
    href: "/usa/portfolio",
  },
  {
    label: "Submit a Deal",
    href: "/usa/submit-a-deal",
  },
  {
    label: "About",
    href: "/usa/about",
  },
  {
    label: "Contact",
    href: "/usa/contact",
  },
];

// Combine: 7 primary + one "More" item
const NAV_ITEMS: NavItem[] = [
  ...PRIMARY_ITEMS,
  {
    label: "More",
    href: "/usa/more",
    description: "Additional services and resources",
    children: MORE_ITEMS,
  },
];

/* ──────────────────────────────────────────────────────────────
   COMPACT DROPDOWN (matches Kenyan style)
   ────────────────────────────────────────────────────────────── */

const CompactDropdown = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  if (!item.children) return null;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#FAF9F6] border border-[#2D5A45]/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
      >
        <div className="px-5 pt-5 pb-3 border-b border-[#2D5A45]/8">
          <p className="text-[8px] tracking-[0.3em] uppercase text-[#5A7A6A] font-medium mb-1">
            {item.description || `${item.label} opportunities`}
          </p>
          <h4 className="text-[15px] font-serif text-[#1B4332] tracking-tight">
            {item.label}
          </h4>
        </div>

        <div className="p-2 max-h-[320px] overflow-y-auto">
          {item.children.map((child) => (
            <a
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="group flex items-start gap-3 p-3 rounded-sm hover:bg-[#1B4332]/[0.03] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors font-medium">
                    {child.label}
                  </span>
                  <ArrowUpRight
                    size={10}
                    strokeWidth={1.5}
                    className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="px-4 pb-4 pt-1">
          <a
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#2D5A45]/15 text-[9px] tracking-[0.18em] uppercase text-[#5A7A6A] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
          >
            See All {item.label}
            <ArrowUpRight size={10} strokeWidth={1.5} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   DESKTOP NAV ITEM (hover with delay)
   ────────────────────────────────────────────────────────────── */

const DesktopNavItem = ({
  item,
  active,
  onActivate,
  onDeactivate,
}: {
  item: NavItem;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onDeactivate();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onDeactivate]);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    onActivate();
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => onDeactivate(), 160);
  };

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      ref={ref}
      className="relative h-full flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {!hasChildren ? (
        <a
          href={item.href}
          className={`flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 h-full ${
            active ? "text-[#B8956B]" : "text-[#1A1A1A] hover:text-[#1B4332]"
          }`}
        >
          {item.label}
        </a>
      ) : (
        <button
          onClick={() => (active ? onDeactivate() : onActivate())}
          className={`flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 outline-none h-full ${
            active ? "text-[#B8956B]" : "text-[#1A1A1A] hover:text-[#1B4332]"
          }`}
        >
          {item.label}
          <ChevronDown
            size={9}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${active ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <AnimatePresence>
        {active && hasChildren && (
          <CompactDropdown item={item} onClose={onDeactivate} />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   MOBILE ACCORDION (matches Kenyan style)
   ────────────────────────────────────────────────────────────── */

const MobileAccordion = ({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <div className="border-b border-[#2D5A45]/10">
        <a
          href={item.href}
          onClick={onClose}
          className="flex items-center justify-between w-full py-4 px-5 hover:bg-[#1B4332]/[0.02] transition-colors"
          style={{ minHeight: 48 }}
        >
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A] font-medium">
            {item.label}
          </span>
          <ArrowUpRight size={10} strokeWidth={1.5} className="text-[#5A7A6A]" />
        </a>
      </div>
    );
  }

  return (
    <div className="border-b border-[#2D5A45]/10">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-5 hover:bg-[#1B4332]/[0.02] transition-colors"
        style={{ minHeight: 48 }}
      >
        <span className="text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A] font-medium">
          {item.label}
        </span>
        <ChevronDown
          size={12}
          strokeWidth={1.5}
          className={`text-[#5A7A6A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden bg-[#F8F7F4]/60"
          >
            <div className="px-5 py-3 space-y-0.5">
              {item.children!.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 py-3 border-b border-[#2D5A45]/5 last:border-b-0"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">
                        {child.label}
                      </span>
                      <ArrowUpRight
                        size={10}
                        strokeWidth={1.5}
                        className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </a>
              ))}
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2 mt-3 py-2.5 text-[10px] tracking-[0.14em] uppercase text-[#5A7A6A] hover:text-[#B8956B] transition-colors"
              >
                View All {item.label}
                <ArrowUpRight size={10} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   MAIN HEADER COMPONENT
   ────────────────────────────────────────────────────────────── */

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const closeAll = useCallback(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setExpandedMobile(null);
  }, []);

  useEffect(() => {
    closeAll();
  }, [closeAll]);

  return (
    <>
      <header className="sticky top-[56px] z-40 bg-[#F8F7F4] border-b border-[#2D5A45]/8 h-[48px]">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            {/* ── LEFT: Country Identity ── */}
            <a
              href="/usa"
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <span className="text-[13px] font-serif tracking-[0.12em] text-[#1B4332] group-hover:text-[#B8956B] transition-colors duration-300">
                MURIVEST USA
              </span>
              <span className="hidden md:block w-px h-3 bg-[#2D5A45]/15" />
              <span className="hidden md:block text-[8px] tracking-[0.3em] uppercase text-[#5A7A6A] font-light">
                USA Office
              </span>
            </a>

            {/* ── CENTER: Desktop Nav ── */}
            <nav className="hidden lg:flex items-center h-full gap-7 xl:gap-9">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  active={activeDropdown === item.label}
                  onActivate={() => setActiveDropdown(item.label)}
                  onDeactivate={() => setActiveDropdown(null)}
                />
              ))}
            </nav>

            {/* ── RIGHT: Actions ── */}
            <div className="flex items-center gap-4">
              <a
                href="/usa/contact"
                className="hidden md:flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-[#5A7A6A] hover:text-[#1B4332] transition-colors"
              >
                <Phone size={11} strokeWidth={1.5} />
                <span>Contact</span>
              </a>

              <a
                href="/usa/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1B4332] text-[#FAF9F6] text-[9px] uppercase tracking-[0.16em] font-medium hover:bg-[#2D5A45] transition-colors"
              >
                <TrendingUp size={10} strokeWidth={1.5} />
                Request a Mandate
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
              style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
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
                {NAV_ITEMS.map((item) => (
                  <MobileAccordion
                    key={item.label}
                    item={item}
                    isOpen={expandedMobile === item.label}
                    onToggle={() =>
                      setExpandedMobile((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    onClose={closeAll}
                  />
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-[#2D5A45]/10 space-y-2.5">
                <a
                  href="/usa/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1B4332] text-[#FAF9F6] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#2D5A45] transition-colors"
                >
                  <TrendingUp size={12} strokeWidth={1.5} />
                  Request a Mandate
                </a>
                <a
                  href="/usa/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#1B4332] text-[#1B4332] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#1B4332] hover:text-[#FAF9F6] transition-colors"
                >
                  <Mail size={12} strokeWidth={1.5} />
                  Contact Us
                </a>
              </div>

              <div className="px-5 py-4 text-center border-t border-[#2D5A45]/8">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A8A8A]">
                  USA Office
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}