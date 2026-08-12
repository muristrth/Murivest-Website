"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Landmark,
  Globe,
  Building2,
  Scale,
  BarChart3,
  Wallet,
  Briefcase,
  HardHat,
  PieChart,
  Home,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  REAL DATA — No mocks. Sourced from your T1–T3 specification.       */
/* ------------------------------------------------------------------ */

interface CalculatorItem {
  slug: string;
  name: string;
  jurisdiction: string;
  description: string;
  inputs: string;
  icon: React.ElementType;
  badgeColor: string;
}

interface Tier {
  tier: string;
  label: string;
  description: string;
  calculators: CalculatorItem[];
}

const tiers: Tier[] = [
  {
    tier: "Tier 1",
    label: "Capital Markets & Transaction Infrastructure",
    description:
      "High-utility tools for transaction pricing, fiscal obligations, and yield analysis. Designed to be referenced by valuers, solicitors, and market commentators.",
    calculators: [
      {
        slug: "/tools/yield-calculator",
        name: "Commercial Yield & Cap Rate Calculator",
        jurisdiction: "Kenya",
        description:
          "Compute net yield, cap rate, and net operating income for commercial assets in Westlands, Upper Hill, and Industrial Area.",
        inputs: "Purchase price, Annual rent, Vacancy, Service charge, Management fee",
        icon: TrendingUp,
        badgeColor: "bg-[#1B4332] text-[#FAF9F6]",
      },
      {
        slug: "/tools/kenya-transfer-cost-calculator",
        name: "Kenya Commercial Transfer Cost Calculator",
        jurisdiction: "Kenya",
        description:
          "All-in transfer cost modelling including Stamp Duty, legal fees, registration, and ArdhiSasa charges by county and tenure.",
        inputs: "Property value, County, Leasehold / Freehold",
        icon: Scale,
        badgeColor: "bg-[#1B4332] text-[#FAF9F6]",
      },
      {
        slug: "/tools/uk-sdlt-calculator",
        name: "UK SDLT Commercial Calculator",
        jurisdiction: "United Kingdom",
        description:
          "Stamp Duty Land Tax computation for commercial, mixed-use, and leasehold acquisitions across England & Northern Ireland.",
        inputs: "Price, Leasehold / Freehold, Mixed-use flag",
        icon: Landmark,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
      {
        slug: "/tools/uae-dld-calculator",
        name: "UAE DLD Transfer Fee Calculator",
        jurisdiction: "UAE",
        description:
          "Dubai Land Department fee schedule including 4% DLD, trustee office fees, and agency commission for off-plan and ready units.",
        inputs: "Price, Off-plan / Ready, Agency terms",
        icon: Building2,
        badgeColor: "bg-[#8B7355] text-[#FAF9F6]",
      },
      {
        slug: "/tools/kenya-cgt-calculator",
        name: "KRA Capital Gains Tax Calculator",
        jurisdiction: "Kenya",
        description:
          "CGT liability under Kenya Finance Act provisions, accounting for improvement costs, indexation, and year of disposal.",
        inputs: "Purchase price, Sale price, Improvements, Year",
        icon: Wallet,
        badgeColor: "bg-[#1B4332] text-[#FAF9F6]",
      },
    ],
  },
  {
    tier: "Tier 2",
    label: "Occupier Economics & Debt Structuring",
    description:
      "Tools for tenant-representation, facilities budgeting, and capital structuring. Used by CFOs, asset managers, and quantity surveyors.",
    calculators: [
      {
        slug: "/tools/service-charge-calculator",
        name: "Service Charge Budget Calculator",
        jurisdiction: "Kenya",
        description:
          "Annual and monthly service charge estimates for Grade A office stock in Westlands and Upper Hill.",
        inputs: "Rentable area, Service charge rate per sqm",
        icon: Home,
        badgeColor: "bg-[#1B4332] text-[#FAF9F6]",
      },
      {
        slug: "/tools/commercial-mortgage-calculator",
        name: "Commercial Mortgage & Amortisation",
        jurisdiction: "Global",
        description:
          "Debt scheduling across KES, AED, GBP, and SGD. Monthly instalment, total interest cost, and amortisation profile.",
        inputs: "Loan amount, Interest rate, Tenor, Currency",
        icon: BarChart3,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
      {
        slug: "/tools/rent-escalation-calculator",
        name: "Rent Escalation & Effective Rent Calculator",
        jurisdiction: "Global",
        description:
          "Normalise headline rents into effective rents over the lease term, accounting for stepped escalations and rent-free periods.",
        inputs: "Base rent, Escalation %, Lease term, Rent-free months",
        icon: TrendingUp,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
      {
        slug: "/tools/lease-vs-buy-calculator",
        name: "Lease vs Buy Analysis",
        jurisdiction: "Global",
        description:
          "Net present value comparison of occupancy costs over a ten-year horizon with configurable discount rates.",
        inputs: "Purchase cost, Lease cost, Discount rate, Hold period",
        icon: Briefcase,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
    ],
  },
  {
    tier: "Tier 3",
    label: "Portfolio Analytics & Development Feasibility",
    description:
      "Institutional-grade models for fund-level returns, break-even analysis, and capital expenditure planning. Built for sovereign wealth, pension funds, and development partners.",
    calculators: [
      {
        slug: "/tools/irr-calculator",
        name: "IRR & DCF Calculator",
        jurisdiction: "Global",
        description:
          "Unlevered and levered IRR, NPV, and equity multiple from Year 0 to exit. Export-ready for pitch decks and IC memos.",
        inputs: "Cashflows Year 0–10, Exit yield, Discount rate",
        icon: PieChart,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
      {
        slug: "/tools/break-even-occupancy",
        name: "Break-Even Occupancy Calculator",
        jurisdiction: "Global",
        description:
          "Determine the occupancy threshold required to cover fixed operating costs in retail, industrial, and hospitality assets.",
        inputs: "Fixed costs, Rent per unit, Operating expenses",
        icon: Calculator,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
      {
        slug: "/tools/fit-out-calculator",
        name: "Fit-Out Cost Calculator",
        jurisdiction: "Global",
        description:
          "CAPEX estimates for tenant improvements by city, grade specification, and asset class. Benchmarked per square metre.",
        inputs: "Area, Spec (Grade A / B), City",
        icon: HardHat,
        badgeColor: "bg-[#2C2C2C] text-[#FAF9F6]",
      },
    ],
  },
];

const faqs = [
  {
    q: "Are these calculators updated with current statutory rates?",
    a: "Yes. Kenya calculators reflect current KRA and Ministry of Lands fee schedules. UK SDLT rates are aligned with HMRC guidance. UAE DLD fees track Dubai Land Department circulars.",
  },
  {
    q: "Can these tools be embedded on third-party websites?",
    a: "Every calculator offers an embeddable iframe route. Attribution to Murivest is required via a powered-by link, which also generates a backlink to our domain.",
  },
  {
    q: "Who uses these calculators?",
    a: "Valuers referencing our yield models, law firms linking to our transfer cost and CGT tools, UK solicitors citing our SDLT calculator, and Dubai agents embedding our DLD fee estimator.",
  },
  {
    q: "Do you store the data entered?",
    a: "No. All computations run client-side. No input data is transmitted to our servers or stored in any database.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */

export default function CalculatorsClient() {
  return (
    <main className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />

      {/* BREADCRUMB NAV */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-0"
      >
        <ol className="flex items-center gap-2 text-[12px] tracking-[0.1em] text-[#8B7355]">
          <li>
            <Link href="/" className="hover:text-[#2C2C2C] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3" />
          </li>
          <li className="text-[#2C2C2C] font-medium">Calculators</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Murivest Quantitative Tools
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Institutional-Grade
              <br />
              <span className="italic text-[#8B7355] font-light">
                Real Estate Calculators
              </span>
            </h1>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-10 max-w-2xl">
              A suite of jurisdiction-specific financial models built for
              valuers, solicitors, asset managers, and institutional investors
              operating across Kenya, the United Kingdom, and the United Arab
              Emirates. Every tool is designed to be referenced, embedded, and
              cited.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#8B7355]" />
                <span className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                  3 Jurisdictions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#8B7355]" />
                <span className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                  12 Models
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#8B7355]" />
                <span className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                  Client-Side Computation
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-16"
          >
            <div className="border border-[#E5E2DC] bg-white/40 backdrop-blur-sm p-8 md:p-10">
              <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                Why We Built This
              </p>
              <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light mb-6">
                The commercial real estate industry runs on spreadsheets that
                live on individual desktops. We have open-sourced the logic
                into accurate, embeddable web tools so that market
                participants—journalists, agents, lawyers, and analysts—can
                reference a single source of truth.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light">
                Each calculator includes statutory rates, county-specific fees,
                and jurisdiction-aware assumptions. Use them in client
                meetings, link to them in articles, or embed them on your own
                site.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIERS */}
      {tiers.map((tier) => (
        <section
          key={tier.tier}
          className="relative border-t border-[#E5E2DC]"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 md:mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                  {tier.tier}
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-6 text-[#2C2C2C]">
                {tier.label}
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-3xl">
                {tier.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {tier.calculators.map((calc, calcIndex) => {
                const Icon = calc.icon;
                return (
                  <motion.div
                    key={calc.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      delay: calcIndex * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={calc.slug}
                      className="group block h-full border border-[#E5E2DC] bg-white/50 hover:bg-white transition-colors duration-500 p-8 md:p-10"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div
                          className={`inline-flex items-center px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium ${calc.badgeColor}`}
                        >
                          {calc.jurisdiction}
                        </div>
                        <Icon className="w-5 h-5 text-[#8B7355] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <h3 className="text-[18px] md:text-[20px] font-serif leading-[1.3] mb-4 text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors duration-500">
                        {calc.name}
                      </h3>

                      <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-6">
                        {calc.description}
                      </p>

                      <div className="mb-8">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355] mb-2">
                          Key Inputs
                        </p>
                        <p className="text-[13px] text-[#2C2C2C] font-light leading-relaxed">
                          {calc.inputs}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#8B7355] font-medium pt-6 border-t border-[#E5E2DC]">
                        <span>Open Calculator</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-500" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* EMBED CTA */}
      <section className="relative border-t border-[#E5E2DC] bg-[#1B4332] text-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#B8956B]" />
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium">
                  Distribution
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8">
                Embed Our Models On
                <br />
                <span className="italic text-[#B8956B] font-light">
                  Your Own Platform
                </span>
              </h2>

              <p className="text-[15px] leading-[1.8] text-[#D4CFC7] font-light max-w-2xl mb-10">
                Every calculator is available as an iframe widget. Add
                jurisdiction-specific computation to your agency website,
                law-firm resources page, or valuation portal. A powered-by
                Murivest link is required—generating authoritative backlinks
                while extending your utility to clients.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-[#1B4332] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#FAF9F6] transition-colors duration-500"
                >
                  Request Embed Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tools/yield-calculator/embed"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#B8956B] text-[#B8956B] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B] hover:text-[#1B4332] transition-colors duration-500"
                >
                  View Example Widget
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="border border-[#B8956B]/30 bg-[#FAF9F6]/5 backdrop-blur-sm p-8 md:p-10 overflow-hidden">
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#B8956B] mb-4">
                  Sample Embed Code
                </p>
                <code className="block text-[13px] leading-[1.6] text-[#D4CFC7] font-mono break-all">
                  {`<iframe`}
                  <br />
                  &nbsp;&nbsp;{`src="https://murivest.com/tools/kenya-transfer-cost-calculator/embed"`}
                  <br />
                  &nbsp;&nbsp;{`width="100%"`}
                  <br />
                  &nbsp;&nbsp;{`height="640"`}
                  <br />
                  &nbsp;&nbsp;{`frameborder="0"`}
                  <br />
                  {`></iframe>`}
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Common Questions
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]">
              Methodology & Usage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-3 leading-[1.4]">
                  {faq.q}
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </main>
  );
}