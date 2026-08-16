// app/advisors/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './team-layout.css';

export const metadata: Metadata = {
  title: 'Team Portal — Murivest Realty Group',
  description: 'Associate performance tracking and KPI dashboard — Murivest Realty Group',
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="team-root">
      <nav className="team-nav">
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            <span className="logo-m">M</span>
            <span className="logo-text">URIVEST</span>
          </Link>
          <div className="nav-divider" />
          <span className="nav-portal-label">Team Portal</span>
        </div>
        <div className="nav-links">
          <Link href="/kenya/advisors"             className="nav-link">Dashboard</Link>
          <Link href="/kenya/advisors/log"         className="nav-link">Log Day</Link>
          <Link href="/kenya/advisors/leaderboard" className="nav-link">Leaderboard</Link>
          <Link href="/kenya/advisors/admin"       className="nav-link nav-link-admin">Admin</Link>
        </div>
      </nav>
      <main className="team-main">{children}</main>
    </div>
  );
}