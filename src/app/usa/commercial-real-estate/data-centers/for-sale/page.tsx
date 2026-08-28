import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Data Centers For Sale — USA Commercial Real Estate",
  description:
    "Data center properties for sale through Murivest Group's U.S. investment sales practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/data-centers/for-sale` },
};

export default function DataCentersForSalePage() {
  return <ListingPage typeSlug="data-centers" transactionType="sale" />;
}
