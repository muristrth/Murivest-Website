import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, Scale, ArrowRight, Search, Building2, Gavel, Receipt, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal & Regulatory Framework | Commercial Real Estate Investment Kenya | Murivest',
  description: 'Institutional-grade legal analysis for commercial real estate in Kenya. Ownership structures, title verification, tax, financing, and regulatory consents — structured for accredited investors and family offices.',
  keywords: 'Kenya property law, foreign ownership commercial real estate Kenya, stamp duty Kenya, capital gains tax Kenya, POCAMLA, title verification Kenya, land act 2012, CMA REIT regulations, due diligence real estate Kenya, Murivest legal',
  openGraph: {
    title: 'Legal & Regulatory Framework | Kenya Commercial Real Estate | Murivest',
    description: 'How foreign capital, family offices, and institutional investors structure commercial property holdings in Kenya. Legal architecture, tax, and compliance.',
    type: 'website',
    locale: 'en_KE',
  },
  alternates: { canonical: 'https://murivest.co.ke/legal-compliance' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://murivest.co.ke/legal-compliance',
      name: 'Legal & Regulatory Framework | Commercial Real Estate Kenya | Murivest',
      description: 'Institutional legal compliance for commercial real estate — foreign ownership, title structures, tax, financing, and regulatory consents.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.co.ke' },
          { '@type': 'ListItem', position: 2, name: 'Legal Framework', item: 'https://murivest.co.ke/legal-compliance' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a foreign company own commercial property in Kenya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, under a leasehold title of up to 99 years. Freehold ownership is restricted to Kenyan citizens. Leasehold interests are mortgageable, transferable, and widely used by foreign institutional investors.'
          },
        },
        {
          '@type': 'Question',
          name: 'What is the stamp duty on commercial property transactions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4% of the consideration or market value (whichever is higher) for urban properties; 2% for rural. Payable within 30 days of execution. Stamp duty is a transaction cost, not a recurring tax.'
          },
        },
        {
          '@type': 'Question',
          name: 'What is the capital gains tax rate on property disposal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '15% on the net gain (proceeds less adjusted cost basis). Listed REIT interests are exempt. Proper SPV structuring can optimise the effective rate, especially for exit via share sale.'
          },
        },
        {
          '@type': 'Question',
          name: 'Is a Land Control Board consent required for urban commercial property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, no. Agricultural land transactions require Land Control Board consent. Commercial urban transactions in gazetted areas typically proceed without it, using standard transfer instruments.'
          },
        },
        {
          '@type': 'Question',
          name: 'What are the key regulatory approvals for a commercial development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Key approvals include: an Environmental Impact Assessment licence from NEMA, change of user (if applicable) from County Government, development permission from the County, and National Construction Authority registration for the contractor.'
          },
        },
      ],
    },
  ],
};

const primaryLegislation = [
  {
    Icon: Scale,
    label: 'Land Act 2012',
    title: 'Foundation Statute',
    body: 'Classifies land as public, community, or private. Restricts non‑citizen freehold ownership. Commercial investors operate on leasehold titles registered under the Land Registration Act 2012, with secure, mortgageable interests.',
  },
  {
    Icon: Shield,
    label: 'Capital Markets Act',
    title: 'CMA REIT Regulations',
    body: 'The Capital Markets Authority regulates Real Estate Investment Trusts under the 2013 Regulations. Both Development and Income REITs are recognised, with minimum capital and distribution requirements.',
  },
  {
    Icon: Receipt,
    label: 'Revenue Authority',
    title: 'KRA Tax Framework',
    body: 'Governs stamp duty (4% urban / 2% rural), capital gains tax (15%), withholding tax on rental income (30% corporate rate, subject to treaty relief), and VAT on commercial leases.',
  },
  {
    Icon: FileText,
    label: 'Anti‑Money Laundering',
    title: 'POCAMLA 2009',
    body: 'Source‑of‑funds documentation is mandatory for all transactions above KES 1 million. Enhanced due diligence applies. Murivest screens all mandates against UN, OFAC, and EU sanctions lists.',
  },
];

const titleStructures = [
  {
    type: 'Leasehold (99‑year)',
    suitedFor: 'Foreign companies, institutional funds',
    pros: 'Available to non‑citizens. Mortgageable. Freely transferable.',
    cons: 'Lease renewal required at term end. Reversion risk if not renewed.',
    taxNote: 'Stamp duty 4% (urban). CGT 15% on disposal. Land rent payable annually.',
  },
  {
    type: 'Freehold (Absolute)',
    suitedFor: 'Kenyan citizens and locally owned entities',
    pros: 'Perpetual ownership. No annual land rent (outside leasehold). Full rights.',
    cons: 'Cannot be held directly by foreign nationals. Indirect structures possible.',
    taxNote: 'Stamp duty 4%. CGT 15%. Property rates to county.',
  },
  {
    type: 'REIT (Listed/Unlisted)',
    suitedFor: 'Pension funds, institutional portfolios',
    pros: 'CGT exemption on listed REITs. Regulatory oversight. Liquidity via exchange.',
    cons: 'Minimum asset thresholds. Distribution requirements. Manager licensing.',
    taxNote: 'CGT exempt (listed). Withholding tax on distributions.',
  },
  {
    type: 'SPV / Private Company',
    suitedFor: 'Co‑investors, family offices, PE funds',
    pros: 'Flexible capital stack. Ring‑fenced liability. Efficient exit via share sale.',
    cons: 'Annual filings. Transfer pricing rules. Substance requirements.',
    taxNote: 'Corporate tax 30%. Tax treaty relief may reduce WHT on dividends.',
  },
];

const dueDiligenceSteps = [
  { n: '01', title: 'Title Search', body: 'Official search at the Lands Registry for root of title, encumbrances, caveats, and pending litigation. Confirms seller’s capacity to transfer.' },
  { n: '02', title: 'Survey & Boundaries', body: 'Verification of deed plan against ground survey. Encroachment, access easements, and zoning compliance are checked.' },
  { n: '03', title: 'Environmental Audit', body: 'Phase‑1 environmental site assessment. For development, a full EIA licence from NEMA is required before construction.' },
  { n: '04', title: 'Rates & Rent Clearance', body: 'Confirmation of up‑to‑date land rent to National Land Commission and property rates to the County Government. Outstanding arrears become a charge on the title.' },
  { n: '05', title: 'Regulatory Consents', body: 'Change of user, development permission, and NCA registration (where applicable). LCB consent is not required for most urban commercial transfers.' },
  { n: '06', title: 'KYC / AML', body: 'Beneficial ownership disclosure, PEP screening, and sanctions list verification. Source‑of‑funds evidence for the consideration.' },
];

const taxRates = [
  { tax: 'Stamp Duty (Urban)', rate: '4%', remark: 'Of consideration or market value, whichever is higher. Due within 30 days.' },
  { tax: 'Stamp Duty (Rural)', rate: '2%', remark: 'Applies to agricultural and certain non‑urban properties.' },
  { tax: 'Capital Gains Tax', rate: '15%', remark: 'On net gain. Exempt for listed REITs and certain intra‑group transfers.' },
  { tax: 'Withholding Tax on Rent', rate: '30%', remark: 'Corporate rate. May be reduced under a double taxation agreement.' },
  { tax: 'VAT on Commercial Lease', rate: '16%', remark: 'Applicable if landlord is VAT registered and property is commercial.' },
  { tax: 'Corporate Income Tax', rate: '30%', remark: 'For resident companies. SPV profits are subject to this unless treaty relief applies.' },
];

const financingInstruments = [
  {
    title: 'Legal Charge',
    body: 'Registered against the leasehold or freehold title. Requires consent from the head lessor (for leaseholds) and a formal charge document. Gives the lender power of sale upon default.',
  },
  {
    title: 'Debenture',
    body: 'Creates a floating charge over the borrower’s assets, including the property. Can be crystallised into a fixed charge. Common in SPV financing structures.',
  },
  {
    title: 'Share Charge / Pledge',
    body: 'Lender takes security over the shares of the property‑owning SPV. Enables enforcement through share transfer rather than a property sale, often faster.',
  },
  {
    title: 'Assignment of Leases & Rents',
    body: 'Lender takes an assignment of the rental income as continuing security. Used when the property generates a stabilised income stream.',
  },
];

const disputeSection = [
  {
    title: 'Arbitration',
    body: 'Commercial leases often provide for arbitration under the Nairobi Centre for International Arbitration (NCIA) or the LCIA. Awards are enforceable under the New York Convention.',
  },
  {
    title: 'Court Litigation',
    body: 'Environment and Land Court has exclusive jurisdiction over land matters. Judgments are subject to appeal. Foreign judgments may be enforced under the Foreign Judgments (Reciprocal Enforcement) Act.',
  },
  {
    title: 'Mediation',
    body: 'Court‑annexed mediation is mandatory for certain civil cases. A cost‑effective mechanism for landlord‑tenant disputes and boundary issues.',
  },
];

export default function LegalCompliancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

        {/* ── Hero ── */}
        <section className="relative bg-[#1B4332] text-white overflow-hidden pt-32 pb-28 px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#8B7355] hover:text-amber-400 transition-colors mb-12">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-amber-500">Legal & Regulatory</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              Institutional<br /><span className="italic text-amber-200/90">Legal Architecture</span>
            </h1>
            <p className="max-w-2xl text-slate-400 text-base md:text-lg font-light leading-relaxed border-l border-amber-500/30 pl-6 italic">
              Kenya’s commercial property legal framework is codified, mortgageable, and tested. Risk is not structural — it’s transactional. A disciplined structuring process eliminates most exposures before capital is deployed.
            </p>
          </div>
        </section>

        {/* ── Primary Legislation ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Regulatory Architecture</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Primary Legal<br /><span className="italic text-[#8B7355] font-light">Instruments</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E2DC]">
              {primaryLegislation.map(({ Icon, label, title, body }) => (
                <div key={title} className="bg-[#F8F7F4] p-8 md:p-10 group hover:bg-white transition-colors duration-500">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center flex-shrink-0 group-hover:border-[#8B7355] transition-colors duration-500">
                      <Icon className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-2">{label}</p>
                      <h3 className="text-lg font-serif text-[#2C2C2C] mb-4">{title}</h3>
                      <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                      <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ownership & Investment Structures ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Ownership Structures</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Title & Investment<br /><span className="italic text-[#8B7355] font-light">Vehicles</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="space-y-px bg-[#E5E2DC]">
              {titleStructures.map(({ type, suitedFor, pros, cons, taxNote }) => (
                <div key={type} className="bg-white grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-3 p-8 border-r border-[#E5E2DC]">
                    <h3 className="text-base font-serif text-[#2C2C2C] mb-2">{type}</h3>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355]">{suitedFor}</p>
                  </div>
                  <div className="md:col-span-3 p-8 border-r border-[#E5E2DC]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">Advantages</p>
                    <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{pros}</p>
                  </div>
                  <div className="md:col-span-3 p-8 border-r border-[#E5E2DC]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">Constraints</p>
                    <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{cons}</p>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">Tax Treatment</p>
                    <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{taxNote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Due Diligence & Title Verification ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Transaction Readiness</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Due Diligence &<br /><span className="italic text-[#8B7355] font-light">Title Verification</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
              {dueDiligenceSteps.map(({ n, title, body }) => (
                <div key={n} className="bg-[#F8F7F4] p-8 group hover:bg-white transition-colors duration-500">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] mb-4">{n}</p>
                  <h3 className="text-base font-serif text-[#2C2C2C] mb-4">{title}</h3>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                  <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tax & Fiscal Considerations ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Fiscal Architecture</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Tax & Revenue<br /><span className="italic text-[#8B7355] font-light">Compliance</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E2DC]">
                    <th className="py-4 pr-8 text-[11px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">Tax</th>
                    <th className="py-4 pr-8 text-[11px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">Rate</th>
                    <th className="py-4 text-[11px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {taxRates.map(({ tax, rate, remark }) => (
                    <tr key={tax} className="border-b border-[#E5E2DC] last:border-0">
                      <td className="py-4 pr-8 text-[13px] font-light text-[#2C2C2C]">{tax}</td>
                      <td className="py-4 pr-8 text-[13px] font-light tabular-nums">{rate}</td>
                      <td className="py-4 text-[13px] font-light text-[#5A5A5A]">{remark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#8B7355] mt-6 font-light">Rates are current as of 2026. Double taxation agreements with the investor’s home jurisdiction may reduce effective WHT and CGT rates. Obtain specific tax advice for each mandate.</p>
          </div>
        </section>

        {/* ── Financing & Security ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Capital Stack Security</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Financing &<br /><span className="italic text-[#8B7355] font-light">Security Instruments</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E2DC]">
              {financingInstruments.map(({ title, body }) => (
                <div key={title} className="bg-[#F8F7F4] p-8 group hover:bg-white transition-colors duration-500">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center flex-shrink-0 group-hover:border-[#8B7355] transition-colors duration-500">
                      <Landmark className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-[#2C2C2C] mb-4">{title}</h3>
                      <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                      <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dispute Resolution ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Risk Mitigation</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Dispute<br /><span className="italic text-[#8B7355] font-light">Resolution</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E2DC]">
              {disputeSection.map(({ title, body }) => (
                <div key={title} className="bg-white p-8 group hover:bg-[#F8F7F4] transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                    <h3 className="text-base font-serif text-[#2C2C2C]">{title}</h3>
                  </div>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Acquisition Process ── */}
        <section className="relative bg-[#F8F7F4]">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Transaction Workflow</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Acquisition<br /><span className="italic text-[#8B7355] font-light">Sequence</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
              {[
                { n: '01', title: 'Source of Funds', body: 'Documentary proof of capital origin required under POCAMLA. Institutional allocators may use audited accounts or fund prospectuses.' },
                { n: '02', title: 'KYC / AML', body: 'Full beneficial ownership disclosure. PEP screening. Sanctions list verification against UN, OFAC, and EU databases.' },
                { n: '03', title: 'Title & Survey', body: 'Registry search for encumbrances and caveats. Survey verification against deed plan. Environmental screening.' },
                { n: '04', title: 'Consents & Approvals', body: 'Change of user, development permission, NEMA licence (if required). LCB consent not required for most urban commercial transactions.' },
                { n: '05', title: 'Stamp Duty & Transfer', body: '4% stamp duty paid within 30 days. Transfer registered at Lands Registry. Title typically issued within 60–90 days.' },
                { n: '06', title: 'Post‑Acquisition', body: 'Annual land rent to NLC. Property rates to county. Rental income returns to KRA quarterly. Murivest manages all compliance.' },
              ].map(({ n, title, body }) => (
                <div key={n} className="bg-[#F8F7F4] p-8 group hover:bg-white transition-colors duration-500">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] mb-4">{n}</p>
                  <h3 className="text-base font-serif text-[#2C2C2C] mb-4">{title}</h3>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                  <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative bg-white">
          <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Legal FAQs</p>
            </div>
            <h2 className="text-3xl font-serif text-[#2C2C2C] mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { q: 'Can a foreign company hold freehold title?', a: 'No. Freehold is restricted to Kenyan citizens. Foreign companies use 99‑year leaseholds — mortgageable, transferable, and recognised by all lenders.' },
                { q: 'What are the key regulatory approvals for a commercial development?', a: 'NEMA environmental licence, county development permission, change of user (if needed), and NCA contractor registration. Requirements vary by project scale and location.' },
                { q: 'Is a Land Control Board consent required for urban property?', a: 'Generally, no. LCB consent applies to agricultural land. Commercial urban transactions in gazetted areas proceed without it.' },
                { q: 'How is a legal charge perfected?', a: 'The charge must be registered against the title. For leaseholds, head lessor consent is often required. Registration creates a priority right over the security.' },
                { q: 'What double taxation treaties does Kenya have?', a: 'Kenya has treaties with the UK, UAE, France, India, South Africa, and others. Treaty relief can reduce WHT on rent and dividends, and may affect CGT.' },
                { q: 'Can a foreign judgment be enforced in Kenya?', a: 'Yes, if the originating country is recognised under the Foreign Judgments (Reciprocal Enforcement) Act. Otherwise, the judgment may be sued upon as a debt in Kenyan courts.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-[#E5E2DC] p-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-4">Q</p>
                  <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-4 leading-snug">{q}</h3>
                  <div className="w-8 h-[1px] bg-[#E5E2DC] mb-4" />
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative bg-[#1B4332] text-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-[#8B7355]" />
                  <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Legal Advisory</p>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-6">
                  Structuring Review<br /><span className="italic text-amber-200/90 font-light">For Your Mandate</span>
                </h2>
                <p className="text-[15px] leading-[1.8] text-slate-400 font-light max-w-lg">
                  Murivest works with registered Kenyan advocates and tax counsel on every mandate. Legal review covers title verification, ownership structure optimisation, and full post‑acquisition compliance.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#8B7355] text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-amber-600 transition-colors duration-500">
                  Request Legal Review <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/regulatory-updates" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white/5 transition-colors duration-500">
                  Regulatory Updates
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}