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
  ],

  invest: [
    { label: 'Institutional Investors', href: '/institutional-investors' },
    { label: 'Private Equity Real Estate', href: '/private-equity-real-estate' },
    { label: 'Investment Analysis', href: '/investment-analysis' },
    { label: 'Exit Strategy Planning', href: '/exit-strategy-planning' },
    { label: 'Capital Structuring', href: '/strategic-land-banking' },
    { label: 'Trust Structures', href: '/trust-structures' },
    { label: 'Wealth Management', href: '/wealth-management' },
    { label: 'East Africa Industrial Advisory', href: '/east-africa-industrial-real-estate-advisory' },
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
};
