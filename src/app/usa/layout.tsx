import type { Metadata } from "next";
import Script from "next/script";
import USAHeader from "./components/USAHeader";
import { SITE, PROPERTY_TYPES } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://murivest.com"),
  title: {
    default: "Murivest USA | Institutional Commercial Real Estate Advisory",
    template: "%s | Murivest USA",
  },
  description:
    "Murivest USA delivers institutional-grade commercial real estate advisory, investment sales, capital markets, and property intelligence across United States office, industrial, logistics, multifamily, retail, and data center markets.",
  keywords: [
    "commercial real estate USA",
    "institutional real estate United States",
    "US commercial property advisory",
    "USA investment property",
    "US capital markets",
    "US real estate advisory",
    "industrial real estate USA",
    "office space United States",
    "retail property USA",
    "property valuation USA",
    "USA real estate market report",
    "CRE USA",
    "multifamily USA",
    "logistics real estate USA",
    "data centers USA",
    "commercial property acquisition USA",
    "commercial property disposition USA",
    "US CRE investment",
    "family office real estate USA",
    "private equity real estate USA",
  ],
  alternates: {
    canonical: "/usa",
    languages: {
      "en-US": "/usa",
      "en-KE": "/kenya",
      "en-GB": "/united-kingdom",
      "en-AE": "/united-arab-emirates",
      "en-SG": "/singapore",
      "en": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/usa",
    siteName: "Murivest",
    title: "Murivest USA | Institutional Commercial Real Estate Advisory",
    description:
      "Institutional commercial real estate advisory, investment opportunities and market intelligence across the United States.",
    images: [
      {
        url: "/usa/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Murivest USA – Commercial Real Estate Advisory",
      },
    ],
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Murivest",
    creator: "@Murivest",
    title: "Murivest USA | Institutional Commercial Real Estate Advisory",
    description:
      "Institutional commercial real estate advisory and investment opportunities across the United States.",
    images: ["/usa/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "format-detection": "telephone=no",
    "theme-color": "#1B4332",
  },
};

const usaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://murivest.com/usa/#organization",
  name: "Murivest USA",
  alternateName: "Murivest Group",
  parentOrganization: {
    "@type": "Organization",
    "@id": "https://murivest.com/#organization",
    name: "Murivest",
  },
  url: "https://murivest.com/usa",
  logo: {
    "@type": "ImageObject",
    url: "https://murivest.com/logo.webp",
    width: 180,
    height: 60,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "New York",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/murivest-realty-group",
    "https://www.instagram.com/murivest_realty",
  ],
  knowsAbout: [
    "Commercial Real Estate",
    "Investment Sales",
    "Capital Markets",
    "Office Real Estate",
    "Industrial Real Estate",
    "Logistics Real Estate",
    "Multifamily Real Estate",
    "Retail Real Estate",
    "Data Centers",
    "Property Investment",
    "Real Estate Advisory",
    "Market Intelligence",
  ],
  description:
    "Murivest USA provides institutional commercial real estate advisory, capital markets services, and property intelligence to investors, developers, and occupiers across the United States.",
};

const usaLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://murivest.com/usa/#realestateagent",
  name: "Murivest USA",
  image: "https://murivest.com/logo.webp",
  url: "https://murivest.com/usa",
  telephone: "+1-XXX-XXX-XXXX",
  email: "capitalmarkets@murivest.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "New York",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "Institutional",
  knowsAbout: [
    "Commercial Real Estate",
    "Investment Sales",
    "Capital Markets",
    "Office Real Estate",
    "Industrial Real Estate",
    "Logistics",
    "Multifamily",
    "Retail",
    "Data Centers",
  ],
};

const usaWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://murivest.com/usa/#webpage",
  url: "https://murivest.com/usa",
  name: "Murivest USA | Institutional Commercial Real Estate Advisory",
  description:
    "Institutional commercial real estate advisory, investment opportunities and market intelligence across the United States.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://murivest.com/#website",
  },
  about: {
    "@id": "https://murivest.com/usa/#organization",
  },
  inLanguage: "en-US",
  spatialCoverage: {
    "@type": "Country",
    name: "United States",
  },
  breadcrumb: {
    "@id": "https://murivest.com/usa/#breadcrumb",
  },
};

const usaBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://murivest.com/usa/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Murivest",
      item: "https://murivest.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "USA",
      item: "https://murivest.com/usa",
    },
  ],
};

export default function USALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="usa-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaOrganizationSchema),
        }}
      />
      <Script
        id="usa-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaLocalBusinessSchema),
        }}
      />
      <Script
        id="usa-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaWebPageSchema),
        }}
      />
      <Script
        id="usa-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(usaBreadcrumbSchema),
        }}
      />
      <USAHeader />
      {children}
    </>
  );
}
