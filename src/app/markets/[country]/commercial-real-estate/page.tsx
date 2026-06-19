import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

interface CREParams {
  country: string;
}

interface AssetGroup {
  assetType: string;
  count: number;
}

function formatLabel(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getAssetGroups(country: string): Promise<AssetGroup[]> {
  const raw = await client.fetch<{ assetType: string }[]>(
    `*[_type == "property" && country == $country] { assetType }`,
    { country }
  );

  const counts: Record<string, number> = {};
  for (const { assetType } of raw) {
    counts[assetType] = (counts[assetType] ?? 0) + 1;
  }

  return Object.entries(counts)
    .map(([assetType, count]) => ({ assetType, count }))
    .sort((a, b) => b.count - a.count);
}

export async function generateMetadata({
  params,
}: {
  params: CREParams;
}): Promise<Metadata> {
  const country = formatLabel(params.country);
  return {
    title: `Commercial Real Estate in ${country} | Murivest`,
    description: `Institutional commercial real estate opportunities in ${country}. Office, retail, logistics, hospitality, and mixed-use assets presented by Murivest Realty Group.`,
  };
}

const ASSET_DESCRIPTIONS: Record<string, string> = {
  office: "Grade A & B office towers, business parks, and professional suites",
  retail: "High-street retail, shopping centres, and F&B anchored assets",
  logistics: "Industrial warehouses, cold-storage facilities, and distribution hubs",
  hospitality: "Hotels, serviced apartments, and branded residences",
  "mixed-use": "Integrated developments combining residential, retail, and office",
  multifamily: "Institutional apartment blocks and build-to-rent portfolios",
  land: "Zoned development sites and strategic land parcels",
};

export default async function CREPage({ params }: { params: CREParams }) {
  const assetGroups = await getAssetGroups(params.country);
  const country = formatLabel(params.country);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Breadcrumb */}
      <nav className="px-6 py-4 text-xs text-[#6B6B6B] border-b border-[#E5E0D8] font-mono tracking-wider uppercase">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><a href="/" className="hover:text-[#2D6A4F]">Murivest</a></li>
          <li className="opacity-40">/</li>
          <li><a href={`/${params.country}`} className="hover:text-[#2D6A4F]">{country}</a></li>
          <li className="opacity-40">/</li>
          <li className="text-[#1A1A1A]">Commercial Real Estate</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="border-b border-[#E5E0D8] px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-3">
            {country}
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
            Commercial Real Estate
          </h1>
          <p className="text-[#6B6B6B] text-lg max-w-2xl">
            Murivest Realty Group presents institutional-grade commercial assets across{" "}
            {country} — curated on a mandate basis for qualified investors, family
            offices, and pension funds.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-8">
          Asset Classes
        </h2>

        {assetGroups.length === 0 ? (
          <div className="border border-[#E5E0D8] p-16 text-center">
            <p className="text-[#6B6B6B] font-mono text-sm uppercase tracking-widest">
              No listings currently available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {assetGroups.map(({ assetType, count }) => (
              <a
                key={assetType}
                href={`/${params.country}/commercial-real-estate/${assetType}`}
                className="group border border-[#E5E0D8] bg-white p-7 hover:border-[#2D6A4F] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-light">
                    {formatLabel(assetType)}
                  </h3>
                  <span className="text-xs font-mono text-[#6B6B6B] border border-[#E5E0D8] px-2 py-0.5">
                    {count}
                  </span>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {ASSET_DESCRIPTIONS[assetType] ??
                    `Institutional ${formatLabel(assetType).toLowerCase()} assets in ${country}`}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Browse listings</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}