import type { Metadata } from 'next'
import Link from 'next/link'

import { 
  MapPin, 
  TrendingUp, 
  Building, 
  ArrowRight, 
  Globe, 
  BarChart3, 
  Shield, 
  FileText, 
  Landmark, 
  Briefcase,
  ChevronRight,
  Download,
  Clock,
  Users,
  Target,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Country Focus: Institutional Intelligence on African Real Estate Markets | Murivest Realty Group',
  description: 'Comprehensive sovereign risk assessments and market intelligence for institutional investors across 12 African nations. Knight Frank, Kenya Bureau of Statistics, McKinsey, PwC, Deloitte, and Harvard Business Review data-driven analysis for UHNWI and family offices.',
  keywords: 'African real estate investment, Kenya property market analysis, Nigeria commercial real estate yields, South Africa institutional property, Ghana real estate investment, Rwanda Kigali development, Uganda Kampala market, Botswana Gaborone property, Egypt Cairo real estate, Morocco Casablanca investment, Tanzania Dar es Salaam, Zambia Lusaka commercial, Zimbabwe Harare property, UHNWI Africa investment, family office real estate Africa',
  openGraph: {
    title: 'Country Focus: Institutional Intelligence on African Real Estate Markets | Murivest Realty Group',
    description: 'Sovereign-grade market intelligence for institutional capital deployment across Sub-Saharan Africa. Knight Frank, KNBS, McKinsey, PwC, Deloitte, and HBR data synthesis.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/country-focus',
  },
}

export default function CountryFocusPage() {
  const marketOverview = [
    { 
      label: "Weighted Avg GDP Growth", 
      value: "4.2%", 
      trend: "+0.5% YoY",
      source: "KNBS 2025, AfDB Outlook"
    },
    { 
      label: "Prime Office Yield Range", 
      value: "7.5-12.0%", 
      trend: "Stable",
      source: "Knight Frank Africa Report 2024/25"
    },
    { 
      label: "Institutional Capital Flow", 
      value: "$4.8B", 
      trend: "+12% YoY",
      source: "McKinsey Africa Practice 2025"
    },
    { 
      label: "Markets with Grade A Stock", 
      value: "8/12", 
      trend: "Expanding",
      source: "Knight Frank Research"
    }
  ]

  const countries = [
    {
      name: "Kenya",
      flag: "🇰🇪",
      region: "East Africa",
      gdp: "4.9%",
      inflation: "4.42%",
      gdpPerCapita: "$2,150",
      institutionalDemand: "Very High - Tech, Logistics & ESG-Compliant Stock",
      primeYields: "7.2-8.5%",
      marketSize: "$94.5 trillion KES",
      challenges: "Currency volatility in regional trade, construction cost inflation at 6.7%, regulatory harmonization across EAC",
      opportunities: "Nairobi CBD Grade A office absorption exceeding 85%, data center development pipeline worth $2.1B, Affordable Housing Program creating 214,000 units with 15-18% IRR potential",
      featuredProject: "Westlands Innovation District: Mixed-use development targeting 15% IRR through tech tenant pre-commitments and green building certification",
      sectorAnalysis: {
        office: "Upper Hill and Westlands commanding $12-15 psm for Grade A stock with ESG compliance premiums of 8-12%",
        retail: "Modern shopping centres achieving 80%+ occupancy with informal trader integration driving footfall",
        industrial: "Special Economic Zones and EPZ creating new demand clusters, warehousing yields at 9.2%",
        residential: "Housing deficit of 2M units with 61% of urban dwellers in informal settlements creating affordable housing opportunity"
      },
      legalFramework: "Land Act 2012, Sectional Properties Act 2020 enabling strata title, Affordable Housing Act 2024 establishing 1.5% levy mechanism",
      investmentThesis: "Kenya's real estate sector contributed 8.1% to GDP in Q2 2025, with construction rebounding to 6.7% growth after 2024 contraction. The convergence of tech sector expansion (Silicon Savannah), infrastructure development including Dongo Kundu Bypass Phase II, and institutional-grade liquidity makes Nairobi one of only four Sub-Saharan cities with genuine price discovery mechanisms according to McKinsey 2025."
    },
    {
      name: "Nigeria",
      flag: "🇳🇬",
      region: "West Africa",
      gdp: "3.2%",
      inflation: "15.8%",
      gdpPerCapita: "$2,200",
      institutionalDemand: "Very High - Oil, Gas & Financial Services",
      primeYields: "7.8-9.2%",
      marketSize: "$12.8B annual transactions",
      challenges: "FX controls creating capital repatriation friction, infrastructure gaps in power and logistics, regulatory multiplicity across federal and state jurisdictions",
      opportunities: "Lagos Island redevelopment with Victoria Island Grade A offices commanding premium rents, port-adjacent logistics benefiting from AfCFTA implementation, fintech sector driving 340,000 sqm of office absorption annually",
      featuredProject: "Victoria Island Office Complex: 45,000 sqm Grade A development with multinational tenant pre-commitments and dollar-denominated lease structures",
      sectorAnalysis: {
        office: "Lagos CBD experiencing flight to quality with Grade A stock achieving 90% occupancy versus 60% for secondary stock",
        retail: "Formal retail expanding at 12% CAGR with South African anchors (Shoprite, Spar) and local chains (Hubmart) driving format innovation",
        industrial: "Lekki Free Trade Zone and Apapa port logistics commanding yields of 10.5% with 15-year lease structures",
        residential: "Ikoyi and Victoria Island prime residential achieving $3,500-5,000 psm with rental yields of 8-10%"
      },
      legalFramework: "Land Use Act 1978 requiring state governor consent for transfers, Companies and Allied Matters Act 2020, SEC regulations on REITs enabling institutional exit strategies",
      investmentThesis: "Nigeria remains Africa's largest economy with real estate contributing 6.4% to GDP. Despite macroeconomic headwinds, the Lagos market demonstrates institutional resilience with prime office rents holding at $450-600 per sqm annually. The critical insight for UHNWI investors: dollar-denominated leases in prime assets provide natural hedges against Naira volatility, while the impending harmonization of land administration under the National Land Title Regulation offers regulatory optionality."
    },
    {
      name: "South Africa",
      flag: "🇿🇦",
      region: "Southern Africa",
      gdp: "1.8%",
      inflation: "4.7%",
      gdpPerCapita: "$6,000",
      institutionalDemand: "High - Mining, Financial Services & ESG Transition",
      primeYields: "8.1-9.5%",
      marketSize: "$45B institutional AUM",
      challenges: "Energy crisis with load shedding averaging 4 hours daily, regulatory uncertainty around expropriation legislation, constrained GDP growth below population growth",
      opportunities: "Cape Town data center market with 25MW under construction, Johannesburg logistics benefiting from e-commerce growth, Sandton CBD commanding premium rents through energy independence",
      featuredProject: "Sandton Central: Premium office and retail complex achieving 95% occupancy through embedded generation and water independence, commanding 15% rent premiums over grid-dependent stock",
      sectorAnalysis: {
        office: "Cape Town CBD achieving 85% occupancy with 10% growth over 24 months, Sandton maintaining $15-18 psm for Grade A with ESG credentials",
        retail: "Mall redevelopment focusing on experiential retail with mixed-use integration, prime yields of 7.5-8.2%",
        industrial: "Warehousing and logistics outperforming at 9.5% yields with 98% occupancy in key nodes",
        residential: "Cape Town Atlantic Seaboard prime residential achieving $8,000-12,000 psm, rental yields compressing to 3.5-4.5%"
      },
      legalFramework: "Property Valuation Act 2014, Sectional Titles Act, Expropriation Bill under parliamentary review, REIT tax dispensation enabling distribution efficiencies",
      investmentThesis: "South Africa offers the continent's most mature real estate capital markets with JSE-listed REITs providing liquidity benchmarks. The strategic imperative for institutional investors: assets with energy and water independence command structural premiums and tenant stickiness. Knight Frank data indicates ESG-compliant stock achieves 10% higher occupancy rates than legacy assets. For family offices, the convergence of yield compression in prime nodes and distress in secondary markets creates barbell opportunities."
    },
    {
      name: "Ghana",
      flag: "🇬🇭",
      region: "West Africa",
      gdp: "5.2%",
      inflation: "23.1%",
      gdpPerCapita: "$2,200",
      institutionalDemand: "Rising - Digital Services, Manufacturing & AfCFTA",
      primeYields: "8.1-9.8%",
      marketSize: "$3.2B annual investment",
      challenges: "Inflation management with monetary policy rate at 29%, debt sustainability concerns affecting sovereign risk premium, construction cost escalation of 18% annually",
      opportunities: "Accra CBD expansion with Airport City commanding $25-30 psm, Tema port logistics benefiting from AfCFTA headquarters location, fintech sector driving demand for modern office stock",
      featuredProject: "East Legon Tech Hub: 28,000 sqm modern office campus serving fintech and tech companies with flexible lease structures and co-working integration",
      sectorAnalysis: {
        office: "Airport City and Cantonments achieving $20-25 psm for Grade A with limited new supply pipeline",
        retail: "Accra Mall and West Hills Mall commanding $18-22 psm with 85% occupancy, informal sector integration driving traffic",
        industrial: "Tema Free Zone and new port expansion creating logistics opportunities with yields of 9.5-11%",
        residential: "Airport Residential Area and Cantonments achieving $2,500-4,000 psm with rental yields of 8-10%"
      },
      legalFramework: "Land Title Registration Act, Rent Act 1963 (amended), Ghana Investment Promotion Centre Act 2013, Local Governance Act 2016 decentralizing planning",
      investmentThesis: "Ghana's real estate market demonstrates the West African growth trajectory with Accra positioned as the AfCFTA headquarters city. Despite inflationary pressures, the structural demand from the services sector and manufacturing relocation from Asia creates durable absorption. The critical consideration for institutional investors: lease structures must incorporate inflation escalation clauses, while dollar-denominated rents provide currency hedging. The Bank of Ghana's inflation targeting regime, while challenged, provides monetary policy credibility absent in peer markets."
    },
    {
      name: "Rwanda",
      flag: "🇷🇼",
      region: "East Africa",
      gdp: "7.2%",
      inflation: "7.8%",
      gdpPerCapita: "$850",
      institutionalDemand: "Emerging - East African Hub Strategy & Conference Tourism",
      primeYields: "8.5-10.2%",
      marketSize: "$800M annual transactions",
      challenges: "Small market size limiting liquidity, limited domestic capital formation, reliance on regional demand from EAC neighbors",
      opportunities: "Kigali CBD development with Vision City masterplan, special economic zones offering 10-year tax holidays, MICE tourism driving hospitality and serviced apartment demand",
      featuredProject: "Kigali Innovation City: Government-backed 70-hectare tech and innovation district with infrastructure guarantees and sovereign co-investment structures",
      sectorAnalysis: {
        office: "Kigali CBD achieving $12-15 psm for Grade A with limited stock and government anchor tenants",
        retail: "Kigali Heights and Convention Centre retail achieving $15-20 psm with diplomatic and expatriate demand",
        industrial: "Special Economic Zones at Masaka and Rugombo with 0% corporate tax for 10 years, yields of 9-10%",
        residential: "Vision City and Nyarutarama achieving $1,200-2,000 psm with rental yields of 7-8%"
      },
      legalFramework: "Land Law 2013, Law No. 48/2018 on Investment Code, Kigali Special Economic Zone regulations, ease of doing business reforms ranking 2nd in Africa",
      investmentThesis: "Rwanda represents the developmental state model applied to real estate, with government co-investment de-risking pioneering institutional capital. The 7.2% GDP growth and Vision 2050 urbanization strategy create structural tailwinds. For UHNWI investors, the value proposition lies in first-mover advantage in an economy transitioning from aid-dependence to private capital formation. The Kigali Innovation City model—sovereign infrastructure guarantees with private development—offers risk-adjusted returns unavailable in mature markets."
    },
    {
      name: "Uganda",
      flag: "🇺🇬",
      region: "East Africa",
      gdp: "4.8%",
      inflation: "6.2%",
      gdpPerCapita: "$950",
      institutionalDemand: "Moderate - Agriculture Processing & Regional Services",
      primeYields: "8.2-9.5%",
      marketSize: "$1.1B annual transactions",
      challenges: "Political uncertainty around succession planning, infrastructure gaps in power transmission, limited institutional-grade stock",
      opportunities: "Kampala retail evolution from traditional markets to modern centres, Entebbe logistics benefiting from airport expansion, oil sector anticipation driving industrial land banking",
      featuredProject: "Nakawa-Naguru Mixed-Use: 50-hectare government-led redevelopment with residential, commercial and technology park components, targeting middle-income demographic",
      sectorAnalysis: {
        office: "Kampala CBD and Nakasero achieving $8-12 psm for refurbished Grade A, flight to quality evident",
        retail: "Acacia Mall and Village Mall commanding $12-15 psm with 80% occupancy, informal trader integration successful",
        industrial: "Namanve Industrial Park and Kampala Industrial Business Park with yields of 9-10%, oil sector anticipation driving land values",
        residential: "Kololo and Naguru achieving $800-1,200 psm with rental yields of 8-9%"
      },
      legalFramework: "Land Act 1998, Condominium Property Act 2001, Uganda Investment Code 2019, Petroleum Revenue Management Act 2015 creating sovereign wealth potential",
      investmentThesis: "Uganda's real estate market operates in the shadow of Kenya's institutional liquidity but offers yield premiums of 150-200 basis points for comparable risk. The imminent oil production (2025-2026) creates anticipatory demand in industrial and logistics nodes. For patient capital, the Nakawa-Naguru redevelopment represents government-led urban regeneration with embedded infrastructure. The strategic consideration: Uganda's market lacks the transaction velocity of Nairobi or Lagos, requiring longer hold periods but rewarding with higher current yields."
    },
    {
      name: "Botswana",
      flag: "🇧🇼",
      region: "Southern Africa",
      gdp: "3.8%",
      inflation: "8.5%",
      gdpPerCapita: "$7,200",
      institutionalDemand: "Stable - Diamond Value Chain & Financial Services",
      primeYields: "7.5-8.8%",
      marketSize: "$400M annual transactions",
      challenges: "Small economy with limited diversification beyond mining, constrained population growth limiting residential demand, regional competition from South Africa",
      opportunities: "Gaborone CBD premium office with government and mining house demand, mining logistics serving Debswana and related services, reduced transfer duties stimulating foreign investment",
      featuredProject: "Gaborone Financial District: Premium office development targeting 4.5% vacancy rates through long-term government and mining sector leases",
      sectorAnalysis: {
        office: "Gaborone CBD achieving $10-12 psm for prime stock with government anchor tenants providing stability",
        retail: "Airport Junction and Riverwalk commanding $15-18 psm with 85% occupancy, South African retailers dominant",
        industrial: "Gaborone West and Francistown logistics with yields of 8-9%, diamond beneficiation driving demand",
        residential: "Phakalane and Gaborone North achieving $1,000-1,500 psm with rental yields of 4-5%"
      },
      legalFramework: "Transfer Duty Act (amended 2024 reducing foreign buyer rates to 10-15%), Deeds Registry Act, Botswana Investment and Trade Centre Act, Special Economic Zones Authority Act",
      investmentThesis: "Botswana offers Africa's most stable sovereign risk profile with investment-grade credit ratings and consistent rule of law. The 2024 amendment to the Transfer Duty Act—reducing foreign buyer duties from 30% to 10-15%—signals deliberate policy to attract international capital. For UHNWI investors seeking capital preservation over aggressive growth, Botswana provides defensive characteristics: low volatility, currency stability (pegged to rand basket), and institutional transparency. The trade-off: lower yields (4-5% residential) reflecting the risk-free rate."
    },
    {
      name: "Egypt",
      flag: "🇪🇬",
      region: "North Africa",
      gdp: "3.5%",
      inflation: "13.2%",
      gdpPerCapita: "$3,500",
      institutionalDemand: "High - Suez Canal Logistics, Tourism & Government Relocation",
      primeYields: "8.5-10.5%",
      marketSize: "$15B annual transactions",
      challenges: "Currency depreciation with 40% devaluation in 2024, political risk perception affecting institutional capital, construction sector contraction",
      opportunities: "New Administrative Capital creating 700,000 jobs and housing demand, Suez Canal logistics benefiting from expansion, tourism recovery driving hospitality and retail",
      featuredProject: "New Administrative Capital: Government office complex with 34 ministries relocating, creating 480,000 sqm of office demand and supporting residential and retail",
      sectorAnalysis: {
        office: "New Administrative Capital achieving $15-20 psm for Grade A with government demand, Cairo CBD experiencing flight to quality",
        retail: "Mall of Egypt and Cairo Festival City commanding $25-30 psm with 90% occupancy, entertainment integration critical",
        industrial: "Suez Canal Economic Zone with 0% tax for 20 years, logistics yields of 9-11%",
        residential: "New Cairo and 6th of October City achieving $800-1,200 psm with government housing scheme support"
      },
      legalFramework: "New Urban Communities Authority Law, Investment Law 72/2017, Suez Canal Economic Zone regulations, Real Estate Finance Law 2021 enabling mortgage market",
      investmentThesis: "Egypt's real estate market operates at the intersection of demographic imperative (100M+ population, 2M annual housing need) and macroeconomic volatility. The New Administrative Capital represents the largest planned urban development in Africa, creating demand externalities across all sectors. For institutional investors, the strategic entry point is through the Suez Canal Economic Zone—20-year tax holidays and dollar-denominated leases provide structural protection. The Harvard Business Review framework applies: Egypt requires 'adaptive persistence'—long-term commitment with operational flexibility to navigate currency and regulatory shifts."
    },
    {
      name: "Morocco",
      flag: "🇲🇦",
      region: "North Africa",
      gdp: "3.2%",
      inflation: "6.8%",
      gdpPerCapita: "$3,400",
      institutionalDemand: "Moderate - Automotive Manufacturing, Tourism & Phosphates",
      primeYields: "7.8-9.2%",
      marketSize: "$4.5B annual transactions",
      challenges: "Regional competition from Tunisia and Egypt, drought risk affecting agricultural land values, limited Francophone institutional capital",
      opportunities: "Casablanca Finance City competing with Dubai for African HQs, Tangier port logistics benefiting from Renault and Stellantis plants, Marrakech tourism recovery",
      featuredProject: "Casablanca Finance City: International business district with tax incentives, achieving $20-25 psm for Grade A with multinational tenants",
      sectorAnalysis: {
        office: "Casablanca CBD and Casablanca Finance City achieving $18-22 psm for Grade A with limited new supply",
        retail: "Morocco Mall and Casablanca Marina commanding $20-25 psm with 85% occupancy, luxury brands expanding",
        industrial: "Tangier Med and Casablanca logistics with yields of 8-9%, automotive sector driving demand",
        residential: "Anfa and Ain Diab achieving $2,000-3,000 psm with rental yields of 5-6%"
      },
      legalFramework: "Law 18-88 on Investment Charter, Casablanca Finance City status, Industrial Acceleration Zones, 2023 Investment Reform Law streamlining permits",
      investmentThesis: "Morocco offers the most sophisticated real estate market in North Africa with Casablanca Finance City positioning as the continent's financial hub. The automotive sector integration (Renault, Stellantis) creates industrial real estate demand with long-term lease characteristics. For UHNWI investors, Morocco provides Eurozone proximity and Francophone African access. The PwC analysis of ESG integration is particularly relevant: Morocco's renewable energy leadership (Noor Ouarzazate solar complex) enables green building certification that commands premiums in European investor mandates."
    },
    {
      name: "Tanzania",
      flag: "🇹🇿",
      region: "East Africa",
      gdp: "4.8%",
      inflation: "4.2%",
      gdpPerCapita: "$1,100",
      institutionalDemand: "Growing - Mining, Tourism & Regional Trade",
      primeYields: "8.0-9.5%",
      marketSize: "$2.1B annual transactions",
      challenges: "Infrastructure gaps in power and logistics, regulatory changes affecting mining sector, bureaucratic complexity in land acquisition",
      opportunities: "Dar es Salaam CBD redevelopment with Kariakoo and Ilala regeneration, mining logistics serving gold and nickel sectors, Zanzibar tourism and hospitality",
      featuredProject: "Dar es Salaam Port City: Mixed-use development adjacent to port expansion, integrating logistics, warehousing and trade facilities with 12% IRR potential",
      sectorAnalysis: {
        office: "Dar es Salaam CBD and Oyster Bay achieving $10-14 psm for Grade A with diplomatic and NGO demand",
        retail: "Mlimani City and Dar Free Market commanding $12-16 psm with 80% occupancy, formal retail expanding",
        industrial: "Tanga and Mtwara logistics with yields of 9-10%, mining sector driving warehousing demand",
        residential: "Masaki and Oyster Bay achieving $1,200-1,800 psm with rental yields of 7-8%"
      },
      legalFramework: "Land Act 1999, Tanzania Investment Act 1997, Export Processing Zones Act 2002, Public-Private Partnership Act 2010",
      investmentThesis: "Tanzania's real estate market benefits from political stability and resource sector growth, yet underperforms regional peers in institutional transparency. The 4.2% inflation rate—lowest in East Africa—provides macroeconomic stability. For institutional investors, the opportunity lies in the gap between Tanzania's economic scale (6th largest in Africa) and real estate market maturity. The Dar es Salaam port expansion and SGR railway create infrastructure externalities that will drive industrial and logistics demand over the next decade. The strategic entry: long-dated land positions in corridor nodes before infrastructure completion."
    },
    {
      name: "Zambia",
      flag: "🇿🇲",
      region: "Southern Africa",
      gdp: "4.2%",
      inflation: "8.8%",
      gdpPerCapita: "$1,300",
      institutionalDemand: "Moderate - Copper Value Chain & Agriculture",
      primeYields: "8.5-10.0%",
      marketSize: "$600M annual transactions",
      challenges: "Copper price dependency affecting foreign exchange, debt burden limiting fiscal space for infrastructure, political transition uncertainty",
      opportunities: "Lusaka CBD regeneration with government relocation, mining logistics serving Copperbelt, agriculture processing in growth corridors",
      featuredProject: "Lusaka Central Business District: Office and retail redevelopment targeting 15% IRR through mixed-use density and parking optimization",
      sectorAnalysis: {
        office: "Lusaka CBD achieving $8-12 psm for refurbished stock, new Grade A limited",
        retail: "Manda Hill and Levy Junction commanding $12-15 psm with 75% occupancy, formal retail underdeveloped",
        industrial: "Lusaka South Multi-Facility Economic Zone with yields of 9-11%, copper logistics dominant",
        residential: "Kabulonga and Jesmondine achieving $800-1,200 psm with rental yields of 8-9%"
      },
      legalFramework: "Lands Act 1995, Zambia Development Agency Act 2006, Public-Private Partnership Act 2009, Property Transfer Tax Act",
      investmentThesis: "Zambia's real estate market tracks the copper cycle with 70% of export earnings and 30% of government revenue derived from mining. The current copper price strength ($9,000+/tonne) and First Quantum's Kansanshi expansion create positive externalities. For institutional investors, the value proposition is contrarian: yields of 8.5-10% in a dollarized economy with English common law. The risk-adjusted return profile favors industrial and logistics over residential or retail given the mining sector's wage bill. The Deloitte construction outlook suggests infrastructure spending will accelerate post-2025 debt restructuring."
    },
    {
      name: "Zimbabwe",
      flag: "🇿🇼",
      region: "Southern Africa",
      gdp: "3.5%",
      inflation: "192.7%",
      gdpPerCapita: "$1,500",
      institutionalDemand: "Limited - Reform Dependent & Diaspora Capital",
      primeYields: "12.0-15.0%",
      marketSize: "$200M formal transactions",
      challenges: "Hyperinflation eroding real returns, political risk and sanctions limiting institutional capital, currency instability with parallel market premiums",
      opportunities: "Harare CBD recovery with suburban office boom, Victoria Falls tourism and hospitality, special economic zones with dollar-denominated leases",
      featuredProject: "Harare Central Business District: Post-reform redevelopment opportunities in 40-60% vacant CBD stock with suburban office arbitrage potential",
      sectorAnalysis: {
        office: "Suburban offices (Borrowdale, Mount Pleasant) achieving $12-15 psm with 90-100% occupancy, CBD at $6-10 psm with 40-60% vacancy",
        retail: "Sam Levy's Village and Westgate commanding $17-25 psm with 80%+ occupancy, informal trader integration",
        industrial: "Workington and Graniteside with yields of 10-12%, power supply issues driving tenant costs",
        residential: "Borrowdale and Helensvale achieving $500-800 psm with rental yields of 12-15% in hard currency"
      },
      legalFramework: "Land Acquisition Act (amended), Special Economic Zones Act 2016, Zimbabwe Investment and Development Agency Act 2019, Mines and Minerals Act",
      investmentThesis: "Zimbabwe represents the highest-risk, highest-return frontier in African real estate with yields of 12-15% reflecting the illiquidity and currency premiums. The Knight Frank data reveals a bifurcated market: suburban offices commanding premiums over the CBD due to infrastructure failures (power, water, congestion). For UHNWI investors with risk tolerance and operational capability, Zimbabwe offers distressed asset opportunities at 30-40% of replacement cost. The strategic framework: hard currency leases (USD or ZiG), suburban locations with independent infrastructure, and short hold periods pending macroeconomic stabilization. This is not a market for passive capital—it requires active asset management and local partnerships."
    }
  ]

  const macroTrends = [
    {
      title: "The ESG Imperative in African Real Estate",
      source: "PwC Global Sustainability Survey 2025",
      insight: "Over 85% of African institutional investors now mandate ESG compliance in real estate allocations, with green building certification commanding 8-12% rent premiums and 10% higher occupancy rates according to Knight Frank. The transition to sustainable stock is accelerating, driven by European capital deployment requirements and domestic regulatory pressure.",
      implication: "Investors must prioritize assets with green certification (EDGE, LEED, Green Star) or clear retrofit pathways. Secondary stock without ESG credentials faces accelerating obsolescence."
    },
    {
      title: "Institutional Liquidity Concentration",
      source: "McKinsey Africa Real Estate Practice 2025",
      insight: "Nairobi, Lagos, Johannesburg, and Cairo account for 78% of institutional-grade transactions in Africa. This concentration creates price discovery efficiency but also correlation risk. Secondary cities (Kigali, Accra, Dar es Salaam) offer 150-200 basis point yield premiums but require longer hold periods and active management.",
      implication: "Portfolio construction should balance liquidity (core markets) with yield enhancement (growth markets). The optimal allocation: 60% primary cities, 40% secondary growth corridors."
    },
    {
      title: "Demographic Urbanization Tailwinds",
      source: "Kenya Bureau of Statistics 2025 Economic Survey",
      insight: "Africa's urban population will double to 1.1 billion by 2050, requiring $2.5 trillion in real estate investment. Kenya's real estate sector grew 5.7% in Q3 2025, contributing 8.1% to GDP. The housing deficit stands at 2 million units with 61% of urban dwellers in informal settlements.",
      implication: "The demographic imperative creates structural demand for affordable housing, logistics, and retail. Investors should focus on income-producing assets serving the emerging middle class ($2-10 daily income)."
    },
    {
      title: "Currency and Inflation Hedging Strategies",
      source: "Harvard Business Review: Managing Emerging Market Real Estate Risk",
      insight: "Currency volatility remains the primary risk cited by 74% of institutional investors in African real estate. Effective hedging requires dollar-denominated leases (where market permits), inflation escalation clauses, and hard currency debt structures. Assets with natural hedges (tourism, export-oriented logistics) demonstrate lower volatility.",
      implication: "Lease structuring is as critical as asset selection. Triple-net leases with dollar denomination, annual CPI escalation, and maintenance pass-throughs protect real returns in high-inflation environments."
    },
    {
      title: "The Logistics and E-Commerce Revolution",
      source: "Deloitte Africa Construction Outlook 2025",
      insight: "E-commerce growth of 25% annually is driving demand for modern warehousing and last-mile logistics. Special Economic Zones in Kenya, Nigeria, and Egypt are creating new industrial nodes with tax incentives and infrastructure support. Industrial yields of 9-12% outperform office and retail in most markets.",
      implication: "Industrial and logistics should comprise 40-50% of African real estate allocations, up from 20% historically. Focus on nodes with port/airport access and SEZ status."
    },
    {
      title: "Regulatory Harmonization and Risk Mitigation",
      source: "MarketingSherpa Kenya Property Investor Sentiment Survey 2025",
      insight: "Regulatory risk remains the top concern for 74% of investors, yet markets with consistent land administration (Rwanda, Botswana) attract premium capital flows. The trend toward digitization of land registries (Nairobi, Lagos, Kigali) reduces transaction friction and title risk.",
      implication: "Prioritize markets with digitized land registries and independent judiciary enforcement of property rights. The cost of legal due diligence is high but essential—budget 2-3% of acquisition cost for comprehensive title verification."
    }
  ]

  const strategicFrameworks = [
    {
      title: "The Barbell Strategy",
      description: "Allocate capital between defensive, income-generating assets in mature markets (South Africa, Botswana) and high-growth development opportunities in emerging markets (Rwanda, Ghana). This balances current yield with capital appreciation while managing correlation risk.",
      allocation: "40% Core-Plus (SA, Botswana), 40% Value-Add (Kenya, Nigeria, Ghana), 20% Opportunistic (Rwanda, Tanzania, Zambia)"
    },
    {
      title: "The Sector Rotation Model",
      description: "Rotate between asset classes based on economic cycle positioning. Current cycle favors industrial/logistics (late expansion) and selective residential (affordable housing). Office sector requires caution due to hybrid work trends except in supply-constrained nodes.",
      allocation: "Industrial/Logistics 45%, Residential (affordable) 30%, Retail (experiential) 15%, Office (Grade A only) 10%"
    },
    {
      title: "The Sovereign Risk Ladder",
      description: "Construct portfolios across the risk spectrum from investment-grade (Botswana, Mauritius) to high-yield frontier (Zimbabwe, DRC). Each tier requires different return hurdles and operational intensity.",
      allocation: "Investment Grade 30%, Emerging 50%, Frontier 20%"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation Breadcrumb */}
      <div className="bg-[#1B4332] text-[#B8956B] py-3 border-b border-[#B8956B]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center text-sm tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">MURIVEST</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/research" className="hover:text-white transition-colors">INTELLIGENCE</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white/80">COUNTRY FOCUS</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#1B4332] text-[#FAF9F6] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#1B4332]/95 to-[#2D5A47]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <div className="h-px w-12 bg-[#B8956B] mr-4" />
              <span className="text-[#B8956B] font-serif text-lg tracking-widest uppercase">African Market Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Sovereign Real Estate
              <span className="block font-medium text-white mt-2">Investment Atlas</span>
            </h1>
            
            <p className="text-xl text-[#FAF9F6]/80 mb-12 leading-relaxed font-light max-w-3xl">
              Institutional-grade market intelligence across twelve African nations. Synthesizing data from 
              Knight Frank, Kenya Bureau of Statistics, McKinsey, PwC, Deloitte, and Harvard Business Review 
              to guide UHNWI capital deployment decisions.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {marketOverview.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-[#B8956B]/20 rounded-lg p-6 hover:border-[#B8956B]/40 transition-all duration-500"
                >
                  <div className="text-3xl font-light text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-[#B8956B] mb-1 uppercase tracking-wider">{metric.label}</div>
                  <div className="text-xs text-[#FAF9F6]/60">{metric.trend}</div>
                  <div className="text-xs text-[#FAF9F6]/40 mt-2 italic">{metric.source}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-xl">
                  <Briefcase className="mr-3 h-5 w-5" />
                  Schedule Sovereign Consultation
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/research">
                <button className="border-2 border-[#B8956B]/50 hover:border-[#B8956B] text-[#B8956B] px-8 py-4 font-medium text-lg transition-all duration-300 flex items-center justify-center">
                  <Download className="mr-3 h-5 w-5" />
                  Download Full Atlas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-white border-b border-[#1B4332]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-[#B8956B] mr-3" />
                <span className="text-[#1B4332] font-serif text-sm tracking-widest uppercase">Executive Summary</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-[#1B4332] mb-8 leading-tight">
                The Institutional Case for African Real Estate Allocation
              </h2>
              
              <div className="prose prose-lg max-w-none text-[#2C3E35] leading-relaxed space-y-6">
                <p>
                  According to Knight Frank's 2024/25 Africa Report, over 95% of African markets have fully rebounded from the COVID-19 pandemic, with most now matching pre-pandemic figures in transactions, prime rents, and average yields across major real estate sectors. This recovery is not merely cyclical—it represents structural maturation as institutional capital recognizes the demographic imperative: Africa's population of 1.3 billion will double to 2.8 billion by 2050, creating unprecedented demand for housing, office space, logistics infrastructure, and retail formats.
                </p>
                
                <p>
                  The Kenya Bureau of Statistics confirms this trajectory with Q3 2025 data showing real estate growing 5.7% and contributing 8.1% to GDP, while construction rebounded 6.7% after a 2024 contraction. McKinsey's Africa Real Estate Practice 2025 identifies Nairobi as one of only four Sub-Saharan cities with institutional-grade liquidity—facilitating price discovery and exit strategies unavailable in thinner markets. This liquidity concentration creates both opportunity and constraint: while core markets offer efficiency, yield compression has driven sophisticated investors to secondary cities where 150-200 basis point premiums compensate for operational complexity.
                </p>

                <p>
                  PwC's 2025 Global Sustainability Survey reveals that 85% of institutional investors now mandate ESG compliance, with green-certified buildings commanding 8-12% rent premiums and 10% higher occupancy rates. This ESG imperative intersects with Deloitte's construction outlook showing $3.02 trillion in planned projects across Africa, with renewable energy and sustainable infrastructure dominating pipelines. The Harvard Business Review framework of "adaptive persistence" applies: successful African real estate investment requires long-term commitment with operational flexibility to navigate regulatory, currency, and infrastructure volatility.
                </p>

                <p>
                  MarketingSherpa's 2025 Kenya Property Investor Sentiment Survey of 847 institutional and individual investors reveals cautious optimism: 68% expect 4-7% capital value growth over 12 months, while 74% cite regulatory risk as their principal concern. This risk-return profile—high current yields (7.5-12%) with moderate capital appreciation—aligns with UHNWI portfolio construction principles: African real estate provides income generation, inflation hedging, and low correlation to developed market cycles.
                </p>
              </div>

              <div className="mt-8 p-6 bg-[#1B4332]/5 border-l-4 border-[#B8956B]">
                <p className="text-[#1B4332] font-medium italic">
                  "The convergence of demographic tailwinds, infrastructure development, and institutional market maturation creates a generational opportunity for patient capital. The question is not whether to allocate to African real estate, but how to structure that allocation for optimal risk-adjusted returns."
                </p>
                <p className="text-sm text-[#2C3E35]/60 mt-2">— Murivest Investment Committee, 2025</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#1B4332] text-[#FAF9F6] p-8 rounded-lg sticky top-8">
                <h3 className="text-xl font-medium mb-6 text-[#B8956B]">Strategic Allocation Framework</h3>
                <div className="space-y-6">
                  <div className="border-b border-[#B8956B]/20 pb-4">
                    <div className="text-3xl font-light text-white mb-1">40%</div>
                    <div className="text-sm text-[#B8956B] uppercase tracking-wider mb-2">Core-Plus</div>
                    <div className="text-sm text-[#FAF9F6]/70">South Africa, Botswana — Stable income, ESG compliance, liquidity</div>
                  </div>
                  <div className="border-b border-[#B8956B]/20 pb-4">
                    <div className="text-3xl font-light text-white mb-1">40%</div>
                    <div className="text-sm text-[#B8956B] uppercase tracking-wider mb-2">Value-Add</div>
                    <div className="text-sm text-[#FAF9F6]/70">Kenya, Nigeria, Ghana — Growth markets, yield enhancement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-white mb-1">20%</div>
                    <div className="text-sm text-[#B8956B] uppercase tracking-wider mb-2">Opportunistic</div>
                    <div className="text-sm text-[#FAF9F6]/70">Rwanda, Tanzania, Zambia — Frontier returns, active management</div>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full mt-8 bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] py-3 font-medium transition-all duration-300">
                    Discuss Your Allocation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Trends Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-[#B8956B] mr-4" />
              <span className="text-[#B8956B] font-serif text-sm tracking-widest uppercase">Institutional Intelligence</span>
              <div className="h-px w-12 bg-[#B8956B] ml-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1B4332] mb-6">
              Macro Trends Shaping African Real Estate
            </h2>
            <p className="text-xl text-[#2C3E35]/70 max-w-3xl mx-auto font-light">
              Synthesis of Knight Frank, McKinsey, PwC, Deloitte, and Harvard Business Review research informing institutional strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {macroTrends.map((trend, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-[#1B4332]/10 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-5 w-5 text-[#B8956B] mr-2" />
                  <span className="text-xs text-[#B8956B] uppercase tracking-wider">{trend.source}</span>
                </div>
                <h3 className="text-xl font-medium text-[#1B4332] mb-4 leading-tight">{trend.title}</h3>
                <p className="text-[#2C3E35]/80 text-sm leading-relaxed mb-4">{trend.insight}</p>
                <div className="pt-4 border-t border-[#1B4332]/10">
                  <p className="text-xs text-[#1B4332] font-medium uppercase tracking-wider mb-1">Strategic Implication</p>
                  <p className="text-sm text-[#2C3E35]/70 italic">{trend.implication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-[#1B4332] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Access Proprietary Market Intelligence
          </h2>
          <p className="text-lg text-[#FAF9F6]/80 mb-8 leading-relaxed">
            Murivest clients receive quarterly sovereign risk assessments, yield tracking across 12 markets, 
            and early access to off-market institutional opportunities. Our research synthesizes Knight Frank, 
            KNBS, McKinsey, and primary market data unavailable in public reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] px-8 py-4 font-medium text-lg transition-all duration-300">
                Join Our Intelligence Network
              </button>
            </Link>
            <Link href="/research">
              <button className="border-2 border-[#B8956B]/50 hover:border-[#B8956B] text-[#B8956B] px-8 py-4 font-medium text-lg transition-all duration-300">
                View Sample Report
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Country Deep Dives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-[#B8956B] mr-3" />
              <span className="text-[#B8956B] font-serif text-sm tracking-widest uppercase">Country Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1B4332] mb-6">
              Sovereign Market Snapshots
            </h2>
            <p className="text-xl text-[#2C3E35]/70 max-w-3xl mx-auto font-light">
              Detailed intelligence for CEOs, pension trustees, and family offices evaluating African real estate deployment.
            </p>
          </div>

          <div className="space-y-12">
            {countries.map((country, index) => (
              <div key={index} className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-500">
                {/* Country Header */}
                <div className="bg-[#1B4332] text-[#FAF9F6] p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <span className="text-5xl mr-4">{country.flag}</span>
                      <div>
                        <h3 className="text-3xl font-light text-white">{country.name}</h3>
                        <span className="text-[#B8956B] text-sm uppercase tracking-wider">{country.region}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-light text-[#B8956B]">{country.primeYields}</div>
                        <div className="text-xs text-[#FAF9F6]/60 uppercase tracking-wider">Prime Yields</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-light text-white">{country.gdp}</div>
                        <div className="text-xs text-[#FAF9F6]/60 uppercase tracking-wider">GDP Growth</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/10 rounded p-3">
                      <span className="text-[#B8956B] block text-xs uppercase tracking-wider mb-1">Inflation</span>
                      <span className="text-white font-medium">{country.inflation}</span>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <span className="text-[#B8956B] block text-xs uppercase tracking-wider mb-1">GDP/Capita</span>
                      <span className="text-white font-medium">{country.gdpPerCapita}</span>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <span className="text-[#B8956B] block text-xs uppercase tracking-wider mb-1">Market Size</span>
                      <span className="text-white font-medium">{country.marketSize}</span>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <span className="text-[#B8956B] block text-xs uppercase tracking-wider mb-1">Institutional Demand</span>
                      <span className="text-white font-medium text-xs">{country.institutionalDemand}</span>
                    </div>
                  </div>
                </div>

                {/* Country Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Investment Thesis */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-[#1B4332] mb-3 flex items-center">
                          <Target className="h-5 w-5 text-[#B8956B] mr-2" />
                          Investment Thesis
                        </h4>
                        <p className="text-[#2C3E35]/80 leading-relaxed text-sm">{country.investmentThesis}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg border border-[#1B4332]/10">
                          <h5 className="text-sm font-medium text-[#1B4332] mb-2 flex items-center">
                            <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                            Key Opportunities
                          </h5>
                          <p className="text-sm text-[#2C3E35]/70 leading-relaxed">{country.opportunities}</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-[#1B4332]/10">
                          <h5 className="text-sm font-medium text-[#1B4332] mb-2 flex items-center">
                            <Shield className="h-4 w-4 text-amber-600 mr-2" />
                            Risk Factors
                          </h5>
                          <p className="text-sm text-[#2C3E35]/70 leading-relaxed">{country.challenges}</p>
                        </div>
                      </div>

                      {/* Sector Analysis */}
                      <div>
                        <h4 className="text-lg font-medium text-[#1B4332] mb-4 flex items-center">
                          <Building className="h-5 w-5 text-[#B8956B] mr-2" />
                          Sector Analysis
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {Object.entries(country.sectorAnalysis).map(([sector, analysis]) => (
                            <div key={sector} className="bg-white p-4 rounded-lg border border-[#1B4332]/10">
                              <span className="text-xs text-[#B8956B] uppercase tracking-wider font-medium block mb-2">
                                {sector.charAt(0).toUpperCase() + sector.slice(1)}
                              </span>
                              <p className="text-sm text-[#2C3E35]/80 leading-relaxed">{analysis}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Legal Framework */}
                      <div className="bg-[#1B4332]/5 p-5 rounded-lg border-l-4 border-[#B8956B]">
                        <h5 className="text-sm font-medium text-[#1B4332] mb-2 flex items-center">
                          <Landmark className="h-4 w-4 text-[#B8956B] mr-2" />
                          Legal & Regulatory Framework
                        </h5>
                        <p className="text-sm text-[#2C3E35]/70 leading-relaxed">{country.legalFramework}</p>
                      </div>
                    </div>

                    {/* Featured Project Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="bg-[#1B4332] text-[#FAF9F6] p-6 rounded-lg sticky top-8">
                        <div className="flex items-center mb-4">
                          <Award className="h-5 w-5 text-[#B8956B] mr-2" />
                          <span className="text-[#B8956B] text-xs uppercase tracking-wider">Featured Opportunity</span>
                        </div>
                        <h4 className="text-lg font-medium text-white mb-4 leading-tight">
                          {country.featuredProject.split(':')[0]}
                        </h4>
                        <p className="text-sm text-[#FAF9F6]/80 leading-relaxed mb-6">
                          {country.featuredProject.split(':')[1] || country.featuredProject}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#FAF9F6]/60">Target IRR</span>
                            <span className="text-[#B8956B] font-medium">12-18%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#FAF9F6]/60">Investment Horizon</span>
                            <span className="text-white">5-7 Years</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#FAF9F6]/60">Minimum Ticket</span>
                            <span className="text-white">$2.5M</span>
                          </div>
                        </div>

                        <Link href="/contact">
                          <button className="w-full bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] py-3 font-medium transition-all duration-300 text-sm">
                            Request Investment Memorandum
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Frameworks */}
      <section className="py-24 bg-[#1B4332] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-[#B8956B] mr-4" />
              <span className="text-[#B8956B] font-serif text-sm tracking-widest uppercase">Portfolio Construction</span>
              <div className="h-px w-12 bg-[#B8956B] ml-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Strategic Allocation Frameworks
            </h2>
            <p className="text-xl text-[#FAF9F6]/70 max-w-3xl mx-auto font-light">
              Three proven approaches to African real estate portfolio construction based on risk tolerance and return objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategicFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-[#B8956B]/20 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-light text-[#B8956B] mb-4">{framework.title}</h3>
                <p className="text-[#FAF9F6]/80 leading-relaxed mb-6 text-sm">{framework.description}</p>
                <div className="pt-6 border-t border-[#B8956B]/20">
                  <p className="text-xs text-[#B8956B] uppercase tracking-wider mb-3">Recommended Allocation</p>
                  <p className="text-sm text-white">{framework.allocation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <button className="bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] px-10 py-4 font-medium text-lg transition-all duration-300 inline-flex items-center group">
                <Users className="mr-3 h-5 w-5" />
                Discuss Your Strategic Allocation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-[#B8956B] mr-3" />
                <span className="text-[#B8956B] font-serif text-sm tracking-widest uppercase">Implementation</span>
              </div>
              
              <h2 className="text-4xl font-light text-[#1B4332] mb-8 leading-tight">
                The Murivest Execution Protocol
              </h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332] text-[#B8956B] rounded-full flex items-center justify-center font-medium text-lg mr-6">1</div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1B4332] mb-2">Sovereign Risk Assessment</h4>
                    <p className="text-[#2C3E35]/70 leading-relaxed">
                      Comprehensive due diligence spanning political stability, currency convertibility, land tenure systems, and regulatory enforcement. We engage local legal counsel and sovereign risk insurers to quantify and mitigate jurisdictional exposure.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332] text-[#B8956B] rounded-full flex items-center justify-center font-medium text-lg mr-6">2</div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1B4332] mb-2">Asset Identification & Validation</h4>
                    <p className="text-[#2C3E35]/70 leading-relaxed">
                      Access to off-market opportunities through our network of developers, distressed sellers, and government privatization programs. Independent valuation using both comparable transactions and discounted cash flow methodologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332] text-[#B8956B] rounded-full flex items-center justify-center font-medium text-lg mr-6">3</div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1B4332] mb-2">Structure & Capital Stack Optimization</h4>
                    <p className="text-[#2C3E35]/70 leading-relaxed">
                      Tailored investment structures optimizing tax efficiency, repatriation pathways, and governance rights. Local currency vs. hard currency denomination based on asset cash flow characteristics and investor hedging requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332] text-[#B8956B] rounded-full flex items-center justify-center font-medium text-lg mr-6">4</div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1B4332] mb-2">Active Asset Management</h4>
                    <p className="text-[#2C3E35]/70 leading-relaxed">
                      On-ground property management ensuring ESG compliance, tenant retention, and value-add execution. Quarterly reporting with Knight Frank benchmark comparisons and macroeconomic scenario analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-[#1B4332]/10">
              <h3 className="text-2xl font-light text-[#1B4332] mb-6">Why Institutional Investors Choose Murivest</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#B8956B] rounded-full mt-2 mr-4" />
                  <div>
                    <h4 className="font-medium text-[#1B4332] mb-1">Proprietary Market Intelligence</h4>
                    <p className="text-sm text-[#2C3E35]/70">Direct data partnerships with Knight Frank, Kenya Bureau of Statistics, and local land registries provide transaction evidence unavailable to generalist investors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#B8956B] rounded-full mt-2 mr-4" />
                  <div>
                    <h4 className="font-medium text-[#1B4332] mb-1">Local Operating Partners</h4>
                    <p className="text-sm text-[#2C3E35]/70">Vetted property managers, legal counsel, and construction supervisors in each target market ensuring execution capability without the overhead of owned operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#B8956B] rounded-full mt-2 mr-4" />
                  <div>
                    <h4 className="font-medium text-[#1B4332] mb-1">Institutional Governance</h4>
                    <p className="text-sm text-[#2C3E35]/70">Independent investment committee, quarterly valuation by Big Four auditors, and compliance with IFC Performance Standards on ESG.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#B8956B] rounded-full mt-2 mr-4" />
                  <div>
                    <h4 className="font-medium text-[#1B4332] mb-1">Alignment of Interests</h4>
                    <p className="text-sm text-[#2C3E35]/70">Significant co-investment by Murivest principals on every transaction. No deal fees—compensation solely through performance-based carried interest.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#1B4332]/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#2C3E35]/60">Assets Under Advisory</span>
                  <span className="text-2xl font-light text-[#1B4332]">$340M</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#2C3E35]/60">Average Gross IRR</span>
                  <span className="text-2xl font-light text-[#1B4332]">16.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#2C3E35]/60">Investor Retention</span>
                  <span className="text-2xl font-light text-[#1B4332]">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1B4332] text-[#FAF9F6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-[#B8956B] mr-4" />
            <span className="text-[#B8956B] font-serif text-lg tracking-widest uppercase">Begin Your African Allocation</span>
            <div className="h-px w-16 bg-[#B8956B] ml-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            The Time for African Real Estate
            <span className="block text-[#B8956B] mt-2">Is Now</span>
          </h2>
          
          <p className="text-xl text-[#FAF9F6]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            The convergence of demographic tailwinds, infrastructure development, and institutional market maturation 
            creates a generational opportunity. Murivest provides the intelligence, access, and execution capability 
            to deploy capital with confidence across the continent's most compelling markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/contact">
              <button className="bg-[#B8956B] hover:bg-[#9A7B5A] text-[#1B4332] px-10 py-5 font-medium text-lg transition-all duration-300 flex items-center justify-center group shadow-2xl">
                <Briefcase className="mr-3 h-6 w-6" />
                Schedule Confidential Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/research">
              <button className="border-2 border-[#B8956B] hover:bg-[#B8956B] hover:text-[#1B4332] text-[#B8956B] px-10 py-5 font-medium text-lg transition-all duration-300">
                Download Complete Atlas
              </button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-sm border-t border-[#B8956B]/20 pt-12">
            <div>
              <div className="text-[#B8956B] mb-2 uppercase tracking-wider text-xs">Nairobi</div>
              <div className="text-white">Westlands Business Park</div>
              <div className="text-[#FAF9F6]/60">5th Floor, Wing A</div>
            </div>
            <div>
              <div className="text-[#B8956B] mb-2 uppercase tracking-wider text-xs">London</div>
              <div className="text-white">Mayfair Office</div>
              <div className="text-[#FAF9F6]/60">By appointment only</div>
            </div>
            <div>
              <div className="text-[#B8956B] mb-2 uppercase tracking-wider text-xs">Dubai</div>
              <div className="text-white">DIFC Representative Office</div>
              <div className="text-[#FAF9F6]/60">Gate Village</div>
            </div>
          </div>

          <div className="mt-12 text-xs text-[#FAF9F6]/40 max-w-2xl mx-auto">
            <p className="mb-4">
              Disclaimer: This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products. Past performance is not indicative of future results. Investments in African real estate involve significant risks including currency fluctuation, political instability, and liquidity constraints. Please consult with qualified legal, tax, and financial advisors before making any investment decisions.
            </p>
            <p>
              Data sources: Knight Frank Africa Report 2024/25, Kenya Bureau of Statistics Economic Survey 2025, McKinsey Africa Real Estate Practice 2025, PwC Global Sustainability Survey 2025, Deloitte Africa Construction Outlook 2025, Harvard Business Review Emerging Market Strategy Framework, MarketingSherpa Kenya Property Investor Sentiment Survey 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}