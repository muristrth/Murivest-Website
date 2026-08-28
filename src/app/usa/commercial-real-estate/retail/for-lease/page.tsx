import type { Metadata } from "next";
import ListingPage from "@/components/ListingPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Retail For Lease — USA Commercial Real Estate",
  description:
    "Retail spaces for lease through Murivest Group's U.S. leasing advisory practice.",
  alternates: { canonical: `https://${SITE.domain}/usa/commercial-real-estate/retail/for-lease` },
};

export default function RetailForLeasePage() {
  return <ListingPage typeSlug="retail" transactionType="lease" />;
}
