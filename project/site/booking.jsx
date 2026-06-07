const { Icon, SiteHeader, SiteFooter, Eyebrow, mount } = window;
const { Button, Card, Badge, Input, Select } = window.PhoenixRisingDesignSystem_61b068;

const SERVICES = [
  { id: "residential", icon: "home", t: "Residential", d: "Whole-home interior & exterior", instant: true },
  { id: "commercial", icon: "building-2", t: "Commercial / Storefront", d: "Offices, retail, recurring plans", instant: false },
  { id: "high-rise", icon: "layers", t: "High-Rise / Multi-Story", d: "Rope-access & lift cleaning", instant: false },
  { id: "solar", icon: "sun", t: "Solar Panel Cleaning", d: "Pure-water, output-restoring", instant: true },
  { id: "post-construction", icon: "hammer", t: "Post-Construction", d: "New-build & remodel cleanup", instant: false },
  { id: "screens", icon: "wrench", t: "Screens & Tracks", d: "Deep-clean add-on", instant: true },
];
const STEPS = ["Service", "Property", "Address", "Schedule", "Contact", "Review"];
const METRO = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria", "Surprise", "Paradise Valley", "Avondale", "Goodyear"];
const SLOTS = ["7:00 – 9:00 AM", "9:00 – 11:00 AM", "11:00 AM – 1:00 PM", "1:00 – 3:00 PM", "3:00 – 5:00 PM"];

const SIZE_BASE = { small: 189, medium: 249, large: 329 };
const SOLAR_BASE = 149, SCREENS_BASE = 59;

function estimate(d) {
  if (d.service === "residential") {
    let p = SIZE_BASE[d.size] || 0;
    if (d.stories === "2") p += 60;
    if (d.stories === "3+") p += 140;
    if (d.hardwater) p += 80;
    if (d.frequency === "monthly") p = Math.round(p * 0.84);
    else if (d.frequency === "quarterly") p = Math.round(p * 0.92);
    return p;
  }
  if (d.service === "solar") return SOLAR_BASE + (d.panels === "20+" ? 100 : d.panels === "10-20" ? 50 : 0);
  if (d.service === "screens") return SCREENS_BASE;
  return null; // quote-based
}

function MoneyCal({ value, onPick }) {
  // June 2026 starts on a Monday (2026-06-01 is a Monday)
  const days = 30, firstDow = 1; // Sun=0
  const today = 6; // pretend "today" is the 6th
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const dow = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <button className="slot" style={{ width: 38, padding: 8 }} disabled><Icon name="chevron-left" size={16} /></button>
        <strong style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: ".04em" }}>June 2026</strong>
        <button className="slot" style={{ width: 38, padding: 8 }}><Icon name="chevron-right" size={16} /></button>
      </div>
      <div className="cal">
        {dow.map((d) => <span className="cal__dow" key={d}>{d}</span>)}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const dowIdx = (firstDow + d - 1) % 7;
          const disabled = d < today || dowIdx === 0; // past or Sunday
          return <button key={i} className={"cal__day" + (value === d ? " sel" : "")} disabled={disabled} onClick={() => onPick(d)}>{d}</button>;
        })}
      </div>
      <p className="muted" style={{ fontSize: 12.5, marginTop: 12 }}>Closed Sundays. Same-week slots fill fast.</p>
    </div>
  );
}

function BookingPage() {
  const [step, setStep] = React.useState(0);
  const [d, setD] = React.useState({ service: "", size: "", stories: "", windows: "", sqft: "", floors: "", frequency: "one-time", hardwater: false, panels: "", street: "", city: "", zip: "", date: null, slot: "", name: "", email: "", phone: "", notes: "" });
  const set = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const svc = SERVICES.find((s) => s.id === d.service);
  const price = estimate(d);
  const instant = svc && svc.instant && price != null;

  const canNext = [
    () => !!d.service,
    () => d.service === "residential" ? (d.size && d.stories) : d.service === "solar" ? d.panels : true,
    () => d.street && d.city && /^85\d{3}$/.test(d.zip),
    () => d.date && d.slot,
    () => d.name && /\S+@\S+\.\S+/.test(d.email) && d.phone,
    () => true,
  ];
  const go = (n) => setStep(Math.max(0, Math.min(STEPS.length - 1, n)));

  function review() {
    // route: instant price -> checkout; otherwise -> quote confirmation
    if (instant) {
      const params = new URLSearchParams({ plan: d.service, price: String(price), date: String(d.date), slot: d.slot, city: d.city });
      window.location.href = "checkout.html?" + params.toString();
    } else {
      window.location.href = "checkout-success.html?type=quote&service=" + d.service;
    }
  }

  return (
    <div className="site">
      <SiteHeader active="booking.html" />
      <section className="pagehead">
        <div className="container pagehead__inner" style={{ padding: "56px 0 56px" }}>
          <div className="crumbs"><a href="index.html">Home</a> / <span>Book</span></div>
          <Eyebrow>Book a Cleaning</Eyebrow>
          <h1 className="pagehead__title" style={{ fontSize: "clamp(34px,4.5vw,48px)" }}>Crystal-clear in <span className="accent">six steps</span></h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="bk">
            <aside className="bk__rail">
              <ol className="bk__steps">
                {STEPS.map((s, i) => (
                  <li key={s} className={"bk__step" + (i === step ? " on" : i < step ? " done" : "")}>
                    <span className="bk__num">{i < step ? <Icon name="check" size={15} strokeWidth={2.6} /> : i + 1}</span>
                    <span><span className="bk__step-t">{s}</span><span className="bk__step-d">{["Pick a service", "Tell us the details", "Where in the valley", "Day & time", "Your info", "Confirm & price"][i]}</span></span>
                  </li>
                ))}
              </ol>
            </aside>

            <div>
              <div className="bk__progress"><span style={{ width: ((step + 1) / STEPS.length * 100) + "%" }} /></div>
              <div className="panel" data-fade>
                {step === 0 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>What can we clean for you?</h2>
                    <p className="muted" style={{ marginTop: 8 }}>Choose your service to get started. Residential and solar get an instant price.</p>
                    <div className="optgrid optgrid--2" style={{ marginTop: 22 }}>
                      {SERVICES.map((s) => (
                        <button key={s.id} className={"opt" + (d.service === s.id ? " sel" : "")} onClick={() => set("service", s.id)}>
                          <span className="opt__ico"><Icon name={s.icon} size={20} /></span>
                          <span><span className="opt__t">{s.t}</span><span className="opt__d">{s.d}</span>
                            {s.instant && <span style={{ display: "inline-block", marginTop: 6 }}><Badge tone="success">Instant price</Badge></span>}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>About your property</h2>
                    <p className="muted" style={{ marginTop: 8 }}>This helps us bring the right crew and quote it right the first time.</p>
                    {(d.service === "residential") && (
                      <div className="field-stack" style={{ marginTop: 22 }}>
                        <div>
                          <span className="label-top">Home size</span>
                          <div className="optgrid optgrid--3">
                            {[["small", "Small", "≤ 20 panes"], ["medium", "Medium", "20–35 panes"], ["large", "Large", "35+ / estate"]].map(([v, t, sub]) => (
                              <button key={v} className={"opt" + (d.size === v ? " sel" : "")} style={{ display: "block" }} onClick={() => set("size", v)}>
                                <span className="opt__t">{t}</span><span className="opt__d">{sub}</span></button>
                            ))}
                          </div>
                        </div>
                        <div className="field-row">
                          <Select label="Stories" placeholder="Select" value={d.stories} onChange={(e) => set("stories", e.target.value)} options={["1", "2", "3+"]} />
                          <Select label="Approx. windows" placeholder="Select" value={d.windows} onChange={(e) => set("windows", e.target.value)} options={["Under 15", "15–25", "25–40", "40+"]} />
                        </div>
                        <Select label="Frequency" value={d.frequency} onChange={(e) => set("frequency", e.target.value)} options={["one-time", "monthly", "quarterly"]} hint="Recurring plans save 8–16% per visit." />
                        <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14.5, cursor: "pointer" }}>
                          <input type="checkbox" checked={d.hardwater} onChange={(e) => set("hardwater", e.target.checked)} style={{ width: 18, height: 18, accentColor: "var(--phoenix-blue)" }} />
                          Add hard-water spot removal (+$80)
                        </label>
                      </div>
                    )}
                    {d.service === "solar" && (
                      <div className="field-stack" style={{ marginTop: 22 }}>
                        <Select label="Number of panels" placeholder="Select" value={d.panels} onChange={(e) => set("panels", e.target.value)} options={["Under 10", "10-20", "20+"]} />
                        <Select label="Array location" placeholder="Select" value={d.windows} onChange={(e) => set("windows", e.target.value)} options={["Roof-mounted", "Ground-mounted", "Both"]} />
                      </div>
                    )}
                    {["commercial", "high-rise", "post-construction", "screens"].includes(d.service) && (
                      <div className="field-stack" style={{ marginTop: 22 }}>
                        <div className="field-row">
                          <Input label="Approx. square footage" placeholder="e.g. 8,000" value={d.sqft} onChange={(e) => set("sqft", e.target.value)} />
                          <Select label="Floors" placeholder="Select" value={d.floors} onChange={(e) => set("floors", e.target.value)} options={["1", "2–4", "5–12", "12+"]} />
                        </div>
                        <Select label="Frequency" value={d.frequency} onChange={(e) => set("frequency", e.target.value)} options={["one-time", "weekly", "monthly", "quarterly"]} />
                        <Input label="Anything we should know?" placeholder="Access, hours, special glass…" value={d.notes} onChange={(e) => set("notes", e.target.value)} />
                      </div>
                    )}
                    {!d.service && <p className="muted" style={{ marginTop: 22 }}>Pick a service first.</p>}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>Where are we headed?</h2>
                    <p className="muted" style={{ marginTop: 8 }}>We serve the greater Phoenix metro. ZIP codes start with 85.</p>
                    <div className="field-stack" style={{ marginTop: 22 }}>
                      <Input label="Street address" placeholder="1234 E Camelback Rd" value={d.street} onChange={(e) => set("street", e.target.value)} required />
                      <div className="field-row">
                        <Select label="City" placeholder="Select your city" value={d.city} onChange={(e) => set("city", e.target.value)} options={METRO} required />
                        <Input label="ZIP code" placeholder="85016" value={d.zip} onChange={(e) => set("zip", e.target.value)} required
                          error={d.zip && !/^85\d{3}$/.test(d.zip) ? "Outside our Phoenix-metro area" : undefined}
                          hint={!d.zip ? "Phoenix metro only" : undefined} />
                      </div>
                      {d.city && /^85\d{3}$/.test(d.zip) && (
                        <div className="securenote"><Icon name="check-circle" size={16} /> Great news, {d.city} is right in our service area.</div>
                      )}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>Pick a day &amp; time</h2>
                    <p className="muted" style={{ marginTop: 8 }}>Real arrival windows, we'll text when the crew is on the way.</p>
                    <div className="split" style={{ marginTop: 22, gap: 32, alignItems: "start" }}>
                      <MoneyCal value={d.date} onPick={(v) => set("date", v)} />
                      <div>
                        <span className="label-top">Arrival window {d.date ? "· June " + d.date : ""}</span>
                        <div className="slots">
                          {SLOTS.map((s) => <button key={s} className={"slot" + (d.slot === s ? " sel" : "")} disabled={!d.date} onClick={() => set("slot", s)}>{s}</button>)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>How do we reach you?</h2>
                    <p className="muted" style={{ marginTop: 8 }}>We'll send a confirmation and an arrival text, no spam, ever.</p>
                    <div className="field-stack" style={{ marginTop: 22 }}>
                      <div className="field-row">
                        <Input label="Full name" placeholder="Jane Doe" value={d.name} onChange={(e) => set("name", e.target.value)} required />
                        <Input label="Phone" type="tel" placeholder="(602) 555-0147" value={d.phone} onChange={(e) => set("phone", e.target.value)} required />
                      </div>
                      <Input label="Email" type="email" placeholder="jane@email.com" value={d.email} onChange={(e) => set("email", e.target.value)} required
                        error={d.email && !/\S+@\S+\.\S+/.test(d.email) ? "Enter a valid email" : undefined} />
                      <Input label="Gate code / notes (optional)" placeholder="Dogs in yard, gate code #1234…" value={d.notes} onChange={(e) => set("notes", e.target.value)} />
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <h2 className="svcrow__title" style={{ fontSize: 24 }}>Review &amp; confirm</h2>
                    <p className="muted" style={{ marginTop: 8 }}>{instant ? "Here's your instant price. Next stop: secure checkout." : "We'll send this to our estimators for a fast, free quote."}</p>
                    <div style={{ marginTop: 20 }}>
                      {[["Service", svc ? svc.t : "-"], ["Property", d.service === "residential" ? `${d.size || "-"} home · ${d.stories || "1"} story` : d.sqft ? d.sqft + " sq ft" : d.panels ? d.panels + " panels" : "-"], ["Frequency", d.frequency], ["Address", `${d.street}, ${d.city} ${d.zip}`], ["Date", d.date ? `June ${d.date}, 2026` : "-"], ["Window", d.slot || "-"], ["Contact", `${d.name} · ${d.phone}`]].map(([k, v]) => (
                        <div className="sumline" key={k}><span>{k}</span><span>{v}</span></div>
                      ))}
                      <div className="sumtotal">
                        <span className="label-top" style={{ margin: 0 }}>{instant ? "Estimated total" : "Estimate"}</span>
                        <b>{instant ? "$" + price : "Free quote"}</b>
                      </div>
                      {!instant && <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>Commercial, high-rise, and post-construction jobs are quoted on-site so you only pay for what you need.</p>}
                    </div>
                  </div>
                )}

                <div className="bk__actions">
                  {step > 0 ? <Button variant="tertiary" onClick={() => go(step - 1)} leftIcon={<Icon name="arrow-left" size={17} />}>Back</Button> : <span className="muted" style={{ fontSize: 13 }}>Takes about a minute</span>}
                  {step < STEPS.length - 1
                    ? <Button variant="primary" disabled={!canNext[step]()} onClick={() => go(step + 1)} rightIcon={<Icon name="arrow-right" size={17} />}>Continue</Button>
                    : <Button variant="primary" onClick={review} rightIcon={<Icon name={instant ? "credit-card" : "send"} size={17} />}>{instant ? "Continue to checkout" : "Request my quote"}</Button>}
                </div>
              </div>
              <div className="securenote" style={{ justifyContent: "center", marginTop: 18 }}><Icon name="lock" size={15} /> Secure &amp; private · No charge until you confirm</div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

window.mount(BookingPage);
