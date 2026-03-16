import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PropertyClientView from "@/components/PropertyClientView";

// Comprehensive query with legacy field support
const PROPERTY_QUERY = defineQuery(`*[_type == "property" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  subtitle,
  address,
  city,
  state,
  zipCode,
  price,
  priceKsh,
  priceUsd,
  priceGbp,
  priceEur,
  squareFootage,
  // Handle both new and legacy type fields
  "propertyType": coalesce(propertyType, type, "Commercial"),
  "type": coalesce(type, propertyType, "Commercial"),
  listingType,
  occupancyRate,
  yield,
  description,
  features,
  details,
  investment {
    monthlyIncome,
    annualIncome,
    appreciationRate,
    totalROI
  },
  // Handle both coordinates (geopoint) and legacy location string
  "coordinates": coordinates,
  "locationArea": location,
  "images": images[].asset->url,
  "brochureUrl": brochure.asset->url,
  "businessCaseUrl": businessCase.asset->url,
  broker {
    name,
    email,
    phone,
    "photo": photo.asset->url
  }
}`);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await client.fetch(PROPERTY_QUERY, { slug });
  
  if (!property) {
    return {
      title: 'Property Not Found | Murivest',
    };
  }

  return {
    title: `${property.title} | Investment Opportunity`,
    description: property.subtitle || property.description?.substring(0, 160) || 'Exclusive commercial real estate investment opportunity.',
    openGraph: {
      title: property.title,
      description: property.subtitle || '',
      images: property.images?.[0] ? [property.images[0]] : ['/og-default.jpg'],
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch(PROPERTY_QUERY, { slug });

  if (!property) {
    notFound();
  }

  // Transform to match PropertyClientView expected shape
  const transformedProperty = {
    ...property,
    // Build location object from coordinates or use area
    location: property.coordinates ? {
      lat: property.coordinates.lat,
      lng: property.coordinates.lng,
    } : (property.locationArea ? { area: property.locationArea } : null),
    images: property.images || [],
    // Ensure type compatibility
    propertyType: property.propertyType || property.type || 'Commercial',
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <PropertyClientView property={transformedProperty} />
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "property" && defined(slug.current)]{ "slug": slug.current }`);
  
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}