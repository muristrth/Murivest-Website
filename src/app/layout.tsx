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

/* ====================================================
   GLOBAL METADATA – matches top‑tier firms like CBRE / JLL
==================================================== */
export const metadata: Metadata = {
  title: {
    default: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    template: '%s | Murivest',
  },

  description:
    'Murivest Realty Group is a Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',

  keywords:
    'commercial real estate advisory Kenya, Nairobi commercial property, office space Nairobi, industrial property Kenya, investment advisory Kenya, East Africa real estate, Murivest Realty Group, Mark Muriithi, commercial property underwriting, exit strategy advisory',

  authors: [{ name: 'Murivest' }],
  creator: 'Murivest',
  publisher: 'Murivest',

  metadataBase: new URL('https://murivest.com'),

  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://murivest.com',
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
    siteName: 'Murivest Realty Group',
    images: [
      {
        url: 'https://murivest.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group – Commercial Real Estate Advisory Kenya',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi.',
    images: ['https://murivest.com/logo.webp'],
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
    // ⚠️ Replace with your murivest.com Search Console verification codes
    google: 'ADD_YOUR_MURIVEST_COM_VERIFICATION_CODE',
    yandex: 'ADD_YOUR_YANDEX_CODE',
  },
};

/* ====================================================
   GLOBAL STRUCTURED DATA – Organization + WebSite
   (Country‑specific LocalBusiness lives on each country page)
==================================================== */
const globalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Murivest Realty Group',
  alternateName: 'Murivest',
  url: 'https://murivest.com',
  logo: 'https://murivest.com/logo.webp',
  image: 'https://murivest.com/logo.webp',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Mark Muriithi',
    jobTitle: 'Chief Executive Officer',
    sameAs: 'https://www.linkedin.com/in/mark-muriithi',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  foundingLocation: {
    '@type': 'City',
    name: 'Nairobi',
    containedInCountry: {
      '@type': 'Country',
      name: 'Kenya',
    },
  },
  description:
    'Murivest Realty Group is a Nairobi-based commercial real estate advisory firm founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
  sameAs: [
    'https://www.linkedin.com/company/murivest-realty-group',
    'https://www.instagram.com/murivest_realty',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-115-277-610',
    contactType: 'Advisory Enquiries',
    email: 'capital@murivest.co.ke',
    areaServed: ['KE', 'RW', 'UG', 'TZ'],
    availableLanguage: ['English'],
  },
};

const globalWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Murivest',
  url: 'https://murivest.com',
  description:
    'Global commercial real estate intelligence, capital markets advisory, and property listings.',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://murivest.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

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
        <link rel="icon" type="image/png" href="/logo.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.webp" sizes="180x180" />
        <meta name="theme-color" content="#1B4332" />
        <meta name="msapplication-TileColor" content="#1B4332" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=yes" />

        {/* Global structured data – always present */}
        <script
          id="global-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalOrganizationSchema),
          }}
        />
        <script
          id="global-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalWebsiteSchema),
          }}
        />

        {/* Google Consent Default */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
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

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${GA_ID}', {
              send_page_view: false,
            });
          `}
        </Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "1234567";
            window._linkedin_data_partner_ids =
              window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
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