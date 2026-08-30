import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Building2,
  Factory,
  Home,
  Store,
  Hotel,
  HeartPulse,
  WarehouseIcon,
  Server,
  FlaskConical,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Markets — USA Commercial Real Estate Market Coverage",
  description:
    "Murivest Group's U.S. commercial real estate market coverage — investment sales advisory across major U.S. metro markets including Texas, Florida, California, New York, Georgia, and more.",
  alternates: { canonical: `https://${SITE.domain}/usa/markets` },
};

const MARKETS = [
  {
    name: "Texas",
    slug: "texas",
    description:
      "Dallas, Houston, Austin, and San Antonio — diverse industrial, office, multifamily, and energy-corridor markets.",
    icon: Building2,
  },
  {
    name: "Florida",
    slug: "florida",
    description:
      "Miami, Tampa, Orlando, and Jacksonville — population growth, tourism, and logistics hubs.",
    icon: Hotel,
  },
  {
    name: "California",
    slug: "california",
    description:
      "Los Angeles, San Francisco, San Diego, and the Inland Empire — innovation, logistics, and life sciences markets.",
    icon: Server,
  },
  {
    name: "New York",
    slug: "new-york",
    description:
      "New York City, Long Island, and Westchester — gateway office, multifamily, retail, and life sciences markets.",
    icon: Building2,
  },
  {
    name: "Georgia",
    slug: "georgia",
    description:
      "Atlanta and secondary Georgia markets — industrial, office, multifamily, and film industry growth.",
    icon: Factory,
  },
  {
    name: "Arizona",
    slug: "arizona",
    description:
      "Phoenix and Tucson — industrial, multifamily, and retail markets driven by Sun Belt migration.",
    icon: Home,
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    description:
      "Charlotte, Raleigh-Durham, and the Research Triangle — finance, life sciences, and industrial markets.",
    icon: FlaskConical,
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    description:
      "Charleston, Columbia, and Greenville — automotive manufacturing, port logistics, and population growth.",
    icon: Factory,
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    description:
      "Nashville and Memphis — healthcare, music industry, logistics, and multifamily growth.",
    icon: HeartPulse,
  },
  {
    name: "Nevada",
    slug: "nevada",
    description:
      "Las Vegas and Reno — hospitality, gaming, logistics, and data center markets.",
    icon: Hotel,
  },
  {
    name: "Colorado",
    slug: "colorado",
    description:
      "Denver and Boulder — tech, aerospace, life sciences, and outdoor recreation economies.",
    icon: TrendingUp,
  },
];

export default function MarketsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "USA Commercial Real Estate Markets — Murivest Group",
    description: "Murivest's U.S. commercial real estate market coverage across major metro markets.",
    url: `https://${SITE.domain}/usa/markets`,
    about: MARKETS.map((m) => ({
      "@type": "City",
      name: m.name,
    })),
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
            src="https://images.pexels.com/photos/1388690/pexels-photo-1388690.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="U.S. city skyline"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Markets</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              U.S. commercial real estate market coverage
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white text-pretty">
              Murivest maintains dedicated market intelligence and transaction
              coverage across the U.S.'s most dynamic commercial real estate
              markets — from gateway cities to Sun Belt growth corridors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Request a Market Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/properties"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                View Property Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Markets grid */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Markets"
          title="Eleven state-specific market practices"
          description="Each market demands distinct knowledge of local employment, demographics, zoning, and capital sources. Murivest's market teams bring institutional-grade intelligence to every engagement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((market) => (
            <Link
              key={market.slug}
              href={`/usa/markets/${market.slug}`}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400 transition-colors group-hover:bg-[#B8956B]">
                  <market.icon size={22} />
                </div>
                <ArrowRight
                  size={18}
                  className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {market.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {market.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why market specialization */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Market Intelligence"
          title="Local knowledge, institutional execution"
          description="CRE is fundamentally a local business. Murivest's market teams combine local presence with institutional discipline."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Economic Fundamentals",
              description:
                "Employment growth, wage trends, population migration, and industry composition drive CRE demand. Our market teams track these indicators for each covered metro.",
            },
            {
              icon: Building2,
              title: "Supply Pipeline & Fundamentals",
              description:
                "Construction pipeline, vacancy rates, rent growth, and absorption inform our underwriting and marketing strategies in each market.",
            },
            {
              icon: ShieldCheck,
              title: "Local Capital & Tenant Pools",
              description:
                "Investor preferences, lender appetite, and tenant credit profiles vary by market. Murivest maintains relationships with local capital sources and decision-makers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E8E6E1] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest in any U.S. commercial real estate market"
        description="Our market teams are ready to advise on your acquisition, disposition, financing, or leasing objectives. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Property Types"
        secondaryHref="/usa/properties"
      />
    </>
  );
}
