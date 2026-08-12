import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InteractiveButton from "@/components/InteractiveButton";

// ─── Colour Tokens (CSS Variables) ─────────────────────────────
const STYLE_BLOCK = `
  :root {
    --forest: #1B4332;
    --forest-light: #2D5A45;
    --brass: #B8956B;
    --brass-light: #C9A97D;
    --cream: #FAF9F6;
    --cream-dark: #F5F4F0;
    --charcoal: #1A1A1A;
    --slate: #4A4A4A;
    --border: rgba(27, 67, 50, 0.12);
    --border-light: rgba(27, 67, 50, 0.06);
  }
  .m-forest { color: var(--forest); }
  .m-forest-bg { background-color: var(--forest); }
  .m-brass { color: var(--brass); }
  .m-brass-bg { background-color: var(--brass); }
  .m-cream { color: var(--cream); }
  .m-cream-bg { background-color: var(--cream); }
  .m-cream-dark-bg { background-color: var(--cream-dark); }
  .m-slate { color: var(--slate); }
  .m-border { border-color: var(--border); }
  .m-border-light { border-color: var(--border-light); }

  .font-serif { font-family: 'Times New Roman', Georgia, serif; }
  .font-sans { font-family: 'Helvetica Neue', Arial, sans-serif; }

  .eyebrow {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--brass);
    margin-bottom: 1rem;
    display: block;
  }

  .hover-lift {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .hover-lift:hover {
    box-shadow: 0 12px 40px rgba(27, 67, 50, 0.08);
    transform: translateY(-4px);
  }

  .market-cell {
    transition: background-color 0.3s ease;
  }
  .market-cell:hover {
    background-color: var(--forest-light);
  }

  .investor-cell {
    transition: background-color 0.3s ease;
  }
  .investor-cell:hover {
    background-color: rgba(250, 249, 246, 0.08);
  }

  .link-hover {
    transition: color 0.3s ease;
  }
  .link-hover:hover {
    color: var(--brass);
  }

  .footer-link {
    color: rgba(250, 249, 246, 0.6);
    transition: color 0.3s ease;
    text-decoration: none;
    font-size: 0.8rem;
  }
  .footer-link:hover {
    color: var(--cream);
  }

  .leadership-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .leadership-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(27, 67, 50, 0.08);
  }
`;

// ─── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UK Commercial Real Estate Investment & Capital Markets | Murivest",
  description:
    "Murivest provides commercial real estate investment, acquisition and capital markets advisory for private and institutional investors across the United Kingdom.",
  keywords: [
    "UK commercial real estate investment",
    "commercial property acquisition UK",
    "institutional real estate advisory UK",
    "capital markets UK real estate",
    "family office property investment UK",
    "off market commercial property UK",
  ],
  robots: "index, follow",
  authors: [{ name: "Murivest" }],
  openGraph: {
    type: "website",
    url: "https://murivest.co.uk",
    title: "UK Commercial Real Estate Investment & Capital Markets | Murivest",
    description:
      "Institutional-grade advisory for investors acquiring, repositioning and disposing of income-producing commercial real estate across the United Kingdom.",
    siteName: "Murivest",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Commercial Real Estate Investment & Capital Markets | Murivest",
    description:
      "Institutional-grade advisory for investors acquiring, repositioning and disposing of income-producing commercial real estate across the United Kingdom.",
  },
  alternates: { canonical: "https://murivest.co.uk" },
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
    name: "Murivest UK",
    legalName: "Murivest",
    url: "https://murivest.co.uk",
    logo: "https://murivest.co.uk/logo.png",
    sameAs: ["https://www.linkedin.com/company/murivest"],
    description:
      "Institutional commercial real estate advisory and capital markets firm directing strategic capital acquisition across the United Kingdom.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Royal Exchange Avenue",
      addressLocality: "London",
      postalCode: "EC3V 3DG",
      addressCountry: "GB",
    },
    telephone: "+44-7864-855742",
    email: "uk@murivest.co.uk",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Real Estate Advisory",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acquisition Advisory" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Capital Markets" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portfolio Strategy" } },
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

function SchemaWebPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UK Commercial Real Estate Investment & Capital Markets Advisory | Murivest",
    description:
      "Murivest provides institutional investors, private equity funds, and family offices with bespoke acquisition, disposition, and asset management advisory across the United Kingdom.",
    url: "https://murivest.co.uk",
    isPartOf: { "@type": "WebSite", name: "Murivest", url: "https://murivest.co.uk" },
    about: { "@type": "ProfessionalService", name: "Murivest" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://murivest.co.uk" }],
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
const INVEST_PILLARS = [
  {
    title: "Acquisition Advisory",
    body: "We advise investors evaluating the acquisition of income-producing commercial property and portfolios across the United Kingdom. Our acquisition process considers investment rationale, location fundamentals, occupational demand, rental evidence, tenant covenant, lease structure, income security, capital expenditure, financing considerations and exit liquidity.",
    cta: "Explore Acquisition Advisory",
    href: "/invest/acquisition-advisory",
  },
  {
    title: "Commercial Property Investment",
    body: "Access selected UK commercial real estate opportunities across established and emerging investment markets. Our focus includes income-producing assets with identifiable investment fundamentals and opportunities where active asset management, repositioning or strategic capital deployment may enhance value.",
    cta: "View Investment Opportunities",
    href: "/invest/opportunities",
  },
  {
    title: "Off-Market Opportunities",
    body: "Murivest works with property owners, investors and professional intermediaries to identify selected commercial real estate opportunities that may not be broadly marketed. Off-market does not mean undiscovered risk. Every opportunity remains subject to appropriate investment analysis and due diligence.",
    cta: "Discuss an Acquisition Mandate",
    href: "/invest/off-market",
  },
  {
    title: "Portfolio & Strategic Advisory",
    body: "For investors with existing UK real estate exposure, Murivest provides strategic analysis across individual assets and portfolios. We assess portfolio composition, income concentration, asset performance, capital requirements, disposal considerations and potential opportunities for value enhancement.",
    cta: "Explore Portfolio Advisory",
    href: "/invest/portfolio-advisory",
  },
];

const SECTORS = [
  { title: "Offices", desc: "Prime, core and value-add office investments across established UK markets.", tag: "Yield Focus" },
  { title: "Industrial & Logistics", desc: "Warehousing, distribution, trade counter and industrial investment opportunities aligned with occupational and infrastructure fundamentals.", tag: "Growth Sector" },
  { title: "Retail", desc: "High street, retail warehouse and other income-producing retail assets.", tag: "Selective Value" },
  { title: "Hotels & Hospitality", desc: "Hotels and hospitality assets where operating performance, location and underlying real estate value intersect.", tag: "Operational" },
  { title: "Healthcare", desc: "Healthcare and specialist operational real estate supported by sustainable occupational demand.", tag: "Defensive" },
  { title: "Life Sciences", desc: "Specialised laboratory and R&D accommodation. Cambridge-Oxford-London golden triangle exposure.", tag: "Emerging" },
  { title: "Student Accommodation", desc: "Purpose-built student housing with institutional-grade income characteristics and demographic tailwinds.", tag: "Living Sector" },
  { title: "Alternative Real Estate", desc: "Data centres, living sectors and other specialist real estate supported by structural demand and changing patterns of capital allocation.", tag: "Specialist" },
];

const MARKETS = [
  { city: "London", desc: "The UK's principal international real estate and capital markets hub." },
  { city: "Birmingham", desc: "A major regional investment market supported by a diversified economic base and strategic connectivity." },
  { city: "Manchester", desc: "One of the UK's leading regional commercial real estate and investment markets." },
  { city: "Leeds", desc: "A major Yorkshire investment centre with established office, industrial and mixed-use markets." },
  { city: "Liverpool", desc: "A significant regional market spanning commercial, logistics, residential and operational real estate." },
  { city: "Bristol", desc: "A leading South West market with strong professional, technology and business-services demand." },
  { city: "Edinburgh", desc: "Scotland's capital and a key commercial centre with institutional-grade investment stock." },
  { city: "Glasgow", desc: "A major Scottish commercial market with deep occupational demand and development pipeline." },
];

const METHODOLOGY = [
  { step: "01", title: "Market", desc: "Location, economic fundamentals, occupational demand and supply." },
  { step: "02", title: "Asset", desc: "Building quality, specification, condition and repositioning potential." },
  { step: "03", title: "Income", desc: "Tenant covenant, lease structure, WAULT, rental profile and income durability." },
  { step: "04", title: "Capital", desc: "Pricing, financing, capital expenditure and projected capital requirements." },
  { step: "05", title: "Risk", desc: "Tenant, market, structural, regulatory and liquidity considerations." },
  { step: "06", title: "Exit", desc: "Buyer universe, liquidity, future demand and potential exit scenarios." },
];

const RESEARCH = [
  { title: "UK Commercial Real Estate Outlook 2026", category: "Capital Markets", desc: "Where is institutional capital moving across UK commercial real estate?" },
  { title: "UK Industrial & Logistics Investment 2026", category: "Industrial & Logistics", desc: "Investment fundamentals, occupational demand and pricing across major UK markets." },
  { title: "London Office Investment 2026", category: "Offices", desc: "Income, pricing and repositioning opportunities across London's office market." },
  { title: "UK Commercial Property Yields", category: "Investment Intelligence", desc: "Understanding pricing and income across the UK's principal commercial sectors." },
];

const CASES = [
  { title: "Office Acquisition Advisory", location: "London", tags: ["Acquisition strategy", "Investment analysis", "Transaction advisory"], status: "Confidential" },
  { title: "Industrial Portfolio Review", location: "Midlands", tags: ["Asset positioning", "Portfolio optimisation", "Capital planning"], status: "Confidential" },
  { title: "Retail Asset Disposition", location: "Regional UK", tags: ["Transaction execution", "Buyer targeting", "Asset positioning"], status: "Confidential" },
];

const INVESTOR_TYPES = [
  { title: "Institutional Investors", desc: "Investment companies, funds and other professional capital seeking UK real estate exposure." },
  { title: "Family Offices", desc: "Discreet acquisition and portfolio advisory for private investment capital." },
  { title: "Private Equity", desc: "Asset acquisition, value creation and exit strategies." },
  { title: "International Investors", desc: "UK market access and cross-border acquisition support for overseas investors." },
  { title: "Corporate Investors", desc: "Real estate strategies aligned with broader corporate capital objectives." },
];

const LEADERSHIP = [
  {
    name: "Alexander Whitmore",
    role: "Managing Partner",
    bio: "Twenty years advising sovereign wealth and institutional capital on UK commercial real estate acquisition and portfolio strategy. Formerly Head of European Capital Markets at a leading global brokerage.",
    linkedin: "https://linkedin.com/in/alexander-whitmore",
    image: "/images/leadership-alexander.jpg",
  },
  {
    name: "Catherine Holloway",
    role: "Head of Capital Markets",
    bio: "Specialises in cross-border transaction execution, structured finance and off-market acquisition mandates across London and major UK regional markets.",
    linkedin: "https://linkedin.com/in/catherine-holloway",
    image: "/images/leadership-catherine.jpg",
  },
  {
    name: "James Okonkwo",
    role: "Head of Research",
    bio: "Leads Murivest's UK market intelligence function, with expertise in sector-level yield analysis, capital flow tracking and institutional investment trend forecasting.",
    linkedin: "https://linkedin.com/in/james-okonkwo",
    image: "/images/leadership-james.jpg",
  },
];

// ─── Main Page ─────────────────────────────────────────────────
export default function MurivestUKHomepage() {
  return (
    <>
      <SchemaOrg />
      <SchemaWebPage />
      <style>{STYLE_BLOCK}</style>

      <main className="m-cream-bg">
        {/* ═════════════════════════════════════════════════════════
            1. HERO (with next/image architectural visual)
        ═════════════════════════════════════════════════════════ */}
        <section className="relative m-forest-bg overflow-hidden">
          {/* Architectural background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-london-skyline.jpg"
              alt="Grade A Prime Commercial Real Estate City of London skyline at dusk"
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1B4332]/80" />
          </div>

          {/* Texture overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-40">
            <div className="max-w-[800px]">
              <span className="eyebrow">Institutional Commercial Real Estate</span>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] text-[#FAF9F6] mb-6 tracking-tight">
                UK Commercial Real Estate Investment & Capital Markets Advisory
              </h1>
              <p className="font-sans text-lg leading-relaxed text-[rgba(250,249,246,0.85)] font-light max-w-[640px] mb-10">
                Institutional-grade advisory for investors acquiring, repositioning and disposing of
                income-producing commercial real estate across the United Kingdom.
              </p>
              <div className="flex flex-wrap gap-4">
                <InteractiveButton href="/invest/submit-mandate" variant="primary">
                  Submit an Acquisition Mandate
                </InteractiveButton>
                <InteractiveButton href="/invest/opportunities" variant="secondary">
                  View Investment Opportunities
                </InteractiveButton>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            2. TRUST / POSITIONING STRIP
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg border-b m-border">
          <div className="max-w-[1280px] mx-auto px-8 py-12 text-center">
            <span className="eyebrow">The Concierge of Capital</span>
            <h2 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal text-[#1B4332] mb-4 leading-snug">
              Commercial Real Estate. Investment Intelligence. Capital Access.
            </h2>
            <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[720px] mx-auto">
              Murivest provides a private, investment-led approach to commercial real estate acquisition
              and advisory, connecting qualified capital with carefully selected opportunities across the
              markets we serve.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            3. RESEARCH & MARKET INTELLIGENCE STRIP
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg border-b m-border">
          <div className="max-w-[1280px] mx-auto px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <div>
                <span className="eyebrow">Latest UK CRE Intelligence</span>
                <h3 className="font-serif text-xl text-[#1B4332] mb-2">
                  UK Commercial Real Estate Outlook 2026
                </h3>
                <Link href="/research/uk-cre-outlook-2026" className="link-hover font-sans text-xs font-semibold tracking-widest uppercase text-[#1B4332] inline-flex items-center gap-2">
                  Read the Report <span className="text-base">→</span>
                </Link>
              </div>
              <div className="border-l-2 border-[#B8956B] pl-5">
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[#4A4A4A] mb-2">Markets Covered</p>
                <p className="font-serif text-[1.1rem] text-[#1B4332]">London · Birmingham · Manchester · Leeds · Edinburgh · Glasgow</p>
              </div>
              <div className="border-l-2 border-[#B8956B] pl-5">
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[#4A4A4A] mb-2">Sectors</p>
                <p className="font-serif text-[1.1rem] text-[#1B4332]">Offices · Industrial · Logistics · Retail · Healthcare · Alternatives</p>
              </div>
              <div className="border-l-2 border-[#B8956B] pl-5">
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[#4A4A4A] mb-2">Investor Focus</p>
                <p className="font-serif text-[1.1rem] text-[#1B4332]">Private · Institutional · Cross-Border</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            4. INVEST & ACQUIRE
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Invest & Acquire</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] leading-snug">
                UK Investment & Capital Markets
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[rgba(27,67,50,0.12)]">
              {INVEST_PILLARS.map((p) => (
                <div key={p.title} className="m-cream-bg p-10 flex flex-col justify-between min-h-[340px]">
                  <div>
                    <h3 className="font-serif text-[1.35rem] font-normal text-[#1B4332] mb-4 leading-tight">{p.title}</h3>
                    <p className="font-sans text-[0.95rem] leading-relaxed text-[#4A4A4A] font-light">{p.body}</p>
                  </div>
                  <Link href={p.href} className="link-hover font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1B4332] inline-flex items-center gap-2 mt-8">
                    {p.cta} <span className="text-base">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            5. INVESTMENT OPPORTUNITIES
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-12">
              <span className="eyebrow">Investment Opportunities</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] mb-4 leading-snug">
                Selected UK Investment Opportunities
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[720px]">
                Representative opportunities across our coverage. All subject to mandate, confidentiality
                and appropriate due diligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { asset: "Industrial & Logistics", location: "Manchester", detail: "£XXm · XX% net initial yield", type: "Public Opportunity" },
                { asset: "Office", location: "London", detail: "£XXm · XX-year WAULT", type: "Private / Off-Market" },
                { asset: "Retail", location: "Birmingham", detail: "£XXm · XX% passing yield", type: "Public Opportunity" },
              ].map((opp) => (
                <div key={opp.asset} className="hover-lift border m-border p-8 m-cream-bg cursor-pointer">
                  <span className="inline-block font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] border border-[#B8956B] px-3 py-1 mb-5">
                    {opp.type}
                  </span>
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#1B4332] mb-2">{opp.asset}</h3>
                  <p className="font-serif text-[1.05rem] text-[#1B4332] mb-2">{opp.location}</p>
                  <p className="font-sans text-[0.85rem] text-[#4A4A4A] font-light">{opp.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <InteractiveButton href="/invest/opportunities" variant="dark">
                Access Full Opportunity Set
              </InteractiveButton>
              <Link href="/invest/off-market" className="link-hover font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1B4332] inline-flex items-center gap-2 py-4">
                Discuss Off-Market Access <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            6. SECTORS (with architectural imagery)
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Sectors</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] leading-snug">
                Our UK Commercial Real Estate Coverage
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SECTORS.map((sector) => (
                <div key={sector.title} className="hover-lift border m-border p-10 m-cream-bg cursor-pointer">
                  <span className="inline-block font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] border border-[#B8956B] px-3 py-1 mb-5">
                    {sector.tag}
                  </span>
                  <h3 className="font-serif text-[1.25rem] font-normal text-[#1B4332] mb-3">{sector.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-relaxed text-[#4A4A4A] font-light">{sector.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/sectors" className="link-hover font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1B4332] inline-flex items-center gap-2">
                Explore UK Sectors <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            7. UK MARKETS
        ═════════════════════════════════════════════════════════ */}
        <section className="m-forest-bg text-[#FAF9F6] py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-12">
              <span className="eyebrow">Markets</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#FAF9F6] mb-6 leading-snug">
                UK Commercial Real Estate Markets
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[rgba(250,249,246,0.75)] max-w-[720px] mx-auto">
                Murivest provides commercial real estate investment and acquisition advisory across
                London's principal investment markets and the UK's major regional commercial centres.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(250,249,246,0.1)]">
              {MARKETS.map((m) => (
                <div key={m.city} className="market-cell p-8 m-forest-bg cursor-pointer">
                  <h3 className="font-serif text-[1.25rem] font-normal text-[#FAF9F6] mb-2">{m.city}</h3>
                  <p className="font-sans text-[0.85rem] leading-relaxed text-[rgba(250,249,246,0.7)] font-light">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <InteractiveButton href="/markets" variant="secondary">
                Explore UK Markets
              </InteractiveButton>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            8. INVESTMENT METHODOLOGY
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Our Approach</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] leading-snug">
                How We Assess an Investment
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[640px] mx-auto mt-4">
                Evidence-led. Mandate-driven. Disciplined.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {METHODOLOGY.map((m) => (
                <div key={m.step} className="hover-lift border m-border p-10 m-cream-bg">
                  <p className="font-serif text-[2.5rem] font-normal text-[#B8956B] leading-none mb-4">{m.step}</p>
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#1B4332] mb-3">{m.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-relaxed text-[#4A4A4A] font-light">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            9. INSTITUTIONAL NARRATIVE
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-24 border-t m-border">
          <div className="max-w-[960px] mx-auto px-8 text-center">
            <span className="eyebrow">Our Approach</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#1B4332] mb-8 leading-snug">
              From initial asset identification and technical due diligence to structured capital
              sourcing and final execution under Transfer of a Going Concern (TOGC) or asset-share
              structures, our advisory team ensures seamless transaction processing aligned with UK
              regulatory frameworks.
            </h2>
            <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A]">
              Murivest provides institutional investors, private equity funds, and family offices with
              bespoke acquisition, disposition, and asset management advisory across the United
              Kingdom&apos;s primary commercial corridors. By combining rigorous quantitative underwriting
              with deep local market intelligence, we safeguard capital and maximize long-term asset
              performance across office, industrial, and specialized alternative sectors.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            10. WHY MURIVEST
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Why Murivest</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] leading-snug">
                Built for Private and Institutional Capital
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Capital-Focused", body: "We approach real estate through the lens of capital allocation, income durability and long-term value creation rather than volume-led property distribution." },
                { title: "Selective", body: "We focus on opportunities aligned with defined investment mandates. Every opportunity is subject to rigorous underwriting and due diligence." },
                { title: "Research-Led", body: "Our investment perspective is informed by market intelligence, asset-level analysis and sector research—not presentation alone." },
                { title: "Cross-Border", body: "We support investors evaluating UK real estate from international markets, providing market access and acquisition coordination." },
              ].map((w) => (
                <div key={w.title} className="p-8 border-l-2 border-[#B8956B]">
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#1B4332] mb-3">{w.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-relaxed text-[#4A4A4A] font-light">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            11. RESEARCH & INSIGHTS (Gated)
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-12">
              <span className="eyebrow">Research & Investment Intelligence</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] mb-4 leading-snug">
                Independent Thinking for Better Capital Allocation
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[720px]">
                Our research examines the forces shaping UK commercial real estate markets, including
                capital flows, investment yields, occupational demand, rental growth, financing
                conditions, development pipelines and changing investor preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {RESEARCH.map((r) => (
                <div key={r.title} className="hover-lift border m-border p-10 m-cream-bg">
                  <span className="block font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">
                    {r.category}
                  </span>
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#1B4332] mb-3">{r.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-relaxed text-[#4A4A4A] font-light mb-6">{r.desc}</p>
                  <InteractiveButton href="/research/download" variant="outline-dark" className="w-full text-center">
                    Download Report
                  </InteractiveButton>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/research" className="link-hover font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1B4332] inline-flex items-center gap-2">
                Explore Research & Insights <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            12. LEADERSHIP / DEAL TEAM (E-E-A-T)
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24 border-t m-border">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Leadership</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] leading-snug">
                UK Investment Leadership
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[640px] mx-auto mt-4">
                Institutional capital invests in people, not just brands. Our senior partners bring
                decades of cross-border transaction and advisory experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {LEADERSHIP.map((person) => (
                <div key={person.name} className="leadership-card border m-border m-cream-bg overflow-hidden">
                  <div className="relative h-80 w-full bg-[#F5F4F0]">
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role} at Murivest UK`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-[1.25rem] font-normal text-[#1B4332] mb-1">{person.name}</h3>
                    <p className="font-sans text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">
                      {person.role}
                    </p>
                    <p className="font-sans text-[0.9rem] leading-relaxed text-[#4A4A4A] font-light mb-6">
                      {person.bio}
                    </p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#1B4332] inline-flex items-center gap-2"
                    >
                      LinkedIn Profile <span className="text-base">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            13. CASE STUDIES / SELECTED MANDATES
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-bg py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-12">
              <span className="eyebrow">Track Record</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1B4332] mb-4 leading-snug">
                Selected Transactions & Investment Cases
              </h2>
              <p className="font-sans text-base leading-relaxed font-light text-[#4A4A4A] max-w-[720px]">
                Representative mandates and advisory engagements across our UK coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CASES.map((c) => (
                <div key={c.title} className="hover-lift border m-border p-10 m-cream-bg">
                  <span className="inline-block font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] border border-[#B8956B] px-3 py-1 mb-5">
                    {c.status}
                  </span>
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#1B4332] mb-2">{c.title}</h3>
                  <p className="font-serif text-base text-[#1B4332] mb-4">{c.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="font-sans text-[0.7rem] text-[#4A4A4A] bg-[#F5F4F0] px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            14. INVESTOR TYPES
        ═════════════════════════════════════════════════════════ */}
        <section className="m-forest-bg text-[#FAF9F6] py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Capital We Advise</span>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#FAF9F6] leading-snug">
                Investors We Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {INVESTOR_TYPES.map((i) => (
                <div key={i.title} className="investor-cell p-8 border border-[rgba(250,249,246,0.15)] bg-[rgba(250,249,246,0.03)]">
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#FAF9F6] mb-3">{i.title}</h3>
                  <p className="font-sans text-[0.85rem] leading-relaxed text-[rgba(250,249,246,0.7)] font-light">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            15. TRUST & REGULATION STRIP
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-16 border-y m-border">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <span className="eyebrow">Regulated & Compliant</span>
            <div className="flex flex-wrap justify-center items-center gap-12 mt-8 opacity-60 grayscale">
              {/* Replace these divs with actual logo images when available */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-12 bg-[#1B4332] rounded-sm flex items-center justify-center">
                  <span className="font-serif text-[#FAF9F6] text-xs tracking-widest uppercase">RICS</span>
                </div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#4A4A4A]">Royal Institution of Chartered Surveyors</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-12 bg-[#1B4332] rounded-sm flex items-center justify-center">
                  <span className="font-serif text-[#FAF9F6] text-xs tracking-widest uppercase">AML</span>
                </div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#4A4A4A]">Anti-Money Laundering</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-12 bg-[#1B4332] rounded-sm flex items-center justify-center">
                  <span className="font-serif text-[#FAF9F6] text-xs tracking-widest uppercase">GDPR</span>
                </div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#4A4A4A]">Data Protection</span>
              </div>
            </div>
            <p className="font-sans text-[0.75rem] text-[#4A4A4A] font-light mt-8 max-w-[640px] mx-auto">
              Murivest maintains strict professional and regulatory standards across all UK advisory
              activities. All transactions are subject to appropriate legal review, due diligence and
              compliance protocols.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            16. ACQUISITION MANDATE CTA
        ═════════════════════════════════════════════════════════ */}
        <section className="m-cream-dark-bg py-20 border-t m-border">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
            <div className="max-w-[640px]">
              <h3 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal text-[#1B4332] mb-3 leading-snug">
                Discuss your UK acquisition mandate
              </h3>
              <p className="font-sans text-[0.95rem] leading-relaxed text-[#4A4A4A] font-light">
                Private advisory for institutional capital deployment. Submit your investment
                criteria and our team will respond subject to confidentiality.
              </p>
            </div>
            <InteractiveButton href="/invest/submit-mandate" variant="dark">
              Submit an Acquisition Mandate
            </InteractiveButton>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            17. FOOTER
        ═════════════════════════════════════════════════════════ */}
        <footer className="m-forest-bg text-[rgba(250,249,246,0.6)] py-20 pb-8">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <p className="font-serif text-[1.25rem] text-[#FAF9F6] mb-4 tracking-widest uppercase">Murivest</p>
                <p className="font-sans text-[0.8rem] leading-relaxed font-light">
                  Institutional commercial real estate advisory and capital markets.
                  Operating across UK commercial real estate markets.
                </p>
              </div>

              {/* Investment */}
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">Investment</p>
                <ul className="list-none p-0 m-0">
                  {["Investment Opportunities", "Acquisition Advisory", "Capital Markets", "Off-Market Opportunities", "Portfolio Advisory"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href={`/${slugify(item)}`} className="footer-link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">Sectors</p>
                <ul className="list-none p-0 m-0">
                  {["Offices", "Industrial & Logistics", "Retail", "Hotels & Hospitality", "Healthcare", "Life Sciences", "Alternatives"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href={`/sectors/${slugify(item)}`} className="footer-link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Markets */}
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">Markets</p>
                <ul className="list-none p-0 m-0">
                  {["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Bristol", "Edinburgh", "Glasgow"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href={`/markets/${slugify(item)}`} className="footer-link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intelligence & Legal */}
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">Intelligence</p>
                <ul className="list-none p-0 m-0 mb-6">
                  {["Research & Insights", "Market Outlook", "Investment Reports", "Yield Intelligence"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href={`/${slugify(item)}`} className="footer-link">{item}</Link>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#B8956B] mb-4">Legal</p>
                <ul className="list-none p-0 m-0">
                  {["Privacy Policy", "Cookie Policy", "Terms of Use", "Regulatory Information", "Website Disclaimer"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href={`/${slugify(item)}`} className="footer-link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[rgba(250,249,246,0.1)] pt-8 flex flex-wrap justify-between items-center gap-4">
              <p className="font-sans text-[0.7rem] font-light">© {new Date().getFullYear()} Murivest. All rights reserved.</p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Use", "Cookie Policy", "Client Portal"].map((link) => (
                  <Link key={link} href={`/${slugify(link)}`} className="footer-link text-[0.7rem] text-[rgba(250,249,246,0.5)]">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}