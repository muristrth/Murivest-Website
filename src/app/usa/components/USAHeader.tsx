"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronDown,
  X,
  Menu,
  Phone,
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, PROPERTY_TYPES } from "../lib/site";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

const USA_NAV: NavItem[] = [
  {
    label: "Invest",
    href: "/usa/invest",
    description: "Investment strategies, criteria, and mandates",
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
    description: "Acquisition strategies and off-market sourcing",
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
    description: "Investment sales and disposition advisory",
    children: [
      { label: "Investment Sales", href: "/usa/sell/investment-sales" },
      { label: "Portfolio Sales", href: "/usa/sell/portfolio-sales" },
      { label: "Disposition Advisory", href: "/usa/sell/disposition" },
    ],
  },
  {
    label: "Capital",
    href: "/usa/capital",
    description: "Debt, equity, and recapitalization",
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
    description: "Commercial real estate by asset class",
    children: [
      { label: "Office", href: "/usa/properties/office" },
      { label: "Industrial", href: "/usa/properties/industrial" },
      { label: "Logistics", href: "/usa/properties/logistics" },
      { label: "Multifamily", href: "/usa/properties/multifamily" },
      { label: "Retail", href: "/usa/properties/retail" },
      { label: "Data Centers", href: "/usa/properties/data-centers" },
      { label: "All Property Types", href: "/usa/commercial-real-estate" },
    ],
  },
  {
    label: "Markets",
    href: "/usa/markets",
    description: "U.S. metro market coverage",
    children: [
      { label: "Texas", href: "/usa/markets/texas" },
      { label: "Florida", href: "/usa/markets/florida" },
      { label: "California", href: "/usa/markets/california" },
      { label: "New York", href: "/usa/markets/new-york" },
      { label: "Georgia", href: "/usa/markets/georgia" },
      { label: "Arizona", href: "/usa/markets/arizona" },
      { label: "All Markets", href: "/usa/markets" },
    ],
  },
  {
    label: "Investors",
    href: "/usa/investors",
    description: "Capital-side advisory and access",
    children: [
      { label: "Family Offices", href: "/usa/investors/family-offices" },
      { label: "Private Equity", href: "/usa/investors/private-equity" },
      { label: "Institutional", href: "/usa/investors/institutional" },
      { label: "International", href: "/usa/investors/international" },
      { label: "All Investor Types", href: "/usa/investors" },
    ],
  },
  {
    label: "Research",
    href: "/usa/research",
    description: "Market intelligence and investment theses",
    children: [
      { label: "Market Reports", href: "/usa/research/market-reports" },
      { label: "Investment Theses", href: "/usa/research/investment-theses" },
      { label: "Sector Research", href: "/usa/research/sector-research" },
      { label: "Market Outlook", href: "/usa/research/market-outlook" },
      { label: "All Research", href: "/usa/research" },
    ],
  },
];

const CompactDropdown = ({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  if (!item.children) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
    >
      <div className="min-w-[220px] rounded-lg border border-[#E8E6E1] bg-white p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        {item.description && (
          <p className="px-3 py-2 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">
            {item.description}
          </p>
        )}
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-md px-3 py-2 text-[11px] text-[#2C2C2C] transition-colors hover:bg-[#FAF9F6] hover:text-[#1B4332]"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const DesktopNavItem = ({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hasChildren ? (
        <button
          className="flex items-center gap-1 px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] font-medium text-[#5A5A5A] transition-colors hover:text-[#1B4332]"
        >
          {item.label}
          <ChevronDown
            size={10}
            strokeWidth={1.5}
            className="transition-transform"
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className="px-2 py-1.5 text-[10px] uppercase tracking-[0.12em] font-medium text-[#5A5A5A] transition-colors hover:text-[#1B4332]"
        >
          {item.label}
        </Link>
      )}

      {hasChildren && (
        <CompactDropdown
          item={item}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </div>
  );
};

const MobileAccordion = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[#FAF9F6] lg:hidden"
          style={{ top: "104px" }}
        >
          <div className="h-full overflow-y-auto">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-6">
              <nav aria-label="Primary mobile">
                <ul className="space-y-0">
                  {USA_NAV.map((item, i) => {
                    const isActive = activeItem === item.label;
                    const hasChildren = item.children && item.children.length > 0;

                    if (!hasChildren) {
                      return (
                        <li key={item.label} className="border-b border-[#E8E6E1]">
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center justify-between py-3.5"
                          >
                            <span className="font-serif text-lg text-[#2C2C2C]">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={item.label} className="border-b border-[#E8E6E1]">
                        <button
                          onClick={() =>
                            setActiveItem((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-3.5"
                        >
                          <span className="font-serif text-lg text-[#2C2C2C]">
                            {item.label}
                          </span>
                          <ChevronDown
                            size={14}
                            strokeWidth={1.5}
                            className={`transition-transform text-[#B8956B] ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-1">
                                {item.children!.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    className="block py-2 text-[11px] uppercase tracking-[0.1em] text-[#8B8680] hover:text-[#1B4332] transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
                <Link
                  href="/usa/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4332] text-white text-[10px] uppercase tracking-[0.14em] font-medium hover:bg-[#2D5A45] transition-colors"
                >
                  <Phone size={12} strokeWidth={1.5} />
                  Request a Mandate
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function USAHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleNavEnter = useCallback((label: string) => {
    if (navCloseTimeout.current) clearTimeout(navCloseTimeout.current);
    setActiveDropdown(label);
  }, []);

  const handleNavLeave = useCallback(() => {
    navCloseTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  const activeNavItem = USA_NAV.find((n) => n.label === activeDropdown);

  return (
    <>
      <header
        className="sticky top-[56px] z-40 bg-[#F8F7F4] border-b border-[#E8E6E1] h-[48px]"
        role="banner"
      >
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            <Link
              href="/usa"
              className="flex items-center gap-3 shrink-0"
              aria-label="Murivest USA Home"
            >
              <span className="text-[11px] font-serif tracking-[0.14em] text-[#1B4332] font-medium">
                MURIVEST USA
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={handleNavLeave}
            >
              {USA_NAV.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  onMouseEnter={() => handleNavEnter(item.label)}
                  onMouseLeave={handleNavLeave}
                />
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/usa/contact"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B4332] text-white text-[9px] uppercase tracking-[0.14em] font-medium hover:bg-[#2D5A45] transition-colors"
              >
                Request a Mandate
              </Link>

              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 border border-[#1B4332]/20 text-[#1B4332] text-[9px] uppercase tracking-[0.14em] font-medium hover:border-[#1B4332]/40 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? "Close" : "Menu"}
                <ChevronDown
                  size={10}
                  strokeWidth={1.5}
                  className={`transition-transform ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeNavItem?.children && (
            <CompactDropdown
              item={activeNavItem}
              onMouseEnter={() => {
                if (navCloseTimeout.current) clearTimeout(navCloseTimeout.current);
              }}
              onMouseLeave={handleNavLeave}
            />
          )}
        </AnimatePresence>
      </header>

      <MobileAccordion open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
