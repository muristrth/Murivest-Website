// ─── src/components/discussion/CommentList.tsx ───────────────────────────────
import CommentCard from './CommentCard';

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
  comments: Comment[];
  onRefresh?: () => void;
}

export default function CommentList({ comments, onRefresh }: Props) {
  // Separate featured to render first
  const featured = comments.filter((c) => c.is_featured);
  const rest      = comments.filter((c) => !c.is_featured);
  const ordered   = [...featured, ...rest];

  if (!ordered.length) {
    return (
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#8B8680', fontStyle: 'italic', textAlign: 'center', padding: '48px 0' }}>
        No discussion yet — be the first to contribute an insight.
      </p>
    );
  }

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      {ordered.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          onReplySuccess={onRefresh}
        />
      ))}
    </div>
  );
}