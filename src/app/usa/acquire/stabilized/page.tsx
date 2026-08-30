import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Scale, Building2 } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE, PROPERTY_TYPES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Stabilized Asset Acquisitions — U.S. Commercial Real Estate",
  description:
    "Core and core-plus acquisition advisory for stabilized, income-producing U.S. commercial real estate — covenant-backed cash flow for institutional and private capital.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire/stabilized` },
  openGraph: {
    title: "Stabilized Asset Acquisitions — U.S. Commercial Real Estate",
    description:
      "Core and core-plus acquisition advisory for stabilized U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/acquire/stabilized`,
  },
};

const FOCUS = [
  {
    icon: Layers,
    title: "Durable Income",
    description:
      "Assets with in-place, covenant-backed cash flow and limited near-term lease rollover — where durability of income, not speculative growth, governs the underwriting.",
  },
  {
    icon: Scale,
    title: "Core & Core-Plus Profiles",
    description:
      "Lower-leverage, lower-ambiguity positions suited to allocators prioritizing capital preservation and predictable distribution profiles.",
  },
  {
    icon: ShieldCheck,
    title: "Tenant & Sector Quality",
    description:
      "Emphasis on creditworthy tenancy, essential-use assets, and sectors with structural demand resilience across cycles.",
  },
  {
    icon: Building2,
    title: "Institutional-Grade Reporting",
    description:
      "Clean, well-documented assets that integrate into institutional portfolios without material remediation or restructuring overhead.",
  },
];

const SECTOR_ICONS: Record<string, typeof Building2> = {
  office: Building2,
  industrial: Building2,
  logistics: Building2,
  multifamily: Building2,
  retail: Building2,
  "data-centers": Building2,
};

export default function StabilizedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Stabilized Asset Acquisition Advisory",
    serviceType: "Core and core-plus buy-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Acquisition advisory for stabilized, income-producing U.S. commercial real estate for core and core-plus institutional and private capital mandates.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#1B4332] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-ink-950 to-ink-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Acquire · Stabilized
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Stabilized acquisitions for capital prioritized on durable, covenant-backed income
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              For core and core-plus mandates, the question is not whether an
              asset can be transformed — it is whether its cash flow will endure.
              Murivest sources stabilized U.S. commercial real estate where
              income durability, tenant quality, and structural demand define the
              investment case.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Stabilized Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/acquire"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Acquisition Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="What Defines Stabilized"
          title="Underwriting the income before the story"
          description="Stabilized acquisition is governed by the predictability of the cash flow, not the narrative of appreciation. We test income durability at the asset, tenant, and sector level."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Where It Fits</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              A core allocation built for capital preservation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              Stabilized acquisition suits allocators whose mandate prioritizes
              predictable distributions and low operational ambiguity — insurance
              companies, pension funds, and family offices building a durable
              income base. The discipline is in verifying the quality of what is
              in place: lease structure, tenant credit, and the trajectory of
              replacement cost relative to basis.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#8B8680]">
              Even in core assets, basis matters. We underwrite entry against
              replacement cost and sector cap-rate ranges so that the margin of
              safety is explicit rather than assumed.
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              Sectors we source for stabilized mandates
            </h3>
            <div className="mt-4 grid gap-3">
              {PROPERTY_TYPES.map((type) => {
                const Icon = SECTOR_ICONS[type.slug] || Building2;
                return (
                  <Link
                    key={type.slug}
                    href={`/usa/commercial-real-estate/${type.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-[#E8E6E1] px-4 py-3 transition-all hover:border-[#B8956B]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} className="text-[#B8956B]" />
                      <span className="font-medium text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                        {type.label}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Strategies"
          title="When the mandate is not purely core"
          description="If your objective carries an operational or structuring component, these strategies may be a closer fit."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Value-Add", href: "/usa/acquire/value-add" },
            { label: "Opportunistic", href: "/usa/acquire/opportunistic" },
            { label: "Off-Market", href: "/usa/acquire/off-market" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {item.label}
              </span>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Structure a stabilized allocation with Murivest"
        description="If durable income and capital preservation define your mandate, we will source against that profile with institutional discipline."
        primaryLabel="Discuss a Stabilized Mandate"
        secondaryLabel="Explore Capital Structuring"
        secondaryHref="/usa/capital"
      />
    </>
  );
}
