// ─── app/properties/[slug]/page.tsx ──────────────────────────────────────────

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PropertyClientView from "@/components/PropertyClientView";

import PropertySidebar, {
  type SidebarProperty,
} from "@/components/Propertysidebar";

// ─── SEO + Schema ────────────────────────────────────────────────────────────
import { generatePropertySchema } from "@/lib/schema/generatePropertySchema";
import { generateBreadcrumbSchema } from "@/lib/schema/generateBreadcrumbSchema";
import { generateFAQSchema } from "@/lib/schema/generateFAQSchema";

// ─── ISR ─────────────────────────────────────────────────────────────────────
export const revalidate = 3600;

// ─── Property Query ──────────────────────────────────────────────────────────
const PROPERTY_QUERY = defineQuery(`
  *[
    _type == "property"
    && slug.current == $slug
    && !(_id in path("drafts.**"))
  ][0] {
    _id,

    title,
    subtitle,

    "slug": slug.current,

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
    amenities,
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
    },

    seo,
    faqs,

    publishedAt,
    updatedAt,

    analystSummary
  }
`);

// ─── Related Properties ──────────────────────────────────────────────────────
const RELATED_PROPERTIES_QUERY = defineQuery(`
  *[
    _type == "property"
    && !(_id in path("drafts.**"))
    && slug.current != $slug
    && coalesce(propertyType, type, "Commercial") == $propertyType
  ]
  | order(_createdAt desc)
  [0...5] {

    _id,

    title,

    "slug": slug.current,

    price,
    yield,

    city,
    state,

    "propertyType": coalesce(propertyType, type, "Commercial"),

    "coverImage": images[0].asset->url,

    description
  }
`);

// ─── Popular Properties ──────────────────────────────────────────────────────
const POPULAR_PROPERTIES_QUERY = defineQuery(`
  *[
    _type == "property"
    && !(_id in path("drafts.**"))
    && slug.current != $slug
  ]
  | order(_createdAt desc)
  [0...8] {

    _id,

    title,

    "slug": slug.current,

    price,
    yield,

    city,
    state,

    "propertyType": coalesce(propertyType, type, "Commercial")
  }
`);

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const property = await client.fetch(PROPERTY_QUERY, {
    slug,
  });

  if (!property) {
    return {
      title: "Property Not Found | Murivest",
      description: "This property listing could not be found.",
    };
  }

  const seo = property.seo || {};

  const title =
    seo.metaTitle ||
    `${property.title} | Murivest Properties`;

  const description =
    seo.metaDescription ||
    property.subtitle ||
    property.description?.slice(0, 160) ||
    "Premium commercial real estate investment opportunity in Kenya.";

  const image =
    seo.ogImage ||
    property.images?.[0] ||
    "https://murivest.co.ke/og-default.jpg";

  const canonical =
    seo.canonicalUrl ||
    `https://murivest.co.ke/properties/${property.slug}`;

  return {
    title,
    description,

    metadataBase: new URL("https://murivest.co.ke"),

    alternates: {
      canonical,
    },

    keywords: seo.keywords || [
      property.title,
      property.city,
      property.propertyType,
      "Commercial Property Kenya",
      "Murivest",
    ],

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Murivest Properties",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

  const property = await client.fetch(PROPERTY_QUERY, {
    slug,
  });

  if (!property) {
    notFound();
  }

  // ─── Related + Popular ──────────────────────────────────────────────────
  const [related, popular] = await Promise.all([
    client.fetch(RELATED_PROPERTIES_QUERY, {
      slug,
      propertyType:
        property.propertyType ||
        property.type ||
        "Commercial",
    }),

    client.fetch(POPULAR_PROPERTIES_QUERY, {
      slug
    }),
  ]);

  // ─── Transform Property ─────────────────────────────────────────────────
  const transformedProperty = {
    ...property,

    location: property.coordinates
      ? {
          lat: property.coordinates.lat,
          lng: property.coordinates.lng,
        }
      : null,

    images: property.images || [],

    propertyType:
      property.propertyType ||
      property.type ||
      "Commercial",
  };

  // ─── Sidebar ────────────────────────────────────────────────────────────
  const sidebar = (
    <PropertySidebar
      relatedProperties={(related || []) as SidebarProperty[]}
      popularProperties={(popular || []) as SidebarProperty[]}
      brokerEmail={
        property.broker?.email ||
        "capital@murivest.co.ke"
      }
      brokerPhone={
        property.broker?.phone ||
        "+254 787 707 284"
      }
    />
  );

  // ─── Schemas ────────────────────────────────────────────────────────────
  const propertySchema =
    generatePropertySchema(transformedProperty);

  const breadcrumbSchema =
    generateBreadcrumbSchema(transformedProperty);

  const faqSchema =
    property.faqs?.length
      ? generateFAQSchema(property.faqs)
      : null;

  return (
    <>
      {/* ─── JSON-LD ───────────────────────────────────────────── */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertySchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* ─── Hero Image Preload ──────────────────────────────── */}

      {transformedProperty.images?.[0] && (
        <link
          rel="preload"
          as="image"
          href={transformedProperty.images[0]}
        />
      )}

      {/* ─── Main Layout ─────────────────────────────────────── */}

      <main
        className="bg-[#FAF9F6] min-h-screen"
        itemScope
        itemType="https://schema.org/RealEstateListing"
      >
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <PropertyClientView
              property={transformedProperty}
            />
          </div>

          <aside className="lg:w-96 w-full">
            {sidebar}
          </aside>
        </div>
      </main>
    </>
  );
}

// ─── Static Params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `
      *[
        _type == "property"
        && defined(slug.current)
      ]{
        "slug": slug.current
      }
    `
  );

  return slugs.map(
    (item: { slug: string }) => ({
      slug: item.slug,
    })
  );
}