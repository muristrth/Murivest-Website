"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  TrendingUp,
  BarChart3,
  Globe,
  Landmark,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Briefcase,
  FileText,
  Phone,
  Mail,
  ArrowDownRight,
  Minus,
  Plus,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DESIGN TOKENS — Old Money Golf Club Lounge Aesthetic
// ─────────────────────────────────────────────────────────────

const colors = {
  // Primary palette
  forest: {
    50: "#f2f7f4",
    100: "#e0ece4",
    200: "#c2d9c9",
    300: "#94bfa0",
    400: "#5e9f71",
    500: "#3a7d4f",
    600: "#2a6340",
    700: "#1e4f32",
    800: "#163f28",
    900: "#0d2e1c",
    950: "#071f12",
  },
  gold: {
    50: "#fdf9f0",
    100: "#f9eed0",
    200: "#f2dba3",
    300: "#e8c26d",
    400: "#d4a843",
    500: "#b88a2e",
    600: "#9a6d22",
    700: "#7a521c",
    800: "#5c3e18",
    900: "#3d2a10",
    950: "#241808",
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
};

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },
  },
};

const letterReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};


// ─────────────────────────────────────────────────────────────
// SECTION: HERO
// ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen bg-forest-950 overflow-hidden">
      {/* Faint paper-grain / vignette texture, no photo wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,80,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.4),transparent_55%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* ── Masthead / Dateline strip ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-gold-500/15 py-6 mt-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-gold-400/80 text-[10px] tracking-[0.35em] uppercase font-medium">
              Murivest Advisory
            </span>
            <span className="text-stone-600 text-[10px]">/</span>
            <span className="text-stone-500 text-[10px] tracking-[0.35em] uppercase">
              United Arab Emirates
            </span>
          </div>
          <span className="hidden sm:block text-stone-600 text-[10px] tracking-[0.3em] uppercase">
            Private Client Briefing
          </span>
        </motion.div>

        {/* ── Main grid: headline column + plate column ───────── */}
        <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-x-12 pt-20 pb-28 lg:pt-28 lg:pb-32">
          {/* Headline column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="block text-gold-400/90 text-[11px] tracking-[0.3em] uppercase font-medium mb-8">
              Institutional Real Estate Advisory
            </span>

            <h1 className="font-display text-stone-50 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.12] tracking-tight">
              Capital deployed with
              <br />
              <span className="italic text-stone-300">discretion</span>{" "}
              is capital
              <br />
              deployed with foresight.
            </h1>

            <div className="mt-10 max-w-xl border-l border-gold-500/25 pl-6">
              <p className="text-stone-400 text-[15px] lg:text-base leading-[1.85] font-body">
                Murivest advises institutional investors, family offices and
                private capital on commercial real estate strategy across the
                United Arab Emirates — market research, transaction advisory
                and cross-border positioning for principals who allocate
                quietly and hold for the long term.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-14">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-gold-500/40 text-stone-100 px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-gold-400 hover:text-gold-300 transition-colors duration-500"
              >
                Discuss a Mandate
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-500"
                />
              </a>
              <a
                href="#research"
                className="group inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 px-1 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-500"
              >
                Explore UAE Research
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                />
              </a>
            </div>
          </motion.div>

          {/* Plate column — captioned photograph, HBR-figure style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 lg:pt-2"
          >
            <figure className="border border-gold-500/15">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale-[35%] contrast-[1.05]"
                  style={{
                    backgroundImage:
                      "url('/images/mandate-hero.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-forest-950/25" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold-500/10" />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4 border-t border-gold-500/15">
                <span className="text-stone-500 text-[10px] tracking-[0.15em] uppercase">
                  Fig. 01 — Dubai Skyline, Business Bay
                </span>
                <span className="text-stone-600 text-[10px] tracking-[0.15em]">
                  2026
                </span>
              </figcaption>
            </figure>

            {/* Quiet credibility line beneath the plate */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold-500/10">
              <div>
                <div className="text-stone-200 text-sm font-display tracking-tight">
                  Est. 2019
                </div>
                <div className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Nairobi · Dubai
                </div>
              </div>
              <div className="w-10 h-px bg-gold-500/30" />
              <div className="text-right">
                <div className="text-stone-200 text-sm font-display tracking-tight">
                  Mandate Basis
                </div>
                <div className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Off-Market Access
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────────────
// SECTION: QUICK LINKS BAR
// ─────────────────────────────────────────────────────────────

function QuickLinksBar() {
  const links = [
    { label: "Investment Advisory", href: "#advisory" },
    { label: "Capital Markets", href: "#capital" },
    { label: "Research", href: "#research" },
    { label: "Cross-Border Strategy", href: "#crossborder" },
  ];

  return (
    <section className="bg-stone-100 border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-0">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 py-5 px-6 lg:px-8 text-[10px] tracking-[0.2em] uppercase text-stone-500 hover:text-forest-800 transition-colors duration-300 border-r border-stone-200 last:border-r-0"
            >
              {link.label}
              <ArrowRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: RESEARCH BEFORE CAPITAL
// ─────────────────────────────────────────────────────────────

function ResearchBeforeCapital() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-medium">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15] mb-8"
            >
              Research Before Capital.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-stone-600 text-base leading-[1.8] mb-6 font-body"
            >
              Commercial real estate decisions should be informed by markets,
              not momentum.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-sm leading-[1.8] font-body"
            >
              Murivest was established on the belief that disciplined
              research, local understanding and long-term thinking produce
              better investment outcomes than reacting to market cycles alone.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-sm leading-[1.8] mt-4 font-body"
            >
              Our advisory work begins with understanding risk, capital,
              demand and place before recommending transactions. Everything we
              publish, analyse and advise supports that principle.
            </motion.p>
          </motion.div>

          {/* Right Column — Investment Framework */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-forest-800 text-[10px] tracking-[0.3em] uppercase font-medium">
                How We Think
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-forest-900 mt-3">
                An Investment Framework Rather Than A Brokerage Model
              </h3>
            </motion.div>

            <div className="space-y-0">
              {[
                {
                  title: "Markets",
                  desc: "Understanding how capital moves between cities, countries and regions.",
                  icon: Globe,
                },
                {
                  title: "Research",
                  desc: "Producing investment intelligence that informs decisions rather than marketing.",
                  icon: FileText,
                },
                {
                  title: "Capital",
                  desc: "Structuring transactions around investment objectives rather than asset sales.",
                  icon: BarChart3,
                },
                {
                  title: "Execution",
                  desc: "Supporting acquisitions, dispositions and portfolio strategy through disciplined advisory.",
                  icon: Briefcase,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group py-8 border-t border-stone-200 first:border-t-0 hover:bg-stone-100/50 transition-colors duration-300 px-4 -mx-4"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-stone-300 group-hover:border-gold-500 group-hover:bg-gold-500/5 transition-all duration-300 shrink-0">
                      <item.icon
                        size={18}
                        className="text-stone-400 group-hover:text-gold-600 transition-colors"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display text-lg text-forest-900">
                          {item.title}
                        </h4>
                        <span className="text-stone-300 text-xs font-mono">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: THE UAE PLATFORM — Emirate Cards
// ─────────────────────────────────────────────────────────────

function UAEPlatform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const emirates = [
    {
      name: "Dubai",
      driver: "Trade, logistics, financial services and tourism.",
      capital: "Liquidity, transaction volume and an internationally diversified occupier base.",
      sectors: "Office (DIFC), logistics, hospitality, residential.",
    },
    {
      name: "Abu Dhabi",
      driver: "Sovereign wealth, energy and government-anchored development.",
      capital: "Long-duration income and sovereign-grade counterparty stability.",
      sectors: "Office, government-linked developments, residential.",
    },
    {
      name: "Sharjah",
      driver: "Manufacturing, education and industrial production.",
      capital: "Value entry pricing with industrial and logistics exposure.",
      sectors: "Industrial, logistics, education-linked residential.",
    },
    {
      name: "Ras Al Khaimah",
      driver: "Manufacturing diversification and tourism infrastructure.",
      capital: "Early-mover positioning in the UAE's fastest-growing emirate by GDP.",
      sectors: "Industrial, hospitality, residential.",
    },
    {
      name: "Ajman",
      driver: "Affordable industrial capacity within the Dubai metropolitan corridor.",
      capital: "Value-oriented entry into UAE industrial and residential markets.",
      sectors: "Industrial, affordable residential.",
    },
    {
      name: "Fujairah",
      driver: "Port infrastructure and energy logistics on the Indian Ocean coastline.",
      capital: "Specialised exposure to maritime and energy-linked infrastructure.",
      sectors: "Port-related industrial, energy logistics.",
    },
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-400 text-[10px] tracking-[0.4em] uppercase font-medium">
              The UAE Platform
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-stone-50 leading-[1.15] mb-6"
          >
            A National Market. Distinct Local Economies.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-stone-400 text-base leading-[1.8] font-body"
          >
            The UAE functions as a single investment destination while each
            emirate operates with different economic drivers, occupier demand,
            planning frameworks and investment characteristics. Understanding
            those differences is fundamental to institutional portfolio
            construction.
          </motion.p>
        </motion.div>

        {/* Emirate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-900/50">
          {emirates.map((emirate, i) => (
            <EmirateCard
              key={emirate.name}
              emirate={emirate}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmirateCard({
  emirate,
  index,
  isInView,
}: {
  emirate: any;
  index: number;
  isInView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="bg-forest-950 p-8 lg:p-10 group hover:bg-forest-900/80 transition-colors duration-500 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl text-stone-50">{emirate.name}</h3>
        <div className="w-8 h-8 flex items-center justify-center border border-stone-700 group-hover:border-gold-500/50 transition-colors">
          {expanded ? (
            <Minus size={14} className="text-stone-500" />
          ) : (
            <Plus size={14} className="text-stone-500" />
          )}
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Economic Driver
          </span>
          <p className="text-stone-400 text-sm leading-relaxed font-body">
            {emirate.driver}
          </p>
        </div>

        <div>
          <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Why Capital Allocates
          </span>
          <p className="text-stone-400 text-sm leading-relaxed font-body">
            {emirate.capital}
          </p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div>
                <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
                  Dominant Sectors
                </span>
                <p className="text-stone-400 text-sm leading-relaxed font-body">
                  {emirate.sectors}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-stone-800">
                <a
                  href={`/markets/${emirate.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-gold-400 text-[10px] tracking-[0.2em] uppercase hover:text-gold-300 transition-colors"
                >
                  View Market
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="pt-4 border-t border-stone-800/50">
            <span className="text-stone-600 text-[10px] tracking-[0.15em] uppercase">
              Click to expand
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: SECTORS
// ─────────────────────────────────────────────────────────────

function Sectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    "Office",
    "Industrial & Logistics",
    "Retail",
    "Hospitality",
    "Residential",
    "Student Housing",
    "Healthcare",
    "Life Sciences",
    "Data Centres",
    "Mixed Use",
    "Land",
    "Specialised Assets",
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-medium">
              Coverage
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15]"
          >
            Commercial Real Estate Across The Investment Spectrum
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-stone-50 p-6 lg:p-8 group hover:bg-forest-900 transition-colors duration-500 cursor-default"
            >
              <span className="text-stone-700 group-hover:text-stone-50 text-sm font-medium tracking-wide transition-colors duration-300 font-body">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: RESEARCH
// ─────────────────────────────────────────────────────────────

function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const researchTypes = [
    "Market Reports",
    "Investment Guides",
    "Sector Analysis",
    "Capital Markets",
    "Investment Themes",
    "City Intelligence",
  ];

  const indicators = [
    { label: "Prime Yields", value: "%" },
    { label: "Vacancy", value: "%" },
    { label: "Rental Growth", value: "% YoY" },
    { label: "Construction Pipeline", value: "sq ft" },
    { label: "Interest Rates", value: "%" },
    { label: "Population Growth", value: "growth" },
    { label: "GDP", value: "growth" },
    { label: "Investment Volumes", value: "AED" },
    { label: "Office Absorption", value: "sq ft" },
    { label: "Industrial Demand", value: "sq ft" },
  ];

  return (
    <section ref={ref} id="research" className="py-32 lg:py-40 bg-stone-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-medium">
                Research
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15] mb-8"
            >
              Research That Exists To Improve Decisions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-stone-600 text-base leading-[1.8] mb-6 font-body"
            >
              Research is not a marketing activity. It is the analytical
              foundation of every advisory engagement. Murivest develops market
              intelligence to understand supply, demand, pricing, capital flows
              and structural change across commercial real estate markets.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 mt-10">
              {researchTypes.map((type) => (
                <a
                  key={type}
                  href={`/research/${type.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-between py-3 border-b border-stone-200 group hover:border-gold-500 transition-colors duration-300"
                >
                  <span className="text-stone-700 text-sm group-hover:text-forest-900 transition-colors font-body">
                    {type}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-stone-400 group-hover:text-gold-600 transition-colors"
                  />
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-3 text-forest-900 text-[11px] tracking-[0.2em] uppercase font-medium hover:text-gold-600 transition-colors"
              >
                View Full Dashboard
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Market Indicators */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-forest-800 text-[10px] tracking-[0.3em] uppercase font-medium">
                Current Market Indicators
              </span>
            </motion.div>

            <div className="grid grid-cols-2 gap-px bg-stone-200">
              {indicators.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  variants={fadeUp}
                  className="bg-stone-100 p-6 lg:p-8 group hover:bg-stone-50 transition-colors duration-300"
                >
                  <span className="text-stone-400 text-[9px] tracking-[0.25em] uppercase block mb-3">
                    {ind.label}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl lg:text-3xl text-forest-900">
                      —
                    </span>
                    <span className="text-stone-400 text-xs font-mono">
                      {ind.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: INVESTMENT THEMES
// ─────────────────────────────────────────────────────────────

function InvestmentThemes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const themes = [
    {
      title: "Logistics",
      desc: "Regional trade growth and e-commerce penetration continue to drive demand for warehousing and last-mile distribution space.",
    },
    {
      title: "Digital Infrastructure",
      desc: "Expanding cloud and AI compute requirements are increasing demand for data centre capacity and the power infrastructure that supports it.",
    },
    {
      title: "Healthcare",
      desc: "Population growth and medical tourism are expanding demand for healthcare-anchored real estate across the emirates.",
    },
    {
      title: "Tourism",
      desc: "Sustained visitor growth continues to support hospitality and tourism-linked commercial development.",
    },
    {
      title: "Urban Regeneration",
      desc: "Established districts across Dubai and Abu Dhabi are undergoing redevelopment as land values and planning frameworks evolve.",
    },
    {
      title: "Industrial Growth",
      desc: "Manufacturing diversification, particularly in Sharjah and Ras Al Khaimah, is expanding demand for industrial land and facilities.",
    },
    {
      title: "Housing",
      desc: "Population growth and shifting household formation are shaping demand across residential and build-to-rent formats.",
    },
    {
      title: "Infrastructure",
      desc: "Transport, utilities and free-zone investment continue to influence where commercial demand concentrates.",
    },
    {
      title: "AI Infrastructure",
      desc: "Growing compute and connectivity requirements are creating a distinct category of real estate demand tied to artificial intelligence infrastructure.",
    },
    {
      title: "Energy Transition",
      desc: "Shifts in energy policy and investment are beginning to influence industrial land use and long-term infrastructure planning.",
    },
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-400 text-[10px] tracking-[0.4em] uppercase font-medium">
              Investment Themes
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-stone-50 leading-[1.15] max-w-3xl"
          >
            Structural Trends Shaping Capital Allocation
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-forest-900/50">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-forest-950 p-8 lg:p-10 group hover:bg-forest-900/80 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-gold-500/40 text-xs font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-stone-50 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {theme.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-[1.8] font-body">
                    {theme.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: HOW WE ADVISE
// ─────────────────────────────────────────────────────────────

function HowWeAdvise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Investment Advisory",
      desc: "We support acquisition, disposition and market entry decisions with analysis grounded in market research. Our recommendations reflect investment objectives, not inventory.",
    },
    {
      title: "Capital Markets",
      desc: "We structure investment sales, equity introductions and debt advisory around the requirements of institutional and sovereign counterparties. Execution follows strategy, not the reverse.",
    },
    {
      title: "Portfolio Strategy",
      desc: "We build allocation frameworks across emirates and asset classes matched to a mandate's duration, currency exposure and risk tolerance. Portfolio construction precedes asset selection.",
    },
    {
      title: "Research",
      desc: "We produce market intelligence to inform live advisory engagements. Research is the analytical foundation of our work, not a separate publishing function.",
    },
    {
      title: "Cross-Border Transactions",
      desc: "We advise capital moving between the Gulf and Africa, informed by our operating presence in both regions. Structuring accounts for both jurisdictions from the outset.",
    },
    {
      title: "Leasing",
      desc: "We advise institutional landlords and occupiers on leasing strategy across the UAE's primary commercial gateways. Advice is calibrated to holding period and asset strategy.",
    },
    {
      title: "Development Advisory",
      desc: "We advise on site selection, feasibility and positioning for institutional development programmes. Our input begins before design, not after.",
    },
    {
      title: "Market Entry",
      desc: "We support capital entering the UAE for the first time, from regulatory structuring to initial portfolio strategy. Entry decisions are treated as the start of a mandate, not a single transaction.",
    },
  ];

  return (
    <section ref={ref} id="advisory" className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-medium">
              How We Advise
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15] max-w-3xl"
          >
            Advisory Built Around Investment Decisions
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-stone-200">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-stone-50 p-8 lg:p-10 group hover:bg-stone-100 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-gold-500/50 text-xs font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-forest-900 mb-3 group-hover:text-gold-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-[1.8] font-body">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: PERSPECTIVE
// ─────────────────────────────────────────────────────────────

function Perspective() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-forest-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-gold-400 text-[10px] tracking-[0.4em] uppercase font-medium">
                Perspective
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl lg:text-5xl text-stone-50 leading-[1.15] mb-8"
            >
              Perspective Shapes Decisions.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-stone-400 text-base leading-[1.8] mb-6 font-body"
            >
              Murivest operates across the Gulf and East Africa.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-400 text-base leading-[1.8] mb-6 font-body"
            >
              That perspective influences how we analyse markets, evaluate risk
              and support capital allocation. For investors comparing
              opportunities across regions, understanding relative value matters
              as much as understanding individual assets.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-400 text-base leading-[1.8] font-body"
            >
              Our role is to provide independent advice grounded in research,
              market knowledge and disciplined execution.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: INSIGHTS
// ─────────────────────────────────────────────────────────────

function Insights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    { label: "Quarterly Outlook", href: "/insights/quarterly-outlook" },
    { label: "Market Commentary", href: "/insights/market-commentary" },
    { label: "Video Library", href: "/insights/video-library" },
    { label: "City Intelligence Briefs", href: "/insights/city-intelligence" },
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-medium">
              Insights
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15]"
          >
            Latest Research, Reports and Commentary
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200"
        >
          {insights.map((insight) => (
            <motion.a
              key={insight.label}
              variants={fadeUp}
              href={insight.href}
              className="bg-stone-50 p-8 lg:p-10 group hover:bg-forest-900 transition-colors duration-500 block"
            >
              <span className="text-stone-700 group-hover:text-stone-50 text-sm font-medium tracking-wide transition-colors duration-300 block mb-4 font-body">
                {insight.label}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-stone-300 group-hover:bg-gold-500 transition-colors" />
                <ArrowRight
                  size={14}
                  className="text-stone-400 group-hover:text-gold-400 transition-colors"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: CTA
// ─────────────────────────────────────────────────────────────

function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-400 text-[10px] tracking-[0.4em] uppercase font-medium">
              Contact
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl xl:text-6xl text-stone-50 leading-[1.15] mb-8"
          >
            Begin The Conversation Before The Transaction.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-stone-400 text-base lg:text-lg leading-[1.8] mb-12 max-w-2xl font-body"
          >
            Institutional real estate decisions are rarely defined by a single
            property. They begin with understanding markets, objectives and
            capital. Whether evaluating a market entry, portfolio strategy or
            acquisition programme, early dialogue improves later execution.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold-600 text-stone-50 px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-500 transition-colors duration-300"
            >
              Discuss A Mandate
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION: FOOTER
// ─────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-stone-950 py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gold-600 rounded-sm flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5 text-stone-50"
                  fill="currentColor"
                >
                  <rect x="4" y="4" width="10" height="10" rx="1" />
                  <rect x="18" y="4" width="10" height="10" rx="1" />
                  <rect x="4" y="18" width="10" height="10" rx="1" />
                  <rect x="18" y="18" width="10" height="10" rx="1" />
                </svg>
              </div>
              <div>
                <span className="font-display text-lg tracking-[0.2em] uppercase text-stone-50">
                  Murivest
                </span>
                <span className="block text-[9px] tracking-[0.35em] uppercase text-gold-600">
                  United Arab Emirates
                </span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed font-body max-w-xs">
              Advising institutional investors, family offices and long-term
              capital on commercial real estate strategy across the United Arab
              Emirates.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Advisory
            </h4>
            <ul className="space-y-3">
              {[
                "Investment Advisory",
                "Capital Markets",
                "Portfolio Strategy",
                "Research",
                "Cross-Border Transactions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Markets
            </h4>
            <ul className="space-y-3">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Ajman", "Fujairah"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/markets/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Research
            </h4>
            <ul className="space-y-3">
              {[
                "Market Reports",
                "Investment Guides",
                "Sector Analysis",
                "City Intelligence",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/research/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@murivest.com"
                  className="text-stone-600 text-sm hover:text-gold-500 transition-colors flex items-center gap-2 font-body"
                >
                  <Mail size={14} />
                  info@murivest.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-[10px] tracking-[0.15em] uppercase">
            &copy; {new Date().getFullYear()} Murivest. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-stone-700 text-[10px] tracking-[0.15em] uppercase hover:text-stone-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-stone-700 text-[10px] tracking-[0.15em] uppercase hover:text-stone-500 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Global Styles for Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@300;400;500&display=swap");

        :root {
          --font-display: "Playfair Display", Georgia, serif;
          --font-body: "Inter", system-ui, sans-serif;
          --font-accent: "Cormorant Garamond", Georgia, serif;
          --font-mono: "JetBrains Mono", monospace;
        }

        .font-display {
          font-family: var(--font-display);
        }
        .font-body {
          font-family: var(--font-body);
        }
        .font-accent {
          font-family: var(--font-accent);
        }
        .font-mono {
          font-family: var(--font-mono);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f5f5f4;
        }
        ::-webkit-scrollbar-thumb {
          background: #a8a29e;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #78716c;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Selection color */
        ::selection {
          background: rgba(58, 125, 79, 0.2);
          color: #0d2e1c;
        }
      `}</style>

      <Hero />
      <QuickLinksBar />
      <ResearchBeforeCapital />
      <UAEPlatform />
      <Sectors />
      <Research />
      <InvestmentThemes />
      <HowWeAdvise />
      <Perspective />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}