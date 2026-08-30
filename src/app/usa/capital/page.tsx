import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Handshake, Scale, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Capital — U.S. Commercial Real Estate Capital Markets",
  description:
    "Murivest's capital markets advisory for U.S. commercial real estate — equity, debt, capital introduction, and recapitalization connecting sponsors with qualified institutional and private capital.",
  alternates: { canonical: `https://${SITE.domain}/usa/capital` },
  openGraph: {
    title: "Capital — U.S. Commercial Real Estate Capital Markets",
    description:
      "Equity, debt, capital introduction, and recapitalization advisory for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/capital`,
  },
};

const SERVICES = [
  {
    title: "Capital Advisory",
    description:
      "Independent structuring advice on the optimal capital stack — evaluating equity, debt, and hybrid solutions against the asset business plan and sponsor objectives.",
    href: "/usa/capital/capital-advisory",
  },
  {
    title: "Capital Introduction",
    description:
      "Targeted connections between sponsors and a curated universe of qualified equity and debt providers — relationship-led, not a broad blast.",
    href: "/usa/capital/capital-introduction",
  },
  {
    title: "Equity Financing",
    description:
      "Joint-venture and preferred-equity structuring for acquisitions, development, and recapitalizations across the risk spectrum.",
    href: "/usa/capital/equity",
  },
  {
    title: "Debt Financing",
    description:
      "Senior, mezzanine, and structured debt placement matched to the asset, the business plan, and the sponsor's return profile.",
    href: "/usa/capital/debt",
  },
  {
    title: "Recapitalization",
    description:
      "Restructuring the ownership and capital stack to unlock value, manage maturity, or reposition an asset for its next phase.",
    href: "/usa/capital/recapitalization",
  },
];

const PRINCIPLES = [
  {
    icon: Scale,
    title: "Independent Structure Advice",
    description:
      "We advise on the optimal stack without a balance sheet to push. The recommendation is dictated by the asset and your objectives, not our product menu.",
  },
  {
    icon: Handshake,
    title: "Relationship-Led Introduction",
    description:
      "We connect sponsors to capital sources we know — qualified providers matched to the mandate rather than a generic list.",
  },
  {
    icon: Landmark,
    title: "Institutional Diligence Readiness",
    description:
      "Materials, model, and narrative are prepared to the standard institutional capital expects, shortening the path from introduction to close.",
  },
  {
    icon: ShieldCheck,
    title: "Aligned, Conflict-Free",
    description:
      "We do not lend our own capital or carry proprietary positions. Our role is to represent your interests in the capital conversation.",
  },
];

export default function CapitalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "U.S. Commercial Real Estate Capital Markets Advisory",
    serviceType: "Capital markets advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Capital advisory, capital introduction, equity and debt financing, and recapitalization for U.S. commercial real estate sponsors and investors.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Capital services",
      itemListElement: SERVICES.map((s) => ({
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
              Capital · The Concierge of Capital
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Capital markets advisory that connects sponsors with the right capital — on the right terms
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest advises sponsors, owners, and investors on the capital
              underpinning U.S. commercial real estate — structuring the optimal
              stack, introducing qualified equity and debt, and recapitalizing
              assets for their next phase. Independent advice, relationship-led
              sourcing, institutional-grade execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Capital Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/acquire"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Pair with Acquisition
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Capital Services"
          title="One conversation, the full capital stack"
          description="Capital is not a single product. We organize capital mandates around the structure that fits the asset and the sponsor — from pure advisory through introduction, equity, debt, and recapitalization."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8B8680]">
                {service.description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors group-hover:text-[#C9A87C]">
                Explore service
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
        <SectionHeading
          eyebrow="Our Principles"
          title="Capital advice without a balance sheet to push"
          description="Because we do not lend or invest our own capital, our only incentive is the quality of the structure and the fit of the source. That independence is the foundation of the mandate."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((item) => (
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

      <Section className="py-20">
        <SectionHeading
          eyebrow="Who We Capitalize"
          title="Sponsors and investors across the capital spectrum"
          description="We advise both those seeking capital and those deploying it — ensuring the structure serves the underlying real estate strategy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Operating Partners & Sponsors",
              description:
                "Developers and operators seeking JV equity, preferred equity, or debt for acquisitions, development, and recapitalizations.",
            },
            {
              title: "Institutional Investors",
              description:
                "Allocators evaluating co-investment, JV, or direct positions seeking independent structuring and sourcing support.",
            },
            {
              title: "Owners & Family Offices",
              description:
                "Direct holders exploring recapitalization or structured capital to unlock value without a full sale.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-[#0F2E22]">
        <div className="max-w-3xl">
          <Eyebrow className="text-gold-400">Connected Advisory</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Capital is the bridge between acquisition and disposition
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C9A87C]">
            Every capital decision shapes the return on both sides of a
            transaction. We maintain aligned advisory across acquisition and sell
            so the capital structure is built with the full lifecycle in view.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/usa/acquire"
            className="group flex items-center justify-between rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6 transition-all hover:border-gold-400"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Acquisition Advisory
              </h3>
              <p className="mt-1 text-sm text-[#C9A87C]">
                Fund the entry with the right structure.
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-gold-400 transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/usa/sell"
            className="group flex items-center justify-between rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6 transition-all hover:border-gold-400"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Sell & Disposition
              </h3>
              <p className="mt-1 text-sm text-[#C9A87C]">
                Exit on terms the capital structure supports.
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-gold-400 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Section>

      <CTABanner
        title="Structure and source your capital with Murivest"
        description="Tell us the asset, the business plan, and the outcome you need. We will advise on the structure and introduce the right capital."
        primaryLabel="Discuss a Capital Mandate"
        secondaryLabel="Explore Equity Financing"
        secondaryHref="/usa/capital/equity"
      />
    </>
  );
}
