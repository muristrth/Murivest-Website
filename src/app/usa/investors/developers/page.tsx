import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  TrendingUp,
  MapPin,
  Building2,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Developer Investors — USA CRE Advisory",
  description:
    "Murivest Group's U.S. developer investor commercial real estate advisory — capital sourcing, disposition, and leasing strategy for real estate developers and operating partners.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors/developers` },
};

const MARKET_CONTEXT =
  "Real estate developers and operating partners are the supply-side engine of U.S. commercial real estate, creating the assets that institutional and private capital ultimately acquires. Murivest's developer practice is designed to complement developers' internal capabilities with specialized capital sourcing, disposition advisory, and leasing strategy. We understand that developers operate on tight timelines, complex capital stacks, and uncertain exit markets — and we structure our advisory accordingly.";

const WHAT_DEVELOPERS_SEEK = [
  "Equity and debt capital partners for acquisition and development projects",
  "Disposition advisory at completion or stabilization to optimize exit timing and pricing",
  "Leasing strategy to achieve stabilized occupancy and cash flow before exit",
  "Market intelligence to support land acquisition and entitlement decisions",
  "Capital stack structuring including preferred equity, mezzanine, and joint venture arrangements",
];

const WHAT_FITS = [
  "Ground-up commercial and mixed-use development projects",
  "Value-add office, industrial, and multifamily repositioning",
  "Adaptive reuse and conversion projects (office-to-residential, industrial-to-mixed-use)",
  "Land acquisition and entitlement for future development",
  "Stabilized asset dispositions at completion or stabilization",
];

const HOW_WE_ADVISE = [
  "Capital sourcing — connecting developers with equity partners, debt providers, and preferred equity investors",
  "Disposition advisory — managing the exit process from stabilization through closing",
  "Leasing strategy — advising on market positioning, tenant mix, and lease terms to achieve stabilized occupancy",
  "Underwriting and market analysis — supporting land acquisition and entitlement decisions with institutional-grade analysis",
  "Capital stack structuring — advising on optimal capital structures for specific projects and risk profiles",
];

const NEXT_STEPS = [
  "Describe your development project, capital requirements, timeline, and target markets.",
  "Schedule a consultation to discuss how Murivest's capital sourcing and disposition capabilities can complement your internal team.",
  "Receive a tailored mandate proposal with proposed capital partners and exit strategy.",
];

export default function DevelopersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Developer Investors — Murivest Group",
    description:
      "Murivest's developer investor U.S. commercial real estate advisory for capital sourcing, disposition, and leasing strategy.",
    url: `https://${SITE.domain}/usa/investors/developers`,
    about: {
      "@type": "Service",
      name: "Developer Investor Commercial Real Estate Advisory",
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
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Real estate development and construction"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Developers — Investor Solutions
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Developer investor commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Capital sourcing, disposition advisory, and leasing strategy for
              real estate developers and operating partners across U.S.
              commercial real estate markets.
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

      {/* What developers seek */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What Developers Seek"
              title="Capital, timing, and execution support"
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
              {WHAT_DEVELOPERS_SEEK.map((item) => (
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
          eyebrow="Project Types"
          title="Development and repositioning projects we support"
          description="Murivest's developer practice spans ground-up development, value-add repositioning, and adaptive reuse across all major U.S. markets."
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
          title="Execution support calibrated to the development lifecycle"
          description="We understand that developers operate with tight timelines and complex capital requirements. Murivest's advisory is designed to fit seamlessly into your process."
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
          title="A confidential discussion of your project and capital needs"
          description="Every developer mandate is unique. We begin by understanding your project, timeline, and capital requirements."
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
        title="Engage Murivest for your developer investor mandate"
        description="Whether sourcing capital, planning a disposition, or developing a leasing strategy, our team is ready to advise."
        primaryLabel="Request a Consultation"
        secondaryLabel="View Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

