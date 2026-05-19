import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import PropertiesForRentClientView from '@/components/PropertiesForRentClientView';

// ─── GROQ Query ───────────────────────────────────────────────────────────────
// NOTE: The alias `"image"` maps images[0] to the field name the client
// component expects (`property.image`), resolving the field-name mismatch.
const PROPERTY_QUERY = defineQuery(`
  *[
    _type == "propertyForRent" &&
    slug.current == $slug &&
    !(_id in path('drafts.**'))
  ][0]{
    _id,
    _createdAt,

    title,
    "slug": slug.current,
    description,

    assetCategory,
    propertyType,
    status,

    address,
    city,
    state,

    rent,
    rentKsh,
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
      asset->{ _id, url }
    },

    "gallery": images[]{
      asset->{ _id, url }
    }
  }
`);

// ─── Data fetcher ─────────────────────────────────────────────────────────────
async function getProperty(slug: string) {
  return client.fetch(PROPERTY_QUERY, { slug });
}
export const dynamic = 'force-dynamic';
// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  // ✅ Next.js 15: params is a Promise — must be awaited
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    return { title: 'Property Not Found | Murivest' };
  }

  const url = `https://murivest.co.ke/properties-for-rent/${property.slug}`;
  const image = property.image?.asset?.url ?? undefined;

  const title = `${property.title} | ${property.city} Commercial Property For Rent | Murivest`;

  const description =
    `${property.assetCategory} for rent in ${property.city}, ${property.state}. ` +
    `${property.squareFootage ? property.squareFootage + ' available at ' : ''}${property.rent ?? 'Price on application'}. ` +
    `Find shops, offices and commercial space in ${property.city}.`;

  return {
    title,
    description,

    keywords: [
      property.title,
      `${property.city} shops to let`,
      `${property.city} office space`,
      `${property.assetCategory} for rent`,
      `commercial property ${property.city}`,
      `${property.city} real estate`,
      'Kenya commercial property',
      'shops to let Kenya',
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: 'Murivest',
      type: 'website',
      ...(image && {
        images: [{ url: image, width: 1200, height: 630, alt: property.title }],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image] }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// ─── ISR revalidation ─────────────────────────────────────────────────────────
export const revalidate = 60;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function PropertyPage({
  params,
}: {
  // ✅ Next.js 15: params is a Promise — must be awaited
  params: Promise<{ slug: string }>;
}) {
  // ✅ THE FIX: await params before accessing slug
  const { slug } = await params;

  const property = await getProperty(slug);

  if (!property) notFound();

  const baseUrl = 'https://murivest.co.ke';
  const url = `${baseUrl}/properties-for-rent/${property.slug}`;
  const cityUrl = `${baseUrl}/properties-for-rent?city=${encodeURIComponent(property.city ?? '')}`;
  const categoryUrl = `${baseUrl}/properties-for-rent?category=${encodeURIComponent(property.assetCategory ?? '')}`;

  const image = property.image?.asset?.url;

  // ── WhatsApp deep-link ────────────────────────────────────────────────────
  const whatsappMessage = encodeURIComponent(
    `Hello Murivest, I'm interested in ${property.title} located at ${
      [property.address, property.city].filter(Boolean).join(', ')
    }. Is it still available?`
  );
  const whatsappUrl = `https://wa.me/254787707284?text=${whatsappMessage}`;

  // ── Structured Data ───────────────────────────────────────────────────────
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        url,
        datePosted: property._createdAt,
        ...(image && { image }),

        offers: {
          '@type': 'Offer',
          price: property.rentKsh ?? 0,
          priceCurrency: property.currency ?? 'KES',
          availability:
            property.status === 'Available'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/LimitedAvailability',
          url,
        },

        address: {
          '@type': 'PostalAddress',
          streetAddress: property.address,
          addressLocality: property.city,
          addressRegion: property.state,
          addressCountry: 'KE',
        },
      },

      {
        '@type': 'WebPage',
        name: property.title,
        url,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Properties For Rent',
              item: `${baseUrl}/properties-for-rent`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: property.city,
              item: cityUrl,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: property.title,
              item: url,
            },
          ],
        },
      },

      {
        '@type': 'Organization',
        name: 'Murivest',
        url: baseUrl,
      },
    ],
  };

  return (
    <>
      {/*
        ✅ Raw lowercase <script> is correct for JSON-LD in Server Components.
           Next.js <Script> is for external/third-party scripts only and will
           trigger the "Scripts inside React components" console warning.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAF9F6] min-h-screen">

        {/* ── BREADCRUMB + INTERNAL SEO LINKS ── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-6xl mx-auto px-6 pt-6 text-sm flex gap-4 flex-wrap text-[#8B8680]"
        >
          <Link
            href="/properties-for-rent"
            className="text-[#1B4332] hover:underline"
          >
            All Properties
          </Link>

          {property.city && (
            <>
              <span aria-hidden="true">/</span>
              <Link
                href={cityUrl}
                className="text-[#1B4332] hover:underline"
              >
                {property.city}
              </Link>
            </>
          )}

          {property.assetCategory && (
            <>
              <span aria-hidden="true">/</span>
              <Link
                href={categoryUrl}
                className="text-[#1B4332] hover:underline"
              >
                {property.assetCategory}
              </Link>
            </>
          )}

          <span aria-hidden="true">/</span>
          <span className="text-[#2C2C2C] truncate max-w-[200px]">
            {property.title}
          </span>
        </nav>

        {/* ── PROPERTY DETAIL VIEW ── */}
        <PropertiesForRentClientView property={property} />

        {/* ── FLOATING WHATSAPP CTA ── */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact agent on WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium hover:bg-[#1ebe5d] transition-colors flex items-center gap-2"
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Agent
        </a>
      </main>
    </>
  );
}