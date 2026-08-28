import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Logistics For Sale — USA Commercial Real Estate",
  description:
    "Logistics properties for sale through Murivest Group's U.S. investment sales practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/logistics/for-sale` },
};

export default function LogisticsForSalePage() {
  return <ListingPage typeSlug="logistics" transactionType="sale" />;
}
