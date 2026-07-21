// lib/country-nav-config.ts
// ──────────────────────────────────────────────────────────────
// MURIVEST — INSTITUTIONAL COUNTRY NAVIGATION CONFIGURATION
// Harvard Business Review Editorial Format · Golf Club Lounge Aesthetic
// ──────────────────────────────────────────────────────────────

export interface MarketItem {
  label: string
  href: string
  sub?: string
}

export interface SectionItem {
  label: string
  href: string
  description?: string
  accent?: boolean
}

export interface CountryConfig {
  label: string
  shortLabel: string
  flag: string
  dateline: string
  regionTag: string
  listingCount: number
  
  // Tier 1 — Geographic markets (emirates, districts, cities)
  markets: MarketItem[]
  
  // Tier 2 — Functional sections (advisory, research, services)
  sections: SectionItem[]
  
  // Tier 3 — Quick access links (appear in dropdown overflow)
  quicklinks: { label: string; href: string }[]
  
  // SEO / Schema configuration
  seo: {
    hrefLang: string
    title: string
    description: string
    ogImage: string
    canonical: string
    localBusiness: {
      '@type': string
      streetAddress: string
      addressLocality: string
      addressRegion?: string
      postalCode?: string
      addressCountry: string
      telephone: string
      email?: string
    }
  }
}

export const countryNavConfig: Record<string, CountryConfig> = {
  /* ═══════════════════════════════════════════════════════════
     UNITED ARAB EMIRATES
     ═══════════════════════════════════════════════════════════ */
  "united-arab-emirates": {
    label: "United Arab Emirates",
    shortLabel: "UAE",
    flag: "🇦🇪",
    dateline: "Gulf Cooperation Council",
    regionTag: "GCC",
    listingCount: 47,

    markets: [
      { label: "Dubai", href: "/united-arab-emirates/dubai", sub: "Business Bay · DIFC · Downtown" },
      { label: "Abu Dhabi", href: "/united-arab-emirates/abu-dhabi", sub: "Al Maryah Island · Reem Island" },
      { label: "Sharjah", href: "/united-arab-emirates/sharjah", sub: "Industrial · Free Zone" },
      { label: "Ajman", href: "/united-arab-emirates/ajman", sub: "Emerging Corridor" },
      { label: "Ras Al Khaimah", href: "/united-arab-emirates/ras-al-khaimah", sub: "Tourism · Hospitality" },
      { label: "Fujairah", href: "/united-arab-emirates/fujairah", sub: "Port · Logistics" },
    ],

    sections: [
      { label: "Listings", href: "/united-arab-emirates/listings", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/united-arab-emirates/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes", description: "Office · Retail · Industrial · Residential" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/united-arab-emirates/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/united-arab-emirates/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/united-arab-emirates/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/united-arab-emirates/contact", description: "Dubai office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-AE",
      title: "Commercial Real Estate Advisory UAE — Murivest",
      description: "Independent commercial real estate advisory across Dubai, Abu Dhabi and the Emirates. Institutional-grade underwriting, capital markets, and off-market placement for UHNWI and sovereign wealth.",
      ogImage: "https://murivest.com/uae-night.webp",
      canonical: "https://murivest.com/united-arab-emirates",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "Business Bay, Opus Tower",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "00000",
        addressCountry: "AE",
        telephone: "+971-4-555-0190",
        email: "dubai@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     SINGAPORE
     ═══════════════════════════════════════════════════════════ */
  singapore: {
    label: "Singapore",
    shortLabel: "SG",
    flag: "🇸🇬",
    dateline: "Southeast Asia",
    regionTag: "ASEAN",
    listingCount: 23,

    markets: [], // No district subfolders yet — functional layout only

    sections: [
      { label: "Properties", href: "/singapore/properties", description: "Current mandates and available stock" },
      { label: "Singapore Market", href: "/singapore/singapore-market", description: "Market overview and transaction data", accent: true },
      { label: "Services", href: "/singapore/services", description: "Advisory and capital markets" },
      { label: "Insights", href: "/singapore/insights", description: "Research and market commentary" },
      { label: "About", href: "/singapore/about", description: "Local presence and regulatory status" },
      { label: "Investor Portal", href: "/singapore/investor-portal", description: "Private client access" },
      { label: "Contact", href: "/singapore/contact", description: "Singapore office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-SG",
      title: "Commercial Real Estate Advisory Singapore — Murivest",
      description: "Institutional-grade commercial real estate advisory in Singapore. Capital markets, off-market placement, and strategic asset management for ASEAN-focused investors and family offices.",
      ogImage: "https://murivest.com/singapore-night.webp",
      canonical: "https://murivest.com/singapore",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "One Raffles Place",
        addressLocality: "Singapore",
        addressCountry: "SG",
        telephone: "+65-6123-4567",
        email: "singapore@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     KENYA
     ═══════════════════════════════════════════════════════════ */
  kenya: {
    label: "Kenya",
    shortLabel: "KE",
    flag: "🇰🇪",
    dateline: "East Africa",
    regionTag: "EAC",
    listingCount: 62,

    markets: [
      { label: "Nairobi", href: "/kenya/nairobi", sub: "Westlands · Kilimani · Upper Hill" },
      { label: "Mombasa", href: "/kenya/mombasa", sub: "Nyali · CBD · Port Zone" },
      { label: "Kisumu", href: "/kenya/kisumu", sub: "Lake Basin · Industrial" },
      { label: "Nakuru", href: "/kenya/nakuru", sub: "Agricultural · Logistics" },
      { label: "Eldoret", href: "/kenya/eldoret", sub: "North Rift · Industrial" },
    ],

    sections: [
      { label: "Properties", href: "/kenya/properties", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/kenya/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/kenya/asset-classes", description: "Office · Retail · Industrial · Land" },
      { label: "Capital Markets", href: "/kenya/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/kenya/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/kenya/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/kenya/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/kenya/contact", description: "Nairobi office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Land Portfolio", href: "/land-portfolio" },
    ],

    seo: {
      hrefLang: "en-KE",
      title: "Commercial Real Estate Advisory Kenya — Murivest",
      description: "Independent commercial real estate advisory in Nairobi and across East Africa. Institutional-grade underwriting, capital markets, land banking, and off-market placement for UHNWI and institutional investors.",
      ogImage: "https://murivest.com/kenya-night.webp",
      canonical: "https://murivest.com/kenya",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "Westlands Business District",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        addressCountry: "KE",
        telephone: "+254-115-277-610",
        email: "nairobi@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     UNITED KINGDOM
     ═══════════════════════════════════════════════════════════ */
  "united-kingdom": {
    label: "United Kingdom",
    shortLabel: "UK",
    flag: "🇬🇧",
    dateline: "Western Europe",
    regionTag: "EMEA",
    listingCount: 31,

    markets: [
      { label: "London", href: "/united-kingdom/london", sub: "City · Mayfair · Canary Wharf" },
      { label: "Manchester", href: "/united-kingdom/manchester", sub: "Northern Powerhouse" },
      { label: "Birmingham", href: "/united-kingdom/birmingham", sub: "Midlands Engine" },
      { label: "Edinburgh", href: "/united-kingdom/edinburgh", sub: "Scottish Capital" },
      { label: "Bristol", href: "/united-kingdom/bristol", sub: "South West · Tech Corridor" },
    ],

    sections: [
      { label: "Properties", href: "/united-kingdom/properties", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/united-kingdom/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/united-kingdom/asset-classes", description: "Office · Retail · Industrial · Residential" },
      { label: "Capital Markets", href: "/united-kingdom/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/united-kingdom/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/united-kingdom/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/united-kingdom/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/united-kingdom/contact", description: "London office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-GB",
      title: "Commercial Real Estate Advisory UK — Murivest",
      description: "Institutional commercial real estate advisory in London and across the United Kingdom. Capital markets, prime property placement, and strategic asset management for international investors and family offices.",
      ogImage: "https://murivest.com/uk-night.webp",
      canonical: "https://murivest.com/united-kingdom",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "Mayfair, W1J",
        addressLocality: "London",
        addressRegion: "England",
        postalCode: "W1J 8LQ",
        addressCountry: "GB",
        telephone: "+44-20-7123-4567",
        email: "london@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     UNITED STATES
     ═══════════════════════════════════════════════════════════ */
  "united-states": {
    label: "United States",
    shortLabel: "US",
    flag: "🇺🇸",
    dateline: "North America",
    regionTag: "Americas",
    listingCount: 38,

    markets: [
      { label: "New York", href: "/united-states/new-york", sub: "Manhattan · Brooklyn" },
      { label: "Miami", href: "/united-states/miami", sub: "Brickell · Wynwood" },
      { label: "Los Angeles", href: "/united-states/los-angeles", sub: "Downtown · Beverly Hills" },
      { label: "Chicago", href: "/united-states/chicago", sub: "The Loop · River North" },
      { label: "Austin", href: "/united-states/austin", sub: "Tech Corridor" },
    ],

    sections: [
      { label: "Properties", href: "/united-states/properties", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/united-states/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/united-states/asset-classes", description: "Office · Retail · Industrial · Residential" },
      { label: "Capital Markets", href: "/united-states/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/united-states/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/united-states/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/united-states/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/united-states/contact", description: "US office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-US",
      title: "Commercial Real Estate Advisory USA — Murivest",
      description: "Institutional commercial real estate advisory across major US markets. Capital markets, prime property placement, and strategic asset management for international investors and sovereign wealth.",
      ogImage: "https://murivest.com/us-night.webp",
      canonical: "https://murivest.com/united-states",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "One Vanderbilt, Suite 4500",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10017",
        addressCountry: "US",
        telephone: "+1-212-555-0190",
        email: "newyork@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     THAILAND
     ═══════════════════════════════════════════════════════════ */
  thailand: {
    label: "Thailand",
    shortLabel: "TH",
    flag: "🇹🇭",
    dateline: "Southeast Asia",
    regionTag: "ASEAN",
    listingCount: 19,

    markets: [
      { label: "Bangkok", href: "/thailand/bangkok", sub: "Sukhumvit · Silom · Sathorn" },
      { label: "Phuket", href: "/thailand/phuket", sub: "Laguna · Rawai" },
      { label: "Chiang Mai", href: "/thailand/chiang-mai", sub: "Nimman · Old City" },
      { label: "Pattaya", href: "/thailand/pattaya", sub: "Jomtien · Na Kluea" },
    ],

    sections: [
      { label: "Properties", href: "/thailand/properties", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/thailand/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/thailand/asset-classes", description: "Hospitality · Residential · Industrial" },
      { label: "Capital Markets", href: "/thailand/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/thailand/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/thailand/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/thailand/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/thailand/contact", description: "Bangkok office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-TH",
      title: "Commercial Real Estate Advisory Thailand — Murivest",
      description: "Independent commercial real estate advisory in Bangkok and across Thailand. Hospitality, residential, and industrial asset advisory for ASEAN-focused investors and family offices.",
      ogImage: "https://murivest.com/thailand-night.webp",
      canonical: "https://murivest.com/thailand",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "Sathorn Square",
        addressLocality: "Bangkok",
        addressRegion: "Bangkok",
        addressCountry: "TH",
        telephone: "+66-2-123-4567",
        email: "bangkok@murivest.com",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     SOUTH AFRICA
     ═══════════════════════════════════════════════════════════ */
  "south-africa": {
    label: "South Africa",
    shortLabel: "ZA",
    flag: "🇿🇦",
    dateline: "Sub-Saharan Africa",
    regionTag: "SSA",
    listingCount: 28,

    markets: [
      { label: "Johannesburg", href: "/south-africa/johannesburg", sub: "Sandton · Rosebank" },
      { label: "Cape Town", href: "/south-africa/cape-town", sub: "CBD · Waterfront · Atlantic Seaboard" },
      { label: "Durban", href: "/south-africa/durban", sub: "Umhlanga · Ballito" },
      { label: "Pretoria", href: "/south-africa/pretoria", sub: "Menlyn · Hatfield" },
    ],

    sections: [
      { label: "Properties", href: "/south-africa/properties", description: "Current mandates and available stock" },
      { label: "Off-Market", href: "/south-africa/off-market", description: "Private placement opportunities", accent: true },
      { label: "Asset Classes", href: "/south-africa/asset-classes", description: "Office · Retail · Industrial · Residential" },
      { label: "Capital Markets", href: "/south-africa/capital-markets", description: "Debt and equity advisory" },
      { label: "Investment Guides", href: "/south-africa/investment-guides", description: "Regulatory and market entry" },
      { label: "Research", href: "/south-africa/research", description: "Quarterly market reports" },
      { label: "Developers", href: "/south-africa/developers", description: "Strategic development partnerships" },
      { label: "Contact", href: "/south-africa/contact", description: "Johannesburg office and private enquiries" },
    ],

    quicklinks: [
      { label: "Underwrite a Deal", href: "/cre-underwriting" },
      { label: "Investor Portal", href: "/login" },
      { label: "Due Diligence", href: "/due-diligence" },
    ],

    seo: {
      hrefLang: "en-ZA",
      title: "Commercial Real Estate Advisory South Africa — Murivest",
      description: "Institutional commercial real estate advisory in Johannesburg, Cape Town and across South Africa. Capital markets, prime property placement, and strategic asset management for pan-African investors.",
      ogImage: "https://murivest.com/south-africa-night.webp",
      canonical: "https://murivest.com/south-africa",
      localBusiness: {
        "@type": "RealEstateAgent",
        streetAddress: "Sandton City Office Towers",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        postalCode: "2196",
        addressCountry: "ZA",
        telephone: "+27-11-123-4567",
        email: "johannesburg@murivest.com",
      },
    },
  },
} as const

export type CountrySlug = keyof typeof countryNavConfig