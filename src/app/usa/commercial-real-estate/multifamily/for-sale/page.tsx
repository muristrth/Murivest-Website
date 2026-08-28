import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Multifamily For Sale — USA Commercial Real Estate",
  description:
    "Multifamily properties for sale through Murivest Group's U.S. investment sales practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/multifamily/for-sale` },
};

export default function MultifamilyForSalePage() {
  return <ListingPage typeSlug="multifamily" transactionType="sale" />;
}
