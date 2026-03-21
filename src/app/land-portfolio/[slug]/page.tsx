import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import LandClientView from "@/components/LandClientView";

const LAND_DETAIL_QUERY = defineQuery(`*[_type == "land" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  description,
  landCategory,
  availabilityStatus,

  // Location
  location,
  "coordinates": coordinates,
  "totalArea": totalArea,

  // Investment
  askingPrice,

  // Media
  "images": sitePhotographs[].asset->url,
  "brochureUrl": investmentMemorandum.asset->url,

  // Advisor
  advisor {
    name,
    title,
    email,
    phone,
    "photo": photo.asset->url
  },

  // Meta
  featured,
  listingDate
}`);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const land = await client.fetch(LAND_DETAIL_QUERY, { slug });
  
  if (!land) {
    return { title: 'Land Parcel Not Found | Murivest' };
  }

  return {
    title: `${land.title} | Land Investment Opportunity`,
    description: land.subtitle || land.description?.substring(0, 160),
  };
}

export default async function LandParcelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const land = await client.fetch(LAND_DETAIL_QUERY, { slug });

  if (!land) {
    notFound();
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <LandClientView land={land} />
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "land" && defined(slug.current)]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}