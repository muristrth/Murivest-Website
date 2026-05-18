import type { Metadata } from 'next';
import { Suspense } from 'react';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import PropertiesForRent from '@/components/PropertiesForRent';

const PropertiesForRentComponent =
  PropertiesForRent as React.ComponentType<{ initialData: any[] }>;

// ─────────────────────────────────────────────
// ✅ ULTRA-LIGHTWEIGHT GROQ QUERY
// ─────────────────────────────────────────────
const PROPERTIES_RENT_QUERY = defineQuery(`
  *[
    _type == "propertyForRent" &&
    !(_id in path('drafts.**'))
  ] | order(_createdAt desc)[0...40] {

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

    "location": {
      "lat": coordinates.lat,
      "lng": coordinates.lng
    },

    "image": images[0]{
      caption,
      "url": asset->url
    },

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
// CRITICAL: Force dynamic to avoid static gen timeout
// ─────────────────────────────────────────────
export const dynamic = 'force-dynamic';

// ─────────────────────────────────────────────
// Structured Data Component (separate to avoid blocking)
// ─────────────────────────────────────────────
function StructuredData({ propertyData }: { propertyData: any[] }) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}

// ─────────────────────────────────────────────
// Fallback loading state
// ─────────────────────────────────────────────
function PropertiesLoadingFallback() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-3/4 max-w-2xl"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2 max-w-lg"></div>
          </div>
          {/* Grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────
// Data fetcher with timeout protection
// ─────────────────────────────────────────────
async function fetchPropertiesWithTimeout(): Promise<any[]> {
  const FETCH_TIMEOUT_MS = 15000; // 15 second timeout

  const fetchPromise = client.fetch(PROPERTIES_RENT_QUERY, {}, {
    cache: 'no-store',
  });

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Sanity fetch timeout')), FETCH_TIMEOUT_MS)
  );

  try {
    const data = await Promise.race([fetchPromise, timeoutPromise]);
    return data || [];
  } catch (error) {
    console.error('[properties-for-rent] Fetch error:', error);
    return [];
  }
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default async function PropertiesForRentPage() {
  const propertyData = await fetchPropertiesWithTimeout();

  return (
    <>
      <StructuredData propertyData={propertyData} />
      <main className="bg-[#FAF9F6] min-h-screen">
        <PropertiesForRentComponent initialData={propertyData} />
      </main>
    </>
  );
}