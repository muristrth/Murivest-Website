import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Murivest CRE Transaction Portfolio | Nairobi Commercial Property Deals',
  description:
    'Murivest\'s active transaction pipeline: verified Grade-A office, industrial, and mixed-use commercial real estate deals across Nairobi submarkets. USD-denominated yields. Mandate-based access.',
  keywords: [
    'Nairobi commercial property for sale',
    'Kenya CRE investment deals 2026',
    'Westlands office space for sale',
    'Nairobi industrial property investment',
    'commercial real estate Kenya institutional',
    'Nairobi Grade A office deals',
    'Kenya property investment portfolio',
    'Mombasa Road warehouse for sale',
    'Nairobi mixed use development investment',
    'Kenya real estate deal flow',
  ].join(', '),
  alternates: { canonical: 'https://murivest.com/our-portfolio' },
  openGraph: {
    title: 'Murivest CRE Transaction Portfolio | Nairobi Commercial Deals',
    description: 'Active Nairobi CRE deal pipeline: office, industrial, and mixed-use assets. Verified yields, clean titles, institutional access.',
    type: 'website',
    url: 'https://murivest.com/our-portfolio',
    siteName: 'Murivest Realty Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Portfolio | Nairobi CRE Deal Flow',
    description: 'Verified office, industrial, and mixed-use transactions across Nairobi. USD yields 8.5–13%. Mandate-based institutional access.',
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Murivest CRE Transaction Portfolio',
  description: 'Murivest\'s curated pipeline of verified commercial real estate transactions across Nairobi\'s primary and secondary submarkets.',
  url: 'https://murivest.com/our-portfolio',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Realty Group',
    logo: { '@type': 'ImageObject', url: 'https://murivest.com/logo.webp' },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Murivest Realty Group',
  url: 'https://murivest.com',
  description: 'Institutional commercial real estate advisory and transaction services across Nairobi, London, Dubai, and Southeast Asia.',
  areaServed: ['Nairobi', 'Kenya', 'London', 'Dubai', 'Bangkok', 'Bali'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Portfolio', item: 'https://murivest.com/our-portfolio' },
  ],
};

// ─── DEAL DATA ────────────────────────────────────────────────────────────────
const featuredDeals = [
  {
    id: 'MRV-001',
    name: 'Reliable Towers',
    address: '11 Mogotio Road, Westlands, Nairobi',
    sector: 'Grade-A Office',
    size: '32,000 sqft',
    yield: '9.2%',
    status: 'Under Negotiation',
    tenure: 'Freehold',
    tenants: 'Multi-tenant, financial services & tech',
    price: 'KES 420M',
    highlight: 'Fully let. USD-denominated leases. Clean title verified.',
  },
  {
    id: 'MRV-002',
    name: 'Sameer Business Park — Block D',
    address: 'Mombasa Road, Industrial Area, Nairobi',
    sector: 'Industrial / Logistics',
    size: '48,000 sqft',
    yield: '11.4%',
    status: 'Off-Market',
    tenure: 'Leasehold (94 years remaining)',
    tenants: 'FMCG distributor (single anchor)',
    price: 'KES 290M',
    highlight: 'Long-term anchor tenant. Modern loading infrastructure. Clear title.',
  },
  {
    id: 'MRV-003',
    name: 'Suite Life Serviced Residences',
    address: 'LR No. 1/844, Kilimani, Nairobi',
    sector: 'Serviced Apartments',
    size: '11 units (of 20-unit block)',
    yield: '8.1%',
    status: 'Active Mandate',
    tenure: 'Freehold',
    tenants: 'Corporate short-stay, expatriate',
    price: 'KES 280M',
    highlight: '11-unit strata sale. Institutional vendor. Professional operator.',
  },
  {
    id: 'MRV-004',
    name: 'Rahimtulla Trust Building',
    address: 'LR No. 209/561, Upper Hill, Nairobi',
    sector: 'Grade-A Office',
    size: '55,000 sqft (full building)',
    yield: '9.8%',
    status: 'Off-Market',
    tenure: 'Freehold',
    tenants: 'Institutional office, mixed-covenant',
    price: 'KES 680M',
    highlight: 'Whole-building acquisition. Long WAULT. Institutional-grade covenant.',
  },
  {
    id: 'MRV-005',
    name: 'Eastern Bypass Logistics Hub',
    address: 'Eastern Bypass, Ruiru, Greater Nairobi',
    sector: 'Industrial / Logistics',
    size: '80,000 sqft (development ready)',
    yield: '12.5% (projected, stabilised)',
    status: 'Development Mandate',
    tenure: 'Freehold (titled, zoned industrial)',
    tenants: 'Committed pre-let, cold chain occupier',
    price: 'Development budget: KES 380M',
    highlight: 'Cold-chain pre-let. Scarce product type. First-mover positioning.',
  },
  {
    id: 'MRV-006',
    name: 'Ngong Road Neighbourhood Centre',
    address: 'Ngong Road Node, Kilimani/Dagoretti, Nairobi',
    sector: 'Neighbourhood Retail',
    size: '18,500 sqft',
    yield: '11.2%',
    status: 'Available',
    tenure: 'Freehold',
    tenants: 'Anchor: domestic grocery. Mix of food & service tenants',
    price: 'KES 185M',
    highlight: 'Domestic anchor. Satellite corridor organic demand. Defensible yield.',
  },
];

const stats = [
  { value: '15+', label: 'Verified Transactions', note: 'Active pipeline across sectors' },
  { value: 'KES 2.5B+', label: 'Transaction Value', note: 'Aggregate deal pipeline under mandate' },
  { value: '8.5–13%', label: 'USD Yield Range', note: 'Across office, industrial & mixed-use' },
  { value: '6', label: 'Global Markets', note: 'Nairobi · London · Dubai · USA · Bangkok · Bali' },
];

const statusBadge: Record<string, { bg: string; color: string }> = {
  'Under Negotiation': { bg: 'rgba(139,115,85,0.15)', color: '#8B7355' },
  'Off-Market': { bg: 'rgba(44,44,44,0.08)', color: '#2C2C2C' },
  'Active Mandate': { bg: 'rgba(139,115,85,0.10)', color: '#8B7355' },
  'Development Mandate': { bg: 'rgba(90,90,90,0.08)', color: '#5A5A5A' },
  'Available': { bg: 'rgba(139,115,85,0.20)', color: '#8B7355' },
};

export default function OurPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4', color: '#2C2C2C' }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 65% 40%, rgba(217,119,6,0.05), transparent 65%)' }} />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <Link href="/" className="inline-flex items-center gap-2 mb-10 text-[11px] font-medium tracking-[0.4em] uppercase transition-opacity hover:opacity-70" style={{ color: '#8B7355' }}>
              <ArrowLeft className="h-3 w-3" /> Home
            </Link>
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <li><Link href="/" style={{ color: '#475569' }}>Home</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li style={{ color: '#8B7355' }}>Our Portfolio</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase mb-5" style={{ color: '#F59E0B' }}>
                Transaction Pipeline — Q2 2026
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Active{' '}
                <em className="not-italic" style={{ color: 'rgba(253,230,138,0.9)' }}>Transaction</em>{' '}
                Pipeline
              </h1>
              <p className="text-base md:text-lg font-light leading-[1.8] mb-8" style={{ color: '#94A3B8' }}>
                Murivest operates a mandate-based, controlled-access deal pipeline. Every asset in this portfolio has been verified for title integrity, occupancy covenant, and yield authenticity before being presented to institutional investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                  Request Deal Access
                </Link>
                <Link href="/pricing" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #475569', color: '#94A3B8' }}>
                  View Advisory Fees
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#1E293B' }} />
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
            {stats.map(({ value, label, note }) => (
              <div key={label} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="font-serif text-3xl md:text-4xl font-normal mb-2" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>{value}</div>
                <div className="text-sm font-medium mb-1" style={{ color: '#2C2C2C' }}>{label}</div>
                <div className="text-[13px] font-light" style={{ color: '#5A5A5A' }}>{note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PORTFOLIO ARTICLE ────────────────────────────────────────────── */}
        <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-12">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />

          {/* Editorial context */}
          <div className="max-w-3xl mb-16 pt-20">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Portfolio Intelligence</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
              How Murivest Sources and{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Verifies</em>{' '}
              Deals
            </h2>
            <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
              <p>
                Most commercial real estate deal flow in Nairobi is unstructured, unverified, and presented to multiple buyers simultaneously. The information asymmetry between well-connected local operators and institutional investors approaching the market from outside is significant. Murivest was built to resolve that asymmetry.
              </p>
              <p>
                Every asset in our pipeline goes through a four-stage verification process before it reaches an investor's desk. Stage one is title verification — a full chain-of-title search through the Lands Registry, cross-referenced against the National Land Commission's active audit lists. Stage two is occupancy validation — confirmation of tenant existence, lease terms, rent payment history, and covenant strength. Stage three is yield authentication — independent verification that the stated yield is achievable given the actual rent roll, operating cost structure, and current vacancy. Stage four is legal readiness — confirmation that the vendor holds authority to sell, that there are no encumbrances or charges outstanding, and that the transaction can proceed to completion within a defined timeline.
              </p>
              <p>
                Deals that do not pass all four stages are not presented. This eliminates the majority of what circulates in the Nairobi CRE market as "deal flow."
              </p>
            </div>
          </div>

          {/* Deal listings */}
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Active Pipeline</p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-10" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
            Featured{' '}
            <em className="not-italic" style={{ color: '#8B7355' }}>Transactions</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E5E2DC]">
            {featuredDeals.map(({ id, name, address, sector, size, yield: y, status, tenure, tenants, price, highlight }) => {
              const badge = statusBadge[status] ?? { bg: 'rgba(90,90,90,0.08)', color: '#5A5A5A' };
              return (
                <div key={id} className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="text-[10px] font-medium tracking-[0.3em] uppercase mb-1" style={{ color: '#8B7355' }}>
                        {id} — {sector}
                      </div>
                      <h3 className="font-serif text-xl font-normal" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                        {name}
                      </h3>
                      <div className="text-[13px] font-light mt-1" style={{ color: '#5A5A5A' }}>{address}</div>
                    </div>
                    <span
                      className="flex-shrink-0 text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
                    {[
                      { label: 'Yield', val: y },
                      { label: 'Price / Budget', val: price },
                      { label: 'Size', val: size },
                      { label: 'Tenure', val: tenure },
                      { label: 'Tenants', val: tenants },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <div className="text-[10px] font-medium tracking-[0.25em] uppercase mb-0.5" style={{ color: '#8B7355' }}>{label}</div>
                        <div className="text-[13px] font-light" style={{ color: '#2C2C2C' }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-5" style={{ borderTop: '1px solid #E5E2DC' }}>
                    <p className="text-[13px] font-light leading-[1.6] mb-4" style={{ color: '#5A5A5A' }}>
                      {highlight}
                    </p>
                    <Link
                      href="/contact"
                      className="text-[11px] font-medium tracking-[0.3em] uppercase transition-opacity hover:opacity-70"
                      style={{ color: '#8B7355' }}
                    >
                      Request Information Memorandum →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-6" style={{ backgroundColor: '#F8F7F4', border: '1px solid #E5E2DC' }}>
            <p className="text-[12px] font-light" style={{ color: '#8B7355' }}>
              Transaction details are indicative and subject to verification. Pricing and yield figures are based on current market conditions and are not guaranteed. All transactions are subject to due diligence, legal review, and formal sale agreement. Murivest Realty Group acts as advisor and facilitator — not principal — in all transactions listed. This information does not constitute an offer or solicitation. This page is for informational purposes only and does not constitute investment advice.
            </p>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Engagement Model</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-12" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
              How Murivest{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Works</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
              {[
                { step: '01', title: 'Mandate Submission', body: 'Investors submit a mandate specifying target sector, submarket, ticket size, yield requirement, and hold period. No mandate, no access to deal flow.' },
                { step: '02', title: 'Pipeline Matching', body: 'Murivest matches the mandate against the verified pipeline. Non-matching assets are not presented. Investors see only directly relevant opportunities.' },
                { step: '03', title: 'IM and Due Diligence', body: 'Qualified mandates receive an Information Memorandum. Murivest coordinates the due diligence process, including title verification, financial review, and legal coordination.' },
                { step: '04', title: 'Negotiation and Completion', body: 'Murivest structures and facilitates negotiation. All transactions proceed under formal documentation reviewed by qualified legal counsel. Murivest\'s fee is contingent on successful completion.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="p-8 md:p-10" style={{ backgroundColor: '#F8F7F4' }}>
                  <div className="font-serif text-3xl font-normal mb-4" style={{ color: '#8B7355', fontFamily: 'Georgia, serif' }}>{step}</div>
                  <h3 className="font-serif text-lg font-normal mb-3" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>{title}</h3>
                  <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#3F3F3F' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Controlled Access</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Submit a{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Transaction Mandate</em>
            </h2>
            <p className="text-base font-light mb-10 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Murivest operates on a mandate basis. Investors who submit a qualified mandate receive access to off-market deal flow not available through any public channel. Engagements are confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sell" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                Submit Mandate
              </Link>
              <Link href="/broker" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                Submit Mandate As A Broker
              </Link>
              <Link href="/pricing" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #8B7355', color: '#8B7355' }}>
                Advisory Fees
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}