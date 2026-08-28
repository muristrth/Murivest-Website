import PropertyDetailPage, { generatePropertyMetadata } from "../../../../components/PropertyDetailPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generatePropertyMetadata({ typeSlug: "retail", transactionType: "lease", slug });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PropertyDetailPage typeSlug="retail" transactionType="lease" slug={slug} />;
}
