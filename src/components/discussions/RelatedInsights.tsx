// ─── src/components/discussion/RelatedInsights.tsx ───────────────────────────
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Insight {
  title: string;
  href: string;
  category?: string;
  excerpt?: string;
}

interface Props {
  insights?: Insight[];
  variant?: 'property' | 'article';
}

// Default static insights — replace with Sanity fetch in production
const DEFAULT_INSIGHTS: Insight[] = [
  {
    title: 'Nairobi Grade A Office Market Outlook',
    href:  '/research/nairobi-office-outlook',
    category: 'Market Outlook',
    excerpt: 'Institutional demand stabilizing across premium mixed-use nodes in Westlands and Upperhill.',
  },
  {
    title: 'Kenya Industrial & Logistics Trends',
    href:  '/research/kenya-logistics-trends',
    category: 'Industrial',
    excerpt: 'Mombasa Road and Athi River corridors seeing renewed demand from e-commerce and FMCG tenants.',
  },
  {
    title: 'East Africa CRE Capital Flows',
    href:  '/research/east-africa-capital-flows',
    category: 'Capital Markets',
    excerpt: 'Regional institutional investors increasing allocations to stabilised income-producing assets.',
  },
];

export default function RelatedInsights({ insights = DEFAULT_INSIGHTS, variant = 'property' }: Props) {
  const accent      = variant === 'property' ? '#1B4332' : '#7B6C55';
  const hoverBorder = variant === 'property' ? '#1B4332' : '#7B6C55';

  return (
    <section aria-label="Related Market Insights" style={{ marginTop: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B8680', marginBottom: '6px' }}>
            Murivest Research
          </p>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '22px', fontWeight: '700', color: '#2C2C2C', margin: 0 }}>
            Related Market Insights
          </h2>
        </div>
        <Link
          href="/research"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Georgia, serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent, textDecoration: 'none' }}
        >
          All Research <ArrowUpRight size={12} strokeWidth={1.5} />
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        {insights.map((insight, i) => (
          <Link
            key={i}
            href={insight.href}
            style={{ textDecoration: 'none', display: 'block', background: '#fff', border: '1px solid #E8E6E1', padding: '24px', transition: 'border-color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = hoverBorder)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E8E6E1')}
          >
            {insight.category && (
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B8680', marginBottom: '8px' }}>
                {insight.category}
              </p>
            )}
            <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '15px', fontWeight: '700', color: '#2C2C2C', lineHeight: '1.4', marginBottom: '10px' }}>
              {insight.title}
            </p>
            {insight.excerpt && (
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B6259', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {insight.excerpt}
              </p>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'Georgia, serif', fontSize: '11px', color: accent, letterSpacing: '0.05em', marginTop: '14px' }}>
              Read <ArrowUpRight size={10} strokeWidth={1.5} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}