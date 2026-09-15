// ─── app/usa/properties/page.tsx ─────────────────────────────────────────────
// US Commercial Real Estate Portfolio — listing page (Sanity _type: "usProperty")

import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import USAProperties from '@/components/USAProperties'

// GROQ query — usProperty documents imported from the CBRE Deal Flow research set
const US_PROPERTIES_QUERY = defineQuery(`*[_type == "usProperty" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  location,
  city,
  state,
  zipCode,
  price,
  yield,
  sqft,
  assetType,
  type,
  status,
  listingType,
  "propertyType": coalesce(assetType, type, "residential"),
  description,
  features,
  details,
  investment,
  regulatory,
  // Forward-compatible: renders automatically once images are added in Sanity
  "image": images[0],
  "gallery": images,
  "brochureUrl": brochure.asset->url
}`);

export const metadata: Metadata = {
  title: 'US Commercial Real Estate Portfolio | Multifamily Investment Properties — Murivest',
  description: 'Institutional multifamily and residential investment properties across major US metro markets. Mandate-based advisory for private capital, family offices, and institutional investors.',
  keywords: [
    'US commercial real estate',
    'US multifamily investment properties',
    'apartment communities for sale USA',
    'institutional real estate advisory',
    'Murivest US platform',
  ],
  alternates: {
    canonical: 'https://murivest.com/usa/properties',
  },
  openGraph: {
    title: 'Murivest US Commercial Real Estate Portfolio',
    description: 'Mandate-based multifamily investment opportunities across US metro markets.',
    url: 'https://murivest.com/usa/properties',
    siteName: 'Murivest Group',
    images: ['/og-properties-usa.webp'],
    locale: 'en_US',
    type: 'website',
  },
}

export const revalidate = 60;

export default async function USAPropertiesPage() {
  const propertyData = await client.fetch(US_PROPERTIES_QUERY);

  return (
    <main className="bg-[#FAF9F6]">
      <USAProperties initialData={propertyData} />
    </main>
  )
}