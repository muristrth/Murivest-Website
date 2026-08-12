import type { Metadata } from 'next';
import Script from 'next/script';

import UKHeader from '@/components/layout/UKheader';

// ---------------------------------------------------------------------------
// Metadata base – all relative URLs will resolve correctly
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),

  title: {
    default: 'Murivest UK | Institutional Commercial Real Estate Advisory & Capital Markets',
    template: '%s | Murivest UK',
  },

  description:
    'Murivest UK advises institutional investors, private equity, and family offices on prime commercial real estate acquisition, capital markets, and asset management across the United Kingdom. Data‑driven advisory for London and key UK regions.',

  // Precision keyword cluster – institutional language
  keywords: [
    'UK commercial real estate advisory',
    'institutional property acquisition UK',
    'prime London office investment',
    'UK commercial property capital markets',
    'cross‑border real estate asset management UK',
    'commercial investment sales UK',
    'UK property portfolio acquisition',
    'institutional CRE advisory London',
    'prime industrial logistics UK',
    'life sciences real estate UK',
    'ESG real estate investment UK',
    'UK commercial property due diligence',
    'commercial real estate broker London',
    'family office real estate UK',
    'UK property yield analysis',
  ],

  alternates: {
    canonical: '/united-kingdom',
    languages: {
      'en-GB': '/united-kingdom',
      'en-US': '/usa',
      'en-AE': '/united-arab-emirates',
      'en': '/',
      'x-default': '/',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/united-kingdom',
    siteName: 'Murivest',
    title: 'Murivest UK | Institutional Commercial Real Estate Advisory & Capital Markets',
    description:
      'Institutional commercial real estate advisory, acquisition, and capital markets across the United Kingdom.',
    images: [
      {
        url: '/united-kingdom/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest UK – London skyline and institutional commercial property',
      },
    ],
    countryName: 'United Kingdom',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@Murivest',
    creator: '@Murivest',
    title: 'Murivest UK | Institutional Commercial Real Estate Advisory & Capital Markets',
    description:
      'Institutional commercial real estate advisory and capital markets across the United Kingdom.',
    images: ['/united-kingdom/og-image.jpg'],
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
    'theme-color': '#1B4332',  // Forest green – align with global brand
  },
};

// ---------------------------------------------------------------------------
// JSON‑LD Structured Data
// ---------------------------------------------------------------------------

const ukOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://murivest.com/united-kingdom/#organization',
  name: 'Murivest UK',
  alternateName: 'Murivest UK Commercial Real Estate',
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://murivest.com/#organization',
    name: 'Murivest',
  },
  url: 'https://murivest.com/united-kingdom',
  logo: {
    '@type': 'ImageObject',
    url: 'https://murivest.com/logo.webp',
    width: 180,
    height: 60,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    streetAddress: '25 Berkeley Square, Mayfair',   // ← update with actual office
    postalCode: 'W1J 6HN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.509,          // London coords – use your precise location
    longitude: -0.145,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44-20-7123-4567',   // replace with actual
      contactType: 'sales',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+44-20-7123-4567',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/murivest',
    'https://twitter.com/Murivest',
    'https://www.facebook.com/MurivestAfrica',
    // add UK‑specific social profiles if they exist
  ],
  knowsAbout: [
    'Commercial Real Estate',
    'Investment Sales',
    'Capital Markets',
    'Prime Offices',
    'Industrial & Logistics',
    'Life Sciences Real Estate',
    'Alternative Asset Advisory',
    'ESG Strategy',
    'Cross‑Border Capital Deployment',
  ],
  description:
    'Murivest UK provides institutional commercial real estate advisory, acquisition and capital markets execution for investors, funds, and family offices across the United Kingdom.',
};

const ukLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://murivest.com/united-kingdom/#realestateagent',
  name: 'Murivest UK',
  image: 'https://murivest.com/logo.webp',
  url: 'https://murivest.com/united-kingdom',
  telephone: '+44-20-7123-4567',
  email: 'uk@murivest.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    streetAddress: '25 Berkeley Square, Mayfair',
    postalCode: 'W1J 6HN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.509,
    longitude: -0.145,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  priceRange: 'Institutional',
  knowsAbout: [
    'Commercial Real Estate',
    'Capital Markets',
    'Acquisition Advisory',
    'Asset Management',
    'Portfolio Strategy',
  ],
};

const ukWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://murivest.com/united-kingdom/#webpage',
  url: 'https://murivest.com/united-kingdom',
  name: 'Murivest UK | Institutional Commercial Real Estate Advisory & Capital Markets',
  description:
    'Institutional commercial real estate advisory, acquisition, and capital markets across the United Kingdom.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://murivest.com/#website',
  },
  about: {
    '@id': 'https://murivest.com/united-kingdom/#organization',
  },
  inLanguage: 'en-GB',
  spatialCoverage: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  breadcrumb: {
    '@id': 'https://murivest.com/united-kingdom/#breadcrumb',
  },
};

const ukBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://murivest.com/united-kingdom/#breadcrumb',
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
      name: 'United Kingdom',
      item: 'https://murivest.com/united-kingdom',
    },
  ],
};

// (Optional) FAQ – place inside /united-kingdom/page.tsx if you have a FAQ section

// ---------------------------------------------------------------------------
// Layout component
// ---------------------------------------------------------------------------
export default function UnitedKingdomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="uk-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ukOrganizationSchema),
        }}
      />
      <Script
        id="uk-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ukLocalBusinessSchema),
        }}
      />
      <Script
        id="uk-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ukWebPageSchema),
        }}
      />
      <Script
        id="uk-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ukBreadcrumbSchema),
        }}
      />

      <UKHeader />
      {children}
    </>
  );
}