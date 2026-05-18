// ─── src/components/discussion/CommentCard.tsx ───────────────────────────────
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client'
import { Shield, ThumbsUp, MessageSquare, Calendar } from 'lucide-react';

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
  comment: Comment;
  onReplySuccess?: () => void;
}

function formatCommentDate(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-KE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function RoleTag({ role }: { role?: string }) {
  if (!role || role === 'visitor') return null;
  const map: Record<string, { label: string; color: string }> = {
    analyst:  { label: 'Analyst',         color: '#1B4332' },
    investor: { label: 'Investor',        color: '#B8956B' },
    admin:    { label: 'Murivest',        color: '#2C2C2C' },
  };
  const cfg = map[role];
  if (!cfg) return null;
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        fontSize: '10px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        background: cfg.color,
        color: '#fff',
        fontFamily: 'Georgia, serif',
      }}
    >
      {cfg.label}
    </span>
  );
}

export default function CommentCard({ comment, onReplySuccess }: Props) {
  const [upvoted, setUpvoted]     = useState(false);
  const [upvotes, setUpvotes]     = useState(comment.upvotes ?? 0);
  const [showReply, setShowReply] = useState(false);
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyLoading, setReplyLoading] = useState(false);

  async function handleUpvote() {
    if (upvoted) return;
    setUpvoted(true);
    setUpvotes((v) => v + 1);
    const supabase = createClient();
    await supabase.from('comment_votes').insert({ comment_id: comment.id });
    await supabase
      .from('comments')
      .update({ upvotes: upvotes + 1 })
      .eq('id', comment.id);
  }

  async function submitReply() {
    if (!replyName.trim() || !replyText.trim()) return;
    setReplyLoading(true);
    const supabase = createClient();
    await supabase.from('comments').insert({
      parent_id:  comment.id,
      page_slug:  '', // caller fills via parent
      page_type:  '',
      user_name:  replyName,
      comment:    replyText,
    });
    setReplyName('');
    setReplyText('');
    setReplyLoading(false);
    setShowReply(false);
    onReplySuccess?.();
  }

  const cardStyle: React.CSSProperties = {
    background:   '#fff',
    border:       '1px solid #E8E6E1',
    padding:      '24px',
    ...(comment.is_featured ? { borderLeft: '3px solid #B8956B' } : {}),
  };

  return (
    <article style={cardStyle}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div style={{ width: '40px', height: '40px', background: '#F5F4F0', border: '1px solid #E8E6E1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: '#8B8680' }}>
              {comment.user_name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: '700', color: '#2C2C2C', margin: 0 }}>
              {comment.user_name}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
              <RoleTag role={comment.role} />
              {comment.is_verified && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1B4332', border: '1px solid #1B4332', padding: '2px 8px', fontFamily: 'Georgia, serif' }}>
                  <Shield size={10} strokeWidth={1.5} /> Verified
                </span>
              )}
              {comment.created_at && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#8B8680', fontFamily: 'Georgia, serif' }}>
                  <Calendar size={10} strokeWidth={1.5} />
                  {formatCommentDate(comment.created_at)}
                </span>
              )}
            </div>
          </div>
        </div>

        {comment.is_featured && (
          <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8956B', fontFamily: 'Georgia, serif', flexShrink: 0 }}>
            Featured Response
          </span>
        )}
      </div>

      {/* Body */}
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.8', color: '#4A4540', margin: '0 0 20px 0' }}>
        {comment.comment}
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={handleUpvote}
          disabled={upvoted}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'transparent',
            border: `1px solid ${upvoted ? '#1B4332' : '#E8E6E1'}`,
            color: upvoted ? '#1B4332' : '#8B8680',
            padding: '6px 12px', fontSize: '11px', letterSpacing: '0.05em',
            cursor: upvoted ? 'default' : 'pointer',
            fontFamily: 'Georgia, serif', transition: 'all 0.15s',
          }}
        >
          <ThumbsUp size={12} strokeWidth={1.5} /> {upvotes}
        </button>

        <button
          onClick={() => setShowReply(!showReply)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'transparent', border: '1px solid #E8E6E1',
            color: '#8B8680', padding: '6px 12px', fontSize: '11px',
            letterSpacing: '0.05em', cursor: 'pointer',
            fontFamily: 'Georgia, serif', transition: 'all 0.15s',
          }}
        >
          <MessageSquare size={12} strokeWidth={1.5} /> Reply
        </button>
      </div>

      {/* Inline reply form */}
      {showReply && (
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E8E6E1', display: 'grid', gap: '12px' }}>
          <input
            placeholder="Your name"
            value={replyName}
            onChange={(e) => setReplyName(e.target.value)}
            style={{ border: '1px solid #E8E6E1', padding: '10px 14px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#2C2C2C', background: '#FAFAF8', width: '100%', boxSizing: 'border-box' }}
          />
          <textarea
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={{ border: '1px solid #E8E6E1', padding: '10px 14px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#2C2C2C', background: '#FAFAF8', width: '100%', minHeight: '100px', resize: 'vertical', boxSizing: 'border-box' }}
          />
          <button
            onClick={submitReply}
            disabled={replyLoading}
            style={{ alignSelf: 'flex-start', background: '#1B4332', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: replyLoading ? 'wait' : 'pointer', fontFamily: 'Georgia, serif' }}
          >
            {replyLoading ? 'Posting…' : 'Post Reply'}
          </button>
        </div>
      )}
    </article>
  );
}