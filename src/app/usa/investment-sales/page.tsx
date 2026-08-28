import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, FileSearch, Handshake, TrendingUp } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Investment Sales Advisory — USA Commercial Real Estate",
  description:
    "Murivest Group's U.S. investment sales advisory practice — disposition and acquisition of institutional-grade commercial real estate on a confidential, mandate-driven basis.",
  alternates: { canonical: `https://${SITE.domain}/usa/investment-sales` },
};

const PROCESS = [
  {
    icon: Search,
    title: "Mandate & Strategy",
    description:
      "We begin with a confidential consultation to understand your disposition or acquisition objectives, then develop a tailored execution strategy aligned with current market conditions.",
  },
  {
    icon: FileSearch,
    title: "Underwriting & Valuation",
    description:
      "Our team conducts institutional-grade underwriting, cash flow analysis, and market-based valuation to support pricing decisions and investor materials.",
  },
  {
    icon: TrendingUp,
    title: "Targeted Marketing",
    description:
      "We execute a disciplined outreach to pre-qualified buyers or off-market sellers, maintaining confidentiality and competitive tension throughout the process.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Closing",
    description:
      "From letter of intent through due diligence and closing, Murivest manages the transaction process to protect your interests and maximize outcomes.",
  },
];

const CAPABILITIES = [
  {
    title: "Disposition Advisory",
    description:
      "Sell-side mandates for institutional owners seeking to exit or rebalance commercial real estate positions. We manage the entire process from pricing strategy through closing.",
  },
  {
    title: "Acquisition Advisory",
    description:
      "Buy-side representation for investors pursuing specific assets or portfolios. We source opportunities, lead underwriting, and manage the acquisition process.",
  },
  {
    title: "Portfolio Transactions",
    description:
      "Advisory for multi-asset dispositions and acquisitions, including portfolio segmentation strategy and coordinated marketing across markets and sectors.",
  },
  {
    title: "Off-Market Sourcing",
    description:
      "Discreet, targeted outreach to property owners and investors on behalf of qualified buyers seeking specific asset profiles without public market exposure.",
  },
];

export default function InvestmentSalesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Investment Sales</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Disposition and acquisition advisory for institutional-grade U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-200">
              Murivest's investment sales practice represents institutional
              investors, private capital, and principals in the sale and
              acquisition of commercial properties — executed on a
              confidential, mandate-driven basis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
              >
                Engage Murivest
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/commercial-real-estate"
                className="flex items-center justify-center rounded-lg border border-ink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-ink-800"
              >
                View Property Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Process"
          title="A structured approach to investment sales execution"
          description="Every disposition and acquisition mandate follows a disciplined process designed to protect client interests and maximize transaction outcomes."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div key={step.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <step.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="py-20 bg-ink-50">
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-cycle investment sales advisory"
          description="From single-asset dispositions to portfolio transactions and off-market sourcing, Murivest covers the full spectrum of investment sales activity."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-ink-100 bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-ink-900">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What we transact */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="What We Transact"
          title="Sector coverage across U.S. commercial real estate"
          description="Murivest maintains dedicated sector expertise across all major U.S. commercial property types, each with distinct market dynamics and buyer pools."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Office", href: "/usa/commercial-real-estate/office" },
            { label: "Industrial", href: "/usa/commercial-real-estate/industrial" },
            { label: "Logistics", href: "/usa/commercial-real-estate/logistics" },
            { label: "Multifamily", href: "/usa/commercial-real-estate/multifamily" },
            { label: "Retail", href: "/usa/commercial-real-estate/retail" },
            { label: "Data Centers", href: "/usa/commercial-real-estate/data-centers" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-ink-100 bg-white p-5 transition-all hover:border-navy-300 hover:shadow-md"
            >
              <span className="font-serif text-lg font-semibold text-ink-900 group-hover:text-navy-700 transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={18}
                className="text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-navy-600"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Discuss your investment sales objectives with our team"
        description="Whether you are considering a disposition, pursuing an acquisition, or exploring portfolio strategy, we welcome a confidential conversation."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Current Opportunities"
        secondaryHref="/usa/commercial-real-estate"
      />
    </>
  );
}
