import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

const PropertiesForRentComponent =
  PropertiesForRent as React.ComponentType<{ initialData: any[] }>;

// ─────────────────────────────────────────────
// ✅ Optimized GROQ Query (LIMITED + LIGHTER)
// ─────────────────────────────────────────────
const PROPERTIES_RENT_QUERY = defineQuery(`
  *[
    _type == "propertyForRent" &&
    !(_id in path('drafts.**'))
  ] | order(_createdAt desc)[0...50] {

    _id,
    _createdAt,

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

    // lightweight location object
    "location": {
      "lat": coordinates.lat,
      "lng": coordinates.lng
    },

    // ✅ ONLY FIRST IMAGE (important performance fix)
    "image": images[0]{
      caption,
      "url": asset->url
    },

    // ❌ removed full gallery from list page (move to detail page)
    virtualTour
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
        url: '/og-properties-rent.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Commercial Properties For Rent',
      },
    ],
  },
};

// ─────────────────────────────────────────────
// ISR (keep lightweight refresh)
// ─────────────────────────────────────────────
export const revalidate = 120;

// OPTIONAL (uncomment if still slow on Vercel)
// export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  let propertyData: any[] = [];

  try {
    propertyData = await client.fetch(PROPERTIES_RENT_QUERY, {}, {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Error fetching rental properties:', error);
    propertyData = [];
  }

  // ─────────────────────────────────────────────
  // Structured Data (safe with limited data)
  // ─────────────────────────────────────────────
  const baseUrl = 'https://murivest.co.ke';

  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Commercial Properties For Rent in Kenya',
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
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="bg-[#FAF9F6] min-h-screen">
        <PropertiesForRentComponent initialData={propertyData} />
      </main>
    </>
  );
}