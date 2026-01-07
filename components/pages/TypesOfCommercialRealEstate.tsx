import Link from 'next/link';

export default function TypesOfCommercialRealEstate() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Types of Commercial Real Estate: Office, Retail, Industrial, and More</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
        <p className="mb-4">
          Commercial real estate encompasses diverse asset classes, each with unique risk-return profiles and market dynamics. Office properties offer stability in urban centers, retail assets face e-commerce challenges, industrial holdings benefit from logistics growth, and specialized types like hotels provide diversification. Institutional investors allocate based on economic cycles, with assumptions of steady demand and regulatory stability. Risks include sector-specific downturns and macroeconomic shifts; no returns are guaranteed. This analysis draws on global benchmarks, emphasizing Kenya and UK contexts where infrastructure drives opportunities.
        </p>
        <p className="mb-4">
          For high-net-worth individuals, understanding these types informs portfolio construction, focusing on long-term income and capital preservation.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Core Analysis</h2>
        <p className="mb-4">
          Commercial real estate types are classified by primary use, influencing valuation, leasing, and performance. Global data from CBRE indicates office and industrial sectors dominate allocations, with retail adapting to digital shifts.
        </p>
        <h3 className="text-xl font-semibold mb-2">Office Properties</h3>
        <p className="mb-4">
          Office buildings house corporate tenants, with sub-types including CBD towers, suburban campuses, and flex spaces. In Nairobi, demand from tech firms supports yields of 7-9%; in London, prime assets yield 4-6%. Risks: Remote work trends; opportunities: Urban regeneration.
        </p>
        <h3 className="text-xl font-semibold mb-2">Retail Properties</h3>
        <p className="mb-4">
          Retail includes malls, high-street shops, and outlets. Post-COVID, focus on experiential retail. Kenya's retail market grows with middle-class expansion, but faces online competition. Yields: 8-10%; risks: Consumer spending volatility.
        </p>
        <h3 className="text-xl font-semibold mb-2">Industrial Properties</h3>
        <p className="mb-4">
          Warehouses and distribution centers thrive on e-commerce. East Africa's ports drive demand. Yields: 6-8%; advantages: Recession-resistant; risks: Supply chain disruptions.
        </p>
        <h3 className="text-xl font-semibold mb-2">Multifamily and Specialized</h3>
        <p className="mb-4">
          Multifamily for rentals; specialized like data centers for tech. Assumptions: Demographic growth; risks: Overbuilding.
        </p>
        <p className="mb-4">
          For fundamentals, see <Link href="/understanding-commercial-property" className="text-blue-600 hover:underline">Understanding Commercial Property</Link>. Compare returns in <Link href="/commercial-vs-residential-returns" className="text-blue-600 hover:underline">Commercial vs Residential Returns</Link>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Investment Considerations</h2>
        <p className="mb-4">
          Capital: $1M+ per asset. Time horizon: 7-10 years. Liquidity: Low. Risks: Market cycles, tenant defaults.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Commercial Property Angle</h2>
        <p className="mb-4">
          Office for Nairobi's growth, industrial for logistics, retail for mixed-use, land banking for future development.
        </p>
        <p className="mb-4">
          For investors evaluating commercial opportunities in Kenya or the UK, Murivest advises on mandate-driven acquisitions and off-market transactions. Explore our <Link href="/commercial-real-estate" className="text-blue-600 hover:underline">commercial real estate services</Link> or view <Link href="/properties" className="text-blue-600 hover:underline">available properties</Link>.
        </p>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-600">
          This content is for informational purposes only and does not constitute investment advice.
        </p>
      </div>
    </div>
  );
}