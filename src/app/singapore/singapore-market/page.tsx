import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, MapPin, ArrowUpRight, Download } from 'lucide-react';
import { DISTRICTS, URA_MASTER_PLAN_2025, MARKET_SNAPSHOT, SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';
import { realEstateAgentSchema, webPageSchema, jsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),
  title: {
    default: SEO_TEMPLATES.market.title,
    template: '%s | Murivest Singapore',
  },
  description: SEO_TEMPLATES.market.description,
  keywords: SEO_TEMPLATES.market.keywords,
  alternates: {
    canonical: '/singapore/singapore-market',
    languages: {
      'en-SG': '/singapore/singapore-market',
      'en': '/singapore',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/singapore/singapore-market',
    siteName: 'Murivest',
    title: SEO_TEMPLATES.market.title,
    description: SEO_TEMPLATES.market.description,
    images: [
      {
        url: '/og-singapore.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Singapore — Market Overview',
      },
    ],
    countryName: 'Singapore',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: SEO_TEMPLATES.market.title,
    description: SEO_TEMPLATES.market.description,
    images: ['/og-singapore.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#1B4332',
  },
};

export default function SingaporeMarketPage() {
  const tier1 = DISTRICTS.filter((d) => d.tier === 1);
  const tier2 = DISTRICTS.filter((d) => d.tier === 2);
  const tier3 = DISTRICTS.filter((d) => d.tier === 3);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Singapore Market', url: 'https://murivest.com/singapore/singapore-market' },
      ]} />
      {jsonLd(realEstateAgentSchema({
        '@id': 'https://murivest.com/singapore/singapore-market/#realestateagent',
        url: 'https://murivest.com/singapore/singapore-market',
        telephone: '+65-6123-4567',
        email: 'singapore@murivest.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SG',
          addressLocality: 'Singapore',
          streetAddress: '1 Raffles Place',
          postalCode: '048616',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 1.2834,
          longitude: 103.8572,
        },
        areaServed: { '@type': 'Country', name: 'Singapore' },
      }))}
      {jsonLd(webPageSchema({
        '@id': 'https://murivest.com/singapore/singapore-market/#webpage',
        url: 'https://murivest.com/singapore/singapore-market',
        name: SEO_TEMPLATES.market.title,
        description: SEO_TEMPLATES.market.description,
        inLanguage: 'en-SG',
        isPartOf: { '@type': 'WebSite', '@id': 'https://murivest.com/#website' },
        about: { '@id': 'https://murivest.com/singapore/#organization' },
        spatialCoverage: { '@type': 'Country', name: 'Singapore' },
        breadcrumb: { '@id': 'https://murivest.com/singapore/singapore-market/#breadcrumb' },
      }))}

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Market Intelligence</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-6">
                Singapore <span className="italic text-[#B8956B] font-light">Market</span> Overview
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Comprehensive district-by-district analysis of Singapore&apos;s commercial real estate market. 
                Updated quarterly with data from CBRE, Savills, URA, and MAS.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Macro Overview */}
        <section className="py-16 bg-[#F8F7F4] border-b border-[#E8E6E1]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Grade A CBD Rent', value: `S$${MARKET_SNAPSHOT.averageCBDRent}`, context: 'per sqft/month' },
                { label: 'CBD Vacancy Rate', value: `${MARKET_SNAPSHOT.gradeAVacancyRate}%`, context: 'CBRE Q1 2026' },
                { label: 'Cap Rate (Core)', value: `${MARKET_SNAPSHOT.gradeACapRateLow}% – ${MARKET_SNAPSHOT.gradeACapRateHigh}%`, context: 'CBD Grade A' },
                { label: 'S-REIT Market Cap', value: 'S$100B+', context: 'SGX March 2026' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="font-mono text-2xl md:text-3xl text-[#1B4332] mb-1">{metric.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680]">{metric.label}</p>
                  <p className="text-[10px] text-[#B8956B] mt-0.5">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* District Cards */}
        <section className="py-20 md:py-32 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            {/* Tier 1 */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-[#B8956B]" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] font-medium">Tier 1 — Core CBD</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tier1.map((district, i) => (
                  <ScrollReveal key={district.slug} delay={i * 0.1}>
                    <DistrictCard district={district} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Tier 2 */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-[#8B8680]" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B8680] font-medium">Tier 2 — Prime Fringe</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tier2.map((district, i) => (
                  <ScrollReveal key={district.slug} delay={i * 0.1}>
                    <DistrictCard district={district} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Tier 3 */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-[#E8E6E1]" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E6E1] font-medium">Tier 3 — Emerging</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tier3.map((district, i) => (
                  <ScrollReveal key={district.slug} delay={i * 0.1}>
                    <DistrictCard district={district} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* URA Master Plan */}
        <section className="py-20 md:py-32 bg-[#FAF9F6]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <SectionHeader
              kicker="Regulatory Framework"
              title="URA Master Plan 2025"
              subtitle="Key planning initiatives that will reshape Singapore's commercial landscape over the next decade."
              align="center"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {URA_MASTER_PLAN_2025.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-white border border-[#E8E6E1] p-6 md:p-8 h-full hover:shadow-lg transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                        Impact: {item.impact}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-[#2C2C2C] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#8B8680] font-light leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.districts.map((d) => (
                        <span key={d} className="text-[9px] tracking-wider uppercase bg-[#1B4332]/5 text-[#1B4332] px-2 py-1">{d}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl text-white mb-4">Download the Full Market Report</h2>
              <p className="text-sm text-white/60 max-w-xl mx-auto font-light mb-8">
                Our comprehensive Q2 2026 Singapore Commercial Real Estate Market Report is 
                available exclusively to qualified investors upon NDA execution.
              </p>
              <Link
                href="/singapore/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors"
              >
                <Download className="w-4 h-4" strokeWidth={1.5} />
                Request Market Report
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}

function DistrictCard({ district }: { district: typeof DISTRICTS[0] }) {
  const tierLabels: Record<number, string> = { 1: 'Core CBD', 2: 'Prime Fringe', 3: 'Emerging' };
  
  return (
    <Link
      href={`/singapore/singapore-market/${district.slug}`}
      className="group block bg-white border border-[#E8E6E1] hover:shadow-lg hover:border-[#B8956B]/20 transition-all duration-500 h-full"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] tracking-[0.2em] uppercase bg-[#1B4332] text-white px-2.5 py-1 font-medium">
            {tierLabels[district.tier]}
          </span>
          <TrendingUp className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-2">
          {district.name}
        </h3>
        <p className="text-[11px] text-[#8B8680] italic mb-4">{district.tagline}</p>
        <p className="text-sm text-[#8B8680] leading-relaxed font-light mb-6 line-clamp-3">
          {district.description}
        </p>
        <div className="space-y-2 pt-4 border-t border-[#E8E6E1]">
          {district.keyStats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="text-[10px] tracking-wider uppercase text-[#8B8680]">{stat.label}</span>
              <span className="font-mono text-[12px] text-[#1B4332]">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-4 text-[#B8956B]">
          <span className="text-[10px] tracking-[0.15em] uppercase font-medium">View District Report</span>
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
