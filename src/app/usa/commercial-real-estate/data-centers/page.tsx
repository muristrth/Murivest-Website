import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "data-centers")!;

export const metadata: Metadata = {
  title: "Data Centers — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. data center real estate practice — investment sales for hyperscale, colocation, and edge data center facilities in primary U.S. data center markets.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/data-centers` },
};

export default function DataCentersPage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "Data centers are the fastest-growing institutional real estate sector, driven by cloud computing, AI infrastructure demand, and digital transformation. Power availability has become the binding constraint on new supply, creating scarcity value in markets with access to low-cost, reliable power. Murivest advises on hyperscale, colocation, and edge facilities in primary U.S. data center markets including Northern Virginia, Dallas, Phoenix, and Atlanta.",
        keyDrivers: [
          "AI and cloud infrastructure demand surge",
          "Power availability as the binding constraint",
          "Hyperscale leasing and colocation investment",
          "Edge computing and secondary market growth",
        ],
        advisoryScope: [
          "Hyperscale data center sales",
          "Colocation facility dispositions",
          "Edge and secondary market acquisitions",
          "Powered shell and land site advisory",
          "Joint venture and capital partner sourcing",
        ],
      }}
    />
  );
}
