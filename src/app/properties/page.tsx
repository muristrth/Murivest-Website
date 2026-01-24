import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import KEProperties from '../../components/Properties'

// 1. Define the GROQ query to "Shape" the data for your component
const PROPERTIES_QUERY = defineQuery(`*[_type == "property" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  location,
  type,
  description,
  yield,
  features,
  "mainImage": images[0].asset->url
}`);

export const metadata: Metadata = {
  title: 'Global Investment Properties - Commercial Real Estate Portfolio',
  description: 'Explore our exclusive portfolio of premium commercial properties across Africa, Asia-Pacific, Europe, and the Americas.',
  openGraph: {
    title: 'Global Investment Properties',
    images: ['/image.png'],
  },
}

// 2. Enable ISR: This refreshes the page in the background when Sanity data changes
export const revalidate = 60; 

export default async function PropertiesPage() {
  // 3. Fetch data from Sanity on the server
  const propertyData = await client.fetch(PROPERTIES_QUERY);

  // 4. Pass the clean data into your existing component
  return (
    <main>
      <KEProperties data={propertyData} />
    </main>
  )
}