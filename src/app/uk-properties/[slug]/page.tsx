import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'
import UKPropertyDetailClient from '@/components/UKPropertyDetailClient'

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

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>  // ← Next.js 15: params is a Promise
}): Promise<Metadata> {
  const { slug } = await params       // ← MUST await

  const property = await client.fetch(UK_PROPERTY_QUERY, { slug })

  if (!property) {
    return {
      title: 'Property Not Found | Murivest Group',
      description: 'This property does not exist.',
    }
  }

  return {
    title: `${property.title} | UK Property | Murivest Group`,
    description: property.subtitle || property.description || '',
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.mainImageUrl ? [property.mainImageUrl] : [],
    },
  }
}

// ─────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(`
    *[_type == "ukProperty" && defined(slug.current) && !(_id in path('drafts.**'))]
    { "slug": slug.current }
  `)

  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

// ─────────────────────────────────────────────
// ISR
// ─────────────────────────────────────────────

export const revalidate = 60

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default async function UKPropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>  // ← Next.js 15: params is a Promise
}) {
  const { slug } = await params       // ← MUST await

  const property = await client.fetch(UK_PROPERTY_QUERY, { slug })

  if (!property) {
    notFound()
  }

  return <UKPropertyDetailClient property={property} />
}