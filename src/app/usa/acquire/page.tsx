import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Handshake,
  ShieldCheck,
  LineChart,
  Building2,
  Factory,
  Warehouse,
  Home,
  Store,
  Server,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE, PROPERTY_TYPES } from "../lib/site";

export const metadata: Metadata = {
  title: "Acquire — U.S. Commercial Real Estate Acquisition Advisory",
  description:
    "Murivest's buy-side acquisition advisory for institutional investors, family offices, and private equity deploying capital into U.S. commercial real estate — mandate-driven, relationship-sourced, and underwriting-disciplined.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire` },
  openGraph: {
    title: "Acquire — U.S. Commercial Real Estate Acquisition Advisory",
    description:
      "Buy-side acquisition advisory for institutional and private capital deploying into U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/acquire`,
  },
};

const STRATEGIES = [
  {
    title: "Off-Market Acquisitions",
    description:
      "Discreet, relationship-led sourcing of assets that never reach the public market — where the most compelling entries are negotiated, not auctioned.",
    href: "/usa/acquire/off-market",
  },
  {
    title: "Stabilized Assets",
    description:
      "Income-producing, covenant-backed assets for core and core-plus mandates where durability of cash flow is the governing constraint.",
    href: "/usa/acquire/stabilized",
  },
  {
    title: "Value-Add",
    description:
      "Assets with a defined operational or physical improvement thesis — lease-up, repositioning, or capital-expenditure driven basis recovery.",
    href: "/usa/acquire/value-add",
  },
  {
    title: "Opportunistic",
    description:
      "Complex, time-sensitive, or structurally mispriced situations requiring conviction, structuring capability, and execution speed.",
    href: "/usa/acquire/opportunistic",
  },
  {
    title: "Distressed",
    description:
      "Non-performing loans, workouts, and recapitalizations of challenged assets — approached with diligence and creditor-level discipline.",
    href: "/usa/acquire/distressed",
  },
];

const SOURCING = [
  {
    icon: Handshake,
    title: "Relationship-Driven Sourcing",
    description:
      "We originate through a standing network of owners, operators, lenders, and brokers — surfacing opportunities before they are broadly marketed.",
  },
  {
    icon: LineChart,
    title: "Underwriting Discipline",
    description:
      "Every target is tested against a rigorous, assumption-transparent model. We underwrite the downside first, then the basis, then the upside.",
  },
  {
    icon: ShieldCheck,
    title: "Mandate Alignment",
    description:
      "We represent the buyer exclusively. There is no proprietary inventory and no conflict with a sell-side book — only your investment objectives.",
  },
  {
    icon: Target,
    title: "Outcome-First Structuring",
    description:
      "From entity structure to closing mechanics, we engineer the transaction around the return profile you are mandated to deliver.",
  },
];

const SECTOR_ICONS: Record<string, typeof Building2> = {
  office: Building2,
  industrial: Factory,
  logistics: Warehouse,
  multifamily: Home,
  retail: Store,
  "data-centers": Server,
};

export default function AcquirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "U.S. Commercial Real Estate Acquisition Advisory",
    serviceType: "Buy-side acquisition advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Mandate-driven acquisition advisory for institutional investors and private capital deploying into U.S. commercial real estate across office, industrial, logistics, multifamily, retail, and data center sectors.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Acquisition strategies",
      itemListElement: STRATEGIES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
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
              Acquire · The Concierge of Capital
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Acquisition advisory for institutional and private capital deploying into U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest acts as your exclusive buy-side advisor — sourcing
              opportunities through relationships rather than listings,
              underwriting each target with institutional discipline, and
              structuring the transaction around the return profile you are
              mandated to deliver.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Outline an Acquisition Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/capital"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Pair with Capital Advisory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Acquisition Strategies"
          title="One mandate, mapped to the right risk posture"
          description="Capital seeking U.S. commercial real estate deploys across a spectrum of risk and return. We organize acquisition mandates around the strategy that fits your objectives — and we execute each with the same sourcing intensity and underwriting rigor."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STRATEGIES.map((strategy) => (
            <Link
              key={strategy.href}
              href={strategy.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {strategy.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8B8680]">
                {strategy.description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors group-hover:text-[#C9A87C]">
                Explore strategy
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#FAF9F6]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>The Murivest Method</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Sourced through relationships. Underwritten with discipline.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              The best acquisitions are rarely the ones everyone can see. Our
              edge is a sourcing network built over years of principal-level
              relationships, combined with an underwriting culture that protects
              capital before it chases return. We do not present opportunities
              we would not underwrite ourselves.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {SOURCING.map((item) => (
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
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Sector Coverage"
          title="Across the full U.S. commercial real estate landscape"
          description="We acquire across every major U.S. CRE sector. Each carries distinct supply dynamics, tenant credit profiles, and capital requirements — and each is underwritten on its own merits."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((type) => {
            const Icon = SECTOR_ICONS[type.slug] || Building2;
            return (
              <Link
                key={type.slug}
                href={`/usa/commercial-real-estate/${type.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <Icon size={20} className="text-[#B8956B]" />
                  <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                    {type.label}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
                />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="py-20 bg-[#0F2E22]">
        <div className="max-w-3xl">
          <Eyebrow className="text-gold-400">Who We Acquire For</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Built for buyers who cannot afford to compromise on basis or process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C9A87C]">
            We represent institutions, family offices, and private equity
            sponsors whose mandates demand discretion, speed, and analytical
            conviction — not a generic deal feed.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Institutional Investors",
              description:
                "Pension funds, endowments, and insurance allocators seeking core-through-opportunistic exposure with institutional-grade reporting and process.",
            },
            {
              title: "Family Offices & UHNW",
              description:
                "Direct investors pursuing concentrated, conviction-led positions with the underwriting support of an independent advisor.",
            },
            {
              title: "Private Equity & Operating Partners",
              description:
                "Sponsors who need a sourcing and underwriting extension of their own team across multiple live mandates simultaneously.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#C9A87C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Related Mandates"
          title="Acquisition does not exist in isolation"
          description="Most acquisition mandates connect to capital structure and, eventually, disposition. We maintain aligned advisory across the full lifecycle."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/usa/capital"
            className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-md"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                Capital Advisory
              </h3>
              <p className="mt-1 text-sm text-[#8B8680]">
                Equity and debt to fund the acquisition you are underwriting.
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
            />
          </Link>
          <Link
            href="/usa/sell"
            className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-md"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                Sell & Disposition
              </h3>
              <p className="mt-1 text-sm text-[#8B8680]">
                The exit discipline that frames how we underwrite the entry.
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
            />
          </Link>
        </div>
      </Section>

      <CTABanner
        title="Define your acquisition mandate"
        description="Tell us the return profile, sector, and geography you are mandated to deploy into. We will return a focused, underwritten pipeline — not a generic list."
        primaryLabel="Outline an Acquisition Mandate"
        secondaryLabel="Explore Acquisition Strategies"
        secondaryHref="/usa/acquire/off-market"
      />
    </>
  );
}
