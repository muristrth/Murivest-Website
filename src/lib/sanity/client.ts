// lib/sanity/client.ts
// Murivest — Shared Sanity client + typed GROQ queries

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// ─── Client ──────────────────────────────────────────────────────────────────

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn:    true,
  // token: process.env.SANITY_API_TOKEN,  // only needed for mutations
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// ─── UAE Property Projection ──────────────────────────────────────────────────

const UAE_CARD_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  subtitle,
  category,
  propertyType,
  status,
  isFeatured,
  isExclusive,
  isOffMarket,
  emirate,
  community,
  address,
  coordinates,
  priceAed,
  priceUsd,
  priceGbp,
  priceKsh,
  annualYield,
  occupancyRate,
  bedrooms,
  bathrooms,
  sizeSqft,
  developer,
  developmentName,
  descriptionShort,
  "coverImage": coverImage,
  publishedAt,
  referenceCode,
  paymentPlan,
  "broker": broker {
    name, email, phone, title,
    "photo": photo.asset->url
  }
}`;

const UAE_FULL_PROJECTION = `{
  ${UAE_CARD_PROJECTION.slice(1, -1)},
  features,
  floor,
  parkingSpaces,
  serviceCharge,
  completionDate,
  paymentPlan,
  investmentMetrics,
  "description": description,
  "gallery": gallery[].asset->url,
  "floorPlan": floorPlan.asset->url,
  videoUrl,
  "brochureUrl": brochureFile.asset->url,
  businessCaseUrl,
  regulatoryNote,
  nda,
}`;

// ─── Queries ─────────────────────────────────────────────────────────────────

/** All UAE properties for listing page — sorted featured first, then newest */
export const UAE_PROPERTIES_QUERY = `
  *[_type == "uaeProperty"] | order(isFeatured desc, publishedAt desc)
  ${UAE_CARD_PROJECTION}
`;

/** Single UAE property by slug */
export const UAE_PROPERTY_BY_SLUG_QUERY = `
  *[_type == "uaeProperty" && slug.current == $slug][0]
  ${UAE_FULL_PROJECTION}
`;

/** Related properties — same category, same emirate, excluding current */
export const UAE_RELATED_QUERY = `
  *[
    _type == "uaeProperty"
    && slug.current != $slug
    && (category == $category || emirate == $emirate)
  ] | order(publishedAt desc) [0..4]
  ${UAE_CARD_PROJECTION}
`;

/** Featured / most recently published */
export const UAE_POPULAR_QUERY = `
  *[_type == "uaeProperty"] | order(isFeatured desc, publishedAt desc) [0..7]
  ${UAE_CARD_PROJECTION}
`;

/** All slugs — for generateStaticParams */
export const UAE_ALL_SLUGS_QUERY = `
  *[_type == "uaeProperty"]{ "slug": slug.current }
`;

// ─── Fetch Helpers ────────────────────────────────────────────────────────────

export async function getUaeProperties(): Promise<UaePropertyCard[]> {
  return sanityClient.fetch(UAE_PROPERTIES_QUERY);
}

export async function getUaePropertyBySlug(slug: string): Promise<UaePropertyFull | null> {
  return sanityClient.fetch(UAE_PROPERTY_BY_SLUG_QUERY, { slug });
}

export async function getUaeRelated(slug: string, category: string, emirate: string): Promise<UaePropertyCard[]> {
  return sanityClient.fetch(UAE_RELATED_QUERY, { slug, category, emirate });
}

export async function getUaePopular(): Promise<UaePropertyCard[]> {
  return sanityClient.fetch(UAE_POPULAR_QUERY);
}

export async function getUaeAllSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(UAE_ALL_SLUGS_QUERY);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type UaeCategory =
  | 'for-sale'
  | 'for-rent'
  | 'off-plan'
  | 'commercial-lease'
  | 'portfolio';

export interface UaePropertyCard {
  _id:            string;
  title:          string;
  slug:           string;
  subtitle?:      string;
  category:       UaeCategory;
  propertyType:   string;
  status:         string;
  isFeatured:     boolean;
  isExclusive:    boolean;
  isOffMarket:    boolean;
  emirate:        string;
  community?:     string;
  address?:       string;
  coordinates?:   { lat: number; lng: number };
  priceAed?:      string;
  priceUsd?:      string;
  priceGbp?:      string;
  priceKsh?:      string;
  annualYield?:   string;
  occupancyRate?: string;
  bedrooms?:      string;
  bathrooms?:     string;
  sizeSqft?:      string;
  developer?:     string;
  developmentName?: string;
  descriptionShort?: string;
  coverImage?:    any;   // Sanity image ref
  publishedAt?:   string;
  referenceCode?: string;
  paymentPlan?:   string;
  broker?: {
    name:  string;
    email: string;
    phone: string;
    photo?: string;
    title?: string;
  };
}

export interface UaePropertyFull extends UaePropertyCard {
  features?:        string[];
  floor?:           string;
  parkingSpaces?:   number;
  serviceCharge?:   string;
  completionDate?:  string;
  investmentMetrics?: {
    monthlyRental?:    string;
    annualRental?:     string;
    appreciationRate?: string;
    totalROI?:         string;
    paybackPeriod?:    string;
    goldenVisa?:       boolean;
  };
  description?:     any[];   // Portable text
  gallery?:         string[];
  floorPlan?:       string;
  videoUrl?:        string;
  brochureUrl?:     string;
  businessCaseUrl?: string;
  regulatoryNote?:  string;
  nda?:             boolean;
}