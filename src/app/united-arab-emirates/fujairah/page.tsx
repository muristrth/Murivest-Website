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
  Anchor,
} from 'lucide-react';
import { motion } from 'framer-motion';

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.com/united-arab-emirates/fujairah#local-business',
    name: 'Murivest Fujairah – Maritime & Industrial Real Estate Advisory',
    description:
      'Leading real estate advisor for Fujairah. Specializing in port-adjacent industrial property, maritime logistics, and emerging supply chain infrastructure investment.',
    url: 'https://murivest.com/united-arab-emirates/fujairah',
    telephone: '+971 9 XXX XXXX',
    email: 'fujairah@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fujairah, United Arab Emirates',
      addressLocality: 'Fujairah',
      addressRegion: 'Fujairah',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1164,
      longitude: 56.3426,
    },
  };
}

function generateAreaPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AreaPage',
    name: 'Fujairah – Maritime & Industrial Investment Guide',
    description:
      'Comprehensive guide to Fujairah. Maritime industrial property, port logistics, and emerging infrastructure investment from Murivest.',
    url: 'https://murivest.com/united-arab-emirates/fujairah',
    mainEntity: {
      '@type': 'Place',
      name: 'Fujairah',
      description:
        'UAE\'s premier maritime industrial hub. Strategic Strait of Hormuz positioning, Fujairah Port, and 20M+ sq ft of industrial space. Emerging market with 9–11% projected growth.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.1164,
        longitude: 56.3426,
      },
    },
  };
}

function generateFaqSchema() {
  const faqs = [
    {
      question: 'Is Fujairah a good investment for maritime industrial real estate?',
      answer:
        'Yes. Fujairah is the UAE\'s only port on the Indian Ocean with direct Strait of Hormuz access (strategic advantage). Industrial property yields: 6–8%. Strong growth in oil storage, maritime services, and emerging industrial sectors. Capital appreciation: 5–7% annually.',
    },
    {
      question: 'What types of industrial property exist in Fujairah?',
      answer:
        'Port-adjacent industrial space, oil storage and refining facilities, maritime support services, logistics warehousing, and free zone industrial. Rents: AED 30–55/sq ft depending on specification and proximity to port.',
    },
    {
      question: 'What is the Fujairah Port significance?',
      answer:
        'Fujairah Port is the UAE\'s only port outside the Persian Gulf, enabling non-Strait routing for international trade. Strategic importance growing as alternative to Hormuz transit. Port expansion: AED 40B+ investment planned.',
    },
    {
      question: 'Can foreign investors own industrial property in Fujairah?',
      answer:
        'Yes. UAE law permits 100% foreign ownership of industrial property. Fujairah Free Zone offers additional tax benefits and import/export privileges. Legal title is clear and enforceable.',
    },
    {
      question: 'What are typical yield expectations for Fujairah industrial property?',
      answer:
        'Port-adjacent industrial: 7–8% net yield. Oil storage: 8–10% net yield. Maritime services: 6–8% yield. Higher yields than Dubai due to emerging market positioning and growth potential.',
    },
    {
      question: 'What infrastructure developments are planned for Fujairah?',
      answer:
        'Fujairah Port expansion (AED 40B+), Free Zone development, industrial zones, and logistics hubs. Major investment from UAE government supporting long-term growth strategy.',
    },
    {
      question: 'What sectors drive demand in Fujairah industrial?',
      answer:
        'Oil & gas services, maritime logistics, emerging industrial manufacturing, trade facilitation, and free zone operations. Diversified occupier base with strong, stable demand.',
    },
    {
      question: 'How does Murivest support Fujairah maritime investors?',
      answer:
        'Port-adjacent opportunity sourcing, maritime sector expertise, emerging market market intelligence, and transaction facilitation. Murivest provides strategic guidance for emerging market capital deployment.',
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
      { '@type': 'ListItem', position: 3, name: 'Fujairah', item: 'https://murivest.com/united-arab-emirates/fujairah' },
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

export default function FujairahPage() {
  const whyInvestStats = [
    {
      number: 'Indian Ocean',
      label: 'Strategic Port Access',
      description: 'Only UAE port outside Persian Gulf; direct Strait of Hormuz alternative',
    },
    {
      number: 'AED 40B+',
      label: 'Port & Infrastructure Investment',
      description: 'Government-backed expansion driving long-term growth and occupier demand',
    },
    {
      number: '5–7%',
      label: 'Annual Capital Appreciation',
      description: 'Emerging market premium as infrastructure development accelerates',
    },
    {
      number: '20M+',
      label: 'Sq Ft Industrial Space',
      description: 'Port-adjacent, free zone, and maritime services capacity',
    },
  ];

  const investmentMandates = [
    {
      title: 'Port-Adjacent Industrial',
      description:
        'Logistics and warehousing space directly serving Fujairah Port. 5–7 year hold, 7–8% target yield. Stable occupier demand from port operations and trade.',
      mandate: 'Core+',
    },
    {
      title: 'Maritime & Oil Services',
      description:
        'Oil storage, refining services, and maritime support facilities. 7–10 year hold, 8–10% target yield. Premium pricing and higher margins in specialized sectors.',
      mandate: 'Core+',
    },
    {
      title: 'Emerging Industrial',
      description:
        'General industrial and manufacturing space in growth corridors. 5–8 year hold, 7–9% target yield. Benefiting from emerging market development tailwinds.',
      mandate: 'Core+',
    },
    {
      title: 'Free Zone Development',
      description:
        'Tax-efficient industrial and logistics in Fujairah Free Zone. Build-to-suit or speculative. 10–15 year hold, 12–16% development IRR.',
      mandate: 'Value-Add',
    },
  ];

  const marketMetrics = [
    { metric: 'Industrial Space Rent', value: 'AED 40/sq ft', trend: '+6.4% YoY', detail: 'Port-adjacent premium' },
    { metric: 'Port Industrial Occupancy', value: '88%', trend: '+2.8% YoY', detail: 'Strong growth' },
    { metric: 'Maritime Services Yield', value: '8.2%', trend: 'Rising', detail: 'Sector expansion' },
    { metric: 'Port Traffic Growth', value: '7–9%', trend: 'CAGR 2024–2028', detail: 'Government target' },
  ];

  const operators = ['Fujairah Port Authority', 'Emirates Petroleum', 'Maritime Services Firms', 'Free Zone Operators', 'Regional Distributors'];

  const investmentOpportunities = [
    {
      title: 'Port-Adjacent Warehouse Portfolio',
      type: 'Industrial Core+',
      location: 'Fujairah Port Zone',
      yield: '7.8%',
      highlights: [
        '100,000 sq ft port-serving warehouse',
        'Long-term port-operator tenant',
        'Premium location advantages',
      ],
      price: 'AED 160M+',
    },
    {
      title: 'Oil Storage & Services Facility',
      type: 'Specialized Maritime',
      location: 'Fujairah Port',
      yield: '9.2%',
      highlights: [
        '50,000 sq ft storage & services',
        'Oil trading firms & refineries',
        'High-margin specialized operations',
      ],
      price: 'AED 140M+',
    },
    {
      title: 'Free Zone Industrial Estate',
      type: 'Development Opportunity',
      location: 'Fujairah Free Zone',
      yield: '14% IRR',
      highlights: [
        '300,000+ sq ft development',
        'Tax-efficient positioning',
        'Emerging market growth tailwind',
      ],
      price: 'AED 280M+',
    },
    {
      title: 'Maritime Logistics Hub',
      type: 'Specialized Logistics',
      location: 'Port-Adjacent',
      yield: '7.5%',
      highlights: [
        '80,000 sq ft dedicated logistics',
        'Port support services',
        'Growing trade volumes',
      ],
      price: 'AED 120M+',
    },
  ];

  const fujairahEcosystem = [
    {
      category: 'Port & Maritime',
      items: [
        'Fujairah Port (15M+ TEU target)',
        'Strait of Hormuz alternative routing',
        'Maritime services cluster',
        'International shipping lanes',
      ],
    },
    {
      category: 'Oil & Energy',
      items: [
        'Oil storage and trading',
        'Refining & processing',
        'Energy infrastructure',
        'Fuel supply services',
      ],
    },
    {
      category: 'Logistics & Trade',
      items: [
        'Free zone operations',
        'Regional distribution',
        'Trade facilitation',
        'Supply chain services',
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        'Port expansion (AED 40B+)',
        'Road & rail connectivity',
        'Utilities expansion',
        'Government support',
      ],
    },
  ];

  const researchReports = [
    { title: 'Fujairah Maritime Industrial Outlook 2024–2026', link: '/united-arab-emirates/research/fujairah-outlook' },
    { title: 'Fujairah Port Strategic Analysis', link: '/united-arab-emirates/research/fujairah-port' },
    { title: 'Oil & Maritime Services Investment Guide', link: '/united-arab-emirates/research/maritime-services' },
    { title: 'Fujairah Free Zone Opportunity Analysis', link: '/united-arab-emirates/research/fujairah-freezone' },
    { title: 'UAE Emerging Industrial Hubs Comparison', link: '/united-arab-emirates/research/emerging-hubs' },
    { title: 'Strait of Hormuz Alternative Trade Routes', link: '/united-arab-emirates/research/strait-analysis' },
  ];

  const faqs = [
    {
      question: 'Is Fujairah a good investment for maritime industrial real estate?',
      answer:
        'Yes. Fujairah is the UAE\'s only port on the Indian Ocean with direct Strait of Hormuz access (strategic advantage). Industrial property yields: 6–8%. Strong growth in oil storage, maritime services, and emerging industrial sectors. Capital appreciation: 5–7% annually.',
    },
    {
      question: 'What types of industrial property exist in Fujairah?',
      answer:
        'Port-adjacent industrial space, oil storage and refining facilities, maritime support services, logistics warehousing, and free zone industrial. Rents: AED 30–55/sq ft.',
    },
    {
      question: 'What is the Fujairah Port significance?',
      answer:
        'Fujairah Port is the UAE\'s only port outside the Persian Gulf, enabling non-Strait routing for international trade. Strategic importance growing as alternative to Hormuz transit. Port expansion: AED 40B+ investment planned.',
    },
    {
      question: 'Can foreign investors own industrial property in Fujairah?',
      answer:
        'Yes. UAE law permits 100% foreign ownership. Fujairah Free Zone offers additional tax benefits and import/export privileges. Legal title is clear and enforceable.',
    },
    {
      question: 'What are typical yield expectations for Fujairah industrial property?',
      answer:
        'Port-adjacent industrial: 7–8% net yield. Oil storage: 8–10% net yield. Maritime services: 6–8% yield. Higher yields than Dubai due to emerging market positioning.',
    },
    {
      question: 'What infrastructure developments are planned for Fujairah?',
      answer:
        'Fujairah Port expansion (AED 40B+), Free Zone development, industrial zones, and logistics hubs. Major investment from UAE government supporting long-term growth strategy.',
    },
    {
      question: 'What sectors drive demand in Fujairah industrial?',
      answer:
        'Oil & gas services, maritime logistics, emerging industrial manufacturing, trade facilitation, and free zone operations. Diversified occupier base with strong, stable demand.',
    },
    {
      question: 'How does Murivest support Fujairah maritime investors?',
      answer:
        'Port-adjacent opportunity sourcing, maritime sector expertise, emerging market intelligence, and transaction facilitation. Murivest provides strategic guidance for emerging market capital deployment.',
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
          src="https://images.unsplash.com/photo-1517183903675-67e18009b0f7?w=1920&q=85"
          alt="Fujairah Port and maritime hub"
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
              Strategic Maritime Industrial Hub
            </p>
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-6 md:mb-8 max-w-4xl text-white">
              Fujairah UAE
              <br />
              <span className="text-[#B8956B]">Emerging Port & Supply Chain Capital</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/80 mb-8 md:mb-10">
              The UAE's only Indian Ocean port with strategic Strait of Hormuz access. Fujairah Port is undergoing major expansion (AED 40B+) supporting emerging industrial, maritime services, and trade logistics growth. Home to 20M+ sq ft of industrial space.
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
                  { label: 'Port Investment', value: 'AED 40B+' },
                  { label: 'Industrial Space', value: '20M+ Sq Ft' },
                  { label: 'Port Growth Target', value: '7–9% CAGR' },
                  { label: 'Occupancy', value: '88%+' },
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
            eyebrow="Why Fujairah"
            title="Why Maritime & Industrial Capital Chooses Fujairah"
            description="Strategic port positioning, government-backed infrastructure investment, and emerging market growth premium drive institutional capital deployment."
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
            title="Fujairah Maritime Industrial Intelligence"
            description="Current metrics on port-adjacent yields, occupancy, and growth from Murivest's emerging market research."
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

      {/* ====== MAJOR OPERATORS ====== */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400km] mx-auto">
          <SectionHeading eyebrow="Maritime & Industrial" title="Major Port Operators & Tenants" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {operators.map((operator) => (
              <div
                key={operator}
                className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/5 rounded-lg text-sm text-[#1A1A1A] font-medium text-center hover:border-[#B8956B] transition-colors"
              >
                {operator}
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
            title="Curated Fujairah Maritime Industrial Opportunities"
            description="Port-adjacent and maritime-focused opportunities from Murivest's emerging market platform."
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
                        Yield / IRR
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
            eyebrow="Maritime Ecosystem"
            title="Fujairah Strategic & Industrial Assets"
            description="Port infrastructure and occupier ecosystem supporting long-term value creation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {fujairahEcosystem.map((section) => (
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
                      <Anchor className="w-4 h-4 text-[#B8956B] shrink-0 mt-0.5" strokeWidth={1.5} />
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
                title="Expert Advisory for Fujairah Maritime Capital"
              />
              <ul className="space-y-4">
                {[
                  'Port-adjacent opportunity sourcing and market intelligence',
                  'Maritime and oil services sector expertise',
                  'Emerging market emerging market positioning strategy',
                  'Port infrastructure & expansion analysis',
                  'Global maritime capital platform & relationships',
                  'Fast deal cycles with transparent processes',
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
                  Investment Advisory • Maritime Expertise • Emerging Market Strategy • Capital Deployment
                </p>
              </div>

              <h3 className="font-display text-2xl text-[#1A1A1A] mb-4">
                Discuss Your Fujairah Strategy
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">
                Murivest identifies and facilitates institutional maritime and industrial investments in Fujairah's emerging market. Strategic port positioning and government support drive long-term value creation.
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
                Fujairah Maritime Industrial Report 2024–2026
              </h3>
              <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6">
                125-page institutional research on port-adjacent opportunities, maritime & oil services, emerging industrial growth, and capital deployment framework. Includes port expansion analysis and strategic positioning.
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
              <h3 className="font-display text-2xl mb-3">Speak with Our Maritime Team</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                Schedule a consultation with a Fujairah maritime specialist. We'll discuss port-adjacent opportunities and emerging market positioning strategy.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="tel:+97169xxxxxx"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1B4332] text-sm font-semibold hover:bg-[#FAF9F6] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Fujairah Office
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
            Maritime & Industrial Real Estate Investment
          </p>
          <h2 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-4 md:mb-6">
            Invest in Fujairah's Maritime Future
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10">
            Murivest identifies and facilitates institutional maritime and industrial investments in Fujairah's emerging market. Strategic port positioning and government-backed growth create long-term value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="mailto:fujairah@murivest.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B4332] text-sm font-medium tracking-wide hover:bg-[#FAF9F6] transition-colors"
              style={{ minHeight: 48 }}
            >
              Explore Fujairah Opportunities
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