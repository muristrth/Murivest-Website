import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Layers, Handshake, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Sell — U.S. Commercial Real Estate Disposition Advisory",
  description:
    "Murivest's sell-side advisory for U.S. commercial real estate — disposition, portfolio sales, and investment sales executed on a confidential, mandate-driven basis for institutional and private capital.",
  alternates: { canonical: `https://${SITE.domain}/usa/sell` },
  openGraph: {
    title: "Sell — U.S. Commercial Real Estate Disposition Advisory",
    description:
      "Sell-side disposition, portfolio sales, and investment sales advisory for U.S. commercial real estate.",
    url: `https://${SITE.domain}/usa/sell`,
  },
};

const MANDATES = [
  {
    title: "Investment Sales Advisory",
    description:
      "Single-asset sell-side representation for institutional-grade commercial real estate — positioned, marketed, and negotiated to maximize outcome.",
    href: "/usa/sell/investment-sales",
  },
  {
    title: "Portfolio Sales",
    description:
      "Multi-asset dispositions requiring segmentation strategy, coordinated marketing, and a single point of accountability across markets and sectors.",
    href: "/usa/sell/portfolio-sales",
  },
  {
    title: "Disposition Advisory",
    description:
      "Strategic, often off-market exits for owners seeking discretion, speed, or a structured process outside the public auction environment.",
    href: "/usa/sell/disposition",
  },
];

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: "Outcome-First Positioning",
    description:
      "We define the optimal buyer universe and narrative before a single outreach — the asset is positioned for the capital that values it most.",
  },
  {
    icon: Layers,
    title: "Process Control",
    description:
      "A disciplined process maintains competitive tension and confidentiality, protecting both price discovery and counterparty discretion.",
  },
  {
    icon: Handshake,
    title: "Negotiation on Your Behalf",
    description:
      "We represent the seller exclusively through LOI, diligence, and closing — managing the field of interest to your advantage.",
  },
  {
    icon: ShieldCheck,
    title: "Conflict-Free Representation",
    description:
      "We do not hold proprietary inventory or run a competing buy-side book. Our advice is aligned to your disposition objective alone.",
  },
];

export default function SellPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "U.S. Commercial Real Estate Disposition Advisory",
    serviceType: "Sell-side disposition advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Mandate-driven sell-side advisory for U.S. commercial real estate — investment sales, portfolio dispositions, and strategic exits for institutional and private capital.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sell-side mandates",
      itemListElement: MANDATES.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: m.title },
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
              Sell · The Concierge of Capital
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Sell-side advisory for owners who treat disposition as a mandate, not a listing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Murivest represents institutional owners, family offices, and
              private equity in the disposition of U.S. commercial real estate —
              positioning each asset for the capital that values it most, and
              executing a disciplined process that protects both price discovery
              and confidentiality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Engage a Sell-Side Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/commercial-real-estate"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                View Property Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Sell-Side Mandates"
          title="Three ways we represent the seller"
          description="Disposition is not one transaction type. We organize sell-side mandates around the asset profile, the owner's objectives, and the level of discretion required."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MANDATES.map((mandate) => (
            <Link
              key={mandate.href}
              href={mandate.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {mandate.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8B8680]">
                {mandate.description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors group-hover:text-[#C9A87C]">
                Explore mandate
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
          title="Sell-side discipline, applied to every mandate"
          description="Whether a single asset or a portfolio, our execution is governed by the same principles: position for the right capital, control the process, and represent the seller alone."
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
          eyebrow="Who We Sell For"
          title="Owners who need discretion and institutional process"
          description="We serve institutional and private owners whose dispositions require more than a listing — they require a managed, confidential mandate."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Institutional Owners",
              description:
                "Pension funds, insurers, and REITs managing portfolio rebalancing, deleveraging, or exit timing across multiple holdings.",
            },
            {
              title: "Family Offices & Private Capital",
              description:
                "Direct owners seeking a discreet, relationship-led exit without public market exposure or information leakage.",
            },
            {
              title: "Private Equity & Sponsors",
              description:
                "Fund managers executing realized or recapitalized exits on behalf of limited partners on defined timelines.",
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
            The exit informs the entry — and the capital between
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C9A87C]">
            Disposition rarely stands alone. We maintain aligned advisory across
            acquisition and capital so that the sell-side mandate is executed
            with full awareness of where the capital will redeploy.
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
                Redeploy proceeds with the same discipline.
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-gold-400 transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/usa/capital"
            className="group flex items-center justify-between rounded-xl border border-navy-700 bg-[#1B4332]/50 p-6 transition-all hover:border-gold-400"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">
                Capital Advisory
              </h3>
              <p className="mt-1 text-sm text-[#C9A87C]">
                Structure the basis ahead of a sale or recapitalization.
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
        title="Engage Murivest on your disposition"
        description="Define your exit objective and the level of discretion you require. We will return a focused, mandate-driven plan — not a generic listing."
        primaryLabel="Engage a Sell-Side Mandate"
        secondaryLabel="Explore Investment Sales"
        secondaryHref="/usa/sell/investment-sales"
      />
    </>
  );
}
