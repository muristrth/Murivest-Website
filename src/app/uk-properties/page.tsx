import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import UKPropertiesClient from '../../components/UKPropertiesClient'

// ─── GROQ Query ───────────────────────────────────────────────────────────────
// All published UK properties, ordered newest-first.
// mainImageUrl is resolved from the Sanity image reference so it arrives
// as a ready-to-use URL for Next.js <Image />.

const UK_PROPERTIES_QUERY = defineQuery(`
  *[_type == "ukProperty" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    price,
    priceGbp,
    location,
    city,
    region,
    postcode,
    type,
    status,
    description,
    yield,
    roi,
    "mainImageUrl": mainImage.asset->url,
    "images": images[].asset->url,
    "brochureUrl": brochure.asset->url,
    features,
    sqft,
    details,
    investment,
    tenure,
    regulatory,
    coordinates,
    agent->{
      name,
      title,
      phone,
      email,
      "photoUrl": photo.asset->url
    }
  }
`)

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'UK Commercial Properties | London Office Buildings | Murivest Realty',
  description:
    'Premium UK commercial property investments. London office buildings, regional retail centres, and hospitality assets with institutional-grade returns for international investors.',
  keywords:
    'UK commercial properties, London office buildings, UK property investment, British real estate, London commercial property, UK retail investment',
  openGraph: {
    title: 'UK Commercial Properties | London Office Buildings',
    description:
      'Premium UK commercial property investments with institutional-grade returns.',
    images: ['/kenya-night.webp'],
  },
}

// ─── ISR ──────────────────────────────────────────────────────────────────────

export const revalidate = 60

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function UKPropertiesPage() {
  const propertyData = await client.fetch(UK_PROPERTIES_QUERY)

  return <UKPropertiesClient properties={propertyData} />
}