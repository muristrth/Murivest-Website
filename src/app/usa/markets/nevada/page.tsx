import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Hotel,
  Server,
  Factory,
  Building2,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Nevada Commercial Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's Nevada commercial real estate advisory — investment sales and leasing across Las Vegas and Reno for hospitality, gaming, logistics, and data center markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/markets/nevada` },
};

const MARKET_CONTEXT =
  "Nevada's commercial real estate market is defined by Las Vegas's hospitality and entertainment economy and Reno's growing technology, logistics, and data center sectors. Las Vegas remains a global tourism destination, while Reno has emerged as a hub for data center development, advanced manufacturing, and technology companies attracted by Nevada's business-friendly environment and power infrastructure. Murivest advises on Nevada CRE with attention to tourism cycles, power availability, and the state's evolving economic diversification.";

const KEY_DRIVERS = [
  "Las Vegas tourism, entertainment, and hospitality demand recovery",
  "Reno data center and technology sector growth",
  "Power availability and low-cost energy attracting data centers",
  "Advanced manufacturing and logistics investment",
  "Business-friendly tax environment and regulatory framework",
];

const RELATED_PROPERTIES = [
  { label: "Hospitality", href: "/usa/properties/hospitality" },
  { label: "Data Centers", href: "/usa/properties/data-centers" },
  { label: "Industrial", href: "/usa/properties/industrial" },
  { label: "Retail", href: "/usa/properties/retail" },
];

export default function NevadaMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nevada Commercial Real Estate — Murivest Group",
    description:
      "Murivest's Nevada commercial real estate advisory for Las Vegas and Reno markets.",
    url: `https://${SITE.domain}/usa/markets/nevada`,
    about: {
      "@type": "City",
      name: "Nevada",
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
            src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Nevada desert and city"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Nevada — USA Markets</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Nevada commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory across Las Vegas and Reno —
              covering hospitality, gaming, logistics, and data center markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Nevada Mandate
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
              title="Nevada combines tourism with emerging technology and data center growth"
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
              Property types we cover in Nevada
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
              Discuss Nevada opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for Nevada commercial real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing Nevada commercial real estate, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

