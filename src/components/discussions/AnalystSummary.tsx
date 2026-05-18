// ─── src/components/discussion/AnalystSummary.tsx ────────────────────────────

import type { ReactNode } from 'react';

interface PropertyLike {
  analystSummary?: string;
  title?: string;
}

interface Props {
  /**
   * Optional direct summary string
   */
  summary?: string;

  /**
   * Optional property/article object
   * Allows cleaner integration with PropertyClientView
   */
  property?: PropertyLike;

  /**
   * Optional sidebar content
   */
  sidebar?: ReactNode;

  /**
   * 'property' → forest green accent
   * 'article'  → brass/taupe accent
   */
  variant?: 'property' | 'article';
}

export default function AnalystSummary({
  summary,
  property,
  sidebar,
  variant = 'property',
}: Props) {
  const resolvedSummary =
    summary || property?.analystSummary || '';

  // Prevent empty rendering
  if (!resolvedSummary.trim()) {
    return null;
  }

  const isProperty = variant === 'property';

  const accent = isProperty ? '#1B4332' : '#7B6C55';

  const bg = isProperty ? '#F5F4F0' : '#F5F3EE';

  const dotColor = isProperty ? '#B8956B' : '#C8BFB4';

  return (
    <section
      aria-label="Analyst Summary"
      itemProp="description"
      style={{
        background: bg,
        border: '1px solid #E8E6E1',
        borderLeft: `3px solid ${accent}`,
        padding: '32px',
        marginBottom: '0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: dotColor,
              flexShrink: 0,
            }}
          />

          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8B8680',
              margin: 0,
            }}
          >
            Analyst Summary
          </p>
        </div>

        {sidebar}
      </div>

      <p
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: '16px',
          lineHeight: '1.85',
          color: isProperty ? '#2C2C2C' : '#1C1C1C',
          margin: 0,
          whiteSpace: 'pre-line',
        }}
      >
        {resolvedSummary}
      </p>
    </section>
  );
}