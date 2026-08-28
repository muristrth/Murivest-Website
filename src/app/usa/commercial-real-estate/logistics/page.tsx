import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "logistics")!;

export const metadata: Metadata = {
  title: "Logistics — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. logistics real estate practice — investment sales and leasing for last-mile delivery, big-box distribution, and cold storage facilities.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/logistics` },
};

export default function LogisticsPage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/2804929/pexels-photo-2804929.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "Logistics real estate — including last-mile delivery, big-box distribution, and cold storage — remains a structural growth sector driven by e-commerce penetration and supply chain optimization. While new supply has moderated rent growth in some markets, demand for well-located logistics space remains strong, particularly in infill locations near population centers. Murivest advises on acquisition and disposition across primary logistics markets, with specialized coverage of cold storage and food logistics facilities.",
        keyDrivers: [
          "E-commerce penetration and fulfillment demand",
          "Cold storage and food logistics growth",
          "Big-box distribution in inland hub markets",
          "Last-mile delivery in infill urban locations",
        ],
        advisoryScope: [
          "Last-mile delivery facility sales",
          "Big-box distribution center dispositions",
          "Cold storage and food logistics advisory",
          "Cross-dock and fulfillment center leasing",
          "Sale-leaseback and sale-leaseback advisory",
        ],
      }}
    />
  );
}
