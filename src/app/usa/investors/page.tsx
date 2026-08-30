import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  ShieldCheck,
  Globe,
  Factory,
  Home,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Investors — USA Commercial Real Estate Investor Solutions",
  description:
    "Murivest Group advises institutional investors, family offices, private equity, HNW and UHNW individuals, international capital, and developers on U.S. commercial real estate acquisition, disposition, and financing.",
  alternates: { canonical: `https://${SITE.domain}/usa/investors` },
};

const INVESTOR_TYPES = [
  {
    slug: "institutional",
    label: "Institutional Investors",
    description:
      "Pension funds, endowments, insurance companies, and registered investment advisors seeking acquisition, disposition, and portfolio rebalancing support.",
    icon: Building2,
    href: "/usa/investors/institutional",
  },
  {
    slug: "family-offices",
    label: "Family Offices",
    description:
      "High-net-worth families pursuing direct commercial real estate investments with institutional-quality underwriting and execution.",
    icon: Home,
    href: "/usa/investors/family-offices",
  },
  {
    slug: "private-equity",
    label: "Private Equity",
    description:
      "Private equity real estate funds and direct lending platforms pursuing value-add, core-plus, and opportunistic strategies across U.S. CRE markets.",
    icon: TrendingUp,
    href: "/usa/investors/private-equity",
  },
  {
    slug: "high-net-worth",
    label: "High Net Worth",
    description:
      "High-net-worth individuals and trusts seeking direct commercial real estate ownership, 1031 exchange facilitation, and portfolio-level advisory.",
    icon: Users,
    href: "/usa/investors/high-net-worth",
  },
  {
    slug: "ultra-high-net-worth",
    label: "Ultra High Net Worth",
    description:
      "UHNW individuals and family trusts pursuing large-scale, bespoke commercial real estate transactions with maximum confidentiality and bespoke structuring.",
    icon: ShieldCheck,
    href: "/usa/investors/ultra-high-net-worth",
  },
  {
    slug: "international",
    label: "International Investors",
    description:
      "Foreign institutional and private capital seeking U.S. commercial real estate exposure — from gateway office to Sun Belt industrial and multifamily.",
    icon: Globe,
    href: "/usa/investors/international",
  },
  {
    slug: "developers",
    label: "Developer Investors",
    description:
      "Real estate developers and operating partners seeking capital partners, disposition advisory, or leasing strategy for their projects.",
    icon: Factory,
    href: "/usa/investors/developers",
  },
];

export default function InvestorsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "USA Commercial Real Estate Investor Solutions — Murivest Group",
    description:
      "Murivest's investor-focused U.S. commercial real estate advisory for institutional investors, family offices, private equity, and more.",
    url: `https://${SITE.domain}/usa/investors`,
    about: INVESTOR_TYPES.map((inv) => ({
      "@type": "Thing",
      name: inv.label,
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
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Investment capital and commercial real estate"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">Investor Solutions</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Capital-aligned advisory for every investor profile
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white text-pretty">
              Murivest's investor-centric practice is structured around the
              distinct objectives, underwriting requirements, and execution
              preferences of each capital source — from institutional mandates
              to UHNW bespoke engagements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-[#0F2E22] transition-all hover:bg-[#C9A87C]"
              >
                Request a Consultation
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

      {/* Investor types */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Clients"
          title="Seven investor profiles, one commitment standard"
          description="Regardless of capital source, Murivest applies the same underwriting discipline, confidentiality, and outcome-first thinking to every engagement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INVESTOR_TYPES.map((inv) => (
            <Link
              key={inv.slug}
              href={inv.href}
              className="group flex flex-col rounded-xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1B4332] text-gold-400 transition-colors group-hover:bg-[#B8956B]">
                  <inv.icon size={22} />
                </div>
                <ArrowRight
                  size={18}
                  className="text-[#FAF9F6] transition-all group-hover:translate-x-1 group-hover:text-[#C9A87C]"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
                {inv.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B8680]">
                {inv.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why investor segmentation */}
      <Section className="py-20 bg-[#FAF9F6]">
        <SectionHeading
          eyebrow="Our Approach"
          title="Outcome-first, mandate-driven, capital-aligned"
          description="We do not offer one-size-fits-all advisory. Each investor type requires a distinct engagement model — and Murivest delivers accordingly."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "No Proprietary Fund Conflicts",
              description:
                "Murivest does not manage funds, carry inventory, or receive transaction-based compensation from third parties. Your mandate is executed solely in your interest.",
            },
            {
              icon: TrendingUp,
              title: "Capital-Aligned Underwriting",
              description:
                "We calibrate underwriting, risk assessment, and marketing strategy to your return requirements, hold period, and risk tolerance — not to an internal fund model.",
            },
            {
              icon: Users,
              title: "Relationship-Driven Sourcing",
              description:
                "Our network spans institutional buyers, family offices, private equity sponsors, and international capital — enabling us to match your mandate with the right counterparties.",
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
        title="Engage Murivest as your U.S. commercial real estate advisor"
        description="Whether you represent institutional capital, a family office, or private equity, our team is ready to discuss your mandate."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Markets"
        secondaryHref="/usa/markets"
      />
    </>
  );
}
