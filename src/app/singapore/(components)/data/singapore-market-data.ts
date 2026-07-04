/**
 * SINGAPORE COMMERCIAL REAL ESTATE — INSTITUTIONAL MARKET DATA
 * ================================================================
 * All figures sourced from CBRE, JLL, Savills, URA, and MAS.
 * Last updated: Q2 2026
 * 
 * Sources:
 * - CBRE Singapore Office Market Report Q1 2026
 * - Savills Singapore Office Briefing Q2 2025
 * - URA Master Plan 2025 / CBD Incentive Scheme 2.0
 * - MAS Monetary Policy Statement 2026
 * - SGX REIT Data (March 2026)
 */

// ─── Design Tokens (Old Money Aesthetic) ─────────────────────────────────────

export const COLORS = {
  forest: '#1B4332',
  forestLight: '#2D5A45',
  forestDark: '#0D1F17',
  cream: '#F8F7F4',
  creamDark: '#F5F4F0',
  creamCard: '#FAF9F6',
  brass: '#B8956B',
  brassLight: '#C9A87C',
  brassDark: '#8B7355',
  charcoal: '#2C2C2C',
  charcoalLight: '#5A5A5A',
  stone: '#8B8680',
  border: '#E8E6E1',
  borderLight: '#E5E2DC',
  white: '#FFFFFF',
} as const;

// ─── Typography Scale ────────────────────────────────────────────────────────

export const TYPOGRAPHY = {
  headline: "font-serif",
  body: "font-sans",
  accent: "font-serif",
  data: "font-mono",
} as const;

// ─── Market Snapshot Data (Q2 2026) ─────────────────────────────────────────

export const MARKET_SNAPSHOT = {
  gradeAVacancyRate: 5.3, // % — CBRE Q1 2026
  averageCBDRent: 12.40, // S$ psf/month — CBRE Q1 2026
  cbdRentGrowthYoY: 2.1, // % — CBRE
  totalInvestmentVolume: 364, // % YoY increase Q1 2026 — CBRE
  sReitMarketCap: 100, // S$ billion — SGX March 2026
  gradeACapRateLow: 3.25, // % — CBRE March 2026
  gradeACapRateHigh: 3.80, // % — CBRE March 2026
  retailCapRateLow: 4.35, // % — CBRE March 2026
  retailCapRateHigh: 5.00, // % — CBRE March 2026
  logisticsCapRateLow: 5.50, // % — CBRE March 2026
  logisticsCapRateHigh: 6.50, // % — CBRE March 2026
  hospitalityCapRateLow: 3.60, // % — CBRE March 2026
  hospitalityCapRateHigh: 4.20, // % — CBRE March 2026
  soraRate: 3.05, // % — MAS March 2026
  gdpGrowth2026: 2.8, // % — MAS forecast
  inflationRate: 2.1, // % — MAS
  transactionVolumeQ1: 5.2, // S$ billion — CBRE
} as const;

// ─── CBD Micro-Market Data (Savills Q2 2025 / CBRE Q1 2026) ─────────────────

export interface MicroMarket {
  name: string;
  slug: string;
  gradeARent: number; // S$ psf/month
  vacancyRate: number; // %
  trend: 'rising' | 'stable' | 'falling';
  description: string;
  highlights: string[];
  coordinates: { lat: number; lng: number };
}

export const CBD_MICRO_MARKETS: MicroMarket[] = [
  {
    name: 'Marina Bay',
    slug: 'marina-bay',
    gradeARent: 13.00,
    vacancyRate: 11.1,
    trend: 'rising',
    description: 'Singapore\'s premier trophy asset district. Home to Asia Square, MBFC, and OUE Bayfront. The Marina Bay Financial Centre has delivered over 10 years of institutional-grade returns. Premium Grade AAA stock commands S$13.00+ psf/month.',
    highlights: [
      'Trophy asset concentration — highest rents in Singapore',
      'IOI Central Boulevard Towers ~90% committed as of Q3 2025',
      'Limited new supply until 2028',
      'Strong demand from banking, tech, and sovereign entities',
    ],
    coordinates: { lat: 1.2789, lng: 103.8540 },
  },
  {
    name: 'Raffles Place',
    slug: 'raffles-place',
    gradeARent: 10.16,
    vacancyRate: 7.5,
    trend: 'stable',
    description: 'The historic financial heart of Singapore. Dense concentration of banking HQs and financial institutions. Grade AAA buildings like OUB Centre, UOB Plaza, and Republic Plaza define the skyline.',
    highlights: [
      'Banking and finance HQ cluster',
      'Direct MRT connectivity (Raffles Place interchange)',
      'Heritage buildings alongside modern Grade A stock',
      'Consistent institutional demand',
    ],
    coordinates: { lat: 1.2842, lng: 103.8510 },
  },
  {
    name: 'Shenton Way',
    slug: 'shenton-way',
    gradeARent: 9.04,
    vacancyRate: 4.3,
    trend: 'rising',
    description: 'The "Wall Street of Singapore" with a rejuvenation pipeline driven by the CBD Incentive Scheme. Lower vacancy than Raffles Place indicates strong absorption and limited supply.',
    highlights: [
      'Lowest vacancy among major CBD sub-markets (4.3%)',
      'CBDI Scheme driving mixed-use redevelopment',
      'Keppel South Central (only CBD completion in Q1 2025)',
      'Strong transport links via Downtown Line',
    ],
    coordinates: { lat: 1.2750, lng: 103.8460 },
  },
  {
    name: 'Tanjong Pagar',
    slug: 'tanjong-pagar',
    gradeARent: 8.66,
    vacancyRate: 11.2,
    trend: 'stable',
    description: 'Historic district undergoing significant rejuvenation. Guoco Tower anchors the precinct, with The Skywaters (formerly Fuji Xerox Towers) representing the next wave of CBDI-driven redevelopment.',
    highlights: [
      'Guoco Tower — 290m mixed-use landmark',
      'The Skywaters — upcoming tallest building in SE Asia',
      'CBDI 2.0 enabling residential/hotel conversion',
      'Tanjong Pagar MRT (East-West + future CRL)',
    ],
    coordinates: { lat: 1.2730, lng: 103.8430 },
  },
  {
    name: 'City Hall / Beach Road',
    slug: 'beach-road',
    gradeARent: 10.42,
    vacancyRate: 2.2,
    trend: 'rising',
    description: 'The tightest sub-market with vacancy at just 2.2%. Guoco Midtown and South Beach Tower have transformed the precinct into a vibrant live-work-play destination.',
    highlights: [
      'Lowest vacancy rate in Singapore CBD (2.2%)',
      'Guoco Midtown — 1.2M sq ft integrated development',
      'City Hall MRT interchange',
      'Rapid gentrification with retail and hospitality injection',
    ],
    coordinates: { lat: 1.2930, lng: 103.8560 },
  },
  {
    name: 'Orchard Road',
    slug: 'orchard',
    gradeARent: 8.98,
    vacancyRate: 1.6,
    trend: 'stable',
    description: 'Singapore\'s premier retail corridor with select commercial office stock. Vacancy at just 1.6% — effectively full occupancy. Retail rents command S$27.80+ psf/month (2025).',
    highlights: [
      'Effectively full occupancy (1.6% vacancy)',
      'Premium retail — S$27.80 psf/month average rents',
      'Mixed-use redevelopment under SDI Scheme',
      'Ion Orchard, Ngee Ann City, Paragon anchors',
    ],
    coordinates: { lat: 1.3048, lng: 103.8318 },
  },
];

// ─── District Overview Data ──────────────────────────────────────────────────

export interface District {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  tagline: string;
  description: string;
  keyStats: { label: string; value: string }[];
  uraHighlights: string[];
  investmentThesis: string;
  riskFactors: string[];
  coordinates: { lat: number; lng: number };
}

export const DISTRICTS: District[] = [
  {
    name: 'Marina Bay / Marina Centre',
    slug: 'marina-bay',
    tier: 1,
    tagline: 'Trophy Assets. Premium Returns. Limited Supply.',
    description: 'Singapore\'s most prestigious commercial district. Marina Bay Financial Centre, Asia Square, and MBFC Tower 3 represent the pinnacle of Grade A office stock. Grade AAA rents at S$13.00+ psf/month with vacancy at 11.1% — elevated due to IOI Central Boulevard Towers absorption, but trending down.',
    keyStats: [
      { label: 'Grade A Rent', value: 'S$13.00+' },
      { label: 'Vacancy Rate', value: '11.1%' },
      { label: 'Supply Pipeline', value: 'Limited until 2028' },
      { label: 'Cap Rate Range', value: '3.25% – 3.80%' },
    ],
    uraHighlights: [
      'White site releases for mixed-use development',
      'Marina Bay Sands expansion adding retail/hospitality demand',
      'CRL Marina South station (2030) enhancing connectivity',
    ],
    investmentThesis: 'The concentration of trophy assets, limited new supply, and sustained demand from banking and sovereign entities position Marina Bay as Singapore\'s most defensive office market. Cap rate compression potential of 25-50bps over 2026-2028.',
    riskFactors: [
      'Elevated vacancy from new completions (IOI CBD Towers)',
      'Geopolitical risk affecting banking sector expansion',
      'Premium pricing limits entry for new investors',
    ],
    coordinates: { lat: 1.2789, lng: 103.8540 },
  },
  {
    name: 'Raffles Place / Shenton Way / Robinson Road',
    slug: 'raffles-place',
    tier: 1,
    tagline: 'The Financial Heart. Banking HQs. Institutional Core.',
    description: 'The historic CBD core with the densest concentration of banking headquarters and financial institutions. CBD Incentive Scheme 2.0 is enabling selective redevelopment of older stock into mixed-use assets, creating value-add opportunities.',
    keyStats: [
      { label: 'Grade A Rent', value: 'S$9.86 avg' },
      { label: 'Core CBD Vacancy', value: '5.3%' },
      { label: 'Rent Growth (YoY)', value: '+2.1%' },
      { label: 'Cap Rate Range', value: '3.25% – 3.80%' },
    ],
    uraHighlights: [
      'CBDI Scheme 2.0 allows up to 25-30% bonus GFA',
      'Mandatory serviced apartment provision in Anson/Cecil',
      'Sustainability Statement required for all proposals',
      'Scheme valid until 06 February 2030',
    ],
    investmentThesis: 'The CBDI 2.0 scheme creates a compelling redevelopment opportunity for owners of 20+ year old buildings. Anson and Cecil Street areas offer the most attractive conversion economics, with residential/hotel yield premiums over pure office.',
    riskFactors: [
      'Development charge costs for intensification',
      'Construction cost inflation affecting project feasibility',
      'Lease expiry timing for conversion projects',
    ],
    coordinates: { lat: 1.2842, lng: 103.8510 },
  },
  {
    name: 'Tanjong Pagar',
    slug: 'tanjong-pagar',
    tier: 1,
    tagline: 'Historic District. Rejuvenation Pipeline. Value-Add.',
    description: 'A district in transformation. Guoco Tower proved the mixed-use thesis, and The Skywaters (formerly Fuji Xerox Towers) will become Southeast Asia\'s tallest building. CBDI 2.0 supports residential and hotel conversion, creating 24/7 activation.',
    keyStats: [
      { label: 'Grade A Rent', value: 'S$8.66' },
      { label: 'Vacancy Rate', value: '11.2%' },
      { label: 'Supply Pipeline', value: '1.5M+ sq ft' },
      { label: 'Rent Growth Forecast', value: '+3-4% (2026)' },
    ],
    uraHighlights: [
      'The Skywaters — 305m, 63 storeys, completion ~2028',
      'Newport Plaza — CBDI-supported mixed-use development',
      'Tanjong Pagar MRT + future CRL interchange',
      'Anson-Tanjong Pagar: 1,100+ new homes planned',
    ],
    investmentThesis: 'The highest vacancy in the CBD (11.2%) is a near-term challenge but creates entry-point opportunities. The rejuvenation pipeline will fundamentally reshape the district\'s demand profile. Best value-add play in the Singapore CBD.',
    riskFactors: [
      'Elevated vacancy from shadow stock',
      'Construction disruption during redevelopment',
      'Higher capex for heritage-sensitive redevelopment',
    ],
    coordinates: { lat: 1.2730, lng: 103.8430 },
  },
  {
    name: 'Beach Road / Bugis',
    slug: 'beach-road',
    tier: 2,
    tagline: 'Guoco Midtown Effect. Live-Work-Play. Tight Supply.',
    description: 'The most transformed CBD precinct in recent years. Guoco Midtown and South Beach Tower have created a vibrant mixed-use cluster. Vacancy at just 2.2% — the tightest in Singapore. No major new supply planned.',
    keyStats: [
      { label: 'Grade A Rent', value: 'S$10.42' },
      { label: 'Vacancy Rate', value: '2.2%' },
      { label: 'YoY Rent Growth', value: '+1.1%' },
      { label: 'Supply Pipeline', value: 'Minimal' },
    ],
    uraHighlights: [
      'Guoco Midtown — 1.2M sq ft NLA, 95%+ occupancy',
      'Stamford Place flex workspace expansion (H2 2026)',
      'Direct CRL connection (2030)',
    ],
    investmentThesis: 'The "Guoco Midtown effect" has proven that integrated mixed-use developments command rent premiums and sustain near-zero vacancy. Beach Road offers the most supply-constrained investment case in Singapore.',
    riskFactors: [
      'Limited acquisition opportunities (tight supply)',
      'Premium pricing reflecting scarcity value',
      'Dependent on continued tenant flight-to-quality',
    ],
    coordinates: { lat: 1.2930, lng: 103.8560 },
  },
  {
    name: 'Orchard Road',
    slug: 'orchard',
    tier: 2,
    tagline: 'Premier Retail. Luxury Positioning. Full Occupancy.',
    description: 'Singapore\'s iconic retail boulevard with select Grade A commercial stock. Office vacancy at 1.6% — effectively zero available space. Retail rents averaging S$27.80 psf/month (2025), among Asia\'s highest.',
    keyStats: [
      { label: 'Office Vacancy', value: '1.6%' },
      { label: 'Retail Rent', value: 'S$27.80 psf/mo' },
      { label: 'Grade A Rent', value: 'S$8.98' },
      { label: 'Cap Rate Range', value: '4.35% – 5.00%' },
    ],
    uraHighlights: [
      'Strategic Development Incentive (SDI) Scheme for Orchard',
      'Orchard Road Transformation Plan — pedestrianization',
      'Mixed-use redevelopment of older commercial buildings',
    ],
    investmentThesis: 'The rare combination of effectively zero office vacancy and premium retail positioning makes Orchard a unique defensive play. SDI Scheme 2.0 enables value-add through strategic redevelopment.',
    riskFactors: [
      'Retail sector structural challenges from e-commerce',
      'High entry prices reflecting scarcity',
      'Tourism volatility affecting retail performance',
    ],
    coordinates: { lat: 1.3048, lng: 103.8318 },
  },
  {
    name: 'Paya Lebar Central',
    slug: 'paya-lebar',
    tier: 2,
    tagline: 'URA Growth Area. Decentralisation Play. 10-15 Year Horizon.',
    description: 'One of URA\'s designated growth areas, positioned as an alternative commercial node to the CBD. Paya Lebar Green achieved full occupancy in 2025 following Visa\'s relocation. Vacancy in decentralised locations fell to 6.5% in Q3 2025.',
    keyStats: [
      { label: 'Decentralised Vacancy', value: '6.5%' },
      { label: 'Paya Lebar Green', value: '100% Occupied' },
      { label: 'MRT Connectivity', value: 'EWL + CCL Interchange' },
      { label: 'URA Status', value: 'Growth Area' },
    ],
    uraHighlights: [
      'Paya Lebar Central Master Plan — commercial/retail hub',
      'PLQ Mall + Paya Lebar Square retail ecosystem',
      'Direct 15-min access to CBD via EWL',
    ],
    investmentThesis: 'Paya Lebar represents the highest-conviction decentralisation play in Singapore. Full occupancy at Paya Lebar Green validates demand. Lower entry prices than CBD with comparable rental growth trajectory.',
    riskFactors: [
      'Longer-term horizon required for full value realisation',
      'Competition from other decentralisation nodes',
      'Dependent on continued URA infrastructure investment',
    ],
    coordinates: { lat: 1.3170, lng: 103.8930 },
  },
  {
    name: 'Jurong Lake District',
    slug: 'jurong-lake-district',
    tier: 3,
    tagline: 'The Second CBD. 7.8M sqm. The Next Growth Frontier.',
    description: 'Singapore\'s most ambitious decentralisation project. 7.8 million sqm of new commercial space planned. The new High-Speed Rail terminus (if revived) and Jurong East MRT interchange provide regional connectivity.',
    keyStats: [
      { label: 'Planned Commercial', value: '7.8M sqm' },
      { label: 'Timeline', value: '2040+ full build-out' },
      { label: 'HSR Connection', value: 'Potential terminus' },
      { label: 'Jurong East MRT', value: 'NSL + EWL' },
    ],
    uraHighlights: [
      'Jurong Lake District Master Plan — Singapore\'s largest development',
      'Lendlease Global Commercial REIT — Jem office sale S$462M',
      'JTC\'s Jurong Innovation District — advanced manufacturing hub',
      'Tuas Mega Port relocation freeing up waterfront land',
    ],
    investmentThesis: 'The largest structural growth story in Singapore real estate. Early land acquisition in the JLD precinct offers asymmetric return potential. Best suited for patient capital with 15-20 year horizons.',
    riskFactors: [
      'Very long development horizon (15-20 years)',
      'Execution risk on infrastructure delivery',
      'Demand uncertainty for decentralised office at this scale',
    ],
    coordinates: { lat: 1.3330, lng: 103.7430 },
  },
  {
    name: 'Greater Southern Waterfront',
    slug: 'greater-southern-waterfront',
    tier: 3,
    tagline: '30-Year Masterplan. Waterfront Living. Keppel-Brani Relocation.',
    description: 'A 30-year vision to transform Singapore\'s southern coastline from Keppel to Pasir Panjang. The relocation of Keppel and Brani port terminals will free up 2,000 hectares — six times the size of Marina Bay.',
    keyStats: [
      { label: 'Total Land Area', value: '2,000 hectares' },
      { label: 'Timeline', value: '30-year masterplan' },
      { label: 'Size vs Marina Bay', value: '6x larger' },
      { label: 'Port Relocation', value: '2040s completion' },
    ],
    uraHighlights: [
      'Keppel Club site — first GSW parcel released',
      'Brani Terminal relocation to Tuas Mega Port',
      'Southern Corridor MRT line (long-term plan)',
      'Greater Southern Waterfront Park — 5km continuous waterfront',
    ],
    investmentThesis: 'The most ambitious urban transformation project in Singapore\'s history. Early positioning through the Keppel Club site and surrounding precincts offers generational wealth creation potential for patient capital.',
    riskFactors: [
      '30+ year investment horizon required',
      'Dependent on port relocation timeline',
      'Macroeconomic and policy shifts over multi-decade period',
    ],
    coordinates: { lat: 1.2650, lng: 103.8230 },
  },
];

// ─── Property Type Definitions ───────────────────────────────────────────────

export const PROPERTY_TYPES = [
  { value: 'grade-a-office', label: 'Grade A Office', icon: 'Building2' },
  { value: 'strata-office', label: 'Strata Office', icon: 'Layers' },
  { value: 'retail', label: 'Retail', icon: 'Star' },
  { value: 'mixed-use', label: 'Mixed-Use', icon: 'Blend' },
  { value: 'industrial', label: 'Industrial / Logistics', icon: 'Factory' },
  { value: 'shophouse', label: 'Conservation Shophouse', icon: 'Landmark' },
  { value: 'land', label: 'Development Land', icon: 'Trees' },
] as const;

// ─── Investment Thesis Pillars ───────────────────────────────────────────────

export const INVESTMENT_THESIS = [
  {
    title: 'Political Stability',
    subtitle: 'AAA Sovereign Rating. Rule of Law. Policy Continuity.',
    description: 'Singapore maintains the only AAA sovereign credit rating in Asia across all major agencies (S&P, Moody\'s, Fitch). The World Bank consistently ranks Singapore #1 for ease of doing business in Asia. Property rights are constitutionally protected, and the legal framework for commercial real estate is among the most transparent globally.',
    icon: 'Shield',
    stats: [
      { label: 'S&P Rating', value: 'AAA' },
      { label: 'Corruption Index', value: '#5 Globally' },
      { label: 'Rule of Law', value: '#1 Asia' },
    ],
  },
  {
    title: 'Supply Constraint',
    subtitle: 'Limited Land. Controlled Pipeline. Structural Scarcity.',
    description: 'Singapore\'s land area of 734 sq km is smaller than New York City. The government controls land supply through the GLS (Government Land Sales) programme, ensuring no oversupply. Core CBD Grade A vacancy at 5.3% — below the 8% equilibrium level. No major new CBD office supply until 2028 (Shaw Tower).',
    icon: 'Lock',
    stats: [
      { label: 'CBD Vacancy', value: '5.3%' },
      { label: 'New Supply (2026-28)', value: 'Minimal' },
      { label: 'Land Control', value: 'State Monopoly' },
    ],
  },
  {
    title: 'Currency Strength',
    subtitle: 'SGD Appreciation. Safe Haven. Institutional Reserve Currency.',
    description: 'The Singapore Dollar has appreciated against every major Asian currency over the past decade. MAS operates a managed float against an undisclosed trade-weighted basket, ensuring stability. For USD-based investors, SGD-denominated assets provide both yield and currency appreciation.',
    icon: 'TrendingUp',
    stats: [
      { label: 'SGD/USD (10yr)', value: '+12.3%' },
      { label: 'FX Reserve', value: 'S$420B+' },
      { label: 'MAS Policy', value: 'Appreciation Bias' },
    ],
  },
] as const;

// ─── Trust Signals / Credentials ─────────────────────────────────────────────

export const TRUST_SIGNALS = {
  transactionVolume: 'S$2.8B+',
  yearsExperience: '15+',
  institutionalClients: '120+',
  countriesCovered: '12',
  testimonials: [
    {
      quote: 'Murivest\'s Singapore advisory team demonstrated an institutional-grade understanding of the CBD office market. Their due diligence framework and transaction execution matched the standard we expect from global investment banks.',
      author: 'Chief Investment Officer',
      company: 'Sovereign Wealth Fund (Middle East)',
      type: 'Family Office',
    },
    {
      quote: 'The depth of their URA Master Plan analysis and CBD Incentive Scheme structuring was exceptional. They identified a value-add opportunity in Tanjong Pagar that three other advisors missed entirely.',
      author: 'Investment Committee Chair',
      company: 'European Family Office',
      type: 'Family Office',
    },
    {
      quote: 'We have transacted over S$400M in Singapore commercial real estate through Murivest. Their market intelligence, off-market deal flow, and execution capability are best-in-class.',
      author: 'Managing Director',
      company: 'Global Asset Manager (AUM S$15B)',
      type: 'Institutional',
    },
  ],
  partners: [
    'CBRE Research Partner',
    'Savills Institutional Network',
    'JLL Capital Markets Alliance',
    'Knight Frank Asia Pacific',
  ],
} as const;

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    title: 'Acquisition Advisory',
    slug: 'acquisition',
    tagline: 'Buy the Right Asset. At the Right Price. With the Right Structure.',
    description: 'End-to-end acquisition advisory for institutional investors deploying capital into Singapore commercial real estate. From investment thesis validation to closing, we represent your interests at every stage.',
    features: [
      'Off-market deal sourcing through proprietary network',
      'Investment committee-grade due diligence',
      'Financial modelling: IRR, NPV, sensitivity analysis',
      'Entity structuring for tax efficiency (Singapore company, VCC, REIT)',
      'Negotiation and SPA review',
      'Debt advisory and refinancing',
    ],
    process: ['Investment Mandate', 'Market Scan', 'Shortlist & Teaser', 'Due Diligence', 'IC Paper', 'Negotiation', 'Closing'],
  },
  {
    title: 'Disposition Advisory',
    slug: 'disposition',
    tagline: 'Maximise Value. Minimise Risk. Control the Narrative.',
    description: 'Institutional-grade sell-side advisory for owners divesting Singapore commercial assets. We create competitive tension, manage confidentiality, and optimise transaction structure to maximise net proceeds.',
    features: [
      'Valuation and pricing strategy',
      'Confidential marketing (no public listing)',
      'Investor targeting: SWFs, REITs, family offices',
      'Data room preparation and management',
      'Bid process management',
      'Transaction execution and handover',
    ],
    process: ['Valuation', 'Strategy', 'Teaser/CIM', 'Investor Outreach', 'Data Room', 'Bids & Negotiation', 'Closing'],
  },
  {
    title: 'Asset Management',
    slug: 'asset-management',
    tagline: 'Protect Value. Grow Income. Extend Asset Life.',
    description: 'Active asset management for institutional owners of Singapore commercial real estate. We optimise NOI, manage tenant relationships, and execute value-add initiatives to enhance total returns.',
    features: [
      'Property management oversight and benchmarking',
      'Lease restructuring and tenant retention',
      'Capex planning and ROI analysis',
      'ESG compliance and Green Mark certification',
      'Rent review and reversion analysis',
      'Exit planning and timing optimisation',
    ],
    process: ['Asset Review', 'Business Plan', 'Implementation', 'Monthly Reporting', 'Quarterly Review', 'Annual Revaluation', 'Exit Strategy'],
  },
  {
    title: 'Portfolio Advisory',
    slug: 'portfolio-advisory',
    tagline: 'Strategic Allocation. Risk Management. Performance Optimisation.',
    description: 'Strategic portfolio advisory for institutional investors and family offices with Singapore real estate exposure. We provide allocation recommendations, risk analysis, and performance benchmarking.',
    features: [
      'Portfolio strategy and allocation modelling',
      'Sector and geographic diversification analysis',
      'Risk-adjusted return benchmarking vs S-REITs',
      'Rebalancing and capital recycling strategies',
      'Cross-border structuring (Singapore + other Murivest markets)',
      'ESG integration and impact reporting',
    ],
    process: ['Portfolio Audit', 'Strategy Paper', 'Scenario Modelling', 'Board Presentation', 'Implementation', 'Quarterly Review', 'Annual Strategy Refresh'],
  },
] as const;

// ─── SEO Metadata Templates ──────────────────────────────────────────────────

export const SEO_TEMPLATES = {
  home: {
    title: 'Singapore Commercial Real Estate Investment | Grade A Office & Retail — Murivest',
    description: 'Singapore\'s premier institutional commercial real estate advisory. Grade A office, retail, and mixed-use properties for UHNWI, family offices, and sovereign wealth funds. Market intelligence and discreet transaction execution.',
    keywords: 'singapore commercial property, grade a office singapore, singapore commercial real estate investment, marina bay office, raffles place property',
  },
  properties: {
    title: 'Singapore Commercial Property for Sale | Grade A Office, Retail, Mixed-Use — Murivest',
    description: 'Curated institutional-grade commercial properties in Singapore. Grade A office, strata office, retail, mixed-use, shophouse, and development land. Filter by district, type, price, and yield.',
    keywords: 'singapore commercial property for sale, grade a office singapore, singapore office space investment, singapore retail property',
  },
  insights: {
    title: 'Singapore Commercial Real Estate Market Intelligence & Research — Murivest',
    description: 'Institutional-grade market reports, investment insights, and regulatory updates for Singapore commercial real estate. Written by senior advisors for UHNWI and institutional investors.',
    keywords: 'singapore commercial real estate market report, singapore office market, singapore property investment guide',
  },
  about: {
    title: 'About Murivest Singapore | Institutional Real Estate Advisory',
    description: 'Murivest is Singapore\'s leading institutional commercial real estate advisory, serving UHNWI, family offices, and sovereign wealth funds since 2015.',
    keywords: 'murivest singapore, commercial real estate advisory singapore, institutional property advisor',
  },
  services: {
    title: 'Commercial Real Estate Advisory Services | Acquisition, Disposition, Asset Management — Murivest',
    description: 'Institutional-grade advisory services for Singapore commercial real estate: acquisition, disposition, asset management, and portfolio advisory.',
    keywords: 'singapore commercial real estate advisory, property acquisition singapore, asset management singapore',
  },
  contact: {
    title: 'Contact Murivest Singapore | Private Consultation Request',
    description: 'Schedule a private consultation with Murivest\'s Singapore investment advisory team. Discreet service for UHNWI, family offices, and institutional investors.',
    keywords: 'contact murivest singapore, commercial real estate advisor singapore, property investment consultation',
  },
  market: {
    title: 'Singapore Commercial Property Market Overview 2026 | District Analysis — Murivest',
    description: 'Comprehensive Singapore commercial real estate market overview. District-by-district analysis of Marina Bay, Raffles Place, Tanjong Pagar, Orchard, and emerging areas.',
    keywords: 'singapore commercial property market, singapore cbd office rent 2026, singapore office vacancy rate',
  },
  portal: {
    title: 'Investor Portal | Exclusive Singapore Real Estate Opportunities — Murivest',
    description: 'Gated investor portal providing access to exclusive off-market Singapore commercial real estate opportunities, deal documents, and portfolio analytics.',
    keywords: 'singapore real estate investor portal, off market property singapore, institutional property deals',
  },
} as const;

// ─── Animation Config ────────────────────────────────────────────────────────

export const ANIMATION = {
  easing: [0.16, 1, 0.3, 1] as [number, number, number, number],
  duration: 0.8,
  durationFast: 0.4,
  durationSlow: 1.2,
  stagger: 0.1,
} as const;

// ─── Singapore Macro Data ────────────────────────────────────────────────────

export const SINGAPORE_MACRO = {
  gdp2026: 'S$560B (est)',
  population: '6.05M',
  population2030: '6.5M (projected)',
  employmentRate: '97.3%',
  cpiInflation: '2.1%',
  sora: '3.05%',
  sgdUsd: '1.34',
  fxReserves: 'S$420B+',
  sovereignRating: 'AAA (S&P, Moody\'s, Fitch)',
  easeOfBusiness: '#1 Asia',
  corruptionIndex: '#5 Global',
} as const;

// ─── URA Master Plan 2025 Key Points ─────────────────────────────────────────

export const URA_MASTER_PLAN_2025 = [
  {
    title: 'CBDI Scheme 2.0',
    description: 'Extended to 06 February 2030 with enhanced sustainability requirements. Allows up to 25-30% bonus GFA for qualifying mixed-use redevelopments.',
    impact: 'High',
    districts: ['Anson', 'Cecil Street', 'Robinson Road', 'Shenton Way', 'Tanjong Pagar'],
  },
  {
    title: 'SDI Scheme 2.0',
    description: 'Strategic Development Incentive for Orchard Road, CBD Fringe, and Marina Centre. Minimum 2 adjacent sites required. Adaptive reuse now recognised as positive public contribution.',
    impact: 'Medium-High',
    districts: ['Orchard Road', 'Marina Centre', 'Beach Road'],
  },
  {
    title: 'Greater Southern Waterfront',
    description: '2,000 hectares — six times Marina Bay. 30-year masterplan to transform Singapore\'s southern coastline. Keppel and Brani port terminals relocating to Tuas.',
    impact: 'Very High (Long-term)',
    districts: ['Keppel', 'Brani', 'Tanjong Pagar Terminal'],
  },
  {
    title: 'Jurong Lake District',
    description: 'Singapore\'s largest development project at 7.8M sqm of commercial space. Second CBD vision with HSR terminus potential. Full build-out by 2040+.',
    impact: 'High (Long-term)',
    districts: ['Jurong East', 'Jurong Lake'],
  },
  {
    title: 'Paya Lebar Central',
    description: 'Designated growth area and alternative commercial node. Paya Lebar Green fully occupied. Ongoing URA infrastructure investment.',
    impact: 'Medium',
    districts: ['Paya Lebar', 'MacPherson'],
  },
  {
    title: 'Cross Island Line (CRL)',
    description: 'Singapore\'s longest MRT line at 50km+. Phase 1 opens 2030. Key stations: Marina South, Jurong Lake District, Aviation Park.',
    impact: 'High',
    districts: ['Marina South', 'Jurong', 'Changi'],
  },
] as const;

// ─── S-REIT Market Data ──────────────────────────────────────────────────────

export const SREIT_DATA = {
  totalReits: 39,
  marketCap: 'S$100B',
  percentageOfSGX: 10, // %
  averageYield: '5.5% – 6.3%',
  yieldSpread: '4.0%+',
  dpuGrowthCAGR: '4.2% (mid-cap)',
  totalReturnForecast: '7% – 10.4%',
  keySectors: ['Office', 'Retail', 'Industrial', 'Hospitality', 'Data Centre'],
} as const;

// ─── Property Listings (Sample) ─────────────────────────────────────────────

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  address: string;
  district: string;
  propertyType: string;
  status: 'available' | 'under-offer' | 'coming-soon';
  price: string;
  priceNumeric: number;
  psf: number;
  sizeSqft: number;
  sizeSqm: number;
  yield: number;
  capRate: number;
  occupancyRate: number;
  description: string;
  highlights: string[];
  features: string[];
  images: string[];
  floorPlans: string[];
  documents: { name: string; type: string; gated: boolean }[];
  coordinates: { lat: number; lng: number };
  nearbyMRT: string[];
  yearBuilt: number;
  lastRefurbished: number;
  wale: number; // Weighted Average Lease Expiry
  anchorTenant?: string;
  brokerName: string;
  brokerEmail: string;
  brokerPhone: string;
  featured: boolean;
  dateListed: string;
}

export const SAMPLE_PROPERTIES: PropertyListing[] = [
  {
    id: 'prop-001',
    slug: 'asia-square-tower-1-marina-bay',
    title: 'Asia Square Tower 1',
    address: '8 Marina View, Singapore 018960',
    district: 'marina-bay',
    propertyType: 'grade-a-office',
    status: 'available',
    price: 'S$485,000,000',
    priceNumeric: 485000000,
    psf: 2800,
    sizeSqft: 173214,
    sizeSqm: 16090,
    yield: 4.8,
    capRate: 3.45,
    occupancyRate: 94,
    description: 'Trophy Grade AAA office tower in the heart of Marina Bay. Asia Square Tower 1 is one of Singapore\'s most recognisable commercial landmarks, offering panoramic views of Marina Bay and the CBD. The asset has consistently delivered institutional-grade returns with long-tenured tenants including major banking and professional services firms.',
    highlights: [
      'Grade AAA — highest specification office in Singapore',
      '94% occupancy with WALE of 4.2 years',
      'Direct Marina Bay MRT connectivity (NSL, CCL, TEL)',
      'Green Mark Platinum certified',
      'Part of integrated development with retail (Marina Square)',
    ],
    features: [
      'Floor plates: 21,000 – 24,000 sq ft',
      'Ceiling height: 2.8m clear',
      '24/7 building access with security',
      '1,200+ car park lots',
      'End-of-trip facilities with showers and lockers',
    ],
    images: ['/properties/asia-square-1.jpg'],
    floorPlans: ['/floorplans/asia-square-l29.pdf'],
    documents: [
      { name: 'Investment Memorandum', type: 'PDF', gated: true },
      { name: 'Tenancy Schedule', type: 'PDF', gated: true },
      { name: 'Building Specification', type: 'PDF', gated: false },
    ],
    coordinates: { lat: 1.2789, lng: 103.8540 },
    nearbyMRT: ['Marina Bay (NS27/CE2/TE20)', 'Downtown (DT17)', 'Raffles Place (NS26/EW14)'],
    yearBuilt: 2011,
    lastRefurbished: 2023,
    wale: 4.2,
    anchorTenant: 'Major International Bank',
    brokerName: 'James Worthington',
    brokerEmail: 'singapore@murivest.com',
    brokerPhone: '+65 6123 4567',
    featured: true,
    dateListed: '2026-05-15',
  },
  {
    id: 'prop-002',
    slug: 'one-raffles-place-tower-2',
    title: 'One Raffles Place Tower 2',
    address: '1 Raffles Place, Singapore 048616',
    district: 'raffles-place',
    propertyType: 'grade-a-office',
    status: 'available',
    price: 'S$320,000,000',
    priceNumeric: 320000000,
    psf: 2950,
    sizeSqft: 108474,
    sizeSqm: 10078,
    yield: 4.2,
    capRate: 3.65,
    occupancyRate: 97,
    description: 'One Raffles Place Tower 2 is a premier Grade A office building located at the epicentre of Singapore\'s financial district. Connected to Raffles Place MRT interchange and surrounded by the headquarters of major international banks. The asset offers rare single-ownership scale in the most liquid commercial market in Southeast Asia.',
    highlights: [
      '97% occupancy — effectively full',
      'Direct underground connection to Raffles Place MRT',
      'Raffles Place retail podium at podium level',
      'Recently upgraded lobby and common areas (2024)',
    ],
    features: [
      'Efficient floor plates: 14,000 – 16,000 sq ft',
      'Raised flooring system throughout',
      'Dedicated lift lobby for tenant floors',
      'Secure bicycle parking with showers',
      'Smart building management system',
    ],
    images: ['/properties/one-raffles-place-2.jpg'],
    floorPlans: ['/floorplans/orp-t2-l15.pdf'],
    documents: [
      { name: 'Investment Memorandum', type: 'PDF', gated: true },
      { name: 'Tenancy Schedule', type: 'PDF', gated: true },
    ],
    coordinates: { lat: 1.2842, lng: 103.8510 },
    nearbyMRT: ['Raffles Place (NS26/EW14)', 'Telok Ayer (DT18)'],
    yearBuilt: 2000,
    lastRefurbished: 2024,
    wale: 3.8,
    brokerName: 'Victoria Chen',
    brokerEmail: 'singapore@murivest.com',
    brokerPhone: '+65 6123 4568',
    featured: true,
    dateListed: '2026-05-20',
  },
  {
    id: 'prop-003',
    slug: 'guoco-tower-tanjong-pagar',
    title: 'Guoco Tower (Office Component)',
    address: '1 Wallich Street, Singapore 078881',
    district: 'tanjong-pagar',
    propertyType: 'grade-a-office',
    status: 'available',
    price: 'S$620,000,000',
    priceNumeric: 620000000,
    psf: 2650,
    sizeSqft: 233962,
    sizeSqm: 21736,
    yield: 4.5,
    capRate: 3.25,
    occupancyRate: 92,
    description: 'Singapore\'s tallest building at 290 metres. Guoco Tower is a landmark integrated development comprising Grade A offices, luxury residences (Wallich Residence), a hotel (Sofitel Singapore City Centre), and retail. The office component benefits from Tanjong Pagar MRT direct connectivity and CBDI-driven district rejuvenation.',
    highlights: [
      '290m — Singapore\'s tallest building',
      'Direct Tanjong Pagar MRT (EWL + CRL future)',
      'Integrated with Sofitel hotel and Wallich Residence',
      'CBDI 2.0 supports district-wide rejuvenation',
    ],
    features: [
      'Floor plates: 18,000 – 22,000 sq ft',
      'Ceiling height: 3.0m clear (premium)',
      'Private lift access for select floors',
      'Sky gardens and wellness facilities',
      'LEED Gold certified',
    ],
    images: ['/properties/guoco-tower.jpg'],
    floorPlans: ['/floorplans/guoco-tower-l40.pdf'],
    documents: [
      { name: 'Investment Memorandum', type: 'PDF', gated: true },
      { name: 'Tenancy Schedule', type: 'PDF', gated: true },
      { name: 'Building Brochure', type: 'PDF', gated: false },
    ],
    coordinates: { lat: 1.2730, lng: 103.8430 },
    nearbyMRT: ['Tanjong Pagar (EW15)', 'Maxwell (TE18)', 'Shenton Way (TE19)'],
    yearBuilt: 2016,
    lastRefurbished: 2024,
    wale: 5.1,
    anchorTenant: 'GuocoLand Group',
    brokerName: 'James Worthington',
    brokerEmail: 'singapore@murivest.com',
    brokerPhone: '+65 6123 4567',
    featured: true,
    dateListed: '2026-05-10',
  },
  {
    id: 'prop-004',
    slug: 'conservation-shophouse-craig-road',
    title: 'Conservation Shophouse — Craig Road',
    address: '47 Craig Road, Singapore 089685',
    district: 'tanjong-pagar',
    propertyType: 'shophouse',
    status: 'available',
    price: 'S$28,500,000',
    priceNumeric: 28500000,
    psf: 4750,
    sizeSqft: 6000,
    sizeSqm: 557,
    yield: 3.2,
    capRate: 3.8,
    occupancyRate: 100,
    description: 'A beautifully conserved three-storey shophouse in the heart of Tanjong Pagar\'s dining precinct. Fully leased to F&B operators with strong covenant strength. Conservation status provides development restriction but also scarcity value — no new shophouses can be built.',
    highlights: [
      'Conservation status — irreplaceable asset',
      '100% occupied by established F&B tenants',
      'Craig Road — prime dining destination',
      '3-minute walk to Tanjong Pagar MRT',
    ],
    features: [
      'Three storeys + attic',
      'Original facade preserved',
      'Modern kitchen infrastructure',
      'Outdoor dining allowance (URA approved)',
      'Rarely available freehold tenure',
    ],
    images: ['/properties/craig-road-shophouse.jpg'],
    floorPlans: [],
    documents: [
      { name: 'Investment Summary', type: 'PDF', gated: false },
    ],
    coordinates: { lat: 1.2780, lng: 103.8420 },
    nearbyMRT: ['Tanjong Pagar (EW15)', 'Maxwell (TE18)'],
    yearBuilt: 1920,
    lastRefurbished: 2019,
    wale: 3.5,
    brokerName: 'Victoria Chen',
    brokerEmail: 'singapore@murivest.com',
    brokerPhone: '+65 6123 4568',
    featured: false,
    dateListed: '2026-05-25',
  },
  {
    id: 'prop-005',
    slug: 'ion-orchard-retail-podum',
    title: 'Ion Orchard — Select Retail Units',
    address: '2 Orchard Turn, Singapore 238801',
    district: 'orchard',
    propertyType: 'retail',
    status: 'under-offer',
    price: 'S$45,000,000',
    priceNumeric: 45000000,
    psf: 12000,
    sizeSqft: 3750,
    sizeSqm: 348,
    yield: 4.0,
    capRate: 4.35,
    occupancyRate: 100,
    description: 'Rare opportunity to acquire strata retail units within Singapore\'s premier luxury shopping mall. Ion Orchard commands the highest footfall in Singapore with direct Orchard MRT connectivity. Units are leased to luxury brands with long-term tenancies.',
    highlights: [
      'Ion Orchard — Singapore\'s #1 luxury mall',
      'Direct Orchard MRT (NS22/TE14) connectivity',
      '100% occupied by luxury retail tenants',
      'Strata title — flexible ownership structure',
    ],
    features: [
      'Level 1 and B1 units available',
      'High ceiling clearance (5.5m)',
      'Shared atrium and event space access',
      '24/7 security and concierge',
      'Valet parking service',
    ],
    images: ['/properties/ion-orchard.jpg'],
    floorPlans: [],
    documents: [
      { name: 'Investment Summary', type: 'PDF', gated: true },
      { name: 'Tenancy Schedule', type: 'PDF', gated: true },
    ],
    coordinates: { lat: 1.3048, lng: 103.8318 },
    nearbyMRT: ['Orchard (NS22/TE14)', 'Somerset (NS23)'],
    yearBuilt: 2009,
    lastRefurbished: 2023,
    wale: 4.5,
    brokerName: 'Victoria Chen',
    brokerEmail: 'singapore@murivest.com',
    brokerPhone: '+65 6123 4568',
    featured: false,
    dateListed: '2026-05-01',
  },
];

// ─── Research Articles (Sample) ─────────────────────────────────────────────

export interface ResearchArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Market Report' | 'Investment Insight' | 'Regulatory Update' | 'Sector Analysis';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  content?: string;
}

export const SAMPLE_ARTICLES: ResearchArticle[] = [
  {
    id: 'art-001',
    slug: 'singapore-commercial-real-estate-institutional-investor-playbook-2026',
    title: 'Singapore Commercial Real Estate: The Institutional Investor\'s Playbook for 2026',
    excerpt: 'A comprehensive 5,000-word guide covering macro context, district-by-district thesis, financial metrics, regulatory framework, entity structures, and due diligence checklist for institutional capital deployment into Singapore.',
    category: 'Market Report',
    author: 'James Worthington',
    authorRole: 'Senior Advisor, Singapore',
    date: '2026-06-15',
    readTime: '22 min read',
    featured: true,
    image: '/insights/singapore-playbook-2026.jpg',
    tags: ['singapore', 'institutional investment', 'grade a office', 'cbd', '2026 outlook'],
  },
  {
    id: 'art-002',
    slug: 'marina-bay-financial-centre-decade-institutional-returns',
    title: 'Marina Bay Financial Centre: A Decade of Institutional Returns',
    excerpt: 'Case study analysis of the Marina Bay Financial Centre\'s 10-year investment performance. Transaction history, tenant mix evolution, rental growth trajectory, and capital appreciation analysis for trophy office assets.',
    category: 'Investment Insight',
    author: 'Victoria Chen',
    authorRole: 'Head of Research, Singapore',
    date: '2026-06-10',
    readTime: '14 min read',
    featured: true,
    image: '/insights/mbfc-case-study.jpg',
    tags: ['marina bay', 'trophy assets', 'case study', 'returns analysis'],
  },
  {
    id: 'art-003',
    slug: 'singapore-cbd-incentive-scheme-63m-opportunity',
    title: 'Singapore\'s CBD Incentive Scheme: The S$63M Opportunity',
    excerpt: 'Deep dive into the CBDI 2.0 and SDI 2.0 schemes: eligible buildings, bonus GFA calculations, developer incentives, sustainability requirements, and the S$63M value creation opportunity for existing building owners.',
    category: 'Regulatory Update',
    author: 'David Lim',
    authorRole: 'Legal Advisor, Singapore',
    date: '2026-06-05',
    readTime: '11 min read',
    featured: true,
    image: '/insights/cbd-incentive-scheme.jpg',
    tags: ['ura', 'cbd incentive scheme', 'regulatory', 'redevelopment', 'gfa'],
  },
  {
    id: 'art-004',
    slug: 'singapore-grade-a-office-market-report-q2-2026',
    title: 'Singapore Grade A Office Market Report Q2 2026',
    excerpt: 'Comprehensive quarterly analysis: supply pipeline, demand drivers by sector, rent trajectory by submarket, vacancy forecast, yield compression analysis, and investment activity across the Singapore CBD.',
    category: 'Market Report',
    author: 'Victoria Chen',
    authorRole: 'Head of Research, Singapore',
    date: '2026-06-01',
    readTime: '18 min read',
    featured: false,
    image: '/insights/q2-2026-office-report.jpg',
    tags: ['market report', 'grade a office', 'cbd', 'rents', 'vacancy'],
  },
  {
    id: 'art-005',
    slug: 'family-office-singapore-real-estate-allocation',
    title: 'Family Office Real Estate Allocation: The Singapore Advantage',
    excerpt: 'Why Singapore is the preferred APAC real estate allocation for global family offices. Tax-efficient structures, VCC framework, political stability, and the S-REIT market as a liquidity mechanism.',
    category: 'Investment Insight',
    author: 'James Worthington',
    authorRole: 'Senior Advisor, Singapore',
    date: '2026-05-28',
    readTime: '12 min read',
    featured: false,
    image: '/insights/family-office-singapore.jpg',
    tags: ['family office', 'allocation', 'vcc', 's-reit', 'tax'],
  },
  {
    id: 'art-006',
    slug: 'six-strata-office-buildings-singapore',
    title: 'The 6 Grade A Strata Office Buildings You Can Actually Buy',
    excerpt: 'A definitive list of the only strata-titled Grade A office buildings available for purchase in Singapore. Ownership structures, price per square foot, rental yields, and investment considerations for each.',
    category: 'Sector Analysis',
    author: 'Victoria Chen',
    authorRole: 'Head of Research, Singapore',
    date: '2026-05-20',
    readTime: '9 min read',
    featured: false,
    image: '/insights/strata-office-guide.jpg',
    tags: ['strata office', 'investment guide', 'grade a', 'singapore'],
  },
];

// ─── FAQ Data ────────────────────────────────────────────────────────────────

export const FAQ_DATA = [
  {
    question: 'What is the minimum investment size for Singapore commercial real estate?',
    answer: 'For direct property acquisition, we typically advise a minimum of S$30M for Grade A office and S$10M for shophouse or smaller retail assets. For indirect exposure through S-REITs or fund structures, minimums can be as low as S$1M. Our advisory team can structure co-investment vehicles for smaller allocations.',
  },
  {
    question: 'Can foreign investors own commercial property in Singapore?',
    answer: 'Yes. Unlike residential property, commercial real estate in Singapore has no foreign ownership restrictions. Foreign individuals and entities can freely acquire commercial properties (office, retail, industrial, shophouse, land) without requiring government approval. Note that Additional Buyer\'s Stamp Duty (ABSD) does not apply to commercial property — only Buyer\'s Stamp Duty (BSD) is payable.',
  },
  {
    question: 'What stamp duty applies to commercial property purchases?',
    answer: 'Buyer\'s Stamp Duty (BSD) applies at tiered rates: 1% on first S$180,000, 2% on next S$180,000, 3% on next S$640,000, 4% on next S$500,000, 5% on next S$1.5M, and 6% on remaining amount. No ABSD or Seller\'s Stamp Duty applies to commercial property. Goods and Services Tax (GST) at 9% applies unless the seller is GST-registered and opts for GST treatment.',
  },
  {
    question: 'What entity structure is recommended for foreign investors?',
    answer: 'Most foreign institutional investors use a Singapore private limited company (Pte Ltd) or Variable Capital Company (VCC) structure. The VCC is particularly attractive for fund managers as it offers tax transparency, flexible capital structure, and confidentiality of shareholder information. We work with Singapore law firms to structure tax-efficient holding vehicles, often utilising tax treaties to minimise withholding tax on repatriated income.',
  },
  {
    question: 'What are typical gross yields for Singapore commercial property?',
    answer: 'As of Q2 2026, indicative gross yields range from 3.25-3.80% for Grade A CBD office, 4.35-5.00% for core retail, 5.50-6.50% for institutional logistics, and 3.60-4.20% for urban hotels. Net yields are typically 50-100bps lower after accounting for property tax, maintenance, management fees, and vacancy provisions.',
  },
  {
    question: 'How does the CBD Incentive Scheme 2.0 create value?',
    answer: 'The CBDI 2.0 Scheme allows owners of qualifying buildings (generally 20+ years old) in designated CBD areas to achieve up to 25-30% bonus Gross Floor Area (GFA) when redeveloping into mixed-use developments. This can unlock S$50-100M+ in additional development value for a typical CBD building. The scheme requires provision of residential or hotel uses and compliance with enhanced sustainability standards.',
  },
  {
    question: 'What financing options are available for commercial property acquisition?',
    answer: 'Singapore banks offer commercial property loans at SORA + 1.5-2.5% (approximately 4.5-5.5% all-in as of Q2 2026). Loan-to-value ratios typically range from 60-75% for investment-grade assets. Foreign investors may face slightly higher rates and lower LTV ratios. We maintain relationships with all major Singapore banks (DBS, OCBC, UOB) and can facilitate competitive financing terms.',
  },
  {
    question: 'What is the S-REIT market and how can I invest?',
    answer: 'Singapore has the largest REIT market in Asia (ex-Japan) with 39 S-REITs and property trusts trading on the SGX, with a combined market capitalization of approximately S$100 billion. S-REITs provide liquid, diversified exposure to Singapore and regional real estate with average yields of 5.5-6.3% and quarterly distributions. Most S-REITs are accessible through any brokerage account with SGX access.',
  },
];
