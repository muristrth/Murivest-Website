"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Factory,
  Warehouse,
  Home,
  Store,
  Server,
  TrendingUp,
  Handshake,
  ShieldCheck,
  LineChart,
  FileText,
  Users,
  Landmark,
  ArrowRightLeft,
  Globe,
  Target,
  Briefcase,
  Search,
  BarChart3,
  PieChart,
  ArrowUpRight,
  LogIn,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, PROPERTY_TYPES } from "../lib/site";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

const NAV_ITEMS: NavItem[] = [
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

/* ═══════════════════════════════════════════════════════════════
   SKIP LINK
   ═══════════════════════════════════════════════════════════════ */

const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:bg-[#1B4332] focus:text-[#FAF9F6] focus:px-4 focus:py-2 focus:text-[11px] focus:tracking-[0.1em] focus:uppercase focus:outline-none focus:ring-1 focus:ring-[#B8956B]"
  >
    Skip to content
  </a>
);

/* ═══════════════════════════════════════════════════════════════
   MENU BUTTON
   ═══════════════════════════════════════════════════════════════ */

const MenuButton = ({
  open,
  onClick,
  className,
  dark = false,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-3 outline-none ${className || ""}`}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span
        className={`hidden sm:block text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 font-medium ${
          dark
            ? "text-[#C4B59D] group-hover:text-[#FAF9F6]"
            : "text-[#1A1A1A] group-hover:text-[#1B4332]"
        }`}
      >
        {open ? "Close" : "Menu"}
      </span>

      <div
        className={`relative w-9 h-9 flex items-center justify-center border transition-all duration-500 ${
          open
            ? "border-[#B8956B] bg-[#1B4332] rotate-90"
            : dark
            ? "border-[#B8956B] bg-[#1B4332]"
            : "border-[#1B4332]/20 bg-transparent group-hover:border-[#1B4332]/40"
        }`}
      >
        <div className="relative w-4 h-2.5 flex flex-col justify-between items-end">
          <span
            className={`block h-[1.5px] transition-all duration-500 ${
              open
                ? "w-4 bg-[#FAF9F6] rotate-45 translate-y-[4.5px]"
                : dark
                ? "w-4 bg-[#FAF9F6]"
                : "w-4 bg-[#1B4332] group-hover:w-3.5"
            }`}
          />
          <span
            className={`block h-[1.5px] transition-all duration-500 ${
              open
                ? "w-4 bg-[#FAF9F6] -rotate-45 -translate-y-[4.5px]"
                : dark
                ? "w-2.5 bg-[#B8956B]"
                : "w-2.5 bg-[#B8956B] group-hover:w-4"
            }`}
          />
        </div>
      </div>
    </button>
  );
};

/* ═══════════════════════════════════════════════════════════════
   DESKTOP MEGA DROPDOWN
   ═══════════════════════════════════════════════════════════════ */

const DesktopMegaDropdown = ({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  if (!item.children) return null;

  const gridCols =
    item.children.length > 8 ? "grid-cols-3" : item.children.length > 4 ? "grid-cols-2" : "grid-cols-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 right-0 bg-[#FAF9F6] border-b border-[#2D5A45]/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-40"
    >
      <div className="max-w-[1600px] mx-auto px-6 xl:px-10 py-8">
        <div className="flex items-center gap-2.5 mb-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A] font-medium">
            {item.description || item.label}
          </p>
        </div>

        <div className={`grid gap-4 ${gridCols}`}>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onMouseLeave}
              className="group flex items-center justify-between py-3 border-b border-[#2D5A45]/10 last:border-b-0 hover:bg-[#1B4332]/[0.02] px-2 -mx-2 rounded-sm transition-colors"
            >
              <span className="text-[13px] text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">
                {child.label}
              </span>
              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
                className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              />
            </Link>
          ))}
        </div>

        <Link
          href={item.href}
          onClick={onMouseLeave}
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-[#B8956B]/30 text-[#B8956B] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#B8956B]/10 transition-colors"
        >
          See All {item.label}
          <ArrowUpRight size={11} strokeWidth={1.5} />
        </Link>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MOBILE FULLSCREEN MENU — ACCORDION
   ═══════════════════════════════════════════════════════════════ */

const MobileFullScreenMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      setActiveItem(null);
      return;
    }

    prevFocusRef.current = document.activeElement as HTMLElement;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.classList.add("overflow-hidden");
    if (scrollbarWidth > 0) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    }

    const timer = setTimeout(() => {
      const firstFocusable = menuRef.current?.querySelector("button, a") as HTMLElement;
      firstFocusable?.focus();
    }, 50);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("overflow-hidden");
      document.documentElement.style.paddingRight = "";
      prevFocusRef.current?.focus();
    };
  }, [open, onClose]);

  const toggleItem = (label: string) => {
    setActiveItem((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[60] bg-[#1B4332] overflow-hidden lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,80,0.08),transparent_60%)]" />

          <div className="relative z-10 h-full flex flex-col max-w-[1600px] mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 xl:px-10 h-[56px] shrink-0 border-b border-[#2D5A45]/20">
              <Link
                href="/usa"
                onClick={onClose}
                className="flex items-center gap-3 group"
                aria-label="Murivest USA Home"
              >
                <span className="text-[17px] font-serif tracking-[0.14em] text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors duration-300">
                  {SITE.name}
                </span>
                <span className="hidden sm:block w-px h-4 bg-[#FAF9F6]/15" />
                <span className="hidden sm:block rounded-sm border border-[#B8956B]/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#B8956B]">
                  USA
                </span>
              </Link>

              <MenuButton open={true} onClick={onClose} dark />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="max-w-[1100px] mx-auto px-6 xl:px-10 py-6">
                <nav aria-label="Primary mobile">
                  <ul className="space-y-0">
                    {NAV_ITEMS.map((item, i) => {
                      const isActive = activeItem === item.label;
                      const hasChildren = item.children && item.children.length > 0;
                      const gridCols =
                        item.children && item.children.length > 6
                          ? "grid-cols-2"
                          : "grid-cols-1";

                      if (!hasChildren) {
                        return (
                          <li key={item.label} className="border-b border-[#2D5A45]/15">
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="group flex items-center gap-3 py-3.5 hover:bg-[#2D5A45]/5 px-2 -mx-2 rounded-sm transition-colors duration-300"
                            >
                              <span className="text-[#5A7A6A] text-[10px] font-mono">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-display text-lg text-[#C4B59D] group-hover:text-[#FAF9F6] transition-colors">
                                {item.label}
                              </span>
                              <ArrowUpRight
                                size={14}
                                strokeWidth={1.5}
                                className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                              />
                            </Link>
                          </li>
                        );
                      }

                      return (
                        <li key={item.label} className="border-b border-[#2D5A45]/15">
                          <button
                            onClick={() => toggleItem(item.label)}
                            className={`group w-full text-left py-3.5 transition-colors duration-300 px-2 -mx-2 rounded-sm ${
                              isActive ? "bg-[#2D5A45]/10" : "hover:bg-[#2D5A45]/5"
                            }`}
                            aria-expanded={isActive}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-[#5A7A6A] text-[10px] font-mono">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`font-display text-lg transition-colors ${
                                      isActive ? "text-[#FAF9F6]" : "text-[#C4B59D]"
                                    }`}
                                  >
                                    {item.label}
                                  </span>
                                  <ChevronDown
                                    size={14}
                                    strokeWidth={1.5}
                                    className={`transition-transform duration-300 shrink-0 ml-2 ${
                                      isActive ? "text-[#B8956B] rotate-180" : "text-[#5A7A6A]"
                                    }`}
                                  />
                                </div>
                                {item.description && (
                                  <p
                                    className={`text-[11px] mt-0.5 leading-relaxed max-w-sm transition-colors ${
                                      isActive ? "text-[#8A8A8A]" : "text-[#5A7A6A]"
                                    }`}
                                  >
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pb-6 pt-1 pl-12 pr-2">
                                  <div className={`grid gap-2 ${gridCols}`}>
                                    {item.children!.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={onClose}
                                        className="group flex items-center justify-between py-2.5 border-b border-[#2D5A45]/10 last:border-b-0 hover:bg-[#FAF9F6]/[0.03] px-2 -mx-2 rounded-sm transition-colors"
                                      >
                                        <span className="text-[13px] text-[#FAF9F6] group-hover:text-[#B8956B] transition-colors">
                                          {child.label}
                                        </span>
                                        <ArrowUpRight
                                          size={11}
                                          strokeWidth={1.5}
                                          className="text-[#B8956B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                        />
                                      </Link>
                                    ))}
                                  </div>

                                  <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-[#B8956B]/30 text-[#B8956B] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#B8956B]/10 transition-colors"
                                  >
                                    See All {item.label}
                                    <ArrowUpRight size={11} strokeWidth={1.5} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Bottom bar */}
              <div className="px-6 xl:px-10 py-6 border-t border-[#2D5A45]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <Link
                    href="/usa/contact"
                    onClick={onClose}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#C4B59D] hover:text-[#FAF9F6] transition-colors"
                  >
                    <Phone size={12} strokeWidth={1.5} />
                    Request a Mandate
                  </Link>
                </div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A]">
                  Murivest USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close everything on route change (Next.js pathname not imported here; using effect on mount is sufficient for this pattern)
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Body scroll lock handled inside MobileFullScreenMenu

  const handleNavEnter = (label: string) => {
    if (navCloseTimeout.current) clearTimeout(navCloseTimeout.current);
    setActiveDropdown(label);
  };

  const handleNavLeave = () => {
    navCloseTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const activeNavItem = NAV_ITEMS.find((n) => n.label === activeDropdown);

  return (
    <>
      <SkipLink />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6] border-b border-[#2D5A45]/10 h-[56px]">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10 h-full relative">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/usa"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Murivest USA Home"
            >
              <span className="text-[17px] font-serif tracking-[0.14em] text-[#1B4332] group-hover:text-[#B8956B] transition-colors duration-300">
                {SITE.name}
              </span>
              <span className="hidden sm:block w-px h-4 bg-[#2D5A45]/15" />
              <span className="hidden sm:block rounded-sm border border-[#B8956B]/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#B8956B]">
                USA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary"
              className="hidden lg:block"
              onMouseLeave={handleNavLeave}
            >
              <ul className="flex items-center gap-6 xl:gap-8">
                {NAV_ITEMS.slice(0, 8).map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isHovered = activeDropdown === item.label;

                  if (!hasChildren) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1A1A1A] hover:text-[#1B4332] transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleNavEnter(item.label)}
                    >
                      <button
                        className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 outline-none ${
                          isHovered
                            ? "text-[#1B4332]"
                            : "text-[#1A1A1A] hover:text-[#1B4332]"
                        }`}
                        aria-expanded={isHovered}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          size={9}
                          strokeWidth={1.5}
                          className={`transition-transform duration-300 ${
                            isHovered ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
                <li className="ml-2">
                  <Link
                    href="/usa/contact"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-[#B8956B]/30 text-[#B8956B] text-[10px] tracking-[0.18em] uppercase font-medium hover:bg-[#B8956B]/10 transition-colors"
                  >
                    Request a Mandate
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <MenuButton
                  open={menuOpen}
                  onClick={() => setMenuOpen((o) => !o)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Mega Dropdown */}
        <AnimatePresence>
          {activeNavItem?.children && (
            <DesktopMegaDropdown
              item={activeNavItem}
              onMouseEnter={() => {
                if (navCloseTimeout.current) clearTimeout(navCloseTimeout.current);
              }}
              onMouseLeave={handleNavLeave}
            />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileFullScreenMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Spacer */}
      <div className="h-[56px]" />
    </>
  );
}