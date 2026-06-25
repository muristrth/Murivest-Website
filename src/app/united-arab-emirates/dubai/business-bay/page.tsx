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
    '@id': 'https://murivest.com/united-arab-emirates/dubai/business-bay#local-business',
    name: 'Murivest Dubai – Business Bay Commercial Real Estate Advisory',
    description:
      'Leading institutional commercial real estate advisor for Business Bay, Dubai. Specializing in Grade A office space, mixed-use developments, and investment opportunities across Dubai\'s largest commercial district.',
    url: 'https://murivest.com/united-arab-emirates/dubai/business-bay',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1853,
      longitude: 55.2659,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Business Bay, Dubai, United Arab Emirates',
      geo: {
        '@type': 'GeoShape',
        box: '25.1650 55.2450 25.2050 55.2850',
      },
    },
    knowsAbout: [
      'Commercial Office Space',
      'Grade A Office Investment',
      'Mixed-Use Developments',
      'Office Leasing',
      'Investment Advisory',
      'Commercial Real Estate',
    ],
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'Business Bay, Dubai – Commercial Real Estate Guide',
    description:
      'Comprehensive guide to Business Bay, Dubai. Investment intelligence, market data, office space availability, and institutional real estate advisory from Murivest.',
    url: 'https://murivest.com/united-arab-emirates/dubai/business-bay',
    mainEntity: {
      '@type': 'Place',
      name: 'Business Bay',
      alternateName: ['Business Bay Dubai', 'Dubai Business Bay'],
      description:
        'Dubai\'s largest commercial office district with 240+ towers, 20M+ sq ft of space, and diversified multinational tenant base.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.1853,
        longitude: 55.2659,
      },
      containedInPlace: {
        '@type': 'City',
        name: 'Dubai',
        containedInPlace: {
          '@type': 'State',
          name: 'Dubai',
          containedInPlace: {
            '@type': 'Country',
            name: 'United Arab Emirates',
          },
        },
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Business Bay a good investment for commercial real estate?',
      answer:
        'Yes. Business Bay offers scale (20M+ sq ft), tenant diversity (multinational corporates, SMEs, startups), competitive pricing relative to DIFC, and strong absorption rates (8–10% YoY growth in occupancy). Core office yields range 7–8%; core-plus office 8–9%. Murivest provides detailed underwriting and market comparables.',
    },
    {
      question: 'What are typical office rents in Business Bay?',
      answer:
        'Prime Grade A office: AED 150–180/sq ft annually. Secondary office: AED 120–140/sq ft. Standard office: AED 100–120/sq ft. Rents have appreciated 4–6% annually over the past 3 years. Murivest provides rent benchmarks and escalation forecasts by tower and location.',
    },
    {
      question: 'What makes Business Bay different from DIFC?',
      answer:
        'Business Bay offers larger scale (20M+ sq ft vs 4M+ in DIFC), more tenant diversity (less financial services concentration), competitive pricing (15–20% lower entry costs), and faster occupancy turnover. DIFC offers higher covenant quality, lower vacancy (sub-5%), and supply constraints. Both are institutional-quality destinations; choice depends on mandate (core vs. core-plus).',
    },
    {
      question: 'What is the typical lease term for Business Bay office space?',
      answer:
        'Standard lease: 3–5 years. Premium leases with institutional tenants: 5–10 years. Rent escalations: 2–4% annually (indexed to inflation or fixed). Fit-out contributions vary by tenant covenant and location. Murivest negotiates lease structures aligned with investor return targets.',
    },
    {
      question: 'Can foreign investors own commercial property in Business Bay?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of commercial real estate in Business Bay (freehold status). Ownership is registered with Dubai Land Department. Murivest provides legal guidance on optimal ownership structure.',
    },
    {
      question: 'What occupancy rate can investors expect in Business Bay?',
      answer:
        'Grade A office: 90–95% occupancy. Secondary office: 85–92%. Standard office: 80–88%. Occupancy varies by tower reputation, tenant base, and rental price. Murivest conducts tenant-level diligence to assess occupancy durability.',
    },
    {
      question: 'How does Murivest source off-market opportunities in Business Bay?',
      answer:
        'Murivest maintains active relationships with major Business Bay developers (Emaar, Dubai Land Department), property managers, and institutional owners. We source 40–60% of our deals off-market, before they reach brokers or public listings. Off-market deals often provide 8–12% yield advantage.',
    },
    {
      question: 'What are the exit routes for Business Bay commercial investments?',
      answer:
        'Primary: institutional buyer sale (pension funds, family offices, sovereign wealth funds). Secondary: refinancing / sale-leaseback with major lenders. Tertiary: portfolio sale to REIT or development company. Business Bay\'s deep liquidity enables 4–8 week exit cycles.',
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
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Business Bay',
        item: 'https://murivest.com/united-arab-emirates/dubai/business-bay',
      },
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

export default function BusinessBayPage() {
  const whyInvestStats = [
    {
      number: '20M+',
      label: 'Sq Ft Commercial Space',
      description: 'Largest single commercial office district in the UAE',
    },
    {
      number: '240+',
      label: 'Commercial Towers',
      description: 'Diverse developer pool and architectural standards',
    },
    {
      number: '8–10%',
      label: 'Annual Occupancy Growth',
      description: 'Consistent absorption from multinational corporates',
    },
    {
      number: 'AED 100B+',
      label: 'Annual Investment Activity',
      description: 'Deep liquidity and transparent pricing',
    },
  ];

  const investorFocus = [
    {
      title: 'Grade A Office Investors',
      description:
        'Institutional-quality, low-vacancy properties with investment-grade tenants. 5–7 year hold, 6–8% target yield. Primary focus for core mandates.',
      mandate: 'Core',
    },
    {
      title: 'Core-Plus Repositioning',
      description:
        'Secondary office towers with upside through tenant modernization, rent growth, or mixed-use redevelopment. 7–10 year hold, 8–10% IRR targets.',
      mandate: 'Core+',
    },
    {
      title: 'Value-Add Development',
      description:
        'Land and shell assets for office conversion, mixed-use redevelopment, or hospitality integration. 10–15 year hold, 15%+ development IRR.',
      mandate: 'Value-Add',
    },
    {
      title: 'Occupier Advisory',
      description:
        'Corporate relocation, expansion, and lease restructuring advice. Advising 100+ multinational occupiers on space requirements and lease terms.',
      mandate: 'Occupier',
    },
  ];

  const marketIntelligence = [
    {
      metric: 'Average Office Rent',
      value: 'AED 140/sq ft',
      trend: '+5.2% YoY',
      detail: 'Grade A prime towers',
    },
    {
      metric: 'Occupancy Rate',
      value: '91.4%',
      trend: '+2.1% YoY',
      detail: 'Across all grades',
    },
    {
      metric: 'Prime Yield',
      value: '7.2%',
      trend: 'Stable',
      detail: 'Grade A stabilized assets',
    },
    {
      metric: 'Supply Pipeline',
      value: '2.8M+ Sq Ft',
      trend: '2024–2027',
      detail: 'New delivery expected',
    },
  ];

  const principalDevelopers = [
    'Emaar Properties',
    'Damac Properties',
    'Azizi Developments',
    'Omniyat',
    'Dubai Properties',
    'Meraas',
  ];

  const majorTenants = [
    'Microsoft (Regional HQ)',
    'Google (MENA Offices)',
    'Amazon Web Services',
    'Accenture',
    'Deloitte',
    'EY',
    'PwC',
    'Morgan Stanley',
    'Goldman Sachs',
    'Credit Suisse',
  ];

  const investmentOpportunities = [
    {
      title: 'Iconic Prime Office Tower',
      type: 'Grade A Office Investment',
      location: 'Business Bay Central',
      yield: '6.8%',
      highlights: [
        'Investment-grade multinational tenants',
        'Sub-5% vacancy',
        'Rent escalation 3–4% annually',
      ],
      price: 'AED 450M+',
    },
    {
      title: 'Mixed-Use Corporate Campus',
      type: 'Core-Plus Office + Retail',
      location: 'Business Bay South',
      yield: '7.5%',
      highlights: [
        '80% office, 20% retail',
        'Repositioning upside',
        'Occupier diversification',
      ],
      price: 'AED 750M+',
    },
    {
      title: 'Development Land - Office Conversion',
      type: 'Value-Add Development',
      location: 'Business Bay Waterfront',
      yield: '12–15% IRR',
      highlights: [
        '150,000+ sq ft development potential',
        'Strategic waterfront location',
        'Mixed-use zoning approved',
      ],
      price: 'AED 280M+',
    },
    {
      title: 'Secondary Office Portfolio',
      type: 'Portfolio Play',
      location: 'Multi-Building Portfolio',
      yield: '8.2%',
      highlights: [
        '5 buildings, 450,000 sq ft',
        'Diverse tenant base',
        'Rent growth potential',
      ],
      price: 'AED 550M+',
    },
  ];

  const amenitiesAndLifestyle = [
    {
      category: 'Corporate Infrastructure',
      items: [
        'Premium office parks',
        'Business centres & co-working',
        'Executive lounges',
        'High-speed fibre connectivity',
      ],
    },
    {
      category: 'Hospitality & Dining',
      items: [
        ' 50+ restaurants & cafés',
        '5-star hotel integrations',
        'Rooftop bars & lounges',
        'Michelin-guide proximity',
      ],
    },
    {
      category: 'Retail & Lifestyle',
      items: [
        'Luxury shopping centres',
        'Designer flagship stores',
        'Premium wellness facilities',
        'Concierge services',
      ],
    },
    {
      category: 'Connectivity',
      items: [
        'Dubai Metro proximity (2 stations)',
        'Road network hub',
        'Valet & parking facilities',
        'Water taxi access',
      ],
    },
  ];

  const researchReports = [
    {
      title: 'Business Bay Investment Outlook 2024–2026',
      link: '/united-arab-emirates/research/business-bay-outlook',
    },
    { title: 'Dubai Office Market Q2 2024 Report', link: '/united-arab-emirates/research/dubai-office' },
    {
      title: 'Commercial Property Yield Analysis',
      link: '/united-arab-emirates/research/yield-analysis',
    },
    { title: 'Occupier Leasing Guide', link: '/united-arab-emirates/research/occupier-guide' },
    {
      title: 'Dubai Capital Markets Review',
      link: '/united-arab-emirates/research/capital-markets',
    },
    { title: 'Mixed-Use Development Strategy', link: '/united-arab-emirates/research/mixed-use' },
  ];

  const faqs = [
    {
      question: 'Is Business Bay a good investment for commercial real estate?',
      answer:
        'Yes. Business Bay offers scale (20M+ sq ft), tenant diversity (multinational corporates, SMEs, startups), competitive pricing relative to DIFC, and strong absorption rates (8–10% YoY growth in occupancy). Core office yields range 7–8%; core-plus office 8–9%. Murivest provides detailed underwriting and market comparables.',
    },
    {
      question: 'What are typical office rents in Business Bay?',
      answer:
        'Prime Grade A office: AED 150–180/sq ft annually. Secondary office: AED 120–140/sq ft. Standard office: AED 100–120/sq ft. Rents have appreciated 4–6% annually over the past 3 years. Murivest provides rent benchmarks and escalation forecasts by tower and location.',
    },
    {
      question: 'What makes Business Bay different from DIFC?',
      answer:
        'Business Bay offers larger scale (20M+ sq ft vs 4M+ in DIFC), more tenant diversity (less financial services concentration), competitive pricing (15–20% lower entry costs), and faster occupancy turnover. DIFC offers higher covenant quality, lower vacancy (sub-5%), and supply constraints. Both are institutional-quality destinations; choice depends on mandate.',
    },
    {
      question: 'What is the typical lease term for Business Bay office space?',
      answer:
        'Standard lease: 3–5 years. Premium leases with institutional tenants: 5–10 years. Rent escalations: 2–4% annually. Fit-out contributions vary by tenant covenant and location. Murivest negotiates lease structures aligned with investor return targets.',
    },
    {
      question: 'Can foreign investors own commercial property in Business Bay?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of commercial real estate in Business Bay (freehold status). Ownership is registered with Dubai Land Department. Murivest provides legal guidance on optimal ownership structure.',
    },
    {
      question: 'What occupancy rate can investors expect in Business Bay?',
      answer:
        'Grade A office: 90–95% occupancy. Secondary office: 85–92%. Standard office: 80–88%. Occupancy varies by tower reputation, tenant base, and rental price. Murivest conducts tenant-level diligence to assess occupancy durability.',
    },
    {
      question: 'How does Murivest source off-market opportunities in Business Bay?',
      answer:
        'Murivest maintains active relationships with major Business Bay developers and property managers. We source 40–60% of deals off-market, before they reach brokers. Off-market deals often provide 8–12% yield advantage.',
    },
    {
      question: 'What are the exit routes for Business Bay commercial investments?',
      answer:
        'Primary: institutional buyer sale. Secondary: refinancing / sale-leaseback. Tertiary: portfolio sale. Business Bay\'s deep liquidity enables 4–8 week exit cycles.',
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
        id="schema-area-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAreaPageSchema()) }}
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

      {/* ====== HERO SECTION ====== */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85"
          alt="Business Bay Dubai skyline"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/20 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
              Dubai's Largest Commercial District
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-4xl text-white">
              Business Bay Dubai
              <br />
              <span className="text-[#B8956B]">The Centre of Commerce</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              Investment opportunities, luxury residences, Grade A offices and mixed-use developments within
              Dubai's fastest-evolving business district. Home to 240+ commercial towers, 20M+ sq ft of space,
              and 150+ residential developments.
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
                  { label: 'Commercial Towers', value: '240+' },
                  { label: 'Total Office Space', value: '20M+ Sq Ft' },
                  { label: 'Residential Units', value: '150K+' },
                  { label: 'Annual Activity', value: 'AED 100B+' },
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
            eyebrow="Why Business Bay"
            title="Why Investors Choose Business Bay"
            description="Business Bay combines scale, tenant diversity, and competitive positioning to deliver attractive risk-adjusted returns for institutional capital."
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
                <p className="font-display text-3xl md:text-4xl text-[#1B4332] mb-2">{stat.number}</p>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{stat.label}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Investment Mandates */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {investorFocus.map((focus) => (
              <div
                key={focus.title}
                className="p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-[#B8956B]/10 rounded-full">
                  <p className="text-xs font-semibold text-[#B8956B] uppercase tracking-wider">
                    {focus.mandate}
                  </p>
                </div>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{focus.title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{focus.description}</p>
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
            title="Business Bay Market Intelligence & Performance"
            description="Current market metrics, rental trends, and investment performance indicators from Murivest's proprietary research."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketIntelligence.map((intel) => (
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

      {/* ====== MAJOR TENANTS & DEVELOPERS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Institutional Tenants" title="Major Occupiers in Business Bay" />
              <div className="grid grid-cols-2 gap-3">
                {majorTenants.map((tenant) => (
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
              <SectionHeading eyebrow="Principal Developers" title="Leading Developers in Business Bay" />
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
            title="Curated Commercial Opportunities"
            description="Institutional-grade investment opportunities sourced, underwritten, and facilitated by Murivest."
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

      {/* ====== LIFESTYLE & AMENITIES ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Lifestyle"
            title="A District Designed for Modern Work & Living"
            description="Beyond office space: Business Bay integrates premium hospitality, retail, wellness, and connectivity into a complete urban destination."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {amenitiesAndLifestyle.map((section) => (
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
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Why Murivest"
                title="Institutional Advisory for Business Bay Investors"
              />
              <ul className="space-y-4">
                {[
                  'Proprietary rent data and yield comparables for every tower',
                  'Active relationships with 50+ major Business Bay occupiers',
                  'Off-market sourcing: 40–60% of deals before public listing',
                  'Dedicated underwriting team for investment-grade diligence',
                  'Global capital platform: placement to family offices and sovereign funds',
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
                Let's Discuss Your Business Bay Strategy
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Whether acquiring a flagship office tower, diversifying into secondary markets, or structuring
                a portfolio play, Murivest provides independent, transparent advisory backed by proprietary
                market intelligence.
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
                Business Bay Investment Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                130-page institutional research covering market overview, tower-by-tower analysis, occupier
                demand, yield trends, and capital deployment strategy. Includes Murivest proprietary pricing
                data, lease comparables, and investment underwriting frameworks.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#8A8A8A] mt-4">
                Your email will be added to Murivest Business Bay research updates.
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
                Schedule a 30-minute discovery call with a Murivest Business Bay specialist. We'll discuss
                your mandate, capital deployment timeline, and provide tailored market intelligence.
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
        <div className="max-w-[1400px] mx-auto">
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
            Commercial Real Estate Advisory
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in Business Bay with Confidence
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest provides independent, research-backed advisory for institutional capital deployment in
            Business Bay. From market intelligence to deal sourcing to transaction execution.
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