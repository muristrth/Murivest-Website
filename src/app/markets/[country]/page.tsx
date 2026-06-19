import { client } from "@/sanity/lib/client";
 import { CountryPageClient } from "@/components/Countrypageclient";

 type ListingType = "for-sale" | "for-lease";

 type ListingSummary = {
   assetType: string;
   listingType: ListingType;
 };

 type AssetTypeCount = {
   total: number;
   sale: number;
   lease: number;
 };
 
 export default async function CountryPage({
   params,
 }: {
   params: Promise<{ country: string }>;
 }) {
   const { country: countrySlug } = await params;
 
    const [allListings, featured] = await Promise.all([
      client.fetch(
        `*[_type == "property" && country == $country]{ assetType, listingType }`,
        { country: countrySlug }
      ),
      client.fetch(
        `*[_type == "property" && country == $country]
         | order(_createdAt desc)[0...18]{
           _id, title, slug, assetType, listingType, city, submarket,
           askingPrice, currency, capRate, totalArea, occupancy, yearBuilt,
           floors, gradeClassification, description, highlights, contactEmail,
           images[]{ asset->{ url } }
         }`,
        { country: countrySlug }
      ),
    ]);
 
    const map: Record<string, AssetTypeCount> = {};
    for (const l of allListings) {
      if (!map[l.assetType]) map[l.assetType] = { total: 0, sale: 0, lease: 0 };
      map[l.assetType].total++;
      if (l.listingType === "for-sale") map[l.assetType].sale++;
      if (l.listingType === "for-lease") map[l.assetType].lease++;
    }
 
    const assetClassEntries = Object.entries(map).map(([assetType, v]) => ({
      assetType, count: v.total, forSale: v.sale, forLease: v.lease,
    }));
 
    return (
      <CountryPageClient
        countrySlug={countrySlug}
        countryLabel={countrySlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
        totalListings={allListings.length}
       assetClassEntries={assetClassEntries}
        featuredProperties={featured}
      />
    );
  }