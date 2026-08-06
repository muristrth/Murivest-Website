import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Kenya Real Estate Regulatory Updates 2026 | CRE Compliance | Murivest',
  description:
    'Institutional briefing on Kenya Land Registration Act changes, EARB regulations, stamp duty, CGT, and zoning amendments affecting Nairobi commercial real estate in 2026. Updated Q2 2026.',
  keywords: [
    'Kenya real estate regulations 2026',
    'Kenya land registration act changes',
    'EARB estate agent regulations Kenya',
    'Kenya stamp duty commercial property',
    'capital gains tax Kenya real estate',
    'Nairobi zoning regulations 2026',
    'foreign ownership Kenya property',
    'Kenya CMA REIT regulations',
    'Kenya property law updates',
    'commercial real estate compliance Kenya',
  ].join(', '),
  alternates: { canonical: 'https://murivest.com/regulatory-updates' },
  openGraph: {
    title: 'Kenya Real Estate Regulatory Updates 2026 | Murivest',
    description:
      'Land registration, EARB, CGT, zoning, and foreign ownership. What changed in 2026 and what it means for CRE investors in Nairobi.',
    type: 'article',
    url: 'https://murivest.com/regulatory-updates',
    siteName: 'Murivest Realty Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenya CRE Regulatory Updates 2026 | Murivest Research',
    description:
      'Nairobi zoning revisions, EARB enforcement, CGT changes, and foreign ownership structures. What institutional investors must know before committing capital.',
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kenya Real Estate Regulatory Updates 2026: What Every Institutional Investor Must Know',
  description:
    'Comprehensive briefing on the regulatory changes affecting commercial real estate investment in Kenya — land law, agency regulations, tax treatment, and foreign ownership structures.',
  author: {
    '@type': 'Organization',
    name: 'Murivest Research Team',
    url: 'https://murivest.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Realty Group',
    logo: { '@type': 'ImageObject', url: 'https://murivest.com/logo.webp' },
  },
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://murivest.com/regulatory-updates' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the current stamp duty rates for commercial property in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stamp duty on commercial property transfers in Kenya is 4% of the higher of the transaction price or the market value as assessed by a government valuer. Leasehold transactions attract 1% for leases under 3 years and 2% for longer terms. These rates have not changed in the 2025/2026 Finance Act, but valuation methodology has become more stringent, effectively raising the applicable base in some submarkets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is capital gains tax applied to commercial real estate sales in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capital gains tax (CGT) in Kenya is levied at a flat rate of 15% on the net gain from property disposal. The gain is calculated as proceeds minus the indexed cost base. Transfers to spouses and certain inter-company transfers may qualify for rollover relief. CGT applies to both residents and non-residents. Compliance is handled through the KRA iTax portal and must be settled before title transfer can be completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foreign companies own commercial real estate in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreign individuals are prohibited from holding freehold land title in Kenya under Article 65 of the Constitution. However, foreign-owned companies registered in Kenya can hold leasehold interests for up to 99 years. A foreign company acquiring property typically registers a local subsidiary or special purpose vehicle (SPV), structures the acquisition via leasehold, and repatriates returns through dividends or management fees subject to withholding tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is EARB and how does it affect commercial real estate transactions in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Estate Agents Registration Board (EARB) regulates property agents in Kenya under the Estate Agents Act (Cap 533). All practising estate agents must be registered with EARB. In 2025, EARB intensified enforcement of the Act, including sanctions against unregistered intermediaries collecting commissions. Institutional investors should ensure all agents they engage in Nairobi CRE transactions hold valid EARB registration to avoid contract enforceability risks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key zoning changes in Nairobi City County affecting commercial real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nairobi City County Integrated Development Plan revision, expected to be formally adopted in 2026, proposes reclassification of several zones along Ngong Road, Jogoo Road, and parts of Eastlands from residential to mixed-use. This would expand the development potential of affected parcels but may also create planning uncertainty in transitional areas. Investors underwriting development plays in these corridors should monitor the formal gazettement before committing to site-specific assumptions.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
    { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://murivest.com/research' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Regulatory Updates 2026',
      item: 'https://murivest.com/regulatory-updates',
    },
  ],
};

// ─── REGULATORY TRACKER DATA ──────────────────────────────────────────────────
const updates = [
  {
    category: 'Land Law',
    title: 'Land Registration Act — Title Integrity Reviews',
    status: 'Active',
    impact: 'High',
    body: 'The National Land Commission has intensified review of historical title grants in peri-urban Nairobi, including areas of Ruiru, Syokimau, and parts of Kikuyu. Titles issued between 1990 and 2010 in these areas are subject to audit. Investors acquiring land in affected areas should conduct extended chain-of-title searches and obtain title insurance where available.',
  },
  {
    category: 'Taxation',
    title: 'Capital Gains Tax — Enhanced KRA Enforcement',
    status: 'Active',
    impact: 'Medium',
    body: 'The Kenya Revenue Authority has deployed automated data matching between Lands Registry transactions and iTax filings. Under-declaration of proceeds, previously common in sub-$1M transactions, now carries penalty risk equivalent to 25% of the undeclared gain plus interest. This is not a new law — it is a material change in enforcement capacity.',
  },
  {
    category: 'Agency Regulation',
    title: 'EARB Enforcement — Unregistered Agents',
    status: 'Active',
    impact: 'Medium',
    body: 'EARB issued enforcement notices to approximately 400 unregistered agents operating in Nairobi in Q4 2025. Commission agreements with unregistered agents may be unenforceable in court. Institutional investors should verify EARB registration of all intermediaries before formalising engagement letters.',
  },
  {
    category: 'REIT Framework',
    title: 'CMA REIT Regulations — Review in Progress',
    status: 'Monitoring',
    impact: 'Medium',
    body: 'The Capital Markets Authority has initiated a stakeholder consultation on revisions to the REIT Regulations (2013). Proposals include lower minimum fundraising thresholds for D-REITs, streamlined reporting requirements, and potential expansion of asset class eligibility. No formal amendments have been gazetted as of Q2 2026.',
  },
  {
    category: 'Zoning',
    title: 'Nairobi CIDP Revision — Mixed-Use Reclassifications',
    status: 'Pending',
    impact: 'High',
    body: 'The Nairobi City County Integrated Development Plan revision proposes mixed-use reclassification along Ngong Road, Jogoo Road, and Eastlands corridors. Formal gazettement is expected in H2 2026. Development underwriting in affected areas should reflect scenario analysis with and without reclassification.',
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const statusColor: Record<string, string> = {
  Active: '#8B7355',
  Monitoring: '#5A5A5A',
  Pending: '#2C2C2C',
};

const impactBg: Record<string, string> = {
  High: 'rgba(139,115,85,0.12)',
  Medium: 'rgba(90,90,90,0.08)',
};

export default function RegulatoryUpdatesPage() {
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
            style={{ background: 'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(217,119,6,0.05), transparent 65%)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-10 text-[11px] font-medium tracking-[0.4em] uppercase transition-opacity hover:opacity-70"
              style={{ color: '#8B7355' }}
            >
              <ArrowLeft className="h-3 w-3" /> Home
            </Link>
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <li><Link href="/" style={{ color: '#475569' }}>Home</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li><Link href="/research" style={{ color: '#475569' }}>Research</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li style={{ color: '#8B7355' }}>Regulatory Updates</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase mb-5" style={{ color: '#F59E0B' }}>
                Regulatory Intelligence — Q2 2026
              </p>
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Kenya CRE{' '}
                <em className="not-italic" style={{ color: 'rgba(253,230,138,0.9)' }}>Regulatory</em>{' '}
                Updates
              </h1>
              <p className="text-base md:text-lg font-light leading-[1.8] mb-8" style={{ color: '#94A3B8' }}>
                Land law changes, EARB enforcement, CGT administration, zoning reclassifications, and REIT framework revisions — assessed for institutional investors deploying capital into Nairobi commercial real estate.
              </p>
              <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <span>By Murivest Research Team</span>
                <span style={{ color: '#334155' }}>·</span>
                <time dateTime="2026-05-12">May 2026</time>
                <span style={{ color: '#334155' }}>·</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#1E293B' }} />
        </section>

        {/* ── LIVE TRACKER ─────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Active Tracker</p>
          <h2
            className="font-serif text-3xl md:text-4xl font-normal mb-10"
            style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}
          >
            Regulatory Changes —{' '}
            <em className="not-italic" style={{ color: '#8B7355' }}>Status Board</em>
          </h2>
          <div className="space-y-px" style={{ backgroundColor: '#E5E2DC' }}>
            {updates.map(({ category, title, status, impact, body }) => (
              <div key={title} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-medium tracking-[0.3em] uppercase px-3 py-1"
                    style={{ backgroundColor: 'rgba(139,115,85,0.1)', color: '#8B7355' }}
                  >
                    {category}
                  </span>
                  <span
                    className="text-[10px] font-medium tracking-[0.3em] uppercase px-3 py-1"
                    style={{ backgroundColor: impactBg[impact], color: statusColor[status] }}
                  >
                    {status}
                  </span>
                  <span
                    className="text-[10px] font-medium tracking-[0.3em] uppercase ml-auto"
                    style={{ color: impact === 'High' ? '#8B7355' : '#5A5A5A' }}
                  >
                    Impact: {impact}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-normal mb-3" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  {title}
                </h3>
                <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <article className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8">

              {/* Lead */}
              <div className="mb-12 pb-12" style={{ borderBottom: '1px solid #E5E2DC' }}>
                <p className="text-base md:text-lg font-light leading-[1.8]" style={{ color: '#2C2C2C' }}>
                  Kenya's property law framework is not broken. It is fragmented, imperfectly enforced, and in active transition on several fronts simultaneously. For investors who understand the specific provisions in play, the regulatory environment creates transactional complexity — not an uninvestable market. For those who do not, the same complexity becomes unpriced risk sitting inside what appeared to be a straightforward acquisition.
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  The Land Title Problem:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>What "Clean Title" Actually Means</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Kenya operates a Torrens-style registration system under the Land Registration Act (2012). In principle, registration confers indefeasibility — the registered owner's title is guaranteed by the state. In practice, the system's integrity is compromised by a backlog of historical irregularities that have not been resolved since the Land (Group Representatives) Act era.
                  </p>
                  <p>
                    The National Land Commission's title integrity review — formally commenced in 2023 and accelerating through 2025 — has identified over 12,000 titles in Greater Nairobi that may be subject to revocation, ranging from illegally subdivided agricultural land to titles granted through administrative process outside the Land Registration Act's provisions. Investors acquiring property in affected areas without a full 30-year chain-of-title search are accepting title risk that standard conveyancing due diligence does not catch.
                  </p>
                  <p>
                    The practical implication is specific: for any acquisition above KES 50M in peri-urban Nairobi (Ruiru, Thika Road corridor, Kiambu, Kikuyu), commission an independent title search from a land searches firm with access to original grant records, not merely the current Land Registry entry. The cost differential is immaterial relative to the exposure.
                  </p>
                  <p>
                    Title insurance — while not yet a standard product in the Kenyan market — is available from a small number of specialist underwriters. Its absence from most transactions reflects convention, not logic. Institutional investors entering significant Nairobi acquisitions should request quotes. Where title insurance is unavailable, the vendor's warranty structure in the sale agreement must compensate accordingly.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Foreign Ownership Structures:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>The Available Pathways</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Article 65 of Kenya's Constitution (2010) restricts foreign individuals to leasehold land interests. The maximum leasehold term available to a non-citizen is 99 years. This is not, in practice, a significant restriction for commercial real estate — most institutional investors are indifferent between freehold and 99-year leasehold at the asset level.
                  </p>
                  <p>
                    The more commonly misunderstood restriction concerns corporate ownership. A company incorporated in Kenya is treated as a Kenyan entity for land ownership purposes, regardless of its ultimate beneficial ownership. This means that a foreign investor can acquire freehold commercial property in Kenya through a locally incorporated company — a structure widely used by multinational occupiers and institutional investors alike.
                  </p>
                  <p>
                    Three ownership structures are in common use. The first is a directly held leasehold in the foreign investor's name — simple, transparent, but limited to 99 years and subject to renewal risk. The second is a Kenya-registered SPV with foreign shareholding — the most common institutional structure, allowing freehold ownership at the SPV level while the foreign investor holds equity rather than land directly. The third is a joint venture with a Kenya-registered counterparty holding the land title — preferred where local partnership adds operational value, but introducing a different category of counterparty risk.
                  </p>
                  <p>
                    Each structure carries distinct tax implications. Management fees from an SPV to a foreign parent attract withholding tax at 20% (or reduced treaty rate where applicable). Dividends from a Kenya company to a non-resident are subject to 15% withholding tax. Interest on shareholder loans — a common mechanism for capitalising an SPV — attracts withholding at 15%. None of these are prohibitive; all require advance structuring to minimise leakage.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Tax Enforcement Intensification:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>CGT and Stamp Duty</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    Kenya's 15% capital gains tax on real property disposals has been in force since 2016. The rate has not changed. What has changed is the KRA's ability to enforce it. The iTax portal now cross-references Lands Registry transaction records in near-real time, flagging discrepancies between declared consideration and assessed market values.
                  </p>
                  <p>
                    The practical consequence is that the previously common practice of splitting consideration between the formal sale price (declared to Lands) and additional "goodwill" payments outside the formal agreement is now materially higher-risk. Penalties for under-declaration run to 25% of the undeclared gain plus interest at 2% per month. The KRA has been active in issuing assessments and initiating audit processes on transactions flagged by the matching system.
                  </p>
                  <p>
                    Stamp duty at 4% on the higher of transaction price or government-assessed market value remains unchanged. The government valuation process has become more rigorous in prime commercial submarkets — particularly Westlands and Upper Hill — where assessed values have been revised upward to reflect observed transaction evidence. Investors should budget for stamp duty on assessed market value rather than agreed purchase price where there is a meaningful gap between the two.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  EARB and the Agency Enforcement Cycle:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Why It Matters for Deal Execution</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    The Estate Agents Registration Board's 2025 enforcement wave was not purely about professional standards. It was a signal that the commission structure underpinning Nairobi's CRE transaction market was under scrutiny. Unregistered agents collecting commissions — a routine feature of the market for decades — are now exposed to EARB prosecution and, more significantly, to courts refusing to enforce their commission agreements.
                  </p>
                  <p>
                    For institutional investors, the practical implication is contract management rather than substantive legal change. Engagement letters with agents must specify EARB registration numbers. Commission agreements structured as finder's fees through unregistered introducer companies — a common workaround — carry enforceability risk that has become non-trivial. Where a transaction's success depends on a specific agent relationship, verify their registration status before the mandate is formalised.
                  </p>
                  <p>
                    The EARB has indicated its intention to extend licensing requirements to institutional real estate advisory firms operating in Kenya without local registration. Firms headquartered in London, Dubai, or Johannesburg that advise on Kenyan acquisitions without a locally registered entity should monitor this development. It is not yet law, but the direction of travel is clear.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-5" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Investor Implications:{' '}
                  <em className="not-italic" style={{ color: '#8B7355' }}>Structuring for the Current Environment</em>
                </h2>
                <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                  <p>
                    The regulatory environment in Kenya does not create uniform risk across all investor types. It creates specific, manageable risks that can be addressed through proper structuring and informed legal counsel. The investors who find Kenya's regulatory complexity prohibitive are typically those approaching it with standardised processes designed for jurisdictions with fully digitised, transparent land registries.
                  </p>
                  <p>
                    Three practical actions for institutional investors active in Nairobi CRE. First: commission title searches that go beyond the standard Land Registry search to include original grant records, historical subdivision approvals, and NLC status. Second: verify the EARB registration of every agent in the transaction chain before formalising commission arrangements. Third: engage a Kenya-based tax adviser — not a generalist regional firm — to model the full CGT and stamp duty position before signing heads of terms.
                  </p>
                  <p>
                    None of this is extraordinary due diligence by international standards. It is the minimum required by the current Kenyan regulatory environment.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-normal mb-8" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                  Regulatory{' '}
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
                  Kenya's regulatory framework rewards investors who engage with it precisely — not those who assume it mirrors more mature jurisdictions. The land title issues, tax enforcement changes, and agency regulations are navigable. The investors who fail in this market are overwhelmingly those who underinvested in local legal and compliance infrastructure. The structural return opportunity does not disappear when you price the complexity correctly. It narrows, but it remains.
                </p>
                <p className="text-[11px] font-light mt-4" style={{ color: '#8B7355' }}>
                  This analysis is for informational purposes only and does not constitute legal or investment advice. Murivest Realty Group recommends engaging qualified Kenyan legal counsel for all property transactions.
                </p>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
              <div className="p-8 sticky top-8" style={{ backgroundColor: '#1B4332' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>
                  Advisory Services
                </p>
                <h3 className="font-serif text-xl font-normal text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Regulatory Structuring Support
                </h3>
                <p className="text-[13px] font-light leading-[1.8] mb-6" style={{ color: '#94A3B8' }}>
                  Murivest coordinates legal, tax, and compliance advisory for institutional clients navigating Kenyan CRE acquisitions. We do not replace counsel — we ensure the right counsel is in place.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 px-6 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#8B7355' }}
                >
                  Discuss a Transaction
                </Link>
              </div>

              <div className="p-8" style={{ border: '1px solid #E5E2DC', backgroundColor: '#FFFFFF' }}>
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>
                  Related Research
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Kenya Economic Outlook 2026', href: '/kenya-economic-outlook' },
                    { title: 'Nairobi Sector Performance Analysis', href: '/sector-performance' },
                    { title: 'Foreign Ownership Structures — Kenya', href: '/research/kenya-foreign-ownership' },
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
                <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-5" style={{ color: '#8B7355' }}>
                  Key Tax Rates — Kenya
                </p>
                {[
                  { item: 'Capital Gains Tax', rate: '15% on net gain' },
                  { item: 'Stamp Duty (Transfer)', rate: '4% of market value' },
                  { item: 'Stamp Duty (Lease)', rate: '1–2% depending on term' },
                  { item: 'Dividend WHT (Non-Resident)', rate: '15%' },
                  { item: 'Interest WHT', rate: '15%' },
                  { item: 'Management Fee WHT', rate: '20%' },
                ].map(({ item, rate }) => (
                  <div key={item} className="py-3 flex justify-between" style={{ borderBottom: '1px solid #E5E2DC' }}>
                    <span className="text-[12px] font-light" style={{ color: '#5A5A5A' }}>{item}</span>
                    <span className="text-[12px] font-medium" style={{ color: '#8B7355' }}>{rate}</span>
                  </div>
                ))}
                <p className="text-[10px] font-light mt-3" style={{ color: '#8B7355' }}>
                  Rates subject to change. Verify with qualified Kenyan tax counsel before transacting.
                </p>
              </div>
            </aside>
          </div>
        </article>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#3F3F3F' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Engage Murivest</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Transaction-Grade{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Regulatory Advisory</em>
            </h2>
            <p className="text-base font-light mb-10 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Murivest coordinates legal, tax, and compliance structuring for institutional investors entering the Kenyan CRE market. Engagements are bespoke, confidential, and outcome-focused.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sell" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                Submit a Property
              </Link>
              <Link href="/kenya-economic-outlook" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #8B7355', color: '#8B7355' }}>
                Read Macro Outlook
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}