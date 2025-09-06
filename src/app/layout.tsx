import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/providers';
import ScrollToTopButton from '../components/ui/ScrollToTopButton';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Define the fonts here
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Define the site-wide metadata using the Metadata API
export const metadata: Metadata = {
  title: {
    default: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    template: '%s | Murivest Realty Group',
  },
  description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
  keywords: 'commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
  authors: [{ name: 'Murivest Realty Group' }],
  creator: 'Murivest Realty Group',
  publisher: 'Murivest Realty Group',
  metadataBase: new URL('https://murivest.co.ke'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.co.ke',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
    siteName: 'Murivest Realty Group',
    images: [
      {
        url: 'https://murivest.co.ke/kenya-night.png',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group - Premier Commercial Real Estate Investment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
    images: ['https://murivest.co.ke/kenya-night.png'],
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
  },
};

// Structured Data (JSON-LD)
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Murivest Realty Group',
    alternateName: 'Murivest',
    url: 'https://murivest.co.ke',
    logo: 'https://murivest.co.ke/logo.png',
    image: 'https://murivest.co.ke/image.png',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya, offering curated investment opportunities and comprehensive property management services for discerning clientele.',
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
      telephone: '+254-740-469-911',
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.facebook.com/murivest',
      'https://www.linkedin.com/company/murivest-realty-group',
      'https://www.instagram.com/murivest_realty',
    ],
    foundingDate: '2020',
    numberOfEmployees: '25-50',
    slogan: 'Premier Real Estate Investment',
    knowsAbout: [
      'Commercial Real Estate',
      'Property Investment',
      'Real Estate Management',
      'Investment Advisory',
      'Property Development',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Murivest Realty Group',
    url: 'https://murivest.co.ke',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya',
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://murivest.co.ke/properties?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://murivest.co.ke/#organization',
    name: 'Murivest Realty Group',
    image: 'https://murivest.co.ke/image.png',
    telephone: '+254-740-469-911',
    email: 'info@murivest.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westlands Business District',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    url: 'https://murivest.co.ke',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$$$',
    currenciesAccepted: 'KES, USD',
    paymentAccepted: 'Cash, Bank Transfer',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />

        {/* Other manually added meta tags */}
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Structured Data (JSON-LD) */}
        <Script
          id="structured-data-agent"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[0]) }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[1]) }}
        />
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[2]) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}