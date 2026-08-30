import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Multifamily Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. multifamily real estate advisory — investment sales and leasing for garden-style, mid-rise, and high-rise rental communities in supply-constrained metros.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/multifamily` },
};

const MARKET_CONTEXT =
  "U.S. multifamily housing remains a core institutional asset class, supported by persistent housing affordability challenges, demographic tailwinds from millennial and Gen Z renters, and structural supply shortages across major metros. While rent growth has moderated from peak levels, occupancy and rent collections have remained resilient relative to other CRE sectors. Murivest advises on the acquisition and disposition of garden-style, mid-rise, and high-rise rental communities in supply-constrained and growth-oriented markets.";

const KEY_DRIVERS = [
  "Housing supply shortages relative to household formation in major metros",
  "Demographic tailwinds from millennial and Gen Z renter cohorts",
  "Sun Belt and secondary market rent growth outperformance",
  "Institutional allocation to rental housing as a demographic hedge",
  "Modular construction and build-to-rent product innovation",
];

const ADVISORY_SCOPE = [
  "Garden-style community dispositions and acquisitions",
  "Mid-rise and high-rise multifamily investment sales",
  "Rent roll analysis and cash flow underwriting",
  "Market-specific supply and demand assessment",
  "Portfolio sales and bulk acquisitions for institutional owners",
];

const RELATED_MARKETS = [
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "Florida", href: "/usa/markets/florida" },
  { name: "Georgia", href: "/usa/markets/georgia" },
  { name: "North Carolina", href: "/usa/markets/north-carolina" },
  { name: "Arizona", href: "/usa/markets/arizona" },
];

export default function MultifamilyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Multifamily Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. multifamily real estate advisory for garden-style, mid-rise, and high-rise rental communities.",
    url: `https://${SITE.domain}/usa/properties/multifamily`,
    about: {
      "@type": "Service",
      name: "Multifamily Investment Sales Advisory",
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
            src="https://images.pexels.com/photos/1396127/pexels-photo-1396127.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Multifamily residential building"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Multifamily — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Multifamily real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and acquisition advisory for garden-style,
              mid-rise, and high-rise rental communities in supply-constrained and
              growth U.S. metros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Multifamily Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/properties"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Property Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market context */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Market Context"
              title="Multifamily remains a core institutional allocation"
            />
            <p className="mt-6 text-lg leading-relaxed text-[#8B8680]">
              {MARKET_CONTEXT}
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                Key market drivers
              </h3>
              <ul className="mt-4 space-y-3">
                {KEY_DRIVERS.map((driver) => (
                  <li
                    key={driver}
                    className="flex items-start gap-3 text-base text-[#C9A87C]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8">
            <h3 className="font-serif text-lg font-semibold text-[#2C2C2C]">
              Advisory scope
            </h3>
            <ul className="mt-4 space-y-3">
              {ADVISORY_SCOPE.map((scope) => (
                <li
                  key={scope}
                  className="flex items-start gap-2.5 text-sm text-[#C9A87C]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAF9F6]0" />
                  {scope}
                </li>
              ))}
            </ul>
            <Link
              href="/usa/contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C] transition-colors"
            >
              Discuss a multifamily mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key multifamily markets"
          description="Murivest covers multifamily investment sales across the U.S., with concentrated activity in supply-constrained Sun Belt and gateway markets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_MARKETS.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group flex items-center justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 transition-all hover:border-[#B8956B] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C9A87C]" />
                <span className="font-serif text-lg font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                  {m.name}
                </span>
              </div>
              <ArrowRight
                size={18}
                className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for multifamily advisory"
        description="Whether acquiring, disposing, or financing multifamily assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

