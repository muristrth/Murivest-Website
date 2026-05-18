import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

// ─── GROQ Query ───────────────────────────────────────────────────────────────
const PROPERTIES_RENT_QUERY = defineQuery(`
  *[
    _type == "propertyForRent" &&
    !(_id in path('drafts.**'))
  ] | order(_createdAt desc) {
    _id,
    _createdAt,
    _updatedAt,

    title,
    subtitle,
    description,

    "slug": slug.current,

    assetCategory,
    propertyType,
    status,

    address,
    city,
    state,
    zipCode,

    rent,
    rentKsh,
    rentUsd,
    currency,

    squareFootage,
    leaseTerm,
    securityDeposit,
    serviceCharge,

    availableFrom,

    furnished,
    parking,
    parkingSpaces,

    features,

    specifications[] {
      label,
      value
    },

    "location": select(
      defined(coordinates) => {
        "lat": coordinates.lat,
        "lng": coordinates.lng
      },
      {
        "lat": null,
        "lng": null
      }
    ),

    "image": images[0]{
      asset->{
        _id,
        url
      },
      caption
    },

    "gallery": images[]{
      asset->{
        _id,
        url
      },
      caption
    },

    floorplan{
      "url": asset->url
    },

    virtualTour
  }
`);

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.co.ke'),

  title: {
    default: 'Commercial Properties For Rent in Nairobi Kenya | Murivest',
    template: '%s | Murivest',
  },

  description:
    'Find premium commercial properties for rent in Nairobi CBD, Upper Hill, Westlands, Kilimani, Industrial Area and across Kenya. Offices, shops, retail spaces, warehouses, suites and mixed-use developments available for lease.',

  keywords: [
    'shops to let in Nairobi CBD',
    'commercial property for rent Nairobi',
    'offices to let Nairobi',
    'retail shops for rent Kenya',
    'warehouses for lease Nairobi',
    'ICBD shops to let',
    'commercial space Nairobi',
    'office suites Nairobi',
    'property to let Kenya',
    'Murivest properties',
    'commercial rentals Nairobi',
    'business premises to let',
    'shop spaces Nairobi CBD',
    'industrial property Kenya',
  ],

  alternates: {
    canonical: '/properties-for-rent',
  },

  openGraph: {
    title: 'Commercial Properties For Rent in Kenya | Murivest',
    description:
      'Browse verified commercial properties for rent in Nairobi and across Kenya. Retail shops, office spaces, warehouses, suites and mixed-use developments.',
    url: 'https://murivest.co.ke/properties-for-rent',
    siteName: 'Murivest',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/og-properties-rent.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Commercial Properties For Rent',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Properties For Rent in Kenya | Murivest',
    description:
      'Verified commercial properties, office spaces, retail shops and warehouses for rent in Nairobi and across Kenya.',
    images: ['/og-properties-rent.jpg'],
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

  category: 'Real Estate',
};

// ─── ISR revalidation ─────────────────────────────────────────────────────────
export const revalidate = 60;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  let propertyData: any[] = [];

  try {
    propertyData = await client.fetch(PROPERTIES_RENT_QUERY);
  } catch (error) {
    console.error('Error fetching rental properties:', error);
  }

  const baseUrl = 'https://murivest.co.ke';

  // ── Structured Data ──────────────────────────────────────────────────────────
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Commercial Properties For Rent in Kenya',
    description: 'Verified commercial rental properties in Nairobi and across Kenya.',
    numberOfItems: propertyData.length,
    itemListElement: propertyData.slice(0, 20).map((property: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/properties-for-rent/${property.slug}`,
      name: property.title,
    })),
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Murivest',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-properties-rent.jpg`,
    description:
      'Murivest is a commercial real estate platform connecting businesses with premium offices, retail spaces, warehouses and mixed-use properties across Kenya.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of commercial properties are available for rent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Murivest lists offices, retail shops, warehouses, suites, mixed-use developments, industrial spaces and hospitality properties across Nairobi and Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have shops to let in Nairobi CBD and ICBD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Murivest regularly lists retail shops and commercial spaces to let in Nairobi CBD, ICBD, Westlands, Upper Hill, Kilimani and other prime business districts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I find furnished office spaces for rent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Some listings include furnished office suites with parking, fiber connectivity, backup power and security systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Murivest property listings verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Murivest aims to provide verified commercial property listings with accurate descriptions, specifications, pricing and location details.',
        },
      },
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Murivest',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/properties-for-rent?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/*
        ✅ Use raw <script> tags (lowercase) for JSON-LD in Server Components.
           Next.js <Script> is for third-party scripts with loading strategies
           and causes the console warning when used inside React component trees.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <main className="bg-[#FAF9F6] min-h-screen">
        <PropertiesForRent {...({ initialData: propertyData } as any)} />
      </main>
    </>
  );
}