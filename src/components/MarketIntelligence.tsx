'use client';

const MarketIntelligence = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Market Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Kenya: A Foundational Pillar of East African Growth
            </h2>
            <p className="text-xl text-slate-600 font-light">
              While others follow headlines, we follow fundamentals. Kenya's market is a secure, long-term asset class fueled by an unshakeable demographic dividend and significant infrastructure investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "6.2%", label: "GDP Outlook", period: "2025 Forecast", trend: "+" },
              { metric: "$127B", label: "Market Valuation", period: "2024 Est.", trend: "+" },
              { metric: "54M", label: "Population", period: "Current", trend: "+" },
              { metric: "28%", label: "Urbanization Rate", period: "Annual Growth", trend: "+" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg border border-neutral-200">
                <div className="text-4xl md:text-5xl font-light text-slate-800 mb-2 flex items-center justify-center">
                  {stat.metric}
                  <span className="text-emerald-600 text-2xl ml-2">{stat.trend}</span>
                </div>
                <div className="text-lg font-medium text-slate-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500 font-light">
                  {stat.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Drivers */}
      <section className="py-24 bg-slate-900 text-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-amber-50 mb-6">
              The Unseen Drivers of Value
            </h2>
            <p className="text-xl font-light text-neutral-50/90">
              True value is not found on the surface. It is built on a foundation of demographic and economic certainties. We illuminate the forces shaping Kenya's landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Demographic Imperative",
                description: "A young, educated population is the most reliable engine of demand for housing, office space, and retail facilities.",
                stats: ["2.3% annual population growth", "4M housing unit deficit", "Rising middle class spending"]
              },
              {
                title: "Infrastructure & Access",
                description: "Strategic investments are not just connecting cities—they're creating entirely new hubs of economic activity.",
                stats: ["$50B infrastructure pipeline", "Standard Gauge Railway operational", "Konza Technopolis development"]
              },
              {
                title: "Economic Resilience",
                description: "From fintech to manufacturing, Kenya's economy is building a diverse portfolio of its own, ensuring stability and sustained growth.",
                stats: ["Financial services hub", "Tech startup ecosystem", "Manufacturing for export"]
              },
              {
                title: "The Gateway to a Continent",
                description: "Positioned as the definitive hub for East and Central Africa, Kenya offers unrivaled logistical and commercial access.",
                stats: ["Port of Mombasa gateway", "COMESA headquarters", "Regional airline hub"]
              },
              {
                title: "A Stable Regulatory Framework",
                description: "Policies designed to stimulate growth, protect assets, and incentivize foreign capital.",
                stats: ["Affordable housing program", "Special Economic Zones", "Investment incentives"]
              },
              {
                title: "Capital's Next Frontier",
                description: "A new wave of international capital is recognizing the profound security and yield potential of Kenya's real estate sector.",
                stats: ["$2.1B FDI in 2023", "Sovereign wealth fund interest", "REIT market development"]
              }
            ].map((driver, index) => (
              <div key={index} className="p-8 bg-white rounded-lg border border-neutral-200 shadow-sm text-slate-800">
                <h3 className="text-xl font-medium text-slate-800 mb-4">
                  {driver.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  {driver.description}
                </p>
                <ul className="space-y-2">
                  {driver.stats.map((stat, statIndex) => (
                    <li key={statIndex} className="text-sm text-slate-500 flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Analysis */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              A Data-Driven View of Performance
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Our analysis goes beyond surface-level metrics to provide a granular view of where value is truly being created, sector by sector.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                sector: "Commercial Office",
                performance: "Strong Performance",
                description: "Elite Grade A spaces in Nairobi and Westlands are not just occupied, they are in high demand from global financial and tech firms.",
                metrics: {
                  "Average Rent": "$18-25/sqft",
                  "Occupancy Rate": "89%",
                  "Yield": "8.5-11%",
                },
                trends: ["Tenant demand from financial services", "Expansion of international corporates", "Tech company consolidation"]
              },
              {
                sector: "Industrial",
                performance: "Exceptional Yield",
                description: "The gold standard for return. We're seeing exceptional yields in warehousing and logistics driven by regional trade and the new economy.",
                metrics: {
                  "Average Rent": "$4-7/sqft",
                  "Occupancy Rate": "94%",
                  "Yield": "11-15%",
                },
                trends: ["Explosive e-commerce logistics", "Manufacturing for export", "Demand for cold storage"]
              },
              {
                sector: "Retail",
                performance: "Stable & Growing",
                description: "Discerning consumerism is reshaping retail, with prime shopping centers providing a premium experience that commands premium rents.",
                metrics: {
                  "Average Rent": "$12-18/sqft",
                  "Occupancy Rate": "82%",
                  "Yield": "9-12%",
                },
                trends: ["E-commerce integration", "Entertainment and experiential offerings", "Expansion into suburban hubs"]
              },
              {
                sector: "Hospitality",
                performance: "Strong Recovery",
                description: "A post-pandemic resurgence in both business and leisure travel is re-establishing premium hotel assets as a high-yield opportunity.",
                metrics: {
                  "ADR": "$120-250",
                  "Occupancy Rate": "74%",
                  "Yield": "10-14%",
                },
                trends: ["Growth of conference tourism", "Expansion of eco-tourism", "Corporate travel resumption"]
              }
            ].map((sector, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-white rounded-lg border border-neutral-200">
                <div>
                  <h3 className="text-2xl font-serif font-light text-slate-800 mb-2">
                    {sector.sector}
                  </h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    sector.performance.includes('Exceptional') ? 'bg-emerald-100 text-emerald-800' :
                    sector.performance.includes('Strong') ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {sector.performance}
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {sector.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-4">Key Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(sector.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex justify-between">
                        <span className="text-slate-600 font-light">{key}:</span>
                        <span className="text-slate-800 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-4">Market Trends</h4>
                  <ul className="space-y-2">
                    {sector.trends.map((trend, trendIndex) => (
                      <li key={trendIndex} className="text-slate-600 font-light flex items-start">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        {trend}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Outlook */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-8">
                Our 2025-2027 Investment Mandate
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                Our outlook is not a prediction—it's a blueprint. We map the trajectory of capital to identify opportunities before they become mainstream.
              </p>

              <div className="space-y-6">
                {[
                  {
                    timeframe: "Short Term (2025)",
                    outlook: "The immediate focus is on the proven stability and returns of prime industrial and commercial assets."
                  },
                  {
                    timeframe: "Medium Term (2025-2026)",
                    outlook: "Infrastructure completion will unlock new, previously untapped investment opportunities in secondary cities."
                  },
                  {
                    timeframe: "Long Term (2027+)",
                    outlook: "Kenya will solidify its position as the premier destination for sophisticated capital in Africa."
                  }
                ].map((forecast, index) => (
                  <div key={index} className="border-l-4 border-amber-400 pl-6">
                    <h3 className="text-lg font-medium text-slate-800 mb-2">
                      {forecast.timeframe}
                    </h3>
                    <p className="text-slate-600 font-light">
                      {forecast.outlook}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-xl border border-neutral-200">
                <h3 className="text-2xl font-serif font-light text-slate-800 mb-6">Strategic Asset Allocation</h3>
                <p className="text-slate-600 mb-6 font-light">
                  Based on our analysis, we recommend a calibrated portfolio designed for both immediate returns and long-term security.
                </p>
                <div className="space-y-4">
                  {[
                    { asset: "Grade A Office", allocation: "35%", rationale: "Unrivaled tenant quality and long-term security." },
                    { asset: "Industrial/Logistics", allocation: "30%", rationale: "The highest yield potential from regional trade and e-commerce." },
                    { asset: "Retail Centers", allocation: "20%", rationale: "Capturing the growth of the new middle class." },
                    { asset: "Mixed-Use", allocation: "15%", rationale: "A diversified approach for balanced portfolio growth." }
                  ].map((rec, index) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-neutral-50 rounded">
                      <div>
                        <div className="font-medium text-slate-800">{rec.asset}</div>
                        <div className="text-sm text-slate-500 font-light">{rec.rationale}</div>
                      </div>
                      <div className="text-xl font-light text-amber-600 mt-2 sm:mt-0">{rec.allocation}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 text-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-amber-50">
            Your Next Strategic Move Begins Here
          </h2>
          <p className="text-xl font-light text-neutral-50/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Access our full Global Investor Briefing—an in-depth analysis available only to our private network. We welcome a conversation to discuss how our intelligence can serve your investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-medium hover:bg-amber-400 transition-colors">
              Request Our Private Briefing
            </button>
            <button className="px-8 py-4 border border-amber-400 text-amber-400 rounded-lg font-medium hover:bg-amber-400 hover:text-slate-900 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketIntelligence;