import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

interface AssetTypeParams {
  country: string;
  assetType: string;
}

interface ListingGroup {
  listingType: string;
  count: number;
}

async function getListingGroups(params: AssetTypeParams): Promise<ListingGroup[]> {
  const raw = await client.fetch<{ listingType: string }[]>(
    `*[
      _type == "property" &&
      country == $country &&
      assetType == $assetType
    ] { listingType }`,
    params
  );

  const counts: Record<string, number> = {};
  for (const { listingType } of raw) {
    counts[listingType] = (counts[listingType] ?? 0) + 1;
  }

  return Object.entries(counts).map(([listingType, count]) => ({
    listingType,
    count,
  }));
}

function formatLabel(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: AssetTypeParams;
}): Promise<Metadata> {
  const country = formatLabel(params.country);
  const assetType = formatLabel(params.assetType);

  return {
    title: `${assetType} in ${country} | Murivest Commercial Real Estate`,
    description: `Institutional ${assetType.toLowerCase()} investment opportunities in ${country}. Browse for-sale and for-lease listings curated by Murivest Realty Group.`,
  };
}

const LISTING_ICONS: Record<string, string> = {
  "for-sale": "⊕",
  "for-lease": "⊖",
  "for-investment": "◈",
};

export default async function AssetTypePage({
  params,
}: {
  params: AssetTypeParams;
}) {
  const groups = await getListingGroups(params);
  const country = formatLabel(params.country);
  const assetType = formatLabel(params.assetType);

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
          <li className="text-[#1A1A1A]">{assetType}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-3">
            {country} · Commercial Real Estate
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
            {assetType}
          </h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">
            Institutional-grade {assetType.toLowerCase()} assets across {country},
            presented on a mandate basis by Murivest Realty Group.
          </p>
        </header>

        {groups.length === 0 ? (
          <div className="border border-[#E5E0D8] p-16 text-center">
            <p className="text-[#6B6B6B] font-mono text-sm uppercase tracking-widest">
              No active listings in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map(({ listingType, count }) => (
              <a
                key={listingType}
                href={`/${params.country}/commercial-real-estate/${params.assetType}/${listingType}`}
                className="group border border-[#E5E0D8] bg-white p-8 hover:border-[#2D6A4F] transition-colors flex justify-between items-end"
              >
                <div>
                  <p className="text-2xl mb-3 text-[#2D6A4F]">
                    {LISTING_ICONS[listingType] ?? "○"}
                  </p>
                  <h2 className="font-serif text-2xl font-light text-[#1A1A1A] mb-2">
                    {formatLabel(listingType)}
                  </h2>
                  <p className="text-sm text-[#6B6B6B] font-mono">
                    {count} listing{count !== 1 ? "s" : ""}
                  </p>
                </div>
                <span className="text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                  →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}