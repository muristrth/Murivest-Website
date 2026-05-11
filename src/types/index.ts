// Define these helpers first to keep the Property interface clean
interface WalkScores {
  walk: number;
  transit: number | null;
  bike: number | null;
}

interface Broker {
  name: string; 
  email: string; 
  phone: string; 
  photo?: any;
}

interface PropertyLocation {
  lat: number;
  lng: number;
}

export interface Property {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string; // Optional to prevent "string | undefined" errors
  location: PropertyLocation; // Standardized as required for the Map
  
  // Pricing & Financials
  price: string;
  priceKsh?: string;
  priceUsd?: string;
  priceGbp?: string;
  priceEur?: string;
  yield?: string;
  occupancyRate?: string;
  investment?: {
    monthlyIncome?: string;
    annualIncome?: string;
    appreciationRate?: string;
    totalROI?: string;
  };

  // Specs & Categorization
  squareFootage: string;
  propertyType: string;
  type?: string;        // Legacy support
  listingType?: string; // Optional to prevent "string | undefined" errors
  
  // Media & Assets
  image: any;
  thumbnailUrl?: string; // Used by PropertyMap for the hover card
  gallery?: any[];
  brochureUrl?: string;

  // Content & Details
  description: string;
  features: string[];
  details?: { label: string; value: string }[];
  broker: Broker;
  walkScores?: WalkScores;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content?: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  totalInvestment: number;
  properties: string[];
  joinDate: string;
  portfolioValue: number;
  totalYield: number;
}

export interface Review {
  id: string;
  name: string;
  title: string;
  email: string;
  content: string;
  rating: number;
  investment?: string;
  approved: boolean;
  createdAt: any;
  submittedAt: string;
}

export interface PropertyForRent {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  location: {
    lat: number | null;
    lng: number | null;
  };
  rent: string;
  rentKsh?: number;
  rentUsd?: number;
  currency?: string;
  assetCategory: string;
  propertyType?: string;
  status: string;
  availableFrom?: string;
  leaseTerm?: string;
  securityDeposit?: string;
  serviceCharge?: string;
  squareFootage?: string;
  furnished?: boolean;
  parking?: boolean;
  parkingSpaces?: number;
  image: any;
  gallery?: any[];
  floorplan?: {
    url?: string;
  };
  virtualTour?: string;
  description: string;
  features: string[];
  specifications?: { label: string; value: string }[];
}
