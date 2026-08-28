export type PropertyType =
  | "office"
  | "industrial"
  | "logistics"
  | "multifamily"
  | "retail"
  | "data_centers";

export type TransactionType = "sale" | "lease";

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  property_type: PropertyType;
  transaction_type: TransactionType;
  address_line: string | null;
  city: string;
  state: string;
  msa: string | null;
  description: string;
  building_size_sqft: number | null;
  land_size_acres: number | null;
  year_built: number | null;
  year_renovated: number | null;
  cap_rate: number | null;
  asking_price: number | null;
  asking_rent_psf: number | null;
  lease_type: string | null;
  occupancy: number | null;
  image_url: string | null;
  gallery_urls: string[];
  highlights: string[];
  is_listed: boolean;
  published_at: string;
  created_at: string;
}

export type InsightCategory =
  | "market_report"
  | "cap_rate"
  | "sector_brief"
  | "macro"
  | "transaction_news";

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  category: InsightCategory;
  sector: string | null;
  msa: string | null;
  author: string;
  published_at: string;
  is_published: boolean;
  created_at: string;
}

export type InquiryType =
  | "capital_markets"
  | "investment_sales"
  | "leasing"
  | "mandate"
  | "property_inquiry"
  | "general";

export interface InquirySubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry_type: InquiryType;
  message: string;
  property_ref?: string;
}
