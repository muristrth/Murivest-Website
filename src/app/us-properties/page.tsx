import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import USProperties from '../../components/USProperties'

// GROQ query for US properties
const US_PROPERTIES_QUERY = defineQuery(`*[_type == "usProperty" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  location,
  city,
  state,
  type,
  description,
  yield,
  features,
  "mainImage": mainImage.asset->url,
  "images": images[].asset->url
}`);

export const metadata: Metadata = {
  title: 'US Commercial Properties | New York, Austin, Miami | Murivest Realty',
  description: 'Premium US commercial property investments. New York office buildings, Austin tech campuses, and Miami hotels with institutional-grade returns.',
  keywords: 'US commercial properties, New York office buildings, US property investment, American real estate, Miami hotels, Austin commercial property',
  openGraph: {
    title: 'US Commercial Properties | Institutional Grade',
    description: 'Premium US commercial property investments with institutional-grade returns.',
    images: ['/kenya-night.webp'],
  },
}

// Enable ISR: This refreshes the page in the background when Sanity data changes
export const revalidate = 60; 

export default async function USPropertiesPage() {
  // Fetch data from Sanity on the server
  const propertyData = await client.fetch(US_PROPERTIES_QUERY);

  // Pass the clean data into your existing component
  return <USProperties properties={propertyData} />
}
