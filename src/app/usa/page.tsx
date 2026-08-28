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
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="U.S. city skyline with commercial real estate towers"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <Eyebrow className="text-gold-400">USA Commercial Real Estate Platform</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Institutional advisory for U.S. commercial real estate investors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200 text-pretty">
              Murivest Group is an independent advisory firm representing
              institutional investors, private capital, and principals across
              U.S. office, industrial, logistics, multifamily, retail, and data
              center markets — from acquisition through disposition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/usa/contact"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
              >
                Request a Mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/usa/investment-sales"
                className="flex items-center justify-center gap-2 rounded-lg border border-ink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-ink-800"
              >
                Explore Investment Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <Section className="border-b border-ink-100 bg-ink-50 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          <span className="text-sm font-medium text-ink-500">
            Serving clients across U.S. commercial real estate markets
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
            <span>Office</span>
            <span className="text-ink-200">•</span>
            <span>Industrial</span>
            <span className="text-ink-200">•</span>
            <span>Logistics</span>
            <span className="text-ink-200">•</span>
            <span>Multifamily</span>
            <span className="text-ink-200">•</span>
            <span>Retail</span>
            <span className="text-ink-200">•</span>
            <span>Data Centers</span>
          </div>
        </div>
      </Section>

      {/* About / Why Murivest */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Murivest</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              An independent intermediary built for institutional-quality execution
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-500">
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
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-navy-700">
              <ShieldCheck size={18} className="text-gold-500" />
              <span>Independent. Conflict-free. Mandate-driven.</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { stat: "6", label: "Property type specializations" },
              { stat: "40+", label: "U.S. metro markets covered" },
              { stat: "100%", label: "Mandate-based engagements" },
              { stat: "0", label: "Proprietary fund conflicts" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="font-serif text-4xl font-semibold text-navy-700">
                  {item.stat}
                </div>
                <div className="mt-2 text-sm text-ink-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-20 bg-ink-50">
        <SectionHeading
          eyebrow="What We Do"
          title="Advisory services across the commercial real estate lifecycle"
          description="From acquisition through disposition, financing, and leasing, Murivest provides the advisory, execution, and intelligence that institutional capital requires."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-ink-100 bg-white p-6 transition-all hover:border-navy-300 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-navy-700">
                <service.icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Property types */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Property Types"
          title="Sector-specific expertise across U.S. commercial real estate"
          description="Each property type demands distinct market knowledge, underwriting frameworks, and counterparty relationships. Murivest maintains dedicated coverage across all major U.S. CRE sectors."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((type) => {
            const Icon = SECTOR_ICONS[type.slug] || Building2;
            return (
              <Link
                key={type.slug}
                href={`/usa/commercial-real-estate/${type.slug}`}
                className="group flex flex-col rounded-xl border border-ink-100 bg-white p-6 transition-all hover:border-navy-300 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-navy-700">
                    <Icon size={22} />
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-navy-600"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900 group-hover:text-navy-700 transition-colors">
                  {type.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {type.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {type.transactionTypes.map((tt) => (
                    <span
                      key={tt}
                      className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-500"
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
      <Section className="py-20 bg-navy-950">
        <div className="max-w-3xl">
          <Eyebrow className="text-gold-400">Who We Serve</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Built for investors who expect institutional-quality execution
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Murivest serves a focused client base across the institutional and
            private capital spectrum.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHO_WE_SERVE.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy-700 bg-navy-900/50 p-6"
            >
              <item.icon size={28} className="text-gold-400" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="How Mandates Work"
          title="A disciplined, transparent engagement model"
          description="Every Murivest engagement follows a structured process designed to protect client interests and maximize outcomes — from initial consultation through closing."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="font-serif text-5xl font-semibold text-ink-100">
                {step.number}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured properties */}
      {featuredProperties.length > 0 && (
        <Section className="py-20 bg-ink-50">
          <div className="flex items-end justify-between">
            <SectionHeading
              eyebrow="Current Opportunities"
              title="Selected mandate offerings"
              description="A sample of active engagements. Additional opportunities are available to qualified investors on a confidential basis."
            />
            <Link
              href="/usa/commercial-real-estate"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-600 transition-colors sm:flex"
            >
              View all property types
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </Section>
      )}

      {/* Insights preview */}
      {recentInsights.length > 0 && (
        <Section className="py-20">
          <div className="flex items-end justify-between">
            <SectionHeading
              eyebrow="Market Intelligence"
              title="Murivest Research"
              description="Proprietary analysis of U.S. commercial real estate market conditions, cap rate trends, and sector dynamics."
            />
            <Link
              href="/usa/insights"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-600 transition-colors sm:flex"
            >
              All insights
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recentInsights.map((article) => (
              <Link
                key={article.id}
                href={`/usa/insights#${article.slug}`}
                className="group flex flex-col rounded-xl border border-ink-100 bg-white p-6 transition-all hover:border-navy-300 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-navy-50 px-3 py-1 font-medium uppercase tracking-wide text-navy-600">
                    {article.category.replace(/_/g, " ")}
                  </span>
                  {article.sector && (
                    <span className="text-ink-400">{article.sector}</span>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink-900 group-hover:text-navy-700 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {article.summary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                  <FileText size={14} />
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
