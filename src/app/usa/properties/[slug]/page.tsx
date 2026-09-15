// ─── app/usa/properties/[slug]/page.tsx ─────────────────────────────────────

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PropertyClientView from "@/components/USAPropertyClientView";

import PropertySidebar, {
  type SidebarProperty,
} from "@/components/USAPropertysidebar";

// ─── SEO + Schema ────────────────────────────────────────────────────────────
import { generatePropertySchema } from "@/lib/schema/generatePropertySchema";
import { generateBreadcrumbSchema } from "@/lib/schema/generateBreadcrumbSchema";
import { generateFAQSchema } from "@/lib/schema/generateFAQSchema";

// ─── ISR ─────────────────────────────────────────────────────────────────────
export const revalidate = 3600;

// ─── Property Query ──────────────────────────────────────────────────────────
const PROPERTY_QUERY = defineQuery(`
  *[
    _type == "usProperty"
    && slug.current == $slug
    && !(_id in path("drafts.**"))
  ][0] {
    _id,

    title,
    subtitle,

    "slug": slug.current,

    location,
    city,
    state,
    zipCode,

    price,
    yield,
    sqft,

    assetType,
    type,
    status,
    listingType,

    description,
    roi,

    features,
    details,

    investment {
      monthlyIncome,
      annualIncome,
      appreciationRate,
      totalROI
    },

    regulatory,

    // Forward-compatible media (renders once populated in Sanity)
    "images": images[].asset->url,
    "brochureUrl": brochure.asset->url,

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
    _type == "usProperty"
    && !(_id in path("drafts.**"))
    && slug.current != $slug
    && coalesce(assetType, type, "residential") == $propertyType
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

    "propertyType": coalesce(assetType, type, "residential"),

    "coverImage": images[0].asset->url,

    description
  }
`);

// ─── Popular Properties ──────────────────────────────────────────────────────
const POPULAR_PROPERTIES_QUERY = defineQuery(`
  *[
    _type == "usProperty"
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

    "propertyType": coalesce(assetType, type, "residential")
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
      title: "Property Not Found | Murivest US",
      description: "This US property listing could not be found.",
    };
  }

  const seo = property.seo || {};

  const title =
    seo.metaTitle ||
    `${property.title} | US Multifamily Investment — Murivest`;

  const description =
    seo.metaDescription ||
    property.subtitle ||
    property.description?.slice(0, 160) ||
    "Institutional multifamily investment opportunity in the US commercial real estate market.";

  const image =
    seo.ogImage ||
    property.images?.[0] ||
    "https://murivest.com/og-default.webp";

  const canonical =
    seo.canonicalUrl ||
    `https://murivest.com/usa/properties/${property.slug}`;

  return {
    title,
    description,

    metadataBase: new URL("https://murivest.com"),

    alternates: {
      canonical,
    },

    keywords: seo.keywords || [
      property.title,
      property.city,
      `${property.city} multifamily investment`,
      property.propertyType,
      "US Commercial Real Estate",
      "Multifamily Property USA",
      "Murivest",
    ],

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Murivest US Properties",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: "en_US",
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
export default async function USAPropertyPage({
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
        property.assetType ||
        property.type ||
        "residential",
    }),

    client.fetch(POPULAR_PROPERTIES_QUERY, {
      slug
    }),
  ]);

  // ─── Transform Property ─────────────────────────────────────────────────
  const transformedProperty = {
    ...property,

    // usProperty records carry a string `location`; geopoint support retained
    // for future enrichment (coordinates field)
    location: property.coordinates
      ? {
          lat: property.coordinates.lat,
          lng: property.coordinates.lng,
        }
      : (typeof property.location === 'string' && property.location
          ? { area: property.location }
          : null),

    images: property.images || [],

    propertyType:
      property.assetType ||
      property.type ||
      "residential",
  };

  // ─── Sidebar ────────────────────────────────────────────────────────────
  const sidebar = (
    <PropertySidebar
      relatedProperties={(related || []) as SidebarProperty[]}
      popularProperties={(popular || []) as SidebarProperty[]}
      brokerEmail={
        "capital@murivest.co.ke"
      }
      brokerPhone={
        "+254 115 277 610"
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
        _type == "usProperty"
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