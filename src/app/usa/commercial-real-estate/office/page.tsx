import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "office")!;

export const metadata: Metadata = {
  title: "Office — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. office real estate practice — investment sales and leasing advisory for CBD towers, suburban campuses, and medical office assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/office` },
};

export default function OfficePage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/2908977/pexels-photo-2908977.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "U.S. office markets are undergoing structural change as hybrid work models reshape demand. While vacancy has risen in many gateway markets, flight-to-quality is driving tenant preference for top-tier buildings in prime locations. Medical office continues to outperform traditional office, supported by demographic aging and healthcare utilization. Murivest advises on CBD assets, suburban campuses, and medical office properties, with focus on value-add repositioning and adaptive reuse opportunities.",
        keyDrivers: [
          "Flight-to-quality in gateway and Sun Belt markets",
          "Medical office outperformance relative to traditional office",
          "Adaptive reuse and conversion opportunities",
          "Suburban campus repositioning and amenitization",
        ],
        advisoryScope: [
          "CBD office tower dispositions and acquisitions",
          "Suburban campus sales and leasing",
          "Medical office investment sales",
          "Value-add repositioning advisory",
          "Lease restructuring and renewal strategy",
        ],
      }}
    />
  );
}
