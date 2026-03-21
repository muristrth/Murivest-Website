import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'
import UKPropertyDetailClient from '@/components/UKPropertyDetailClient'

// ─── GROQ Query ───────────────────────────────────────────────────────────────
// Fetches every field from the ukProperty schema, including:
//  • mainImageUrl  → used as the first (hero) thumbnail
//  • images        → additional gallery images
//  • coordinates   → Mapbox pin
//  • brochureUrl   → PDF download
//  • agent         → agent card & drawer

const UK_PROPERTY_QUERY = defineQuery(`
  *[_type == "ukProperty" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    _id,
    title,
    subtitle,
    "slug": slug.current,
    location,
    city,
    region,
    postcode,
    type,
    status,
    price,
    priceGbp,
    yield,
    description,
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const property = await client.fetch(UK_PROPERTY_QUERY, { slug: id })

  if (!property) {
    return {
      title: 'Property Not Found | Murivest Realty',
      description: 'The property you are looking for does not exist.',
    }
  }

  return {
    title: property.title
      ? `${property.title} | UK Property Details | Murivest Realty`
      : 'UK Property Details | Murivest Realty',
    description:
      property.subtitle ||
      property.description ||
      'Premium UK commercial property investment. View full specifications, yields, and investment thesis.',
    keywords: [
      'UK commercial property',
      property.city ? `${property.city} property` : '',
      property.type ? `${property.type} investment` : '',
      'London office',
      'UK real estate',
      'Murivest Realty',
    ]
      .filter(Boolean)
      .join(', '),
    openGraph: {
      title: property.title || 'UK Property Details',
      description: property.subtitle || property.description || '',
      images: [property.mainImageUrl || '/kenya-night.png'],
    },
  }
}

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs: Array<{ id: string }> = await client.fetch(
    `*[_type == "ukProperty" && defined(slug.current) && !(_id in path('drafts.**'))]{
      "id": slug.current
    }`
  )

  return slugs.map(({ id }) => ({ id }))
}

// ─── ISR ──────────────────────────────────────────────────────────────────────

export const revalidate = 60

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function UKPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = await client.fetch(UK_PROPERTY_QUERY, { slug: id })

  if (!property) {
    notFound()
  }

  return <UKPropertyDetailClient property={property} />
}