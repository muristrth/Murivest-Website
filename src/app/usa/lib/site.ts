export const SITE = {
  name: "Murivest Group",
  legalName: "Murivest Group",
  domain: "murivest.com",
  usaBasePath: "/usa",
  tagline: "Institutional Commercial Real Estate Advisory",
  description:
    "Murivest Group is an independent commercial real estate advisory firm representing institutional investors, private capital, and principals across U.S. office, industrial, logistics, multifamily, retail, and data center markets.",
  email: "capitalmarkets@murivest.com",
  phoneDisplay: "By appointment",
  foundedYear: 2024,
} as const;

export const NAV_LINKS = [
  { label: "USA Platform", href: "/usa" },
  { label: "Investment Sales", href: "/usa/investment-sales" },
  { label: "Property Types", href: "/usa/commercial-real-estate" },
  { label: "Market Insights", href: "/usa/insights" },
  { label: "Contact", href: "/usa/contact" },
] as const;

type TransactionType = "sale" | "lease";

interface PropertyTypeDef {
  slug: string;
  label: string;
  description: string;
  transactionTypes: TransactionType[];
}

export const PROPERTY_TYPES: readonly PropertyTypeDef[] = [
  {
    slug: "office",
    label: "Office",
    description:
      "CBD towers, suburban campuses, and medical office assets across primary and secondary U.S. markets.",
    transactionTypes: ["sale", "lease"],
  },
  {
    slug: "industrial",
    label: "Industrial",
    description:
      "Manufacturing facilities, warehouse-distribution buildings, and flex-industrial assets in established logistics corridors.",
    transactionTypes: ["sale", "lease"],
  },
  {
    slug: "logistics",
    label: "Logistics",
    description:
      "Last-mile delivery, big-box distribution, and cold storage facilities serving e-commerce and supply-chain operators.",
    transactionTypes: ["sale", "lease"],
  },
  {
    slug: "multifamily",
    label: "Multifamily",
    description:
      "Garden-style, mid-rise, and high-rise rental communities in supply-constrained and growth U.S. metros.",
    transactionTypes: ["sale"],
  },
  {
    slug: "retail",
    label: "Retail",
    description:
      "Neighborhood centers, power centers, street retail, and single-tenant net-lease properties across the U.S.",
    transactionTypes: ["sale", "lease"],
  },
  {
    slug: "data-centers",
    label: "Data Centers",
    description:
      "Hyperscale, colocation, and edge data center facilities in primary U.S. data center markets.",
    transactionTypes: ["sale"],
  },
];

export const SERVICE_SECTORS = PROPERTY_TYPES.map((p) => ({
  slug: p.slug,
  label: p.label,
}));

export function formatCurrency(value: number | null | undefined): string {
  if (value == null) return "Price on application";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(0)}M`;
  return `$${value.toLocaleString("en-US")}`;
}

export function formatSqft(value: number | null | undefined): string {
  if (value == null) return "—";
  return `${value.toLocaleString("en-US")} sq ft`;
}

export function formatCapRate(value: number | null | undefined): string {
  if (value == null) return "—";
  return `${value.toFixed(2)}%`;
}

export function formatRentPSF(value: number | null | undefined): string {
  if (value == null) return "—";
  return `$${value.toFixed(2)}/sf`;
}

export function propertyTypeLabel(slug: string): string {
  const found = PROPERTY_TYPES.find((p) => p.slug === slug);
  return found ? found.label : slug;
}

export function transactionTypeLabel(type: string): string {
  return type === "sale" ? "For Sale" : "For Lease";
}
