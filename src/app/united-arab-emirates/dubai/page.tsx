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
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================================================
// STRUCTURED DATA GENERATORS
// ============================================================================

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/dubai#local-business',
    name: 'Murivest Dubai – Commercial Real Estate Advisory',
    description:
      'Leading institutional commercial real estate advisor in Dubai. Specializing in DIFC office, Business Bay, Jebel Ali logistics, and mixed-use assets.',
    url: 'https://murivest.com/united-arab-emirates/dubai',
    telephone: '+971 4 XXX XXXX',
    email: 'dubai@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dubai International Financial Centre (DIFC), Gate District, Dubai, UAE',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '0000',
      addressCountry: 'AE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
      description: 'Monday to Friday, 9:00 AM – 6:00 PM GST',
    },
    priceRange: '$$$',
    areaServed: {
      '@type': 'GeoShape',
      box: '25.1242 55.1093 25.3524 55.4164',
    },
    sameAs: [
      'https://www.linkedin.com/company/murivest',
      'https://twitter.com/murivest',
      'https://www.instagram.com/murivest',
    ],
    knowsAbout: [
      'Commercial Real Estate Advisory',
      'Dubai Office Investment',
      'DIFC Commercial Space',
      'Logistics & Industrial Real Estate',
      'Institutional Capital Deployment',
      'Dubai Property Investment',
    ],
  };
}

function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Institutional Commercial Real Estate Advisory – Dubai',
    provider: {
      '@type': 'Organization',
      name: 'Murivest',
      url: 'https://murivest.com',
    },
    description:
      'Independent, institutional-focused commercial real estate advisory for capital deployment across Dubai markets (DIFC, Business Bay, Jebel Ali, mixed-use).',
    areaServed: 'Dubai, United Arab Emirates',
    url: 'https://murivest.com/united-arab-emirates/dubai',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      priceRange: '$$$',
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Dubai safe for institutional commercial real estate investment?',
      answer:
        'Yes. Dubai has a 40+ year track record of property rights protection, consistent regulation, and transparent legal frameworks. The DIFC common-law jurisdiction, RERA regulation, and Dubai Land Department provide institutional-grade legal certainty. Murivest recommends due diligence on developer track record, construction financing (for new assets), and occupier covenant, consistent with any institutional investment.',
    },
    {
      question: 'What is the typical institutional real estate hold period in Dubai?',
      answer:
        'Core office (DIFC, Business Bay Grade A): 5–7 years. Core-plus (mixed-use, secondary office): 7–10 years. Value-add logistics (Jebel Ali, Dubai South): 5–8 years. Hospitality: 10–15 years. Hold periods are driven by occupier lease expiration, interest rate cycles, and capital return target.',
    },
    {
      question: 'Can foreign institutional investors own commercial property in Dubai?',
      answer:
        'Yes. As of 2020, UAE law permits 100% foreign ownership of onshore commercial real estate in designated freehold areas (DIFC, most commercial districts, Jebel Ali Free Zone). DIFC assets are held under DIFC law; other districts under Dubai/UAE law. Murivest provides legal guidance on optimal ownership structure for each asset.',
    },
    {
      question: 'What are yield expectations for institutional commercial assets in Dubai?',
      answer:
        'Prime office (DIFC Grade A): 6–7% net yield. Secondary office (Business Bay): 7–8% net yield. Logistics (Jebel Ali, Dubai South): 7–9% net yield. Yields vary by asset quality, occupier covenant, and lease duration. Murivest provides detailed yield analysis and comparables by district.',
    },
    {
      question: 'How does Dubai compare with Abu Dhabi for institutional capital deployment?',
      answer:
        'Dubai offers deeper liquidity ($8B+ annual transaction volume), larger tenant base, more occupier diversity, and faster deal cycles. Abu Dhabi offers sovereign backing, longer leases, and lower supply risk. Sophisticated allocators typically include both; Murivest advises on portfolio allocation strategy.',
    },
    {
      question: 'What is Murivest\'s market intelligence and how is it used in underwriting?',
      answer:
        'Murivest publishes proprietary monthly market intelligence covering rental trends, vacancy rates, leasing activity, capital flows, and yield spreads across all major Dubai districts. This data informs asset underwriting, valuation analysis, and occupier covenant assessment. Access to Murivest research is included in advisory retainers.',
    },
    {
      question: 'How does Murivest differ from global CRE firms like CBRE, JLL, and Savills?',
      answer:
        'Murivest is independent and institutional-focused. We have no developer conflicts, no retail brokerage, and no proprietary sales agendas. Our team operates solely on mandate-based advisory and transaction facilitation for institutional capital. We combine on-ground Dubai expertise with proprietary research and a global capital platform, enabling better-informed deal structures and faster capital deployment.',
    },
    {
      question: 'What is the role of Dubai Land Department and DIFC in commercial real estate transactions?',
      answer:
        'Dubai Land Department regulates all onshore commercial real estate transactions, including registration, title transfer, and dispute resolution. DIFC Authority governs assets and contracts within the DIFC jurisdiction (including DIFC real estate). Murivest maintains active relationships with both entities and ensures all transactions comply with applicable frameworks.',
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'United Arab Emirates',
        item: 'https://murivest.com/united-arab-emirates',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Dubai',
        item: 'https://murivest.com/united-arab-emirates/dubai',
      },
    ],
  };
}

function generateAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name: 'Murivest Dubai Commercial Real Estate Advisory',
    url: 'https://murivest.com/united-arab-emirates/dubai',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

// ============================================================================
// REUSABLE COMPONENT SECTIONS
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

function CardGrid({ items, icon: Icon }: { items: string[]; icon: any }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {items.map((item) => (
        <div key={item} className="p-6 md:p-8 bg-white border border-[#1A1A1A]/5">
          <Icon className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
          <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-[#FAF9F6] p-4 text-sm text-[#4A4A4A] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
        >
          <span>{link.label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
        </Link>
      ))}
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DubaiPage() {
  // Investment thesis items
  const thesis = [
    'Dubai\'s diversified economy (trade, logistics, tourism, fintech) generates 3–5% structural GDP growth, de-risking from oil dependence. Commercial real estate fundamentals are anchored by sustained occupier demand and multi-sector tenant growth.',
    'The DIFC common-law framework, RERA regulation, and zero-tax structure create institutional-grade legal certainty and tax efficiency unavailable in comparable regional markets. Property rights, contract enforceability, and capital repatriation are transparent and reliable.',
    'Sustained population growth (2–3% annually), inward migration, and multinational corporate expansion create durable, structural demand across office, logistics, hospitality, and mixed-use asset classes. Demand is less cyclical than supply-driven development risk.',
    'Dubai\'s commercial real estate liquidity is the deepest in the Middle East. Transparent pricing, institutional-quality transactions, and a mature buyer-seller-agent ecosystem enable large-scale capital deployment with clear exit routes.',
  ];

  const demandDrivers = [
    'Multinational corporate regional HQs in DIFC and Dubai South, driven by tax neutrality, regulatory clarity, and proximity to MENA occupier base.',
    'E-commerce and logistics demand acceleration: Amazon, Noon, and regional fulfillment centers require 500,000+ sq ft of modern industrial space annually.',
    'Fintech and digital economy growth: 600+ fintech companies operate in DIFC, with continued expansion in blockchain, digital payments, and wealth management.',
    'Tourism and hospitality: 16M+ annual visitors drive mixed-use demand, particularly hospitality, F&B, and entertainment-adjacent commercial assets.',
    'Trade and re-export corridors: Jebel Ali Port expansion and JAFZA industrial zone attract regional distributors, importers, and logistics operators.',
  ];

  const riskFactors = [
    'Supply cycles: Historical periods of oversupply (2009–2012, 2016–2018) following construction booms. Monitor supply pipelines by district; DIFC and Jebel Ali remain supply-constrained, while Business Bay may face incremental delivery.',
    'Geopolitical sensitivity: Regional tensions (Iran-US dynamics, Israel-Palestine conflict) can impact short-term capital flows and occupier sentiment. Dubai benefits from regional neutrality but remains correlated to broader MENA risk.',
    'USD peg transmission: The AED is pegged to USD; any shift in monetary policy by the Federal Reserve transmits directly to Dubai borrowing costs. Interest rate sensitivity affects valuation and cost of capital for acquisitions.',
    'Development feasibility risk: Stalled or delayed projects can create supply disruptions or dampen market sentiment. Asset-level diligence on developer track record, construction financing, and pre-leasing is essential.',
  ];

  const competitiveAdvantages = [
    'Deepest commercial real estate liquidity in the Middle East: institutional transaction volumes exceed $8B+ annually with transparent pricing and institutional-quality comparables.',
    'Common-law legal framework (DIFC): contract enforceability, property rights, and dispute resolution standards exceed regional peers. Zero income tax, zero capital gains tax, zero property transfer tax create tax-efficient structures.',
    'World-class infrastructure: Jebel Ali Port (15M+ TEU), Al Maktoum Airport expansion, Dubai Metro, and Dubai World Central create structural competitive advantages for occupier demand and asset value durability.',
    'Regulatory transparency: RERA (Real Estate Regulatory Authority), Dubai Land Department, and DIFC Authority provide institutional-grade oversight, pricing disclosure, and contract regulation.',
    'Corridor positioning: Dubai serves as the gateway to MENA, Africa, and South Asia. Proximity to $2T+ regional GDP and 400M+ population creates structural tenant and investor demand.',
  ];

  const globalComparison = [
    {
      market: 'Singapore',
      comparison:
        'Singapore offers tighter legal frameworks and higher occupier covenant quality but faces land constraints, higher entry costs (20%+ transaction fees), and stricter cooling measures. Dubai offers 40% lower entry costs, superior scale, and less regulatory friction.',
    },
    {
      market: 'London',
      comparison:
        'London provides mature market depth but yields are compressed to 3–4%, stamp duty (15%+) creates high entry costs, and regulatory complexity is significant. Dubai offers 6–9% net yields, zero transaction taxes, and faster deal cycles.',
    },
    {
      market: 'Miami',
      comparison:
        'Miami offers comparable gateway-city dynamics but faces higher insurance (hurricane risk), property taxes (0.7%+ annually), and regulatory costs. Dubai has lower operating costs, zero income tax, superior tax treatment, and deeper regional capital access.',
    },
    {
      market: 'Abu Dhabi',
      comparison:
        'Abu Dhabi provides sovereign backing and longer-duration leases but has lower liquidity, smaller tenant base, and less occupier diversity. Dubai offers deeper capital markets, 30% higher transaction volumes, and faster asset turnover cycles.',
    },
    {
      market: 'Istanbul',
      comparison:
        'Istanbul offers regional scale but lacks currency stability (Turkish lira volatility), property rights protection, and legal transparency. Dubai offers USD-peg stability, zero currency controls, clear capital repatriation, and common-law enforcement.',
    },
  ];

  const institutionalRelevance = [
    'Scale and depth: Murivest sources and underwrites institutional-grade assets ($10M–$500M+ per deal) across all major Dubai districts and asset classes.',
    'Transparent market data: Murivest publishes proprietary research on rental trends, vacancy rates, yield spreads, and capital market comparables for each district.',
    'Capital deployment: Portfolio approach enables large-scale, multi-asset deployments (e.g., $100M+ office portfolio placements, $200M+ logistics sector allocations) with diversified counterparties and exit routes.',
    'Sector expertise: Murivest team includes specialists in office (DIFC, Business Bay), logistics (Jebel Ali, Dubai South), hospitality, and mixed-use asset classes, enabling sector-specific underwriting and occupier diligence.',
  ];

  const familyOfficePerspective = [
    'USD-pegged jurisdiction with full capital repatriation freedom and no currency controls or foreign exchange restrictions.',
    'Zero income tax, zero capital gains tax, and zero property transfer tax enable tax-free wealth accumulation and multi-generational asset transfer.',
    'Diversified real asset exposure: office, logistics, hospitality, and mixed-use assets provide sector and tenure diversification within a single globally connected metropolitan market.',
    'Regulatory stability: 40+ years of consistent property rights protection, clear legal frameworks, and transparent governance reduce political and regulatory risk relative to regional peers.',
  ];

  const investorImplications = [
    'District selection by mandate: DIFC for core-plus office (institutional tenants, 5–7 year hold), Business Bay for core office (diversified base, higher yield), Jebel Ali for value-add logistics (sector growth tailwind).',
    'Demand-driven underwriting: evaluate sector and tenant fundamentals (occupancy, covenant, rent durability) rather than short-term sentiment cycles. Focus on occupier lease duration, rent escalations, and replacement cost.',
    'Tax-efficient structures: work with Murivest and local tax advisors to optimize ownership structure (onshore vs. DIFC free zone), depreciation, and capital repatriation timing.',
    'Exit liquidity: Dubai\'s deep capital markets support exit routes via sale-leaseback, institutional buyer placement, or refinancing. Plan hold periods (5–10 years) around occupier lease expiration and interest rate cycles.',
  ];

  const faqs = [
    {
      question: 'Is Dubai safe for institutional commercial real estate investment?',
      answer:
        'Yes. Dubai has a 40+ year track record of property rights protection, consistent regulation, and transparent legal frameworks. The DIFC common-law jurisdiction, RERA regulation, and Dubai Land Department provide institutional-grade legal certainty. Murivest recommends due diligence on developer track record, construction financing (for new assets), and occupier covenant, consistent with any institutional investment.',
    },
    {
      question: 'What is the typical institutional real estate hold period in Dubai?',
      answer:
        'Core office (DIFC, Business Bay Grade A): 5–7 years. Core-plus (mixed-use, secondary office): 7–10 years. Value-add logistics (Jebel Ali, Dubai South): 5–8 years. Hospitality: 10–15 years. Hold periods are driven by occupier lease expiration, interest rate cycles, and capital return target.',
    },
    {
      question: 'Can foreign institutional investors own commercial property in Dubai?',
      answer:
        'Yes. As of 2020, UAE law permits 100% foreign ownership of onshore commercial real estate in designated freehold areas (DIFC, most commercial districts, Jebel Ali Free Zone). DIFC assets are held under DIFC law; other districts under Dubai/UAE law. Murivest provides legal guidance on optimal ownership structure for each asset.',
    },
    {
      question: 'What are yield expectations for institutional commercial assets in Dubai?',
      answer:
        'Prime office (DIFC Grade A): 6–7% net yield. Secondary office (Business Bay): 7–8% net yield. Logistics (Jebel Ali, Dubai South): 7–9% net yield. Yields vary by asset quality, occupier covenant, and lease duration. Murivest provides detailed yield analysis and comparables by district.',
    },
    {
      question: 'How does Dubai compare with Abu Dhabi for institutional capital deployment?',
      answer:
        'Dubai offers deeper liquidity ($8B+ annual transaction volume), larger tenant base, more occupier diversity, and faster deal cycles. Abu Dhabi offers sovereign backing, longer leases, and lower supply risk. Sophisticated allocators typically include both; Murivest advises on portfolio allocation strategy.',
    },
    {
      question: 'What is Murivest\'s market intelligence and how is it used in underwriting?',
      answer:
        'Murivest publishes proprietary monthly market intelligence covering rental trends, vacancy rates, leasing activity, capital flows, and yield spreads across all major Dubai districts. This data informs asset underwriting, valuation analysis, and occupier covenant assessment. Access to Murivest research is included in advisory retainers.',
    },
    {
      question: 'How does Murivest differ from global CRE firms like CBRE, JLL, and Savills?',
      answer:
        'Murivest is independent and institutional-focused. We have no developer conflicts, no retail brokerage, and no proprietary sales agendas. Our team operates solely on mandate-based advisory and transaction facilitation for institutional capital. We combine on-ground Dubai expertise with proprietary research and a global capital platform, enabling better-informed deal structures and faster capital deployment.',
    },
    {
      question: 'What is the role of Dubai Land Department and DIFC in commercial real estate transactions?',
      answer:
        'Dubai Land Department regulates all onshore commercial real estate transactions, including registration, title transfer, and dispute resolution. DIFC Authority governs assets and contracts within the DIFC jurisdiction (including DIFC real estate). Murivest maintains active relationships with both entities and ensures all transactions comply with applicable frameworks.',
    },
  ];

  const relatedResearch = [
    { label: 'Dubai Office Market Q2 2024 Report', href: '/united-arab-emirates/research/dubai-office-market' },
    { label: 'Jebel Ali & Industrial Logistics Analysis', href: '/united-arab-emirates/research/jebel-ali-logistics' },
    { label: 'DIFC Institutional Investment Guide', href: '/united-arab-emirates/investment-guides/difc-institutional' },
    { label: 'Dubai CRE Yield Analysis & Comparables', href: '/united-arab-emirates/research/dubai-yield-analysis' },
    { label: 'GCC Real Estate Outlook 2024–2026', href: '/united-arab-emirates/research/gcc-outlook' },
    { label: 'Dubai Foreign Ownership & Tax Framework', href: '/united-arab-emirates/investment-guides/dubai-tax-structure' },
  ];

  const relatedPages = [
    { label: 'DIFC – Institutional Financial Centre', href: '/united-arab-emirates/dubai/difc' },
    { label: 'Business Bay – Largest Office District', href: '/united-arab-emirates/dubai/business-bay' },
    { label: 'Jebel Ali – Logistics & Industrial Hub', href: '/united-arab-emirates/dubai/jebel-ali' },
    { label: 'Downtown Dubai – Mixed-Use & Hospitality', href: '/united-arab-emirates/dubai/downtown-dubai' },
    { label: 'Dubai South – Emerging Commercial District', href: '/united-arab-emirates/dubai/dubai-south' },
    { label: 'UAE Overview & Capital Markets', href: '/united-arab-emirates' },
  ];

  const districts = [
    {
      name: 'DIFC',
      subtitle: 'Financial Centre – Institutional Core',
      href: '/united-arab-emirates/dubai/difc',
      image: 'https://images.unsplash.com/photo-1599571234909-29ed5a96afe2?w=800&q=80',
      description:
        'The institutional office heart of Dubai. 4,000+ financial and professional services firms operate within a common-law jurisdiction.',
      metrics: ['Lowest Vacancy in UAE', 'Investment-Grade Tenants', 'Supply-Constrained'],
      murivestHighlight: 'AED 850M sovereign wealth fund office acquisition',
      mandate: ['Core', 'Core+'],
      yield: '6–7%',
    },
    {
      name: 'Business Bay',
      subtitle: 'Largest Office District – Diversified Base',
      href: '/united-arab-emirates/dubai/business-bay',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd8082daf?w=800&q=80',
      description:
        'Dubai\'s largest commercial office district offering 20M+ sq ft of space, diverse tenant base, and competitive entry pricing relative to DIFC.',
      metrics: ['20M+ Sq Ft Office', 'Diverse Tenant Mix', 'Central Location'],
      murivestHighlight: 'AED 620M mixed-use commercial portfolio placement',
      mandate: ['Core', 'Core+', 'Value-Add'],
      yield: '7–8%',
    },
    {
      name: 'Jebel Ali',
      subtitle: 'Logistics & Industrial – Structural Growth',
      href: '/united-arab-emirates/dubai/jebel-ali',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      description:
        'The industrial and logistics hub of Dubai. Anchored by the world\'s largest man-made port (Jebel Ali Port) and JAFZA (free zone) with 7,000+ companies.',
      metrics: ['Top 10 Global Port', '7,000+ JAFZA Companies', 'Multi-Decade Growth'],
      murivestHighlight: 'AED 1.2B+ logistics and industrial asset transactions',
      mandate: ['Core+', 'Value-Add'],
      yield: '7–9%',
    },
    {
      name: 'Downtown Dubai',
      subtitle: 'Mixed-Use & Hospitality – Global Brand',
      href: '/united-arab-emirates/dubai/downtown-dubai',
      image: 'https://images.unsplash.com/photo-1599571234909-29ed5a96afe2?w=800&q=80',
      description:
        'The world\'s most recognised mixed-use district, anchored by Burj Khalifa and the Dubai Mall. Offers premium commercial assets with global brand recognition.',
      metrics: ['Unmatched Brand Recognition', 'Tourism-Driven Demand', 'Premium Assets'],
      murivestHighlight: 'Luxury hospitality and mixed-use asset advisory',
      mandate: ['Core', 'Core+'],
      yield: '5–6%',
    },
  ];

  const videoMetrics = [
    { label: 'GDP Growth (2024)', value: '3.8%' },
    { label: 'Population Growth', value: '3.0% YoY' },
    { label: 'CRE Transaction Volume', value: '$10B+' },
    { label: 'Prime Office Yield', value: '6–8%' },
    { label: 'Multinational Corporates', value: '4,000+' },
    { label: 'Jebel Ali Port Capacity', value: '15M+ TEUs' },
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Independent Advisory',
      description:
        'Zero conflicts. No developer relationships, no retail brokerage, no proprietary sales agenda. We work exclusively on mandate basis for institutional capital.',
      highlight: 'Conflicts-free',
    },
    {
      icon: BarChart3,
      title: 'Proprietary Market Research',
      description:
        'Dedicated 15-person research team producing monthly market intelligence: rental trends, vacancy rates, leasing activity, yield analysis, and occupier covenant assessment.',
      highlight: '15 Analysts',
    },
    {
      icon: Building2,
      title: 'On-Ground Dubai Expertise',
      description:
        'Deep relationships with Dubai Land Department, DIFC Authority, major developers, and institutional occupiers. Decade-long presence in DIFC enables faster deal sourcing and occupier validation.',
      highlight: '10+ Years DIFC',
    },
    {
      icon: Globe,
      title: 'Global Capital Platform',
      description:
        'Network of family offices, pension funds, and sovereign wealth funds across Europe, Asia, and Americas. Enables capital deployment across multiple geographies and portfolio diversification.',
      highlight: '50+ Offices',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing & Underwriting',
      description:
        'Deal structures are underwritten with full transparency. Pricing benchmarks are derived from Murivest proprietary data, not speculative market claims. Client approval required at every stage.',
      highlight: 'Full Transparency',
    },
    {
      icon: Clock,
      title: 'Fast Execution Cycles',
      description:
        'Average 30–45 day deal cycles from sourcing to LOI. Proprietary legal templates, in-house diligence, and pre-negotiated developer relationships enable faster capital deployment.',
      highlight: '30–45 Days',
    },
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden">
      {/* ====== STRUCTURED DATA ====== */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema()) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }}
      />
      <Script
        id="schema-rating"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />

      {/* ====== HEADER ====== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl text-[#1B4332] tracking-tight">
            Murivest
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-[#4A4A4A]">
            <Link href="/united-arab-emirates" className="hover:text-[#1B4332] transition-colors">
              UAE
            </Link>
            <Link href="#why-murivest" className="hover:text-[#1B4332] transition-colors">
              Why Murivest
            </Link>
            <Link href="#districts" className="hover:text-[#1B4332] transition-colors">
              Districts
            </Link>
            <Link href="#research" className="hover:text-[#1B4332] transition-colors">
              Research
            </Link>
            <Link href="#contact" className="px-5 py-2.5 bg-[#1B4332] text-white hover:bg-[#142d23] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ====== HERO SECTION ====== */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden pt-32 md:pt-40">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85"
          alt="Dubai skyline"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/85 via-[#1A1A1A]/60 to-[#1A1A1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/10 via-transparent to-transparent" />

        <div className="max-w-[1400px] mx-auto relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
              Institutional CRE Advisory
            </p>
            <h1 className="font-display text-[38px] md:text-[52px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-5xl text-white">
              Murivest Dubai — Commercial Real Estate Advisory | Institutional CRE Advisor
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8">
              Murivest is a leading commercial real estate advisor for institutional capital in Dubai. Deep market intelligence, proprietary research, and 30+ years of transaction expertise across DIFC, Business Bay, Downtown Dubai, and logistics assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                style={{ minHeight: 48 }}
              >
                Discuss Allocation Strategy
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#investment-thesis"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide hover:border-white/60 transition-colors"
                style={{ minHeight: 48 }}
              >
                Explore Market View
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#1B4332] text-white p-6 md:p-8 border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">
                Institutional View
              </p>
              <p className="font-display text-2xl md:text-3xl leading-snug mb-6">
                Murivest provides institutional-grade commercial real estate advisory services to UHNWI, family offices, pension funds, and sovereign wealth funds seeking exposure to Dubai's high-growth commercial markets. We combine on-ground Dubai expertise, proprietary market research, and a global capital platform to identify, underwrite, and transact institutional-quality assets across all major districts and asset classes.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Capital Role</p>
                  <p className="text-sm text-white/80">Preservation, income, growth</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">
                    Investor Fit
                  </p>
                  <p className="text-sm text-white/80">Family offices, funds, sovereigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRUST BAR ====== */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white border-y border-[#1A1A1A]/5">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] mb-8 text-center">
            Institutional Trust & Market Leadership
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">30+</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Years in CRE</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">$15B+</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Closed Deals</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">$3.2B+</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Dubai Volume</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">120+</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Institutional Clients</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">18+</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Sovereign Funds</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[24px] md:text-[32px] text-[#1B4332] mb-1">15</p>
              <p className="text-xs md:text-sm text-[#4A4A4A]">Dubai Analysts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY MURIVEST ====== */}
      <section id="why-murivest" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Why Murivest"
            title="What Sets Murivest Apart from Global CRE Brokers"
            description="We are independent, research-driven, and exclusively focused on institutional capital. Here's why 120+ institutional clients choose Murivest over CBRE, JLL, Savills, and Knight Frank."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {differentiators.map(({ icon: Icon, title, description, highlight }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-[#B8956B]/10 rounded-full">
                  <p className="text-xs font-semibold text-[#B8956B] uppercase tracking-wider">
                    {highlight}
                  </p>
                </div>
                <Icon className="w-6 h-6 text-[#B8956B] mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Matrix */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] mb-6">
              Feature Comparison
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#1A1A1A]/5 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#1A1A1A]/10 bg-[#FAF9F6]">
                    <th className="p-4 font-semibold text-[#1A1A1A]">Feature</th>
                    <th className="p-4 font-semibold text-[#1B4332]">Murivest</th>
                    <th className="p-4 text-[#4A4A4A]">CBRE / JLL</th>
                    <th className="p-4 text-[#4A4A4A]">Local Brokers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1A1A1A]/5">
                    <td className="p-4 text-[#1A1A1A]">Independent Research</td>
                    <td className="p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    </td>
                    <td className="p-4 text-[#4A4A4A]">Selective</td>
                    <td className="p-4 text-[#4A4A4A]">Limited</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A]/5">
                    <td className="p-4 text-[#1A1A1A]">Conflict-Free Mandate Work</td>
                    <td className="p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    </td>
                    <td className="p-4 text-[#4A4A4A]">Mixed</td>
                    <td className="p-4 text-[#4A4A4A]">Rare</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A]/5">
                    <td className="p-4 text-[#1A1A1A]">Dedicated Dubai Team</td>
                    <td className="p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    </td>
                    <td className="p-4 text-[#4A4A4A]">Regional</td>
                    <td className="p-4 text-[#4A4A4A]">Limited</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1A]/5">
                    <td className="p-4 text-[#1A1A1A]">Global Capital Platform</td>
                    <td className="p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    </td>
                    <td className="p-4 text-[#4A4A4A]">Yes (Global)</td>
                    <td className="p-4 text-[#4A4A4A]">No</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#1A1A1A]">Average Deal Cycle</td>
                    <td className="p-4">
                      <span className="font-semibold text-[#1B4332]">30–45 days</span>
                    </td>
                    <td className="p-4 text-[#4A4A4A]">60–90 days</td>
                    <td className="p-4 text-[#4A4A4A]">90–180 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ====== EXECUTIVE SUMMARY ====== */}
      <section id="investment-thesis" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Executive Summary"
            title="Dubai Market Intelligence & Investment Thesis"
            description="Murivest provides institutional-grade commercial real estate advisory services to UHNWI, family offices, pension funds, and sovereign wealth funds seeking exposure to Dubai's high-growth commercial markets. We combine on-ground Dubai expertise, proprietary market research, and a global capital platform to identify, underwrite, and transact institutional-quality assets across all major districts and asset classes."
          />
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                Dubai is the pre-eminent commercial real estate hub for the Middle East, Africa, and South Asia (MEASA), with a diversified economy generating approximately 3–5% annual GDP growth. Oil and gas contribute less than 5% of GDP; the economy is anchored by trade (30%), logistics (20%), tourism (10%), financial services (12%), and real estate (8%).
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                The commercial real estate market benefits from world-class infrastructure: Al Maktoum International Airport (capacity expansion underway), Dubai Metro (76 km network), Jebel Ali Port (15M+ TEU annually, largest man-made port globally), and Dubai World Central logistics zone (over 70 sq km of industrial space).
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                Dubai's commercial districts are geographically and functionally distinct. DIFC serves multinational corporates and financial services firms within a common-law jurisdiction; Business Bay offers scale, tenant diversity, and competitive pricing; Downtown Dubai anchors global brand recognition and mixed-use demand; Jebel Ali dominates logistics, trade, and industrial occupancy. District selection is a critical determinant of risk-adjusted returns.
              </p>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                The market has recovered from COVID-era oversupply cycles and is now characterized by steady occupier absorption, rising rents (4–7% annually in core districts), and stable cap rates (6–9% for stabilized, Grade A assets). Foreign direct investment in commercial real estate has accelerated following 2020 reforms allowing 100% foreign ownership onshore.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#1A1A1A]/5 bg-[#FAF9F6] p-6 md:p-8 sticky top-24">
                <h3 className="font-display text-xl text-[#1A1A1A] mb-5">Capital Allocation Lens</h3>
                <ul className="space-y-4">
                  {institutionalRelevance.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-[#4A4A4A] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== INVESTMENT THESIS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Investment Thesis"
            title="Why Institutional Capital Allocates to Dubai"
          />
          <CardGrid items={thesis} icon={Target} />
        </div>
      </section>

      {/* ====== DEMAND DRIVERS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Demand Drivers"
            title="Structural Demand Drivers & Occupier Growth"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {demandDrivers.map((driver) => (
              <div key={driver} className="p-6 bg-[#FAF9F6] border border-[#1A1A1A]/5">
                <TrendingUp className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{driver}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  Demand assessed through occupancy trends, tenant covenant quality, rent durability, and exit liquidity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== RISK FACTORS ====== */}
      <section id="risk-factors" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Risk Factors" title="Institutional Risk Considerations" />
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {riskFactors.map((risk) => (
              <div key={risk} className="p-6 bg-white border border-[#1A1A1A]/5">
                <ShieldAlert className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{risk}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  Murivest underwrites through scenario analysis, lease diligence, counterparty review, and exit route mapping.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMPETITIVE ADVANTAGES ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Competitive Advantages" title="Dubai's Structural Advantages" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {competitiveAdvantages.map((advantage) => (
              <div key={advantage} className="p-6 md:p-8 bg-[#FAF9F6] border border-[#1A1A1A]/5">
                <CheckCircle2 className="w-5 h-5 text-[#B8956B] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{advantage}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  Relevant where it improves risk-adjusted returns, tenant quality, liquidity, or capital preservation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== GLOBAL COMPARISON ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Global Comparison"
            title="Positioning Against Global Alternatives"
          />
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/5 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1A1A1A]/10">
                  <th className="p-5 text-xs uppercase tracking-wider text-[#8A8A8A]">Market</th>
                  <th className="p-5 text-xs uppercase tracking-wider text-[#8A8A8A]">
                    Institutional Comparison
                  </th>
                </tr>
              </thead>
              <tbody>
                {globalComparison.map((row) => (
                  <tr key={row.market} className="border-b border-[#1A1A1A]/5 last:border-b-0">
                    <td className="p-5 text-sm font-medium text-[#1A1A1A]">{row.market}</td>
                    <td className="p-5 text-sm text-[#4A4A4A] leading-relaxed">{row.comparison}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====== DISTRICTS ====== */}
      <section id="districts" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Commercial Districts"
            title="Dubai's Key Commercial Districts"
            description="Each district serves distinct occupier bases and offers different risk-return profiles. Murivest has deep transaction experience and current market intelligence across all major districts."
          />

          {/* Mandate Filter Info */}
          <div className="mb-12 p-6 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg">
            <p className="text-sm text-[#4A4A4A] mb-4">
              <span className="font-semibold">Institutional Mandates:</span> Core (5–7% yield, 5 year hold);
              Core+ (6–8% yield, 5–10 year hold); Value-Add (8%+ yield, 7–15 year hold). Filter below:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {districts.map((district) => (
              <motion.div
                key={district.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group rounded-xl overflow-hidden border border-[#1A1A1A]/5 hover:border-[#B8956B] transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#E8E6E1]">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-[#1A1A1A] mb-1">{district.name}</h3>
                      <p className="text-sm text-[#B8956B] font-semibold uppercase tracking-wide">
                        {district.subtitle}
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Net Yield
                      </p>
                      <p className="font-display text-lg text-[#1B4332]">{district.yield}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5">{district.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {district.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-block text-xs px-3 py-1 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-full text-[#4A4A4A]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Murivest Highlight */}
                  <div className="mb-6 p-4 bg-[#B8956B]/5 border-l-4 border-[#B8956B] rounded">
                    <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-1">
                      Murivest Transaction
                    </p>
                    <p className="text-sm text-[#1A1A1A]">{district.murivestHighlight}</p>
                  </div>

                  {/* Mandates */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {district.mandate.map((mandate) => (
                      <span
                        key={mandate}
                        className="text-xs px-2 py-1 bg-[#1B4332]/10 text-[#1B4332] rounded font-semibold"
                      >
                        {mandate}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={district.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332] hover:text-[#B8956B] transition-colors"
                  >
                    Explore {district.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VIDEO SECTION ====== */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#1A1A1A]">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=60"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/countries/uae/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/40" />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8956B]/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
                Dubai Market Intelligence
              </p>
              <h2 className="font-display text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] text-white mb-6">
                Dubai: The Middle East's{' '}
                <span className="text-[#B8956B]">Pre-Eminent CRE Gateway</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
                Dubai's diversified economy, world-class infrastructure, and transparent legal framework create
                structural demand across office, logistics, hospitality, and mixed-use asset classes. Murivest
                combines on-ground expertise, proprietary market intelligence, and a global capital platform to
                deliver institutional-grade advisory and capital deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/united-arab-emirates/research/dubai-office-market"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
                  style={{ minHeight: 48 }}
                >
                  Access Research
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/united-arab-emirates/dubai/difc"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                  style={{ minHeight: 48 }}
                >
                  Explore Districts
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              {/* Key metrics panel */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-6">
                  Key Market Metrics
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {videoMetrics.map((metric) => (
                    <div key={metric.label} className="border-b border-white/5 pb-4 last:border-b-0">
                      <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        {metric.label}
                      </p>
                      <p className="font-display text-xl text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== LEAD GENERATION SECTION ====== */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Download Research */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 bg-white border border-[#1A1A1A]/5 rounded-lg"
            >
              <Download className="w-8 h-8 text-[#B8956B] mb-4" />
              <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">
                Dubai CRE Market Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                150-page institutional research covering market overview, district deep-dives, occupier demand
                analysis, yield trends, and capital deployment strategy. Includes Murivest proprietary pricing
                data and transaction comparables.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#8A8A8A] mt-4">Your email will be added to Murivest research updates.</p>
            </motion.div>

            {/* Contact Advisor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-12 bg-[#1B4332] text-white border border-[#1B4332] rounded-lg"
            >
              <Phone className="w-8 h-8 text-[#B8956B] mb-4" />
              <h3 className="font-display text-2xl mb-3">Speak with a Dubai Advisor</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                Schedule a 30-minute discovery call with a Murivest Dubai specialist. We'll discuss your
                mandate, capital deployment timeline, district preferences, and provide tailored market
                intelligence and deal-sourcing options.
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

      {/* ====== FAMILY OFFICE & IMPLICATIONS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Family Office Perspective" title="Multi-Generational Capital Considerations" />
            <ul className="space-y-4">
              {familyOfficePerspective.map((item) => (
                <li key={item} className="flex gap-3">
                  <Users className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Investor Implications" title="How To Use This Research" />
            <ul className="space-y-4">
              {investorImplications.map((item) => (
                <li key={item} className="flex gap-3">
                  <FileText className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====== RESEARCH & LINKS ====== */}
      <section id="research" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Related Research"
            title="Research, Reports & Market Intelligence"
          />
          <LinkList links={relatedResearch} />
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Internal Links" title="Related Dubai & UAE Pages" />
          <LinkList links={relatedPages} />
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 bg-white border border-[#1A1A1A]/5 cursor-pointer rounded-lg"
              >
                <summary className="list-none font-display text-base md:text-lg text-[#1A1A1A] pr-8">
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
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">Private Advisory</p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Discuss Your Dubai Commercial Real Estate Strategy
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Speak with Murivest about your institutional capital deployment strategy, district selection, and deal-sourcing priorities. Our team provides independent, transparent, and comprehensive advisory to family offices, pension funds, and sovereign wealth funds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:dubai@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Speak With Murivest
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/united-arab-emirates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              style={{ minHeight: 48 }}
            >
              Return To UAE Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}