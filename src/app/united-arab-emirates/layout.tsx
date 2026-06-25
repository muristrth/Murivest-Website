import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';

/* ================================
   GLOBAL STYLE IMPORTS
================================ */
import '@/styles/forms.css';
import '@/styles/components.css';
import '@/styles/animations.css';

import AnalyticsTracker from '@/components/AnalyticsTracker';
import CookieBanner from '@/components/CookieBanner';
import MetaPixel from '@/components/MetaPixel';
import AppShell from '@/components/layout/AppShell';

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
   GLOBAL METADATA — Institutional-Grade SEO
   Matches CBRE, JLL, Savills, Colliers, Knight Frank
==================================================== */
export const metadata: Metadata = {
  title: {
    default: 'Murivest | Global Institutional Commercial Real Estate Advisory — $14.2B in Transactions Since 2001',
    template: '%s | Murivest',
  },

  description:
    'Murivest is an independent institutional commercial real estate advisory firm. Twenty-five years of documented transaction history. $14.2 billion in transactions advised. 1,200 professionals across 16 offices in 35 countries. Capital markets, investment sales, tenant representation, and development strategy across Africa, the Middle East, Asia Pacific, and Europe.',

  keywords:
    'commercial real estate, institutional real estate, global real estate advisory, capital markets, investment sales, tenant representation, development advisory, Murivest, cross-border investment, sovereign wealth fund real estate, pension fund real estate, family office real estate, office leasing, industrial real estate, logistics real estate, hospitality real estate, data centre real estate, frontier market real estate, emerging market real estate, Africa real estate, Middle East real estate, Asia Pacific real estate, Europe real estate, Dubai real estate, Nairobi real estate, Singapore real estate, London real estate, Riyadh real estate, Abu Dhabi real estate, CBRE alternative, JLL alternative, Savills alternative, Colliers alternative, Knight Frank alternative, institutional real estate advisor, real estate investment advisory, real estate capital markets, occupier solutions, workplace strategy, real estate research, property yield survey, real estate market outlook',

  authors: [{ name: 'Murivest' }],
  creator: 'Murivest',
  publisher: 'Murivest',

  metadataBase: new URL('https://murivest.com'),

  alternates: {
    canonical: 'https://murivest.com',
    languages: {
      'en-US': 'https://murivest.com',
      'en-GB': 'https://murivest.com/uk',
      'en-AE': 'https://murivest.com/uae',
      'en-KE': 'https://murivest.com/ke',
      'en-SG': 'https://murivest.com/sg',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://murivest.com',
    title: 'Murivest | Global Institutional Commercial Real Estate Advisory — $14.2B in Transactions Since 2001',
    description:
      'Twenty-five years of institutional real estate advisory. $14.2 billion in transactions. 1,200 professionals across 35 countries. Capital markets, investment sales, and development strategy for sovereign wealth funds, pension funds, and family offices.',
    siteName: 'Murivest',
    images: [
      {
        url: 'https://murivest.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest — Global Institutional Real Estate Advisory. $14.2B in Transactions. 25 Years. 35 Countries.',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murivest | Global Institutional Commercial Real Estate — $14.2B Since 2001',
    description:
      'Twenty-five years of institutional real estate advisory. Sovereign wealth funds, pension funds, family offices. 35 countries. 16 offices.',
    images: ['https://murivest.com/og-image.jpg'],
    site: '@murivest',
    creator: '@murivest',
  },

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

  verification: {
    google: 'ADD_YOUR_MURIVEST_COM_VERIFICATION_CODE',
    yandex: 'ADD_YOUR_YANDEX_CODE',
  },

  category: 'Commercial Real Estate',
  classification: 'Institutional Real Estate Advisory',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1B4332',
  colorScheme: 'dark',
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-TQF6VT5RR3';

/* ====================================================
   STRUCTURED DATA SCHEMAS
   These schemas establish institutional parity with
   CBRE, JLL, Savills, Colliers, and Knight Frank
==================================================== */

const globalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Murivest',
  alternateName: ['Murivest Global', 'Murivest Realty Group', 'Murivest Advisory'],
  url: 'https://murivest.com',
  logo: 'https://murivest.com/logo.webp',
  image: 'https://murivest.com/og-image.jpg',
  description:
    'Murivest is an independent institutional commercial real estate advisory firm. Since 2001, we have advised sovereign wealth funds, pension funds, family offices, and institutional investors on $14.2 billion in transactions across 35 countries. 1,200 professionals. 16 offices. Capital markets, investment sales, tenant representation, and development strategy.',
  foundingDate: '2001',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '1200',
    unitText: 'employees',
  },
  sameAs: [
    'https://www.linkedin.com/company/murivest-realty-group',
    'https://www.instagram.com/murivest_realty',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+254-115-277-610',
      contactType: 'sales',
      areaServed: ['US', 'GB', 'AE', 'KE', 'SG', 'ZA', 'SA', 'QA', 'RW', 'TZ', 'UG', 'NG', 'JP', 'AU', 'FR', 'DE', 'NL'],
      availableLanguage: ['English', 'Arabic', 'French', 'Swahili'],
      hoursAvailable: 'Mo,Tu,We,Th,Fr 08:00-18:00',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-XXX-XXXX',
      contactType: 'sales',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Murivest House, Riverside Drive',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
  ],
  knowsAbout: [
    'Commercial Real Estate',
    'Capital Markets',
    'Investment Sales',
    'Tenant Representation',
    'Development Advisory',
    'Real Estate Research',
    'Cross-Border Investment',
    'Sovereign Wealth Fund Advisory',
    'Pension Fund Real Estate',
    'Family Office Real Estate',
    'Frontier Market Real Estate',
    'Industrial Real Estate',
    'Logistics Real Estate',
    'Office Real Estate',
    'Hospitality Real Estate',
    'Data Centre Real Estate',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Murivest Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Capital Markets',
          description: 'Debt and equity placement, joint venture structuring, and institutional capital sourcing. $6.2 billion in placements advised.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Investment Advisory',
          description: 'Discrete transaction advisory for commercial property acquisitions, dispositions, and portfolio restructuring. $4.8 billion in transaction advisory.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Occupier Solutions',
          description: 'Site selection, portfolio optimization, lease negotiations, and workplace strategy. 2.4 million square metres under advisory.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Development Advisory',
          description: 'Market feasibility, financial modeling, development strategy, and risk assessment. $2.8 billion in development mandates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Research & Intelligence',
          description: 'Independent research, primary data collection, sector analysis, and investment theses. 40+ analysts across 35+ markets.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transaction Services',
          description: 'End-to-end execution support, due diligence coordination, valuation oversight, and closing management for multi-jurisdictional transactions.',
        },
      },
    ],
  },
};

const globalWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Murivest',
  url: 'https://murivest.com',
  description:
    'Global commercial real estate intelligence, capital markets advisory, and institutional property advisory. $14.2 billion in transactions since 2001.',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest',
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://murivest.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    {
      '@type': 'Action',
      name: 'Submit Mandate Enquiry',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://murivest.com/ke/contact',
      },
    },
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
      name: 'Markets',
      item: 'https://murivest.com/markets',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Research',
      item: 'https://murivest.com/ke/research',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://murivest.com/ke/contact',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Murivest and what services does it provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murivest is an independent institutional commercial real estate advisory firm established in 2001. We provide capital markets advisory, investment sales, tenant representation, development advisory, and independent research across 35 countries. We have advised on $14.2 billion in transactions and employ 1,200 professionals across 16 offices in Africa, the Middle East, Asia Pacific, and Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are Murivest\'s typical clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murivest advises sovereign wealth funds, public pension funds, family offices, institutional investors, private equity firms, REITs, developers, and multinational occupiers. We maintain advisory relationships with 8 sovereign wealth funds and have advised $3.1 billion in pension capital. All engagements are mandate-based and subject to formal compliance review.',
      },
    },
    {
      '@type': 'Question',
      name: 'In which countries and cities does Murivest operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murivest operates 16 offices across 4 regions: Africa (Nairobi, Kigali, Kampala, Dar es Salaam, Lagos, Johannesburg), Middle East (Dubai, Abu Dhabi, Riyadh, Doha), Asia Pacific (Singapore, Hong Kong, Tokyo, Sydney), and Europe (London, Paris, Berlin, Amsterdam). Our professionals provide local market expertise with global institutional standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Murivest\'s transaction track record?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since 2001, Murivest has executed 2,400+ mandates across 35 countries and 18 asset classes, with $14.2 billion in total transaction advisory volume. Landmark transactions include a $1.2 billion mixed-use development in Dubai, an $800 million logistics platform in Singapore, a $650 million Grade-A office development in London, and a $450 million office portfolio in Paris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Murivest regulated and compliant with institutional standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murivest is a RICS-regulated firm, an INREV member, and a PREA corporate member. All advisory staff hold relevant professional qualifications (MRICS, CFA, or CAIA). We apply KYC and AML verification on all counterparties, conduct source-of-funds review as standard, and operate under full professional indemnity coverage in all jurisdictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Murivest compare to CBRE, JLL, Savills, Colliers, and Knight Frank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murivest operates at institutional scale comparable to CBRE, JLL, Savills, Colliers, and Knight Frank, with 1,200 professionals and $14.2 billion in transactions. Our differentiation lies in frontier market depth (East Africa, secondary Gulf cities), research-first advisory methodology, and direct capital relationships with sovereign wealth funds and pension funds. We are ranked among PERE\'s Top 25 Global CRE Advisors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Murivest provide research and market intelligence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Murivest maintains an independent Research Division with 40+ analysts across 35+ markets. We publish quarterly market outlooks, annual yield surveys, sector analyses, and investment theses. Our research has been downloaded over 50,000 times by institutional allocators and is the analytical foundation of every advisory mandate. Reports are available through our research portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I submit a mandate enquiry to Murivest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All advisory engagements are initiated through direct institutional referral or formal mandate submission. Visit murivest.com/ke/contact to submit an enquiry. Scope definition, KYC/AML compliance verification, and engagement documentation are required prior to commencement. We do not accept unsolicited mandates without appropriate due diligence.',
      },
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Murivest',
  image: 'https://murivest.com/logo.webp',
  '@id': 'https://murivest.com',
  url: 'https://murivest.com',
  telephone: '+254-115-277-610',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Murivest House, Riverside Drive',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    postalCode: '00100',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-1.2921',
    longitude: '36.8219',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.linkedin.com/company/murivest-realty-group',
    'https://www.instagram.com/murivest_realty',
  ],
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Murivest Global Real Estate Advisory',
  provider: {
    '@type': 'Organization',
    name: 'Murivest',
  },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Rwanda' },
    { '@type': 'Country', name: 'Uganda' },
    { '@type': 'Country', name: 'Tanzania' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  serviceType: [
    'Capital Markets Advisory',
    'Investment Sales',
    'Tenant Representation',
    'Development Advisory',
    'Real Estate Research',
    'Portfolio Strategy',
    'Valuation Services',
  ],
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
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans`}
    >
      <head>
        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/logo.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.webp" sizes="180x180" />
        
        {/* Theme & Mobile */}
        <meta name="theme-color" content="#1B4332" />
        <meta name="msapplication-TileColor" content="#1B4332" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Hreflang for International SEO */}
        <link rel="alternate" hrefLang="en-us" href="https://murivest.com" />
        <link rel="alternate" hrefLang="en-gb" href="https://murivest.com/uk" />
        <link rel="alternate" hrefLang="en-ae" href="https://murivest.com/uae" />
        <link rel="alternate" hrefLang="en-ke" href="https://murivest.com/ke" />
        <link rel="alternate" hrefLang="en-sg" href="https://murivest.com/sg" />
        <link rel="alternate" hrefLang="x-default" href="https://murivest.com" />

        {/* Structured Data — Organization */}
        <Script
          id="global-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalOrganizationSchema),
          }}
        />
        
        {/* Structured Data — WebSite */}
        <Script
          id="global-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalWebsiteSchema),
          }}
        />
        
        {/* Structured Data — BreadcrumbList */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        
        {/* Structured Data — FAQPage */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        
        {/* Structured Data — LocalBusiness */}
        <Script
          id="local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Structured Data — ProfessionalService / ServiceArea */}
        <Script
          id="service-area"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceAreaSchema),
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
          backgroundColor: '#0B1510',
          color: '#FAF9F6',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          overflowX: 'hidden',
        }}
      >
        {/* ============================================================
            STATIC SEO CONTENT — Crawled by Google without JavaScript
            This mirrors the React component content exactly for
            indexing parity with CBRE, JLL, Savills, Colliers, Knight Frank
        ============================================================ */}
        <noscript>
          <main style={{ backgroundColor: '#0B1510', color: '#FAF9F6', fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* Hero Section */}
            <header style={{ padding: '120px 6vw 80px', maxWidth: '1280px', margin: '0 auto' }}>
              <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.75rem)', fontWeight: 500, color: '#FAF9F6', lineHeight: 1.08, marginBottom: '1.25rem' }}>
                Twenty-Five Years of Institutional Real Estate Advisory at Global Scale.
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.82, maxWidth: '480px', marginBottom: '2rem' }}>
                Since 2001, Murivest has advised sovereign wealth funds, pension systems, and family offices on acquisition, disposition, and development strategy across 2,400+ mandates in Africa, the Middle East, Asia Pacific, and Europe. Every engagement mandate-based. Every standard institutional.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/transactions" style={{ padding: '0.85rem 2rem', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B4332', backgroundColor: '#C9A96E', textDecoration: 'none' }}>
                  View Transaction History
                </a>
                <a href="/ke/contact" style={{ padding: '0.85rem 2rem', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FAF9F6', border: '1px solid rgba(250,249,246,0.20)', textDecoration: 'none' }}>
                  Submit Mandate Enquiry
                </a>
              </div>
            </header>

            {/* Trust Bar */}
            <section style={{ padding: '12px 6vw', backgroundColor: '#080F0B', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
              <p style={{ fontSize: '0.46rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.65)' }}>
                INREV Member · PREA Corporate Member · RICS Regulated Firm · PERE Top 25 Global CRE Advisor — 2025 · Cited In: Financial Times · PERE · EuroMoney
              </p>
            </section>

            {/* Scale & Reach */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#111C16', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 500, color: '#FAF9F6', textAlign: 'center', marginBottom: '3rem' }}>
                Twenty-five years. Institutional capability. A global footprint built to execute.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', backgroundColor: 'rgba(201,169,110,0.10)' }}>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>$14B+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Transaction Advisory</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>2001 — 2026</div>
                </div>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>2,400+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Mandates Executed</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>18 Asset Classes</div>
                </div>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>1,200+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Professionals Globally</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>16 Offices · 4 Regions</div>
                </div>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>40+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Research Analysts</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>Primary Data · Independent Theses</div>
                </div>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>180+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Institutional Clients</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>SWFs · Pension Funds · Family Offices</div>
                </div>
                <div style={{ padding: '2.25rem 1.5rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: '#C9A96E', marginBottom: '0.75rem' }}>35+</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FAF9F6' }}>Countries</div>
                  <div style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>Frontier & Established Markets</div>
                </div>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.75, maxWidth: '640px', margin: '2rem auto 0', textAlign: 'center' }}>
                We do not disclose client names without explicit mandate. Every figure cited reflects documented, verifiable transaction and advisory history. Engagement references are available to qualified institutional counterparties upon formal request and NDA execution.
              </p>
            </section>

            {/* Landmark Transactions */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#0B1510', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FAF9F6', marginBottom: '1rem' }}>
                $14.2 Billion in Documented Transaction History.
              </h2>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.75, maxWidth: '480px', marginBottom: '3rem' }}>
                2,400+ mandates executed across 35 countries and 18 asset classes since 2001. Client identities are protected under strict confidentiality protocols.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Integrated Mixed-Use Development</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$1.2B</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Dubai, UAE · 2026 · Capital Markets Advisory · Mixed-Use</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Sovereign Wealth Fund — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Logistics Platform Acquisition</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$800M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Singapore · 2025 · Capital Markets · Industrial & Logistics</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Institutional Fund — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Grade-A Office Development</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$650M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>London, UK · 2023 · Capital Markets · Office</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Sovereign Fund — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Office Portfolio Acquisition</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$450M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Paris, France · 2025 · Investment Advisory · Office Portfolio</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Pension Fund — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Grade-A Office Acquisition</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$420M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Tokyo, Japan · 2022 · Investment Advisory · Office</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Open-End Fund — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Industrial Park Joint Venture</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$380M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Riyadh, KSA · 2024 · Development Advisory · Industrial</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Private Equity — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Data Centre Platform</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$340M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Singapore & Kuala Lumpur · 2024 · Capital Markets · Data Centre</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>Listed REIT — Confidential</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FAF9F6', marginBottom: '0.6rem' }}>Integrated Retail & Office Platform</h3>
                  <p style={{ fontSize: '0.88rem', color: '#C9A96E', fontWeight: 600, marginBottom: '0.5rem' }}>$310M</p>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(250,249,246,0.55)' }}>Abu Dhabi, UAE · 2021 · Capital Markets · Retail Mixed-Use</p>
                  <p style={{ fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>SWF — Confidential</p>
                </article>
              </div>
            </section>

            {/* Global Office Network */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#1B4332', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.85rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FAF9F6', textAlign: 'center', marginBottom: '1.25rem' }}>
                16 Offices. 4 Regions. Local Expertise. Global Execution.
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.82, maxWidth: '560px', margin: '0 auto 3rem', textAlign: 'center' }}>
                Murivest operates an integrated global advisory platform. Every office is staffed by local market professionals with ground-level relationships.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', backgroundColor: 'rgba(201,169,110,0.12)' }}>
                <div style={{ backgroundColor: 'rgba(11,21,16,0.55)', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.4rem' }}>AFRICA</h3>
                  <p style={{ fontSize: '0.48rem', letterSpacing: '0.08em', color: 'rgba(201,169,110,0.52)', marginBottom: '1.25rem' }}>180 Professionals · $2.1B Advised Since 2015</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Nairobi, Kenya <span style={{ fontSize: '0.4rem', color: '#C9A96E', backgroundColor: 'rgba(201,169,110,0.10)', padding: '0.08rem 0.35rem', marginLeft: '0.45rem' }}>HQ</span> <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>80</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Kigali, Rwanda <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>25</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Kampala, Uganda <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>20</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Dar es Salaam, Tanzania <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>22</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Lagos, Nigeria <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>18</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0' }}>Johannesburg, South Africa <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>15</span></li>
                  </ul>
                </div>
                <div style={{ backgroundColor: 'rgba(11,21,16,0.55)', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.4rem' }}>MIDDLE EAST</h3>
                  <p style={{ fontSize: '0.48rem', letterSpacing: '0.08em', color: 'rgba(201,169,110,0.52)', marginBottom: '1.25rem' }}>240 Professionals · $4.8B Advised Since 2018</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Dubai, UAE <span style={{ fontSize: '0.4rem', color: '#C9A96E', backgroundColor: 'rgba(201,169,110,0.10)', padding: '0.08rem 0.35rem', marginLeft: '0.45rem' }}>HQ</span> <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>110</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Abu Dhabi, UAE <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>45</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Riyadh, Saudi Arabia <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>55</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0' }}>Doha, Qatar <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>30</span></li>
                  </ul>
                </div>
                <div style={{ backgroundColor: 'rgba(11,21,16,0.55)', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.4rem' }}>ASIA PACIFIC</h3>
                  <p style={{ fontSize: '0.48rem', letterSpacing: '0.08em', color: 'rgba(201,169,110,0.52)', marginBottom: '1.25rem' }}>185 Professionals · $3.2B Advised Since 2016</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Singapore <span style={{ fontSize: '0.4rem', color: '#C9A96E', backgroundColor: 'rgba(201,169,110,0.10)', padding: '0.08rem 0.35rem', marginLeft: '0.45rem' }}>HQ</span> <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>95</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Hong Kong, China SAR <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>40</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Tokyo, Japan <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>28</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0' }}>Sydney, Australia <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>22</span></li>
                  </ul>
                </div>
                <div style={{ backgroundColor: 'rgba(11,21,16,0.55)', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.4rem' }}>EUROPE</h3>
                  <p style={{ fontSize: '0.48rem', letterSpacing: '0.08em', color: 'rgba(201,169,110,0.52)', marginBottom: '1.25rem' }}>160 Professionals · $4.1B Advised Since 2014</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>London, UK <span style={{ fontSize: '0.4rem', color: '#C9A96E', backgroundColor: 'rgba(201,169,110,0.10)', padding: '0.08rem 0.35rem', marginLeft: '0.45rem' }}>HQ</span> <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>85</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Paris, France <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>35</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>Berlin, Germany <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>22</span></li>
                    <li style={{ fontSize: '0.72rem', color: '#FAF9F6', padding: '0.65rem 0' }}>Amsterdam, Netherlands <span style={{ float: 'right', color: 'rgba(201,169,110,0.55)' }}>18</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Institutional Client Base */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#0B1510', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 500, color: '#FAF9F6', textAlign: 'center', marginBottom: '1.25rem' }}>
                Advisory relationships with the world's most sophisticated capital allocators.
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto 3rem', textAlign: 'center' }}>
                We do not disclose client names without explicit mandate. Engagement references are available to qualified institutional counterparties upon formal NDA execution and mandate review.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'rgba(201,169,110,0.10)' }}>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Sovereign Wealth Funds</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>8 Active Advisory Relationships</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Long-horizon capital allocation across global gateway and frontier markets. Direct mandate relationships with state-owned investment vehicles across the Gulf, Asia Pacific, and Sub-Saharan Africa.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Public Pension Funds</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>$3.1B in Pension Capital Advised</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Core and core-plus strategies for liability-matched, inflation-hedged real estate returns. Established track record navigating OECD and non-OECD market entries across 18 asset classes.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Family Offices</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>120+ Multi-Generational Relationships</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Direct real estate exposure strategies, portfolio construction advisory, and generational wealth preservation across emerging and developed commercial markets.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Institutional Investors</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>$4.2B Active Mandates Under Advisory</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Portfolio construction, sector rotation, and cross-border allocation advisory for institutional allocators managing long-duration real assets capital at scale.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Private Equity Firms</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>Value-Add & Opportunistic Execution</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Deal origination, underwriting support, and exit strategy advisory across value-add and opportunistic mandates. Frontier market information advantage embedded in every engagement.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>REITs</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>Public & Private Advisory</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Portfolio advisory, acquisition pipeline development, and capital structuring for listed and unlisted real estate investment trusts across global markets.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Developers</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>$2.8B in Development Mandates</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Ground-up development strategy, market feasibility, financial modeling, and institutional capital introduction for large-scale commercial projects in frontier and core markets.</p>
                </div>
                <div style={{ padding: '2.25rem 1.75rem', backgroundColor: '#111C16' }}>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.3rem' }}>Multinational Occupiers</h3>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.6rem' }}>2.4M sqm Under Advisory</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Global portfolio optimization, site selection, and workplace strategy for Fortune 500 and FTSE 100 corporations scaling real estate footprints across frontier and emerging markets.</p>
                </div>
              </div>
            </section>

            {/* Research Division */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#0E1812', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FAF9F6', marginBottom: '1.5rem' }}>
                40+ Analysts. Primary Data. Independent Investment Theses.
              </h2>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.82, maxWidth: '340px', marginBottom: '1.75rem' }}>
                Our research is not marketing. It is the analytical foundation of every advisory mandate. Murivest's research division operates independently, producing primary market intelligence in markets where information asymmetry creates institutional alpha. Downloaded over 50,000 times by institutional allocators globally.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(201,169,110,0.10)', marginBottom: '2rem', maxWidth: '400px' }}>
                <div style={{ padding: '1.25rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', color: '#C9A96E', marginBottom: '0.35rem' }}>40+</div>
                  <div style={{ fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.55)' }}>Research Analysts</div>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', color: '#C9A96E', marginBottom: '0.35rem' }}>35+</div>
                  <div style={{ fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.55)' }}>Markets Covered</div>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', color: '#C9A96E', marginBottom: '0.35rem' }}>50K+</div>
                  <div style={{ fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.55)' }}>Report Downloads</div>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#0B1510', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', color: '#C9A96E', marginBottom: '0.35rem' }}>4</div>
                  <div style={{ fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.55)' }}>Annual Flagship Series</div>
                </div>
              </div>

              <h3 style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '1.25rem' }}>Latest Research</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '700px' }}>
                <li style={{ padding: '1.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.48rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>AFRICA</span>
                    <span style={{ fontSize: '0.48rem', color: 'rgba(250,249,246,0.30)' }}>Jun 2026</span>
                    <span style={{ fontSize: '0.44rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.12rem 0.45rem' }}>Market Outlook</span>
                  </div>
                  <h4 style={{ fontSize: '0.88rem', color: 'rgba(250,249,246,0.76)', lineHeight: 1.55, marginBottom: '0.6rem' }}>East Africa Commercial Property Outlook: Mid-Year 2026</h4>
                  <p style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>12 analysts · 8,200+ downloads</p>
                </li>
                <li style={{ padding: '1.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.48rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>GLOBAL</span>
                    <span style={{ fontSize: '0.48rem', color: 'rgba(250,249,246,0.30)' }}>Apr 2026</span>
                    <span style={{ fontSize: '0.44rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.12rem 0.45rem' }}>Yield Survey</span>
                  </div>
                  <h4 style={{ fontSize: '0.88rem', color: 'rgba(250,249,246,0.76)', lineHeight: 1.55, marginBottom: '0.6rem' }}>Global Yield Survey: Q1 2026 — 35 Markets, 18 Asset Classes</h4>
                  <p style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>18 analysts · 12,500+ downloads</p>
                </li>
                <li style={{ padding: '1.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.48rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>MIDDLE EAST</span>
                    <span style={{ fontSize: '0.48rem', color: 'rgba(250,249,246,0.30)' }}>Feb 2026</span>
                    <span style={{ fontSize: '0.44rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.12rem 0.45rem' }}>Sector Analysis</span>
                  </div>
                  <h4 style={{ fontSize: '0.88rem', color: 'rgba(250,249,246,0.76)', lineHeight: 1.55, marginBottom: '0.6rem' }}>GCC Industrial & Logistics: The Institutionalisation of the Sector</h4>
                  <p style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>9 analysts · 6,800+ downloads</p>
                </li>
                <li style={{ padding: '1.75rem 0' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.48rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E' }}>ASIA PACIFIC</span>
                    <span style={{ fontSize: '0.48rem', color: 'rgba(250,249,246,0.30)' }}>Nov 2025</span>
                    <span style={{ fontSize: '0.44rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.12rem 0.45rem' }}>Investment Thesis</span>
                  </div>
                  <h4 style={{ fontSize: '0.88rem', color: 'rgba(250,249,246,0.76)', lineHeight: 1.55, marginBottom: '0.6rem' }}>APAC Data Centre Demand Forecast: 2025–2030</h4>
                  <p style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)' }}>7 analysts · 9,100+ downloads</p>
                </li>
              </ul>
            </section>

            {/* Advisory Capabilities */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#0B1510', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FAF9F6', marginBottom: '1rem' }}>
                Integrated Institutional Advisory Capabilities.
              </h2>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.82, maxWidth: '480px', marginBottom: '3rem' }}>
                Six practice areas, one integrated platform. Every engagement draws on primary research and local market intelligence.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Capital Markets</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Debt and equity placement, joint venture structuring, and institutional capital sourcing. $6.2 billion in placements advised. 800+ senior capital relationships. SWF and pension fund origination.</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Investment Advisory</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Discrete transaction advisory for commercial property acquisitions, dispositions, and portfolio restructuring. $4.8 billion in transaction advisory. 18 asset classes, 35 countries.</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Occupier Solutions</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Site selection, portfolio optimization, lease negotiations, and workplace strategy. 2.4 million square metres under advisory. Global portfolio coordination for Fortune 500 and FTSE 100 corporations.</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Development Advisory</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Market feasibility, financial modeling, development strategy, and risk assessment. $2.8 billion in development mandates. Ground-up advisory from concept to completion.</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Research & Intelligence</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>Independent research, primary data collection, sector analysis, and investment theses. 40+ analysts. 35+ markets. Quarterly outlooks, annual yield surveys, and thematic research.</p>
                </article>
                <article style={{ border: '1px solid rgba(201,169,110,0.10)', backgroundColor: '#111C16', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.6rem' }}>Transaction Services</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.65 }}>End-to-end execution support, due diligence coordination, valuation oversight, and closing management for multi-jurisdictional transactions. Institutional process design.</p>
                </article>
              </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#111C16', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.85rem, 3vw, 2.75rem)', fontWeight: 500, color: '#FAF9F6', marginBottom: '3rem' }}>
                Frequently Asked Questions.
              </h2>
              <div style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.5rem' }}>What is Murivest and what services does it provide?</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.7 }}>Murivest is an independent institutional commercial real estate advisory firm established in 2001. We provide capital markets advisory, investment sales, tenant representation, development advisory, and independent research across 35 countries. We have advised on $14.2 billion in transactions and employ 1,200 professionals across 16 offices in Africa, the Middle East, Asia Pacific, and Europe.</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.5rem' }}>Who are Murivest's typical clients?</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.7 }}>Murivest advises sovereign wealth funds, public pension funds, family offices, institutional investors, private equity firms, REITs, developers, and multinational occupiers. We maintain advisory relationships with 8 sovereign wealth funds and have advised $3.1 billion in pension capital. All engagements are mandate-based and subject to formal compliance review.</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.5rem' }}>In which countries and cities does Murivest operate?</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.7 }}>Murivest operates 16 offices across 4 regions: Africa (Nairobi, Kigali, Kampala, Dar es Salaam, Lagos, Johannesburg), Middle East (Dubai, Abu Dhabi, Riyadh, Doha), Asia Pacific (Singapore, Hong Kong, Tokyo, Sydney), and Europe (London, Paris, Berlin, Amsterdam). Our professionals provide local market expertise with global institutional standards.</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FAF9F6', marginBottom: '0.5rem' }}>How does Murivest compare to CBRE, JLL, Savills, Colliers, and Knight Frank?</h3>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.7 }}>Murivest operates at institutional scale comparable to CBRE, JLL, Savills, Colliers, and Knight Frank, with 1,200 professionals and $14.2 billion in transactions. Our differentiation lies in frontier market depth (East Africa, secondary Gulf cities), research-first advisory methodology, and direct capital relationships with sovereign wealth funds and pension funds. We are ranked among PERE's Top 25 Global CRE Advisors.</p>
                </div>
              </div>
            </section>

            {/* Contact / CTA */}
            <section style={{ padding: '80px 6vw', backgroundColor: '#0B1510' }}>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FAF9F6', marginBottom: '1.25rem' }}>
                Engage Murivest on your next mandate.
              </h2>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(250,249,246,0.55)', lineHeight: 1.82, maxWidth: '480px', marginBottom: '2rem' }}>
                All advisory engagements are initiated through direct institutional referral or formal mandate submission. Scope definition, KYC/AML compliance verification, and engagement documentation are required prior to commencement.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/ke/contact" style={{ padding: '0.85rem 2rem', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B4332', backgroundColor: '#C9A96E', textDecoration: 'none' }}>
                  Submit Mandate Enquiry
                </a>
                <a href="/ke/research" style={{ padding: '0.85rem 2rem', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FAF9F6', border: '1px solid rgba(250,249,246,0.20)', textDecoration: 'none' }}>
                  Access Research Portal
                </a>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px 6vw', backgroundColor: '#080F0B', borderTop: '1px solid rgba(201,169,110,0.12)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.52rem', color: 'rgba(250,249,246,0.35)', marginBottom: '0.5rem' }}>
                Murivest is a RICS-regulated firm, an INREV member, and a PREA corporate member.
              </p>
              <p style={{ fontSize: '0.48rem', color: 'rgba(201,169,110,0.42)' }}>
                © {new Date().getFullYear()} Murivest. All rights reserved. | <a href="/privacy" style={{ color: 'rgba(201,169,110,0.65)', textDecoration: 'none' }}>Privacy Policy</a> | <a href="/terms" style={{ color: 'rgba(201,169,110,0.65)', textDecoration: 'none' }}>Terms of Engagement</a>
              </p>
            </footer>
          </main>
        </noscript>

        {/* Client-side React Application */}
          <Suspense fallback={
            <div style={{ minHeight: '100vh', background: '#0B1510' }} />
          }>
            {children}
          </Suspense>

        <CookieBanner />
        <AnalyticsTracker />
        <MetaPixel />
      </body>
    </html>
  );
}