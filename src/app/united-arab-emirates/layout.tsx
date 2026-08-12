import type { Metadata } from 'next';
import Script from 'next/script';

import UAEHeader from '@/components/layout/UAEheader';

// ---------------------------------------------------------------------------
// Metadata base – ensures all relative URLs resolve correctly
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),

  title: {
    default: 'Murivest UAE | Institutional Commercial Real Estate Advisory',
    template: '%s | Murivest UAE',
  },

  description:
    'Murivest UAE delivers institutional‑grade commercial real estate advisory, investment sales, capital markets, and property intelligence across Dubai, Abu Dhabi and all seven emirates.',

  // Extended keyword cluster – highly local and intent‑matched for UAE
  keywords: [
    'commercial real estate UAE',
    'institutional real estate Dubai',
    'Abu Dhabi commercial property',
    'UAE investment property',
    'Dubai capital markets',
    'UAE real estate advisory',
    'industrial real estate UAE',
    'office space Dubai',
    'retail property UAE',
    'property valuation Dubai',
    'UAE real estate market report',
    'CRE UAE',
    'NRI real estate investment UAE',
    'off-plan property Dubai',
    'Sharjah industrial land',
  ],

  // Canonical & hreflang – adjust to your actual language/country paths
  alternates: {
    canonical: '/united-arab-emirates',
    languages: {
      'en-AE': '/united-arab-emirates',
      'en-US': '/usa',
      'en-GB': '/uk',
      'en': '/',               // global English
      'x-default': '/',
    },
  },

  // Open Graph – enriched for social sharing and rich pins
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: '/united-arab-emirates',
    siteName: 'Murivest',
    title: 'Murivest UAE | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory, investment opportunities and market intelligence across the United Arab Emirates.',
    images: [
      {
        url: '/united-arab-emirates/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest UAE – Dubai skyline and commercial real estate',
      },
    ],
    countryName: 'United Arab Emirates',
  },

  // Twitter card – large image for maximum visibility
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',             // replace with actual handle
    creator: '@Murivest',
    title: 'Murivest UAE | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory and investment opportunities across the UAE.',
    images: ['/united-arab-emirates/og-image.jpg'],
  },

  // Robots – allow crawling and indexing, enable rich previews
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
    'theme-color': '#1B4332',      // Forest Green brand color
  },
};

// ---------------------------------------------------------------------------
// JSON‑LD Structured Data – multiple entities for Google, Bing, and LLMs
// ---------------------------------------------------------------------------

// 1. Organization (global parent + UAE branch) – heavily detailed
const uaeOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://murivest.com/united-arab-emirates/#organization',
  name: 'Murivest UAE',
  alternateName: 'Murivest UAE Commercial Real Estate',
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://murivest.com/#organization',
    name: 'Murivest',
  },
  url: 'https://murivest.com/united-arab-emirates',
  logo: {
    '@type': 'ImageObject',
    url: 'https://murivest.com/logo.webp',
    width: 180,
    height: 60,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    streetAddress: 'Emirates Towers, Level 15, Sheikh Zayed Road', // replace with actual address
    postalCode: '00000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,               // approximate Dubai – replace with exact office location
    longitude: 55.2708,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-123-4567',  // replace with actual
      contactType: 'sales',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-123-4567',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/murivest',
    'https://twitter.com/Murivest',
    'https://www.facebook.com/MurivestAfrica',
    // add other verified social profiles
  ],
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Industrial Real Estate',
    'Office Real Estate',
    'Retail Real Estate',
    'Property Investment',
    'Real Estate Advisory',
    'Market Intelligence',
    'Off-Plan Investments',
    'Development Advisory',
  ],
  foundingDate: '2015',            // adjust if known
  description:
    'Murivest UAE provides institutional commercial real estate advisory, capital markets services, and property intelligence to investors, developers, and occupiers across the United Arab Emirates.',
};

// 2. LocalBusiness / RealEstateAgent – critical for Google Maps and local pack
const uaeLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://murivest.com/united-arab-emirates/#realestateagent',
  name: 'Murivest UAE',
  image: 'https://murivest.com/logo.webp',
  url: 'https://murivest.com/united-arab-emirates',
  telephone: '+971-4-123-4567',
  email: 'uae@murivest.com',          // if applicable
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    streetAddress: 'Emirates Towers, Level 15, Sheikh Zayed Road',
    postalCode: '00000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // UAE working week
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  priceRange: 'Institutional',
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Property Valuation',
    'Market Research',
    'Off-Plan Investments',
  ],
};

// 3. WebPage – ties the UAE page to the global site
const uaeWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://murivest.com/united-arab-emirates/#webpage',
  url: 'https://murivest.com/united-arab-emirates',
  name: 'Murivest UAE | Institutional Commercial Real Estate Advisory',
  description:
    'Institutional commercial real estate advisory, investment opportunities and market intelligence across the United Arab Emirates.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://murivest.com/#website',
  },
  about: {
    '@id': 'https://murivest.com/united-arab-emirates/#organization',
  },
  inLanguage: 'en-AE',
  spatialCoverage: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  breadcrumb: {
    '@id': 'https://murivest.com/united-arab-emirates/#breadcrumb',
  },
};

// 4. BreadcrumbList – clear navigation path
const uaeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://murivest.com/united-arab-emirates/#breadcrumb',
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
      name: 'United Arab Emirates',
      item: 'https://murivest.com/united-arab-emirates',
    },
  ],
};

// (Optional) FAQ Schema – include if your UAE homepage has an FAQ section.
// Place this inside the page component itself (page.tsx) rather than the layout
// to avoid duplication across all sub‑pages.
/*
const uaeFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [ ... ]
};
*/

// ---------------------------------------------------------------------------
// Layout component
// ---------------------------------------------------------------------------
export default function UAELayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inline JSON‑LD structured data */}
      <Script
        id="uae-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uaeOrganizationSchema),
        }}
      />
      <Script
        id="uae-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uaeLocalBusinessSchema),
        }}
      />
      <Script
        id="uae-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uaeWebPageSchema),
        }}
      />
      <Script
        id="uae-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uaeBreadcrumbSchema),
        }}
      />

      {/* UAE Country Sub‑Header (client component) */}
      <UAEHeader />

      {/* Page content */}
      {children}
    </>
  );
}