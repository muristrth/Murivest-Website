import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header, { HeaderSpacer } from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import AnalyticsTracker from '../components/AnalyticsTracker';
//import InvestorMagazinePopup from '@/components/InvestorMagazinePopup';
import CookieBanner from '@/components/CookieBanner';
import MetaPixel from '@/components/MetaPixel';

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
// Configure Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // 300/400 for body, 500/600 for headers
  variable: '--font-montserrat', // Define the CSS variable
});

// Define the site-wide metadata using the Metadata API
export const metadata: Metadata = {
  title: {
    default: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    template: '%s | Murivest Realty Group',
  },
  description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
  keywords: 'commercial properties in Nairobi CBD, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
  authors: [{ name: 'Murivest Realty Group' }],
  creator: 'Murivest Realty Group',
  publisher: 'Murivest Realty Group',
  metadataBase: new URL('https://murivest.co.ke'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.co.ke',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    siteName: 'Murivest Realty Group',
    images: [
      {
        url: 'https://murivest.co.ke/kenya-night.png',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group - Commercial Real Estate Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
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
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
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
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
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
    email: 'investments@murivest.com',
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

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor:   '#1B4332',
};
 
/* ── GA4 Measurement ID ────────────────────────────────────────────────────── */
 
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-TQF6VT5RR3';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <head>
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" type="image/png" href="/logo.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />

        {/* Other manually added meta tags */}
        <meta name="theme-color" content="#1B4332" />
        <meta name="msapplication-TileColor" content="#1B4332" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Structured Data (JSON-LD) */}
        <Script
          id="structured-data-agent"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[0]) }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[1]) }}
        />
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData[2]) }}
        />


<Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage:        'denied',
              ad_storage:               'denied',
              ad_user_data:             'denied',
              ad_personalization:       'denied',
              functionality_storage:    'denied',
              personalization_storage:  'denied',
              wait_for_update:          2000,
            });
            gtag('js', new Date());
          `}
        </Script>
 
        {/*
         * ── Google Analytics 4 ────────────────────────────────────────
         * Loads after consent default is set.
         * Replace GA_ID with your actual Measurement ID via .env.local:
         * NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
         */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`gtag('config', '${GA_ID}', { send_page_view: false });`}
        </Script>
 
        {/*
         * ── LinkedIn Insight Tag ──────────────────────────────────────
         * Replace 1234567 with your actual LinkedIn Partner ID.
         * CookieBanner nullifies _linkedin_partner_id on Decline.
         */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "1234567";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>



        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TQF6VT5RR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQF6VT5RR3');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-sans text-forest bg-cream`}
      suppressHydrationWarning={true}

      style={{
          backgroundColor:       '#FAF9F6',
          color:                 '#1B4332',
          WebkitFontSmoothing:   'antialiased',
          MozOsxFontSmoothing:   'grayscale',
          overflowX:             'hidden',
        }}
      >
        <div className="min-h-screen">
          <Header />
          <HeaderSpacer />
          <Suspense fallback={null}>
            <AnalyticsTracker />
            <MetaPixel />
          </Suspense>
          <main>{children}</main>
         <CookieBanner />
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
