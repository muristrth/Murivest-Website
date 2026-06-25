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
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================================================
// STRUCTURED DATA GENERATORS
// ============================================================================

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/dubai/jebel-ali#local-business',
    name: 'Murivest Jebel Ali – Industrial & Logistics Real Estate Advisory',
    description:
      'Leading institutional real estate advisor for Jebel Ali industrial, logistics, and port-adjacent property. Specializing in warehousing, fulfilment centres, cold storage, and port-facing industrial assets.',
    url: 'https://murivest.com/united-arab-emirates/dubai/jebel-ali',
    telephone: '+971 4 XXX XXXX',
    email: 'dubai@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jebel Ali, Dubai, UAE',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '0000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.0076,
      longitude: 55.0566,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Jebel Ali, Dubai, United Arab Emirates',
    },
    knowsAbout: [
      'Industrial Real Estate',
      'Logistics & Warehousing',
      'E-commerce Fulfilment',
      'Cold Storage Investment',
      'Port-Adjacent Property',
      'Supply Chain Real Estate',
    ],
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'Jebel Ali – Industrial & Logistics Investment Guide',
    description:
      'Comprehensive guide to Jebel Ali, Dubai. Industrial real estate, logistics property, and institutional advisory for supply chain capital deployment.',
    url: 'https://murivest.com/united-arab-emirates/dubai/jebel-ali',
    mainEntity: {
      '@type': 'Place',
      name: 'Jebel Ali',
      description:
        'The Middle East\'s premier industrial and logistics hub. Anchored by Jebel Ali Port (15M+ TEU), JAFZA free zone (7,000+ companies), and 30M+ sq ft of industrial space.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.0076,
        longitude: 55.0566,
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Jebel Ali a good investment for industrial real estate?',
      answer:
        'Yes. Jebel Ali is the world\'s leading port in terms of container traffic (15M+ TEU annually) and anchors the Middle East\'s largest free zone (JAFZA: 7,000+ companies). Industrial property yields: 7–9%. Strong occupancy growth (5–7% YoY) driven by e-commerce and logistics expansion.',
    },
    {
      question: 'What types of industrial property are available in Jebel Ali?',
      answer:
        'Standard warehousing (5–15,000 sq ft units), large-format fulfillment centres (50,000–200,000 sq ft), cold storage and temperature-controlled facilities, and port-adjacent industrial space. Rents range AED 35–70/sq ft depending on specification and location.',
    },
    {
      question: 'What is the occupancy rate for industrial property in Jebel Ali?',
      answer:
        'Industrial occupancy: 90–95%. Strong absorption from e-commerce (Amazon, Noon), regional distributors, and port-dependent logistics operators. Supply growth is well-absorbed by structural demand from trade and supply chain expansion.',
    },
    {
      question: 'Can foreign investors own industrial property in Jebel Ali?',
      answer:
        'Yes. JAFZA (free zone) and onshore industrial properties permit 100% foreign ownership. JAFZA properties offer additional tax benefits and import/export privileges. Legal title is clear and enforceable under UAE law.',
    },
    {
      question: 'What are typical yield expectations for Jebel Ali industrial property?',
      answer:
        'Standard warehousing: 7–8% net yield. Fulfillment centres: 7–9% net yield. Cold storage: 8–10% net yield (premium pricing due to specialization). Yields vary by tenant covenant, lease duration, and specification level.',
    },
    {
      question: 'What is the rental growth outlook for Jebel Ali industrial property?',
      answer:
        'Historical rent growth: 4–6% annually. Outlook: 5–7% annual growth driven by e-commerce expansion, port capacity growth, and limited supply in prime locations. Long-term structural growth in logistics and supply chain sectors.',
    },
    {
      question: 'What major tenants operate in Jebel Ali industrial?',
      answer:
        'Amazon, Noon, regional distributors for multinational brands, cold storage operators, customs brokerage firms, and logistics companies. Tenant base is diversified across sectors: e-commerce, FMCG, pharmaceuticals, automotive, and trade.',
    },
    {
      question: 'How does Murivest source Jebel Ali industrial investment opportunities?',
      answer:
        'Direct relationships with major developers (Emaar, JAFZA Authority), free zone operators, and industrial property managers. Off-market sourcing of long-term leases and stabilized income-producing assets. Proprietary market intelligence on occupancy, rents, and supply trends.',
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
      { '@type': 'ListItem', position: 4, name: 'Jebel Ali', item: 'https://murivest.com/united-arab-emirates/dubai/jebel-ali' },
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

export default function JebelAliPage() {
  const whyInvestStats = [
    {
      number: '15M+',
      label: 'Annual Port Container Traffic (TEU)',
      description: 'World\'s largest man-made port; traffic growing 3–5% YoY',
    },
    {
      number: '7,000+',
      label: 'Companies in JAFZA Free Zone',
      description: 'Tax-efficient legal structure; import/export privileges',
    },
    {
      number: '30M+',
      label: 'Sq Ft Industrial Space',
      description: 'Warehousing, logistics, cold storage, port-adjacent property',
    },
    {
      number: '5–7%',
      label: 'Annual Occupancy Growth',
      description: 'E-commerce and supply chain expansion driving strong absorption',
    },
  ];

  const investmentMandates = [
    {
      title: 'Stabilized Warehouse Portfolio',
      description:
        'Income-producing industrial property with long-term institutional tenants. 5–7 year hold, 7–8% target yield. Low-risk income generation.',
      mandate: 'Core',
    },
    {
      title: 'Fulfillment Centre Investment',
      description:
        'Large-format e-commerce fulfillment space with Amazon or regional retailers. 5–8 year hold, 7–9% target yield. Growth sector with strong tailwinds.',
      mandate: 'Core+',
    },
    {
      title: 'Cold Storage & Specialty',
      description:
        'Temperature-controlled and specialized industrial (pharma, food). 8–10 year hold, 8–10% target yield. Premium pricing and higher margins.',
      mandate: 'Core+',
    },
    {
      title: 'Value-Add Development',
      description:
        'Land acquisition and industrial development. Build-to-suit or speculative development. 10–15 year hold, 15%+ development IRR.',
      mandate: 'Value-Add',
    },
  ];

  const marketMetrics = [
    {
      metric: 'Average Warehouse Rent',
      value: 'AED 45/sq ft',
      trend: '+5.8% YoY',
      detail: 'Standard specification',
    },
    {
      metric: 'Fulfillment Centre Rent',
      value: 'AED 55–70/sq ft',
      trend: '+6.2% YoY',
      detail: 'Premium specification',
    },
    {
      metric: 'Industrial Occupancy',
      value: '92.5%',
      trend: '+2.4% YoY',
      detail: 'Across all segments',
    },
    {
      metric: 'Warehouse Yield',
      value: '7.5%',
      trend: 'Rising',
      detail: 'Due to rent growth',
    },
  ];

  const majorOperators = [
    'Amazon',
    'Noon',
    'DPD',
    'Aramex',
    'Emirates DP World',
    'Abu Dhabi Ports',
    'Regional Distributors',
    'Cold Chain Operators',
  ];

  const developmentPartners = ['Emaar Properties', 'JAFZA Authority', 'DP World', 'Dubai Ports'];

  const investmentOpportunities = [
    {
      title: 'Stabilized Warehouse Portfolio',
      type: 'Industrial Income Investment',
      location: 'Jebel Ali Industrial',
      yield: '7.4%',
      highlights: [
        '120,000 sq ft stabilized warehousing',
        'Long-term tenant (7-year lease)',
        'Rent escalation 2–3% annually',
      ],
      price: 'AED 180M+',
    },
    {
      title: 'E-Commerce Fulfillment Centre',
      type: 'Large-Format Logistics',
      location: 'Port-Adjacent Location',
      yield: '8.2%',
      highlights: [
        '150,000 sq ft fulfillment facility',
        'Amazon-spec, multi-tenant capable',
        'Growth sector exposure',
      ],
      price: 'AED 260M+',
    },
    {
      title: 'Cold Storage Investment',
      type: 'Specialty Industrial',
      location: 'Jebel Ali',
      yield: '9.1%',
      highlights: [
        '80,000 sq ft temperature-controlled',
        'Pharmaceutical & food-grade',
        'Premium tenant covenant',
      ],
      price: 'AED 145M+',
    },
    {
      title: 'Industrial Land Development',
      type: 'Value-Add Opportunity',
      location: 'Jebel Ali South',
      yield: '15% IRR',
      highlights: [
        '500,000+ sq ft development potential',
        'Port & highway proximity',
        'Warehouse or fulfillment use',
      ],
      price: 'AED 220M+',
    },
  ];

  const jebel_ali_ecosystem = [
    {
      category: 'Port Infrastructure',
      items: [
        'Jebel Ali Port (15M+ TEU capacity)',
        'Multiple container terminals',
        'Ro-Ro and breakbulk facilities',
        'Customs & brokerage services',
      ],
    },
    {
      category: 'Supply Chain Ecosystem',
      items: [
        'Air cargo (Al Maktoum airport proximity)',
        'Rail access (Dubai to Abu Dhabi)',
        'Road network (E11 highway)',
        'Trucking & logistics services',
      ],
    },
    {
      category: 'Industrial Manufacturing',
      items: [
        'Food & beverage processing',
        'Automotive parts manufacturing',
        'Textiles & apparel production',
        'General industrial operations',
      ],
    },
    {
      category: 'E-Commerce & Trade',
      items: [
        'Amazon & major e-tailers',
        'Regional distribution hubs',
        'Import/export operations',
        'Trade financing services',
      ],
    },
  ];

  const researchReports = [
    { title: 'Jebel Ali Industrial & Logistics Outlook 2024–2026', link: '/united-arab-emirates/research/jebel-ali-outlook' },
    { title: 'E-Commerce Real Estate Supply Chain Analysis', link: '/united-arab-emirates/research/ecommerce-supply-chain' },
    { title: 'Cold Storage & Specialty Industrial Guide', link: '/united-arab-emirates/research/cold-storage' },
    { title: 'Port-Adjacent Property & Maritime Logistics', link: '/united-arab-emirates/research/port-logistics' },
    { title: 'JAFZA Free Zone Investment Framework', link: '/united-arab-emirates/research/jafza-framework' },
    { title: 'Dubai Logistics Hub Competitive Analysis', link: '/united-arab-emirates/research/logistics-hub' },
  ];

  const faqs = [
    {
      question: 'Is Jebel Ali a good investment for industrial real estate?',
      answer:
        'Yes. Jebel Ali is the world\'s leading port in terms of container traffic (15M+ TEU annually) and anchors the Middle East\'s largest free zone (JAFZA: 7,000+ companies). Industrial property yields: 7–9%. Strong occupancy growth (5–7% YoY) driven by e-commerce and logistics expansion.',
    },
    {
      question: 'What types of industrial property are available in Jebel Ali?',
      answer:
        'Standard warehousing (5–15,000 sq ft units), large-format fulfillment centres (50,000–200,000 sq ft), cold storage and temperature-controlled facilities, and port-adjacent industrial space. Rents range AED 35–70/sq ft depending on specification and location.',
    },
    {
      question: 'What is the occupancy rate for industrial property in Jebel Ali?',
      answer:
        'Industrial occupancy: 90–95%. Strong absorption from e-commerce (Amazon, Noon), regional distributors, and port-dependent logistics operators. Supply growth is well-absorbed by structural demand from trade and supply chain expansion.',
    },
    {
      question: 'Can foreign investors own industrial property in Jebel Ali?',
      answer:
        'Yes. JAFZA (free zone) and onshore industrial properties permit 100% foreign ownership. JAFZA properties offer additional tax benefits and import/export privileges. Legal title is clear and enforceable under UAE law.',
    },
    {
      question: 'What are typical yield expectations for Jebel Ali industrial property?',
      answer:
        'Standard warehousing: 7–8% net yield. Fulfillment centres: 7–9% net yield. Cold storage: 8–10% net yield (premium pricing). Yields vary by tenant covenant, lease duration, and specification level.',
    },
    {
      question: 'What is the rental growth outlook for Jebel Ali industrial property?',
      answer:
        'Historical rent growth: 4–6% annually. Outlook: 5–7% annual growth driven by e-commerce expansion, port capacity growth, and limited supply in prime locations. Long-term structural growth in logistics and supply chain sectors.',
    },
    {
      question: 'What major tenants operate in Jebel Ali industrial?',
      answer:
        'Amazon, Noon, regional distributors for multinational brands, cold storage operators, customs brokerage firms, and logistics companies. Tenant base is diversified across sectors: e-commerce, FMCG, pharmaceuticals, automotive, and trade.',
    },
    {
      question: 'How does Murivest source Jebel Ali industrial investment opportunities?',
      answer:
        'Direct relationships with major developers (Emaar, JAFZA Authority), free zone operators, and industrial property managers. Off-market sourcing of long-term leases and stabilized income-producing assets. Proprietary market intelligence on occupancy, rents, and supply trends.',
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
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Jebel Ali Port and logistics hub"
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
              World's Largest Man-Made Port
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-4xl text-white">
              Jebel Ali Dubai
              <br />
              <span className="text-[#B8956B]">Logistics & Supply Chain Hub</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              The Middle East's premier industrial and logistics destination. Anchored by Jebel Ali Port (15M+ TEU), JAFZA free zone (7,000+ companies), and 30M+ sq ft of industrial space. Home to Amazon, Noon, and regional distributors.
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
                  { label: 'Port Capacity', value: '15M+ TEU' },
                  { label: 'Industrial Space', value: '30M+ Sq Ft' },
                  { label: 'JAFZA Companies', value: '7,000+' },
                  { label: 'Occupancy Rate', value: '92.5%' },
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
            eyebrow="Why Jebel Ali"
            title="Why Logistics Capital Chooses Jebel Ali"
            description="Structural supply chain growth, world-class port infrastructure, e-commerce tailwinds, and 7–9% yield expectations drive institutional capital deployment."
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
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Market Data"
            title="Jebel Ali Industrial Market Intelligence"
            description="Current metrics from Murivest's proprietary research on industrial property performance and logistics trends."
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

      {/* ====== TENANTS & OPERATORS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Major Operators" title="Industrial Tenants & Logistics Companies" />
              <div className="grid grid-cols-2 gap-3">
                {majorOperators.map((operator) => (
                  <div
                    key={operator}
                    className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium hover:border-[#B8956B] transition-colors"
                  >
                    {operator}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Development" title="Jebel Ali Development Partners" />
              <div className="grid grid-cols-2 gap-3">
                {developmentPartners.map((partner) => (
                  <div
                    key={partner}
                    className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium hover:border-[#B8956B] transition-colors"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED OPPORTUNITIES ====== */}
      <section id="opportunities" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Investment Opportunities"
            title="Curated Jebel Ali Industrial Opportunities"
            description="Institutional-grade logistics and industrial properties sourced and underwritten by Murivest."
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

      {/* ====== ECOSYSTEM ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Jebel Ali Logistics Ecosystem"
            description="Integrated supply chain infrastructure supporting industrial growth and tenant demand."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {jebel_ali_ecosystem.map((section) => (
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
                      <Zap className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
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
                title="Institutional Advisory for Jebel Ali Investors"
              />
              <ul className="space-y-4">
                {[
                  'Proprietary logistics market intelligence: occupancy, rents, tenant demand',
                  'Direct relationships with major developers and JAFZA operators',
                  'Off-market sourcing: access to non-marketed industrial opportunities',
                  'E-commerce & supply chain expertise: tenant covenant analysis',
                  'Global capital platform for placement to logistics-focused capital',
                  'Fast deal cycles (30–45 days from LOI to close)',
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
                  Investment Advisory • Logistics Capital Deployment • Occupier Solutions • Market Research
                </p>
              </div>

              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                Discuss Your Jebel Ali Strategy
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Whether acquiring stabilized industrial warehousing, investing in fulfillment centres, or developing specialty logistics facilities, Murivest provides independent advisory backed by proprietary supply chain intelligence.
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
        <div className="max-w-[1400km] mx-auto">
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
                Jebel Ali Industrial & Logistics Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                135-page institutional research covering market overview, supply chain analysis, tenant demand, yield trends, and capital deployment strategy. Includes Murivest proprietary occupancy data and industrial underwriting frameworks.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#8A8A8A] mt-4">
                Your email will be added to Murivest logistics research updates.
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
                Schedule a 30-minute discovery call with a Murivest logistics specialist. We'll discuss your capital deployment strategy and introduce you to available opportunities.
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
        <div className="max-w-[1400km] mx-auto">
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
            Industrial & Logistics Real Estate Advisory
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in Jebel Ali with Confidence
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest provides independent, research-backed advisory for institutional capital deployment in Jebel Ali industrial and logistics. From market intelligence to deal sourcing to transaction execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:dubai@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Start Your Investment Discussion
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