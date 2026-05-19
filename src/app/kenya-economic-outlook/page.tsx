import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Kenya Economic Outlook 2026 | Nairobi CRE Investment Analysis | Murivest',
  description:
    'Institutional macro analysis of Kenya GDP trajectory, KES/USD dynamics, inflation, and the structural impact on Nairobi office, industrial, and retail real estate yields. Updated Q2 2026.',
  keywords: [
    'Kenya economic outlook 2026',
    'Nairobi commercial real estate investment',
    'Kenya GDP growth forecast',
    'office space Nairobi yields',
    'Kenya inflation rate 2026',
    'KES USD exchange rate investment',
    'Kenya real estate market analysis',
    'Nairobi office space demand',
    'Kenya CRE yields 2026',
    'East Africa property investment',
  ].join(', '),
  alternates: { canonical: 'https://murivest.co.ke/kenya-economic-outlook' },
  openGraph: {
    title: 'Kenya Economic Outlook 2026 | Nairobi CRE Investment Analysis',
    description:
      'Macro intelligence for institutional investors in Kenyan commercial real estate. GDP, KES, inflation, and sector yield impact.',
    type: 'article',
    url: 'https://murivest.co.ke/kenya-economic-outlook',
    siteName: 'Murivest Realty Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenya Economic Outlook 2026 | Murivest Research',
    description:
      'Kenya GDP at 6.2%. Office absorption up. KES stabilising. What it means for CRE yields in Nairobi — institutional analysis.',
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kenya Economic Outlook 2026: What the Macro Cycle Means for Nairobi Real Estate',
  description:
    'Institutional-grade analysis of Kenya\'s macroeconomic environment and its compounding effects on commercial real estate yields across Nairobi\'s primary office, industrial, and retail submarkets.',
  author: {
    '@type': 'Organization',
    name: 'Murivest Research Team',
    url: 'https://murivest.co.ke',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Realty Group',
    logo: { '@type': 'ImageObject', url: 'https://murivest.co.ke/logo.webp' },
  },
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://murivest.co.ke/kenya-economic-outlook' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the current GDP growth rate in Kenya for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kenya\'s GDP grew at an estimated 6.2% in 2024, with the government targeting 6.5–7% by 2026. Services and digital economy segments are the primary drivers, alongside infrastructure expenditure. The IMF programme provides a fiscal anchor that reduces downside scenario risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the KES/USD exchange rate affect Nairobi office rents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The majority of Grade-A office leases in Westlands and Upper Hill are denominated in USD, which partially insulates landlord returns from KES depreciation. For USD-based investors, this creates a natural hedge. For KES-denominated buyers, currency volatility is a basis risk that must be modelled into total return assumptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Nairobi submarkets offer the best risk-adjusted CRE yields in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mombasa Road industrial assets offer the strongest risk-adjusted yields in the 10–13% range, benefiting from logistics demand and relatively thin institutional competition. Westlands Grade-A office trades at 8.5–10.5%, but vacancy risk requires careful underwriting. Upper Hill remains the safest occupier profile but at tighter yields.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foreign investors own commercial real estate in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreign individuals cannot hold freehold title to land in Kenya under the Constitution (2010). Commercial assets are typically structured through leasehold arrangements of 50–99 years, or via Kenyan-registered companies with foreign shareholding. Stamp duty is payable at 4% on property transfers. Specialist legal counsel is required for any cross-border acquisition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is driving office space demand in Nairobi in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nairobi\'s office demand is primarily driven by BPO expansion, multinational headquarters consolidation, and NGO/development finance institution sector growth. Technology companies are absorbing mid-size floor plates in Westlands, while Gigiri and Upper Hill retain demand from diplomatic missions and financial services. Net absorption is positive despite persistent headline vacancy in older stock.',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Kenya Economic Outlook 2026',
      item: 'https://murivest.co.ke/kenya-economic-outlook',
    },
  ],
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function KenyaEconomicOutlookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4', color: '#2C2C2C' }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1B4332' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 80% at 75% 40%, rgba(217,119,6,0.05) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-10 text-[11px] font-medium tracking-[0.4em] uppercase transition-opacity hover:opacity-70"
              style={{ color: '#8B7355' }}
            >
              <ArrowLeft className="h-3 w-3" /> Home
            </Link>

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <li><Link href="/" className="hover:opacity-70 transition-opacity" style={{ color: '#475569' }}>Home</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li style={{ color: '#8B7355' }}>Kenya Economic Outlook</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase mb-5" style={{ color: '#F59E0B' }}>
                Macro Intelligence — Q2 2026
              </p>
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Kenya Economic{' '}
                <em className="not-italic" style={{ color: 'rgba(253,230,138,0.9)' }}>Outlook</em>{' '}
                2026
              </h1>
              <p className="text-base md:text-lg font-light leading-[1.8] mb-8" style={{ color: '#94A3B8' }}>
                What the macro cycle actually means for capital deployed into Nairobi office space, industrial corridors, and retail assets — and where the structural disconnects create investable opportunity.
              </p>
              <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <span>By Murivest Research Team</span>
                <span style={{ color: '#334155' }}>·</span>
                <time dateTime="2026-05-12">May 2026</time>
                <span style={{ color: '#334155' }}>·</span>
                <span>14 min read</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#1E293B' }} />
        </section>

        {/* ── MACRO SNAPSHOT CARDS ─────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
            {[
              { value: '6.2%', label: 'GDP Growth', note: '2024 actuals — Target 6.5–7% by 2026' },
              { value: '4.8%', label: 'Inflation Rate', note: 'CBK target band: 2.5–7.5%' },
              { value: 'KES 129', label: 'USD Rate', note: 'Stabilised post-2024 depreciation cycle' },
              { value: '8.5–13%', label: 'CRE Yield Range', note: 'Nairobi prime to industrial, USD leases' },
            ].map(({ value, label, note }) => (
              <div key={label} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                <div
                  className="font-serif text-3xl md:text-4xl font-normal mb-2"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  {value}
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: '#2C2C2C' }}>{label}</div>
                <div className="text-[13px] font-light" style={{ color: '#5A5A5A' }}>{note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <article className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">

            {/* Main Content */}
            <div className="lg:col-span-8">

              {/* Lead */}
              <div className="mb-12 pb-12" style={{ borderBottom: '1px solid #E5E2DC' }}>
                <p className="text-base md:text-lg font-light leading-[1.8]" style={{ color: '#2C2C2C' }}>
                  Kenya's gross domestic product expanded 6.2% in 2024. That number is widely cited. What is less discussed is the composition: services — primarily financial intermediation, ICT, and wholesale trade — account for 47% of output. Agriculture, which most foreign capital still treats as the primary signal, now represents less than 22% of GDP. The macro story in Nairobi has structurally decoupled from rainfall.
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  The Supply-Demand Disconnect in{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Nairobi Office Space</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Nairobi's Grade-A office stock grew approximately 340% between 2015 and 2024. Rents, in real terms, fell. The headline vacancy rate across Westlands, Upper Hill, and the CBD sits near 22%. Foreign capital keeps entering the submarket. The disconnect is structural, not cyclical — and the failure to recognise this has led to a generation of office developments that are technically let but economically distressed.
                  </p>
                  <p>
                    Two dynamics are operating simultaneously. First, the composition of demand has changed. BPO operators, tech companies, and NGOs absorb smaller floor plates (500–2,000 sqm) with shorter lease terms and greater fit-out sensitivity. Second, the supply pipeline was built for a different occupier — large corporates seeking 5,000+ sqm, long leases, and anchor-credit covenants. That occupier base has not materialised at the pace developers assumed.
                  </p>
                  <p>
                    Net absorption is, in fact, positive. The market is not collapsing. But landlords of mid-tier stock — buildings developed between 2016 and 2022 that missed the Grade-A specification threshold — are facing structural occupancy challenges that aggressive pricing cannot solve. For investors evaluating Nairobi office acquisitions, the distinction between Grade-A (true Grade-A) and Grade-B-presented-as-Grade-A is the single most important underwriting variable.
                  </p>
                  <p>
                    Westlands remains the preferred submarket. Gigiri holds its own through diplomatic and development-sector demand. Upper Hill, once considered the institutional heartland of Nairobi CRE, is experiencing a two-tier dynamic: pre-2015 stock is being quietly repositioned, while post-2020 completions with full M&E specifications are letting at premiums.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  KES Volatility and the{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Currency Exposure Question</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    The Kenyan shilling depreciated 21% against the USD in 2023. It partially recovered through 2024 and 2025, supported by IMF disbursements, improved remittance flows, and a tighter CBK monetary stance. At approximately KES 129–135 per USD, the currency is closer to equilibrium than at any point in the previous 36 months.
                  </p>
                  <p>
                    For USD-based investors, the currency story is partially resolved by lease structure. The majority of Grade-A office and industrial leases in Nairobi's prime corridors are denominated in USD. Service charges and operating costs, however, remain KES-denominated. The basis risk is real. A landlord collecting USD rent but paying KES-denominated staff, utilities, and maintenance is exposed to a spread that widens during KES depreciation cycles.
                  </p>
                  <p>
                    Hedging instruments in Kenya remain limited and expensive. Forward contracts are available through tier-one commercial banks but carry significant costs at longer tenors. Most institutional holders manage FX exposure through capital structure rather than derivatives — specifically by matching USD-denominated debt (where available) to USD-denominated revenues. This is not always achievable in the Kenyan market, where local currency financing from banks such as KCB, Equity, and NCBA is often the only realistic option for sub-$5M acquisitions.
                  </p>
                  <p>
                    The practical implication: total return modelling for Kenyan CRE must treat FX as a scenario variable, not a fixed assumption. A 15% KES depreciation in Year 3 of a 7-year hold can reduce USD IRR by 200–300 basis points even in an otherwise performing asset. Investors underwriting this market at static FX assumptions are making a material error.
                  </p>
                </div>
              </section>

              {/* Section 3 — Industrial */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  Industrial and Logistics: The{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Underpriced Thesis</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Mombasa Road is the most under-analysed CRE corridor in East Africa. Between the Industrial Area and the port-linked logistics hubs near the Eastern Bypass, a structural shift in supply chain configuration is creating demand for modern warehousing that the existing building stock cannot satisfy.
                  </p>
                  <p>
                    Consider the numbers. Cold-chain logistics capacity in Greater Nairobi is estimated at less than 40% of the requirement generated by current food processing and pharmaceutical distribution volumes. Temperature-controlled warehousing yields in comparable Sub-Saharan markets — notably Johannesburg's Linbro Park — trade at 9–11%. Nairobi's equivalent product, where it exists, is achieving similar yields with less institutional competition and longer lease terms from anchor occupiers.
                  </p>
                  <p>
                    The risk is not demand. The risk is land tenure and development risk. A significant portion of industrial land along Mombasa Road and in the Industrial Area carries complex title histories — some involving historical government allocation, sublease arrangements, or incomplete freehold conversion. Due diligence requirements in this submarket are materially higher than in Westlands office. Investors who underwrite industrial yields without adequate title investigation are pricing in a risk they have not identified.
                  </p>
                  <p>
                    That said, for investors with patience and local structuring capability, the risk-adjusted return profile in Nairobi industrial currently offers a yield spread over office that has rarely been this wide. The window is not permanent. As more institutional capital recognises this, cap rate compression will follow.
                  </p>
                </div>
              </section>

              {/* Section 4 — Capital Flow */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  Who Is Buying Nairobi Real Estate —{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>and at What Price</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    The capital flow picture is more nuanced than the headline figures suggest. Three distinct buyer pools are active in Nairobi CRE, each with different return expectations and holding period assumptions.
                  </p>
                  <p>
                    First: diaspora capital. Kenyans resident in the UK, US, Canada, and Gulf states remitted an estimated $4.1B in 2025. A material share flows into residential and semi-commercial property — serviced apartments, retail-podium mixed-use, and small commercial complexes in satellite towns such as Ruiru, Athi River, and Kitengela. This capital is patient, emotion-linked to homecoming narratives, and generally does not compete with institutional product. It does, however, set a valuation floor in secondary submarkets.
                  </p>
                  <p>
                    Second: local pension funds and insurance companies. The Retirement Benefits Authority mandates that Kenyan pension funds hold a minimum percentage of assets in real property. This creates structural demand for income-producing assets at yields above T-bill rates. As of Q1 2026, 91-day T-bills yield approximately 15–16% in KES terms. Any KES-denominated property asset competing for pension allocation must justify its illiquidity and management cost premium against this threshold. This is a harder benchmark than most property owners acknowledge.
                  </p>
                  <p>
                    Third: private equity and development finance. Actis, AfricInvest, and development finance institutions such as IFC and CDC have historically been the primary sources of institutional-scale equity into Kenyan commercial property. Their return thresholds — typically 15%+ USD IRR on equity — require specific deal structures, development upside, or value-add repositioning that stabilised core assets cannot deliver. For this buyer pool, Nairobi is a restructuring and development market, not a core-plus allocation.
                  </p>
                </div>
              </section>

              {/* Section 5 — Risk Framework */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  The Risk Framework:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>What Could Break the Thesis</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Three conditions would materially impair the Kenya CRE investment thesis. The first is a return of KES volatility at the 2023 magnitude — a 20%+ depreciation in a 12-month period would stress USD-KES basis risks across the capital stack and erode returns for local currency borrowers. The second is a reversal of CBK's current monetary discipline, specifically a politically-motivated rate cut that reignites inflation before structural reforms are embedded.
                  </p>
                  <p>
                    The third, and least discussed, is regulatory tail risk. Kenya's land registration system — governed by the Land Registration Act (2012) and the National Land Commission — has been subject to ongoing reform. Title disputes, historical allocation irregularities, and county government rezoning decisions can create material asset-level risk even in otherwise well-performing investments. The Nairobi City County's master plan revision, expected to be finalised in 2026, carries zoning reclassification risk for several submarkets.
                  </p>
                  <p>
                    None of these risks are reasons to avoid the market. They are reasons to price it correctly, structure it carefully, and engage counsel with specific Kenyan land law expertise — not generalist commercial lawyers.
                  </p>
                </div>
              </section>

              {/* Section 6 — Investor Implications */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  Investor Implications:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Where to Position in 2026</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    For USD-based investors with a 5–8 year hold horizon, Nairobi's industrial corridor offers a yield spread over London and Dubai equivalents that compensates for the additional regulatory and currency complexity — provided the asset is properly structured and the title is clean. The office market requires more selectivity: true Grade-A in Westlands and Upper Hill is defensible; anything below that specification requires a distressed-asset return expectation to underwrite responsibly.
                  </p>
                  <p>
                    Pension funds and insurance companies with KES mandates should be pricing Nairobi CRE against the T-bill alternative with appropriate illiquidity and complexity premiums. The current spread between T-bill yields and stabilised office yields in KES terms is negative for most core-plus product. The only segment where KES-denominated investors are adequately compensated is high-yield industrial and opportunistic repositioning.
                  </p>
                  <p>
                    Family offices with an Africa allocation target and patience for 7–10 year liquidity cycles are the best-positioned capital for Nairobi. The market rewards local knowledge, transactional relationships, and the ability to structure around the system's inefficiencies rather than assuming they will resolve.
                  </p>
                </div>
              </section>

              {/* Yield Comparison Table */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-5"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  Nairobi Yield Benchmarks vs.{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Comparable Markets</em>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #E5E2DC' }}>
                        {['Asset Class', 'Nairobi', 'Johannesburg', 'Dubai', 'London'].map((h) => (
                          <th
                            key={h}
                            className="text-left py-4 pr-8 text-[11px] font-medium tracking-[0.25em] uppercase"
                            style={{ color: '#8B7355' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Grade-A Office', '8.5–10.5%', '7.5–9%', '6–8%', '4.25–5.5%'],
                        ['Retail (Prime)', '9–12%', '8–10%', '7–9%', '5–7%'],
                        ['Industrial / Logistics', '10–13%', '9–11%', '8–10%', '4–5.5%'],
                        ['Serviced Apartments', '7–9%', '6–8%', '5–7%', '3–4.5%'],
                      ].map(([cls, nbi, jnb, dxb, lon], i) => (
                        <tr
                          key={cls}
                          style={{
                            borderBottom: '1px solid #E5E2DC',
                            backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F7F4',
                          }}
                        >
                          <td className="py-4 pr-8 font-light" style={{ color: '#2C2C2C' }}>{cls}</td>
                          <td className="py-4 pr-8 font-medium" style={{ color: '#8B7355' }}>{nbi}</td>
                          <td className="py-4 pr-8 font-light" style={{ color: '#5A5A5A' }}>{jnb}</td>
                          <td className="py-4 pr-8 font-light" style={{ color: '#5A5A5A' }}>{dxb}</td>
                          <td className="py-4 pr-8 font-light" style={{ color: '#5A5A5A' }}>{lon}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[11px] mt-3 font-light" style={{ color: '#8B7355' }}>
                    Indicative yield ranges. Not a guarantee of returns. Market conditions subject to change. This analysis is for informational purposes only and does not constitute investment advice.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2
                  className="font-serif text-2xl md:text-3xl font-normal mb-8"
                  style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
                >
                  Investor{' '}
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
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>
                  Murivest Research Position
                </p>
                <p className="text-base font-light leading-[1.8]" style={{ color: '#2C2C2C' }}>
                  For investors with a USD basis, a 6–8 year hold tolerance, and access to credible local structuring, Nairobi's industrial corridor and true Grade-A office represent the most compelling risk-adjusted yield premium over developed-market equivalents currently available in Sub-Saharan Africa. The window is open. It will not remain so indefinitely.
                </p>
                <p className="text-[11px] font-light mt-4" style={{ color: '#8B7355' }}>
                  This analysis is for informational purposes only and does not constitute investment advice. Murivest Realty Group does not guarantee any specific returns or outcomes.
                </p>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">

              {/* Request Brief */}
              <div className="p-8 sticky top-8" style={{ backgroundColor: '#1B4332' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>
                  Murivest Intelligence
                </p>
                <h3 className="font-serif text-xl font-normal text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Request a Market Brief
                </h3>
                <p className="text-[13px] font-light leading-[1.8] mb-6" style={{ color: '#94A3B8' }}>
                  Institutional subscribers receive quarterly macro-to-submarket intelligence on Nairobi CRE, paired with live transaction data from our proprietary pipeline.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 px-6 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#8B7355' }}
                >
                  Request Access
                </Link>
              </div>

              {/* Related */}
              <div className="p-8" style={{ border: '1px solid #E5E2DC', backgroundColor: '#FFFFFF' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>
                  Related Research
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Nairobi Office: The Supply-Demand Disconnect', href: '/research/nairobi-office-market' },
                    { title: 'Kenya Regulatory Updates Q2 2026', href: '/regulatory-updates' },
                    { title: 'Sector Performance: Industrial vs. Office', href: '/sector-performance' },
                  ].map(({ title, href }) => (
                    <li key={title} style={{ borderBottom: '1px solid #E5E2DC', paddingBottom: '1rem' }}>
                      <Link
                        href={href}
                        className="text-[13px] font-light leading-[1.6] transition-colors hover:opacity-70"
                        style={{ color: '#2C2C2C' }}
                      >
                        {title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submarket Quick Ref */}
              <div className="p-8" style={{ backgroundColor: '#F8F7F4', border: '1px solid #E5E2DC' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>
                  Submarket Reference
                </p>
                {[
                  { sub: 'Westlands', type: 'Grade-A Office / Mixed-Use', yield: '8.5–10.5%' },
                  { sub: 'Upper Hill', type: 'Institutional Office', yield: '8–10%' },
                  { sub: 'Mombasa Road', type: 'Industrial / Logistics', yield: '10–13%' },
                  { sub: 'Karen', type: 'High-End Residential', yield: '6–8%' },
                  { sub: 'Kilimani', type: 'Residential / Retail', yield: '7–9%' },
                ].map(({ sub, type, yield: y }) => (
                  <div key={sub} className="py-3" style={{ borderBottom: '1px solid #E5E2DC' }}>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[13px] font-medium" style={{ color: '#2C2C2C' }}>{sub}</span>
                      <span className="text-[12px] font-medium" style={{ color: '#8B7355' }}>{y}</span>
                    </div>
                    <div className="text-[11px] font-light mt-0.5" style={{ color: '#5A5A5A' }}>{type}</div>
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
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>
              Engage Murivest
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-normal text-white mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Structured Advisory for{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Kenyan CRE</em>
            </h2>
            <p className="text-base font-light mb-10 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Murivest works with institutional investors, family offices, and asset managers requiring transaction-grade intelligence on Nairobi commercial real estate. Engagements are bespoke, mandate-based, and confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#8B7355' }}
              >
                Open a Mandate
              </Link>
              <Link
                href="/our-portfolio"
                className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
                style={{ border: '1px solid #8B7355', color: '#8B7355' }}
              >
                View Live Transactions
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}