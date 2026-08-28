import type { Metadata } from "next";
import PropertyTypePage from "../../components/PropertyTypePage";
import { PROPERTY_TYPES, SITE } from "../../lib/site";

const type = PROPERTY_TYPES.find((p) => p.slug === "multifamily")!;

export const metadata: Metadata = {
  title: "Multifamily — USA Commercial Real Estate Advisory",
  description:
    "Murivest Group's U.S. multifamily real estate practice — investment sales for garden-style, mid-rise, and high-rise rental communities in supply-constrained and growth metros.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/multifamily` },
};

export default function MultifamilyPage() {
  return (
    <PropertyTypePage
      type={type}
      heroImage="https://images.pexels.com/photos/34360413/pexels-photo-34360413.jpeg?auto=compress&cs=tinysrgb&w=1920"
      sectorDetails={{
        marketContext:
          "U.S. multifamily housing remains a core institutional asset class, supported by persistent housing affordability challenges and demographic tailwinds. While new supply has temporarily pressured rents in some Sun Belt markets, long-term fundamentals remain positive, particularly in supply-constrained coastal markets and high-growth secondary metros. Murivest advises on garden-style, mid-rise, and high-rise rental communities across acquisition, disposition, and financing.",
        keyDrivers: [
          "Housing supply shortages in major metros",
          "Demographic tailwinds from millennial and Gen Z renters",
          "Sun Belt and secondary market growth",
          "Affordability-driven shift from ownership to renting",
        ],
        advisoryScope: [
          "Garden-style community sales",
          "Mid-rise and high-rise asset dispositions",
          "Portfolio multifamily transactions",
          "Value-add and workforce housing advisory",
          "Student and build-to-rent advisory",
        ],
      }}
    />
  );
}
