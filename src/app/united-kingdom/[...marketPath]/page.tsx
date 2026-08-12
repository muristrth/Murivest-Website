import MarketRoutePage from '@/components/market/MarketRoutePage'

export default async function UnitedKingdomMarketRoute({ params }: { params: Promise<{ marketPath: string[] }> }) {
  const { marketPath } = await params
  return <MarketRoutePage market="united-kingdom" path={marketPath} />
}
