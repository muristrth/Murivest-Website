import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE, propertyTypeLabel } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Office For Sale — USA Commercial Real Estate",
  description:
    "Office properties for sale through Murivest Group's U.S. investment sales practice. CBD towers, suburban campuses, and medical office assets.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/office/for-sale` },
};

export default function OfficeForSalePage() {
  return <ListingPage typeSlug="office" transactionType="sale" />;
}
