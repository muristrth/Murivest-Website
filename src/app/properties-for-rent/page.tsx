import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

const PropertiesForRentComponent =
  PropertiesForRent as React.ComponentType<{ initialData: any[] }>;

// ─────────────────────────────────────────────
// LIGHTWEIGHT GROQ QUERY (SAFE FOR BUILD)
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

    "image": {
      "assetRef": images[0].asset._ref,
      "caption": images[0].caption
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
    'Find premium commercial properties for rent in Nairobi and across Kenya including offices, retail shops, warehouses and mixed-use developments.',

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
};

// ─────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────
function StructuredData({ propertyData }: { propertyData: any[] }) {
  const baseUrl = 'https://murivest.co.ke';

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

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
    },
  };

  return (
    <>
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
    </>
  );
}

// ─────────────────────────────────────────────
// PAGE (NO ISR / NO REVALIDATE)
// ─────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  let propertyData: any[] = [];

  try {
    propertyData = await client.fetch(PROPERTIES_RENT_QUERY);
  } catch (error) {
    console.error(
      '[properties-for-rent] Failed to fetch properties:',
      error
    );
  }

  return (
    <>
      <StructuredData propertyData={propertyData} />

      <main className="bg-[#FAF9F6] min-h-screen">
        <PropertiesForRentComponent
          initialData={propertyData}
        />
      </main>
    </>
  );
}