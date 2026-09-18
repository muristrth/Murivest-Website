import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Home, BarChart3, Layers } from 'lucide-react';
import { SERVICES, SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import ContactForm from '../(components)/shared/ContactForm';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';
import {
  serviceSchema,
  realEstateAgentSchema,
  webPageSchema,
  jsonLd,
} from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),
  title: {
    default: SEO_TEMPLATES.services.title,
    template: '%s | Murivest Singapore',
  },
  description: SEO_TEMPLATES.services.description,
  keywords: SEO_TEMPLATES.services.keywords,
  alternates: {
    canonical: '/singapore/services',
    languages: {
      'en-SG': '/singapore/services',
      'en': '/singapore',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/singapore/services',
    siteName: 'Murivest',
    title: SEO_TEMPLATES.services.title,
    description: SEO_TEMPLATES.services.description,
    images: [
      {
        url: '/og-singapore.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Singapore — Advisory Services',
      },
    ],
    countryName: 'Singapore',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: SEO_TEMPLATES.services.title,
    description: SEO_TEMPLATES.services.description,
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

const iconMap: Record<string, React.ReactNode> = {
  acquisition: <TrendingUp className="w-6 h-6" strokeWidth={1.2} />,
  disposition: <Home className="w-6 h-6" strokeWidth={1.2} />,
  'asset-management': <BarChart3 className="w-6 h-6" strokeWidth={1.2} />,
  'portfolio-advisory': <Layers className="w-6 h-6" strokeWidth={1.2} />,
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Services', url: 'https://murivest.com/singapore/services' },
      ]} />
      {jsonLd(serviceSchema({
        name: 'Singapore Commercial Real Estate Advisory',
        description: 'Institutional-grade advisory services for Singapore commercial real estate: acquisition, disposition, asset management, and portfolio advisory for UHNWI, family offices, and sovereign wealth funds.',
        url: 'https://murivest.com/singapore/services',
        providerName: 'Murivest Singapore',
      }))}
      {jsonLd(realEstateAgentSchema({
        '@id': 'https://murivest.com/singapore/services/#realestateagent',
        url: 'https://murivest.com/singapore/services',
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
        '@id': 'https://murivest.com/singapore/services/#webpage',
        url: 'https://murivest.com/singapore/services',
        name: SEO_TEMPLATES.services.title,
        description: SEO_TEMPLATES.services.description,
        inLanguage: 'en-SG',
        isPartOf: { '@type': 'WebSite', '@id': 'https://murivest.com/#website' },
        about: { '@id': 'https://murivest.com/singapore/#organization' },
        spatialCoverage: { '@type': 'Country', name: 'Singapore' },
        breadcrumb: { '@id': 'https://murivest.com/singapore/services/#breadcrumb' },
      }))}

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-4 font-medium">Advisory Services</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-6">
                Institutional <span className="italic text-[#8B7355] font-light">Services</span>
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                End-to-end advisory for institutional investors deploying capital into 
                Singapore commercial real estate. From acquisition to exit, we represent your interests.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <SectionHeader
              kicker="Capabilities"
              title="Four Pillars of Advisory"
              subtitle="Every service is delivered with institutional precision and complete discretion."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SERVICES.map((service, i) => (
                <ScrollReveal key={service.slug} delay={i * 0.1}>
                  <div className="bg-white border border-[#E5E2DC] p-8 md:p-10 hover:shadow-xl hover:border-[#8B7355]/20 transition-all duration-500 group h-full">
                    <div className="w-14 h-14 border border-[#8B7355]/30 flex items-center justify-center text-[#8B7355] mb-6 group-hover:bg-[#8B7355]/10 transition-colors">
                      {iconMap[service.slug]}
                    </div>

                    <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">{service.title}</h3>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355] mb-4">{service.tagline}</p>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed font-light mb-8">{service.description}</p>

                    <div className="space-y-2 mb-8">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-[#8B7355] mt-2 shrink-0" />
                          <span className="text-[13px] text-[#2C2C2C]">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Process */}
                    <div className="pt-6 border-t border-[#E5E2DC]">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">Our Process</p>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, j) => (
                          <span key={step} className="flex items-center gap-1.5 text-[10px] text-[#5A5A5A]">
                            {j > 0 && <ArrowRight className="w-3 h-3 text-[#E5E2DC]" />}
                            <span className="px-2 py-1 bg-[#F5F4F0] border border-[#E5E2DC]">{step}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl text-white mb-4">Ready to Discuss Your Mandate?</h2>
              <p className="text-sm text-white/60 max-w-xl mx-auto font-light mb-8">
                Schedule a confidential consultation with our senior advisory team. 
                No obligation. No pressure. Only institutional-grade advice.
              </p>
              <Link
                href="/singapore/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B7355] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}
