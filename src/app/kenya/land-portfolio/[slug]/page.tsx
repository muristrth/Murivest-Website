import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LandClientView from "@/components/LandClientView";

const LAND_DETAIL_QUERY = defineQuery(`
  *[
    _type == "land" &&
    slug.current == $slug &&
    !(_id in path("drafts.**"))
  ][0]{
    _id,
    title,
    "slug": slug.current,
    subtitle,

    // Content
    executiveSummary,
    investmentThesis,
    description,

    // Classification
    landCategory,
    availabilityStatus,

    // Location
    location {
      area,
      neighborhood
    },

    "coordinates": {
      "lat": coordinates.lat,
      "lng": coordinates.lng
    },

    "totalArea": {
      "acres": totalArea.acres,
      "squareMeters": totalArea.squareMeters
    },

    // Pricing
    "askingPrice": {
      "kes": askingPrice.kes,
      "usd": askingPrice.usd,
      "displayPrice": askingPrice.displayPrice
    },

    // Media
    "images": sitePhotographs[]{
      "url": asset->url
    },

    "brochureUrl": investmentMemorandum.asset->url,

    // Advisor
    advisor {
      name,
      title,
      email,
      phone,
      "photo": photo.asset->url
    },

    // SEO
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      secondaryKeywords
    },

    // Meta
    featured,
    listingDate
  }
`);

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const land = await client.fetch(LAND_DETAIL_QUERY, { slug });

  if (!land) {
    return {
      title: "Land Parcel Not Found | Murivest",
    };
  }

  return {
    title:
      land?.seo?.metaTitle ||
      `${land.title} | Land Investment Opportunity | Murivest`,

    description:
      land?.seo?.metaDescription ||
      land.subtitle ||
      land.executiveSummary?.slice(0, 160),

    openGraph: {
      title:
        land?.seo?.metaTitle ||
        land.title,

      description:
        land?.seo?.metaDescription ||
        land.subtitle,

      images:
        land.images?.length > 0
          ? [land.images[0].url]
          : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[
      _type == "land" &&
      defined(slug.current)
    ]{
      "slug": slug.current
    }
  `);

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export default async function LandParcelPage(
  { params }: { params: Promise<{ slug: string }> }
) {

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