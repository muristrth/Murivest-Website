// app/ke-properties/off-market/[slug]/page.tsx
// Server component — data fetching, metadata, and schema for off-market detail view.

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/sanity-client";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/sanity/utils";
import OffMarketClientView from "@/components/Offmarketclientview";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface OffMarketProperty {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  propertyType: string;
  category: string;
  transactionType: string;
  availabilityStatus: string;
  country: string;
  city: string;
  neighborhood: string;
  address: string;
  coordinates?: { lat: number; lng: number };
  price: { displayPrice: string; kes?: string; usd?: string };
  sizeRange: { min: number; max: number; unit: string };
  images?: string[];
  brochureUrl?: string;
  features: string[];
  grade: string;
  yearBuilt?: number;
  advisor: { name: string; title?: string; email: string; phone: string; photo?: string };
  featured?: boolean;
  listingDate?: string;
  // Investment fields
  investmentAngle?: string;
  neighborhoodAnalysis?: string;
  infrastructureDetails?: string;
  appreciationPotential?: string;
  nearbyLandmarks?: string[];
  zoning?: string;
  utilities?: string[];
  planningApprovals?: string[];
  environmentalAssessment?: string;
  // Deal-specific
  details?: { label: string; value: string }[];
  investment?: {
    monthlyIncome?: string;
    annualIncome?: string;
    appreciationRate?: string;
    totalROI?: string;
    yield?: string;
  };
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  // Related
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

// ─── Static Params ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await sanityClient.fetch(
      `*[_type == "property" && transactionType == "Off Market" && defined(slug.current) && !(_id in path("drafts.**"))].slug.current`
    );
    return slugs.map((slug: string) => ({ slug }));
  } catch {
    return [];
  }
}

// ─── Data Fetching ─────────────────────────────────────────────────────────

async function getProperty(slug: string): Promise<OffMarketProperty | null> {
  try {
    const property = await sanityClient.fetch(
      `*[_type == "property" && slug.current == $slug && transactionType == "Off Market" && !(_id in path("drafts.**"))][0] {
        _id, title, "slug": slug.current, subtitle, description,
        propertyType, category, transactionType, availabilityStatus,
        country, city, neighborhood, address,
        "coordinates": { "lat": coordinates.lat, "lng": coordinates.lng },
        price { displayPrice, kes, usd },
        sizeRange { min, max, unit },
        "images": images[].asset->url,
        "brochureUrl": brochure.asset->url,
        features, grade, yearBuilt,
        advisor { name, title, email, phone, "photo": photo.asset->url },
        featured, listingDate,
        details[] { label, value },
        investment { monthlyIncome, annualIncome, appreciationRate, totalROI, yield },
        investmentAngle, neighborhoodAnalysis, infrastructureDetails,
        appreciationPotential, nearbyLandmarks,
        zoning, utilities, planningApprovals, environmentalAssessment,
        "seoTitle": seo.metaTitle,
        "seoDescription": seo.metaDescription,
        "focusKeyword": seo.focusKeyword,
        "secondaryKeywords": seo.secondaryKeywords,
        "relatedProperties": *[
          _type == "property" &&
          transactionType == "Off Market" &&
          slug.current != $slug &&
          city == ^.city &&
          !(_id in path("drafts.**"))
        ] | order(featured desc) [0..2] {
          _id, title, "slug": slug.current, city, neighborhood, propertyType,
          price { displayPrice },
          "images": images[].asset->url,
          grade
        }
      }`,
      { slug }
    );
    return property || null;
  } catch (error) {
    console.error(`Error fetching off-market property ${slug}:`, error);
    return null;
  }
}

// ─── SEO Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = await getProperty(params.slug);

  if (!property) {
    return {
      title: "Property Not Found | Murivest",
      robots: { index: false, follow: false },
    };
  }

  const focusKeyword =
    property.focusKeyword ||
    `${property.propertyType.toLowerCase()} for sale ${property.city || "Kenya"} 2026`;
  const metaTitle =
    property.seoTitle ||
    `${property.title} | ${property.propertyType} Off-Market ${property.city || ""} | Murivest`;
  const metaDescription =
    property.seoDescription ||
    `Off-market investment: ${property.title} — ${property.propertyType.toLowerCase()} in ${property.city || "Kenya"}. ${property.sizeRange.max.toLocaleString()} ${property.sizeRange.unit}. ${property.price.displayPrice}. Exclusive mandate through Murivest.`;

  const canonicalUrl = `https://murivest.co.ke/ke-properties/off-market/${property.slug}`;
  const ogImage =
    property.images?.[0] ||
    "https://murivest.co.ke/images/off-market-default-og.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      focusKeyword,
      ...(property.secondaryKeywords || []),
      `${property.propertyType} off-market`,
      `${property.city} commercial property investment`,
      "off-market real estate Kenya",
      "private sale commercial property",
      "institutional property advisory",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Murivest",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${property.title} — Off-Market ${property.propertyType} in ${property.city || "Kenya"}`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: property.listingDate,
      modifiedTime: property.listingDate,
      authors: ["https://murivest.co.ke/authors/murivest-research"],
      section: "Off-Market Commercial Property",
      tags: [property.propertyType, property.city || "Kenya", "Off-Market", "Private Sale"],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "real estate",
    classification: "Off-Market Real Estate Listing",
    other: {
      "geo.region": "KE",
      "geo.placename": property.city || "Nairobi",
      ICBM: property.coordinates
        ? `${property.coordinates.lat}, ${property.coordinates.lng}`
        : "-1.2921, 36.8219",
    },
  };
}

// ─── JSON-LD Schema ────────────────────────────────────────────────────────

function generatePropertySchema(property: OffMarketProperty) {
  const baseUrl = "https://murivest.co.ke";
  const propertyUrl = `${baseUrl}/ke-properties/off-market/${property.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateListing", "Product"],
        "@id": `${propertyUrl}/#listing`,
        name: property.title,
        url: propertyUrl,
        description: property.description,
        image: property.images || [],
        offers: {
          "@type": "Offer",
          price: property.price.usd || property.price.displayPrice,
          priceCurrency: property.price.usd ? "USD" : "KES",
          availability: "https://schema.org/InStock",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: property.address,
          addressLocality: property.city,
          addressCountry: property.country || "KE",
        },
      },
      generateOrganizationSchema(),
      generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Properties", url: `${baseUrl}/ke-properties` },
        { name: "Off-Market", url: `${baseUrl}/ke-properties/off-market` },
        { name: property.title, url: propertyUrl },
      ]),
    ],
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function OffMarketPropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = await getProperty(params.slug);
  if (!property) notFound();

  const canonicalUrl = `https://murivest.co.ke/ke-properties/off-market/${property.slug}`;
  const schema = generatePropertySchema(property);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="dns-prefetch" href="https://cdn.sanity.io" />

      <OffMarketClientView property={property} />

      {/* Hidden semantic SEO content */}
      <div className="sr-only" aria-hidden="true">
        <article>
          <h1>{property.title}</h1>
          <h2>
            {property.propertyType} Off-Market Investment in {property.city || "Kenya"}
          </h2>
          {property.neighborhoodAnalysis && (
            <section>
              <h3>Neighbourhood Analysis</h3>
              <p>{property.neighborhoodAnalysis}</p>
            </section>
          )}
          {property.infrastructureDetails && (
            <section>
              <h3>Infrastructure and Accessibility</h3>
              <p>{property.infrastructureDetails}</p>
            </section>
          )}
          {property.investmentAngle && (
            <section>
              <h3>Investment Thesis</h3>
              <p>{property.investmentAngle}</p>
            </section>
          )}
          {property.appreciationPotential && (
            <section>
              <h3>Appreciation Potential</h3>
              <p>{property.appreciationPotential}</p>
            </section>
          )}
          <section>
            <h3>Off-Market Property Investment Keywords</h3>
            <ul>
              <li>{property.propertyType} off-market {property.city || "Kenya"}</li>
              <li>Private sale commercial property {property.city || "Africa"}</li>
              <li>Off-market real estate {property.city || "East Africa"}</li>
              <li>Premium commercial property {property.city || "Nairobi"}</li>
              <li>Institutional property advisory</li>
              <li>Off-market investment returns 2026</li>
              <li>Commercial real estate Kenya private sale</li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}

export const revalidate = 1800;
export const dynamicParams = true;