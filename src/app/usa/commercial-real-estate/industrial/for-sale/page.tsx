import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Industrial For Sale — USA Commercial Real Estate",
  description:
    "Industrial properties for sale through Murivest Group's U.S. investment sales practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/industrial/for-sale` },
};

export default function IndustrialForSalePage() {
  return <ListingPage typeSlug="industrial" transactionType="sale" />;
}
