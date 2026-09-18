import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Factory,
  Warehouse,
  Home,
  Store,
  Server,
  Search,
  TrendingUp,
  Handshake,
  ShieldCheck,
  LineChart,
  FileText,
  Users,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "./components/Section";
import CTABanner from "./components/CTABanner";
import { SITE, PROPERTY_TYPES } from "./lib/site";
import { supabase } from "./lib/supabase";
import type { PropertyListing, InsightArticle } from "./lib/types";
import PropertyCard from "./components/PropertyCard";

export const metadata: Metadata = {
  title: "USA Commercial Real Estate Advisory — Murivest Group",
  description:
    "Murivest Group is an independent commercial real estate advisory firm representing institutional investors and private capital across U.S. office, industrial, logistics, multifamily, retail, and data center markets. Investment sales, leasing, and capital markets advisory.",
  alternates: { canonical: `https://${SITE.domain}/usa` },
  openGraph: {
    title: "USA Commercial Real Estate Advisory — Murivest Group",
    description:
      "Independent commercial real estate advisory for institutional investors across U.S. office, industrial, logistics, multifamily, retail, and data center markets.",
    url: `https://${SITE.domain}/usa`,
  },
};

const HERO_IMAGE =
  "https://images.pexels.com/photos/12589487/pexels-photo-12589487.jpeg?auto=compress&cs=tinysrgb&w=1920";

const SECTOR_ICONS: Record<string, typeof Building2> = {
  office: Building2,
  industrial: Factory,
  logistics: Warehouse,
  multifamily: Home,
  retail: Store,
  "data-centers": Server,
};

const SERVICES = [
  {
    icon: Search,
    title: "Investment Sales Advisory",
    description:
      "Disposition and acquisition advisory for institutional-grade commercial assets, executed on a confidential, mandate-driven basis.",
  },
  {
    icon: Handshake,
    title: "Leasing Advisory",
    description:
      "Tenant and landlord representation across office, industrial, and retail assets, with market-driven pricing and term negotiation.",
  },
  {
    icon: TrendingUp,
    title: "Capital Markets Advisory",
    description:
      "Debt and equity capital sourcing for acquisitions, refinancings, and development projects, connecting sponsors with qualified capital providers.",
  },
  {
    icon: LineChart,
    title: "Market Intelligence",
    description:
      "Proprietary research on U.S. CRE market conditions, cap rate trends, and sector dynamics, published for our clients and the broader market.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Mandate Engagement",
    description:
      "We begin with a confidential consultation to understand your investment objectives, portfolio strategy, and the specific outcome you seek — whether acquiring, disposing, financing, or leasing.",
  },
  {
    number: "02",
    title: "Strategy & Underwriting",
    description:
      "Our team conducts detailed market analysis, asset-level underwriting, and positioning strategy to align with current capital markets conditions and buyer/tenant pools.",
  },
  {
    number: "03",
    title: "Targeted Marketing",
    description:
      "We execute a disciplined outreach to pre-qualified investors, tenants, or capital sources — maintaining confidentiality and competitive tension throughout the process.",
  },
  {
    number: "04",
    title: "Execution & Closing",
    description:
      "From letter of intent through due diligence and closing, Murivest manages the transaction process to protect your interests and maximize outcomes.",
  },
];

const WHO_WE_SERVE = [
  {
    icon: Users,
    title: "Institutional Investors",
    description:
      "Pension funds, endowments, insurance companies, and registered investment advisors seeking acquisition, disposition, and portfolio rebalancing support.",
  },
  {
    icon: Building2,
    title: "Private Capital & Family Offices",
    description:
      "High-net-worth investors and family offices pursuing direct commercial real estate investments with institutional-quality underwriting.",
  },
  {
    icon: Factory,
    title: "Operating Partners & Sponsors",
    description:
      "Developers and operating partners seeking capital partners, disposition advisory, or leasing strategy for their projects.",
  },
];

export default async function USAHomePage() {
  const [{ data: properties }, { data: insights }] = await Promise.all([
    supabase
      .from("usa_properties")
      .select("*")
      .eq("is_listed", true)
      .order("published_at", { ascending: false })
      .limit(3),
    supabase
      .from("usa_insights")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(3),
  ]);

  const featuredProperties = (properties || []) as PropertyListing[];
  const recentInsights = (insights || []) as InsightArticle[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: `https://${SITE.domain}/usa`,
    description: SITE.description,
    areaServed: "US",
    knowsAbout: PROPERTY_TYPES.map((p) => p.label),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#2C2C2C]">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="U.S. city skyline with commercial real estate towers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/70 to-[#2C2C2C]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32 pt-40">
          <div className="max-w-3xl">
            <Eyebrow>USA Commercial Real Estate Platform</Eyebrow>
            <h1 className="mt-8 font-serif text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] text-[#F8F7F4] leading-[1.02]">
              Institutional advisory for U.S. <span className="italic font-light text-[#8B7355]">commercial real estate</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#F8F7F4]/20 mt-8 mb-8" />
            <p className="max-w-xl text-[15px] md:text-[17px] leading-[1.7] text-[#F8F7F4]/65 font-light">
              Murivest Group is an independent advisory firm representing
              institutional investors, private capital, and principals across
              U.S. office, industrial, logistics, multifamily, retail, and data
              center markets — from acquisition through disposition.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/usa/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F8F7F4] text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500"
              >
                Request a Mandate
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/investment-sales"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F8F7F4]/25 text-[#F8F7F4]/85 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
              >
                Explore Investment Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#F8F7F4] text-[#2C2C2C] border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 lg:py-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
            <span className="text-[13px] font-medium text-[#5A5A5A]">
              Serving clients across U.S. commercial real estate markets
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">
              <span>Office</span>
              <span className="text-[#E5E2DC]">/</span>
              <span>Industrial</span>
              <span className="text-[#E5E2DC]">/</span>
              <span>Logistics</span>
              <span className="text-[#E5E2DC]">/</span>
              <span>Multifamily</span>
              <span className="text-[#E5E2DC]">/</span>
              <span>Retail</span>
              <span className="text-[#E5E2DC]">/</span>
              <span>Data Centers</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Murivest */}
      <Section className="py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 lg:items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Why Murivest</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#2C2C2C]">
              An independent intermediary built for institutional-quality execution
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              <p>
                Murivest Group was founded to address a gap in the U.S.
                commercial real estate market: institutional-quality advisory
                delivered with the focus and alignment that only an independent
                firm can provide.
              </p>
              <p>
                We act as an intermediary — advising on the acquisition,
                disposition, financing, and leasing of commercial properties on
                behalf of investors and principals. Every engagement begins
                with a clearly defined mandate and is executed with the
                underwriting discipline and market intelligence that
                institutional capital expects.
              </p>
              <p>
                We do not manage proprietary funds or carry inventory. Our
                role is to represent your interests — whether you are acquiring,
                selling, financing, or leasing — with transparency and without
                conflict.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B7355]">
              <ShieldCheck size={16} />
              <span>Independent. Conflict-free. Mandate-driven.</span>
            </div>
          </div>
          <div className="lg:col-span-5 grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2">
            {[
              { stat: "6", label: "Property type specializations" },
              { stat: "40+", label: "U.S. metro markets covered" },
              { stat: "100%", label: "Mandate-based engagements" },
              { stat: "0", label: "Proprietary fund conflicts" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <div className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">
                  {item.stat}
                </div>
                <div className="mt-2 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-24 lg:py-36 bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <SectionHeading
          eyebrow="What We Do"
          title="Advisory services across the commercial real estate lifecycle"
          description="From acquisition through disposition, financing, and leasing, Murivest provides the advisory, execution, and intelligence that institutional capital requires."
        />
        <div className="mt-16 grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white hover:bg-[#F8F7F4] transition-colors duration-500 p-8 lg:p-10"
            >
              <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B7355]/40 text-[#8B7355] mb-6 group-hover:border-[#8B7355] transition-colors duration-500">
                <service.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Property types */}
      <Section className="py-24 lg:py-36 border-t border-[#E5E2DC]">
        <SectionHeading
          eyebrow="Property Types"
          title="Sector-specific expertise across U.S. commercial real estate"
          description="Each property type demands distinct market knowledge, underwriting frameworks, and counterparty relationships. Murivest maintains dedicated coverage across all major U.S. CRE sectors."
        />
        <div className="mt-16 grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((type) => {
            const Icon = SECTOR_ICONS[type.slug] || Building2;
            return (
              <Link
                key={type.slug}
                href={`/usa/commercial-real-estate/${type.slug}`}
                className="group flex flex-col bg-white hover:bg-[#F8F7F4] transition-colors duration-500 p-8 lg:p-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B7355]/40 text-[#8B7355] group-hover:border-[#8B7355] transition-colors duration-500">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#8B7355] transition-all group-hover:translate-x-1"
                  />
                </div>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {type.label}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">
                  {type.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {type.transactionTypes.map((tt) => (
                    <span
                      key={tt}
                      className="border border-[#E5E2DC] px-3 py-1 text-[10px] tracking-[0.1em] uppercase font-medium text-[#5A5A5A]"
                    >
                      {tt === "sale" ? "For Sale" : "For Lease"}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Who we serve */}
      <Section className="py-24 lg:py-36 bg-[#2C2C2C]">
        <div className="max-w-3xl">
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#F8F7F4]">
            Built for investors who expect institutional-quality execution
          </h2>
          <p className="mt-4 text-[14px] leading-[1.8] text-[#F8F7F4]/65 font-light">
            Murivest serves a focused client base across the institutional and
            private capital spectrum.
          </p>
        </div>
        <div className="mt-16 grid gap-px border border-[#F8F7F4]/10 bg-[#F8F7F4]/10 md:grid-cols-3">
          {WHO_WE_SERVE.map((item) => (
            <div key={item.title} className="bg-[#2C2C2C] p-8 lg:p-10">
              <item.icon size={22} strokeWidth={1.5} className="text-[#8B7355]" />
              <h3 className="mt-6 font-serif text-lg text-[#F8F7F4]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-[#F8F7F4]/60 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-24 lg:py-36">
        <SectionHeading
          eyebrow="How Mandates Work"
          title="A disciplined, transparent engagement model"
          description="Every Murivest engagement follows a structured process designed to protect client interests and maximize outcomes — from initial consultation through closing."
        />
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="border-t border-[#E5E2DC] pt-8">
              <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                {step.number}
              </p>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured properties */}
      {featuredProperties.length > 0 && (
        <Section className="py-24 lg:py-36 bg-white border-t border-[#E5E2DC]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Current Opportunities"
              title="Selected mandate offerings"
              description="A sample of active engagements. Additional opportunities are available to qualified investors on a confidential basis."
            />
            <Link
              href="/usa/commercial-real-estate"
              className="group hidden shrink-0 items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-300 sm:flex"
            >
              <span>View all property types</span>
              <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
          <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </Section>
      )}

      {/* Insights preview */}
      {recentInsights.length > 0 && (
        <Section className="py-24 lg:py-36 border-t border-[#E5E2DC]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Market Intelligence"
              title="Murivest Research"
              description="Proprietary analysis of U.S. commercial real estate market conditions, cap rate trends, and sector dynamics."
            />
            <Link
              href="/usa/insights"
              className="group hidden shrink-0 items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-300 sm:flex"
            >
              <span>All insights</span>
              <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
          <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
            {recentInsights.map((article) => (
              <Link
                key={article.id}
                href={`/usa/insights#${article.slug}`}
                className="group flex flex-col border border-[#E5E2DC] hover:border-[#8B7355]/40 transition-colors duration-300 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                    {article.category.replace(/_/g, " ")}
                  </span>
                  {article.sector && (
                    <>
                      <span className="w-3 h-[1px] bg-[#E5E2DC]" />
                      <span className="text-[11px] text-[#5A5A5A]/70">{article.sector}</span>
                    </>
                  )}
                </div>
                <h3 className="font-serif text-[19px] leading-[1.35] text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="flex-1 text-[13px] leading-[1.65] text-[#5A5A5A] font-light mb-5">
                  {article.summary}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#5A5A5A]/70">
                  <FileText size={13} />
                  <span>
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner
        title="Engage Murivest on your next commercial real estate mandate"
        description="Whether you are acquiring, disposing, financing, or leasing, our team is ready to advise. Start with a confidential consultation."
        primaryLabel="Request a Mandate"
        secondaryLabel="View Investment Sales"
        secondaryHref="/usa/investment-sales"
      />
    </>
  );
}
