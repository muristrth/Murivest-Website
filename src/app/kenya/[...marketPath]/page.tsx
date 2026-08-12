import MarketRoutePage from '@/components/market/MarketRoutePage'

export default async function KenyaMarketRoute({ params }: { params: Promise<{ marketPath: string[] }> }) {
  const { marketPath } = await params
  return <MarketRoutePage market="kenya" path={marketPath} />
}
