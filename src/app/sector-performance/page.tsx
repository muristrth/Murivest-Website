import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Nairobi CRE Sector Performance 2026 | Office, Industrial & Retail | Murivest',
  description:
    'Institutional-grade analysis of Nairobi commercial real estate sector performance: Grade-A office space absorption, Mombasa Road industrial yields, retail dynamics, and serviced apartment demand. Q2 2026.',
  keywords: [
    'Nairobi commercial real estate sector performance',
    'Nairobi office space yields 2026',
    'Kenya industrial real estate yields',
    'Nairobi retail real estate market',
    'Westlands office market 2026',
    'Mombasa Road logistics yields',
    'Kenya serviced apartments investment',
    'Nairobi CRE market analysis',
    'office space absorption Nairobi',
    'Kenya real estate sector comparison',
  ].join(', '),
  alternates: { canonical: 'https://murivest.co.ke/sector-performance' },
  openGraph: {
    title: 'Nairobi CRE Sector Performance 2026 | Murivest',
    description: 'Office, industrial, retail, and serviced apartment sectors — comparative yield and absorption analysis for Nairobi CRE investors. Q2 2026.',
    type: 'article',
    url: 'https://murivest.co.ke/sector-performance',
    siteName: 'Murivest Realty Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nairobi Sector Performance 2026 | Murivest Research',
    description: 'Grade-A office absorption is positive. Industrial yields at 10–13%. Retail in structural transition. Where Nairobi CRE capital should be deployed.',
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nairobi CRE Sector Performance 2026: Office, Industrial, Retail, and Serviced Apartments',
  description: 'Comparative analysis of Nairobi\'s commercial real estate sectors by yield, vacancy, absorption, and investor suitability — updated Q2 2026.',
  author: { '@type': 'Organization', name: 'Murivest Research Team', url: 'https://murivest.co.ke' },
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Realty Group',
    logo: { '@type': 'ImageObject', url: 'https://murivest.co.ke/logo.png' },
  },
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://murivest.co.ke/sector-performance' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which Nairobi commercial real estate sector offers the highest yields in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nairobi industrial and logistics assets on Mombasa Road and the Eastern Bypass corridor currently offer the highest achievable yields in the 10–13% range for institutional-quality product. Grade-A office in Westlands trades at 8.5–10.5%, and prime retail at 9–12%. However, yield alone is not a sufficient underwriting metric — vacancy risk in office and title complexity in industrial require asset-specific analysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current office vacancy rate in Nairobi Westlands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Westlands\' aggregate office vacancy is estimated at 18–22% across all stock, but the figure is misleading. True Grade-A vacancy — buildings with full M&E specification, above-standard floor-to-ceiling heights, and fibre-ready infrastructure — sits materially below this. The elevated aggregate vacancy reflects mid-tier stock from 2016–2022 that missed Grade-A specification and is competing for the same occupier pool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Nairobi retail real estate a viable investment in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regional and super-regional retail in Nairobi (Two Rivers, Garden City, The Hub Karen) is under structural pressure from e-commerce and lifestyle-format competition. Neighbourhood retail in satellite towns — Ruiru, Kitengela, Athi River — is performing well, supported by organic middle-class demand and limited institutional supply competition. The investable opportunity in Nairobi retail is granular and submarket-specific, not a broad asset class call.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the serviced apartment sector perform compared to residential in Nairobi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Serviced apartments in Nairobi — particularly in Westlands, Kilimani, and Gigiri — generate gross yields of 7–9% versus 4–6% for standard residential. The premium reflects shorter tenancy terms, higher RevPAR volatility, and active management requirements. Occupier demand from expatriates, diplomats, and project-based professionals is stable. However, the sector requires hotel-grade operational management, which most individual landlords underestimate.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.co.ke' },
    { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://murivest.co.ke/research' },
    { '@type': 'ListItem', position: 3, name: 'Sector Performance 2026', item: 'https://murivest.co.ke/sector-performance' },
  ],
};

// ─── SECTOR DATA ──────────────────────────────────────────────────────────────
const sectors = [
  {
    name: 'Grade-A Office',
    yield: '8.5–10.5%',
    vacancy: '18–22%',
    absorption: 'Net positive',
    outlook: 'Selective',
    key: 'Westlands, Upper Hill, Gigiri',
    flag: 'Core-plus',
  },
  {
    name: 'Industrial / Logistics',
    yield: '10–13%',
    vacancy: '8–12%',
    absorption: 'Positive',
    outlook: 'Overweight',
    key: 'Mombasa Road, Industrial Area, Eastern Bypass',
    flag: 'Value-add',
  },
  {
    name: 'Prime Retail',
    yield: '9–12%',
    vacancy: '22–30%',
    absorption: 'Negative (large-format)',
    outlook: 'Underweight (large format)',
    key: 'Two Rivers, Garden City, The Hub Karen',
    flag: 'Restructuring',
  },
  {
    name: 'Neighbourhood Retail',
    yield: '10–13%',
    vacancy: '10–15%',
    absorption: 'Positive',
    outlook: 'Selective',
    key: 'Ruiru, Kitengela, Athi River, Ngong Road nodes',
    flag: 'Opportunistic',
  },
  {
    name: 'Serviced Apartments',
    yield: '7–9%',
    vacancy: '15–25%',
    absorption: 'Stable',
    outlook: 'Neutral',
    key: 'Westlands, Kilimani, Gigiri, Lavington',
    flag: 'Income',
  },
];

export default function SectorPerformancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4', color: '#2C2C2C' }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 70% 50%, rgba(217,119,6,0.05), transparent 65%)' }} />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <Link href="/" className="inline-flex items-center gap-2 mb-10 text-[11px] font-medium tracking-[0.4em] uppercase transition-opacity hover:opacity-70" style={{ color: '#8B7355' }}>
              <ArrowLeft className="h-3 w-3" /> Home
            </Link>
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <li><Link href="/" style={{ color: '#475569' }}>Home</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li><Link href="/research" style={{ color: '#475569' }}>Research</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li style={{ color: '#8B7355' }}>Sector Performance</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase mb-5" style={{ color: '#F59E0B' }}>
                Sector Intelligence — Q2 2026
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Nairobi CRE{' '}
                <em className="not-italic" style={{ color: 'rgba(253,230,138,0.9)' }}>Sector</em>{' '}
                Performance
              </h1>
              <p className="text-base md:text-lg font-light leading-[1.8] mb-8" style={{ color: '#94A3B8' }}>
                Office space absorption. Industrial yield compression. Retail restructuring. Serviced apartment RevPAR dynamics. A comparative framework for allocating capital across Nairobi's primary commercial real estate sectors.
              </p>
              <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <span>By Murivest Research Team</span>
                <span style={{ color: '#334155' }}>·</span>
                <time dateTime="2026-05-12">May 2026</time>
                <span style={{ color: '#334155' }}>·</span>
                <span>16 min read</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#1E293B' }} />
        </section>

        {/* ── SECTOR MATRIX ────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Comparative Matrix</p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-10" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
            Sector{' '}
            <em className="not-italic" style={{ color: '#8B7355' }}>Scorecard</em>{' '}
            — Nairobi 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #E5E2DC' }}>
                  {['Sector', 'Yield Range', 'Vacancy', 'Absorption', 'Murivest View', 'Key Submarkets'].map((h) => (
                    <th key={h} className="text-left py-4 pr-6 text-[11px] font-medium tracking-[0.25em] uppercase" style={{ color: '#8B7355' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sectors.map(({ name, yield: y, vacancy, absorption, outlook, key }, i) => (
                  <tr key={name} style={{ borderBottom: '1px solid #E5E2DC', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F7F4' }}>
                    <td className="py-4 pr-6 font-medium" style={{ color: '#2C2C2C' }}>{name}</td>
                    <td className="py-4 pr-6 font-medium" style={{ color: '#8B7355' }}>{y}</td>
                    <td className="py-4 pr-6 font-light" style={{ color: '#5A5A5A' }}>{vacancy}</td>
                    <td className="py-4 pr-6 font-light" style={{ color: '#5A5A5A' }}>{absorption}</td>
                    <td className="py-4 pr-6 font-medium text-[12px]" style={{ color: '#2C2C2C' }}>{outlook}</td>
                    <td className="py-4 pr-6 font-light" style={{ color: '#5A5A5A' }}>{key}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] mt-3 font-light" style={{ color: '#8B7355' }}>
            Indicative ranges based on market observation. Not a guarantee of returns. This analysis is for informational purposes only.
          </p>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <article className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8">

              {/* Lead */}
              <div className="mb-12 pb-12" style={{ borderBottom: '1px solid #E5E2DC' }}>
                <p className="text-base md:text-lg font-light leading-[1.8]" style={{ color: '#2C2C2C' }}>
                  Nairobi's Grade-A office vacancy is 22%. Office absorption is, simultaneously, net positive. Both statements are true. Understanding why requires moving past the aggregate figures and into the submarket-level supply structure — which is where the allocation decision actually lives.
                </p>
              </div>

              {/* Section 1 — Office */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Office Space: The Two-Tier Market{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Foreign Capital Keeps Missing</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Westlands' office stock expanded significantly between 2016 and 2023. The problem is not that Nairobi added too much office space in aggregate. The problem is that it added the wrong type of office space for the occupier profile that actually materialised. Large corporate floor plates of 4,000–8,000 sqm have attracted limited demand. BPO operators, technology companies, and NGOs — the real drivers of Nairobi's office absorption — need 500–2,500 sqm, flexible lease terms, and above-standard power and connectivity infrastructure.
                  </p>
                  <p>
                    True Grade-A vacancy in Westlands — restricting the universe to buildings with fibre connectivity, independent generators, adequate parking ratios, and floor-to-ceiling heights above 2.8m — is materially lower than the aggregate 22% figure. The elevated headline number reflects a cohort of mid-tier buildings built between 2017 and 2022 that failed to reach Grade-A specification but are marketed at Grade-A rents. These buildings will either reprice or be repositioned. Neither outcome is imminent.
                  </p>
                  <p>
                    For investors, the critical distinction is underwriting Grade-A correctly rather than avoiding the sector. Upper Hill remains the most defensible office submarket from an occupier quality perspective — multinational anchors, international NGOs, and financial services firms maintain long leases and low churn. Gigiri's diplomatic concentration creates similar stability. Westlands is the highest-velocity market but requires the most precise stock selection.
                  </p>
                  <p>
                    Rental levels for prime Westlands space are holding at USD 1.0–1.4 per sqft per month for true Grade-A. Service charges are KES-denominated and have increased with inflation. The effective USD cost to occupiers has therefore risen even where headline rents have held — a factor that is beginning to influence tenant decision-making on renewal versus relocation.
                  </p>
                </div>
              </section>

              {/* Section 2 — Industrial */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Industrial and Logistics:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>The Structural Demand Case</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Mombasa Road is the most compelling yield opportunity in Nairobi CRE. That this is not more widely recognised reflects the market's institutional immaturity rather than a flaw in the thesis.
                  </p>
                  <p>
                    Three demand drivers are structural rather than cyclical. First: FMCG distribution. As Kenya's supermarket penetration deepens — Carrefour now operates 13 locations; Quickmart, Naivas, and other local chains are expanding aggressively — the requirement for ambient-temperature distribution centres within 30km of the CBD is intensifying. Existing stock, predominantly 1970s–1990s construction with inadequate loading, ceiling heights, and floor load capacity, cannot serve modern logistics requirements.
                  </p>
                  <p>
                    Second: cold chain. The food processing, pharmaceutical, and floriculture export sectors collectively require temperature-controlled warehousing that does not exist in adequate quantity anywhere in Greater Nairobi. Development of cold-chain facilities has been slow due to high capital costs and limited developer appetite. The scarcity premium is real and currently untapped by most investors.
                  </p>
                  <p>
                    Third: e-commerce last-mile infrastructure. Kenya's e-commerce market grew 35% by transaction volume in 2025. Last-mile logistics — collection points, sortation facilities, and urban distribution depots — require a category of light-industrial real estate that the Nairobi market has not historically supplied. This is a medium-term demand driver, but the capital cycle to develop it is long enough that early investors capture the best risk-adjusted entry points.
                  </p>
                  <p>
                    The risk on Mombasa Road is not demand. It is title complexity and development risk. Industrial land in this corridor has complex historical ownership structures. Investors must budget for thorough due diligence and accept longer transaction timelines.
                  </p>
                </div>
              </section>

              {/* Section 3 — Retail */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Retail Real Estate:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>A Market in Structural Transition</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Nairobi's large-format retail sector is structurally challenged. This is not a cyclical observation. The pipeline of regional and super-regional mall development that characterised the 2012–2020 period — Two Rivers, Garden City, The Hub Karen, Galleria — added significant GLA at a moment when Kenya's retail landscape was beginning to fragment into multiple formats competing for the same household income.
                  </p>
                  <p>
                    Vacancy in large-format retail centres ranges from 22–30% across the Nairobi metropolitan area. Anchor tenants — the large-format grocery and department stores that generate footfall for smaller unit operators — are renegotiating leases aggressively. Several international brands that expanded into Nairobi between 2015 and 2019 have contracted their footprint or exited entirely. The economics of international retail brands in Nairobi are structurally constrained by import costs, currency exposure, and a relatively thin addressable premium consumer base.
                  </p>
                  <p>
                    Neighbourhood retail tells a different story. Strip malls, neighbourhood centres, and retail podiums in satellite towns are performing well. Ruiru, Kitengela, Athi River, and Ngong Road nodes are absorbing new retail supply from organic consumer demand rather than aspirational developer projections. Yields in this format — 10–13% where assets are correctly positioned and anchor tenants are domestic — are more attractive on a risk-adjusted basis than prime retail in established malls.
                  </p>
                </div>
              </section>

              {/* Section 4 — Serviced Apartments */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Serviced Apartments:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>The Operational Premium</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Nairobi's serviced apartment sector is one of the few categories where the asset class genuinely differentiates from standard residential. Gross yields of 7–9% versus 4–6% for conventional residential reflect the RevPAR premium from short-stay and medium-term corporate tenancies — but this premium comes with an operational requirement that most private landlords are not equipped to manage.
                  </p>
                  <p>
                    Demand is structurally supported by three occupier groups: expatriates on 6–24 month assignments (corporate clients, development finance, diplomatic), project-based professionals (infrastructure, telecoms, energy sector), and regional business travellers from East and Central Africa who prefer serviced accommodation to hotel alternatives. The Westlands, Kilimani, Gigiri, and Lavington submarkets capture the majority of this demand.
                  </p>
                  <p>
                    Supply quality is heterogeneous. The best operators — Trademark, Oasis, and a small number of institutional operators with international brand affiliations — maintain occupancy in the 75–85% range year-round. Owner-managed serviced apartments without professional management infrastructure and online distribution channel access operate at materially lower occupancy, which erodes the yield premium that justifies the investment thesis.
                  </p>
                  <p>
                    For institutional investors, the serviced apartment opportunity in Nairobi is most compelling as a component of a mixed-use development — where the operational requirement can be contracted to a specialist manager and the residential and retail elements provide income diversification — rather than as a standalone investment category.
                  </p>
                </div>
              </section>

              {/* Section 5 — Allocation Framework */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Allocation Framework:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Where to Position by Investor Type</em>
                </h2>
                <div className="space-y-px mb-8" style={{ backgroundColor: '#E5E2DC' }}>
                  {[
                    {
                      type: 'USD-Based Institutional Investor',
                      rec: 'Overweight Mombasa Road industrial. Selective Grade-A office (Westlands, Upper Hill). Avoid large-format retail.',
                    },
                    {
                      type: 'Kenya Pension Fund / Insurance Co.',
                      rec: 'Neighbourhood retail (KES yield premium over T-bills where achievable). Stabilised Grade-A office with long-lease anchors. Monitor REIT framework revision.',
                    },
                    {
                      type: 'Family Office (Africa Allocation)',
                      rec: 'Development-stage industrial with value-add upside. Mixed-use with serviced apartment component. 7–10 year hold tolerance required.',
                    },
                    {
                      type: 'Development Finance Institution',
                      rec: 'Cold-chain and logistics infrastructure development. Affordable commercial space for SME occupiers. Avoid stabilised core (insufficient IRR for mandate).',
                    },
                  ].map(({ type, rec }) => (
                    <div key={type} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                      <div className="text-[11px] font-medium tracking-[0.3em] uppercase mb-2" style={{ color: '#8B7355' }}>{type}</div>
                      <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>{rec}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-8" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Sector{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Questions</em>
                </h2>
                <div className="space-y-px" style={{ backgroundColor: '#E5E2DC' }}>
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <div key={name} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                      <h3 className="font-serif text-lg font-normal mb-3" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                        {name}
                      </h3>
                      <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                        {acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 p-8 md:p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E2DC' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Murivest Research Position</p>
                <p className="text-base font-light leading-[1.8]" style={{ color: '#2C2C2C' }}>
                  The sector rotation in Nairobi CRE is underway. Industrial is moving from peripheral to primary. Large-format retail is in a restructuring cycle that will take 3–5 years to resolve. Office remains the most liquid and most misunderstood category. Investors who can distinguish between the aggregate narrative and the asset-level reality will find Nairobi's sector divergence is, in itself, an investable condition.
                </p>
                <p className="text-[11px] font-light mt-4" style={{ color: '#8B7355' }}>
                  This analysis is for informational purposes only and does not constitute investment advice.
                </p>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
              <div className="p-8 sticky top-8" style={{ backgroundColor: '#2C2C2C' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Sector Advisory</p>
                <h3 className="font-serif text-xl font-normal text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Sector-Specific Mandates
                </h3>
                <p className="text-[13px] font-light leading-[1.8] mb-6" style={{ color: '#94A3B8' }}>
                  Murivest sources, structures, and advises on sector-specific CRE transactions across Nairobi's primary and secondary submarkets. Mandate-based, confidential engagements only.
                </p>
                <Link href="/contact" className="block text-center py-3 px-6 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                  Open a Mandate
                </Link>
              </div>

              <div className="p-8" style={{ border: '1px solid #E5E2DC', backgroundColor: '#FFFFFF' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>Related Research</p>
                <ul className="space-y-4">
                  {[
                    { title: 'Kenya Economic Outlook 2026', href: '/kenya-economic-outlook' },
                    { title: 'Regulatory Updates Q2 2026', href: '/regulatory-updates' },
                    { title: 'Our Active Transaction Portfolio', href: '/our-portfolio' },
                  ].map(({ title, href }) => (
                    <li key={title} className="pb-4" style={{ borderBottom: '1px solid #E5E2DC' }}>
                      <Link href={href} className="text-[13px] font-light leading-[1.6] transition-opacity hover:opacity-70" style={{ color: '#2C2C2C' }}>
                        {title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8" style={{ backgroundColor: '#F8F7F4', border: '1px solid #E5E2DC' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>Quick Yield Reference</p>
                {sectors.map(({ name, yield: y, flag }) => (
                  <div key={name} className="py-3" style={{ borderBottom: '1px solid #E5E2DC' }}>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[12px] font-medium" style={{ color: '#2C2C2C' }}>{name}</span>
                      <span className="text-[12px] font-medium" style={{ color: '#8B7355' }}>{y}</span>
                    </div>
                    <div className="text-[11px] font-light mt-0.5" style={{ color: '#5A5A5A' }}>{flag}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </article>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#3F3F3F' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Live Transactions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Access Active{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Deal Flow</em>
            </h2>
            <p className="text-base font-light mb-10 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Murivest's proprietary transaction pipeline covers Grade-A office, industrial, and mixed-use assets across Nairobi's primary submarkets. Institutional access only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-portfolio" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                View Portfolio
              </Link>
              <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #8B7355', color: '#8B7355' }}>
                Request Deal Access
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}