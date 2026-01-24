import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import PropertyClientView from "../../../components/PropertyClientView";

// 1. Updated GROQ Query
const PROPERTY_QUERY = defineQuery(`*[_type == "property" && slug.current == $slug][0]{
  title,
  subtitle,
  location,
  type,
  price,
  priceKsh,
  priceGbp,
  priceUsd,
  priceEur,
  yield,
  "images": images[].asset->url,
  features,
  occupancyRate,
  description,
  details,
  investment
}`);

// 2. Metadata: Changed 'id' to 'slug' to match the folder name [slug]
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch(PROPERTY_QUERY, { slug });
  
  if (!property) return { title: 'Property Not Found' };

  return {
    title: `${property.title} | Investment Portfolio`,
    description: property.subtitle || property.description?.substring(0, 160) || '',
  };
}

// 3. Main Page: Changed 'id' to 'slug'
export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch data from Sanity using the correct variable
  const propertyData = await client.fetch(PROPERTY_QUERY, { slug });

  if (!propertyData) {
    notFound();
  }

  return <PropertyClientView property={propertyData} />;
}

// 4. Static Params: Mapping to 'slug' to match the folder name
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "property" && defined(slug.current)]{ "slug": slug.current }`);
  
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug, // Must be 'slug' because the folder is [slug]
  }));
}