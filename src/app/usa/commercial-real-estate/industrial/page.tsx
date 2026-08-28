import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "industrial")!;

export const metadata: Metadata = {
  title: "Industrial — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. industrial real estate practice — investment sales and leasing advisory for manufacturing, warehouse-distribution, and flex-industrial assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/industrial` },
};

export default function IndustrialPage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "U.S. industrial real estate continues to benefit from supply chain reconfiguration, nearshoring, and manufacturing reshoring trends. While the rapid rent growth of 2021-2022 has moderated, structural demand remains positive in established logistics corridors. Murivest covers manufacturing facilities, warehouse-distribution assets, and flex-industrial properties, with focus on infill locations and supply-constrained submarkets.",
        keyDrivers: [
          "Supply chain reconfiguration and nearshoring",
          "Manufacturing reshoring driven by policy incentives",
          "Flex-industrial and last-mile demand",
          "Infill location scarcity in primary markets",
        ],
        advisoryScope: [
          "Manufacturing facility sales and leasing",
          "Warehouse-distribution asset dispositions",
          "Flex-industrial property advisory",
          "Sale-leaseback transactions",
          "Portfolio industrial acquisitions",
        ],
      }}
    />
  );
}
