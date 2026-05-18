// ─── src/components/discussion/CommentForm.tsx ───────────────────────────────
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client'


interface Props {
  pageSlug: string;
  pageType: 'article' | 'property' | 'insight';
  onSuccess?: () => void;
}

const FIELD: React.CSSProperties = {
  border: '1px solid #E8E6E1',
  padding: '12px 16px',
  fontSize: '14px',
  fontFamily: 'Georgia, serif',
  color: '#2C2C2C',
  background: '#FAFAF8',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
};

export default function CommentForm({ pageSlug, pageType, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    user_name:  '',
    user_email: '',
    comment:    '',
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  async function submit() {
    if (!form.user_name.trim() || !form.comment.trim()) return;
    setLoading(true);
    const supabase = createClient();
    await supabase.from('comments').insert({
      page_slug:  pageSlug,
      page_type:  pageType,
      user_name:  form.user_name,
      user_email: form.user_email || null,
      comment:    form.comment,
    });

    setForm({ user_name: '', user_email: '', comment: '' });
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    onSuccess?.();
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #E8E6E1', padding: '32px' }}>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B8680', marginBottom: '8px' }}>
        Join the Discussion
      </p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#5A5A5A', marginBottom: '24px', lineHeight: '1.6' }}>
        Share investment insights, market commentary, or leasing observations.
      </p>

      <div style={{ display: 'grid', gap: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <input
            placeholder="Your Name *"
            value={form.user_name}
            onChange={set('user_name')}
            required
            style={FIELD}
          />
          <input
            placeholder="Email (optional)"
            type="email"
            value={form.user_email}
            onChange={set('user_email')}
            style={FIELD}
          />
        </div>

        <textarea
          placeholder="Share your market insight, investment question, or analysis…"
          value={form.comment}
          onChange={set('comment')}
          required
          style={{ ...FIELD, minHeight: '140px', resize: 'vertical' }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '11px', color: '#8B8680' }}>
            Professional discussion only. All comments are moderated.
          </p>
          <button
            onClick={submit}
            disabled={loading || !form.user_name.trim() || !form.comment.trim()}
            style={{
              background: loading ? '#2D5A45' : '#1B4332',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: loading ? 'wait' : 'pointer',
              fontFamily: 'Georgia, serif',
              transition: 'background 0.2s',
              opacity: !form.user_name.trim() || !form.comment.trim() ? 0.5 : 1,
            }}
          >
            {loading ? 'Posting…' : 'Post Comment'}
          </button>
        </div>

        {success && (
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#1B4332', padding: '12px 16px', background: '#F0F7F4', border: '1px solid #1B4332' }}>
            Your comment has been submitted and is pending review.
          </p>
        )}
      </div>
    </div>
  );
}