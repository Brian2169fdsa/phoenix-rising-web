const { Icon, SiteHeader, SiteFooter, Eyebrow, SectionHead, GlassSlot, mount } = window;
const { Button, Card, Badge } = window.PhoenixRisingDesignSystem_61b068;
const chevron = <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />;

const SERVICES = [
  { id: "residential", icon: "home", name: "Residential Window Cleaning", from: "$189",
    body: "Whole-home glass that disappears. We hand-detail every interior and exterior pane, wipe down screens, and vacuum the tracks, the corners other crews skip.",
    incl: ["Interior & exterior glass", "Screen wipe-down & re-fit", "Track & sill vacuuming", "Frame & ledge detailing", "Up to 3 stories from the ground", "Streak-free 48-hour guarantee"] },
  { id: "commercial", icon: "building-2", name: "Commercial / Storefront", from: "Custom",
    body: "First impressions live on your glass. Keep storefronts, lobbies, and offices consistently spotless on a schedule your tenants and customers notice.",
    incl: ["Weekly, monthly or quarterly plans", "After-hours & weekend crews", "Certificate of insurance provided", "Entryways, partitions & mirrors", "Dedicated account contact", "Volume & multi-site pricing"] },
  { id: "high-rise", icon: "layers", name: "High-Rise / Multi-Story", from: "Quote",
    body: "Tall buildings, handled safely. Our certified technicians use rope-access and lift systems to bring the same streak-free standard to every floor.",
    incl: ["IRATA-style rope access", "Boom & scissor-lift cleaning", "Full fall-protection protocols", "Up to 40 stories", "Façade & spandrel glass", "Scheduled maintenance contracts"] },
  { id: "screens-tracks", icon: "wrench", name: "Screen & Track Cleaning", from: "$59",
    body: "The detail that makes the difference. Built-up Arizona dust lives in your screens and tracks, we deep-clean both so your windows open and breathe clean.",
    incl: ["Screen removal & deep wash", "Track scrubbing & vacuuming", "Weep-hole clearing", "Re-screen & re-fit", "Add-on to any cleaning", "Pet-hair & pollen removal"] },
  { id: "solar", icon: "sun", name: "Solar Panel Cleaning", from: "$149",
    body: "Dusty panels lose output. Desert dust and hard-water film cut into your production, we restore it with pure-water cleaning that won't scratch or void warranties.",
    incl: ["Pure-water, scratch-free wash", "Output-restoring dust removal", "Roof & ground arrays", "Bird-dropping & film removal", "Manufacturer-safe methods", "Pairs with window service"] },
  { id: "post-construction", icon: "hammer", name: "Post-Construction Cleanup", from: "$299",
    body: "New build, perfect finish. Stickers, paint over-spray, stucco splatter, and construction film, we get glass move-in ready without a scratch.",
    incl: ["Sticker & label removal", "Paint & stucco over-spray", "Construction film & haze", "Razor-safe scraping", "Frame & track final clean", "Builder & GC accounts welcome"] },
];

function ServiceRow({ s, i }) {
  const flip = i % 2 === 1;
  return (
    <div className={"svcrow" + (flip ? " svcrow--flip" : "")} id={s.id} data-fade>
      <div>
        <Eyebrow>{s.from === "Custom" || s.from === "Quote" ? "By quote" : "From " + s.from}</Eyebrow>
        <h3 className="svcrow__title">{s.name}</h3>
        <hr className="headline-rule" />
        <p className="svcrow__body">{s.body}</p>
        <ul className="checklist">
          {s.incl.map((c) => <li key={c}><Icon name="check" size={17} strokeWidth={2.4} /> {c}</li>)}
        </ul>
        <div className="svcrow__foot">
          <Button variant="primary" href="booking.html" rightIcon={chevron}>Book this service</Button>
          <span className="pricechip">{s.from === "Custom" || s.from === "Quote" ? <span style={{ fontSize: 15, fontWeight: 600 }}>Free on-site quote</span> : <>{s.from}<span>/ from</span></>}</span>
        </div>
      </div>
      <div className="svcrow__media">
        <GlassSlot id={"svc-" + s.id} ratio="4/3" src={"assets/shot-svc-" + s.id + ".jpg"} label={s.name}
          badge={<Badge tone="primary">{s.name.split(" ")[0]}</Badge>} />
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="site">
      <SiteHeader active="services.html" />
      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="index.html">Home</a> / <span>Services</span></div>
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="pagehead__title">Six ways we make<br /><span className="accent">glass disappear</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">Residential to high-rise, new construction to solar arrays, one
            insured crew, one streak-free standard, all across the Phoenix metro.</p>
        </div>
      </section>

      <section className="section--alt section--tight">
        <div className="container">
          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <a key={s.id} href={"#" + s.id} className="opt" data-fade>
                <span className="opt__ico"><Icon name={s.icon} size={20} /></span>
                <span><span className="opt__t">{s.name.split(" / ")[0].replace(" Window Cleaning", "").replace(" Cleaning", "")}</span>
                  <span className="opt__d">{s.from === "Custom" || s.from === "Quote" ? "By quote" : "From " + s.from}</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((s, i) => <ServiceRow key={s.id} s={s} i={i} />)}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate" data-fade>
            <div>
              <h2>Not sure which service you need?</h2>
              <p>Tell us about your property and we'll recommend the right package, with a clear, flat price, usually the same day.</p>
            </div>
            <div className="ctaband__cta"><Button variant="primary" size="lg" href="booking.html" rightIcon={chevron}>Get a Free Quote</Button></div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

window.mount(ServicesPage);
