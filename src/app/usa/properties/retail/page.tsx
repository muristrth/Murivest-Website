import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Retail Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. retail real estate advisory — investment sales and leasing for neighborhood centers, power centers, street retail, and single-tenant net-lease properties.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/retail` },
};

const MARKET_CONTEXT =
  "U.S. retail continues to bifurcate between well-located, necessity-based assets and underperforming formats. Grocery-anchored neighborhood centers, power centers with essential retailers, and single-tenant net-lease properties with durable credit tenants remain in strong institutional demand. Street retail in dense urban corridors and experiential retail formats are recovering as consumer behavior normalizes post-pandemic. Murivest advises on retail acquisitions, dispositions, and leasing across these distinct sub-sectors.";

const KEY_DRIVERS = [
  "Grocery-anchored and necessity-based center resilience",
  "Single-tenant net-lease market depth and investor appetite",
  "Street retail recovery in dense urban and suburban corridors",
  "Experiential and service-oriented retail growth",
  "Repositioning of underperforming enclosed mall assets",
];

const ADVISORY_SCOPE = [
  "Neighborhood center acquisitions and dispositions",
  "Power center and strip center investment sales",
  "Street retail leasing and disposition advisory",
  "Single-tenant net-lease (NNN, NN, N) transaction advisory",
  "Retail portfolio sales for institutional owners",
];

const RELATED_MARKETS = [
  { name: "Florida", href: "/usa/markets/florida" },
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "California", href: "/usa/markets/california" },
  { name: "Georgia", href: "/usa/markets/georgia" },
  { name: "Nevada", href: "/usa/markets/nevada" },
];

export default function RetailPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Retail Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. retail real estate advisory for neighborhood centers, power centers, street retail, and single-tenant net-lease properties.",
    url: `https://${SITE.domain}/usa/properties/retail`,
    about: {
      "@type": "Service",
      name: "Retail Investment Sales Advisory",
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
            src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Retail shopping center"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Retail — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Retail real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales and leasing advisory for neighborhood centers,
              power centers, street retail, and single-tenant net-lease
              properties across the U.S.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Retail Mandate
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
              title="Retail is bifurcating between necessity and discretionary"
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
              Discuss a retail mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key retail markets"
          description="Murivest covers retail investment sales and leasing across population growth and tourism-driven markets."
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
        title="Engage Murivest for retail real estate advisory"
        description="Whether acquiring, disposing, financing, or leasing retail assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

