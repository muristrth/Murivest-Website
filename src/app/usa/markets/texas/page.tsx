import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Factory,
  Building2,
  Home,
  Store,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Texas Commercial Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's Texas commercial real estate advisory — investment sales and leasing across Dallas, Houston, Austin, and San Antonio industrial, office, multifamily, and energy markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/markets/texas` },
};

const MARKET_CONTEXT =
  "Texas is one of the most dynamic U.S. commercial real estate markets, driven by population growth, corporate relocations, energy industry evolution, and manufacturing expansion. Dallas-Fort Worth leads in industrial absorption and office leasing, while Houston's energy corridor remains a global energy real estate hub. Austin's technology and life sciences growth continues to fuel multifamily and office demand. San Antonio offers military, healthcare, and logistics stability. Murivest advises across all major Texas metros with institutional-grade underwriting and local market intelligence.";

const KEY_DRIVERS = [
  "Corporate relocations and Fortune 500 headquarters concentration",
  "Energy transition and LNG export infrastructure investment",
  "Semiconductor manufacturing and advanced manufacturing growth",
  "Population and job growth fueling multifamily demand",
  "Industrial and logistics corridor expansion across DFW and Houston",
];

const RELATED_PROPERTIES = [
  { label: "Industrial", href: "/usa/properties/industrial" },
  { label: "Office", href: "/usa/properties/office" },
  { label: "Multifamily", href: "/usa/properties/multifamily" },
  { label: "Retail", href: "/usa/properties/retail" },
];

export default function TexasMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Texas Commercial Real Estate — Murivest Group",
    description:
      "Murivest's Texas commercial real estate advisory for Dallas, Houston, Austin, and San Antonio markets.",
    url: `https://${SITE.domain}/usa/markets/texas`,
    about: {
      "@type": "City",
      name: "Texas",
      containedInPlace: { "@type": "Country", name: "United States" },
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
            src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Texas city skyline"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Texas — USA Markets</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Texas commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory across Dallas, Houston,
              Austin, and San Antonio — covering industrial, office, multifamily,
              and energy-corridor markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Texas Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/markets"
                className="flex items-center justify-center rounded-lg border border-[#C9A87C] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                All Markets
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
              title="Texas combines growth, diversification, and scale"
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
              Property types we cover in Texas
            </h3>
            <ul className="mt-4 space-y-3">
              {RELATED_PROPERTIES.map((pt) => (
                <li
                  key={pt.label}
                  className="flex items-start gap-2.5 text-sm text-[#C9A87C]"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAF9F6]0" />
                  <Link
                    href={pt.href}
                    className="text-[#C9A87C] hover:text-[#B8956B] transition-colors"
                  >
                    {pt.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/usa/contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#B8956B] hover:text-[#C9A87C] transition-colors"
            >
              Discuss Texas opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for Texas commercial real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing Texas commercial real estate, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

