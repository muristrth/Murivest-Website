// src/app/kenya/layout.tsx

import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default:
      'Commercial Real Estate Advisory Kenya - Murivest Realty Group',
    template: '%s | Murivest Realty Group',
  },

  description:
    'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

  keywords:
    'commercial real estate advisory Kenya, Nairobi commercial property, institutional real estate advisory, commercial property investment Kenya, property management Kenya, real estate advisory services, Murivest Realty Group, commercial property Nairobi',

  authors: [{ name: 'Murivest Realty Group' }],

  creator: 'Murivest Realty Group',

  publisher: 'Murivest Realty Group',

  metadataBase: new URL('https://murivest.com'),

  alternates: {
    canonical: 'https://murivest.com',
  },

  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.com',

    title:
      'Commercial Real Estate Advisory Kenya - Murivest Realty Group',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi.',

    siteName: 'Murivest Realty Group',

    images: [
      {
        url: 'https://murivest.com/kenya-night.webp',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Commercial Real Estate Advisory Kenya - Murivest Realty Group',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi.',

    images: ['https://murivest.com/kenya-night.webp'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'mZuQ5eAJX2bdSHNjKx6J8kzGipYsyLbr2iseGxdlk7A',
    yandex: '0e78bfd13221ea6b',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Murivest Realty Group',
    alternateName: 'Murivest',
    url: 'https://murivest.com',
    logo: 'https://murivest.com/logo.webp',
    image: 'https://murivest.com/image.webp',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi.',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westlands Business District',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-115-277-610',
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English'],
    },

    sameAs: [
      'https://www.linkedin.com/company/murivest-realty-group',
      'https://www.instagram.com/murivest_realty',
    ],

    foundingDate: '2025',
  },

  {
    '@context': 'https://schema.org',

    '@type': 'WebSite',

    name: 'Murivest Realty Group',

    url: 'https://murivest.com',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi.',

    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
    },
  },

  {
    '@context': 'https://schema.org',

    '@type': 'ProfessionalService',

    '@id': 'https://murivest.com/#organization',

    name: 'Murivest Realty Group',

    image: 'https://murivest.com/image.webp',

    telephone: '+254-740-469-911',

    email: 'investments@murivest.co.ke',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westlands Business District',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },

    url: 'https://murivest.com',
  },
]

export default function KenyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="kenya-real-estate-agent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData[0]),
        }}
      />

      <Script
        id="kenya-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData[1]),
        }}
      />

      <Script
        id="kenya-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData[2]),
        }}
      />

      {children}
    </>
  )
}