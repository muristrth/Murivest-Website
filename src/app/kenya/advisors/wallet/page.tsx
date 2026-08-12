'use client';

import Link from 'next/link';

export default function AdvisorWalletPage() {
  return (
    <section style={{ maxWidth: 980, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <div style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>Advisor wallet</div>
          <h1 style={{ color: '#fff', fontSize: 32, margin: '8px 0' }}>Activity & earnings</h1>
          <p style={{ color: 'rgba(255,255,255,.55)', margin: 0 }}>Property activity, KPI events, and wallet movements appear here as they are verified.</p>
        </div>
        <Link href="/studio" style={{ color: '#C9A84C', textDecoration: 'none', fontSize: 12, fontWeight: 700 }}>Open Studio →</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12, marginBottom: 24 }}>
        {[
          ['Wallet balance', 'KES 0', 'Awaiting verified activity'],
          ['Properties this week', '0', 'Sanity activity'],
          ['Weekly KPI score', '0/100', 'Updates automatically'],
        ].map(([label, value, detail]) => <div key={label} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: 18 }}><div style={{ color: 'rgba(255,255,255,.48)', fontSize: 11 }}>{label}</div><div style={{ color: '#C9A84C', fontSize: 24, fontWeight: 800, marginTop: 10 }}>{value}</div><div style={{ color: 'rgba(255,255,255,.35)', fontSize: 11, marginTop: 6 }}>{detail}</div></div>)}
      </div>
      <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: 22, color: 'rgba(255,255,255,.55)', fontSize: 13 }}>No wallet events yet. Once your first property edit is verified, the activity will be recorded here with the applicable KES 500 earning.</div>
    </section>
  );
}
