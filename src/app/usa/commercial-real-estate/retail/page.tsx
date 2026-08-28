import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "retail")!;

export const metadata: Metadata = {
  title: "Retail — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. retail real estate practice — investment sales and leasing for neighborhood centers, power centers, street retail, and single-tenant net-lease properties.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/retail` },
};

export default function RetailPage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/8919461/pexels-photo-8919461.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "U.S. retail is bifurcating between well-located, grocery-anchored centers and underperforming assets in secondary locations. While headline vacancy has risen, demand for necessity-based retail and experiential formats remains resilient. Single-tenant net-lease continues to attract private capital seeking stable, long-duration income. Murivest focuses on grocery-anchored centers, power centers, street retail, and single-tenant net-lease properties with durable income profiles.",
        keyDrivers: [
          "Grocery-anchored center resilience",
          "Single-tenant net-lease market depth",
          "Street retail in dense urban corridors",
          "Experiential and service-based retail demand",
        ],
        advisoryScope: [
          "Grocery-anchored center sales",
          "Power center and community center dispositions",
          "Single-tenant net-lease transactions",
          "Street retail leasing and sales",
          "Anchor tenant repositioning advisory",
        ],
      }}
    />
  );
}
