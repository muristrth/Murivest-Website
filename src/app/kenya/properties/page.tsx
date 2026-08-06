import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import Properties from '@/components/Properties'

// Updated GROQ query with coalesce for legacy field support
const PROPERTIES_QUERY = defineQuery(`*[_type == "property" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  address,
  city,
  state,
  zipCode,
  price,
  priceKsh,
  priceUsd,
  priceGbp,
  priceEur,
  squareFootage,
  // Coalesce: use propertyType if exists, fall back to type (legacy)
  "propertyType": coalesce(propertyType, type, "Commercial"),
  listingType,
  occupancyRate,
  yield,
  description,
  features,
  details,
  investment,
  // Coalesce for location: coordinates (geopoint) is preferred, but handle legacy
  "location": select(
    defined(coordinates) => coordinates,
    defined(location) => {"lat": null, "lng": null, "area": location},
    {"lat": null, "lng": null}
  ),
  "image": images[0],
  "gallery": images,
  "brochureUrl": brochure.asset->url,
  broker {
    name,
    email,
    phone,
    "photo": photo.asset->url
  }
}`);

export const metadata: Metadata = {
  title: 'Institutional Real Estate Portfolio | Murivest',
  description: 'Exclusive mandate-only commercial properties across African markets. Curated for UHNWI and institutional investors.',
  openGraph: {
    title: 'Murivest Real Estate Portfolio',
    description: 'Private placement opportunities in prime African commercial assets.',
    images: ['/og-properties.webp'],
  },
}

export const revalidate = 60;

export default async function PropertiesPage() {
  const propertyData = await client.fetch(PROPERTIES_QUERY);
  
  return (
    <main className="bg-[#FAF9F6]">
      <Properties initialData={propertyData} />
    </main>
  )
}