import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Warehouse,
  Home,
  Store,
  Hotel,
  HeartPulse,
  WarehouseIcon,
  Server,
  FlaskConical,
  FileText,
  MapPin,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Properties — USA Commercial Real Estate Property Types",
  description:
    "Murivest Group's U.S. commercial real estate property type coverage: multifamily, industrial, office, retail, hospitality, healthcare, self-storage, data centers, life sciences, and net lease.",
  alternates: { canonical: `https://${SITE.domain}/usa/properties` },
};

const PROPERTY_CATEGORIES = [
  {
    slug: "office",
    label: "Office",
    description:
      "CBD towers, suburban campuses, and medical office assets across primary and secondary U.S. markets.",
    icon: Building2,
    href: "/usa/properties/office",
  },
  {
    slug: "industrial",
    label: "Industrial",
    description:
      "Manufacturing facilities, warehouse-distribution buildings, and flex-industrial assets in established logistics corridors.",
    icon: Factory,
    href: "/usa/properties/industrial",
  },
  {
    slug: "multifamily",
    label: "Multifamily",
    description:
      "Garden-style, mid-rise, and high-rise rental communities in supply-constrained and growth U.S. metros.",
    icon: Home,
    href: "/usa/properties/multifamily",
  },
  {
    slug: "retail",
    label: "Retail",
    description:
      "Neighborhood centers, power centers, street retail, and single-tenant net-lease properties across the U.S.",
    icon: Store,
    href: "/usa/properties/retail",
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    description:
      "Full-service hotels, limited-service properties, resorts, and extended-stay assets in top U.S. travel and business destinations.",
    icon: Hotel,
    href: "/usa/properties/hospitality",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    description:
      "Medical office buildings, hospitals, senior housing, and outpatient facilities serving aging demographics and healthcare utilization growth.",
    icon: HeartPulse,
    href: "/usa/properties/healthcare",
  },
  {
    slug: "self-storage",
    label: "Self-Storage",
    description:
      "Climate-controlled and drive-up self-storage facilities in dense urban and suburban markets with persistent demand drivers.",
    icon: WarehouseIcon,
    href: "/usa/properties/self-storage",
  },
  {
    slug: "data-centers",
    label: "Data Centers",
    description:
      "Hyperscale, colocation, and edge data center facilities in primary U.S. data center markets with power and connectivity advantages.",
    icon: Server,
    href: "/usa/properties/data-centers",
  },
  {
    slug: "life-sciences",
    label: "Life Sciences",
    description:
      "R&D laboratories, biotech campuses, and specialized lab space in innovation clusters and life sciences gateway markets.",
    icon: FlaskConical,
    href: "/usa/properties/life-sciences",
  },
  {
    slug: "net-lease",
    label: "Net Lease",
    description:
      "Single-tenant net-lease (NNN, NN, N) properties with investment-grade and sub-investment-grade credit tenants across the U.S.",
    icon: FileText,
    href: "/usa/properties/net-lease",
  },
];

export default function PropertiesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "USA Commercial Real Estate Property Types — Murivest Group",
    description: "Murivest's U.S. commercial real estate property type coverage.",
    url: `https://${SITE.domain}/usa/properties`,
    about: PROPERTY_CATEGORIES.map((p) => ({
      "@type": "Thing",
      name: p.label,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2C2C2C] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="U.S. commercial real estate portfolio"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C] via-[#2C2C2C]/85 to-[#2C2C2C]/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-[#8B7355]">Property Types</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              Sector-specific expertise across U.S. commercial real estate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white text-pretty">
              Each property type demands distinct market knowledge, underwriting
              frameworks, and counterparty relationships. Murivest maintains
              dedicated coverage across all major U.S. CRE sectors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/commercial-real-estate"
                className="group flex items-center justify-center gap-2 rounded-lg bg-[#8B7355] px-6 py-3 text-sm font-semibold text-[#2C2C2C] transition-all hover:bg-[#8B7355]"
              >
                View All Sectors
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/contact"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#8B7355] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-[#2D5A45]"
              >
                Request a Mandate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property types grid */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Our Coverage"
          title="Ten property type specializations"
          description="From core office and industrial to specialized sectors like data centers and life sciences, Murivest's sector teams bring institutional-grade advisory to every engagement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group flex flex-col rounded-xl border border-[#E5E2DC] bg-white p-6 transition-all hover:border-[#8B7355] hover:shadow-lg hover:shadow-[#2C2C2C]/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2C2C2C] text-[#8B7355] transition-colors group-hover:bg-[#8B7355]">
                  <cat.icon size={22} />
                </div>
                <ArrowRight
                  size={18}
                  className="text-[#F8F7F4] transition-all group-hover:translate-x-1 group-hover:text-[#8B7355]"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors">
                {cat.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why property specialization matters */}
      <Section className="py-20 bg-[#F8F7F4]">
        <SectionHeading
          eyebrow="Why Specialization Matters"
          title="Sector-specific underwriting and counterparty relationships"
          description="No two property types share identical market dynamics, buyer pools, or underwriting frameworks. Murivest's dedicated sector coverage ensures your mandate is executed with the right expertise."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Distinct Market Dynamics",
              description:
                "Office, industrial, and multifamily markets respond differently to interest rates, employment growth, and demographic shifts. Our sector teams track the relevant indicators for each asset class.",
            },
            {
              icon: Users,
              title: "Specialized Counterparty Pools",
              description:
                "Healthcare real estate buyers differ from data center investors, who differ from hospitality lenders. Murivest maintains relationships across each sector's specific capital and tenant pools.",
            },
            {
              icon: ShieldCheck,
              title: "Asset-Level Underwriting",
              description:
                "From tenant credit analysis in net-lease to power infrastructure due diligence in data centers, our underwriting is calibrated to the risk profile of each property type.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#E5E2DC] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2C2C2C] text-[#8B7355]">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Engage Murivest on any U.S. commercial real estate sector"
        description="Whether you are acquiring, disposing, financing, or leasing, our sector teams are ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        secondaryLabel="Explore Sectors"
        secondaryHref="/usa/commercial-real-estate"
      />
    </>
  );
}
