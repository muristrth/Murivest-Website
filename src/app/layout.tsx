import type { Metadata, Viewport } from 'next';
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
    default: 'Murivest | Global Institutional Commercial Real Estate',
    template: '%s | Murivest',
  },

  description:
    'Murivest is a Nairobi-founded, independent commercial real estate advisory practice. We support defined mandates across selected markets through local intelligence and disciplined process.',

  keywords:
    'commercial real estate, institutional real estate, global real estate advisory, capital markets, investment sales, tenant representation, development advisory, Murivest, cross‑border investment, office leasing, industrial real estate, retail property, data centres',

  authors: [{ name: 'Murivest' }],
  creator: 'Murivest',
  publisher: 'Murivest',

  metadataBase: new URL('https://murivest.com'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://murivest.com',
    title: 'Murivest | Global Institutional Commercial Real Estate',
    description:
      'Institutional advisory, investment sales, tenant representation, and development strategy – delivered worldwide.',
    siteName: 'Murivest',
    images: [
      {
        url: 'https://murivest.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Murivest – Global Institutional Real Estate',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murivest | Global Institutional Commercial Real Estate',
    description:
      'Institutional advisory, investment sales, tenant representation, and development strategy – delivered worldwide.',
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
  name: 'Murivest',
  alternateName: 'Murivest Global',
  url: 'https://murivest.com',
  logo: 'https://murivest.com/logo.webp',
  image: 'https://murivest.com/logo.webp',
  description:
    'Murivest is an independent institutional commercial real estate advisory firm. We advise on capital markets, investment sales, tenant representation, and development projects across all major global markets.',
  sameAs: [
    'https://www.linkedin.com/company/murivest-realty-group',
    'https://www.instagram.com/murivest_realty',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-115-277-610',
    contactType: 'sales',
    areaServed: ['US', 'GB', 'AE', 'KE', 'SG', 'ZA'],
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans bg-[var(--mv-cream)]`}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalOrganizationSchema) }}
        />
        <script
          id="global-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalWebsiteSchema) }}
        />

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
