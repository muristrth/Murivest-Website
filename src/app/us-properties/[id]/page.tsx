import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import USPropertyDetail from '@/components/USPropertyDetail'

const US_PROPERTY_QUERY = defineQuery(`*[_type == "usProperty" && slug.current == $slug][0]{
  title,
  subtitle,
  location,
  city,
  state,
  zipCode,
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
  regulatory
}`)

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const property = await client.fetch(US_PROPERTY_QUERY, { slug: resolvedParams.id });
  
  if (!property) {
    return {
      title: 'Property Not Found | Murivest Realty',
      description: 'The property you are looking for does not exist.',
    };
  }

  return {
    title: property.title ? `${property.title} | US Property Details` : 'US Property Details | Murivest Realty',
    description: property.subtitle || property.description || 'Premium US commercial property investment details. View property specifications, yields, and investment potential.',
    keywords: `US commercial property, ${property.city || ''} ${property.state || ''} property, ${property.type || ''} investment, New York office, Miami hotel, Chicago industrial`,
  };
}

export default async function USPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = await client.fetch(US_PROPERTY_QUERY, { slug: resolvedParams.id });

  if (!property) {
    return {
      metadata: { title: 'Property Not Found' },
    };
  }

  return <USPropertyDetail property={property} />;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "usProperty" && defined(slug.current)]{ "id": slug.current }`);
  
  return slugs.map((item: { id: string }) => ({
    id: item.id,
  }));
}
