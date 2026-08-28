import PropertyDetailPage, { generatePropertyMetadata } from "../../../../components/PropertyDetailPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generatePropertyMetadata({ typeSlug: "industrial", transactionType: "sale", slug });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PropertyDetailPage typeSlug="industrial" transactionType="sale" slug={slug} />;
}
