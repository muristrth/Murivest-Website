// ─── src/components/discussion/DiscussionSection.tsx ─────────────────────────
'use client';

import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client'
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import AskResearch from './AskResearch';

interface Comment {
  id: string;
  user_name: string;
  comment: string;
  role?: string;
  is_verified?: boolean;
  is_featured?: boolean;
  upvotes?: number;
  created_at?: string;
}

interface Props {
  pageSlug: string;
  pageType: 'article' | 'property' | 'insight';
  variant?: 'property' | 'article';
}

export default function DiscussionSection({ pageSlug, pageType, variant = 'property' }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading]   = useState(true);
  const [count, setCount]       = useState(0);

  const accent = variant === 'property' ? '#1B4332' : '#7B6C55';

  const loadComments = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const { data, count: total } = await supabase
      .from('comments')
      .select('*', { count: 'exact' })
      .eq('page_slug', pageSlug)
      .eq('approved', true)
      .is('parent_id', null) // top-level only; replies loaded inside cards if needed
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false });

    setComments((data as Comment[]) ?? []);
    setCount(total ?? 0);
    setLoading(false);
  }, [pageSlug]);

  useEffect(() => { loadComments(); }, [loadComments]);

  return (
    <section
      aria-label="Investor Discussion"
      style={{ marginTop: '80px', paddingTop: '64px', borderTop: '1px solid #E8E6E1' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B8680', marginBottom: '8px' }}>
          Murivest Community
        </p>
        <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '28px', fontWeight: '700', color: '#2C2C2C', marginBottom: '8px', lineHeight: '1.2' }}>
          Investor Discussion
        </h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: '#5A5A5A', lineHeight: '1.7', margin: 0 }}>
          Discuss investment opportunities, market trends, lease activity, financing, and underwriting with the Murivest community.
        </p>
      </div>

      {/* Comment Form */}
      <CommentForm pageSlug={pageSlug} pageType={pageType} onSuccess={loadComments} />

      {/* Comment List */}
      <div style={{ marginTop: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B8680', margin: 0 }}>
            {loading ? 'Loading…' : `${count} ${count === 1 ? 'Comment' : 'Comments'}`}
          </h3>
          {count > 0 && (
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '11px', color: accent, letterSpacing: '0.05em' }}>
              Sorted by: Featured first
            </span>
          )}
        </div>

        <CommentList comments={comments} onRefresh={loadComments} />
      </div>

      {/* Ask Murivest Research */}
      <div style={{ marginTop: '64px' }}>
        <AskResearch pageSlug={pageSlug} variant={variant} />
      </div>

    </section>
  );
}