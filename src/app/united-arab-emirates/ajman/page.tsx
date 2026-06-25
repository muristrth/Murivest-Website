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
  Waves,
} from 'lucide-react';
import { motion } from 'framer-motion';

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/ajman#local-business',
    name: 'Murivest Ajman – Real Estate & Hospitality Advisory',
    description:
      'Leading real estate advisor for Ajman. Specializing in value-add hospitality, mixed-use development, and residential opportunities in UAE\'s emerging beach destination.',
    url: 'https://murivest.com/united-arab-emirates/ajman',
    telephone: '+971 6 XXX XXXX',
    email: 'ajman@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ajman, United Arab Emirates',
      addressLocality: 'Ajman',
      addressRegion: 'Ajman',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.4164,
      longitude: 55.4223,
    },
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'Ajman – Emerging Emirate Real Estate Investment Guide',
    description:
      'Comprehensive guide to Ajman. Value-add real estate, hospitality investment, and emerging market advisory from Murivest.',
    url: 'https://murivest.com/united-arab-emirates/ajman',
    mainEntity: {
      '@type': 'Place',
      name: 'Ajman',
      description:
        'Emerging beach destination with lower entry costs, significant infrastructure investment, and strong growth potential. Home to 300,000+ residents and growing tourism sector.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.4164,
        longitude: 55.4223,
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Ajman a good investment for value-add real estate?',
      answer:
        'Yes. Ajman is undergoing significant infrastructure development and positioning as a beach destination. Lower entry costs (30–40% below Dubai) create value-add opportunities. Yields: 5–7% core, 8–10% value-add. Capital appreciation: 4–6% annually as development matures.',
    },
    {
      question: 'What are typical property prices in Ajman?',
      answer:
        'Residential apartments: AED 2,500–4,500/sq ft. Hospitality/mixed-use: AED 3,000–5,000/sq ft. 30–40% lower than Dubai. Prices appreciating 4–6% annually as infrastructure investment accelerates.',
    },
    {
      question: 'What investment opportunities exist in Ajman?',
      answer:
        'Beachfront hospitality redevelopment, mixed-use residential + retail, tourism-driven properties, and land development. Value-add focus: acquiring older assets, repositioning, and selling at Dubai-equivalent multiples.',
    },
    {
      question: 'Can foreign investors own property in Ajman?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of residential and commercial property in Ajman. Legal title is clear and enforceable. Murivest advises on optimal ownership structures.',
    },
    {
      question: 'What are rental yield expectations in Ajman?',
      answer:
        'Residential: 4–5% rental yield. Hospitality: 6–8% yield + capital appreciation. Yields are lower than core Dubai but supported by growing tourism and residential demand.',
    },
    {
      question: 'What infrastructure developments are planned for Ajman?',
      answer:
        'Ajman Port expansion, new beaches and waterfront developments, shopping and entertainment centres, and hospitality projects. Capital investment: AED 50B+ over next 5–10 years. Development tailwind drives property appreciation.',
    },
    {
      question: 'What is the occupancy and rental growth outlook for Ajman?',
      answer:
        'Residential occupancy: 85–90% (growing). Hospitality occupancy: 75–85% (tourism-driven). Rental growth: 3–5% annually as demand accelerates. Long-term growth in tourism and residential sectors.',
    },
    {
      question: 'How does Murivest support value-add investors in Ajman?',
      answer:
        'Opportunity identification, asset evaluation, value-add strategy development, project management, and exit facilitation. Murivest provides market intelligence and development expertise to optimize returns.',
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
      { '@type': 'ListItem', position: 3, name: 'Ajman', item: 'https://murivest.com/united-arab-emirates/ajman' },
    ],
  };
}

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

export default function AjmanPage() {
  const whyInvestStats = [
    {
      number: '30–40%',
      label: 'Lower Entry Costs vs Dubai',
      description: 'Significant cost advantage for value-add acquisition and repositioning',
    },
    {
      number: 'AED 50B+',
      label: 'Infrastructure Investment',
      description: 'Port expansion, beaches, mixed-use development planned through 2030',
    },
    {
      number: '4–6%',
      label: 'Annual Capital Appreciation',
      description: 'Long-term growth as development matures and infrastructure improves',
    },
    {
      number: '300K+',
      label: 'Resident Population',
      description: 'Growing residential base; strong demand tailwind for mixed-use',
    },
  ];

  const investmentFocus = [
    {
      title: 'Beachfront Hospitality Redevelopment',
      description:
        'Legacy hotels and beach resorts with repositioning potential. Convert to mixed-use, luxury hospitality, or residential-hospitality hybrid. 8–12 year hold, 12–18% IRR.',
      focus: 'Value-Add',
    },
    {
      title: 'Mixed-Use Waterfront Development',
      description:
        'Residential + retail + hospitality integrated projects. Leverage beach positioning and lower entry costs. Development IRR: 15–20%.',
      focus: 'Development',
    },
    {
      title: 'Residential Apartment Investment',
      description:
        'Growing residential demand. Core focus on emerging mid-rise developments in growth corridors. 5–7% rental yield, 4–6% appreciation.',
      focus: 'Core+',
    },
    {
      title: 'Tourism Infrastructure',
      description:
        'Entertainment, sports facilities, wellness centres supporting hospitality ecosystem. Ancillary income and lifestyle appeal. 6–8% yield.',
      focus: 'Core+',
    },
  ];

  const marketMetrics = [
    { metric: 'Residential Price/Sq Ft', value: 'AED 3,500', trend: '+5.2% YoY', detail: 'Below Dubai by 40%' },
    { metric: 'Hospitality Occupancy', value: '78%', trend: '+3.1% YoY', detail: 'Growing tourism' },
    { metric: 'Residential Yield', value: '4.8%', trend: '+0.5% YoY', detail: 'Growing rental demand' },
    { metric: 'Infrastructure Pipeline', value: 'AED 50B+', trend: 'Active', detail: 'Next 5–10 years' },
  ];

  const developers = ['Ajman Properties', 'Ajman Municipality', 'Private Developers', 'International Partners'];

  const investmentOpportunities = [
    {
      title: 'Beachfront Hotel Repositioning',
      type: 'Hospitality Value-Add',
      location: 'Ajman Waterfront',
      yield: '12% IRR',
      highlights: [
        'Legacy 4-star hotel (200 rooms)',
        'Convert to luxury + residential',
        'Repositioning value: AED 100M+',
      ],
      price: 'AED 380M+',
    },
    {
      title: 'Mixed-Use Beach Development',
      type: 'Development Opportunity',
      location: 'Prime Waterfront',
      yield: '16% IRR',
      highlights: [
        '400,000+ sq ft residential + retail',
        'Beach positioning + Dubai proximity',
        'Full development control',
      ],
      price: 'AED 650M+',
    },
    {
      title: 'Residential Apartment Complex',
      type: 'Core Residential',
      location: 'Ajman City',
      yield: '5.5%',
      highlights: [
        '250 units, modern amenities',
        'Growing occupancy (85%)',
        ' 3–5% annual rent growth',
      ],
      price: 'AED 280M+',
    },
    {
      title: 'Lifestyle & Leisure Centre',
      type: 'Tourism Infrastructure',
      location: 'Ajman Waterfront',
      yield: '7.2%',
      highlights: [
        'Sports, wellness, dining',
        'Supports hospitality ecosystem',
        'Diversified income streams',
      ],
      price: 'AED 120M+',
    },
  ];

  const ajmanAssets = [
    {
      category: 'Beach & Waterfront',
      items: [
        ' 10+ km pristine beach',
        'Waterfront development zones',
        'New marina expansion planned',
        'Beach clubs & water sports',
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        'Port expansion (capacity +50%)',
        'New highways and connectivity',
        'Industrial zones developed',
        'Utility infrastructure upgraded',
      ],
    },
    {
      category: 'Hospitality & Tourism',
      items: [
        'Growing hotel market',
        'Tourism board initiatives',
        'Events & festivals',
        'International brand interest',
      ],
    },
    {
      category: 'Residential Growth',
      items: [
        '300K+ residents (growing 5% YoY)',
        'Mixed-income housing',
        'New residential projects',
        'Family-oriented positioning',
      ],
    },
  ];

  const researchReports = [
    { title: 'Ajman Real Estate Market Outlook 2024–2026', link: '/united-arab-emirates/research/ajman-outlook' },
    { title: 'Value-Add Repositioning Strategies', link: '/united-arab-emirates/research/value-add' },
    { title: 'Ajman Tourism & Hospitality Growth', link: '/united-arab-emirates/research/ajman-tourism' },
    { title: 'Mixed-Use Development Case Studies', link: '/united-arab-emirates/research/mixed-use-ajman' },
    { title: 'UAE Emerging Market Comparison', link: '/united-arab-emirates/research/emerging-markets' },
    { title: 'Ajman Infrastructure & Development Pipeline', link: '/united-arab-emirates/research/ajman-infrastructure' },
  ];

  const faqs = [
    {
      question: 'Is Ajman a good investment for value-add real estate?',
      answer:
        'Yes. Ajman is undergoing significant infrastructure development. Lower entry costs (30–40% below Dubai) create value-add opportunities. Yields: 5–7% core, 8–10% value-add. Capital appreciation: 4–6% annually.',
    },
    {
      question: 'What are typical property prices in Ajman?',
      answer:
        'Residential apartments: AED 2,500–4,500/sq ft. Hospitality/mixed-use: AED 3,000–5,000/sq ft. 30–40% lower than Dubai. Prices appreciating 4–6% annually.',
    },
    {
      question: 'What investment opportunities exist in Ajman?',
      answer:
        'Beachfront hospitality redevelopment, mixed-use residential + retail, tourism-driven properties, and land development. Value-add focus: acquiring older assets, repositioning, and selling at Dubai-equivalent multiples.',
    },
    {
      question: 'Can foreign investors own property in Ajman?',
      answer:
        'Yes. UAE law permits 100% foreign ownership. Legal title is clear and enforceable. Murivest advises on optimal ownership structures.',
    },
    {
      question: 'What are rental yield expectations in Ajman?',
      answer:
        'Residential: 4–5% rental yield. Hospitality: 6–8% yield + capital appreciation. Yields are lower than core Dubai but supported by growing tourism and residential demand.',
    },
    {
      question: 'What infrastructure developments are planned for Ajman?',
      answer:
        'Ajman Port expansion, new beaches and waterfront developments, shopping and entertainment centres, and hospitality projects. Capital investment: AED 50B+ over next 5–10 years.',
    },
    {
      question: 'What is the occupancy and rental growth outlook for Ajman?',
      answer:
        'Residential occupancy: 85–90% (growing). Hospitality occupancy: 75–85% (tourism-driven). Rental growth: 3–5% annually. Long-term growth in tourism and residential sectors.',
    },
    {
      question: 'How does Murivest support value-add investors in Ajman?',
      answer:
        'Opportunity identification, asset evaluation, value-add strategy development, project management, and exit facilitation. Murivest provides market intelligence and development expertise to optimize returns.',
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
          src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1920&q=85"
          alt="Ajman beach and waterfront"
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
              Emerging Beach Destination
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-4xl text-white">
              Ajman UAE
              <br />
              <span className="text-[#B8956B]">Value-Add & Growth Investment</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              Emerging beach destination with 30–40% lower entry costs than Dubai, significant infrastructure investment (AED 50B+), and strong value-add opportunities. Residential, hospitality, and mixed-use development tailwinds.
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
                  { label: 'Cost Advantage', value: '30–40%' },
                  { label: 'Infrastructure', value: 'AED 50B+' },
                  { label: 'Appreciation', value: '4–6% YoY' },
                  { label: 'Population', value: '300K+' },
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
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Why Ajman"
            title="Why Value-Add Capital Chooses Ajman"
            description="Lower entry costs, significant infrastructure investment, and long-term growth tailwinds create compelling value-add opportunities."
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {investmentFocus.map((focus) => (
              <div
                key={focus.title}
                className="p-8 bg-white border border-[#1A1A1A]/5 rounded-lg hover:border-[#B8956B] transition-colors"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-[#B8956B]/10 rounded-full">
                  <p className="text-xs font-semibold text-[#B8956B] uppercase tracking-wider">
                    {focus.focus}
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
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Market Data"
            title="Ajman Real Estate Market Intelligence"
            description="Current metrics on pricing, yields, and growth outlook from Murivest's emerging market research."
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

      {/* ====== DEVELOPERS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading eyebrow="Partners" title="Principal Ajman Developers & Partners" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {developers.map((developer) => (
              <div
                key={developer}
                className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium text-center hover:border-[#B8956B] transition-colors"
              >
                {developer}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED OPPORTUNITIES ====== */}
      <section id="opportunities" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Investment Opportunities"
            title="Curated Ajman Value-Add Opportunities"
            description="Development and repositioning opportunities in Ajman's fastest-growing market segments."
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
                        IRR / Yield
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
                    <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">Investment</p>
                    <p className="font-display text-lg text-[#1A1A1A]">{opp.price}</p>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                    Request Investment Brief
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ASSETS & POTENTIAL ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading
            eyebrow="Assets"
            title="Ajman Growth Assets & Potential"
            description="Strategic assets and development potential that support long-term value creation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {ajmanAssets.map((section) => (
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
                      <Waves className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
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
                title="Expert Advisory for Ajman Investors"
              />
              <ul className="space-y-4">
                {[
                  'Opportunity sourcing and market intelligence',
                  'Value-add strategy & development planning',
                  'Project management and execution oversight',
                  'Market positioning and exit optimization',
                  'Network of developers and capital partners',
                  'Fast deal cycles and transparent processes',
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
                  Investment Advisory • Value-Add Strategy • Development Management • Market Intelligence
                </p>
              </div>

              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                Discuss Your Ajman Opportunity
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Murivest identifies and facilitates value-add and development opportunities for investors seeking growth at lower entry costs.
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
                Ajman Real Estate Market Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                120-page institutional research on emerging market opportunity, value-add strategies, development pipeline, and capital deployment framework. Includes pricing, yields, and transaction comparables.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#142d23] transition-colors">
                Download Report (PDF)
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-12 bg-[#1B4332] text-white border border-[#1B4332] rounded-lg"
            >
              <Phone className="w-8 h-8 text-[#B8956B] mb-4" />
              <h3 className="font-display text-2xl mb-3">Speak with Our Team</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                Schedule a consultation with an Ajman market specialist. We'll discuss value-add opportunities and market positioning.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="tel:+97146xxxxxx"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1B4332] text-sm font-semibold hover:bg-[#FAF9F6] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Ajman Office
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
          <SectionHeading eyebrow="Research" title="Market Intelligence & Reports" />
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
            Value-Add Real Estate Investment
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in Ajman's Growth Potential
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest identifies and facilitates value-add and development opportunities for institutional capital seeking growth exposure at lower entry costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:ajman@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Explore Ajman Opportunities
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/united-arab-emirates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              style={{ minHeight: 48 }}
            >
              Return to UAE Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}