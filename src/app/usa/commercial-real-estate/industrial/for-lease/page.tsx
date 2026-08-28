import type { Metadata } from "next";
import ListingPage from "../../../components/ListingPage";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Industrial For Lease — USA Commercial Real Estate",
  description:
    "Industrial spaces for lease through Murivest Group's U.S. leasing advisory practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/industrial/for-lease` },
};

export default function IndustrialForLeasePage() {
  return <ListingPage typeSlug="industrial" transactionType="lease" />;
}
