import type { Metadata } from 'next'
import Link from 'next/link'

import { MapPin, TrendingUp, Building, ArrowRight, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Country Focus - African Real Estate Markets - Murivest Realty Group',
  description: 'Detailed market snapshots for African countries: Kenya, Nigeria, South Africa, Ghana, Rwanda, Uganda, Botswana, Egypt, Morocco, Tanzania, Zambia, Zimbabwe.',
  keywords: 'African countries real estate, Kenya market analysis, Nigeria commercial property, South Africa investment, Ghana real estate, Rwanda development, Uganda commercial, Botswana property, Egypt real estate, Morocco investment, Tanzania market, Zambia commercial, Zimbabwe property, Murivest Realty Group',
  openGraph: {
    title: 'Country Focus - African Real Estate Markets - Murivest Realty Group',
    description: 'Detailed market snapshots for African countries.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/country-focus',
  },
}

export default function CountryFocusPage() {
  const countries = [
    {
      name: "Kenya",
      flag: "🇰🇪",
      gdp: "4.8%",
      inflation: "5.2%",
      gdpPerCapita: "$1,950",
      institutionalDemand: "High - Tech & Logistics",
      primeYields: "7.2-8.5%",
      challenges: "Currency volatility, regulatory changes",
      opportunities: "Nairobi CBD expansion, data center development",
      featuredProject: "Westlands Innovation District - Mixed-use development with 15% IRR potential"
    },
    {
      name: "Nigeria",
      flag: "🇳🇬",
      gdp: "3.2%",
      inflation: "15.8%",
      gdpPerCapita: "$2,200",
      institutionalDemand: "Very High - Oil & Financial Services",
      primeYields: "7.8-9.2%",
      challenges: "FX controls, infrastructure gaps",
      opportunities: "Lagos Island redevelopment, port-adjacent logistics",
      featuredProject: "Victoria Island Office Complex - Prime Grade A offices with multinational tenants"
    },
    {
      name: "South Africa",
      flag: "🇿🇦",
      gdp: "1.8%",
      inflation: "4.7%",
      gdpPerCapita: "$6,000",
      institutionalDemand: "High - Mining & Financial Services",
      primeYields: "8.1-9.5%",
      challenges: "Energy crisis, regulatory uncertainty",
      opportunities: "Cape Town data centers, Johannesburg logistics",
      featuredProject: "Sandton Central - Premium office and retail complex in Johannesburg CBD"
    },
    {
      name: "Ghana",
      flag: "🇬🇭",
      gdp: "5.2%",
      inflation: "23.1%",
      gdpPerCapita: "$2,200",
      institutionalDemand: "Rising - Digital & Manufacturing",
      primeYields: "8.1-9.8%",
      challenges: "Inflation management, debt sustainability",
      opportunities: "Accra CBD expansion, Tema port logistics",
      featuredProject: "East Legon Tech Hub - Modern office campus serving fintech and tech companies"
    },
    {
      name: "Rwanda",
      flag: "🇷🇼",
      gdp: "7.2%",
      inflation: "7.8%",
      gdpPerCapita: "$850",
      institutionalDemand: "Emerging - East African hub",
      primeYields: "8.5-10.2%",
      challenges: "Small market size, limited liquidity",
      opportunities: "Kigali CBD development, special economic zones",
      featuredProject: "Kigali Innovation City - Government-backed tech and innovation district"
    },
    {
      name: "Uganda",
      flag: "🇺🇬",
      gdp: "4.8%",
      inflation: "6.2%",
      gdpPerCapita: "$950",
      institutionalDemand: "Moderate - Agriculture & Services",
      primeYields: "8.2-9.5%",
      challenges: "Political uncertainty, infrastructure",
      opportunities: "Kampala retail evolution, Entebbe logistics",
      featuredProject: "Nakawa-Naguru Mixed-Use - Residential and commercial development"
    },
    {
      name: "Botswana",
      flag: "🇧🇼",
      gdp: "3.8%",
      inflation: "8.5%",
      gdpPerCapita: "$7,200",
      institutionalDemand: "Stable - Diamond & Financial Services",
      primeYields: "7.5-8.8%",
      challenges: "Small economy, limited diversification",
      opportunities: "Gaborone CBD, mining logistics",
      featuredProject: "Gaborone Financial District - Premium office development"
    },
    {
      name: "Egypt",
      flag: "🇪🇬",
      gdp: "3.5%",
      inflation: "13.2%",
      gdpPerCapita: "$3,500",
      institutionalDemand: "High - Suez Canal & Tourism",
      primeYields: "8.5-10.5%",
      challenges: "Currency depreciation, political risk",
      opportunities: "Cairo CBD, Suez Canal logistics",
      featuredProject: "New Administrative Capital - Government office complex"
    },
    {
      name: "Morocco",
      flag: "🇲🇦",
      gdp: "3.2%",
      inflation: "6.8%",
      gdpPerCapita: "$3,400",
      institutionalDemand: "Moderate - Tourism & Manufacturing",
      primeYields: "7.8-9.2%",
      challenges: "Regional competition, drought risk",
      opportunities: "Casablanca CBD, Tangier port logistics",
      featuredProject: "Casablanca Finance City - International business district"
    },
    {
      name: "Tanzania",
      flag: "🇹🇿",
      gdp: "4.8%",
      inflation: "4.2%",
      gdpPerCapita: "$1,100",
      institutionalDemand: "Growing - Mining & Tourism",
      primeYields: "8.0-9.5%",
      challenges: "Infrastructure gaps, regulatory changes",
      opportunities: "Dar es Salaam CBD, mining logistics",
      featuredProject: "Dar es Salaam Port City - Mixed-use development adjacent to port"
    },
    {
      name: "Zambia",
      flag: "🇿🇲",
      gdp: "4.2%",
      inflation: "8.8%",
      gdpPerCapita: "$1,300",
      institutionalDemand: "Moderate - Mining & Agriculture",
      primeYields: "8.5-10.0%",
      challenges: "Copper price dependency, debt burden",
      opportunities: "Lusaka CBD, mining logistics",
      featuredProject: "Lusaka Central Business District - Office and retail redevelopment"
    },
    {
      name: "Zimbabwe",
      flag: "🇿🇼",
      gdp: "3.5%",
      inflation: "192.7%",
      gdpPerCapita: "$1,500",
      institutionalDemand: "Limited - Reform dependent",
      primeYields: "12.0-15.0%",
      challenges: "Hyperinflation, political risk, sanctions",
      opportunities: "Harare CBD recovery, special economic zones",
      featuredProject: "Harare Central Business District - Post-reform redevelopment opportunities"
    }
  ]

  const marketOverview = [
    { label: "Average GDP Growth", value: "4.2%", trend: "+0.5%" },
    { label: "Prime Office Yields", value: "8.0-10.0%", trend: "+0.3%" },
    { label: "Institutional Interest", value: "High", trend: "Rising" },
    { label: "Market Maturity", value: "Mixed", trend: "Improving" }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-green-300 mr-3" />
              <span className="text-green-300 font-serif text-lg">African Market Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Country-by-Country Analysis
              <span className="block font-medium text-white">African Real Estate Markets</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Comprehensive market snapshots for institutional investors. Detailed analysis of economic indicators,
              institutional demand trends, prime yields, and investment opportunities across 12 African nations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {marketOverview.map((metric, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-green-200 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/research">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl">
                  <MapPin className="mr-3 h-5 w-5" />
                  Download Country Reports
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Institutional Market Snapshots
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Data-driven analysis for CEOs, pension trustees, and family offices evaluating African real estate opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-green-300 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-light text-slate-900">{country.name}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">GDP Growth</span>
                      <div className="font-medium text-slate-900">{country.gdp}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Inflation</span>
                      <div className="font-medium text-slate-900">{country.inflation}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">GDP/Capita</span>
                      <div className="font-medium text-slate-900">{country.gdpPerCapita}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Prime Yields</span>
                      <div className="font-medium text-green-600">{country.primeYields}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-slate-900">Institutional Demand</span>
                    <div className="text-sm text-slate-600">{country.institutionalDemand}</div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-900">Key Challenges</span>
                    <div className="text-sm text-slate-600">{country.challenges}</div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-900">Investment Opportunities</span>
                    <div className="text-sm text-slate-600">{country.opportunities}</div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-4">
                  <div className="text-sm font-medium text-slate-900 mb-2">Featured Project</div>
                  <div className="text-sm text-slate-600">{country.featuredProject}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Access Detailed Country Analysis
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Download comprehensive country reports with detailed market analysis, yield projections, and investment recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research">
                <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 font-medium text-lg transition-all duration-300">
                  Download Country Reports
                </button>
              </Link>

              <Link href="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 font-medium text-lg transition-all duration-300">
                  Schedule Country Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
