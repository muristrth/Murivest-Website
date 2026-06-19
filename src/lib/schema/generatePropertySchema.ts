// ─── lib/schema/generatePropertySchema.ts ────────────────────────────────────
import type { Property } from '@/types/property';

const BASE_URL = 'https://murivest.com';

function availabilityUrl(status?: Property['status']): string {
  if (!status || status === 'available') return 'https://schema.org/InStock';
  return 'https://schema.org/SoldOut';
}

export function generatePropertySchema(property: Property): Record<string, unknown> {
  const pageUrl =
    property.seo?.canonicalUrl ??
    `${BASE_URL}/properties/${property.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',

    name: property.title,
    description: property.description,
    url: pageUrl,

    image: property.images,

    datePosted: property.publishedAt,
    dateModified: property.updatedAt,

    offers: {
      '@type': 'Offer',
      price: property.priceKsh?.replace(/[^0-9.]/g, '') ?? '',
      priceCurrency: 'KES',
      availability: availabilityUrl(property.status),
      url: pageUrl,
    },

    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zipCode ?? '',
      addressCountry: property.country ?? 'KE',
    },

    ...(property.location
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: property.location.lat,
            longitude: property.location.lng,
          },
        }
      : {}),

    ...(property.squareFootage
      ? {
          floorSize: {
            '@type': 'QuantitativeValue',
            value: parseFloat(property.squareFootage.replace(/[^0-9.]/g, '')) || property.squareFootage,
            unitCode: 'MTK',
          },
        }
      : {}),

    ...(property.yearBuilt
      ? { yearBuilt: property.yearBuilt }
      : {}),

    ...(property.broker
      ? {
          broker: {
            '@type': 'RealEstateAgent',
            name: property.broker.name,
            telephone: property.broker.phone,
            email: property.broker.email,
            ...(property.broker.company
              ? { worksFor: { '@type': 'Organization', name: property.broker.company } }
              : {}),
          },
        }
      : {}),

    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Ltd',
      url: BASE_URL,
      logo: `${BASE_URL}/murivest-logo.webp`,
    },
  };
}