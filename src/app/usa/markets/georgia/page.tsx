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
  title: "Georgia Commercial Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's Georgia commercial real estate advisory — investment sales and leasing across Atlanta and secondary markets for industrial, office, multifamily, and retail.",
  alternates: { canonical: `https://${SITE.domain}/usa/markets/georgia` },
};

const MARKET_CONTEXT =
  "Georgia, and Atlanta in particular, has emerged as one of the Southeast's most compelling commercial real estate markets. The city's logistics infrastructure — anchored by Hartsfield-Jackson International Airport and a dense highway network — has driven industrial and distribution demand. Corporate headquarters concentration, film industry growth, and expanding life sciences and technology sectors support office and multifamily fundamentals. Murivest advises on Georgia CRE with focus on Atlanta's submarkets and secondary markets including Savannah, Augusta, and Athens.";

const KEY_DRIVERS = [
  "Hartsfield-Jackson air cargo and logistics corridor dominance",
  "Corporate headquarters and business services concentration",
  "Film and television production industry growth",
  "Life sciences and technology sector expansion",
  "Population growth fueling multifamily and retail demand",
];

const RELATED_PROPERTIES = [
  { label: "Industrial", href: "/usa/properties/industrial" },
  { label: "Office", href: "/usa/properties/office" },
  { label: "Multifamily", href: "/usa/properties/multifamily" },
  { label: "Retail", href: "/usa/properties/retail" },
];

export default function GeorgiaMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Georgia Commercial Real Estate — Murivest Group",
    description:
      "Murivest's Georgia commercial real estate advisory for Atlanta and secondary markets.",
    url: `https://${SITE.domain}/usa/markets/georgia`,
    about: {
      "@type": "City",
      name: "Georgia",
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
            src="https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Atlanta cityscape"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Georgia — USA Markets</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Georgia commercial real estate advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory across Atlanta and secondary
              markets — covering industrial, office, multifamily, and retail
              sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Georgia Mandate
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
              title="Atlanta is a logistics and corporate headquarters hub"
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
              Property types we cover in Georgia
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
              Discuss Georgia opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest for Georgia commercial real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing Georgia commercial real estate, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}

