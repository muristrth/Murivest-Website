// ─── lib/seo/generatePropertyMetadata.ts ─────────────────────────────────────
import type { Metadata } from 'next';
import type { Property } from '@/types/property';

const BASE_URL = 'https://murivest.co.ke';

export function generatePropertyMetadata(property: Property): Metadata {
  const canonicalUrl =
    property.seo?.canonicalUrl ??
    `${BASE_URL}/properties/${property.slug}`;

  const title =
    property.seo?.metaTitle ??
    `${property.title} | Murivest Properties`;

  const description =
    property.seo?.metaDescription ??
    property.description.slice(0, 160);

  const ogImage =
    property.seo?.ogImage ??
    property.images?.[0] ??
    `${BASE_URL}/og-default.webp`;

  const keywords = property.seo?.keywords ?? [
    property.title,
    property.city,
    property.state,
    property.propertyType ?? '',
    property.listingType ?? '',
    'commercial real estate Kenya',
    'property investment Nairobi',
    'Murivest Properties',
  ].filter(Boolean);

  return {
    title,
    description,
    keywords: keywords.join(', '),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: property.status !== 'sold' && property.status !== 'leased',
      follow: true,
      googleBot: {
        index: property.status !== 'sold' && property.status !== 'leased',
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description,
      siteName: 'Murivest Properties',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: 'en_KE',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: '@murivest',
      creator: '@murivest',
    },

    other: {
      'geo.region': `KE-${property.state ?? ''}`,
      'geo.placename': property.city ?? 'Nairobi',
      ...(property.location
        ? {
            'geo.position': `${property.location.lat};${property.location.lng}`,
            ICBM: `${property.location.lat}, ${property.location.lng}`,
          }
        : {}),
    },
  };
}