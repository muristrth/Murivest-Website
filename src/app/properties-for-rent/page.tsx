import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

export const dynamic = 'force-dynamic';

// ─────────────────────────────────────────────
// SAFE GROQ QUERY
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

    "image": select(
      defined(images[0].asset) => {
        "asset": images[0].asset->{
          url
        },
        "caption": images[0].caption
      },
      null
    )
  }
`);

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://murivest.co.ke'),

  title: {
    default:
      'Commercial Properties For Rent in Nairobi Kenya | Murivest',
    template: '%s | Murivest',
  },

  description:
    'Find premium commercial properties for rent in Nairobi and across Kenya including offices, retail shops, warehouses and mixed-use developments.',

  alternates: {
    canonical: '/properties-for-rent',
  },

  openGraph: {
    title:
      'Commercial Properties For Rent in Kenya | Murivest',

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

    title:
      'Commercial Properties For Rent in Kenya | Murivest',

    description:
      'Browse verified commercial properties for rent in Nairobi and across Kenya.',

    images: ['/og-properties-rent.webp'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────
function StructuredData({
  propertyData,
}: {
  propertyData: any[];
}) {
  const baseUrl = 'https://murivest.co.ke';

  const listJsonLd = {
    '@context': 'https://schema.org',

    '@type': 'ItemList',

    name: 'Commercial Properties For Rent in Kenya',

    numberOfItems: propertyData.length,

    itemListElement: propertyData
      .filter((property: any) => property?.slug)
      .map((property: any, index: number) => ({
        '@type': 'ListItem',

        position: index + 1,

        url: `${baseUrl}/properties-for-rent/${property.slug}`,

        name: property.title || 'Commercial Property',
      })),
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
// PAGE
// ─────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  let propertyData: any[] = [];

  try {
    propertyData = await client.fetch(
      PROPERTIES_RENT_QUERY
    );
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
        <PropertiesForRent
          {...({ initialData: propertyData } as any)}
        />
      </main>
    </>
  );
}