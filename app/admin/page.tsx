'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';

const VIEWS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
  { id: 'bookings', label: 'Bookings', icon: 'clipboard-list' },
  { id: 'payments', label: 'Payments', icon: 'dollar-sign' },
  { id: 'reviews', label: 'Reviews', icon: 'star' },
  { id: 'pricing', label: 'Pricing', icon: 'percent' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

const MOCK_BOOKINGS = [
  { id: 'PR-001', name: 'Dana R.', service: 'Residential Deluxe', date: 'Jun 10', city: 'Arcadia', status: 'Confirmed', amount: 270 },
  { id: 'PR-002', name: 'Marcus T.', service: 'Commercial (Monthly)', date: 'Jun 12', city: 'Scottsdale', status: 'Recurring', amount: 209 },
  { id: 'PR-003', name: 'Priya N.', service: 'Residential Standard', date: 'Jun 14', city: 'Chandler', status: 'Confirmed', amount: 205 },
  { id: 'PR-004', name: 'James L.', service: 'Hard-Water Removal', date: 'Jun 15', city: 'Mesa', status: 'Pending', amount: 349 },
  { id: 'PR-005', name: 'Sarah M.', service: 'Residential Premium', date: 'Jun 17', city: 'Paradise Valley', status: 'Confirmed', amount: 357 },
];

function Dashboard() {
  const stats = [
    { label: 'This Month Revenue', val: '$4,820', icon: 'dollar-sign', up: '+12%' },
    { label: 'Active Bookings', val: '18', icon: 'calendar-check', up: '+3' },
    { label: 'Recurring Clients', val: '24', icon: 'users', up: '+2' },
    { label: 'Avg Rating', val: '4.9', icon: 'star', up: '600+ reviews' },
  ];
  return (
    <>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Dashboard</h2>
      <div className="statrow" style={{ marginTop: 24 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: 'var(--white)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-lg)', padding: 22, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ background: 'var(--chrome-100)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-sm)', padding: 8, color: 'var(--phoenix-blue)', display: 'grid', placeItems: 'center' }}>
                <Icon name={s.icon} size={18} />
              </span>
              <span style={{ fontSize: 13, color: 'var(--cool-gray)', fontWeight: 500 }}>{s.label}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--slate-ink)' }}>{s.val}</div>
            <div style={{ fontSize: 12, color: 'var(--success)', fontWeight: 600, marginTop: 4 }}>{s.up}</div>
          </div>
        ))}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)', marginTop: 32 }}>Recent Bookings</h3>
      <BookingsTable />
    </>
  );
}

function BookingsTable() {
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginTop: 16 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--chrome-300)', background: 'var(--bone)' }}>
            {['Ref', 'Client', 'Service', 'Date', 'City', 'Status', 'Amount'].map((h) => (
              <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--cool-gray)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MOCK_BOOKINGS.map((b) => (
            <tr key={b.id} style={{ borderBottom: '1px solid var(--chrome-100)' }}>
              <td style={{ padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cool-gray)' }}>{b.id}</td>
              <td style={{ padding: '14px 16px', fontWeight: 600, fontSize: 14, color: 'var(--slate-ink)' }}>{b.name}</td>
              <td style={{ padding: '14px 16px', fontSize: 13.5, color: 'var(--slate-ink)' }}>{b.service}</td>
              <td style={{ padding: '14px 16px', fontSize: 13.5, color: 'var(--slate-ink)' }}>{b.date}</td>
              <td style={{ padding: '14px 16px', fontSize: 13.5, color: 'var(--cool-gray)' }}>{b.city}</td>
              <td style={{ padding: '14px 16px' }}>
                <span style={{ padding: '4px 10px', borderRadius: 'var(--r-pill)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', background: b.status === 'Confirmed' ? 'rgba(30,142,90,.12)' : b.status === 'Recurring' ? 'rgba(20,87,166,.12)' : 'rgba(196,90,30,.12)', color: b.status === 'Confirmed' ? 'var(--success)' : b.status === 'Recurring' ? 'var(--phoenix-blue)' : 'var(--ember)' }}>{b.status}</span>
              </td>
              <td style={{ padding: '14px 16px', fontWeight: 700, fontSize: 14, color: 'var(--slate-ink)' }}>${b.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === 'phoenix2026' || pw === (process.env.NEXT_PUBLIC_ADMIN_HINT || '')) {
      onLogin();
    } else {
      setErr(true);
    }
  }
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bone)' }}>
      <form onSubmit={submit} style={{ background: 'var(--white)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-lg)', padding: 40, width: 360, boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <img src="/assets/logo-mark.png" alt="" style={{ height: 48 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--slate-ink)' }}>PHOENIX <span style={{ color: 'var(--phoenix-blue)' }}>RISING</span></div>
            <div style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--cool-gray)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Admin Panel</div>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.04em', color: 'var(--slate-ink)', display: 'block', marginBottom: 8 }}>Password</label>
          <input type="password" className="ds-input" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Enter admin password" required />
        </div>
        {err && <p style={{ color: 'var(--error)', fontSize: 13, marginBottom: 12 }}>Incorrect password.</p>}
        <Button variant="primary" size="lg" fullWidth type="submit">Sign in</Button>
      </form>
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [view, setView] = useState('dashboard');

  if (!authed) return <LoginGate onLogin={() => setAuthed(true)} />;

  return (
    <div className="admin">
      <aside className="admin__side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/assets/logo-mark-knockout.png" alt="" style={{ height: 40 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: '.06em', color: '#fff' }}>PHOENIX <span style={{ color: 'var(--sky-glass)' }}>RISING</span></div>
            <div style={{ fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--chrome-500)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Admin</div>
          </div>
        </div>
        <nav className="admin__nav">
          {VIEWS.map((v) => (
            <button key={v.id} className={'admin__navlink' + (view === v.id ? ' on' : '')} onClick={() => setView(v.id)}>
              <Icon name={v.icon} size={17} /> {v.label}
            </button>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <button className="admin__navlink" onClick={() => setAuthed(false)}>
            <Icon name="log-out" size={17} /> Sign out
          </button>
        </div>
      </aside>
      <main className="admin__main">
        {view === 'dashboard' && <Dashboard />}
        {view === 'bookings' && (
          <>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Bookings</h2>
            <BookingsTable />
          </>
        )}
        {view === 'payments' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Payments</h2>
            <p style={{ color: 'var(--cool-gray)', marginTop: 16 }}>Connect your Stripe account to view live payment data. All transactions appear here once the Stripe keys are configured in your environment variables.</p>
            <div style={{ marginTop: 20 }}>
              <Button variant="primary" href="https://dashboard.stripe.com" rightIcon="external-link">Open Stripe Dashboard</Button>
            </div>
          </div>
        )}
        {view === 'reviews' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Reviews</h2>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
              {[
                { n: 'Dana R.', loc: 'Arcadia · Residential', q: 'They got fifteen years of hard-water spotting off our patio glass. It looks like new construction. The crew was on time and spotless.', r: 5 },
                { n: 'Marcus T.', loc: 'Scottsdale · Commercial', q: "We have Phoenix Rising on a monthly storefront plan. Our windows have never looked this consistent, and the COI made our property manager happy.", r: 5 },
                { n: 'Priya N.', loc: 'Chandler · Residential', q: "Booked online Sunday, cleaned Wednesday. Streak-free, screens wiped, tracks vacuumed. Exactly what was quoted, no upsell.", r: 5 },
              ].map((rv) => (
                <div key={rv.n} style={{ background: 'var(--white)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-lg)', padding: 20 }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                    {Array.from({ length: rv.r }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--ember)', fontSize: 16 }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--slate-ink)' }}>&quot;{rv.q}&quot;</p>
                  <div style={{ marginTop: 12, fontWeight: 700, fontSize: 14, color: 'var(--slate-ink)' }}>{rv.n} <span style={{ fontWeight: 400, color: 'var(--cool-gray)', fontSize: 12.5 }}>· {rv.loc}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {view === 'pricing' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Pricing</h2>
            <p style={{ color: 'var(--cool-gray)', marginTop: 16 }}>Manage pricing in Stripe Products. Changes reflect automatically on the booking and pricing pages once Stripe price IDs are set in your .env.local.</p>
            <div style={{ marginTop: 20 }}>
              <Button variant="primary" href="https://dashboard.stripe.com/products" rightIcon="external-link">Open Stripe Products</Button>
            </div>
          </div>
        )}
        {view === 'settings' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', color: 'var(--slate-ink)' }}>Settings</h2>
            <div style={{ background: 'var(--white)', border: '1px solid var(--chrome-300)', borderRadius: 'var(--r-lg)', padding: 24, marginTop: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate-ink)' }}>Environment Variables</h3>
              <p style={{ color: 'var(--cool-gray)', fontSize: 14, marginTop: 8 }}>Configure these in your Vercel project settings or .env.local file:</p>
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['STRIPE_SECRET_KEY', 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY', 'STRIPE_WEBHOOK_SECRET', 'RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'NEXT_PUBLIC_SITE_URL'].map((key) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--bone)', borderRadius: 'var(--r-sm)', border: '1px solid var(--chrome-300)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                    <span>{key}</span>
                    <span style={{ color: 'var(--cool-gray)', fontSize: 11 }}>Set in Vercel</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
