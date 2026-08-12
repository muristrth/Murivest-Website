import MarketRoutePage from '@/components/market/MarketRoutePage'

export default async function UnitedStatesMarketRoute({ params }: { params: Promise<{ marketPath: string[] }> }) {
  const { marketPath } = await params
  return <MarketRoutePage market="united-states" path={marketPath} />
}
