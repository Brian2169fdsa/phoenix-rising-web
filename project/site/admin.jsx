const { Icon, Wordmark, mount } = window;
const { Button, Card, Badge, Input } = window.PhoenixRisingDesignSystem_61b068;

const NAV = [
  ["dashboard", "Dashboard", "layout-dashboard"], ["bookings", "Bookings", "calendar-check"],
  ["payments", "Payments", "credit-card"], ["reviews", "Reviews", "star"],
  ["pricing", "Pricing", "dollar-sign"], ["settings", "Settings", "settings"],
];

const STATUS = {
  Confirmed: "var(--success)", Scheduled: "var(--phoenix-blue)", "Quote sent": "var(--ember)",
  Completed: "var(--cool-gray)", Paid: "var(--success)", Pending: "var(--ember)", Refunded: "var(--error)",
};
const Dot = ({ s }) => <span className="statusdot" style={{ color: STATUS[s] || "var(--cool-gray)" }}>{s}</span>;

const BOOKINGS = [
  ["#PR-8841", "Dana Rivera", "Residential · Deluxe", "Arcadia", "Jun 9, 9–11a", "Confirmed", "$249"],
  ["#PR-8840", "Vance Plaza Ops", "High-Rise · floors 1–12", "Downtown", "Jun 10, after-hrs", "Scheduled", "$4,200"],
  ["#PR-8839", "Priya Nair", "Residential · Standard", "Chandler", "Jun 11, 1–3p", "Confirmed", "$189"],
  ["#PR-8838", "Marcus Tan", "Commercial · monthly", "Scottsdale", "Recurring", "Scheduled", "$380/mo"],
  ["#PR-8837", "Hector Marín", "Post-construction", "Gilbert", "Quote pending", "Quote sent", "-"],
  ["#PR-8836", "Yolanda P.", "Residential · Premium", "Paradise Valley", "Jun 7, 7–9a", "Completed", "$329"],
];
const PAYMENTS = [
  ["ch_3Pk…a1", "Dana Rivera", "Deluxe clean", "Jun 6", "Paid", "$249.00"],
  ["ch_3Pk…b7", "Yolanda P.", "Premium clean", "Jun 5", "Paid", "$329.00"],
  ["sub_1Mz…", "Marcus Tan", "Commercial monthly", "Jun 1", "Paid", "$380.00"],
  ["ch_3Pk…c2", "Priya Nair", "Standard · deposit", "Jun 4", "Pending", "$47.25"],
  ["ch_3Pk…d9", "T. Brooks", "Standard clean", "May 30", "Refunded", "−$189.00"],
];
const REVIEWS = [
  ["Dana R.", "Arcadia", 5, "Fifteen years of hard water, gone. Looks like new construction.", "Published"],
  ["Marcus T.", "Scottsdale", 5, "Never looked this consistent, the COI made my PM's day.", "Published"],
  ["Trevor B.", "Glendale", 4, "Re-did one pane without complaint. The guarantee in action.", "Pending"],
];

function Login({ onIn }) {
  const [pw, setPw] = React.useState("");
  return (
    <div className="login">
      <div className="login__card">
        <Card data-fade>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}><Wordmark /></div>
          <h1 className="svcrow__title" style={{ fontSize: 22, textAlign: "center" }}>Operations Dashboard</h1>
          <p className="muted center" style={{ fontSize: 14, marginTop: 6 }}>Staff access only, sign in to continue.</p>
          <form style={{ marginTop: 22 }} onSubmit={(e) => { e.preventDefault(); onIn(); }}>
            <div className="field-stack">
              <Input label="Email" type="email" placeholder="you@phoenixrising.co" defaultValue="ops@phoenixrising.co" />
              <Input label="Password" type="password" placeholder="••••••••" value={pw} onChange={(e) => setPw(e.target.value)} hint="Demo: any password works" />
            </div>
            <div style={{ marginTop: 20 }}><Button variant="primary" size="lg" fullWidth type="submit" rightIcon={<Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />}>Sign in</Button></div>
            <p className="muted center" style={{ fontSize: 12.5, marginTop: 14 }}><Icon name="lock" size={13} style={{ display: "inline", verticalAlign: "-2px", color: "var(--success)" }} /> Magic-link sign-in available for staff.</p>
          </form>
        </Card>
        <p className="center" style={{ marginTop: 16 }}><a href="index.html" style={{ color: "var(--chrome-300)", fontSize: 13.5 }}>← Back to website</a></p>
      </div>
    </div>
  );
}

function Table({ head, rows, render }) {
  return (
    <table className="tbl">
      <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{render(r)}</tr>)}</tbody>
    </table>
  );
}

function Dashboard() {
  return (
    <div data-fade>
      <div className="kpis">
        {[["Bookings this week", "23", "+18%"], ["Revenue (MTD)", "$11,840", "+9%"], ["Quote requests", "14", "+5%"], ["Avg. rating", "4.9", "stable"]].map(([l, n, d]) => (
          <div className="kpi" key={l}>
            <div className="kpi__lbl">{l}</div><div className="kpi__num">{n}</div>
            <div className={"kpi__delta up"}><Icon name="trending-up" size={13} /> {d}</div>
          </div>
        ))}
      </div>
      <h2 className="feature__t" style={{ fontSize: 16, margin: "30px 0 14px" }}>Upcoming bookings</h2>
      <Table head={["Ref", "Customer", "Service", "Area", "When", "Status", "Total"]} rows={BOOKINGS.slice(0, 5)}
        render={(r) => <>{r.slice(0, 5).map((c, i) => <td key={i}>{c}</td>)}<td><Dot s={r[5]} /></td><td style={{ fontWeight: 700 }}>{r[6]}</td></>} />
    </div>
  );
}

const PAGES = {
  dashboard: { title: "Dashboard", el: <Dashboard /> },
  bookings: { title: "Bookings & Quote Requests", el: <div data-fade><Table head={["Ref", "Customer", "Service", "Area", "When", "Status", "Total"]} rows={BOOKINGS} render={(r) => <>{r.slice(0, 5).map((c, i) => <td key={i}>{c}</td>)}<td><Dot s={r[5]} /></td><td style={{ fontWeight: 700 }}>{r[6]}</td></>} /></div> },
  payments: { title: "Stripe Payments & Subscriptions", el: <div data-fade><Table head={["Charge ID", "Customer", "Description", "Date", "Status", "Amount"]} rows={PAYMENTS} render={(r) => <>{r.slice(0, 4).map((c, i) => <td key={i} className={i === 0 ? "mono" : ""} style={i === 0 ? { fontSize: 13, color: "var(--cool-gray)" } : null}>{c}</td>)}<td><Dot s={r[4]} /></td><td style={{ fontWeight: 700 }}>{r[5]}</td></>} /></div> },
  reviews: { title: "Reviews", el: <div data-fade><Table head={["Customer", "Area", "Rating", "Review", "Status"]} rows={REVIEWS} render={(r) => <><td style={{ fontWeight: 600 }}>{r[0]}</td><td>{r[1]}</td><td><window.Stars value={r[2]} size={14} /></td><td style={{ maxWidth: 360, color: "var(--cool-gray)" }}>{r[3]}</td><td><Dot s={r[4]} /></td></>} /></div> },
  pricing: { title: "Pricing Content", el: <PricingEditor /> },
  settings: { title: "Settings", el: <SettingsPane /> },
};

function PricingEditor() {
  return (
    <div data-fade className="grid grid-3">
      {[["Standard", "189"], ["Deluxe", "249"], ["Premium", "329"]].map(([n, p]) => (
        <Card key={n}><Eyebrowless n={n} p={p} /></Card>
      ))}
    </div>
  );
}
function Eyebrowless({ n, p }) {
  return (
    <div>
      <h3 className="feature__t" style={{ fontSize: 16 }}>{n} package</h3>
      <div style={{ marginTop: 12 }}><Input label="Per-visit price ($)" defaultValue={p} /></div>
      <div style={{ marginTop: 12 }}><Input label="Pane limit" defaultValue={n === "Standard" ? "20" : n === "Deluxe" ? "35" : "60"} /></div>
      <div style={{ marginTop: 14 }}><Button variant="secondary" fullWidth>Save changes</Button></div>
    </div>
  );
}
function SettingsPane() {
  return (
    <div data-fade className="panel" style={{ maxWidth: 560 }}>
      <h3 className="feature__t" style={{ fontSize: 16 }}>Integrations</h3>
      <div style={{ marginTop: 16 }} className="field-stack">
        {[["Stripe", "Connected · live mode", true], ["Resend (email)", "Connected", true], ["Google Reviews", "Sync nightly", true]].map(([t, s, ok]) => (
          <div className="linerow" key={t} style={{ borderBottom: "1px solid var(--chrome-100)" }}>
            <span className="linerow__ico"><Icon name={ok ? "check-circle" : "x"} size={18} style={{ color: ok ? "var(--success)" : "var(--error)" }} /></span>
            <span><span className="linerow__t">{t}</span><span className="linerow__d">{s}</span></span>
            <span className="linerow__amt"><Button variant="tertiary">Manage</Button></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminApp() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState("dashboard");
  if (!authed) return <Login onIn={() => setAuthed(true)} />;
  const page = PAGES[view];
  return (
    <div className="admin">
      <aside className="admin__side">
        <Wordmark light />
        <nav className="admin__nav">
          {NAV.map(([id, label, ic]) => (
            <button key={id} className={"admin__navlink" + (view === id ? " on" : "")} onClick={() => setView(id)}>
              <Icon name={ic} size={18} /> {label}
            </button>
          ))}
        </nav>
        <button className="admin__navlink" style={{ marginTop: "auto" }} onClick={() => setAuthed(false)}><Icon name="log-out" size={18} /> Sign out</button>
      </aside>
      <main className="admin__main">
        <div className="admin__bar">
          <div>
            <span className="eyebrow" style={{ display: "block" }}>Phoenix Rising · Operations</span>
            <h1 className="svcrow__title" style={{ fontSize: 26, marginTop: 6 }}>{page.title}</h1>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Button variant="secondary">Export CSV</Button>
            <Button variant="primary" href="booking.html" rightIcon={<Icon name="chevron-right" size={16} style={{ color: "var(--ember)" }} />}>New booking</Button>
          </div>
        </div>
        {page.el}
      </main>
    </div>
  );
}

window.mount(AdminApp);
