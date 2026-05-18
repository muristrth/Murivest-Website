import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';

/* ================================
   GLOBAL STYLE IMPORTS
================================ */
import '../styles/forms.css';
import '../styles/components.css';
import '../styles/animations.css';
//import '../styles/utilities.css';

import AnalyticsTracker from '../components/AnalyticsTracker';
import CookieBanner from '@/components/CookieBanner';
import MetaPixel from '@/components/MetaPixel';
import AppShell from '../components/layout/AppShell';

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

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Commercial Real Estate Advisory Kenya - Murivest Realty Group',
    template: '%s | Murivest Realty Group',
  },

  description:
    'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

  keywords:
    'commercial real estate advisory Kenya, Nairobi commercial property, institutional real estate advisory, commercial property investment Kenya, property management Kenya, real estate advisory services, Murivest Realty Group, commercial property Nairobi',

  authors: [{ name: 'Murivest Realty Group' }],

  creator: 'Murivest Realty Group',

  publisher: 'Murivest Realty Group',

  metadataBase: new URL('https://murivest.co.ke'),

  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.co.ke',

    title:
      'Commercial Real Estate Advisory Kenya - Murivest Realty Group',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

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

    title:
      'Commercial Real Estate Advisory Kenya - Murivest Realty Group',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

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
    yandex: '0e78bfd13221ea6b',
  },
};

const structuredData = [
  {
    '@context': 'https://schema.org',

    '@type': 'RealEstateAgent',

    name: 'Murivest Realty Group',

    alternateName: 'Murivest',

    url: 'https://murivest.co.ke',

    logo: 'https://murivest.co.ke/logo.png',

    image: 'https://murivest.co.ke/image.png',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

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

    url: 'https://murivest.co.ke',

    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
    },

    potentialAction: {
      '@type': 'SearchAction',
      target:
        'https://murivest.co.ke/properties?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },

  {
    '@context': 'https://schema.org',

    '@type': 'ProfessionalService',

    '@id': 'https://murivest.co.ke/#organization',

    name: 'Murivest Realty Group',

    image: 'https://murivest.co.ke/image.png',

    telephone: '+254-740-469-911',

    email: 'investments@ murivest.co.ke',

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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
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
  },
];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1B4332',
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-TQF6VT5RR3';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/logo.png"
          sizes="192x192"
        />

        <link
          rel="apple-touch-icon"
          href="/logo.png"
          sizes="180x180"
        />

        <meta name="theme-color" content="#1B4332" />

        <meta
          name="msapplication-TileColor"
          content="#1B4332"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <Script
          id="structured-data-agent"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData[0]),
          }}
        />

        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData[1]),
          }}
        />

        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData[2]),
          }}
        />

        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              wait_for_update: 2000,
            });

            gtag('js', new Date());
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('config', '${GA_ID}', {
              send_page_view: false,
            });
          `}
        </Script>

        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
        >
          {`
            _linkedin_partner_id = "1234567";

            window._linkedin_data_partner_ids =
              window._linkedin_data_partner_ids || [];

            window._linkedin_data_partner_ids.push(
              _linkedin_partner_id
            );

            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){
                  window.lintrk.q.push([a,b]);
                };

                window.lintrk.q = [];
              }

              var s = document.getElementsByTagName("script")[0];

              var b = document.createElement("script");

              b.type = "text/javascript";
              b.async = true;
              b.src =
                "https://snap.licdn.com/li.lms-analytics/insight.min.js";

              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      </head>

      <body
        className={`${montserrat.variable} font-sans text-forest bg-cream`}
        suppressHydrationWarning={true}
        style={{
          backgroundColor: '#FAF9F6',
          color: '#1B4332',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          overflowX: 'hidden',
        }}
      >
        <Suspense fallback={null}>
          <AnalyticsTracker />
          <MetaPixel />
        </Suspense>

        <AppShell>{children}</AppShell>

        <CookieBanner />
      </body>
    </html>
  );
}