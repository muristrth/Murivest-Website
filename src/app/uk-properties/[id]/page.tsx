import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'
import UKPropertyDetail from '@/components/UKPropertyDetail'

const UK_PROPERTY_QUERY = defineQuery(`*[_type == "ukProperty" && slug.current == $slug][0]{
  title,
  subtitle,
  location,
  city,
  region,
  postcode,
  type,
  status,
  price,
  yield,
  description,
  roi,
  "mainImageUrl": mainImage.asset->url,
  "images": images[].asset->url,
  features,
  sqft,
  details,
  investment,
  tenure,
  regulatory
}`)

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const property = await client.fetch(UK_PROPERTY_QUERY, { slug: resolvedParams.id });
  
  if (!property) {
    return {
      title: 'Property Not Found | Murivest Realty',
      description: 'The property you are looking for does not exist.',
    };
  }

  return {
    title: property.title ? `${property.title} | UK Property Details` : 'UK Property Details | Murivest Realty',
    description: property.subtitle || property.description || 'Premium UK commercial property investment details. View property specifications, yields, and investment potential.',
    keywords: `UK commercial property, ${property.city || ''} property, ${property.type || ''} investment, London office, UK real estate`,
  };
}

export default async function UKPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = await client.fetch(UK_PROPERTY_QUERY, { slug: resolvedParams.id });

  if (!property) {
    notFound();
  }

  return <UKPropertyDetail property={property} />;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "ukProperty" && defined(slug.current)]{ "id": slug.current }`);
  
  return slugs.map((item: { id: string }) => ({
    id: item.id,
  }));
}
