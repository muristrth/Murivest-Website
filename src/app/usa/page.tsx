// app/usa/page.tsx
// Institutional-grade USA Commercial Real Estate Platform
// Murivest Group — murivest.com/usa

import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

// ─── Design Tokens ───
const COLORS = {
  forest: "#1B4332",
  forestLight: "#2D6A4F",
  forestDark: "#081C15",
  brass: "#B8956B",
  brassLight: "#D4B896",
  cream: "#F8F7F4",
  creamWarm: "#FAF9F6",
  ink: "#1A1A1A",
  inkLight: "#4A4A4A",
  stone: "#8C8C8C",
  border: "rgba(27, 67, 50, 0.12)",
};

// ─── Types ───
interface MarketMetric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

interface Sector {
  icon: string;
  title: string;
  description: string;
  volume: string;
  yield: string;
  href: string;
}

interface Opportunity {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  capRate: string;
  sqft: string;
  image: string;
  status: "Available" | "Under Offer" | "Exclusive";
  tagline: string;
}

interface MetroMarket {
  city: string;
  state: string;
  pricePerSqft: string;
  vacancy: string;
  absorption: string;
  trend: "rising" | "stable" | "correcting";
}

// ─── Data ───
const MARKET_METRICS: MarketMetric[] = [
  { label: "U.S. CRE Transaction Volume (TTM)", value: "$482B", change: "+12.4%", positive: true },
  { label: "Institutional Cap Rate (National Avg)", value: "5.85%", change: "-18 bps", positive: true },
  { label: "Multifamily Rent Growth (YoY)", value: "3.2%", change: "+0.8%", positive: true },
  { label: "Industrial Availability Rate", value: "6.4%", change: "+42 bps", positive: false },
];

const SECTORS: Sector[] = [
  {
    icon: "🏢",
    title: "Office",
    description: "Class-A CBD and suburban office assets in gateway markets with credit-tenant profiles and value-add repositioning potential.",
    volume: "$142B",
    yield: "6.2% – 7.8%",
    href: "/usa/office",
  },
  {
    icon: "🏭",
    title: "Industrial & Logistics",
    description: "Last-mile distribution, cold storage, and bulk industrial in high-barrier infill markets with e-commerce tailwinds.",
    volume: "$198B",
    yield: "4.8% – 6.1%",
    href: "/usa/industrial",
  },
  {
    icon: "🏘️",
    title: "Multifamily",
    description: "Garden-style and mid-rise workforce housing in supply-constrained metros with demographic rent growth fundamentals.",
    volume: "$187B",
    yield: "4.5% – 5.9%",
    href: "/usa/multifamily",
  },
  {
    icon: "🛒",
    title: "Retail & Necessity",
    description: "Grocery-anchored neighborhood centres, single-tenant net-lease, and experiential retail in dominant trade areas.",
    volume: "$89B",
    yield: "6.5% – 8.2%",
    href: "/usa/retail",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    description: "Select-service and extended-stay hotels in top-25 MSAs with RevPAR recovery trajectories above national averages.",
    volume: "$56B",
    yield: "7.1% – 9.4%",
    href: "/usa/hospitality",
  },
  {
    icon: "🧬",
    title: "Life Sciences & Medical",
    description: "Wet-lab, R&D, and MOB assets in innovation clusters with university and NIH proximity advantages.",
    volume: "$34B",
    yield: "5.2% – 6.8%",
    href: "/usa/life-sciences",
  },
];

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "usa-001",
    title: "The Presidio Exchange",
    location: "Austin, Texas",
    type: "Class-A Office | 14 Stories",
    price: "$87,500,000",
    capRate: "6.85%",
    sqft: "312,000",
    image: "/assets/usa/presidio-exchange.jpg",
    status: "Exclusive",
    tagline: "Downtown Austin trophy asset with 94% occupancy and weighted average lease term of 7.4 years.",
  },
  {
    id: "usa-002",
    title: "Summit Logistics Park",
    location: "Phoenix, Arizona",
    type: "Bulk Industrial | Cross-Dock",
    price: "$124,000,000",
    capRate: "5.40%",
    sqft: "845,000",
    image: "/assets/usa/summit-logistics.jpg",
    status: "Available",
    tagline: "Infill last-mile facility 12 minutes from Sky Harbor with 32-foot clear heights and ESFR sprinklers.",
  },
  {
    id: "usa-003",
    title: "Harborside Residences",
    location: "Miami, Florida",
    type: "Multifamily | 240 Units",
    price: "$68,200,000",
    capRate: "4.95%",
    sqft: "198,000",
    image: "/assets/usa/harborside-residences.jpg",
    status: "Under Offer",
    tagline: "Waterfront workforce housing in Edgewater with in-place rents 18% below market and value-add renovation plan.",
  },
  {
    id: "usa-004",
    title: "Pioneer Station Retail",
    location: "Denver, Colorado",
    type: "Grocery-Anchored | NNN",
    price: "$42,800,000",
    capRate: "7.20%",
    sqft: "128,000",
    image: "/assets/usa/pioneer-station.jpg",
    status: "Exclusive",
    tagline: "Whole Foods-anchored centre in Cherry Creek trade area with 3.2-mile demographic radius of $124K median income.",
  },
];

const METRO_MARKETS: MetroMarket[] = [
  { city: "New York", state: "NY", pricePerSqft: "$1,245", vacancy: "12.4%", absorption: "+2.1M sf", trend: "correcting" },
  { city: "Los Angeles", state: "CA", pricePerSqft: "$892", vacancy: "14.1%", absorption: "+890K sf", trend: "stable" },
  { city: "Chicago", state: "IL", pricePerSqft: "$312", vacancy: "18.2%", absorption: "-420K sf", trend: "correcting" },
  { city: "Dallas", state: "TX", pricePerSqft: "$348", vacancy: "16.8%", absorption: "+3.4M sf", trend: "rising" },
  { city: "Austin", state: "TX", pricePerSqft: "$524", vacancy: "15.3%", absorption: "+1.8M sf", trend: "rising" },
  { city: "Miami", state: "FL", pricePerSqft: "$678", vacancy: "11.9%", absorption: "+1.2M sf", trend: "rising" },
  { city: "Denver", state: "CO", pricePerSqft: "$298", vacancy: "17.4%", absorption: "+560K sf", trend: "stable" },
  { city: "Nashville", state: "TN", pricePerSqft: "$287", vacancy: "13.6%", absorption: "+2.1M sf", trend: "rising" },
];

// ─── Metadata ───
export const metadata: Metadata = {
  title: "USA Commercial Real Estate | Institutional Investment & Advisory | Murivest Group",
  description:
    "Murivest Group's USA commercial real estate platform connects sovereign wealth, family offices, and institutional capital with institutional-quality CRE opportunities across office, industrial, multifamily, retail, and hospitality sectors.",
  keywords: [
    "USA commercial real estate",
    "institutional real estate investment",
    "CRE brokerage USA",
    "commercial property USA",
    "real estate capital introduction",
    "multifamily investment USA",
    "industrial real estate USA",
    "office investment USA",
    "Murivest Group USA",
  ],
  openGraph: {
    title: "USA Commercial Real Estate | Murivest Group",
    description:
      "Institutional-grade commercial real estate advisory, brokerage, and capital introduction across the United States.",
    url: "https://murivest.com/usa",
    siteName: "Murivest Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Commercial Real Estate | Murivest Group",
    description: "Institutional-grade CRE advisory and investment opportunities across the United States.",
  },
  alternates: {
    canonical: "https://murivest.com/usa",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B4332",
};

// ─── Components ───

function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ backgroundColor: COLORS.forestDark }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={COLORS.cream} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.2em] uppercase font-medium border"
              style={{
                color: COLORS.brass,
                borderColor: `${COLORS.brass}40`,
                backgroundColor: `${COLORS.brass}08`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              United States Platform
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight"
              style={{ color: COLORS.cream, fontFamily: "'Times New Roman', Georgia, serif" }}
            >
              Institutional-Grade
              <br />
              <span style={{ color: COLORS.brass }}>Commercial Real Estate</span>
              <br />
              Across the United States
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl font-light"
              style={{ color: `${COLORS.cream}90` }}
            >
              Murivest Group connects sovereign wealth, family offices, and institutional capital
              with curated commercial property opportunities in gateway markets, Sun Belt growth
              corridors, and strategic secondary cities.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/usa/opportunities"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:gap-5"
                style={{
                  backgroundColor: COLORS.brass,
                  color: COLORS.forestDark,
                }}
              >
                View Opportunities
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium border transition-all duration-300 hover:bg-white/5"
                style={{
                  color: COLORS.cream,
                  borderColor: `${COLORS.cream}30`,
                }}
              >
                Advisory Consultation
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-4 rounded-sm opacity-20"
              style={{ border: `1px solid ${COLORS.brass}` }}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 flex items-center justify-center text-6xl"
                style={{ backgroundColor: COLORS.forest, color: `${COLORS.brass}30` }}
              >
                🏙️
              </div>
              {/* Placeholder for aerial city imagery */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.forest}80 0%, transparent 60%)`,
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-8 -left-8 p-6 border backdrop-blur-sm"
              style={{
                backgroundColor: `${COLORS.cream}95`,
                borderColor: COLORS.border,
                color: COLORS.ink,
              }}
            >
              <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: COLORS.stone }}>
                Active Pipeline
              </div>
              <div className="text-3xl font-light" style={{ fontFamily: "Georgia, serif" }}>
                $2.4B
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.forest }}>
                Across 14 states
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, ${COLORS.cream}, transparent)`,
        }}
      />
    </section>
  );
}

function MarketTicker() {
  return (
    <section
      className="border-b"
      style={{ backgroundColor: COLORS.cream, borderColor: COLORS.border }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {MARKET_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: COLORS.stone }}>
                {metric.label}
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-2xl lg:text-3xl font-light"
                  style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
                >
                  {metric.value}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: metric.positive ? COLORS.forest : "#B85450" }}
                >
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorsGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div
            className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: COLORS.brass }}
          >
            Investment Sectors
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
            style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
          >
            Diversified Across Core Commercial Real Estate Verticals
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: COLORS.inkLight }}>
            Our USA platform maintains active coverage across all major CRE food groups, with
            particular depth in Sun Belt industrial, Southeast multifamily, and gateway market
            office repositioning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative p-8 border transition-all duration-500 hover:shadow-lg"
              style={{
                backgroundColor: COLORS.creamWarm,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-0.5 transition-all duration-500 group-hover:h-1"
                style={{ backgroundColor: COLORS.brass }}
              />

              <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {sector.icon}
              </div>

              <h3
                className="text-xl font-medium mb-3 group-hover:text-[#1B4332] transition-colors"
                style={{ color: COLORS.ink }}
              >
                {sector.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: COLORS.inkLight }}>
                {sector.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: COLORS.border }}>
                <div>
                  <div className="text-xs tracking-[0.15em] uppercase" style={{ color: COLORS.stone }}>
                    Volume
                  </div>
                  <div className="text-lg font-light" style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}>
                    {sector.volume}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs tracking-[0.15em] uppercase" style={{ color: COLORS.stone }}>
                    Yield Range
                  </div>
                  <div className="text-lg font-light" style={{ color: COLORS.forest, fontFamily: "Georgia, serif" }}>
                    {sector.yield}
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                style={{ color: COLORS.brass }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunitiesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.creamWarm }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: COLORS.brass }}
            >
              Live Opportunities
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
              style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
            >
              Curated Investment Opportunities
            </h2>
          </div>
          <Link
            href="/usa/opportunities"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-medium group"
            style={{ color: COLORS.forest }}
          >
            View All Opportunities
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="group relative border transition-all duration-500 hover:shadow-xl overflow-hidden"
              style={{ backgroundColor: COLORS.cream, borderColor: COLORS.border }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image area */}
                <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: COLORS.forestLight, color: `${COLORS.cream}40` }}
                  >
                    🏢
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 text-xs tracking-[0.15em] uppercase font-medium"
                    style={{
                      backgroundColor: opp.status === "Exclusive" ? COLORS.brass : opp.status === "Under Offer" ? COLORS.ink : COLORS.forest,
                      color: opp.status === "Exclusive" ? COLORS.forestDark : COLORS.cream,
                    }}
                  >
                    {opp.status}
                  </div>
                </div>

                {/* Content area */}
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs tracking-[0.15em] uppercase" style={{ color: COLORS.stone }}>
                        {opp.location}
                      </span>
                      <span style={{ color: COLORS.border }}>|</span>
                      <span className="text-xs tracking-[0.15em] uppercase" style={{ color: COLORS.brass }}>
                        {opp.type}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-light mb-3 group-hover:text-[#1B4332] transition-colors"
                      style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
                    >
                      {opp.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: COLORS.inkLight }}>
                      {opp.tagline}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: COLORS.border }}>
                      <div>
                        <div className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: COLORS.stone }}>
                          Price
                        </div>
                        <div className="text-lg font-light" style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}>
                          {opp.price}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: COLORS.stone }}>
                          Cap Rate
                        </div>
                        <div
                          className="text-lg font-light"
                          style={{ color: COLORS.forest, fontFamily: "Georgia, serif" }}
                        >
                          {opp.capRate}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: COLORS.stone }}>
                          Building Size
                        </div>
                        <div className="text-lg font-light" style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}>
                          {opp.sqft} sf
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/usa/opportunities/${opp.id}`}
                      className="inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase font-medium group/link"
                      style={{ color: COLORS.brass }}
                    >
                      Opportunity Details
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketIntelligence() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.forest }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: COLORS.brass }}
            >
              Market Intelligence
            </div>
            <h2
              className="text-3xl md:text-4xl font-light leading-tight mb-6"
              style={{ color: COLORS.cream, fontFamily: "Georgia, serif" }}
            >
              Real-Time Metro Market Data
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: `${COLORS.cream}80` }}>
              Our proprietary market intelligence dashboard tracks pricing, vacancy, and absorption
              across 42 U.S. metropolitan statistical areas, updated quarterly with institutional
              data partnerships.
            </p>
            <Link
              href="/usa/market-intelligence"
              className="inline-flex items-center gap-3 px-6 py-3 text-sm tracking-[0.15em] uppercase font-medium border transition-all duration-300 hover:bg-white/10"
              style={{
                color: COLORS.cream,
                borderColor: `${COLORS.cream}30`,
              }}
            >
              Access Full Dashboard
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${COLORS.brass}30` }}>
                    <th className="pb-4 pr-6 text-xs tracking-[0.2em] uppercase font-medium" style={{ color: COLORS.brass }}>
                      Metro Area
                    </th>
                    <th className="pb-4 pr-6 text-xs tracking-[0.2em] uppercase font-medium text-right" style={{ color: COLORS.brass }}>
                      Price / SF
                    </th>
                    <th className="pb-4 pr-6 text-xs tracking-[0.2em] uppercase font-medium text-right" style={{ color: COLORS.brass }}>
                      Vacancy
                    </th>
                    <th className="pb-4 pr-6 text-xs tracking-[0.2em] uppercase font-medium text-right" style={{ color: COLORS.brass }}>
                      Absorption
                    </th>
                    <th className="pb-4 text-xs tracking-[0.2em] uppercase font-medium text-right" style={{ color: COLORS.brass }}>
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {METRO_MARKETS.map((metro, i) => (
                    <tr
                      key={metro.city}
                      className="transition-colors hover:bg-white/5"
                      style={{ borderBottom: `1px solid ${COLORS.cream}10` }}
                    >
                      <td className="py-4 pr-6">
                        <div className="font-medium" style={{ color: COLORS.cream }}>
                          {metro.city}
                        </div>
                        <div className="text-xs" style={{ color: `${COLORS.cream}60` }}>
                          {metro.state}
                        </div>
                      </td>
                      <td className="py-4 pr-6 text-right font-light" style={{ color: COLORS.cream, fontFamily: "Georgia, serif" }}>
                        {metro.pricePerSqft}
                      </td>
                      <td className="py-4 pr-6 text-right font-light" style={{ color: COLORS.cream, fontFamily: "Georgia, serif" }}>
                        {metro.vacancy}
                      </td>
                      <td className="py-4 pr-6 text-right font-light" style={{ color: COLORS.cream, fontFamily: "Georgia, serif" }}>
                        {metro.absorption}
                      </td>
                      <td className="py-4 text-right">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs tracking-wider uppercase font-medium"
                          style={{
                            color:
                              metro.trend === "rising"
                                ? "#7CB97A"
                                : metro.trend === "stable"
                                ? COLORS.brass
                                : "#D4A5A5",
                            backgroundColor:
                              metro.trend === "rising"
                                ? "rgba(124, 185, 122, 0.15)"
                                : metro.trend === "stable"
                                ? "rgba(184, 149, 107, 0.15)"
                                : "rgba(212, 165, 165, 0.15)",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                metro.trend === "rising"
                                  ? "#7CB97A"
                                  : metro.trend === "stable"
                                  ? COLORS.brass
                                  : "#D4A5A5",
                            }}
                          />
                          {metro.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvisoryServices() {
  const services = [
    {
      title: "Buy-Side Advisory",
      description:
        "Representing institutional and private capital in the acquisition of core, core-plus, value-add, and opportunistic commercial real estate assets.",
      features: ["Off-market sourcing", "Due diligence oversight", "Structuring & negotiation", "Closing coordination"],
    },
    {
      title: "Sell-Side Representation",
      description:
        "Maximizing value for ownership groups through institutional marketing, targeted buyer qualification, and competitive bid process management.",
      features: ["Pricing strategy", "Confidential marketing", "Buyer vetting", "Transaction management"],
    },
    {
      title: "Capital Introduction",
      description:
        "Connecting qualified sponsors and operating partners with our network of family offices, sovereign wealth funds, and institutional LP capital.",
      features: ["LP matching", "Pitch preparation", "Term sheet negotiation", "Fund formation support"],
    },
    {
      title: "Asset Management",
      description:
        "Ongoing strategic oversight of stabilized and transitional assets, focused on NOI optimization, lease restructuring, and exit timing.",
      features: ["Performance benchmarking", "Lease advisory", " capex planning", "Disposition strategy"],
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: COLORS.brass }}
          >
            Advisory Services
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
            style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
          >
            Full-Spectrum Real Estate Advisory
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: COLORS.inkLight }}>
            Murivest Group operates as a fiduciary advisor across the entire investment lifecycle —
            from origination and acquisition through stabilization and disposition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 lg:p-10 border transition-all duration-500 hover:border-[#B8956B] hover:shadow-lg"
              style={{ backgroundColor: COLORS.creamWarm, borderColor: COLORS.border }}
            >
              <h3
                className="text-2xl font-light mb-4"
                style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
              >
                {service.title}
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: COLORS.inkLight }}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: COLORS.inkLight }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: COLORS.brass }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeographicCoverage() {
  const regions = [
    {
      name: "Northeast Corridor",
      cities: "New York, Boston, Philadelphia, Washington D.C.",
      focus: "Office repositioning, life sciences, multifamily",
    },
    {
      name: "Southeast & Sun Belt",
      cities: "Miami, Atlanta, Charlotte, Nashville, Tampa",
      focus: "Industrial, multifamily, build-to-rent",
    },
    {
      name: "Texas Triangle",
      cities: "Dallas, Houston, Austin, San Antonio",
      focus: "Industrial, office, residential land",
    },
    {
      name: "Western Markets",
      cities: "Los Angeles, San Francisco, Seattle, Phoenix, Denver",
      focus: "Industrial, life sciences, tech office",
    },
    {
      name: "Midwest Core",
      cities: "Chicago, Indianapolis, Columbus, Kansas City",
      focus: "Industrial, grocery-anchored retail, multifamily",
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.creamWarm }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: COLORS.brass }}
            >
              Geographic Coverage
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
              style={{ color: COLORS.ink, fontFamily: "Georgia, serif" }}
            >
              National Reach With Local Intelligence
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.inkLight }}>
              Our advisory network spans 42 U.S. metropolitan statistical areas, with senior
              relationships in every major gateway market and deep operational expertise in
              high-growth secondary cities.
            </p>
            <div
              className="p-6 border-l-4"
              style={{ backgroundColor: COLORS.cream, borderLeftColor: COLORS.brass }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: COLORS.inkLight }}>
                "Murivest's ability to source off-market industrial in Phoenix and underwritten
                multifamily in Nashville within the same quarter speaks to their national platform
                sophistication."
              </p>
              <div className="mt-4 text-xs tracking-wider uppercase font-medium" style={{ color: COLORS.stone }}>
                — Chief Investment Officer, $4B Family Office, Greenwich
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className="p-6 border transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: COLORS.cream, borderColor: COLORS.border }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium" style={{ color: COLORS.ink }}>
                    {region.name}
                  </h3>
                  <span
                    className="text-xs tracking-wider uppercase px-2 py-1"
                    style={{ backgroundColor: `${COLORS.forest}08`, color: COLORS.forest }}
                  >
                    Active
                  </span>
                </div>
                <div className="text-sm mb-2" style={{ color: COLORS.inkLight }}>
                  {region.cities}
                </div>
                <div className="text-xs tracking-[0.1em] uppercase" style={{ color: COLORS.stone }}>
                  Focus: {region.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.forestDark }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div
          className="text-xs tracking-[0.25em] uppercase font-medium mb-6"
          style={{ color: COLORS.brass }}
        >
          Begin a Conversation
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 max-w-4xl mx-auto"
          style={{ color: COLORS.cream, fontFamily: "Georgia, serif" }}
        >
          Institutional Real Estate Advisory Tailored to Your Investment Mandate
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: `${COLORS.cream}80` }}>
          Whether you are deploying capital into U.S. commercial real estate for the first time or
          expanding an existing portfolio, our senior advisors provide confidential, mandate-aligned
          guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?subject=USA%20Advisory%20Consultation"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: COLORS.brass,
              color: COLORS.forestDark,
            }}
          >
            Schedule Advisory Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <Link
            href="/usa/opportunities"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium border transition-all duration-300 hover:bg-white/5"
            style={{
              color: COLORS.cream,
              borderColor: `${COLORS.cream}30`,
            }}
          >
            Browse Opportunities
          </Link>
        </div>

        <div className="mt-16 pt-16 border-t grid md:grid-cols-3 gap-8 text-left" style={{ borderColor: `${COLORS.cream}15` }}>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.brass }}>
              New York
            </div>
            <div className="text-sm leading-relaxed" style={{ color: `${COLORS.cream}70` }}>
              450 Park Avenue, Suite 2100
              <br />
              New York, NY 10022
              <br />
              +1 (212) 555-0140
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.brass }}>
              Miami
            </div>
            <div className="text-sm leading-relaxed" style={{ color: `${COLORS.cream}70` }}>
              801 Brickell Avenue, Suite 1200
              <br />
              Miami, FL 33131
              <br />
              +1 (305) 555-0182
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.brass }}>
              Dallas
            </div>
            <div className="text-sm leading-relaxed" style={{ color: `${COLORS.cream}70` }}>
              2100 Ross Avenue, Suite 1600
              <br />
              Dallas, TX 75201
              <br />
              +1 (214) 555-0195
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://murivest.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "USA Commercial Real Estate",
        item: "https://murivest.com/usa",
      },
    ],
  };

  return (
    <Script id="breadcrumb-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Murivest Group",
    url: "https://murivest.com",
    logo: "https://murivest.com/logo.png",
    sameAs: [
      "https://linkedin.com/company/murivest",
      "https://twitter.com/murivestgroup",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-212-555-0140",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <Script id="org-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

function WebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "USA Commercial Real Estate | Murivest Group",
    description:
      "Institutional-grade commercial real estate advisory, brokerage, and capital introduction across the United States.",
    url: "https://murivest.com/usa",
    publisher: {
      "@type": "Organization",
      name: "Murivest Group",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: OPPORTUNITIES.map((opp, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "RealEstateListing",
          name: opp.title,
          description: opp.tagline,
          url: `https://murivest.com/usa/opportunities/${opp.id}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: opp.location.split(",")[0],
            addressRegion: opp.location.split(",")[1]?.trim(),
            addressCountry: "US",
          },
          price: {
            "@type": "PriceSpecification",
            price: opp.price.replace(/[^0-9]/g, ""),
            priceCurrency: "USD",
          },
          floorSize: {
            "@type": "QuantitativeValue",
            value: opp.sqft.replace(/[^0-9]/g, ""),
            unitCode: "SQF",
          },
        },
      })),
    },
  };

  return (
    <Script id="webpage-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

// ─── Main Page ───
export default function USAPlatformPage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema />
      <OrganizationSchema />
      <WebPageSchema />

      <HeroSection />
      <MarketTicker />
      <SectorsGrid />
      <OpportunitiesSection />
      <MarketIntelligence />
      <AdvisoryServices />
      <GeographicCoverage />
      <CTASection />
    </main>
  );
}