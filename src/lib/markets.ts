// Markets that have a dedicated, fully built country site link to that site
// directly. Every other market slug falls back to the generic CRE catalogue
// at /markets/[country], which is backed by real Sanity listings data rather
// than a fabricated page.
const DEDICATED_MARKET_SITES: Record<string, string> = {
  kenya: '/kenya',
  'united-kingdom': '/united-kingdom',
  'united-arab-emirates': '/united-arab-emirates',
  singapore: '/singapore',
}

export function getMarketHref(slug: string): string {
  return DEDICATED_MARKET_SITES[slug] ?? `/markets/${slug}`
}
