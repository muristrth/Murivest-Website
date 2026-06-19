// app/uae-properties/[slug]/page.tsx
// Murivest — Individual UAE Property Page (Server Component)

import type { Metadata } from 'next';
import { notFound }      from 'next/navigation';
import {
  getUaePropertyBySlug,
  getUaeRelated,
  getUaePopular,
  getUaeAllSlugs,
  urlFor,
} from '../../../../lib/sanity/client';
import UaePropertyClientView from '@/components/UaePropertiesClientView';
import UaePropertySidebar    from '@/components/UaePropertySidebar';

// ─── Static Params ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getUaeAllSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const property = await getUaePropertyBySlug(slug);

  if (!property) {
    return {
      title: 'Property Not Found | Murivest',
    };
  }

  const ogImage = property.coverImage
    ? urlFor(property.coverImage)
        .width(1200)
        .height(630)
        .fit('crop')
        .url()
    : undefined;

  return {
    title: `${property.title} | Murivest UAE Portfolio`,
    description:
      property.descriptionShort ||
      `${property.propertyType} in ${property.community}, ${property.emirate}. Institutional mandate — Murivest.`,

    openGraph: {
      title: property.title,
      description: property.descriptionShort,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : [],
      type: 'article',
      locale: 'en_AE',
    },

    alternates: {
      canonical: `https://murivest.com/uae-properties/${slug}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function UaePropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const property = await getUaePropertyBySlug(slug);

  if (!property) notFound();

  const [related, popular] = await Promise.all([
    getUaeRelated(slug, property.category, property.emirate),
    getUaePopular(),
  ]);

  // Build image array for client view
  const images: string[] = [
    property.coverImage
      ? urlFor(property.coverImage).width(1600).height(900).fit('crop').url()
      : null,
    ...(property.gallery ?? []),
  ].filter(Boolean) as string[];

  const sidebar = (
    <UaePropertySidebar
      relatedProperties={related.map((p) => ({
        slug:         p.slug,
        title:        p.title,
        priceAed:     p.priceAed,
        priceUsd:     p.priceUsd,
        annualYield:  p.annualYield,
        emirate:      p.emirate,
        community:    p.community,
        propertyType: p.propertyType,
        category:     p.category,
        coverImage:   p.coverImage
          ? urlFor(p.coverImage).width(160).height(160).fit('crop').url()
          : null,
      }))}
      popularProperties={popular.map((p) => ({
        slug:         p.slug,
        title:        p.title,
        priceAed:     p.priceAed,
        annualYield:  p.annualYield,
        emirate:      p.emirate,
        community:    p.community,
        propertyType: p.propertyType,
        category:     p.category,
        coverImage:   p.coverImage
          ? urlFor(p.coverImage).width(160).height(160).fit('crop').url()
          : null,
      }))}
      brokerEmail={property.broker?.email}
      brokerPhone={property.broker?.phone}
    />
  );

  return (
    <UaePropertyClientView
      property={{
        title:          property.title,
        subtitle:       property.subtitle,
        address:        property.address || `${property.community}, ${property.emirate}`,
        emirate:        property.emirate,
        community:      property.community,
        category:       property.category,
        propertyType:   property.propertyType,
        status:         property.status,
        isExclusive:    property.isExclusive,
        isOffMarket:    property.isOffMarket,
        priceAed:       property.priceAed,
        priceUsd:       property.priceUsd,
        priceGbp:       property.priceGbp,
        priceKsh:       property.priceKsh,
        annualYield:    property.annualYield,
        occupancyRate:  property.occupancyRate,
        bedrooms:       property.bedrooms,
        bathrooms:      property.bathrooms,
        sizeSqft:       property.sizeSqft,
        floor:          property.floor,
        parkingSpaces:  property.parkingSpaces,
        features:       property.features || [],
        developer:      property.developer,
        developmentName:property.developmentName,
        completionDate: property.completionDate,
        paymentPlan:    property.paymentPlan,
        serviceCharge:  property.serviceCharge,
        investmentMetrics: property.investmentMetrics,
        description:    property.description,
        images,
        floorPlan:      property.floorPlan,
        videoUrl:       property.videoUrl,
        brochureUrl:    property.brochureUrl,
        businessCaseUrl:property.businessCaseUrl,
        referenceCode:  property.referenceCode,
        nda:            property.nda,
        regulatoryNote: property.regulatoryNote,
        broker:         property.broker,
        coordinates:    property.coordinates,
      }}
      sidebar={sidebar}
    />
  );
}

