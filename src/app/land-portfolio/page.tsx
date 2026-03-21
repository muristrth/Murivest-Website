import type { Metadata } from 'next'
import { client } from "@/sanity/lib/client"
import { defineQuery } from "next-sanity"
import LandBanking from '@/components/LandBanking'

const LAND_QUERY = defineQuery(`*[_type == "land" && availabilityStatus != "Sold" && !(_id in path('drafts.**'))] | order(featured desc, listingDate desc) {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  "squareFootage": totalArea.acres,
  "totalArea": totalArea,
  "location": {
    "lat": coordinates.lat,
    "lng": coordinates.lng,
    "area": location
  },
  landCategory,
  availabilityStatus,
  "price": askingPrice.displayPrice,
  "priceKsh": askingPrice.kes,
  "priceUsd": askingPrice.usd,
  description,
  "image": sitePhotographs[0],
  "brochureUrl": investmentMemorandum.asset->url,
  advisor {
    name,
    email,
    phone,
    "photo": photo.asset->url
  },
  featured,
  listingDate
}`);

export const metadata: Metadata = {
  title: 'Land Banking & Development Sites | Strategic Land Investment',
  description: 'Premium land banking opportunities in high-growth corridors. Strategic land assembly for institutional investors and developers.',
  openGraph: {
    title: 'Land Banking Portfolio | Murivest',
    description: 'Strategic land acquisition opportunities in prime African growth corridors.',
    images: ['/og-land-banking.jpg'],
  },
}

export const revalidate = 60;

export default async function LandBankingPage() {
  const landData = await client.fetch(LAND_QUERY);
  
  return (
    <main className="bg-[#FAF9F6]">
      <LandBanking initialData={landData} />
    </main>
  )
}