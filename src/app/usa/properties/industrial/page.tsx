import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Industrial Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. industrial real estate advisory — investment sales and leasing for manufacturing facilities, warehouse-distribution, and flex-industrial assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/industrial` },
};

const MARKET_CONTEXT =
  "U.S. industrial real estate continues to benefit from supply chain reconfiguration, nearshoring trends, and the structural growth of e-commerce fulfillment. While some markets have experienced new supply additions, well-located assets in established logistics corridors with modern specifications and adequate truck courts remain in high demand. Murivest advises on manufacturing facilities, warehouse-distribution buildings, and flex-industrial properties across primary and secondary U.S. industrial markets.";

const KEY_DRIVERS = [
  "Supply chain reconfiguration and nearshoring of manufacturing",
  "Manufacturing reshoring incentives and domestic production growth",
  "E-commerce fulfillment and last-mile distribution demand",
  "Flex-industrial and hybrid warehouse-manufacturing product",
  "Power and infrastructure availability as site selection criteria",
];

const ADVISORY_SCOPE = [
  "Warehouse-distribution dispositions and acquisitions",
  "Manufacturing facility investment sales",
  "Flex-industrial and R&D facility advisory",
  "Industrial leasing for landlords and tenants",
  "Portfolio transactions across multiple industrial markets",
];

const RELATED_MARKETS = [
  { name: "California", href: "/usa/markets/california" },
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "Nevada", href: "/usa/markets/nevada" },
  { name: "Arizona", href: "/usa/markets/arizona" },
  { name: "Georgia", href: "/usa/markets/georgia" },
];

export default function IndustrialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industrial Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. industrial real estate advisory for manufacturing, warehouse-distribution, and flex-industrial assets.",
    url: `https://${SITE.domain}/usa/properties/industrial`,
    about: {
      "@type": "Service",
      name: "Industrial Investment Sales Advisory",
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
            src="https://images.pexels.com/photos/236060/pexels-photo-236060.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial warehouse building"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Industrial — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Industrial real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory for manufacturing facilities,
              warehouse-distribution buildings, and flex-industrial assets in
              established logistics corridors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss an Industrial Mandate
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
              title="Industrial demand driven by structural supply chain shifts"
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
              Discuss an industrial mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key industrial markets"
          description="Murivest covers industrial investment sales across major U.S. logistics and manufacturing corridors."
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
        title="Engage Murivest for industrial real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing industrial assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

