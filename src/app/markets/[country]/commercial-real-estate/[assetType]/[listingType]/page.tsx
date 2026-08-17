import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

interface ListingTypeParams {
  country: string;
  assetType: string;
  listingType: string;
}

interface PropertySummary {
  title: string;
  slug: { current: string };
  city?: string;
  askingPrice?: number;
  currency?: string;
  capRate?: number;
  totalArea?: number;
  images?: { asset: { url: string }; alt?: string }[];
}

function formatLabel(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

async function getListings(params: ListingTypeParams): Promise<PropertySummary[]> {
  return client.fetch<PropertySummary[]>(
    `*[
      _type == "property" &&
      country == $country &&
      assetType == $assetType &&
      listingType == $listingType
    ] | order(_createdAt desc) {
      title,
      slug,
      city,
      askingPrice,
      currency,
      capRate,
      totalArea,
      images[0] {
        asset-> { url },
        alt
      }
    }`,
    params
  );
}

export async function generateMetadata({
  params,
}: {
  params: ListingTypeParams;
}): Promise<Metadata> {
  const country = formatLabel(params.country);
  const assetType = formatLabel(params.assetType);
  const listingType = formatLabel(params.listingType);

  return {
    title: `${assetType} ${listingType} in ${country} | Murivest Commercial Real Estate`,
    description: `Browse institutional-grade ${assetType.toLowerCase()} properties ${listingType.toLowerCase()} in ${country}. Murivest Group Ltd presents curated commercial assets for qualified investors.`,
  };
}

export default async function ListingTypePage({
  params,
}: {
  params: ListingTypeParams;
}) {
  const listings = await getListings(params);
  const country = formatLabel(params.country);
  const assetType = formatLabel(params.assetType);
  const listingType = formatLabel(params.listingType);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Breadcrumb */}
      <nav className="px-6 py-4 text-xs text-[#6B6B6B] border-b border-[#E5E0D8] font-mono tracking-wider uppercase">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><a href="/" className="hover:text-[#2D6A4F]">Murivest</a></li>
          <li className="opacity-40">/</li>
          <li><a href={`/${params.country}`} className="hover:text-[#2D6A4F]">{country}</a></li>
          <li className="opacity-40">/</li>
          <li><a href={`/${params.country}/commercial-real-estate`} className="hover:text-[#2D6A4F]">CRE</a></li>
          <li className="opacity-40">/</li>
          <li>
            <a href={`/${params.country}/commercial-real-estate/${params.assetType}`} className="hover:text-[#2D6A4F]">
              {assetType}
            </a>
          </li>
          <li className="opacity-40">/</li>
          <li className="text-[#1A1A1A]">{listingType}</li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-3">
            {country} · Commercial Real Estate
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
            {assetType} {listingType}
          </h1>
          <p className="text-[#6B6B6B]">
            {listings.length} listing{listings.length !== 1 ? "s" : ""} available
          </p>
        </header>

        {listings.length === 0 ? (
          <div className="border border-[#E5E0D8] p-16 text-center">
            <p className="text-[#6B6B6B] font-mono text-sm uppercase tracking-widest">
              No listings currently available in this category.
            </p>
            <a
              href={`mailto:capital@murivest.co.ke?subject=Off-Market Enquiry: ${assetType} ${listingType} in ${country}`}
              className="mt-6 inline-block text-sm text-[#2D6A4F] underline underline-offset-4"
            >
              Enquire about off-market opportunities
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((property) => (
              <a
                key={property.slug.current}
                href={`/${params.country}/commercial-real-estate/${params.assetType}/${params.listingType}/${property.slug.current}`}
                className="group border border-[#E5E0D8] bg-white hover:border-[#B8A98A] transition-colors"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-[#E5E0D8]">
                  {property.images?.[0]?.asset?.url ? (
                    <img
                      src={property.images[0].asset.url}
                      alt={property.images[0].alt ?? property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B8A98A]">
                        No Image
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-2">
                    {property.city ?? country}
                  </p>
                  <h2 className="font-serif text-lg font-light text-[#1A1A1A] mb-4 leading-snug">
                    {property.title}
                  </h2>
                  <div className="flex justify-between items-end">
                    <div>
                      {property.askingPrice ? (
                        <p className="text-xl font-serif text-[#1A1A1A]">
                          {formatCurrency(property.askingPrice, property.currency ?? "USD")}
                        </p>
                      ) : (
                        <p className="text-sm text-[#6B6B6B]">Price on Request</p>
                      )}
                    </div>
                    {property.capRate && (
                      <div className="text-right">
                        <p className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B]">Cap Rate</p>
                        <p className="text-[#2D6A4F] font-serif text-lg">{property.capRate}%</p>
                      </div>
                    )}
                  </div>
                  {property.totalArea && (
                    <p className="text-xs text-[#6B6B6B] mt-3 font-mono">
                      {property.totalArea.toLocaleString()} sq ft
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}