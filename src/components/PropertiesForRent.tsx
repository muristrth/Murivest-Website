import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

// ─────────────────────────────────────────────
// LIGHTWEIGHT LISTING QUERY
// ─────────────────────────────────────────────
const PROPERTIES_RENT_QUERY = defineQuery(`
  *[
    _type == "propertyForRent" &&
    !(_id in path('drafts.**'))
  ]
  | order(_createdAt desc)[0...20] {

    _id,
    _createdAt,

    title,
    subtitle,

    "slug": slug.current,

    propertyType,
    status,

    city,
    state,

    rentKsh,
    currency,

    squareFootage,

    furnished,
    parking,

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
      "assetRef": asset._ref,
      caption
    }
  }
`);

// ─────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.co.ke'),

  title: {
    default: 'Commercial Properties For Rent in Nairobi Kenya | Murivest',
    template: '%s | Murivest',
  },

  description:
    'Find premium commercial properties for rent in Nairobi CBD, Upper Hill, Westlands, Kilimani, Industrial Area and across Kenya.',

  keywords: [
    'commercial property for rent Nairobi',
    'offices to let Nairobi',
    'retail shops for rent Kenya',
    'warehouses for lease Nairobi',
    'commercial space Nairobi',
    'office suites Nairobi',
    'property to let Kenya',
  ],

  alternates: {
    canonical: '/properties-for-rent',
  },

  openGraph: {
    title: 'Commercial Properties For Rent in Kenya | Murivest',
    description:
      'Browse verified commercial properties for rent in Nairobi and across Kenya.',
    url: 'https://murivest.co.ke/properties-for-rent',
    siteName: 'Murivest',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/og-properties-rent.webp',
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
      'Verified commercial properties for rent in Nairobi and across Kenya.',
    images: ['/og-properties-rent.webp'],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: 'Real Estate',
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  let propertyData: any[] = [];
  const PropertiesForRentView =
    PropertiesForRent as React.ComponentType<{
      initialData: any[];
    }>;

  try {
    propertyData = await client.fetch(PROPERTIES_RENT_QUERY);
  } catch (error) {
    console.error(
      '[properties-for-rent] Fetch failed:',
      error
    );
  }

  const baseUrl = 'https://murivest.co.ke';

  // ───────────────────────────────────────────
  // STRUCTURED DATA
  // ───────────────────────────────────────────
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Commercial Properties For Rent in Kenya',
    numberOfItems: propertyData.length,
    itemListElement: propertyData.map(
      (property: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${baseUrl}/properties-for-rent/${property.slug}`,
        name: property.title,
      })
    ),
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Murivest',
    url: baseUrl,
    logo: `${baseUrl}/logo.webp`,
    image: `${baseUrl}/og-properties-rent.webp`,
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
          text:
            'Murivest lists offices, retail shops, warehouses, suites and commercial developments across Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have shops to let in Nairobi CBD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Murivest regularly lists retail shops and office spaces in Nairobi CBD and other business districts.',
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(listJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      {/* PAGE */}
      <main className="bg-[#FAF9F6] min-h-screen">
        <PropertiesForRentView
          initialData={propertyData}
        />
      </main>
    </>
  );
}