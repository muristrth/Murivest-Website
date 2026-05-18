// ─── types/property.ts ───────────────────────────────────────────────────────
// Enterprise Property interface — extends the original with full SEO + schema
// support. Drop-in compatible with existing PropertyClientView.

export interface Property {
  _id?: string;

  slug: string;

  title: string;
  subtitle?: string;

  description: string;

  address: string;
  city: string;
  state: string;
  zipCode?: string;
  country?: string;

  location?: {
    lat: number;
    lng: number;
  } | null;

  type?: string;

  propertyType?:
    | 'Apartment'
    | 'House'
    | 'Land'
    | 'CommercialBuilding'
    | 'Office'
    | 'Warehouse'
    | 'Retail'
    | 'MixedUse';

  listingType?: 'sale' | 'rent' | 'lease';

  status?: 'available' | 'sold' | 'leased' | 'under-offer';

  schemaType?:
    | 'Apartment'
    | 'SingleFamilyResidence'
    | 'CommercialBuilding'
    | 'Landform';

  price: string;

  priceKsh?: string;
  priceUsd?: string;
  priceGbp?: string;
  priceEur?: string;

  yield?: string;

  occupancyRate?: string;

  images: string[];

  features: string[];

  amenities?: string[];

  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;

  squareFootage?: string;

  yearBuilt?: string;

  virtualTourUrl?: string;
  videoUrl?: string;

  brochureUrl?: string;
  businessCaseUrl?: string;

  details?: {
    label: string;
    value: string;
  }[];

  investment?: {
    monthlyIncome?: string;
    annualIncome?: string;
    appreciationRate?: string;
    totalROI?: string;
  };

  broker?: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
    company?: string;
  };

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
    focusKeyword?: string;
  };

  faqs?: {
    question: string;
    answer: string;
  }[];

  publishedAt?: string;
  updatedAt?: string;
}