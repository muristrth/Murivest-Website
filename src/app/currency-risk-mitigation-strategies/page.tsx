import type { Metadata } from 'next'
import CurrencyRiskMitigationStrategies from '../../components/pages/CurrencyRiskMitigationStrategies'

export const metadata: Metadata = {
  title: 'Currency Risk Mitigation Strategies - Kenya Shilling Investment Protection',
  description: 'Currency risk mitigation strategies for Kenya real estate investment. Protect against KES volatility with hedging and diversification approaches.',
  keywords: 'currency risk mitigation Kenya, KES volatility protection, currency hedging Kenya, foreign exchange risk real estate',
  openGraph: {
    title: 'Currency Risk Mitigation Strategies - Kenya Shilling Investment Protection',
    description: 'Currency risk mitigation strategies for Kenya real estate investment.',
    images: ['/image.png'],
  },
}

export default function CurrencyRiskMitigationStrategiesPage() {
  return <CurrencyRiskMitigationStrategies />
}