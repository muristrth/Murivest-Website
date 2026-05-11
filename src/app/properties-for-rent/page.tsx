import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import PropertiesForRent from '@/components/PropertiesForRent'

const PROPERTIES_RENT_QUERY = defineQuery(`*[_type == "propertyForRent" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  address,
  city,
  state,
  zipCode,
  rent,
  rentKsh,
  rentUsd,
  currency,
  squareFootage,
  leaseTerm,
  securityDeposit,
  serviceCharge,
  assetCategory,
  propertyType,
  status,
  availableFrom,
  furnished,
  parking,
  parkingSpaces,
  description,
  features,
  specifications,
  "location": select(
    defined(coordinates) => coordinates,
    {"lat": null, "lng": null}
  ),
  "image": images[0],
  "gallery": images,
  floorplan {
    "url": asset->url
  },
  virtualTour,
}`)

export const metadata: Metadata = {
  title: 'Commercial Properties For Rent | Murivest',
  description: 'Prime commercial properties available for lease across African markets. Retail shops, office spaces, industrial warehouses, and mixed-use developments.',
  openGraph: {
    title: 'Commercial Properties For Rent | Murivest',
    description: 'Prime commercial properties available for lease. Retail, office, industrial spaces in Nairobi, Mombasa, and beyond.',
    images: ['/og-properties-rent.jpg'],
  },
}

export const revalidate = 60

export default async function PropertiesForRentPage() {
  let propertyData
  try {
    propertyData = await client.fetch(PROPERTIES_RENT_QUERY)
  } catch (error) {
    console.error('Error fetching properties:', error)
    propertyData = []
  }
  
  return (
    <main className="bg-[#FAF9F6]">
      <PropertiesForRent initialData={propertyData} />
    </main>
  )
}