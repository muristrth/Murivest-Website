import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PropertyParams {
  country: string;
  assetType: string;
  listingType: string;
  slug: string;
}

interface Property {
  title: string;
  description?: string;
  country: string;
  assetType: string;
  listingType: string;
  city?: string;
  askingPrice?: number;
  capRate?: number;
  currency?: string;
  totalArea?: number;
  floors?: number;
  yearBuilt?: number;
  occupancy?: number;
  images?: { asset: { url: string }; alt?: string }[];
  highlights?: string[];
  contactEmail?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatLabel(str: string) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─── Data Fetching ─────────────────────────────────────────────────────────────

async function getProperty(params: PropertyParams): Promise<Property | null> {
  return client.fetch<Property | null>(
    `*[
      _type == "property" &&
      country == $country &&
      assetType == $assetType &&
      listingType == $listingType &&
      slug.current == $slug
    ][0] {
      title,
      description,
      country,
      assetType,
      listingType,
      city,
      askingPrice,
      capRate,
      currency,
      totalArea,
      floors,
      yearBuilt,
      occupancy,
      highlights,
      contactEmail,
      images[] {
        asset-> { url },
        alt
      }
    }`,
    params
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: PropertyParams;
}): Promise<Metadata> {
  const property = await getProperty(params);

  if (!property) {
    return {
      title: "Property Not Found | Murivest",
    };
  }

  const location = [property.city, formatLabel(property.country)]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${property.title} | ${formatLabel(property.assetType)} ${formatLabel(property.listingType)} in ${location} | Murivest`,
    description:
      property.description ??
      `${property.title} — a ${formatLabel(property.assetType)} asset available ${formatLabel(property.listingType)} in ${location}. Institutional-grade opportunity presented by Murivest Realty Group.`,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images?.[0]?.asset?.url
        ? [property.images[0].asset.url]
        : [],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PropertyPage({
  params,
}: {
  params: PropertyParams;
}) {
  const property = await getProperty(params);

  if (!property) notFound();

  const location = [property.city, formatLabel(property.country)]
    .filter(Boolean)
    .join(", ");

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* ── Breadcrumb ── */}
      <nav className="px-6 py-4 text-xs text-[#6B6B6B] border-b border-[#E5E0D8] font-mono tracking-wider uppercase">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><a href="/" className="hover:text-[#2D6A4F]">Murivest</a></li>
          <li className="opacity-40">/</li>
          <li>
            <a href={`/${params.country}`} className="hover:text-[#2D6A4F]">
              {formatLabel(params.country)}
            </a>
          </li>
          <li className="opacity-40">/</li>
          <li>
            <a
              href={`/${params.country}/commercial-real-estate`}
              className="hover:text-[#2D6A4F]"
            >
              Commercial Real Estate
            </a>
          </li>
          <li className="opacity-40">/</li>
          <li>
            <a
              href={`/${params.country}/commercial-real-estate/${params.assetType}`}
              className="hover:text-[#2D6A4F]"
            >
              {formatLabel(params.assetType)}
            </a>
          </li>
          <li className="opacity-40">/</li>
          <li>
            <a
              href={`/${params.country}/commercial-real-estate/${params.assetType}/${params.listingType}`}
              className="hover:text-[#2D6A4F]"
            >
              {formatLabel(params.listingType)}
            </a>
          </li>
          <li className="opacity-40">/</li>
          <li className="text-[#1A1A1A]">{property.title}</li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* ── Header ── */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-[#2D6A4F] text-white rounded-sm">
              {formatLabel(property.listingType)}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border border-[#B8A98A] text-[#6B6B6B] rounded-sm">
              {formatLabel(property.assetType)}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] mb-3 leading-tight">
            {property.title}
          </h1>
          <p className="text-[#6B6B6B] text-lg">{location}</p>
        </header>

        {/* ── Hero Image ── */}
        {property.images?.[0]?.asset?.url && (
          <div className="aspect-video w-full mb-12 overflow-hidden rounded-sm bg-[#E5E0D8]">
            <img
              src={property.images[0].asset.url}
              alt={property.images[0].alt ?? property.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            {property.description && (
              <section>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-4">
                  Overview
                </h2>
                <p className="text-[#3A3A3A] leading-relaxed text-lg">
                  {property.description}
                </p>
              </section>
            )}

            {/* Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <section>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-4">
                  Key Highlights
                </h2>
                <ul className="space-y-2">
                  {property.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-[#3A3A3A]">
                      <span className="text-[#2D6A4F] mt-1">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Property Details Table */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-4">
                Property Details
              </h2>
              <dl className="divide-y divide-[#E5E0D8] border border-[#E5E0D8]">
                {([
                  ["Asset Type", formatLabel(property.assetType)],
                  ["Listing Type", formatLabel(property.listingType)],
                  ["Location", location],
                  property.totalArea
                    ? ["Total Area", `${property.totalArea.toLocaleString()} sq ft`]
                    : null,
                  property.floors ? ["Floors", property.floors] : null,
                  property.yearBuilt ? ["Year Built", property.yearBuilt] : null,
                  property.occupancy
                    ? ["Occupancy", `${property.occupancy}%`]
                    : null,
                ] as Array<[string, string | number] | null>)
                  .filter(
                    (
                      item
                    ): item is [string, string | number] => item !== null
                  )
                  .map(([label, value]) => (
                    <div
                      key={String(label)}
                      className="flex justify-between px-4 py-3 text-sm"
                    >
                      <dt className="text-[#6B6B6B] font-mono uppercase tracking-wider text-xs">
                        {label}
                      </dt>
                      <dd className="text-[#1A1A1A] font-medium">{value}</dd>
                    </div>
                  ))}
              </dl>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            {/* Pricing Card */}
            <div className="border border-[#B8A98A] p-6 bg-white">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-1">
                Asking Price
              </p>
              {property.askingPrice ? (
                <p className="text-3xl font-serif font-light text-[#1A1A1A]">
                  {formatCurrency(property.askingPrice, property.currency ?? "USD")}
                </p>
              ) : (
                <p className="text-lg text-[#6B6B6B]">Price on Request</p>
              )}

              {property.capRate && (
                <div className="mt-4 pt-4 border-t border-[#E5E0D8]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-1">
                    Cap Rate
                  </p>
                  <p className="text-2xl font-serif text-[#2D6A4F]">
                    {property.capRate}%
                  </p>
                </div>
              )}

              <a
                href={`mailto:${property.contactEmail ?? "capital@murivest.co.ke"}?subject=Enquiry: ${encodeURIComponent(property.title)}`}
                className="mt-6 block w-full text-center bg-[#2D6A4F] text-white py-3 text-sm font-mono uppercase tracking-widest hover:bg-[#1F4D38] transition-colors"
              >
                Request Information
              </a>
            </div>

            {/* Murivest Badge */}
            <div className="border border-[#E5E0D8] p-5 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-1">
                Presented by
              </p>
              <p className="font-serif text-lg text-[#1A1A1A]">
                Murivest Realty Group
              </p>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Institutional Commercial Real Estate Advisory
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}