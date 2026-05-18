// ─── src/components/discussion/AskResearch.tsx ───────────────────────────────
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client'

interface Props {
  pageSlug: string;
  /**
   * Optional variant — 'property' uses forest green accent,
   * 'article' uses brass accent (matches ResearchPost).
   */
  variant?: 'property' | 'article';
}

export default function AskResearch({ pageSlug, variant = 'property' }: Props) {
  const [form, setForm]       = useState({ name: '', email: '', question: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  const accent = variant === 'article' ? '#7B6C55' : '#1B4332';
  const bg     = variant === 'article' ? '#F5F3EE' : '#F5F4F0';

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  async function submit() {
    if (!form.question.trim()) return;
    setLoading(true);

    await createClient().from('research_questions').insert({
      page_slug: pageSlug,
      name:      form.name || null,
      email:     form.email || null,
      question:  form.question,
    });

    setForm({ name: '', email: '', question: '' });
    setLoading(false);
    setDone(true);
  }

  const FIELD: React.CSSProperties = {
    border: '1px solid #E8E6E1',
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: 'Georgia, serif',
    color: '#2C2C2C',
    background: '#fff',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  };

  return (
    <section style={{ background: bg, border: `1px solid #E8E6E1`, borderLeft: `3px solid ${accent}`, padding: '36px' }}>
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B8680', marginBottom: '8px' }}>
          Ask Murivest Research
        </p>
        <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '22px', fontWeight: '700', color: '#2C2C2C', marginBottom: '8px', lineHeight: '1.3' }}>
          Submit a Research Question
        </p>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#5A5A5A', lineHeight: '1.7' }}>
          Questions on underwriting, leasing, market fundamentals, or capital structures are answered by the Murivest desk.
        </p>
      </div>

      {done ? (
        <div style={{ padding: '20px 24px', background: '#fff', border: `1px solid ${accent}` }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: accent, lineHeight: '1.7' }}>
            Your question has been received. The Murivest research desk will review it — responses are published publicly when relevant.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input placeholder="Name (optional)"  value={form.name}  onChange={set('name')}  style={FIELD} />
            <input placeholder="Email (optional)" value={form.email} onChange={set('email')} style={FIELD} type="email" />
          </div>

          <textarea
            placeholder="Ask about cap rates, lease structures, financing options, market outlook…"
            value={form.question}
            onChange={set('question')}
            style={{ ...FIELD, minHeight: '120px', resize: 'vertical' }}
          />

          <button
            onClick={submit}
            disabled={loading || !form.question.trim()}
            style={{
              alignSelf: 'flex-start',
              background: accent,
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: loading || !form.question.trim() ? 'not-allowed' : 'pointer',
              fontFamily: 'Georgia, serif',
              opacity: !form.question.trim() ? 0.5 : 1,
              transition: 'opacity 0.15s',
            }}
          >
            {loading ? 'Submitting…' : 'Submit Question'}
          </button>
        </div>
      )}
    </section>
  );
}