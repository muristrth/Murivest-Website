import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import UKProperties from '../../components/UKProperties'

// GROQ query for UK properties
const UK_PROPERTIES_QUERY = defineQuery(`*[_type == "ukProperty" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  location,
  city,
  region,
  postcode,
  type,
  description,
  yield,
  features,
  "mainImage": mainImage.asset->url,
  "images": images[].asset->url
}`);

export const metadata: Metadata = {
  title: 'UK Commercial Properties | London Office Buildings | Murivest Realty',
  description: 'Premium UK commercial property investments. London office buildings, regional retail centers, and hospitality assets with institutional-grade returns for international investors.',
  keywords: 'UK commercial properties, London office buildings, UK property investment, British real estate, London commercial property, UK retail investment',
  openGraph: {
    title: 'UK Commercial Properties | London Office Buildings',
    description: 'Premium UK commercial property investments with institutional-grade returns.',
    images: ['/kenya-night.png'],
  },
}

// Enable ISR: This refreshes the page in the background when Sanity data changes
export const revalidate = 60; 

export default async function UKPropertiesPage() {
  // Fetch data from Sanity on the server
  const propertyData = await client.fetch(UK_PROPERTIES_QUERY);

  // Pass the clean data into your existing component
  return <UKProperties properties={propertyData} />
}
