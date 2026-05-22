// app/ke-properties/for-rent/[slug]/page.tsx
// Server component that fetches data and renders the client view.

import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity/sanity-client";
import ToLetClientView from "@/components/Toletclientview";

// ─── Types ─────────────────────────────────────────────────────────────────

interface PropertyForRent {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  propertyType: string;
  category?: string;
  country: string;
  city: string;
  neighborhood: string;
  address?: string;
  price: { displayPrice: string; kes?: string; usd?: string };
  sizeRange: { min: number; max: number; unit: string };
  grade: string;
  images: string[];
  availabilityStatus: string;
  featured: boolean;
  listingDate: string;
  description?: string;
  features?: string[];
  details?: { label: string; value: string }[];
  floorPlans?: string[];
  brochureUrl?: string;
  availableFrom?: string;
  leaseTerm?: string;
  broker?: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
  };
  relatedProperties?: {
    _id: string;
    title: string;
    slug: string;
    city: string;
    neighborhood: string;
    propertyType: string;
    price: { displayPrice: string };
    images: string[];
    grade: string;
  }[];
}

// ─── Data Fetching ──────────────────────────────────────────────────────────

async function getProperty(slug: string): Promise<PropertyForRent | null> {
  const query = `*[_type == "property" && slug.current == $slug && transactionType == "To Let" && !(_id in path("drafts.**"))][0] {
    _id, title, subtitle, "slug": slug.current,
    propertyType, category, country, city, neighborhood, address,
    price { displayPrice, kes, usd },
    sizeRange { min, max, unit },
    grade,
    "images": images[].asset->url,
    availabilityStatus, featured, listingDate,
    description,
    features,
    details[] { label, value },
    "floorPlans": floorPlans[].asset->url,
    brochureUrl, availableFrom, leaseTerm,
    broker { name, email, phone, "photo": photo.asset->url },
    "relatedProperties": *[
      _type == "property" &&
      transactionType == "To Let" &&
      slug.current != $slug &&
      city == ^.city &&
      !(_id in path("drafts.**"))
    ] | order(featured desc) [0..2] {
      _id, title, "slug": slug.current, city, neighborhood, propertyType,
      price { displayPrice },
      "images": images[].asset->url,
      grade
    }
  }`;

  try {
    const data = await sanityClient.fetch(query, { slug });
    return data ?? null;
  } catch {
    return null;
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ToLetPropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = await getProperty(params.slug);
  if (!property) notFound();

  return <ToLetClientView property={property} />;
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const property = await getProperty(params.slug);
  if (!property) return {};
  return {
    title: `${property.title} | To Let | Murivest`,
    description:
      property.description?.slice(0, 160) ||
      `${property.propertyType} available to let in ${property.neighborhood}, ${property.city}. ${property.price?.displayPrice}.`,
  };
}