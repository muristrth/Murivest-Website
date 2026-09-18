import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { SAMPLE_ARTICLES, SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';
import {
  collectionPageSchema,
  realEstateAgentSchema,
  webPageSchema,
  jsonLd,
} from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),
  title: {
    default: SEO_TEMPLATES.insights.title,
    template: '%s | Murivest Singapore',
  },
  description: SEO_TEMPLATES.insights.description,
  keywords: SEO_TEMPLATES.insights.keywords,
  alternates: {
    canonical: '/singapore/insights',
    languages: {
      'en-SG': '/singapore/insights',
      'en': '/singapore',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/singapore/insights',
    siteName: 'Murivest',
    title: SEO_TEMPLATES.insights.title,
    description: SEO_TEMPLATES.insights.description,
    images: [
      {
        url: '/og-singapore.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Singapore — Insights & Research',
      },
    ],
    countryName: 'Singapore',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: SEO_TEMPLATES.insights.title,
    description: SEO_TEMPLATES.insights.description,
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
    'theme-color': '#2C2C2C',
  },
};

const categories = ['All', 'Market Report', 'Investment Insight', 'Regulatory Update', 'Sector Analysis'];

export default function InsightsPage() {
  const featured = SAMPLE_ARTICLES.filter((a) => a.featured);
  const regular = SAMPLE_ARTICLES.filter((a) => !a.featured);

  const insightsList = [...featured, ...regular].map((article) => ({
    name: article.title,
    description: article.excerpt,
    url: `https://murivest.com/singapore/insights/${article.slug}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Insights', url: 'https://murivest.com/singapore/insights' },
      ]} />
      {jsonLd(collectionPageSchema({
        name: 'Singapore Commercial Real Estate Insights & Research',
        description: 'Institutional-grade Singapore market reports, investment insights, and regulatory updates for commercial real estate investors.',
        url: 'https://murivest.com/singapore/insights',
        items: insightsList.slice(0, 10),
      }))}
      {jsonLd(realEstateAgentSchema({
        '@id': 'https://murivest.com/singapore/insights/#realestateagent',
        url: 'https://murivest.com/singapore/insights',
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
        '@id': 'https://murivest.com/singapore/insights/#webpage',
        url: 'https://murivest.com/singapore/insights',
        name: SEO_TEMPLATES.insights.title,
        description: SEO_TEMPLATES.insights.description,
        inLanguage: 'en-SG',
        isPartOf: { '@type': 'WebSite', '@id': 'https://murivest.com/#website' },
        about: { '@id': 'https://murivest.com/singapore/#organization' },
        spatialCoverage: { '@type': 'Country', name: 'Singapore' },
        breadcrumb: { '@id': 'https://murivest.com/singapore/insights/#breadcrumb' },
      }))}

      <main>
        {/* Header */}
        <section className="pt-32 pb-12 bg-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-4 font-medium">Market Intelligence</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-4">
                Research & <span className="italic text-[#8B7355] font-light">Insights</span>
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Institutional-grade market reports, investment insights, and regulatory updates 
                written by senior advisors for qualified investors.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-0 z-30 bg-white border-b border-[#E5E2DC]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium mr-2">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-[11px] tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                    cat === 'All'
                      ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                      : 'bg-white text-[#5A5A5A] border-[#E5E2DC] hover:border-[#8B7355]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-8 font-medium">Featured Research</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featured.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.1}>
                  <Link href={`/singapore/insights/${article.slug}`} className="group block bg-white border border-[#E5E2DC] hover:shadow-lg transition-all duration-500 h-full">
                    <div className="relative h-[180px] bg-[#2C2C2C] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">{article.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-[#2C2C2C] group-hover:text-[#2C2C2C] transition-colors leading-snug mb-3">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] font-light line-clamp-3 mb-4">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-[10px] text-[#5A5A5A]">
                        <span className="text-[#8B7355]">{article.author}</span>
                        <span>|</span>
                        <span>{article.date}</span>
                        <span>|</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Article List */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-8 font-medium">All Articles</p>
            <div className="space-y-0">
              {regular.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.05}>
                  <Link href={`/singapore/insights/${article.slug}`} className="group flex flex-col md:flex-row gap-6 py-8 border-b border-[#E5E2DC] hover:bg-white hover:px-6 transition-all duration-300">
                    <div className="md:w-48 h-32 bg-[#2C2C2C] shrink-0 flex items-center justify-center">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B7355]">{article.category}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#2C2C2C] transition-colors leading-snug mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] font-light line-clamp-2 mb-3">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-[10px] text-[#5A5A5A]">
                        <span className="text-[#8B7355]">{article.author}</span>
                        <span>|</span>
                        <span>{article.date}</span>
                        <span>|</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#5A5A5A] group-hover:text-[#8B7355] transition-colors self-center shrink-0 hidden md:block" strokeWidth={1.5} />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}
