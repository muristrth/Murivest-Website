import type { Metadata } from 'next';
import Script from 'next/script';

import SingaporeHeader from './(components)/shared/SingaporeHeader';

// ---------------------------------------------------------------------------
// Metadata base – ensures all relative URLs resolve correctly
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),

  // Title template – applied to all child pages under /singapore
  title: {
    default: 'Murivest Singapore | Institutional Commercial Real Estate Advisory',
    template: '%s | Murivest Singapore',
  },

  description:
    'Murivest Singapore delivers institutional-grade commercial real estate advisory, investment sales, capital markets, and property intelligence across Singapore. Serving UHNWI, family offices, and sovereign wealth funds with data-driven market insights.',

  // Extended keyword cluster – highly local and intent-matched
  keywords: [
    'commercial real estate Singapore',
    'institutional real estate Singapore',
    'Singapore grade A office',
    'Singapore commercial property',
    'Singapore investment property',
    'Singapore capital markets',
    'Singapore REIT investment',
    'Marina Bay office',
    'Raffles Place property',
    'Singapore real estate advisory',
    'Singapore property valuation',
    'Singapore market report',
    'CRE Singapore',
    'Singapore office rent',
    'Singapore strata office',
    'Singapore shophouse',
    'URA Master Plan Singapore',
    'Singapore real estate underwriting',
  ],

  // Canonical & hreflang
  alternates: {
    canonical: '/singapore',
    languages: {
      'en-SG': '/singapore',
      'en-KE': '/kenya',
      'en-AE': '/united-arab-emirates',
      'en-GB': '/united-kingdom',
      'en': '/',
      'x-default': '/',
    },
  },

  // Open Graph – enriched for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/singapore',
    siteName: 'Murivest',
    title: 'Murivest Singapore | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory, investment opportunities, and market intelligence across Singapore.',
    images: [
      {
        url: '/og-singapore.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Singapore — Marina Bay skyline and commercial real estate',
      },
    ],
    countryName: 'Singapore',
  },

  // Twitter card – large image
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: 'Murivest Singapore | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory and investment opportunities across Singapore.',
    images: ['/og-singapore.jpg'],
  },

  // Robots – allow crawling and indexing
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

  // Additional meta tags
  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#1B4332',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Structured Data
// ---------------------------------------------------------------------------

const singaporeOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://murivest.com/singapore/#organization',
  name: 'Murivest Singapore',
  alternateName: 'Murivest Singapore Commercial Real Estate',
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://murivest.com/#organization',
    name: 'Murivest',
  },
  url: 'https://murivest.com/singapore',
  logo: {
    '@type': 'ImageObject',
    url: 'https://murivest.com/logo.webp',
    width: 180,
    height: 60,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
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
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+65-6123-4567',
      contactType: 'sales',
      areaServed: 'SG',
      availableLanguage: ['English', 'Chinese'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+65-6123-4567',
      contactType: 'customer service',
      areaServed: 'SG',
      availableLanguage: ['English', 'Chinese'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/murivest-realty-group',
    'https://twitter.com/Murivest',
  ],
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Office Real Estate',
    'Retail Real Estate',
    'Property Investment',
    'Real Estate Advisory',
    'Market Intelligence',
    'Property Valuation',
  ],
  foundingDate: '2025',
  description:
    'Murivest Singapore provides institutional commercial real estate advisory, capital markets services, and property intelligence to investors, developers, and occupiers across Singapore.',
};

const singaporeRealEstateAgentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://murivest.com/singapore/#realestateagent',
  name: 'Murivest Singapore',
  image: 'https://murivest.com/logo.webp',
  url: 'https://murivest.com/singapore',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  priceRange: 'Institutional',
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Property Valuation',
    'Market Research',
    'Acquisition Advisory',
    'Disposition Advisory',
  ],
};

const singaporeWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://murivest.com/singapore/#webpage',
  url: 'https://murivest.com/singapore',
  name: 'Murivest Singapore | Institutional Commercial Real Estate Advisory',
  description:
    'Institutional commercial real estate advisory, investment opportunities, and market intelligence across Singapore.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://murivest.com/#website',
  },
  about: {
    '@id': 'https://murivest.com/singapore/#organization',
  },
  inLanguage: 'en-SG',
  spatialCoverage: {
    '@type': 'Country',
    name: 'Singapore',
  },
  breadcrumb: {
    '@id': 'https://murivest.com/singapore/#breadcrumb',
  },
};

const singaporeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://murivest.com/singapore/#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Murivest',
      item: 'https://murivest.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Singapore',
      item: 'https://murivest.com/singapore',
    },
  ],
};

// ---------------------------------------------------------------------------
// Layout component
// ---------------------------------------------------------------------------
export default function SingaporeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="singapore-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(singaporeOrganizationSchema),
        }}
      />
      <Script
        id="singapore-realestateagent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(singaporeRealEstateAgentSchema),
        }}
      />
      <Script
        id="singapore-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(singaporeWebPageSchema),
        }}
      />
      <Script
        id="singapore-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(singaporeBreadcrumbSchema),
        }}
      />

      {/* Singapore Country Sub-Header */}
      <SingaporeHeader />

      {/* Page content */}
      {children}
    </>
  );
}
