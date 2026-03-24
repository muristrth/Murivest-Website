/**
 * Format currency with proper localization
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US',
  options?: Intl.NumberFormatOptions
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      ...options
    }).format(amount)
  } catch {
    // Fallback for unsupported currencies
    return `${currency} ${amount.toLocaleString()}`
  }
}

/**
 * Format large numbers with abbreviations (K, M, B)
 */
export function formatCompactCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  if (amount >= 1_000_000_000) {
    return `${currency} ${(amount / 1_000_000_000).toFixed(1)}B`
  }
  if (amount >= 1_000_000) {
    return `${currency} ${(amount / 1_000_000).toFixed(1)}M`
  }
  if (amount >= 1_000) {
    return `${currency} ${(amount / 1_000).toFixed(1)}K`
  }
  return formatCurrency(amount, currency, locale)
}

/**
 * Parse currency string to number
 */
export function parseCurrency(value: string): number {
  // Remove currency symbols, commas, and spaces
  const cleaned = value.replace(/[^0-9.-]/g, '')
  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? 0 : parsed
}

/**
 * Format percentage
 */
export function formatPercentage(
  value: number,
  decimals: number = 1,
  includeSymbol: boolean = true
): string {
  const formatted = value.toFixed(decimals)
  return includeSymbol ? `${formatted}%` : formatted
}

/**
 * Format yield/rate
 */
export function formatYield(rate: number): string {
  return `${rate.toFixed(1)}%`
}

/**
 * Format price range
 */
export function formatPriceRange(min: number, max: number, currency: string = 'USD'): string {
  return `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}`
}