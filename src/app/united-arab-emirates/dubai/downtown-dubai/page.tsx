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
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================================================
// STRUCTURED DATA GENERATORS
// ============================================================================

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/dubai/downtown-dubai#local-business',
    name: 'Murivest Dubai – Downtown Dubai Real Estate Advisory',
    description:
      'Leading luxury real estate advisor for Downtown Dubai. Specializing in premium residential, hospitality investment, and mixed-use development opportunities at the heart of global Dubai.',
    url: 'https://murivest.com/united-arab-emirates/dubai/downtown-dubai',
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
      latitude: 25.1972,
      longitude: 55.2744,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Downtown Dubai, Dubai, United Arab Emirates',
      geo: {
        '@type': 'GeoShape',
        box: '25.1800 55.2600 25.2150 55.2900',
      },
    },
    knowsAbout: [
      'Luxury Residential Real Estate',
      'Premium Apartment Investment',
      'Hospitality Real Estate Investment',
      'Mixed-Use Development',
      'Penthouses & Ultra-Luxury Housing',
      'Hotel Investment',
    ],
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'Downtown Dubai – Luxury Real Estate & Investment Guide',
    description:
      'Premium guide to Downtown Dubai. Investment intelligence, luxury property market data, and institutional real estate advisory from Murivest for UHNWI and family office capital.',
    url: 'https://murivest.com/united-arab-emirates/dubai/downtown-dubai',
    mainEntity: {
      '@type': 'Place',
      name: 'Downtown Dubai',
      alternateName: ['Downtown Dubai', 'Dubai Downtown'],
      description:
        "The world's most recognisable mixed-use destination. Home to Burj Khalifa, Dubai Mall, luxury penthouses, 5-star hotels, and global brands.",
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.1972,
        longitude: 55.2744,
      },
      containedInPlace: {
        '@type': 'City',
        name: 'Dubai',
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Downtown Dubai a good investment for luxury residential property?',
      answer:
        'Yes. Downtown Dubai is the world\'s most recognisable mixed-use destination, anchored by Burj Khalifa and Dubai Mall. Luxury residential yields range 4–6%, with capital appreciation driven by location prestige, tourism demand, and limited supply. Target market: international investors, UHNWIs, and family offices seeking trophy assets.',
    },
    {
      question: 'What are property prices in Downtown Dubai?',
      answer:
        'Luxury apartments: AED 8,000–15,000/sq ft. Premium penthouses: AED 15,000–35,000+/sq ft. Ultra-luxury: AED 40,000+/sq ft. Prices have appreciated 3–5% annually. Murivest provides comparable analysis and valuation guidance across all luxury segments.',
    },
    {
      question: 'What is the rental yield on luxury residential property in Downtown Dubai?',
      answer:
        'Premium apartments: 4–5% rental yield. Luxury penthouses: 3–4% rental yield. Ultra-luxury penthouses: 2–3% rental yield. Yields are lower than secondary markets but supported by global brand recognition and tourism demand (16M+ annual visitors).',
    },
    {
      question: 'Can foreign investors own property in Downtown Dubai?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of residential property in Downtown Dubai (freehold status). Property ownership is registered with Dubai Land Department. Murivest advises on optimal ownership structure and tax efficiency.',
    },
    {
      question: 'What are the hospitality investment opportunities in Downtown Dubai?',
      answer:
        'Downtown Dubai anchors premium hotel assets (5-star hotels, branded residences, luxury serviced apartments). Hotel yields: 6–8%. Branded residences: 4–5% yield plus capital appreciation. Murivest structures hospitality investments for family offices and institutional capital.',
    },
    {
      question: 'Is there rental demand for luxury apartments in Downtown Dubai?',
      answer:
        'Yes. Strong rental demand from international corporate assignees, high-net-worth tourists, and expatriates. Average occupancy: 90%+. Rental escalations: 2–4% annually. Short-term rental (Airbnb-style) also viable but subject to Dubai regulations.',
    },
    {
      question: 'What is the capital appreciation outlook for Downtown Dubai real estate?',
      answer:
        'Historically: 3–5% annual appreciation. Drivers: population growth (3% annually), tourism expansion (target 20M+ annual visitors), infrastructure investment (Dubai Creek Harbour, Al Maktoum Airport expansion), and limited luxury supply. Outlook: 4–6% annual appreciation 2024–2028.',
    },
    {
      question: 'How does Murivest support luxury residential investors in Downtown Dubai?',
      answer:
        'Murivest provides investment advisory (market selection, property underwriting), transaction facilitation (off-market sourcing, negotiation), and portfolio management (rental optimization, exit strategy). We work with 40+ institutional investors and family offices in Downtown Dubai.',
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
        name: 'Downtown Dubai',
        item: 'https://murivest.com/united-arab-emirates/dubai/downtown-dubai',
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

export default function DowntownDubaiPage() {
  const whyInvestStats = [
    {
      number: 'Burj Khalifa',
      label: 'World\'s Tallest Building',
      description: 'The defining landmark that anchors global brand recognition',
    },
    {
      number: 'Dubai Mall',
      label: 'World\'s Largest Shopping Centre',
      description: '14M+ annual visitors integrated into the district',
    },
    {
      number: '16M+',
      label: 'Annual Visitors',
      description: 'Tourism demand that sustains rental and occupancy rates',
    },
    {
      number: '150K+',
      label: 'Residential Units',
      description: 'Diverse portfolio across luxury and ultra-premium segments',
    },
  ];

  const investmentSegments = [
    {
      title: 'Luxury Apartments',
      description:
        'Premium 2–4 bedroom apartments with panoramic views, high-quality finishes, and strong rental demand. 4–5% rental yield, 3–5% capital appreciation.',
      yield: '4–5%',
      appreciation: '3–5%',
    },
    {
      title: 'Penthouses & Ultra-Luxury',
      description:
        'Exclusive penthouses with private terraces, spa facilities, and bespoke finishes. Limited supply, high net-worth occupier base, global investment appeal.',
      yield: '2–4%',
      appreciation: '4–6%',
    },
    {
      title: 'Hospitality & Branded Residences',
      description:
        'Premium hotel assets, branded residences (managed by global chains), and serviced apartments. 6–8% hotel yields, 4–5% branded residences.',
      yield: '4–8%',
      appreciation: '2–4%',
    },
    {
      title: 'Mixed-Use Development',
      description:
        'Integrated development projects combining residential, retail, hospitality, and office. Development IRR: 12–18%. Institutional capital deployment opportunity.',
      yield: '12–18% IRR',
      appreciation: '5–8%',
    },
  ];

  const marketMetrics = [
    {
      metric: 'Average Apartment Price',
      value: 'AED 3.5M–8M',
      trend: '+4.2% YoY',
      detail: 'Luxury segment',
    },
    {
      metric: 'Occupancy Rate',
      value: '92.5%',
      trend: '+1.8% YoY',
      detail: 'All rental types',
    },
    {
      metric: 'Rental Yield (Prime)',
      value: '4.6%',
      trend: 'Stable',
      detail: 'Premium apartments',
    },
    {
      metric: 'Tourism-Driven Demand',
      value: '16M+ Visitors',
      trend: '+8% YoY',
      detail: 'Annual footfall',
    },
  ];

  const luxuryBrands = ['Armani Residences', 'Caesars Palace', 'Address Hotels & Resorts', 'Emaar Hotels & Resorts'];

  const iconicProperties = [
    {
      name: 'Burj Khalifa',
      type: 'Residential & Hotel',
      floors: '163 Floors',
      units: '900+ Residential Units',
      highlight: 'World\'s most iconic residential address',
    },
    {
      name: 'The Address Downtown Dubai',
      type: 'Residential Hotel Towers',
      floors: 'Twin 60-Floor Towers',
      units: '600+ Residential Units',
      highlight: 'Premium serviced apartments with hotel management',
    },
    {
      name: 'Dubai Mall',
      type: 'Retail + Entertainment',
      floors: '5 Levels',
      units: '1,200+ Retailers',
      highlight: 'World\'s largest shopping centre, integrated into Downtown',
    },
    {
      name: 'Souk Al Bahar',
      type: 'Retail + Hospitality',
      floors: '3 Levels',
      units: '150+ Outlets',
      highlight: 'Luxury retail with waterfront Burj Khalifa views',
    },
  ];

  const luxuryAmenities = [
    {
      category: 'Dining Excellence',
      items: [
        'Michelin-starred restaurants',
        '200+ fine dining venues',
        'Chef-driven culinary experiences',
        'Private clubs & lounges',
      ],
    },
    {
      category: 'Luxury Hospitality',
      items: [
        'Armani Hotel Dubai',
        'The Address Hotels',
        'Caesars Palace (upcoming)',
        'Ultra-luxury spa & wellness',
      ],
    },
    {
      category: 'Retail & Shopping',
      items: [
        'Dubai Mall (1,200+ retailers)',
        'Luxury flagship stores',
        'Designer boutiques',
        'Exclusive private shopping',
      ],
    },
    {
      category: 'Entertainment & Leisure',
      items: [
        'Burj Khalifa At The Top',
        'Dubai Fountain',
        'World-class theatre & arts',
        'Premium wellness clubs',
      ],
    },
  ];

  const researchReports = [
    {
      title: 'Downtown Dubai Luxury Market Report 2024–2026',
      link: '/united-arab-emirates/research/downtown-dubai-luxury',
    },
    {
      title: 'Hospitality Investment in Downtown Dubai',
      link: '/united-arab-emirates/research/hospitality-investment',
    },
    {
      title: 'Premium Residential Yield Analysis',
      link: '/united-arab-emirates/research/residential-yield',
    },
    {
      title: 'Dubai Tourism & Occupancy Forecasts',
      link: '/united-arab-emirates/research/tourism-occupancy',
    },
    {
      title: 'Mixed-Use Development Opportunities',
      link: '/united-arab-emirates/research/mixed-use-development',
    },
    {
      title: 'Branded Residences Investment Strategy',
      link: '/united-arab-emirates/research/branded-residences',
    },
  ];

  const investmentOpportunities = [
    {
      title: 'Luxury Penthouse – Burj Khalifa View',
      type: 'Ultra-Luxury Apartment',
      bedrooms: '4BR Penthouse',
      yield: '3.2%',
      highlights: [
        'Private terrace with Burj Khalifa views',
        'Smart home automation',
        'Concierge & private lift access',
      ],
      price: 'AED 12M–18M',
    },
    {
      title: 'Serviced Apartment Portfolio',
      type: 'Branded Residences',
      bedrooms: '50 Units',
      yield: '5.8%',
      highlights: [
        'Managed by premium hotel chain',
        'Short-term rental optimization',
        'Occupancy guarantee',
      ],
      price: 'AED 85M+',
    },
    {
      title: 'Premium Residential Apartment Block',
      type: 'Grade A Residential',
      bedrooms: '120 Units',
      yield: '4.5%',
      highlights: [
        'Modern amenities & services',
        'Strong tenant demand',
        'Appreciation potential',
      ],
      price: 'AED 320M+',
    },
    {
      title: 'Mixed-Use Development Site',
      type: 'Development Opportunity',
      bedrooms: 'Multi-Purpose',
      yield: '15% IRR',
      highlights: [
        'Residential + retail + hospitality',
        'Strategic location',
        'Development potential',
      ],
      price: 'AED 450M+',
    },
  ];

  const faqs = [
    {
      question: 'Is Downtown Dubai a good investment for luxury residential property?',
      answer:
        'Yes. Downtown Dubai is the world\'s most recognisable mixed-use destination, anchored by Burj Khalifa and Dubai Mall. Luxury residential yields range 4–6%, with capital appreciation driven by location prestige, tourism demand, and limited supply.',
    },
    {
      question: 'What are property prices in Downtown Dubai?',
      answer:
        'Luxury apartments: AED 8,000–15,000/sq ft. Premium penthouses: AED 15,000–35,000+/sq ft. Ultra-luxury: AED 40,000+/sq ft. Prices have appreciated 3–5% annually.',
    },
    {
      question: 'What is the rental yield on luxury residential property in Downtown Dubai?',
      answer:
        'Premium apartments: 4–5% rental yield. Luxury penthouses: 3–4% rental yield. Ultra-luxury penthouses: 2–3% yield. Yields are lower than secondary markets but supported by global brand recognition and tourism demand.',
    },
    {
      question: 'Can foreign investors own property in Downtown Dubai?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of residential property in Downtown Dubai (freehold status). Property ownership is registered with Dubai Land Department.',
    },
    {
      question: 'What are the hospitality investment opportunities in Downtown Dubai?',
      answer:
        'Downtown Dubai anchors premium hotel assets (5-star hotels, branded residences, luxury serviced apartments). Hotel yields: 6–8%. Branded residences: 4–5% yield plus capital appreciation.',
    },
    {
      question: 'Is there rental demand for luxury apartments in Downtown Dubai?',
      answer:
        'Yes. Strong rental demand from international corporate assignees, high-net-worth tourists, and expatriates. Average occupancy: 90%+. Rental escalations: 2–4% annually.',
    },
    {
      question: 'What is the capital appreciation outlook for Downtown Dubai real estate?',
      answer:
        'Historically: 3–5% annual appreciation. Drivers: population growth, tourism expansion, infrastructure investment, and limited luxury supply. Outlook: 4–6% annual appreciation 2024–2028.',
    },
    {
      question: 'How does Murivest support luxury residential investors in Downtown Dubai?',
      answer:
        'Murivest provides investment advisory, transaction facilitation, off-market sourcing, and portfolio management. We work with 40+ institutional investors and family offices in Downtown Dubai.',
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
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85"
          alt="Burj Khalifa & Downtown Dubai"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/75 via-[#1A1A1A]/55 to-[#1A1A1A]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/15 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-8"
          >
            <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-6">
              World's Most Iconic Destination
            </p>
            <h1 className="font-display text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] mb-6 md:mb-8 max-w-5xl text-white">
              Downtown Dubai
              <br />
              <span className="text-[#B8956B]">Global Luxury & Investment</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              Home to iconic landmarks, luxury residences, global brands and some of the region's most prestigious
              investment opportunities. Downtown Dubai combines luxury living, international business and world-class
              lifestyle experiences within one of the most valuable real estate markets globally.
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <div className="space-y-6">
                {[
                  { icon: '🏢', label: 'Home of Burj Khalifa', value: '163 Floors' },
                  { icon: '🛍️', label: 'Dubai Mall Anchor', value: '14M+ Visitors' },
                  { icon: '🏠', label: 'Luxury Residences', value: '150K+ Units' },
                  { icon: '💰', label: 'Global Investor Demand', value: 'Premium Market' },
                ].map((stat) => (
                  <div key={stat.label} className="border-b border-white/10 pb-4 last:border-b-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{stat.icon}</span>
                      <p className="text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
                    </div>
                    <p className="font-display text-lg text-white">{stat.value}</p>
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
            eyebrow="Why Downtown Dubai"
            title="Why Investors Choose Downtown Dubai"
            description="Downtown Dubai is not just a district—it's a globally recognised brand. Investors seek exposure for luxury living, hospitality, and capital appreciation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {whyInvestStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 bg-[#FAF9F6] border border-[#1A1A1A]/5 hover:border-[#B8956B] transition-colors text-center"
              >
                <p className="font-display text-2xl md:text-3xl text-[#1B4332] mb-3">{stat.number}</p>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{stat.label}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Investment Segments */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A] mb-8">
              Investment Segments & Returns
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {investmentSegments.map((segment) => (
                <div
                  key={segment.title}
                  className="p-8 bg-gradient-to-br from-white to-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
                >
                  <h3 className="font-display text-lg text-[#1A1A1A] mb-3">{segment.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5">{segment.description}</p>
                  <div className="flex gap-6 pt-5 border-t border-[#1A1A1A]/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-1">Yield</p>
                      <p className="font-display text-lg text-[#1B4332]">{segment.yield}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-1">Appreciation</p>
                      <p className="font-display text-lg text-[#1B4332]">{segment.appreciation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== MARKET INTELLIGENCE ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Market Data"
            title="Downtown Dubai Market Intelligence"
            description="Real-time market metrics, pricing trends, and occupancy data from Murivest's proprietary research team."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketMetrics.map((intel) => (
              <motion.div
                key={intel.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:shadow-lg transition-all"
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

      {/* ====== ICONIC PROPERTIES ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Iconic Assets"
            title="The Defining Properties of Downtown Dubai"
            description="These landmark assets shape the identity, value, and investment appeal of the entire district."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {iconicProperties.map((prop) => (
              <motion.div
                key={prop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 bg-gradient-to-br from-[#FAF9F6] to-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors group"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#B8956B]/10 rounded-bl-lg group-hover:bg-[#B8956B]/20 transition-colors" />

                <Star className="w-5 h-5 text-[#B8956B] mb-4" strokeWidth={1.5} />

                <h3 className="font-display text-lg text-[#1A1A1A] mb-2">{prop.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-4">
                  {prop.type}
                </p>

                <div className="space-y-3 mb-5 pb-5 border-b border-[#1A1A1A]/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A]">Scale</p>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{prop.floors}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A]">Units</p>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{prop.units}</p>
                  </div>
                </div>

                <p className="text-sm text-[#4A4A4A] italic">{prop.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LUXURY BRANDS & AMENITIES ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <div>
              <SectionHeading eyebrow="Branded Luxury" title="Premium Brands & Hotel Operators" />
              <div className="grid grid-cols-2 gap-4">
                {luxuryBrands.map((brand) => (
                  <div
                    key={brand}
                    className="p-6 bg-white border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium text-center hover:border-[#B8956B] transition-colors"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 bg-white border border-[#1A1A1A]/5 rounded-lg"
            >
              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">Internationally Managed Excellence</h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Downtown Dubai is home to the world's most prestigious hospitality brands, setting global standards for
                luxury service and design. From Armani Residences to The Address Hotels, premium brand integration
                supports both valuation and yield.
              </p>
              <ul className="space-y-3">
                {['Professional property management', 'Global marketing reach', 'International guest access', 'Revenue optimization'].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#4A4A4A]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Lifestyle Amenities */}
          <SectionHeading eyebrow="Lifestyle" title="Premium Amenities & Experiences" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {luxuryAmenities.map((section) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <h3 className="font-display text-lg text-[#1A1A1A] mb-5">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#4A4A4A]">
                      <Star className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED OPPORTUNITIES ====== */}
      <section id="opportunities" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading
            eyebrow="Investment Opportunities"
            title="Curated Luxury Investment Opportunities"
            description="Institutional-grade luxury residential and hospitality opportunities sourced and underwritten by Murivest."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {investmentOpportunities.map((opp, idx) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden border border-[#1A1A1A]/5 bg-gradient-to-br from-white to-[#FAF9F6] hover:border-[#B8956B] hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-[#B8956B] to-[#B8956B]/50" />

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-2">
                        {opp.type}
                      </p>
                      <h3 className="font-display text-xl text-[#1A1A1A] mb-1">{opp.title}</h3>
                      <p className="text-sm text-[#4A4A4A] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#B8956B]" />
                        Downtown Dubai
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-1">
                        Rental Yield
                      </p>
                      <p className="font-display text-lg text-[#1B4332]">{opp.yield}</p>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-[#B8956B]/5 rounded-lg border-l-4 border-[#B8956B]">
                    <p className="text-xs uppercase tracking-wider text-[#8A8A8A] mb-1">{opp.bedrooms}</p>
                  </div>

                  <ul className="space-y-3 mb-6 pb-6 border-b border-[#1A1A1A]/5">
                    {opp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-[#4A4A4A]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">Investment</p>
                    <p className="font-display text-lg text-[#1A1A1A]">{opp.price}</p>
                  </div>

                  <button className="w-full px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                    Request Investment Brief
                  </button>
                </div>
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
                title="Expert Advisory for Downtown Dubai Luxury Investors"
              />
              <ul className="space-y-4">
                {[
                  'Deep relationships with 40+ luxury residential developers',
                  'Off-market access to premium apartment launches and penthouses',
                  'Proprietary yield and appreciation analysis across all luxury segments',
                  'Hospitality expertise: branded residences, hotel investments, serviced apartments',
                  'Global capital platform for placement to family offices and institutional investors',
                  'End-to-end advisory: sourcing, underwriting, transaction, portfolio management',
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
                <p className="text-xs uppercase tracking-wider text-[#B8956B] font-semibold mb-1">Services</p>
                <p className="text-sm text-[#1A1A1A] font-medium">
                  Investment Advisory • Luxury Asset Sourcing • Hospitality Investment • Portfolio Strategy
                </p>
              </div>

              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                Explore Downtown Dubai with Murivest
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Whether acquiring a luxury penthouse, investing in branded residences, or structuring a hospitality
                play, Murivest provides independent advisory backed by proprietary market research and direct relationships
                with developers and asset managers.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors"
              >
                Schedule Luxury Advisory Call
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
                Downtown Dubai Luxury Market Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                150-page institutional research covering market overview, luxury segment analysis, hospitality
                opportunities, yield trends, and capital appreciation strategy. Includes Murivest proprietary
                pricing data, developer intelligence, and investment underwriting frameworks.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#8A8A8A] mt-4">
                Your email will be added to Murivest Downtown Dubai luxury research updates.
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
              <h3 className="font-display text-2xl mb-3">Speak with Our Luxury Advisors</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                Schedule a 45-minute luxury investment consultation with a Murivest specialist. We'll discuss
                your investment thesis, district preferences, and introduce you to available opportunities.
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
            Luxury Real Estate Advisory
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in Downtown Dubai Luxury
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest provides independent advisory for luxury residential, hospitality, and mixed-use investments in
            Downtown Dubai. From market research to deal sourcing to transaction execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:dubai@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Start Your Luxury Investment Journey
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