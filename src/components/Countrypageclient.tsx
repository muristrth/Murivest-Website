"use client";

/**
 * MURIVEST — COUNTRY MARKET PAGE
 * ================================
 * Design: CBRE Capital Markets × Bloomberg Terminal × Old Money UHNWI
 *
 * Palette:
 *   Forest     #1A3A2A  — primary green, authority
 *   ForestMid  #2D5A40  — hover / active
 *   ForestFog  #E8EFEB  — light green tint for sections
 *   Ivory      #FAFAF7  — page ground
 *   Paper      #FFFFFF
 *   Ink        #1A1A1A  — body text
 *   Stone      #6B6B6B  — captions / meta
 *   Rule       #E2DED7  — hairlines
 *   Brass      #A8834A  — accent only (prices, yields, pull-quotes)
 *   BrassLight #C4A06C
 *
 * Type stack:
 *   Display  — Playfair Display (serif, editorial weight contrasts)
 *   Body     — Times New Roman (institutional gravitas, body copy)
 *   Utility  — Montserrat (all-caps data labels, nav, tags)
 *
 * Signature element:
 *   A Bloomberg-style "ticker rail" beneath the hero that animates
 *   real listing counts & asset-class stats horizontally.
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  X,
  Maximize2,
  Mail,
  Phone,
  Calendar,
  LayoutGrid,
  TrendingUp,
  Building2,
  Shield,
  FileText,
  ChevronRight,
  Search,
  SlidersHorizontal,
  ChevronDown,
  BarChart2,
  Globe,
  Landmark,
  AlertCircle,
} from "lucide-react";

/* ─── Google Fonts injection (runtime — works in Next.js App Router) ─── */
const FontInjector = () => {
  useEffect(() => {
    if (document.getElementById("murivest-fonts")) return;
    const link = document.createElement("link");
    link.id = "murivest-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── Token constants (keep in sync with Tailwind if needed) ─── */
const T = {
  forest: "#1A3A2A",
  forestMid: "#2D5A40",
  forestFog: "#E8EFEB",
  ivory: "#FAFAF7",
  paper: "#FFFFFF",
  ink: "#1A1A1A",
  stone: "#6B6B6B",
  rule: "#E2DED7",
  brass: "#A8834A",
  brassLight: "#C4A06C",
};

/* ─── Types ─── */
interface FeaturedProperty {
  _id: string;
  title: string;
  slug: { current: string };
  assetType: string;
  listingType: string;
  city?: string;
  submarket?: string;
  askingPrice?: number;
  currency?: string;
  capRate?: number;
  totalArea?: number;
  occupancy?: number;
  gradeClassification?: string;
  description?: string;
  highlights?: string[];
  yearBuilt?: number;
  floors?: number;
  contactEmail?: string;
  images?: { asset?: { url?: string } }[];
}

interface MarketIntelCard {
  title: string;
  category: string;
  date: string;
  summary: string;
}

interface AssetClassEntry {
  assetType: string;
  count: number;
  forSale: number;
  forLease: number;
}

/* ─── Static market intelligence ─── */
const INTEL_BY_COUNTRY: Record<string, MarketIntelCard[]> = {
  kenya: [
    {
      title: "Nairobi Grade A Office Absorption Q1 2025",
      category: "Office Market",
      date: "March 2025",
      summary:
        "Westlands and Upper Hill submarkets recorded positive net absorption of 42,000 sq ft driven by NGO and tech-sector demand.",
    },
    {
      title: "Logistics & Cold-Chain Investment Outlook",
      category: "Industrial",
      date: "February 2025",
      summary:
        "EPZA corridor and Athi River attracting institutional capital as e-commerce penetration drives demand for modern logistics facilities.",
    },
    {
      title: "Nairobi Retail Repositioning Trends",
      category: "Retail",
      date: "January 2025",
      summary:
        "Mixed-use F&B-anchored centres outperforming traditional malls; occupancy divergence widens between Grade A and secondary assets.",
    },
  ],
  "united-kingdom": [
    {
      title: "London City Office Take-Up H1 2025",
      category: "Office Market",
      date: "March 2025",
      summary:
        "City core take-up reached 4.2M sq ft, with ESG-compliant Grade A stock commanding 18% premium over secondary.",
    },
    {
      title: "UK Logistics Golden Triangle Demand Report",
      category: "Industrial",
      date: "February 2025",
      summary:
        "Vacancy rates compressed to 1.8% across the Midlands logistics corridor; speculative development accelerating.",
    },
    {
      title: "UK Pension Fund Real Estate Allocation Q4 2024",
      category: "Capital Flows",
      date: "January 2025",
      summary:
        "Defined benefit schemes increased direct property allocations by 120bps targeting income-producing logistics and living assets.",
    },
  ],
  "united-arab-emirates": [
    {
      title: "Dubai Office Market Outlook 2025",
      category: "Office Market",
      date: "March 2025",
      summary:
        "DIFC and Business Bay Grade A vacancy below 4%; rental growth of 12% YoY as sovereign and family office HQs expand.",
    },
    {
      title: "UAE Sovereign Wealth Real Asset Flows",
      category: "Capital Flows",
      date: "February 2025",
      summary:
        "ADIA and Mubadala deployed $8.4B into global real estate in 2024; logistics, data centres and living sectors prioritised.",
    },
    {
      title: "Abu Dhabi Mixed-Use Development Pipeline",
      category: "Development",
      date: "January 2025",
      summary:
        "Al Maryah and Saadiyat Island projects totalling 2.1M sq ft GFA expected to complete by Q4 2026.",
    },
  ],
  singapore: [
    {
      title: "Singapore REIT Capital Markets Review Q1 2025",
      category: "Capital Markets",
      date: "March 2025",
      summary:
        "S-REIT sector market cap reached SGD 110B; logistics and data centre REITs led total returns at 14.2% YTD.",
    },
    {
      title: "Marina Bay Grade A Office Rental Growth",
      category: "Office Market",
      date: "February 2025",
      summary:
        "Core CBD Grade A rents averaged SGD 12.80 psf pm with <3.5% vacancy; strong demand from financial services and tech.",
    },
    {
      title: "Singapore Data Centre Investment Demand",
      category: "Emerging Sectors",
      date: "January 2025",
      summary:
        "IDA moratorium lifted; three new hyperscale campuses approved totalling 150MW of critical IT load.",
    },
  ],
};

const DEFAULT_INTEL: MarketIntelCard[] = [
  {
    title: "Global CRE Capital Flows Q1 2025",
    category: "Capital Markets",
    date: "March 2025",
    summary:
      "Cross-border investment volumes reached $142B globally; logistics and data centres captured 38% of total allocations.",
  },
  {
    title: "Office Market Recovery Monitor",
    category: "Office",
    date: "February 2025",
    summary:
      "Prime-to-secondary rental divergence widening globally; flight-to-quality occupier demand concentrated in sub-3% vacancy submarkets.",
  },
  {
    title: "Emerging Market CRE Opportunity Report",
    category: "Strategy",
    date: "January 2025",
    summary:
      "SSA and SEA markets offer 200–400bps yield premium over developed markets with improving legal and title frameworks.",
  },
];

const ASSET_ICONS: Record<string, string> = {
  office: "🏢",
  retail: "🏬",
  logistics: "📦",
  hospitality: "🏨",
  "mixed-use": "🏙️",
  multifamily: "🏘️",
  land: "🏗️",
  "data-centre": "🖥️",
  "life-sciences": "🔬",
  healthcare: "🏥",
};

/* ─── Helpers ─── */
function fmt(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function currency(value: number, cur = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cur,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/* ═══════════════════════════════════════════════════════════════
   BLOOMBERG TICKER RAIL  — signature element
═══════════════════════════════════════════════════════════════ */
const TickerRail: React.FC<{
  items: { label: string; value: string | number }[];
}> = ({ items }) => {
  const doubled = [...items, ...items]; // seamless loop
  return (
    <div
      className="overflow-hidden border-t border-b"
      style={{ borderColor: "rgba(255,255,255,0.12)", background: T.forest }}
    >
      <motion.div
        className="flex whitespace-nowrap py-2.5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span
              className="text-[9px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {item.label}
            </span>
            <span
              className="text-[11px] font-medium"
              style={{ color: T.brassLight }}
            >
              {item.value}
            </span>
            <span
              className="text-[9px]"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PROPERTY DRAWER
═══════════════════════════════════════════════════════════════ */
const PropertyDrawer: React.FC<{
  property: FeaturedProperty | null;
  isOpen: boolean;
  countrySlug: string;
  onClose: () => void;
}> = ({ property, isOpen, countrySlug, onClose }) => {
  if (!property) return null;
  const imgSrc = property.images?.[0]?.asset?.url ?? "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ background: T.ink }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 38, stiffness: 320 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[500px] z-50 overflow-y-auto shadow-2xl"
            style={{ background: T.ivory, borderLeft: `1px solid ${T.rule}` }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center transition-colors"
              style={{
                background: T.paper,
                border: `1px solid ${T.rule}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = T.forest)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = T.rule)
              }
            >
              <X className="w-4 h-4" style={{ color: T.ink }} />
            </button>

            {/* Hero image */}
            <div
              className="relative h-[300px] overflow-hidden"
              style={{ background: T.rule }}
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 className="w-14 h-14" style={{ color: T.rule }} />
                </div>
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,58,42,0.85) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-2 font-medium"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: T.brassLight,
                  }}
                >
                  {fmt(property.listingType)} · {fmt(property.assetType)}
                </p>
                <h2
                  className="text-2xl leading-tight text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {property.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-7 space-y-8">
              {/* Location & price */}
              <div className="space-y-4">
                {property.city && (
                  <div
                    className="flex items-start gap-2"
                    style={{ color: T.stone }}
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "Times New Roman, serif" }}
                    >
                      {property.submarket ? `${property.submarket}, ` : ""}
                      {property.city}
                    </span>
                  </div>
                )}
                <div
                  className="grid grid-cols-2 gap-4 pt-4"
                  style={{ borderTop: `1px solid ${T.rule}` }}
                >
                  <div>
                    <Label>Asset Value</Label>
                    <p
                      className="text-2xl mt-1"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: T.ink,
                      }}
                    >
                      {property.askingPrice
                        ? currency(
                            property.askingPrice,
                            property.currency ?? "KES"
                          )
                        : "Price on Request"}
                    </p>
                  </div>
                  {property.capRate && (
                    <div className="text-right">
                      <Label>Cap Rate</Label>
                      <p
                        className="text-2xl mt-1"
                        style={{
                          fontFamily: "Playfair Display, serif",
                          color: T.brass,
                        }}
                      >
                        {property.capRate}%
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Tag bg={T.forest} color={T.paper}>
                  {fmt(property.assetType)}
                </Tag>
                <Tag bg={T.forestFog} color={T.forest}>
                  {fmt(property.listingType)}
                </Tag>
                {property.gradeClassification && (
                  <Tag bg={T.brass} color={T.paper}>
                    {fmt(property.gradeClassification)}
                  </Tag>
                )}
                {property.occupancy && (
                  <Tag bg={T.ivory} color={T.ink} border={T.rule}>
                    {property.occupancy}% Occupied
                  </Tag>
                )}
              </div>

              {/* Investment metrics grid */}
              <div className="space-y-3">
                <SectionLabel icon={<TrendingUp className="w-3.5 h-3.5" />}>
                  Investment Metrics
                </SectionLabel>
                <div className="grid grid-cols-2 gap-3">
                  {property.totalArea && (
                    <Metric label="Total Area">
                      {property.totalArea.toLocaleString()} sq ft
                    </Metric>
                  )}
                  {property.floors && (
                    <Metric label="Floors">{property.floors}</Metric>
                  )}
                  {property.yearBuilt && (
                    <Metric label="Year Built">{property.yearBuilt}</Metric>
                  )}
                  {property.capRate && (
                    <div
                      className="p-4 col-span-2 flex items-center justify-between"
                      style={{ background: T.forest }}
                    >
                      <span
                        className="text-[9px] tracking-[0.2em] uppercase opacity-60 text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Cap Rate
                      </span>
                      <span
                        className="text-2xl text-white"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {property.capRate}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Executive summary */}
              {property.description && (
                <div className="space-y-3">
                  <SectionLabel>Executive Summary</SectionLabel>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      color: "#4A4A4A",
                      lineHeight: 1.8,
                    }}
                  >
                    {property.description}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {property.highlights && property.highlights.length > 0 && (
                <div className="space-y-3">
                  <SectionLabel>Key Attributes</SectionLabel>
                  <ul className="space-y-2.5">
                    {property.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-px h-4 mt-1 flex-shrink-0"
                          style={{ background: T.brass }}
                        />
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Times New Roman, serif",
                            color: T.ink,
                          }}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Advisor card */}
              <div
                className="p-5 space-y-4"
                style={{
                  background: T.paper,
                  border: `1px solid ${T.rule}`,
                }}
              >
                <SectionLabel>Mandated Advisor</SectionLabel>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: T.forest }}
                  >
                    <span
                      className="text-white text-[10px] tracking-widest font-medium"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      MRG
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p
                      className="text-base"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: T.ink,
                      }}
                    >
                      Murivest Realty Group
                    </p>
                    <ContactLine icon={<Mail className="w-3.5 h-3.5" />}>
                      {property.contactEmail ?? "capital@murivest.co.ke"}
                    </ContactLine>
                    <ContactLine icon={<Phone className="w-3.5 h-3.5" />}>
                      +254 787 707 284
                    </ContactLine>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-1">
                <a
                  href={`/${countrySlug}/commercial-real-estate/${property.assetType}/${property.listingType}/${property.slug.current}`}
                  className="flex items-center justify-center gap-2 w-full h-12 transition-colors"
                  style={{
                    background: T.forest,
                    color: T.paper,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = T.forestMid)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = T.forest)
                  }
                >
                  <FileText className="w-4 h-4" />
                  View Full Prospectus
                </a>
                <a
                  href={`mailto:${
                    property.contactEmail ?? "capital@murivest.co.ke"
                  }?subject=Investment Inquiry: ${encodeURIComponent(
                    property.title
                  )}`}
                  className="flex items-center justify-center gap-2 w-full h-12 transition-colors"
                  style={{
                    border: `1px solid ${T.rule}`,
                    color: T.ink,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.brass;
                    e.currentTarget.style.color = T.brass;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = T.rule;
                    e.currentTarget.style.color = T.ink;
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Consultation
                </a>
              </div>

              {/* Disclaimer */}
              <p
                className="text-center text-[10px] italic leading-relaxed pt-2"
                style={{
                  color: T.stone,
                  borderTop: `1px solid ${T.rule}`,
                  paddingTop: "1rem",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Confidential investment materials. Qualified investors only.
                All figures indicative subject to due diligence.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PROPERTY CARD  (CBRE Capital Markets grid card style)
═══════════════════════════════════════════════════════════════ */
const PropertyCard: React.FC<{
  property: FeaturedProperty;
  countrySlug: string;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onQuickView: (p: FeaturedProperty) => void;
}> = ({ property, countrySlug, index, isHovered, onHover, onQuickView }) => {
  const imgSrc = property.images?.[0]?.asset?.url ?? "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className="group"
      style={{
        background: T.paper,
        border: `1px solid ${isHovered ? T.brass : T.rule}`,
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 16px 40px rgba(26,58,42,0.10)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => onHover(property._id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: 240, background: T.rule }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={property.title}
            className="w-full h-full object-cover"
            style={{
              transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
              transform: isHovered ? "scale(1.04)" : "scale(1)",
            }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Building2 className="w-10 h-10" style={{ color: T.rule }} />
          </div>
        )}
        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Asset type badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 text-white text-[9px] tracking-[0.2em] uppercase font-medium"
            style={{
              background: T.forest,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {fmt(property.assetType)}
          </span>
        </div>

        {/* Cap rate badge */}
        {property.capRate && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1.5 text-white text-[9px] tracking-[0.15em] uppercase font-medium"
              style={{
                background: T.brass,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {property.capRate}% Cap
            </span>
          </div>
        )}

        {/* Grade bottom-right */}
        {property.gradeClassification && (
          <div className="absolute bottom-4 right-4">
            <span
              className="px-3 py-1.5 text-[9px] tracking-[0.12em] uppercase font-medium"
              style={{
                background: "rgba(255,255,255,0.95)",
                color: T.ink,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {fmt(property.gradeClassification)}
            </span>
          </div>
        )}

        {/* Hover overlay — actions */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{
            background: "rgba(26,58,42,0.82)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <button
            onClick={() => onQuickView(property)}
            className="px-6 py-3 text-[9px] tracking-[0.25em] uppercase font-medium transition-colors"
            style={{
              background: T.paper,
              color: T.forest,
              fontFamily: "Montserrat, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.brass;
              e.currentTarget.style.color = T.paper;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = T.paper;
              e.currentTarget.style.color = T.forest;
            }}
          >
            Quick View
          </button>
          <a
            href={`/${countrySlug}/commercial-real-estate/${property.assetType}/${property.listingType}/${property.slug.current}`}
            className="px-6 py-3 text-[9px] tracking-[0.25em] uppercase font-medium transition-colors"
            style={{
              border: `1px solid rgba(255,255,255,0.6)`,
              color: T.paper,
              fontFamily: "Montserrat, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.paper;
              e.currentTarget.style.color = T.forest;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = T.paper;
            }}
          >
            Prospectus
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        <div>
          <h3
            className="text-xl leading-tight mb-2 transition-colors"
            style={{
              fontFamily: "Playfair Display, serif",
              color: isHovered ? T.forest : T.ink,
            }}
          >
            {property.title}
          </h3>
          {property.city && (
            <div className="flex items-center gap-1.5" style={{ color: T.stone }}>
              <MapPin className="w-3.5 h-3.5" />
              <span
                className="text-[11px] tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {property.submarket ? `${property.submarket}, ` : ""}
                {property.city}
              </span>
            </div>
          )}
        </div>

        {/* Price / size row */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: `1px solid ${T.rule}` }}
        >
          <div>
            <Label>Value</Label>
            <p
              className="text-lg mt-0.5"
              style={{
                fontFamily: "Playfair Display, serif",
                color: T.ink,
              }}
            >
              {property.askingPrice
                ? currency(property.askingPrice, property.currency ?? "KES")
                : "Price on Request"}
            </p>
          </div>
          {property.totalArea && (
            <div className="text-right">
              <Label>Size</Label>
              <div
                className="flex items-center justify-end gap-1.5 mt-0.5"
                style={{ color: T.ink }}
              >
                <Maximize2 className="w-3.5 h-3.5" style={{ color: T.stone }} />
                <span
                  className="text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {property.totalArea.toLocaleString()} sf
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-1">
          <div
            className="flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase"
            style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
          >
            <Shield className="w-3 h-3" />
            Mandate Only
          </div>
          <button
            onClick={() => onQuickView(property)}
            className="text-[9px] tracking-[0.15em] uppercase font-medium transition-colors"
            style={{
              color: T.stone,
              fontFamily: "Montserrat, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = T.forest)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = T.stone)
            }
          >
            Details →
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ═══════════════════════════════════════════════════════════════
   INTEL CARD  (Bloomberg research note style)
═══════════════════════════════════════════════════════════════ */
const IntelCard: React.FC<{ card: MarketIntelCard; index: number }> = ({
  card,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-7 flex flex-col cursor-pointer"
    style={{
      background: T.paper,
      border: `1px solid ${T.rule}`,
      transition: "border-color 0.2s",
    }}
    onMouseEnter={(e) =>
      ((e.currentTarget as HTMLElement).style.borderColor = T.forest)
    }
    onMouseLeave={(e) =>
      ((e.currentTarget as HTMLElement).style.borderColor = T.rule)
    }
  >
    <div className="flex justify-between items-start mb-5">
      <span
        className="text-[9px] tracking-[0.25em] uppercase font-medium"
        style={{ color: T.brass, fontFamily: "Montserrat, sans-serif" }}
      >
        {card.category}
      </span>
      <span
        className="text-[9px]"
        style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
      >
        {card.date}
      </span>
    </div>

    {/* Hairline accent */}
    <div
      className="w-8 h-px mb-4"
      style={{ background: T.brass }}
    />

    <h4
      className="text-lg leading-snug mb-4 flex-1"
      style={{
        fontFamily: "Playfair Display, serif",
        color: T.ink,
      }}
    >
      {card.title}
    </h4>
    <p
      className="text-[11px] leading-relaxed"
      style={{
        fontFamily: "Times New Roman, serif",
        color: T.stone,
        lineHeight: 1.7,
      }}
    >
      {card.summary}
    </p>
    <div
      className="mt-5 pt-4 flex items-center justify-between"
      style={{ borderTop: `1px solid ${T.rule}` }}
    >
      <span
        className="text-[9px] tracking-[0.2em] uppercase font-medium"
        style={{ color: T.forest, fontFamily: "Montserrat, sans-serif" }}
      >
        Request Full Report →
      </span>
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════
   ASSET CLASS MODULE
═══════════════════════════════════════════════════════════════ */
const AssetClassModule: React.FC<{
  entry: AssetClassEntry;
  countrySlug: string;
  index: number;
}> = ({ entry, countrySlug, index }) => (
  <motion.a
    href={`/${countrySlug}/commercial-real-estate/${entry.assetType}`}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    className="group block p-6"
    style={{
      background: T.paper,
      border: `1px solid ${T.rule}`,
      transition: "border-color 0.25s, box-shadow 0.25s",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = T.forest;
      (e.currentTarget as HTMLElement).style.boxShadow =
        "0 8px 24px rgba(26,58,42,0.08)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = T.rule;
      (e.currentTarget as HTMLElement).style.boxShadow = "none";
    }}
  >
    <div className="flex items-start justify-between mb-4">
      <span className="text-2xl">{ASSET_ICONS[entry.assetType] ?? "🏢"}</span>
      <span
        className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 font-medium"
        style={{
          border: `1px solid ${T.rule}`,
          color: T.stone,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {entry.count}
      </span>
    </div>
    <h3
      className="text-lg mb-3"
      style={{
        fontFamily: "Playfair Display, serif",
        color: T.ink,
        transition: "color 0.2s",
      }}
    >
      {fmt(entry.assetType)}
    </h3>
    <div className="space-y-1 mb-4">
      {entry.forSale > 0 && (
        <p
          className="text-[10px] tracking-wide"
          style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
        >
          {entry.forSale} For Sale
        </p>
      )}
      {entry.forLease > 0 && (
        <p
          className="text-[10px] tracking-wide"
          style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
        >
          {entry.forLease} For Lease
        </p>
      )}
    </div>
    <div
      className="flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-medium"
      style={{
        color: T.forest,
        fontFamily: "Montserrat, sans-serif",
        opacity: 0,
        transition: "opacity 0.2s",
      }}
      // CSS group-hover handled inline for clarity
    >
      Browse <ChevronRight className="w-3 h-3" />
    </div>
  </motion.a>
);

/* ═══════════════════════════════════════════════════════════════
   SHARED MICRO-COMPONENTS
═══════════════════════════════════════════════════════════════ */
const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="block text-[9px] tracking-[0.2em] uppercase"
    style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
  >
    {children}
  </span>
);

const SectionLabel: React.FC<{
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ children, icon }) => (
  <div
    className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase font-medium"
    style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
  >
    {icon}
    {children}
  </div>
);

const Tag: React.FC<{
  children: React.ReactNode;
  bg: string;
  color: string;
  border?: string;
}> = ({ children, bg, color, border }) => (
  <span
    className="px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase font-medium"
    style={{
      background: bg,
      color,
      fontFamily: "Montserrat, sans-serif",
      border: border ? `1px solid ${border}` : "none",
    }}
  >
    {children}
  </span>
);

const Metric: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="p-4" style={{ background: T.forestFog }}>
    <Label>{label}</Label>
    <span
      className="block text-sm font-medium mt-1"
      style={{ color: T.ink, fontFamily: "Montserrat, sans-serif" }}
    >
      {children}
    </span>
  </div>
);

const ContactLine: React.FC<{
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ icon, children }) => (
  <div className="flex items-center gap-2" style={{ color: T.stone }}>
    {icon}
    <span
      className="text-xs"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {children}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
interface CountryPageClientProps {
  countrySlug: string;
  countryLabel: string;
  totalListings: number;
  assetClassEntries: AssetClassEntry[];
  featuredProperties: FeaturedProperty[];
}

export function CountryPageClient({
  countrySlug,
  countryLabel,
  totalListings,
  assetClassEntries,
  featuredProperties,
}: CountryPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedListing, setSelectedListing] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [drawerProperty, setDrawerProperty] = useState<FeaturedProperty | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"listings" | "market" | "assets">("listings");
  const [scrolled, setScrolled] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const intelCards = INTEL_BY_COUNTRY[countrySlug] ?? DEFAULT_INTEL;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const assetTypes = useMemo(
    () => ["All", ...assetClassEntries.map((e) => e.assetType)],
    [assetClassEntries]
  );

  const filtered = useMemo(
    () =>
      featuredProperties.filter((p) => {
        const matchType = selectedType === "All" || p.assetType === selectedType;
        const matchListing =
          selectedListing === "All" || p.listingType === selectedListing;
        const q = searchTerm.toLowerCase();
        return (
          matchType &&
          matchListing &&
          (!q ||
            p.title?.toLowerCase().includes(q) ||
            p.city?.toLowerCase().includes(q) ||
            p.assetType?.toLowerCase().includes(q))
        );
      }),
    [featuredProperties, selectedType, selectedListing, searchTerm]
  );

  const handleOpenDrawer = useCallback((p: FeaturedProperty) => {
    setDrawerProperty(p);
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => setDrawerProperty(null), 350);
  }, []);

  /* Ticker items */
  const tickerItems = [
    { label: "Active Mandates", value: totalListings },
    { label: "Asset Classes", value: assetClassEntries.length },
    {
      label: "For Sale",
      value: assetClassEntries.reduce((s, e) => s + e.forSale, 0),
    },
    {
      label: "For Lease",
      value: assetClassEntries.reduce((s, e) => s + e.forLease, 0),
    },
    { label: "Market", value: countryLabel },
    { label: "Mandate Advisory", value: "Murivest Realty Group" },
    ...assetClassEntries.slice(0, 4).map((e) => ({
      label: fmt(e.assetType),
      value: `${e.count} listings`,
    })),
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: T.ivory, color: T.ink }}
    >
      <FontInjector />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: "56vh",
          background: T.forest,
        }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(168,131,74,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top nav breadcrumb */}
        <nav
          className="absolute top-0 left-0 right-0 px-8 lg:px-16 py-5 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div
            className="flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <a
              href="/"
              style={{ color: "rgba(255,255,255,0.4)" }}
              className="hover:text-white transition-colors"
            >
              Murivest
            </a>
            <ChevronRight className="w-3 h-3" />
            <a
              href="/global-markets"
              style={{ color: "rgba(255,255,255,0.4)" }}
              className="hover:text-white transition-colors"
            >
              Global Markets
            </a>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: T.brassLight }}>{countryLabel}</span>
          </div>
          {/* Stat pills top-right */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Active Mandates", value: totalListings },
              { label: "Asset Classes", value: assetClassEntries.length },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <p
                  className="text-[9px] tracking-[0.2em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {s.label}
                </p>
                <p
                  className="text-base"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: T.brassLight,
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </nav>

        {/* Hero text — bottom-anchored CBRE style */}
        <div className="relative z-10 w-full px-8 lg:px-16 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-5"
              style={{
                color: T.brassLight,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Murivest Capital Markets · Market Coverage
            </p>

            <h1
              className="mb-5"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 400,
                lineHeight: 1,
                color: T.paper,
                letterSpacing: "-0.01em",
              }}
            >
              {countryLabel}
            </h1>

            <p
              className="max-w-lg"
              style={{
                fontFamily: "Times New Roman, serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Institutional commercial real estate advisory and deal origination
              across {countryLabel}'s primary and secondary investment markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BLOOMBERG TICKER RAIL (signature element) ─────────────────── */}
      <TickerRail items={tickerItems} />

      {/* ── CRE HUB LINK STRIP ─────────────────────────────────────────── */}
      <div
        className="border-b"
        style={{ borderColor: T.rule, background: T.paper }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <a
            href={`/${countrySlug}/commercial-real-estate`}
            className="group flex items-center justify-between py-4 transition-all"
            onMouseEnter={(e) =>
              (e.currentTarget.style.paddingLeft = "8px")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.paddingLeft = "0px")
            }
          >
            <div className="flex items-center gap-4">
              <Globe className="w-4 h-4" style={{ color: T.brass }} />
              <span
                className="text-[9px] tracking-[0.2em] uppercase"
                style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
              >
                Full Market Directory ·{" "}
                <span style={{ color: T.forest }}>
                  Commercial Real Estate in {countryLabel}
                </span>
              </span>
            </div>
            <ArrowUpRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: T.forest }}
            />
          </a>
        </div>
      </div>

      {/* ── STICKY TAB / FILTER BAR ─────────────────────────────────────── */}
      <div
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(250,250,247,0.96)"
            : T.ivory,
          borderBottom: `1px solid ${scrolled ? T.rule : "transparent"}`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled
            ? "0 1px 12px rgba(0,0,0,0.05)"
            : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-3">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">

            {/* Tab group */}
            <div
              className="flex items-center"
              style={{ border: `1px solid ${T.rule}` }}
            >
              {[
                {
                  key: "listings",
                  icon: <LayoutGrid className="w-3.5 h-3.5" />,
                  label: "Listings",
                },
                {
                  key: "market",
                  icon: <BarChart2 className="w-3.5 h-3.5" />,
                  label: "Market Intel",
                },
                {
                  key: "assets",
                  icon: <Landmark className="w-3.5 h-3.5" />,
                  label: "Asset Classes",
                },
              ].map(({ key, icon, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className="flex items-center gap-2 px-5 py-2.5 transition-colors"
                  style={{
                    background:
                      activeTab === key ? T.forest : "transparent",
                    color: activeTab === key ? T.paper : T.stone,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Listing filters — only on Listings tab */}
            {activeTab === "listings" && (
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                {/* Search */}
                <div className="relative w-full lg:w-64">
                  <Search
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4"
                    strokeWidth={1.5}
                    style={{ color: T.stone }}
                  />
                  <input
                    type="text"
                    placeholder="Search assets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent pl-7 pr-6 py-2 outline-none transition-colors"
                    style={{
                      borderBottom: `1px solid ${T.rule}`,
                      color: T.ink,
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = T.forest)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = T.rule)
                    }
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <X className="w-4 h-4" style={{ color: T.stone }} />
                    </button>
                  )}
                </div>

                {/* Listing type toggles */}
                {["All", "for-sale", "for-lease"].map((lt) => (
                  <button
                    key={lt}
                    onClick={() => setSelectedListing(lt)}
                    className="px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase transition-all"
                    style={{
                      background:
                        selectedListing === lt ? T.forest : "transparent",
                      color:
                        selectedListing === lt ? T.paper : T.stone,
                      border: `1px solid ${
                        selectedListing === lt ? T.forest : T.rule
                      }`,
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {lt === "All" ? "All" : fmt(lt)}
                  </button>
                ))}

                {/* Asset type dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 transition-colors"
                    style={{
                      border: `1px solid ${T.rule}`,
                      color: T.stone,
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    <SlidersHorizontal className="w-3 h-3" />
                    {selectedType === "All" ? "Asset Type" : fmt(selectedType)}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        filterOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {filterOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 mt-1 z-50 min-w-[180px]"
                        style={{
                          background: T.paper,
                          border: `1px solid ${T.rule}`,
                          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        }}
                      >
                        {assetTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setSelectedType(type);
                              setFilterOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 transition-colors"
                            style={{
                              background:
                                selectedType === type
                                  ? T.forestFog
                                  : "transparent",
                              color:
                                selectedType === type ? T.forest : T.stone,
                              fontFamily: "Montserrat, sans-serif",
                              fontSize: "10px",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              fontWeight: selectedType === type ? 600 : 400,
                            }}
                            onMouseEnter={(e) => {
                              if (selectedType !== type)
                                (e.currentTarget as HTMLElement).style.background =
                                  T.ivory;
                            }}
                            onMouseLeave={(e) => {
                              if (selectedType !== type)
                                (e.currentTarget as HTMLElement).style.background =
                                  "transparent";
                            }}
                          >
                            {type === "All" ? "All Types" : fmt(type)}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <span
                  className="hidden md:block text-[10px] tracking-wide ml-1"
                  style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
                >
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "Asset" : "Assets"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ─────────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-8 lg:px-16 py-14">

        {/* LISTINGS TAB */}
        {activeTab === "listings" && (
          <>
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <AlertCircle
                  className="w-10 h-10 mx-auto mb-5"
                  style={{ color: T.rule }}
                />
                <p
                  className="text-lg italic mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: T.stone,
                  }}
                >
                  No assets match your current criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedType("All");
                    setSelectedListing("All");
                    setSearchTerm("");
                  }}
                  className="px-7 py-3 text-[9px] tracking-[0.25em] uppercase font-medium transition-colors"
                  style={{
                    border: `1px solid ${T.forest}`,
                    color: T.forest,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = T.forest;
                    e.currentTarget.style.color = T.paper;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = T.forest;
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((property, index) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                    countrySlug={countrySlug}
                    index={index}
                    isHovered={hoveredId === property._id}
                    onHover={setHoveredId}
                    onQuickView={handleOpenDrawer}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* MARKET INTEL TAB */}
        {activeTab === "market" && (
          <div>
            {/* Section header */}
            <div
              className="flex items-end justify-between mb-10 pb-5"
              style={{ borderBottom: `1px solid ${T.rule}` }}
            >
              <div>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: T.brass, fontFamily: "Montserrat, sans-serif" }}
                >
                  Market Intelligence
                </p>
                <h2
                  className="text-4xl"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: T.ink,
                  }}
                >
                  {countryLabel} Research &amp; Analysis
                </h2>
              </div>
              <a
                href="/research"
                className="flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-medium"
                style={{ color: T.forest, fontFamily: "Montserrat, sans-serif" }}
              >
                All Research <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Intel cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {intelCards.map((card, i) => (
                <IntelCard key={card.title} card={card} index={i} />
              ))}
            </div>

            {/* Market indicators — Bloomberg style table */}
            <div
              style={{
                background: T.paper,
                border: `1px solid ${T.rule}`,
              }}
            >
              <div
                className="px-7 py-4 flex items-center gap-2"
                style={{
                  borderBottom: `1px solid ${T.rule}`,
                }}
              >
                <TrendingUp className="w-3.5 h-3.5" style={{ color: T.stone }} />
                <span
                  className="text-[9px] tracking-[0.25em] uppercase"
                  style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
                >
                  Market Indicators · {countryLabel}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
                style={{ borderColor: T.rule }}
              >
                {[
                  { label: "Active Mandates", value: totalListings },
                  { label: "Asset Classes", value: assetClassEntries.length },
                  {
                    label: "For Sale",
                    value: assetClassEntries.reduce(
                      (s, e) => s + e.forSale,
                      0
                    ),
                  },
                  {
                    label: "For Lease",
                    value: assetClassEntries.reduce(
                      (s, e) => s + e.forLease,
                      0
                    ),
                  },
                ].map((m) => (
                  <div key={m.label} className="p-7 text-center">
                    <p
                      className="text-4xl mb-2"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: T.forest,
                      }}
                    >
                      {m.value}
                    </p>
                    <p
                      className="text-[9px] tracking-[0.2em] uppercase"
                      style={{
                        color: T.stone,
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ASSET CLASSES TAB */}
        {activeTab === "assets" && (
          <div>
            <div
              className="flex items-end justify-between mb-10 pb-5"
              style={{ borderBottom: `1px solid ${T.rule}` }}
            >
              <div>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: T.brass, fontFamily: "Montserrat, sans-serif" }}
                >
                  Asset Class Directory
                </p>
                <h2
                  className="text-4xl"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: T.ink,
                  }}
                >
                  Coverage in {countryLabel}
                </h2>
              </div>
              <a
                href={`/${countrySlug}/commercial-real-estate`}
                className="flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-medium"
                style={{ color: T.forest, fontFamily: "Montserrat, sans-serif" }}
              >
                Full Directory <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {assetClassEntries.map((entry, i) => (
                <AssetClassModule
                  key={entry.assetType}
                  entry={entry}
                  countrySlug={countrySlug}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="py-10 mt-4"
        style={{
          borderTop: `1px solid ${T.rule}`,
          background: T.paper,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <div
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Shield className="w-4 h-4" style={{ color: T.brass }} />
            <span
              className="text-[9px] tracking-[0.3em] uppercase"
              style={{ color: T.stone, fontFamily: "Montserrat, sans-serif" }}
            >
              Mandated Advisory · {countryLabel}
            </span>
          </div>
          <p
            className="text-[11px] leading-relaxed max-w-2xl mx-auto"
            style={{
              fontFamily: "Times New Roman, serif",
              color: T.stone,
              lineHeight: 1.8,
            }}
          >
            All properties are subject to availability and require qualified
            investor verification. Full due diligence materials provided under
            NDA. Past performance is not indicative of future returns.
            Murivest Realty Group Ltd · murivest.com
          </p>
        </div>
      </footer>

      {/* ── SIDE DRAWER ──────────────────────────────────────────────────── */}
      <PropertyDrawer
        property={drawerProperty}
        isOpen={drawerOpen}
        countrySlug={countrySlug}
        onClose={handleCloseDrawer}
      />

      {/* Filter dropdown backdrop */}
      {filterOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setFilterOpen(false)}
        />
      )}
    </div>
  );
}

/*
 * ─── SERVER PAGE WRAPPER ────────────────────────────────────────────────────
 * Place this in app/[country]/page.tsx (no "use client").
 *
 * import { client } from "@/sanity/lib/client";
 * import { CountryPageClient } from "./CountryPageClient";
 *
 * export default async function CountryPage({ params }) {
 *   const { country: countrySlug } = await params;
 *
 *   const [allListings, featured] = await Promise.all([
 *     client.fetch(
 *       `*[_type == "property" && country == $country]{ assetType, listingType }`,
 *       { country: countrySlug }
 *     ),
 *     client.fetch(
 *       `*[_type == "property" && country == $country]
 *        | order(_createdAt desc)[0...18]{
 *          _id, title, slug, assetType, listingType, city, submarket,
 *          askingPrice, currency, capRate, totalArea, occupancy, yearBuilt,
 *          floors, gradeClassification, description, highlights, contactEmail,
 *          images[]{ asset->{ url } }
 *        }`,
 *       { country: countrySlug }
 *     ),
 *   ]);
 *
 *   const map = {};
 *   for (const l of allListings) {
 *     if (!map[l.assetType]) map[l.assetType] = { total: 0, sale: 0, lease: 0 };
 *     map[l.assetType].total++;
 *     if (l.listingType === "for-sale") map[l.assetType].sale++;
 *     if (l.listingType === "for-lease") map[l.assetType].lease++;
 *   }
 *
 *   const assetClassEntries = Object.entries(map).map(([assetType, v]) => ({
 *     assetType, count: v.total, forSale: v.sale, forLease: v.lease,
 *   }));
 *
 *   return (
 *     <CountryPageClient
 *       countrySlug={countrySlug}
 *       countryLabel={countrySlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
 *       totalListings={allListings.length}
 *       assetClassEntries={assetClassEntries}
 *       featuredProperties={featured}
 *     />
 *   );
 * }
 */