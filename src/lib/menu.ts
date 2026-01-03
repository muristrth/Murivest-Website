export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuData {
  [key: string]: MenuItem[];
}

export const MENU_DATA: MenuData = {
  properties: [
    {label: 'KE Commercial Properties', href:'/properties'},
    {label: 'UK Commercial Properties', href:'/uk-properties'},
    {label: 'US Commercial Properties', href:'/us-properties'},
    {label: 'Europe Commercial Properties', href:'/europe-commercial-properties'},
  ],
  markets: [
    { label: 'Africa', href: '/africa' },
    { label: 'Europe', href: '/europe' },
    { label: 'UK Properties', href: '/uk-properties' },
    { label: 'Middle East', href: '/middle-east' },
    { label: 'Asia Pacific', href: '/asia-pacific' },
    { label: 'Americas', href: '/americas' },
  ],

  invest: [
    { label: 'Institutional Investors', href: '/institutional-investors' },
    { label: 'How We Work With Institutions', href: '/how-we-work-with-institutions' },
    { label: 'Private Equity Real Estate', href: '/private-equity-real-estate' },
    { label: 'Investment Calculator', href: '/calculator' },
    { label: 'Investment Analysis', href: '/investment-analysis' },
    { label: 'Exit Strategy Planning', href: '/exit-strategy-planning' },
    { label: 'Capital Structuring', href: '/strategic-land-banking' },
    { label: 'Trust Structures', href: '/trust-structures' },
    { label: 'Wealth Management', href: '/wealth-management' },
  ],

  insights: [
    { label: 'Market Intelligence', href: '/market-insights' },
    { label: 'Quarterly Market Reports', href: '/quarterly-market-reports' },
    { label: 'Research', href: '/research' },
    { label: 'Sector Performance', href: '/sector-performance' },
    { label: 'Risk Analysis', href: '/country-risk-analysis' },
    { label: 'Blog', href: '/blog' },
    { label: 'Videos', href: '/videos' },
  ],

  company: [
    { label: 'About Murivest', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Legacy & Guide', href: '/legacy-guide' },
    { label: 'Murivest Foundation', href: '/foundation' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],

  utilities: [
    { label: 'AssetCare+', href: '/asset-care-resources' },
    { label: 'How AssetCare Works', href: '/how-assetcare-works' },
    { label: 'How CRE Works', href: '/how-cre-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'List Property', href: '/sell'},
  ],
};
