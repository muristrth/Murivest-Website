import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Net Lease Properties — USA CRE Advisory",
  description:
    "Murivest Group's U.S. net lease real estate advisory — investment sales for single-tenant NNN, NN, and N lease properties with investment-grade and sub-investment-grade credit tenants.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/net-lease` },
};

const MARKET_CONTEXT =
  "Single-tenant net-lease (NNN, NN, N) properties continue to attract strong institutional interest due to their predictable income profiles and tenant credit quality. Grocery-anchored retail, convenience stores, quick-service restaurants, and automotive service providers with investment-grade or strong sub-investment-grade credit remain the most sought-after net-lease sectors. Murivest advises on the acquisition and disposition of net-lease properties across the U.S., with rigorous tenant credit analysis and lease structure review.";

const KEY_DRIVERS = [
  "Investor demand for predictable, bond-like income streams",
  "Investment-grade and strong sub-investment-grade credit tenant pools",
  "Grocery-anchored and essential service tenant resilience",
  "Sale-leaseback activity from operators seeking balance sheet optimization",
  "Portfolio aggregation by net-lease investors and 1031 exchange buyers",
];

const ADVISORY_SCOPE = [
  "NNN and NN single-tenant property dispositions",
  "Sale-leaseback advisory for corporate owners",
  "Tenant credit analysis and lease abstraction",
  "Net-lease portfolio transactions",
  "1031 exchange-compatible property identification support",
];

const RELATED_MARKETS = [
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "Florida", href: "/usa/markets/florida" },
  { name: "California", href: "/usa/markets/california" },
  { name: "Georgia", href: "/usa/markets/georgia" },
  { name: "Arizona", href: "/usa/markets/arizona" },
];

export default function NetLeasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Net Lease Properties — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. net lease real estate advisory for single-tenant NNN, NN, and N lease properties.",
    url: `https://${SITE.domain}/usa/properties/net-lease`,
    about: {
      "@type": "Service",
      name: "Net Lease Real Estate Investment Sales Advisory",
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
            src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Commercial retail building"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Net Lease — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Net lease property advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales advisory for single-tenant net-lease (NNN, NN, N)
              properties with investment-grade and sub-investment-grade credit
              tenants across the U.S.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Net Lease Mandate
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
              title="Net lease offers predictable income with credit tenant backing"
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
              Discuss a net lease mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key net lease markets"
          description="Murivest covers net-lease investment sales across markets with strong retail and essential service tenant bases."
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
        title="Engage Murivest for net lease real estate advisory"
        description="Whether acquiring, disposing, or financing net-lease assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

