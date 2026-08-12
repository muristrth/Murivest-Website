import MarketRoutePage from '@/components/market/MarketRoutePage'

export default async function SouthAfricaMarketRoute({ params }: { params: Promise<{ marketPath: string[] }> }) {
  const { marketPath } = await params
  return <MarketRoutePage market="south-africa" path={marketPath} />
}
