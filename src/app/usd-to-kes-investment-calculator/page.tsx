import type { Metadata } from 'next'
import UsdToKesInvestmentCalculator from '../../components/pages/UsdToKesInvestmentCalculator'

export const metadata: Metadata = {
  title: 'USD to KES Investment Calculator - Kenya Real Estate Currency Conversion Tool',
  description: 'Calculate USD to KES investment returns for Kenya real estate. Currency conversion tool for international investors in Nairobi property market.',
  keywords: 'USD to KES calculator, Kenya investment calculator, currency conversion Kenya, real estate returns Kenya, Nairobi property investment calculator',
  openGraph: {
    title: 'USD to KES Investment Calculator - Kenya Real Estate Currency Conversion Tool',
    description: 'Calculate USD to KES investment returns for Kenya real estate with our currency conversion tool.',
    images: ['/image.png'],
  },
}

export default function UsdToKesInvestmentCalculatorPage() {
  return <UsdToKesInvestmentCalculator />
}