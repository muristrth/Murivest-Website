import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InteractiveButton from "@/components/InteractiveButton";

// ─── Genesis Design Tokens ─────────────────────────────────────
const STYLE_BLOCK = `
  :root {
    --charcoal: #2C2C2C;
    --ivory: #F8F7F4;
    --brass: #8B7355;
    --grey: #5A5A5A;
    --hairline: #E5E2DC;
    --white: #FFFFFF;
  }
  .m-charcoal { color: var(--charcoal); }
  .m-charcoal-bg { background-color: var(--charcoal); }
  .m-brass { color: var(--brass); }
  .m-brass-bg { background-color: var(--brass); }
  .m-ivory { color: var(--ivory); }
  .m-ivory-bg { background-color: var(--ivory); }
  .m-cream-dark-bg { background-color: #F5F4F0; }
  .m-grey { color: var(--grey); }
  .m-hairline { border-color: var(--hairline); }

  .font-serif {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', Georgia, 'Times New Roman', serif;
  }
  .font-sans {
    font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif;
  }

  .eyebrow {
    font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--brass);
    margin-bottom: 1.25rem;
    display: block;
  }

  .hover-lift {
    transition: box-shadow 0.5s ease, transform 0.5s ease, border-color 0.4s ease;
  }
  .hover-lift:hover {
    box-shadow: 0 20px 56px rgba(44, 44, 44, 0.05);
    transform: translateY(-3px);
    border-color: var(--brass);
  }

  .link-hover {
    transition: color 0.3s ease;
  }
  .link-hover:hover {
    color: var(--brass);
  }

  .footer-link {
    color: rgba(248, 247, 244, 0.55);
    transition: color 0.3s ease;
    text-decoration: none;
    font-size: 0.78rem;
  }
  .footer-link:hover {
    color: var(--ivory);
  }

  .service-card {
    transition: all 0.4s ease;
  }
  .service-card:hover {
    border-color: var(--brass);
  }

  .metric-number {
    font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
    font-variant-numeric: tabular-nums;
  }
`;

// ─── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Institutional Property Management | Asset Performance & Occupancy | Murivest",
  description:
    "Murivest manages institutional-grade commercial and residential assets for HNWI, family offices and sovereign capital. Occupancy-first asset management across Kenya, UK, Dubai and select global markets.",
  keywords: [
    "institutional property management",
    "luxury asset management Kenya",
    "commercial property management HNWI",
    "property management family office",
    "institutional real estate management",
    "asset performance management",
    "luxury property management Nairobi",
  ],
  robots: "index, follow",
  authors: [{ name: "Murivest" }],
  openGraph: {
    type: "website",
    url: "https://murivest.co.ke/property-management",
    title: "Institutional Property Management | Asset Performance & Occupancy | Murivest",
    description:
      "We do not manage properties. We protect income, engineer occupancy, and compound asset value for institutional capital.",
    siteName: "Murivest",
  },
  twitter: {
    card: "summary_large_image",
    title: "Institutional Property Management | Murivest",
    description:
      "We do not manage properties. We protect income, engineer occupancy, and compound asset value for institutional capital.",
  },
  alternates: { canonical: "https://murivest.co.ke/property-management" },
};

// ─── Helpers ───────────────────────────────────────────────────
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ─── Schema ────────────────────────────────────────────────────
function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Murivest Property Management",
    legalName: "Murivest",
    url: "https://murivest.co.ke/property-management",
    logo: "https://murivest.co.ke/logo.png",
    sameAs: ["https://www.linkedin.com/company/murivest"],
    description:
      "Institutional property and asset management for HNWI, family offices and sovereign capital. Occupancy-first management across premium commercial and residential real estate.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Riverside Drive",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    telephone: "+254-712-345-678",
    email: "management@murivest.co.ke",
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Institutional Property Management",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asset Performance Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Institutional Tenant Acquisition" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "NOI Optimisation" } },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Data ──────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    title: "Occupancy Engineering",
    body: "Most managers react to vacancy. We architect demand before it is needed. Through precision marketing, persuasion architecture, and tenant psychology, your asset does not wait to be found. It commands attention.",
  },
  {
    title: "Income Protection",
    body: "We view every square metre as a revenue unit. Lease structures, rental escalations, covenant enforcement, and expense control are not administrative tasks. They are capital preservation mechanisms.",
  },
  {
    title: "Institutional Discipline",
    body: "We do not manage retail portfolios. We serve HNWI, family offices, and sovereign-adjacent capital. Our reporting, compliance, and communication standards match the institutions you already trust.",
  },
  {
    title: "Legacy Positioning",
    body: "A managed asset is a depreciating liability. A positioned asset is an appreciating institution. We curate every touchpoint—tenant mix, brand presence, physical condition—to compound long-term value.",
  },
];

const SERVICES = [
  {
    title: "Strategic Asset Positioning",
    desc: "Market repositioning, competitive differentiation, and brand architecture designed to attract premium tenants and justify premium rents.",
  },
  {
    title: "Tenant Curation & Acquisition",
    desc: "Not tenant placement. Tenant curation. We identify, persuade, and secure occupants aligned with the asset's income profile and investor mandate.",
  },
  {
    title: "NOI Optimisation",
    desc: "Rental growth engineering, operating expense rationalisation, and capital expenditure planning to maximise net operating income.",
  },
  {
    title: "Lease Architecture",
    desc: "Structuring leases that protect upside, minimise downside, and create contractual income durability. Break options, rent reviews, and covenant design.",
  },
  {
    title: "Asset Intelligence",
    desc: "Monthly performance dashboards, occupancy analytics, market benchmarking, and forward-looking risk assessment for investment committees.",
  },
  {
    title: "Discretion & Compliance",
    desc: "Strict confidentiality protocols, regulatory adherence, and institutional-grade documentation standards across all jurisdictions.",
  },
];

const ASSET_CLASSES = [
  { title: "Prime Commercial", desc: "Grade A offices, mixed-use towers, and corporate headquarters in Nairobi, London, and Dubai." },
  { title: "Luxury Residential", desc: "Penthouse collections, serviced residences, and private villa estates for HNWI tenancy." },
  { title: "Hospitality Assets", desc: "Boutique hotels, serviced apartments, and experiential hospitality with operational real estate fundamentals." },
  { title: "Industrial & Logistics", desc: "Last-mile distribution, cold storage, and trade-counter facilities with institutional tenancy." },
];

const METRICS = [
  { value: "97%", label: "Occupancy Rate", context: "Across managed institutional portfolio" },
  { value: "48hrs", label: "Tenant Response", context: "Maximum turnaround on critical issues" },
  { value: "12%", label: "Rental Uplift", context: "Average annual growth on repositioned assets" },
  { value: "0", label: "Vacancy Tolerance", context: "We do not accept empty space as normal" },
];

const PROCESS = [
  { step: "01", title: "Audit", desc: "Asset condition, income profile, tenant mix, and competitive position. We find the gaps others ignore." },
  { step: "02", title: "Position", desc: "Strategic repositioning, marketing architecture, and tenant targeting aligned with your investment thesis." },
  { step: "03", title: "Fill", desc: "Persuasion-driven tenant acquisition. NEPQ-informed engagement. We do not list. We convert." },
  { step: "04", title: "Optimise", desc: "Continuous NOI improvement, lease engineering, and asset performance monitoring." },
  { step: "05", title: "Report", desc: "Institutional-grade reporting. No vanity metrics. Only capital-relevant intelligence." },
];

// ─── Main Page ─────────────────────────────────────────────────
export default function PropertyManagementPage() {
  return (
    <>
      <SchemaOrg />
      <style>{STYLE_BLOCK}</style>

      <main className="m-ivory-bg">
        {/* ═════════════════════════════════════════════════════════
            1. HERO
        ═════════════════════════════════════════════════════════ */}
        <section className="relative m-charcoal-bg overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/mall.avif"
              alt="Institutional commercial property aerial view Nairobi"
              fill
              priority
              className="object-cover opacity-[0.1]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#2C2C2C]/92" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-48">
            <div className="max-w-[780px]">
              <span className="eyebrow">Institutional Asset Management</span>
              <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.06] text-[#F8F7F4] mb-8 tracking-tight">
                We Do Not Manage<br />
                Properties.<br />
                We <em className="text-[#8B7355] not-italic">Protect Capital.</em>
              </h1>
              <p className="font-sans text-lg leading-[1.7] text-[rgba(248,247,244,0.75)] font-light max-w-[600px] mb-12">
                Most property managers fix leaks. We fix income. 
                Institutional-grade asset management for HNWI, family offices, and serious capital 
                who refuse to accept vacancy as a cost of doing business.
              </p>
              <div className="flex flex-wrap gap-5">
                <InteractiveButton href="/property-management/mandate" variant="primary">
                  Submit a Management Mandate
                </InteractiveButton>
                <InteractiveButton href="/property-management/performance" variant="secondary">
                  View Asset Performance
                </InteractiveButton>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            2. THE PATTERN INTERRUPT
        ═════════════════════════════════════════════════════════ */}
        <section className="m-ivory-bg py-24 md:py-32 border-b m-hairline">
          <div className="max-w-[960px] mx-auto px-8 text-center">
            <span className="eyebrow">The Problem</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#2C2C2C] mb-10 leading-snug">
              Your property manager is costing you more than vacancy ever could.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div className="border-l-2 border-[#8B7355] pl-6">
                <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">
                  They focus on maintenance. We focus on <strong className="text-[#2C2C2C] font-medium">monetisation</strong>. 
                  A well-maintained empty building is still a liability.
                </p>
              </div>
              <div className="border-l-2 border-[#8B7355] pl-6">
                <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">
                  They list and wait. We <strong className="text-[#2C2C2C] font-medium">persuade and convert</strong>. 
                  Marketing without persuasion is just expensive hope.
                </p>
              </div>
              <div className="border-l-2 border-[#8B7355] pl-6">
                <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">
                  They report activity. We report <strong className="text-[#2C2C2C] font-medium">alpha</strong>. 
                  Your investment committee does not care about work orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            3. THE MURIVEST STANDARD
        ═════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24 md:py-32 border-b m-hairline">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow">The Standard</span>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] mb-8 leading-snug">
                  We Manage Assets the Way You Would—If You Had the Time.
                </h2>
                <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light mb-8">
                  Murivest Property Management was built for investors who have already won. 
                  You did not accumulate capital to babysit contractors or chase rent arrears. 
                  You deployed capital to acquire real assets that produce income, appreciate in value, 
                  and compound your legacy.
                </p>
                <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light mb-10">
                  We treat your asset as if it were our own—because in many cases, it is. 
                  Our principals co-invest. Our fees align with performance. 
                  And our reputation depends on your NOI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <InteractiveButton href="/property-management/approach" variant="dark">
                    Explore Our Approach
                  </InteractiveButton>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#E5E2DC]">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.title} className="bg-white p-8 md:p-10">
                    <h3 className="font-serif text-[1.15rem] font-normal text-[#2C2C2C] mb-4">{d.title}</h3>
                    <p className="font-sans text-[0.85rem] leading-[1.7] text-[#5A5A5A] font-light">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            4. SERVICES
        ═════════════════════════════════════════════════════════ */}
        <section className="m-ivory-bg py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Capabilities</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                What We Actually Do
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] max-w-[640px] mx-auto mt-5">
                Every service is engineered around one question: does this protect or grow the investor's capital?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E5E2DC]">
              {SERVICES.map((s) => (
                <div key={s.title} className="service-card bg-white p-10 md:p-12">
                  <h3 className="font-serif text-[1.2rem] font-normal text-[#2C2C2C] mb-4">{s.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            5. THE OCCUPANCY ENGINE
        ═════════════════════════════════════════════════════════ */}
        <section className="m-charcoal-bg text-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="border border-[rgba(248,247,244,0.12)] p-10 md:p-14">
                  <p className="font-serif text-[1.35rem] font-normal text-[#F8F7F4] leading-[1.5] mb-6">
                    "Most property managers understand real estate. 
                    Very few understand <em className="text-[#8B7355] not-italic">people</em>."
                  </p>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[rgba(248,247,244,0.65)] font-light">
                    Our background is not traditional property management. 
                    It is marketing, persuasion, and neuro-emotional conversion. 
                    We know how to make a tenant <em>want</em> your space before they have seen it. 
                    That is not luck. That is engineering.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="eyebrow">The Occupancy Engine</span>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#F8F7F4] mb-8 leading-snug">
                  Vacancy Is a Choice.<br />
                  We Choose Otherwise.
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-8 h-8 border border-[#8B7355] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-serif text-[#8B7355] text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#F8F7F4] mb-2">Persuasion Architecture</h4>
                      <p className="font-sans text-[0.85rem] leading-[1.7] text-[rgba(248,247,244,0.65)] font-light">
                        NEPQ-informed tenant engagement. We do not pitch space. We engineer desire.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-8 h-8 border border-[#8B7355] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-serif text-[#8B7355] text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#F8F7F4] mb-2">Precision Marketing</h4>
                      <p className="font-sans text-[0.85rem] leading-[1.7] text-[rgba(248,247,244,0.65)] font-light">
                        Copywriting that converts. Visual storytelling that commands attention. 
                        Distribution to qualified audiences only.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-8 h-8 border border-[#8B7355] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-serif text-[#8B7355] text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#F8F7F4] mb-2">Tenant Curation</h4>
                      <p className="font-sans text-[0.85rem] leading-[1.7] text-[rgba(248,247,244,0.65)] font-light">
                        We do not fill space. We select occupants who enhance the asset's value, 
                        stability, and income durability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            6. ASSET CLASSES
        ═════════════════════════════════════════════════════════ */}
        <section className="m-ivory-bg py-24 md:py-32 border-b m-hairline">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-14">
              <span className="eyebrow">Asset Coverage</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] mb-5 leading-snug">
                Institutional Assets Only
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] max-w-[640px]">
                We do not manage retail rental stock. We serve assets with institutional DNA— 
                premium locations, serious capital, and investors who measure performance in basis points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E5E2DC]">
              {ASSET_CLASSES.map((a) => (
                <div key={a.title} className="hover-lift bg-white p-10 md:p-12 cursor-pointer">
                  <h3 className="font-serif text-[1.25rem] font-normal text-[#2C2C2C] mb-4">{a.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            7. PERFORMANCE METRICS
        ═════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Performance</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                Numbers That Matter
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] max-w-[560px] mx-auto mt-5">
                We do not report vanity metrics. We report the numbers your investment committee cares about.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {METRICS.map((m) => (
                <div key={m.label} className="border m-hairline p-10 text-center">
                  <p className="metric-number text-[3rem] font-normal text-[#8B7355] leading-none mb-4">{m.value}</p>
                  <h3 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#2C2C2C] mb-2">{m.label}</h3>
                  <p className="font-sans text-[0.8rem] text-[#5A5A5A] font-light">{m.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            8. THE PROCESS
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-24 md:py-32 border-y m-hairline">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Our Process</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                From Handover to Outperformance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {PROCESS.map((p, idx) => (
                <div key={p.step} className="relative">
                  {idx < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-[#E5E2DC] z-0" />
                  )}
                  <div className="relative z-10">
                    <p className="font-serif text-[2.5rem] font-normal text-[#8B7355] leading-none mb-5">{p.step}</p>
                    <h3 className="font-serif text-[1.1rem] font-normal text-[#2C2C2C] mb-3">{p.title}</h3>
                    <p className="font-sans text-[0.85rem] leading-[1.7] text-[#5A5A5A] font-light">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            9. INSTITUTIONAL NARRATIVE
        ═════════════════════════════════════════════════════════ */}
        <section className="m-ivory-bg py-24 md:py-32">
          <div className="max-w-[800px] mx-auto px-8 text-center">
            <span className="eyebrow">Philosophy</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#2C2C2C] mb-10 leading-snug">
              Your asset is not a building. It is a capital allocation decision 
              that happens to be housed in steel and glass.
            </h2>
            <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light">
              We manage it accordingly. Every lease negotiation is a financing decision. 
              Every tenant selection is a risk assessment. Every maintenance call is a capital preservation event. 
              And every month of full occupancy is proof that the asset is performing exactly as underwritten.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            10. CTA
        ═════════════════════════════════════════════════════════ */}
        <section className="m-charcoal-bg text-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow">Engagement</span>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#F8F7F4] mb-8 leading-snug">
                  We Do Not Compete on Price.<br />
                  We Compete on Performance.
                </h2>
                <p className="font-sans text-base leading-[1.7] text-[rgba(248,247,244,0.7)] font-light mb-10">
                  If you are looking for the cheapest property manager in Nairobi, we are not that. 
                  If you are looking for the manager who will extract the maximum income, 
                  protect the maximum value, and report with institutional precision—submit your mandate.
                </p>
                <div className="flex flex-wrap gap-5">
                  <InteractiveButton href="/property-management/mandate" variant="primary">
                    Submit a Management Mandate
                  </InteractiveButton>
                  <InteractiveButton href="/contact" variant="secondary">
                    Speak with an Asset Director
                  </InteractiveButton>
                </div>
              </div>
              <div className="border border-[rgba(248,247,244,0.1)] p-10 md:p-14">
                <p className="font-serif text-[1.15rem] font-normal text-[#F8F7F4] leading-[1.6] mb-6">
                  "The question is not whether you can afford institutional management. 
                  The question is whether you can afford <em className="text-[#8B7355] not-italic">not</em> to have it."
                </p>
                <p className="font-sans text-[0.8rem] tracking-[0.15em] uppercase text-[rgba(248,247,244,0.5)]">
                  — Murivest Asset Management Principle
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}