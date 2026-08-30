import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, EyeOff, Handshake, Search, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Off-Market Acquisitions — U.S. Commercial Real Estate",
  description:
    "Discreet, relationship-led off-market acquisition advisory for institutional and private capital seeking U.S. commercial real estate that is never broadly marketed.",
  alternates: { canonical: `https://${SITE.domain}/usa/acquire/off-market` },
  openGraph: {
    title: "Off-Market Acquisitions — U.S. Commercial Real Estate",
    description:
      "Relationship-led off-market acquisition advisory for U.S. commercial real estate investors.",
    url: `https://${SITE.domain}/usa/acquire/off-market`,
  },
};

const APPROACH = [
  {
    icon: EyeOff,
    title: "Confidential by Design",
    description:
      "Off-market means no auction, no wide marketing, and no information leakage. We engage owners directly, under terms of confidentiality that protect both parties.",
  },
  {
    icon: Handshake,
    title: "Principal-Level Relationships",
    description:
      "Our sourcing originates from standing relationships with owners, operators, lenders, and brokers — the relationships that surface a deal before it is packaged.",
  },
  {
    icon: Search,
    title: "Targeted Origination",
    description:
      "We build a precise target list against your mandate — by sector, geography, ownership type, and basis — rather than waiting for the market to come to us.",
  },
  {
    icon: ShieldCheck,
    title: "Exclusive Buy-Side Representation",
    description:
      "We represent the buyer only. There is no competing sell-side book and no conflict — your interests are the mandate.",
  },
];

export default function OffMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Off-Market Acquisition Advisory",
    serviceType: "Off-market buy-side advisory",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: `https://${SITE.domain}/usa`,
    },
    areaServed: "US",
    description:
      "Discreet, relationship-led sourcing and acquisition of off-market U.S. commercial real estate for institutional and private capital.",
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
              Acquire · Off-Market
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Off-market acquisitions for capital that competes on relationships, not auctions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              The most compelling entries are rarely listed. Murivest sources
              off-market U.S. commercial real estate through principal-level
              relationships and targeted origination — delivering discreet,
              pre-competitive access to owners who prefer a quiet, negotiated
              process.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Request Off-Market Access
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
          eyebrow="Our Approach"
          title="How we surface what is not for sale — yet"
          description="Off-market acquisition is a discipline of relationships and discretion, not a database. We earn access through trust and protect it through process."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((item) => (
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
            <Eyebrow>Why Off-Market</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              Pre-competitive basis, negotiated terms, protected confidentiality
            </h2>
            <p className="mt-6 space-y-4 text-lg leading-relaxed text-[#8B8680]">
              <span className="block">
                A broadly marketed process invites the full field of capital,
                compresses negotiation leverage, and commoditizes the asset.
                Off-market acquisition inverts that dynamic: fewer parties,
                deeper diligence, and terms shaped around a known counterparty.
              </span>
              <span className="block">
                For institutional and private capital, the advantage is not just
                price — it is certainty of execution and the ability to underwrite
                without the distortion of a competitive auction environment.
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
            <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
              What we require to begin
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#8B8680]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                A defined mandate: target sectors, geographies, and hold period.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                A return profile and basis tolerance we can underwrite against.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Indication of capital structure — equity, debt, or a need for introduction.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                Confidentiality expectations for counterparty engagement.
              </li>
            </ul>
            <Link
              href="/usa/capital"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B8956B] transition-colors hover:text-[#C9A87C]"
            >
              Pair with capital advisory
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading
          eyebrow="Adjacent Strategies"
          title="Off-market is one point on the risk spectrum"
          description="Depending on your mandate, the same relationship network supports stabilized, value-add, opportunistic, and distressed acquisition."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Stabilized Assets", href: "/usa/acquire/stabilized" },
            { label: "Value-Add", href: "/usa/acquire/value-add" },
            { label: "Opportunistic", href: "/usa/acquire/opportunistic" },
            { label: "Distressed", href: "/usa/acquire/distressed" },
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
        title="Gain discreet access to off-market U.S. commercial real estate"
        description="Define your mandate and we will originate against it — quietly, and on your behalf alone."
        primaryLabel="Request Off-Market Access"
        secondaryLabel="View All Acquisition Strategies"
        secondaryHref="/usa/acquire"
      />
    </>
  );
}
