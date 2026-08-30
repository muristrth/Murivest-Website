import type { Metadata } from 'next';
import { SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import { realEstateAgentSchema, webPageSchema, jsonLd } from '@/lib/schema';
import ContactForm from '../(components)/shared/ContactForm';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';

export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),
  title: {
    default: SEO_TEMPLATES.contact.title,
    template: '%s | Murivest Singapore',
  },
  description: SEO_TEMPLATES.contact.description,
  keywords: SEO_TEMPLATES.contact.keywords,
  alternates: {
    canonical: '/singapore/contact',
    languages: {
      'en-SG': '/singapore/contact',
      'en': '/singapore',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/singapore/contact',
    siteName: 'Murivest',
    title: SEO_TEMPLATES.contact.title,
    description: SEO_TEMPLATES.contact.description,
    images: [
      {
        url: '/og-singapore.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Singapore — Contact',
      },
    ],
    countryName: 'Singapore',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: SEO_TEMPLATES.contact.title,
    description: SEO_TEMPLATES.contact.description,
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
    'format-detection': 'telephone=yes',
    'theme-color': '#1B4332',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Contact', url: 'https://murivest.com/singapore/contact' },
      ]} />
      {jsonLd(realEstateAgentSchema({
        '@id': 'https://murivest.com/singapore/contact/#realestateagent',
        url: 'https://murivest.com/singapore/contact',
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
        '@id': 'https://murivest.com/singapore/contact/#webpage',
        url: 'https://murivest.com/singapore/contact',
        name: SEO_TEMPLATES.contact.title,
        description: SEO_TEMPLATES.contact.description,
        inLanguage: 'en-SG',
        isPartOf: { '@type': 'WebSite', '@id': 'https://murivest.com/#website' },
        about: { '@id': 'https://murivest.com/singapore/#organization' },
        spatialCoverage: { '@type': 'Country', name: 'Singapore' },
        breadcrumb: { '@id': 'https://murivest.com/singapore/contact/#breadcrumb' },
      }))}

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Contact</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-4">
                Speak to an <span className="italic text-[#B8956B] font-light">Advisor</span>
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Schedule a private consultation with our Singapore investment advisory team. 
                Discreet service for UHNWI, family offices, and institutional investors.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <ContactForm variant="full" />
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}
