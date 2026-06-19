import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// ============================================================================
// FONTS
// ============================================================================

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// ============================================================================
// VIEWPORT
// ============================================================================

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1B4332',
  colorScheme: 'light',
};

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.com'),
  title: {
    default: 'UAE Commercial Real Estate Investment | Murivest Global',
    template: '%s | Murivest Global',
  },
  description:
    'Institutional-grade commercial real estate investments across Dubai, Abu Dhabi and the UAE. Premium office, retail, industrial, hospitality and mixed-use opportunities for family offices, sovereign wealth, private equity and sophisticated international investors.',
  keywords: [
    'UAE commercial real estate',
    'Dubai commercial property investment',
    'Abu Dhabi real estate investment',
    'institutional real estate UAE',
    'commercial property investment Dubai',
    'Grade A offices UAE',
    'industrial real estate Dubai',
    'logistics investment UAE',
    'retail investment UAE',
    'hospitality real estate Dubai',
    'mixed-use development UAE',
    'family office real estate UAE',
    'private equity real estate UAE',
    'sovereign wealth real estate Dubai',
    'off-market commercial property UAE',
    'DIFC real estate advisory',
    'Murivest UAE',
    'generational wealth real estate',
    'UAE capital markets real estate',
    'commercial real estate advisory UAE',
  ],
  authors: [{ name: 'Murivest Global', url: 'https://murivest.com' }],
  creator: 'Murivest Global',
  publisher: 'Murivest Global',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/united-arab-emirates',
    languages: {
      'en-AE': '/united-arab-emirates',
      'en-GB': '/united-arab-emirates',
      'en-US': '/united-arab-emirates',
      'ar-AE': '/ar/united-arab-emirates',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://murivest.com/united-arab-emirates',
    siteName: 'Murivest Global',
    title: 'UAE Commercial Real Estate Investment | Murivest Global',
    description:
      'Access institutional-grade commercial real estate investment opportunities across Dubai, Abu Dhabi and the UAE. Premium office, retail, industrial, hospitality and mixed-use assets for family offices and institutional capital.',
    images: [
      {
        url: 'https://murivest.com/og-uae-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest UAE - Institutional Commercial Real Estate Investment',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@murivest',
    creator: '@murivest',
    title: 'UAE Commercial Real Estate Investment | Murivest Global',
    description:
      'Institutional-grade commercial property investments across Dubai, Abu Dhabi and the wider UAE market. Family office quality advisory.',
    images: ['https://murivest.com/twitter-uae-homepage.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
    // bing: 'YOUR_BING_VERIFICATION',
    // yandex: 'YOUR_YANDEX_VERIFICATION',
  },
  category: 'Real Estate Investment',
  classification: 'Commercial Real Estate, Investment Advisory, Family Office Services',
  other: {
    'fb:app_id': 'YOUR_FACEBOOK_APP_ID',
    'linkedin:owner': 'YOUR_LINKEDIN_ORGANIZATION_ID',
  },
};

// ============================================================================
// STRUCTURED DATA
// ============================================================================

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Murivest Global',
  alternateName: 'Murivest',
  url: 'https://murivest.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://murivest.com/logo.png',
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://www.linkedin.com/company/murivest',
    'https://twitter.com/murivest',
    // Add other social profiles
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-000-0000',
    contactType: 'Investment Advisory',
    areaServed: ['AE', 'GB', 'US', 'EU'],
    availableLanguage: ['English', 'Arabic'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gate Village, DIFC',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  description:
    'Murivest Global provides institutional-grade commercial real estate investment advisory across the UAE, serving family offices, sovereign wealth funds, private equity and sophisticated international investors.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Murivest UAE',
  image: 'https://murivest.com/office-dubai.jpg',
  '@id': 'https://murivest.com/united-arab-emirates',
  url: 'https://murivest.com/united-arab-emirates',
  telephone: '+971-4-000-0000',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gate Village, DIFC',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2113,
    longitude: 55.2753,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Dubai',
    },
    {
      '@type': 'City',
      name: 'Abu Dhabi',
    },
    {
      '@type': 'City',
      name: 'Sharjah',
    },
    {
      '@type': 'City',
      name: 'Ras Al Khaimah',
    },
  ],
  serviceType: [
    'Commercial Real Estate Investment Advisory',
    'Family Office Real Estate Services',
    'Institutional Property Acquisition',
    'Off-Market Property Sourcing',
    'Real Estate Portfolio Strategy',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
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

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Murivest Global',
  url: 'https://murivest.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://murivest.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// ============================================================================
// LAYOUT
// ============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect & DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to image CDN if using one */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              localBusinessSchema,
              breadcrumbSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-[#FAF9F6] text-[#1A1A1A]"
        style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}
      >
        {children}
      </body>
    </html>
  );
}