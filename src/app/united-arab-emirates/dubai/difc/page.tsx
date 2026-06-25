'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe,
  ShieldAlert,
  Target,
  TrendingUp,
  Users,
  Phone,
  MessageCircle,
  Download,
  Award,
  Building2,
  MapPin,
  DollarSign,
  BarChart3,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================================================
// STRUCTURED DATA GENERATORS
// ============================================================================

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/dubai/difc#local-business',
    name: 'Murivest DIFC – Dubai International Financial Centre Real Estate Advisory',
    description:
      'Leading institutional commercial real estate advisor for DIFC. Specializing in premium office investment, financial services headquarters, and professional firm space within the world\'s premier common-law financial jurisdiction.',
    url: 'https://murivest.com/united-arab-emirates/dubai/difc',
    telephone: '+971 4 XXX XXXX',
    email: 'dubai@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DIFC, Gate District, Dubai, UAE',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '0000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.0938,
      longitude: 55.1693,
    },
    areaServed: {
      '@type': 'Place',
      name: 'DIFC, Dubai, United Arab Emirates',
    },
    knowsAbout: [
      'Common-Law Office Investment',
      'Financial Services Real Estate',
      'Premium Office Space',
      'Professional Services Real Estate',
      'Institutional Capital Deployment',
    ],
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'DIFC Dubai – Institutional Financial Centre Investment Guide',
    description:
      'Comprehensive guide to DIFC (Dubai International Financial Centre). Investment intelligence, market data, and institutional real estate advisory from Murivest.',
    url: 'https://murivest.com/united-arab-emirates/dubai/difc',
    mainEntity: {
      '@type': 'Place',
      name: 'DIFC',
      alternateName: ['Dubai International Financial Centre', 'DIFC Dubai'],
      description:
        'The world\'s leading international financial centre in the Middle East. Home to 4,000+ financial and professional services firms operating under common-law jurisdiction.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.0938,
        longitude: 55.1693,
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is DIFC a good investment for institutional office capital?',
      answer:
        'Yes. DIFC is the world\'s leading international financial centre in the Middle East, with 4,000+ financial and professional services firms. Core office yields: 6–7%. Sub-5% vacancy, 95%+ investment-grade tenants. DIFC common-law jurisdiction ensures contract enforceability and legal certainty unmatched in the region.',
    },
    {
      question: 'What makes DIFC different from other Dubai office markets?',
      answer:
        'DIFC operates under common-law jurisdiction (UK-based legal system), not UAE civil law. This provides institutional-grade contract enforceability, dispute resolution clarity, and legal certainty. DIFC tenants are primarily financial services and professional firms (high covenant quality). Supply is constrained (4M+ sq ft vs 20M+ in Business Bay). Rents: AED 180–220/sq ft.',
    },
    {
      question: 'What is the typical office lease term in DIFC?',
      answer:
        'Standard lease: 3–5 years. Institutional leases: 5–10 years. Rent escalations: 2–3% annually. Fit-out contributions: Landlord typically provides AED 150–200/sq ft. DIFC leases are governed by DIFC common-law framework, providing legal certainty.',
    },
    {
      question: 'Can foreign investors own office property in DIFC?',
      answer:
        'Yes. DIFC permits 100% foreign ownership of office real estate. Property is held under DIFC law (not UAE law). Legal title is clear and readily enforceable. Murivest advises on optimal DIFC ownership structures and tax efficiency.',
    },
    {
      question: 'What are yield expectations for DIFC office investment?',
      answer:
        'Prime Grade A DIFC office: 6–7% net yield. Secondary office (lower covenant): 6.5–8%. Yields are compressed vs Business Bay due to supply constraints, sub-5% vacancy, and investment-grade tenant base. Core investors prioritize stability over yield; DIFC offers lowest risk in UAE.',
    },
    {
      question: 'What is the occupancy rate in DIFC?',
      answer:
        'Prime DIFC office: 95%+ occupancy. Consistently lowest vacancy in UAE (sub-5%). Strong absorption from multinational financial services firms, professional services, and fintech companies. Occupancy resilience supports stable yields.',
    },
    {
      question: 'What types of firms occupy DIFC office space?',
      answer:
        'Investment banks, asset managers, law firms, accounting firms, insurance companies, fintech startups, and regional headquarters of global financial institutions. 4,000+ registered companies, 30,000+ employees. High covenant quality and lease durability.',
    },
    {
      question: 'How does Murivest source DIFC office investment opportunities?',
      answer:
        'Direct relationships with DIFC Authority, major developers (Emaar), and property managers. Off-market sourcing before public marketing. Proprietary market intelligence on tenant demand, rent trends, and capital flows. Fast deal cycles (30–45 days from LOI to close).',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
      { '@type': 'ListItem', position: 2, name: 'United Arab Emirates', item: 'https://murivest.com/united-arab-emirates' },
      { '@type': 'ListItem', position: 3, name: 'Dubai', item: 'https://murivest.com/united-arab-emirates/dubai' },
      { '@type': 'ListItem', position: 4, name: 'DIFC', item: 'https://murivest.com/united-arab-emirates/dubai/difc' },
    ],
  };
}

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14 max-w-3xl">
      <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
        {eyebrow}
      </p>
      <h2 className="font-display text-[28px] md:text-[36px] lg:text-[40px] leading-[1.1] text-[#1A1A1A] mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DIFCPage() {
  const whyInvestStats = [
    {
      number: '4,000+',
      label: 'Financial & Professional Services Firms',
      description: 'Multinational banks, asset managers, law firms, and insurers',
    },
    {
      number: '<5%',
      label: 'Vacancy Rate',
      description: 'Lowest in UAE; consistent supply-demand imbalance favors yields',
    },
    {
      number: '95%+',
      label: 'Investment-Grade Tenants',
      description: 'World-class covenant quality; minimal credit risk',
    },
    {
      number: 'Common Law',
      label: 'DIFC Jurisdiction',
      description: 'UK-based legal system; institutional-grade contract enforceability',
    },
  ];

  const investmentMandates = [
    {
      title: 'Core Office Portfolio',
      description:
        'Prime Grade A towers with investment-grade financial services tenants. 5–7 year hold, 6–7% target yield. Lowest risk in UAE office markets.',
      mandate: 'Core',
    },
    {
      title: 'Core-Plus Premium Office',
      description:
        'Secondary DIFC offices with upside through tenant upgrading or lease restructuring. 7–10 year hold, 7–8% IRR. Moderate risk with yield upside.',
      mandate: 'Core+',
    },
    {
      title: 'Financial Services HQ',
      description:
        'Bespoke office solutions for multinational financial institutions. 10–15 year leases, 5–6% yield. Long-term capital stability.',
      mandate: 'Strategic',
    },
    {
      title: 'Occupier Advisory',
      description:
        'Corporate relocation, expansion, and lease optimization for multinational firms. Advising 200+ financial services occupiers on space requirements.',
      mandate: 'Occupier',
    },
  ];

  const marketMetrics = [
    {
      metric: 'Average Prime Office Rent',
      value: 'AED 190/sq ft',
      trend: '+2.3% YoY',
      detail: 'Grade A institutional towers',
    },
    {
      metric: 'Occupancy Rate',
      value: '95.8%',
      trend: 'Historically stable',
      detail: 'Among highest in MENA',
    },
    {
      metric: 'Prime Yield',
      value: '6.4%',
      trend: 'Stable',
      detail: 'Investment-grade stability',
    },
    {
      metric: 'New Supply',
      value: 'Minimal',
      trend: 'Supply-constrained',
      detail: '200K+ sq ft expected by 2027',
    },
  ];

  const institutionalTenants = [
    'Goldman Sachs',
    'Morgan Stanley',
    'HSBC',
    'Citi',
    'Deutsche Bank',
    'Barclays',
    'JP Morgan',
    'BlackRock',
    'Deloitte',
    'EY',
  ];

  const principalDevelopers = ['Emaar Properties', 'DIFC Authority', 'Dubai Properties'];

  const investmentOpportunities = [
    {
      title: 'Iconic Prime Office Tower',
      type: 'Grade A Core Investment',
      location: 'Gate Village, DIFC',
      yield: '6.6%',
      highlights: [
        'Goldman Sachs & Morgan Stanley tenants',
        'Sub-3% vacancy',
        'Long-term investment-grade leases',
      ],
      price: 'AED 850M+',
    },
    {
      title: 'Premium Mixed Office Portfolio',
      type: 'Core-Plus Multi-Building',
      location: 'DIFC Financial District',
      yield: '7.1%',
      highlights: [
        '3 towers, 450,000 sq ft',
        'Diverse financial services tenant base',
        'Rent growth 2–3% annually',
      ],
      price: 'AED 1.2B+',
    },
    {
      title: 'Secondary Office Repositioning',
      type: 'Value-Add Opportunity',
      location: 'DIFC Outer Perimeter',
      yield: '8.2%',
      highlights: [
        '300,000 sq ft office',
        'Upgrading potential (tenant mix)',
        'Capital expenditure: AED 50M',
      ],
      price: 'AED 380M+',
    },
    {
      title: 'Multinational HQ Development',
      type: 'Institutional Ground Lease',
      location: 'DIFC Prime Location',
      yield: '5.8%',
      highlights: [
        'Long-term anchor tenant (10–15 years)',
        'Bespoke design for global financial firm',
        'Stable, predictable income',
      ],
      price: 'AED 520M+',
    },
  ];

  const difc_infrastructure = [
    {
      category: 'Financial Infrastructure',
      items: [
        'DIFC Courts & legal system',
        'DFSA (financial regulator)',
        'International Banking facilities',
        'Trading & market infrastructure',
      ],
    },
    {
      category: 'Professional Services',
      items: [
        'Top 10 global law firms',
        'Big Four accounting firms',
        'Executive recruitment centres',
        'Professional development facilities',
      ],
    },
    {
      category: 'Technology & Innovation',
      items: [
        'Fintech accelerators',
        'Blockchain & crypto hubs',
        'Venture capital firms',
        'Innovation laboratories',
      ],
    },
    {
      category: 'Business Amenities',
      items: [
        'Premium dining (30+ restaurants)',
        '5-star hotel integration',
        'Member clubs & lounges',
        'State-of-art fitness facilities',
      ],
    },
  ];

  const researchReports = [
    { title: 'DIFC Office Market Q2 2024 Report', link: '/united-arab-emirates/research/difc-office-market' },
    { title: 'Financial Services Real Estate Investment Guide', link: '/united-arab-emirates/research/financial-services' },
    { title: 'Common-Law Jurisdiction & Legal Framework', link: '/united-arab-emirates/research/difc-legal' },
    { title: 'DIFC Tenant Covenant Analysis', link: '/united-arab-emirates/research/difc-covenant' },
    { title: 'MENA Financial Centre Comparison', link: '/united-arab-emirates/research/mena-comparison' },
    { title: 'DIFC Capital Markets Report', link: '/united-arab-emirates/research/difc-capital-markets' },
  ];

  const faqs = [
    {
      question: 'Is DIFC a good investment for institutional office capital?',
      answer:
        'Yes. DIFC is the world\'s leading international financial centre in the Middle East, with 4,000+ financial and professional services firms. Core office yields: 6–7%. Sub-5% vacancy, 95%+ investment-grade tenants. DIFC common-law jurisdiction ensures contract enforceability and legal certainty unmatched in the region.',
    },
    {
      question: 'What makes DIFC different from other Dubai office markets?',
      answer:
        'DIFC operates under common-law jurisdiction (UK-based legal system), not UAE civil law. This provides institutional-grade contract enforceability, dispute resolution clarity, and legal certainty. DIFC tenants are primarily financial services and professional firms (high covenant quality). Supply is constrained (4M+ sq ft vs 20M+ in Business Bay).',
    },
    {
      question: 'What is the typical office lease term in DIFC?',
      answer:
        'Standard lease: 3–5 years. Institutional leases: 5–10 years. Rent escalations: 2–3% annually. Fit-out contributions: Landlord typically provides AED 150–200/sq ft. DIFC leases are governed by DIFC common-law framework.',
    },
    {
      question: 'Can foreign investors own office property in DIFC?',
      answer:
        'Yes. DIFC permits 100% foreign ownership of office real estate. Property is held under DIFC law (not UAE law). Legal title is clear and readily enforceable. Murivest advises on optimal DIFC ownership structures and tax efficiency.',
    },
    {
      question: 'What are yield expectations for DIFC office investment?',
      answer:
        'Prime Grade A DIFC office: 6–7% net yield. Secondary office: 6.5–8%. Yields are compressed vs Business Bay due to supply constraints, sub-5% vacancy, and investment-grade tenant base. Core investors prioritize stability over yield; DIFC offers lowest risk in UAE.',
    },
    {
      question: 'What is the occupancy rate in DIFC?',
      answer:
        'Prime DIFC office: 95%+ occupancy. Consistently lowest vacancy in UAE (sub-5%). Strong absorption from multinational financial services firms. Occupancy resilience supports stable yields.',
    },
    {
      question: 'What types of firms occupy DIFC office space?',
      answer:
        'Investment banks, asset managers, law firms, accounting firms, insurance companies, fintech startups, and regional headquarters of global financial institutions. 4,000+ registered companies, 30,000+ employees. High covenant quality and lease durability.',
    },
    {
      question: 'How does Murivest source DIFC office investment opportunities?',
      answer:
        'Direct relationships with DIFC Authority, major developers (Emaar), and property managers. Off-market sourcing before public marketing. Proprietary market intelligence on tenant demand, rent trends, and capital flows. Fast deal cycles (30–45 days from LOI to close).',
    },
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      {/* ====== STRUCTURED DATA ====== */}
      <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      <Script id="schema-area-page" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAreaPageSchema()) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema()) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }} />

      {/* ====== HERO SECTION ====== */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
          alt="DIFC Dubai financial centre"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/85 via-[#1A1A1A]/65 to-[#1A1A1A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/15 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
              World-Class Financial Centre
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-4xl text-white">
              DIFC Dubai
              <br />
              <span className="text-[#B8956B]">Institutional Excellence & Common Law</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              The world's leading international financial centre in the Middle East. Home to 4,000+ financial and professional services firms operating under common-law jurisdiction with unmatched legal certainty and contract enforceability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide hover:border-white/60 transition-colors"
                style={{ minHeight: 48 }}
              >
                Speak With An Advisor
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Registered Firms', value: '4,000+' },
                  { label: 'Occupancy Rate', value: '95%+' },
                  { label: 'Investment-Grade Tenants', value: '95%+' },
                  { label: 'Common-Law Jurisdiction', value: 'Yes' },
                ].map((stat) => (
                  <div key={stat.label} className="border-b border-white/10 pb-4 last:border-b-0">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2">
                      {stat.label}
                    </p>
                    <p className="font-display text-xl md:text-2xl text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== WHY INVEST ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Why DIFC"
            title="Why Institutional Capital Chooses DIFC"
            description="DIFC is the only financial centre in the Middle East operating under common-law jurisdiction. Lowest vacancy, highest covenant quality, and institutional-grade legal certainty."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {whyInvestStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 bg-[#FAF9F6] border border-[#1A1A1A]/5 hover:border-[#B8956B] transition-colors"
              >
                <p className="font-display text-2xl md:text-3xl text-[#1B4332] mb-2">{stat.number}</p>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{stat.label}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Investment Mandates */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {investmentMandates.map((mandate) => (
              <div
                key={mandate.title}
                className="p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-[#B8956B]/10 rounded-full">
                  <p className="text-xs font-semibold text-[#B8956B] uppercase tracking-wider">
                    {mandate.mandate}
                  </p>
                </div>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{mandate.title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{mandate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MARKET INTELLIGENCE ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Market Data"
            title="DIFC Market Intelligence & Performance"
            description="Current market metrics from Murivest's proprietary research on DIFC office performance."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketMetrics.map((intel) => (
              <motion.div
                key={intel.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 bg-white border border-[#1A1A1A]/5 rounded-lg"
              >
                <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-3">
                  {intel.metric}
                </p>
                <p className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-1">{intel.value}</p>
                <p className="text-xs text-[#B8956B] font-semibold mb-3">{intel.trend}</p>
                <p className="text-xs text-[#4A4A4A]">{intel.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TENANTS & DEVELOPERS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Institutional Tenants" title="Investment-Grade Firms in DIFC" />
              <div className="grid grid-cols-2 gap-3">
                {institutionalTenants.map((tenant) => (
                  <div
                    key={tenant}
                    className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium hover:border-[#B8956B] transition-colors"
                  >
                    {tenant}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Development Partners" title="Principal DIFC Developers & Operators" />
              <div className="grid grid-cols-2 gap-3">
                {principalDevelopers.map((developer) => (
                  <div
                    key={developer}
                    className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium hover:border-[#B8956B] transition-colors"
                  >
                    {developer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED OPPORTUNITIES ====== */}
      <section id="opportunities" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Investment Opportunities"
            title="Curated DIFC Office Opportunities"
            description="Institutional-grade investment opportunities sourced and underwritten by Murivest."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {investmentOpportunities.map((opp, idx) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden border border-[#1A1A1A]/5 bg-white hover:border-[#B8956B] hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-12 bg-[#B8956B]" />

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-2">
                        {opp.type}
                      </p>
                      <h3 className="font-display text-xl text-[#1A1A1A] mb-1">{opp.title}</h3>
                      <p className="text-sm text-[#4A4A4A] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#B8956B]" />
                        {opp.location}
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Net Yield
                      </p>
                      <p className="font-display text-lg text-[#1B4332]">{opp.yield}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 pb-6 border-b border-[#1A1A1A]/5">
                    {opp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-[#4A4A4A]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">Price</p>
                    <p className="font-display text-lg text-[#1A1A1A]">{opp.price}</p>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                    Request Investment Memorandum
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INFRASTRUCTURE & AMENITIES ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Infrastructure"
            title="DIFC Institutional Infrastructure"
            description="World-class legal, regulatory, and business infrastructure supporting financial services excellence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {difc_infrastructure.map((section) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <h3 className="font-display text-lg text-[#1A1A1A] mb-5">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#4A4A4A]">
                      <Lock className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MURIVEST ADVISORY ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400km] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Why Murivest"
                title="Institutional Advisory for DIFC Investors"
              />
              <ul className="space-y-4">
                {[
                  'Proprietary rent data and yield comparables for every DIFC tower',
                  'Direct relationships with DIFC Authority and major developers',
                  'Off-market sourcing: access to non-marketed investment opportunities',
                  'Financial services expertise: tenant covenant assessment',
                  'Global capital platform for placement to institutional investors',
                  'Average deal cycle: 30–45 days from LOI to close',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-12 bg-white border border-[#1A1A1A]/5 rounded-lg"
            >
              <div className="mb-6 p-4 bg-[#B8956B]/10 rounded-lg border-l-4 border-[#B8956B]">
                <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-1">
                  Services
                </p>
                <p className="text-sm text-[#1A1A1A] font-medium">
                  Investment Advisory • Capital Markets • Occupier Solutions • Market Research
                </p>
              </div>

              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                Discuss Your DIFC Investment Strategy
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Whether acquiring a flagship DIFC office tower or diversifying into core-plus opportunities, Murivest provides independent advisory backed by proprietary market intelligence and deep DIFC relationships.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors"
              >
                Schedule Advisory Call
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== LEAD GEN ====== */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg"
            >
              <Download className="w-8 h-8 text-[#B8956B] mb-4" />
              <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">
                DIFC Office Investment Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                140-page institutional research covering market overview, tower-by-tower analysis, tenant covenant assessment, yield trends, and capital deployment strategy. Includes Murivest proprietary pricing and underwriting frameworks.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#8A8A8A] mt-4">
                Your email will be added to Murivest DIFC research updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-12 bg-[#1B4332] text-white border border-[#1B4332] rounded-lg"
            >
              <Phone className="w-8 h-8 text-[#B8956B] mb-4" />
              <h3 className="font-display text-2xl mb-3">Speak with Our Dubai Team</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                Schedule a 30-minute discovery call with a Murivest DIFC specialist. We'll discuss your institutional mandate and introduce you to available opportunities.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="tel:+97144xxxxxx"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1B4332] text-sm font-semibold hover:bg-[#FAF9F6] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Dubai Office
                </Link>
                <Link
                  href="https://wa.me/971xxxxxxxxx"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-semibold hover:border-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== RESEARCH ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Research & Reports" title="Market Intelligence & Analysis" />
          <div className="grid sm:grid-cols-2 gap-3">
            {researchReports.map((report) => (
              <Link
                key={report.link}
                href={report.link}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-white p-4 text-sm text-[#4A4A4A] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
              >
                <span>{report.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 bg-[#FAF9F6] border border-[#1A1A1A]/5 cursor-pointer rounded-lg"
              >
                <summary className="list-none font-display text-base md:text-lg text-[#1A1A1A] pr-8 font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#1B4332] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">
            Institutional Commercial Real Estate Advisory
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in DIFC with Confidence
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest provides independent, research-backed advisory for institutional capital deployment in DIFC. From market intelligence to deal sourcing to transaction execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:dubai@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Start Your DIFC Investment Discussion
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/united-arab-emirates/dubai"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              style={{ minHeight: 48 }}
            >
              Return to Dubai Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}