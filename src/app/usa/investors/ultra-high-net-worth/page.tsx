import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Building2,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Ultra High Net Worth Investors — USA CRE Advisory",
  description:
    "Murivest Group's UHNW U.S. commercial real estate advisory — large-scale, bespoke transactions with maximum confidentiality and sophisticated structuring for ultra-high-net-worth individuals and family trusts.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/ultra-high-net-worth` },
};

const MARKET_CONTEXT =
  "Ultra-high-net-worth individuals and family trusts represent the most sophisticated segment of private commercial real estate capital. UHNW investors typically pursue large-scale, bespoke transactions — from trophy office and multifamily assets to hospitality and land development — with maximum confidentiality, sophisticated structuring, and alignment with broader family wealth strategy. Murivest's UHNW practice is designed to meet these requirements: we provide institutional-grade underwriting and execution with the discretion, flexibility, and relationship-driven approach that distinguishes family capital from institutional mandates.";

const WHAT_UHNW_SEEK = [
  "Large-scale, bespoke transactions aligned with family wealth strategy",
  "Maximum confidentiality throughout the sourcing and execution process",
  "Sophisticated structuring including joint ventures, preferred equity, and cross-collateralization",
  "Trophy and landmark assets in gateway and high-growth markets",
  "Inter-generational wealth transfer and legacy planning through real estate",
];

const WHAT_FITS = [
  "Trophy office and mixed-use assets in gateway markets",
  "Large-scale multifamily portfolios and ground-up residential development",
  "Full-service hotels and hospitality assets in destination markets",
  "Land and development sites for mixed-use and commercial projects",
  "Industrial and logistics portfolios in supply-constrained markets",
];

const HOW_WE_ADVISE = [
  "Mandate definition aligned with family wealth strategy, risk tolerance, and liquidity requirements",
  "Maximum confidentiality through off-market sourcing and controlled information flow",
  "Sophisticated underwriting with JV, preferred equity, and structuring analysis",
  "Access to Murivest's institutional network for capital partners and counterparties",
  "Full transaction execution from LOI through closing with white-glove service",
  "Post-transaction asset management and disposition strategy support",
];

const NEXT_STEPS = [
  "Initiate a confidential conversation — in person or via secure communication — to discuss your family's objectives, constraints, and preferences.",
  "Schedule a strategic session to review potential asset classes, markets, and structuring approaches.",
  "Receive a bespoke mandate proposal with proposed engagement structure, fee arrangement, and initial opportunity pipeline.",
];

export default function UltraHighNetWorthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ultra High Net Worth Investors — Murivest Group",
    description:
      "Murivest's UHNW U.S. commercial real estate advisory for large-scale, bespoke transactions with maximum confidentiality.",
    url: `https://${SITE.domain}/usa/investors/ultra-high-net-worth`,
    about: {
      "@type": "Service",
      name: "Ultra High Net Worth Commercial Real Estate Advisory",
      provider: { "@type": "Organization", name: SITE.name },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ultra high net worth investment advisory"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Ultra High Net Worth — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              UHNW commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Large-scale, bespoke transaction advisory with maximum
              confidentiality and sophisticated structuring for ultra-high-net-worth
              individuals and family trusts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Engage Murivest
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/investors"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Investor Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What UHNW seek */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What UHNW Investors Seek"
              title="Bespoke transactions with maximum discretion"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              {MARKET_CONTEXT}
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Common objectives
            </h3>
            <ul className="mt-4 space-y-3">
              {WHAT_UHNW_SEEK.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#C9A87C]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAF9F6]0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What fits */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Asset Class Alignment"
          title="Property types that fit UHNW objectives"
          description="UHNW investors typically pursue larger, more complex transactions across trophy and emerging asset classes."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_FITS.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#E8E6E1] bg-white p-5"
            >
              <p className="text-sm leading-relaxed text-[#C9A87C]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we advise */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Advisory Model"
          title="Discretion, sophistication, and institutional discipline"
          description="We do not run a fund. We execute bespoke mandates for UHNW families with the same analytical rigor as an institutional engagement — with enhanced discretion."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {HOW_WE_ADVISE.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <p className="text-sm leading-relaxed text-[#C9A87C]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Next steps */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Getting Started"
          title="A confidential conversation begins the engagement"
          description="UHNW mandates require discretion. We initiate engagement through your preferred communication channel — in person, via secure email, or through your professional advisors."
        />
        <div className="mt-10 space-y-4">
          {NEXT_STEPS.map((step, idx) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-sm font-semibold text-gold-400">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-[#C9A87C]">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for your UHNW commercial real estate mandate"
        description="Whether acquiring, disposing, or structuring a joint venture, our team is ready to advise with maximum discretion."
        primaryLabel="Request a Consultation"
        secondaryLabel="Explore Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

