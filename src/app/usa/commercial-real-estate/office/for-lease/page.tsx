import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Office For Lease — USA Commercial Real Estate",
  description:
    "Office spaces for lease through Murivest Group's U.S. leasing advisory practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/office/for-lease` },
};

export default function OfficeForLeasePage() {
  return <ListingPage typeSlug="office" transactionType="lease" />;
}
