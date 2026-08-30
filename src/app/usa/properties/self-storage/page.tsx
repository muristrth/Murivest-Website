import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  WarehouseIcon,
  TrendingUp,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../../components/Section";
import CTABanner from "../../components/CTABanner";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Self-Storage Real Estate — USA CRE Advisory",
  description:
    "Murivest Group's U.S. self-storage real estate advisory — investment sales for climate-controlled and drive-up facilities in dense urban and suburban markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties/self-storage` },
};

const MARKET_CONTEXT =
  "U.S. self-storage has emerged as a resilient commercial real estate sector, supported by lifecycle transitions — moving, downsizing, student enrollment, and business storage demand. Climate-controlled and drive-up facilities in dense urban and suburban markets have demonstrated strong occupancy and rent growth through multiple economic cycles. Murivest advises on the acquisition and disposition of self-storage assets across the U.S., with attention to market penetration, operating metrics, and supply constraints.";

const KEY_DRIVERS = [
  "Lifecycle demand drivers: moving, downsizing, student enrollment",
  "Business storage growth from e-commerce and small business",
  "Climate-controlled facility premium in dense markets",
  "Resilience through economic cycles relative to other CRE sectors",
  "Limited new supply in supply-constrained urban markets",
];

const ADVISORY_SCOPE = [
  "Self-storage facility dispositions and acquisitions",
  "Portfolio transactions across multiple markets",
  "Market feasibility and competitive analysis support",
  "Capital markets advisory for self-storage financing",
  "Self-storage REIT and private investor representation",
];

const RELATED_MARKETS = [
  { name: "California", href: "/usa/markets/california" },
  { name: "Texas", href: "/usa/markets/texas" },
  { name: "Florida", href: "/usa/markets/florida" },
  { name: "New York", href: "/usa/markets/new-york" },
  { name: "Colorado", href: "/usa/markets/colorado" },
];

export default function SelfStoragePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Self-Storage Real Estate — USA CRE Advisory — Murivest Group",
    description:
      "Murivest's U.S. self-storage real estate advisory for climate-controlled and drive-up facilities.",
    url: `https://${SITE.domain}/usa/properties/self-storage`,
    about: {
      "@type": "Service",
      name: "Self-Storage Real Estate Investment Sales Advisory",
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
            src="https://images.pexels.com/photos/111887/pexels-photo-111887.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Self-storage facility"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              Self-Storage — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Self-storage real estate advisory for institutional investors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Investment sales advisory for climate-controlled and drive-up
              self-storage facilities in dense urban and suburban markets with
              persistent demand drivers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/usa/contact"
                className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Discuss a Self-Storage Mandate
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
              title="Self-storage demonstrates resilient, non-cyclical demand"
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
              Discuss a self-storage mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related markets */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Markets"
          title="Key self-storage markets"
          description="Murivest covers self-storage investment sales across high-density and growth markets."
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
        title="Engage Murivest for self-storage real estate advisory"
        description="Whether acquiring, disposing, or financing self-storage assets, our team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="View All Properties"
        secondaryHref="/usa/properties"
      />
    </>
  );
}

