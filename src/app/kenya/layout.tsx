import type { Metadata } from 'next';
import Script from 'next/script';

import KenyaHeader from '@/components/layout/Kenyaheader';

// ---------------------------------------------------------------------------
// Metadata base – lets us use relative paths for canonical, alternates, etc.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),

  // Title template – applied to all child pages under /kenya
  title: {
    default: 'Murivest Kenya | Institutional Commercial Real Estate Advisory',
    template: '%s | Murivest Kenya',
  },

  description:
    'Murivest Kenya delivers institutional‑grade commercial real estate advisory, investment sales, capital markets, and property intelligence. Serving Nairobi and the wider Kenyan market with data‑backed insights and execution.',

  // Extended keyword cluster – highly local and intent‑matched
  keywords: [
    'commercial real estate Kenya',
    'institutional real estate Kenya',
    'Nairobi commercial property',
    'Kenya investment property',
    'Kenya capital markets',
    'Nairobi investment opportunities',
    'commercial real estate advisory Kenya',
    'industrial real estate Kenya',
    'office space Nairobi',
    'retail property Kenya',
    'real estate agent Nairobi',
    'property valuation Kenya',
    'Kenya real estate market report',
    'institutional property broker Nairobi',
    'CRE Kenya',
  ],

  // Canonical & hreflang (assuming you have other country pages – adjust as needed)
  alternates: {
    canonical: '/kenya',
    languages: {
      'en-KE': '/kenya',
      'en-US': '/usa',            // adjust to your US page path
      'en-GB': '/uk',             // adjust to your UK page path
      'en': '/',                  // global/fallback English page
      'x-default': '/',
    },
  },

  // Open Graph – enriched for social sharing and rich pins
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/kenya',
    siteName: 'Murivest',
    title: 'Murivest Kenya | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory, investment opportunities, and market intelligence across Kenya.',
    images: [
      {
        url: '/kenya/og-image.jpg', // relative to metadataBase
        width: 1200,
        height: 630,
        alt: 'Murivest Kenya – Nairobi skyline and commercial real estate',
      },
    ],
    // Optional: tag the country for better localization
    countryName: 'Kenya',
  },

  // Twitter card – large image for maximum visibility
  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',               // replace with your actual Twitter handle
    creator: '@Murivest',
    title: 'Murivest Kenya | Institutional Commercial Real Estate Advisory',
    description:
      'Institutional commercial real estate advisory and investment opportunities across Kenya.',
    images: ['/kenya/og-image.jpg'],
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

  // Additional meta tags that help search engines and LLMs understand the page
  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#0A2540',      // your brand color
  },
};

// ---------------------------------------------------------------------------
// JSON‑LD Structured Data – multiple entities for Google, Bing, and LLMs
// ---------------------------------------------------------------------------

// 1. Organization (global parent + Kenya branch) – heavily detailed
const kenyaOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://murivest.com/kenya/#organization',
  name: 'Murivest Kenya',
  alternateName: 'Murivest Kenya Commercial Real Estate',
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://murivest.com/#organization',
    name: 'Murivest',
  },
  url: 'https://murivest.com/kenya',
  logo: {
    '@type': 'ImageObject',
    url: 'https://murivest.com/logo.webp',
    width: 180,
    height: 60,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    streetAddress: '14 Riverside Drive, 5th Floor',   // update with real address
    postalCode: '00100',
    postOfficeBoxNumber: '',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.268,               // approximate Nairobi coords – use exact location
    longitude: 36.802,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+254-20-1234567',  // replace
      contactType: 'sales',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+254-20-1234567',
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
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
  ],
  foundingDate: '2015',            // adjust if known
  description:
    'Murivest Kenya provides institutional commercial real estate advisory, capital markets services, and property intelligence to investors, developers, and occupiers across Kenya.',
};

// 2. LocalBusiness / RealEstateAgent – critical for Google Maps and local pack
const kenyaLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://murivest.com/kenya/#realestateagent',
  name: 'Murivest Kenya',
  image: 'https://murivest.com/logo.webp',
  url: 'https://murivest.com/kenya',
  telephone: '+254-20-1234567',
  email: 'kenya@murivest.com',          // if applicable
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    streetAddress: '14 Riverside Drive, 5th Floor',
    postalCode: '00100',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.268,
    longitude: 36.802,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
  priceRange: 'Institutional',
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Property Valuation',
    'Market Research',
  ],
};

// 3. WebPage – ties the Kenya page to the global site
const kenyaWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://murivest.com/kenya/#webpage',
  url: 'https://murivest.com/kenya',
  name: 'Murivest Kenya | Institutional Commercial Real Estate Advisory',
  description:
    'Institutional commercial real estate advisory, investment opportunities and market intelligence across Kenya.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://murivest.com/#website',
  },
  about: {
    '@id': 'https://murivest.com/kenya/#organization',
  },
  inLanguage: 'en-KE',
  spatialCoverage: {
    '@type': 'Country',
    name: 'Kenya',
  },
  breadcrumb: {
    '@id': 'https://murivest.com/kenya/#breadcrumb',
  },
};

// 4. BreadcrumbList – clear navigation path
const kenyaBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://murivest.com/kenya/#breadcrumb',
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
      name: 'Kenya',
      item: 'https://murivest.com/kenya',
    },
  ],
};

// ---------------------------------------------------------------------------
// Layout component
// ---------------------------------------------------------------------------
export default function KenyaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inline JSON‑LD structured data */}
      <Script
        id="kenya-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kenyaOrganizationSchema),
        }}
      />
      <Script
        id="kenya-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kenyaLocalBusinessSchema),
        }}
      />
      <Script
        id="kenya-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kenyaWebPageSchema),
        }}
      />
      <Script
        id="kenya-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kenyaBreadcrumbSchema),
        }}
      />

      {/* Optional: FAQ schema – If your Kenya homepage includes FAQs, add them here.
          For a layout that wraps every subpage, it’s safer to place this in
          the main /kenya page.tsx. Include it only if the layout always contains FAQs. */}
      {/* <Script
        id="kenya-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kenyaFAQSchema) }}
      /> */}

      <KenyaHeader />
      {children}
    </>
  );
}