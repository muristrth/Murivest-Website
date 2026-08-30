import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  FlaskConical,
  Factory,
  Building2,
  Home,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "North Carolina Commercial Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's North Carolina commercial real estate advisory — investment sales and leasing across Charlotte and Raleigh-Durham for life sciences, industrial, office, and multifamily markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/markets/north-carolina` },
};

const MARKET_CONTEXT =
  "North Carolina's Research Triangle and Charlotte metro have emerged as leading Southeast markets for life sciences, technology, and financial services. The state's business-friendly environment, skilled workforce, and lower cost structure relative to gateway markets attract corporate headquarters and R&D investment. Murivest advises on North Carolina CRE with focus on Charlotte's financial services corridor, Raleigh-Durham's innovation cluster, and the state's growing industrial and logistics footprint.";

const KEY_DRIVERS = [
  "Research Triangle life sciences and technology innovation cluster",
  "Charlotte financial services and banking headquarters concentration",
  "Business-friendly regulatory and tax environment",
  "Industrial and logistics growth in Piedmont Triad and I-85 corridor",
  "Population and job growth supporting multifamily and retail demand",
];

const RELATED_PROPERTIES = [
  { label: "Life Sciences", href: "/usa/properties/life-sciences" },
  { label: "Industrial", href: "/usa/properties/industrial" },
  { label: "Office", href: "/usa/properties/office" },
  { label: "Multifamily", href: "/usa/properties/multifamily" },
];

export default function NorthCarolinaMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "North Carolina Commercial Real Estate — Murivest Group",
    description:
      "Murivest's North Carolina commercial real estate advisory for Charlotte and Raleigh-Durham markets.",
    url: `https://${SITE.domain}/usa/markets/north-carolina`,
    about: {
      "@type": "City",
      name: "North Carolina",
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
            src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="North Carolina cityscape"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              North Carolina — USA Markets
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              North Carolina commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory across Charlotte and
              Raleigh-Durham — covering life sciences, industrial, office, and
              multifamily markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a North Carolina Mandate
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
              title="North Carolina is a life sciences and financial services hub"
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
              Property types we cover in North Carolina
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
              Discuss North Carolina opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for North Carolina commercial real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing North Carolina commercial real estate, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

