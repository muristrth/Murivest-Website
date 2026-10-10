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

const HERO_IMAGE =
  "https://images.pexels.com/photos/12589487/pexels-photo-12589487.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const metadata: Metadata = {
  title: "U.S. Commercial Real Estate Advisory | Murivest Group",
  description:
    "Independent, mandate-led commercial real estate advisory across selected U.S. markets. Acquisition, disposition, leasing, capital markets and market intelligence for principals, family offices and institutional investors.",
  alternates: { canonical: `https://${SITE.domain}/usa` },
  openGraph: {
    type: "website",
    title: "U.S. Commercial Real Estate Advisory | Murivest Group",
    description:
      "Independent, mandate-led advisory for U.S. commercial real estate acquisitions, dispositions, leasing, capital requirements and market intelligence.",
    url: `https://${SITE.domain}/usa`,
    images: [{ url: HERO_IMAGE, alt: "Commercial real estate in a U.S. city" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "U.S. Commercial Real Estate Advisory | Murivest Group",
    description:
      "Independent, mandate-led advisory for U.S. commercial real estate acquisitions, dispositions, leasing, capital requirements and market intelligence.",
    images: [HERO_IMAGE],
  },
};

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
      "Disposition and acquisition advisory for commercial assets, scoped to a confidential, mandate-defined engagement.",
  },
  {
    icon: Handshake,
    title: "Leasing Advisory",
    description:
      "Tenant and landlord representation across office, industrial, and retail assets, with support for pricing and term negotiations.",
  },
  {
    icon: TrendingUp,
    title: "Capital Markets Advisory",
    description:
      "Debt and equity capital advisory for acquisitions, refinancings, and development projects, subject to mandate scope and counterparties.",
  },
  {
    icon: LineChart,
    title: "Market Intelligence",
    description:
      "Market and sector analysis to inform assignment-specific underwriting; published research is linked when available.",
  },
];

    const PROCESS_STEPS = [
      {
        number: "01",
        title: "Mandate Engagement",
        description:
          "We begin with a consultation to understand your investment objectives, portfolio strategy, and the outcome you seek — whether acquiring, disposing, financing, or leasing.",
      },
      {
        number: "02",
        title: "Strategy & Underwriting",
        description:
          "Market analysis, asset-level underwriting, and positioning are scoped to the assignment and available evidence.",
      },
      {
        number: "03",
        title: "Targeted Marketing",
        description:
          "Where included in the mandate, outreach is directed to relevant investors, tenants, or capital sources, with confidentiality requirements agreed in advance.",
      },
      {
        number: "04",
        title: "Execution & Closing",
        description:
          "For transaction mandates, Murivest can coordinate the agreed process from letter of intent through due diligence and closing.",
      },
    ];

    const WHO_WE_SERVE = [
      {
        icon: Users,
        title: "Institutional Investors",
        description:
          "Pension funds, endowments, insurance companies, and registered investment advisors evaluating acquisition, disposition, or portfolio strategy support.",
      },
      {
        icon: Building2,
        title: "Private Capital & Family Offices",
        description:
          "Private investors and family offices evaluating direct commercial real estate investments and advisory support.",
      },
      {
        icon: Factory,
        title: "Operating Partners & Sponsors",
        description:
          "Developers and operating partners evaluating capital, disposition, or leasing requirements for their projects.",
      },
    ];

    const BUYER_JOURNEYS = [
      {
        icon: Search,
        title: "Acquire",
        description: "Evaluate an acquisition mandate and define the investment brief.",
        label: "Explore acquisition advisory",
        href: "/usa/advisory/acquisition",
      },
      {
        icon: Building2,
        title: "Sell",
        description: "Discuss asset positioning, buyer strategy, and a disposition mandate.",
        label: "Discuss a disposition mandate",
        href: "/usa/advisory/disposition",
      },
      {
        icon: Handshake,
        title: "Lease",
        description: "Share tenant or landlord requirements for a leasing discussion.",
        label: "Discuss leasing requirements",
        href: "/usa/contact?inquiry=leasing",
      },
      {
        icon: TrendingUp,
        title: "Capital",
        description: "Consider debt, equity, capital introduction, or recapitalization needs.",
        label: "Discuss capital requirements",
        href: "/usa/capital",
      },
      {
        icon: LineChart,
        title: "Research",
        description: "Review available U.S. market research and the analytical approach.",
        label: "Explore U.S. market intelligence",
        href: "/usa/research",
      },
    ];
export default async function USAPage() {
  const [{ data: propertyData }, { data: insightData }] = await Promise.all([
    supabase.from("property_listings").select("*").limit(3),
    supabase
      .from("insight_articles")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(3),
  ]);
  const featuredProperties = (propertyData ?? []) as PropertyListing[];
  const recentInsights = (insightData ?? []) as InsightArticle[];

  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
      {
        "@type": "Organization",
        "@id": `https://${SITE.domain}/#organization`,
        name: SITE.name,
        url: `https://${SITE.domain}/`,
        description: SITE.description,
        areaServed: "United States",
        knowsAbout: PROPERTY_TYPES.map((p) => p.label),
      },
      {
        "@type": "WebSite",
        "@id": `https://${SITE.domain}/#website`,
        name: SITE.name,
        url: `https://${SITE.domain}/`,
        publisher: { "@id": `https://${SITE.domain}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${SITE.domain}/` },
          { "@type": "ListItem", position: 2, name: "United States", item: `https://${SITE.domain}/usa` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#0B3D2E]">
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
            <h1 className="mt-8 font-serif text-[2.6rem] md:text-[3.6rem] lg:text-[4.4rem] text-[#F8F7F4] leading-[1.02]">
              Institutional Commercial Real Estate Advisory in the United States
            </h1>
            <div className="w-16 h-[1px] bg-[#F8F7F4]/20 mt-8 mb-8" />
            <p className="max-w-xl text-[15px] md:text-[17px] leading-[1.7] text-[#F8F7F4]/65 font-light">
              Independent, mandate-led advisory for principals, family offices,
              institutional investors, and operating partners evaluating U.S.
              commercial real estate acquisitions, dispositions, leasing, and
              capital requirements.
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
              Advisory across selected U.S. commercial real estate assignments
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
                Murivest Group provides commercial real estate advisory for
                principals, private capital, and institutional investors
                evaluating U.S. property opportunities and transactions.
              </p>
              <p>
                We act as an intermediary — advising on the acquisition,
                disposition, financing, and leasing of commercial properties on
                behalf of investors and principals. Engagement scope,
                representation, and compensation are set out for each mandate.
                Work can include acquisition, disposition, financing, leasing,
                underwriting, and market analysis, as agreed with the client.
              </p>
              <p>
                The engagement documents define Murivest's role and identify
                relevant compensation and conflicts for the specific
                engagement. We do not describe an engagement as fiduciary
                unless the applicable agreement and law establish that duty.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B7355]">
              <ShieldCheck size={16} />
              <span>Mandate-defined. Transparent. Client-specific.</span>
            </div>
          </div>
          <div className="lg:col-span-5 grid gap-px border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2">
            {[
              { stat: "Mandate", label: "Engagement scope defined in writing" },
              { stat: "Underwriting", label: "Asset and market analysis by assignment" },
              { stat: "Research", label: "Published when verified material is available" },
              { stat: "Disclosure", label: "Role and relevant conflicts addressed per engagement" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8">
                <div className="font-serif text-2xl md:text-3xl text-[#2C2C2C]">
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
          description="Acquisition, disposition, financing, and leasing support is scoped to each client's objectives and agreed mandate."
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
      <Section className="py-24 lg:py-36 bg-[#0B3D2E]">
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
            <div key={item.title} className="bg-[#0B3D2E] p-8 lg:p-10">
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
