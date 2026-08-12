import MarketRoutePage from '@/components/market/MarketRoutePage'

export default async function ThailandMarketRoute({ params }: { params: Promise<{ marketPath: string[] }> }) {
  const { marketPath } = await params
  return <MarketRoutePage market="thailand" path={marketPath} />
}
