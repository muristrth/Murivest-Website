import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PropertyClientView from "@/components/PropertyClientView";
import PropertySidebar, { type SidebarProperty } from "@/components/Propertysidebar";

// ─── Queries ─────────────────────────────────────────────────────────────────

const PROPERTY_QUERY = defineQuery(`
  *[_type == "property" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
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
  }
`);

/**
 * Related properties — same asset class, different slug.
 * Falls back gracefully if propertyType is absent on older documents.
 */
const RELATED_PROPERTIES_QUERY = defineQuery(`
  *[
    _type == "property"
    && !(_id in path("drafts.**"))
    && slug.current != $slug
    && coalesce(propertyType, type, "Commercial") == $propertyType
  ] | order(_createdAt desc) [0...5] {
    _id,
    title,
    "slug": slug.current,
    price,
    "yield": yield,
    city,
    state,
    "propertyType": coalesce(propertyType, type, "Commercial"),
    "coverImage": images[0].asset->url,
    description
  }
`);

/**
 * Most viewed / popular listings.
 *
 * Sanity does NOT track page views natively. This query has two modes:
 *
 * MODE A (default) — ordered by _createdAt desc. Works with zero schema changes.
 *   Use this while you're starting out.
 *
 * MODE B — ordered by a `viewCount` integer field you add to your property schema:
 *   { name: "viewCount", type: "number", hidden: true }
 *   Then increment it server-side via a Sanity mutation on each property page visit.
 *   Uncomment the MODE B query below and comment out MODE A when ready.
 */

// MODE A — most recent (no schema change required)
const POPULAR_PROPERTIES_QUERY = defineQuery(`
  *[
    _type == "property"
    && !(_id in path("drafts.**"))
    && slug.current != $slug
  ] | order(_createdAt desc) [0...8] {
    _id,
    title,
    "slug": slug.current,
    price,
    "yield": yield,
    city,
    state,
    "propertyType": coalesce(propertyType, type, "Commercial"),
  }
`);

// MODE B — true view count (requires schema change + mutation on page visit)
// const POPULAR_PROPERTIES_QUERY = defineQuery(`
//   *[
//     _type == "property"
//     && !(_id in path("drafts.**"))
//     && slug.current != $slug
//     && defined(viewCount)
//   ] | order(viewCount desc) [0...8] {
//     _id,
//     title,
//     "slug": slug.current,
//     price,
//     "yield": yield,
//     city,
//     state,
//     "propertyType": coalesce(propertyType, type, "Commercial"),
//   }
// `);

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await client.fetch(PROPERTY_QUERY, { slug });

  if (!property) {
    return { title: "Property Not Found | Murivest" };
  }

  return {
    title: `${property.title} | Investment Opportunity`,
    description:
      property.subtitle ||
      property.description?.substring(0, 160) ||
      "Exclusive commercial real estate investment opportunity.",
    openGraph: {
      title: property.title,
      description: property.subtitle || "",
      images: property.images?.[0]
        ? [property.images[0]]
        : ["/og-default.jpg"],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch all three in parallel — no waterfall
  const [property, relatedRaw, popularRaw] = await Promise.all([
    client.fetch(PROPERTY_QUERY, { slug }),
    client.fetch(RELATED_PROPERTIES_QUERY, {
      slug,
      // Will be overridden once property is resolved; safe default until then.
      // The query falls back to "Commercial" via coalesce, so this still works.
      propertyType: "Commercial",
    }),
    client.fetch(POPULAR_PROPERTIES_QUERY, { slug }),
  ]);

  if (!property) notFound();

  // Re-fetch related with the correct propertyType now that we have the property
  const related: SidebarProperty[] = await client.fetch(
    RELATED_PROPERTIES_QUERY,
    {
      slug,
      propertyType: property.propertyType || property.type || "Commercial",
    }
  );

  const popular: SidebarProperty[] = popularRaw ?? [];

  const transformedProperty = {
    ...property,
    location: property.coordinates
      ? { lat: property.coordinates.lat, lng: property.coordinates.lng }
      : property.locationArea
      ? { area: property.locationArea }
      : null,
    images: property.images || [],
    propertyType: property.propertyType || property.type || "Commercial",
  };

  const sidebar = (
    <PropertySidebar
      relatedProperties={related}
      popularProperties={popular}
      brokerEmail={property.broker?.email ?? "capital@murivest.co.ke"}
      brokerPhone={property.broker?.phone ?? "+254 787 707 284"}
    />
  );
console.log('related:', related.length, 'popular:', popular.length);
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <PropertyClientView property={transformedProperty} />
    </main>
  );
}

// ─── Static params ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "property" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}