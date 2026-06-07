const { Icon, Wordmark, SiteHeader, SiteFooter, Eyebrow, SectionHead, GlassSlot, Stars, BeforeAfter, mount } = window;
const { Button, Card, Badge, TrustBadge, PricingTier } = window.PhoenixRisingDesignSystem_61b068;

const chevron = <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />;

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div data-fade>
          <Eyebrow>The Valley's Trusted Glass</Eyebrow>
          <h1 className="hero__title">Crystal-clear views,<br /><span className="accent">Phoenix strong.</span></h1>
          <hr className="headline-rule" />
          <p className="hero__sub">Premium residential &amp; commercial window cleaning across the Phoenix
            metro. Insured, certified, and obsessive about a streak-free finish, guaranteed.</p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" href="booking.html" rightIcon={chevron}>Book Now</Button>
            <Button variant="secondary" size="lg" href="booking.html">Get a Free Quote</Button>
          </div>
          <div className="hero__trust">
            <span className="hero__trust-item"><Icon name="shield-check" size={18} /> Fully insured · $2M</span>
            <span className="hero__trust-item"><Icon name="star" size={18} /> 4.9 · 600+ reviews</span>
            <span className="hero__trust-item"><Icon name="clock" size={18} /> Same-week service</span>
          </div>
        </div>
        <div data-fade>
          <GlassSlot id="home-hero" ratio="4/5" src="assets/shot-home-hero.jpg" label="Sparkling Arizona glass"
            badge={<Badge tone="primary">Arizona in the glass</Badge>} />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container trustbar__inner">
        <TrustBadge title="Fully Insured" subtitle="$2M liability coverage" icon={<Icon name="shield-check" size={17} />} />
        <TrustBadge title="Certified Crew" subtitle="Trained & background-checked" icon={<Icon name="check-circle" size={17} />} />
        <TrustBadge title="100% Guarantee" subtitle="Streak-free, or it's free" icon={<Icon name="sparkles" size={17} />} />
        <TrustBadge title="Fast Response" subtitle="Same-week scheduling" icon={<Icon name="clock" size={17} />} />
      </div>
    </div>
  );
}

const SERVICES = [
  { icon: "home", title: "Residential", body: "Whole-home interior & exterior glass, screens, sills, and tracks.", price: "$189", list: ["Up to 3 stories", "Screen wipe-down", "Track & sill detail"] },
  { icon: "building-2", title: "Commercial", body: "Storefronts and offices on a schedule your tenants will notice.", price: "Custom", list: ["Recurring plans", "After-hours crews", "COI provided"] },
  { icon: "layers", title: "High-Rise", body: "Rope-access & lift cleaning for multi-story buildings, done safely.", price: "Quote", list: ["Certified technicians", "Fall-protection", "Up to 40 stories"] },
  { icon: "droplets", title: "Hard-Water Removal", body: "Mineral-stain restoration that brings desert-weathered glass back.", price: "$249", list: ["Sprinkler & spot stains", "Glass restoration", "Protective sealant"] },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="What We Do" title="Spotless," accent="every pane"
          lead="From a single sunroom to a 40-story tower, we bring the same architectural care and the same streak-free standard." />
        <div className="grid grid-4 grid--mt">
          {SERVICES.map((s) => (
            <Card className="svc" key={s.title} interactive data-fade>
              <span className="svc__icon"><Icon name={s.icon} size={22} /></span>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__body">{s.body}</p>
              <ul className="svc__list">
                {s.list.map((i) => <li key={i}><Icon name="check" size={16} strokeWidth={2.4} /> {i}</li>)}
              </ul>
              <div className="svc__foot">
                <span className="pricechip">{s.price !== "Custom" && s.price !== "Quote" ? <>{s.price}<span>/ from</span></> : <span style={{ fontSize: 15, fontWeight: 600 }}>{s.price} quote</span>}</span>
                <a href="services.html" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 600, fontSize: 14 }}>Details <Icon name="chevron-right" size={15} /></a>
              </div>
            </Card>
          ))}
        </div>
        <div className="section__foot-cta"><Button variant="secondary" href="services.html" rightIcon={<Icon name="arrow-right" size={17} />}>See all six services</Button></div>
      </div>
    </section>
  );
}

function BeforeAfterTeaser() {
  return (
    <section className="section section--alt">
      <div className="container split">
        <div data-fade>
          <Eyebrow>The Difference</Eyebrow>
          <h2 className="section__title">See the streak-free <span className="accent">difference</span></h2>
          <hr className="headline-rule" />
          <p className="section__lead">Drag the handle. Dusty, hard-water-spotted Arizona glass on one
            side, pure, edge-to-edge clarity on the other. That second side is the only one we sign off on.</p>
          <ul className="svc__list" style={{ marginTop: 22 }}>
            <li><Icon name="check" size={18} strokeWidth={2.4} /> Pure-water &amp; hand-detailed finish</li>
            <li><Icon name="check" size={18} strokeWidth={2.4} /> Frames, tracks &amp; sills included</li>
            <li><Icon name="check" size={18} strokeWidth={2.4} /> We don't leave until it's glint-clear</li>
          </ul>
          <div style={{ marginTop: 28 }}><Button variant="primary" href="gallery.html" rightIcon={chevron}>View the gallery</Button></div>
        </div>
        <div data-fade><BeforeAfter id="home-ba" beforeSrc="assets/window-dirty.jpg" afterSrc="assets/window-clean.jpg" /></div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: "shield-check", t: "Insured & bonded", b: "$2M liability and full worker's-comp coverage on every job. We hand you the COI before we touch a pane." },
  { icon: "sparkles", t: "Streak-free guarantee", b: "If you spot a streak within 48 hours, we come back and re-clean it free. No questions, no quibbling." },
  { icon: "users", t: "Vetted, uniformed crews", b: "Background-checked, trained, and respectful of your home and time. The same faces, not a rotating cast." },
  { icon: "calendar-check", t: "Easy, on-time scheduling", b: "Same-week availability, real arrival windows, and a text when we're on the way. We respect the clock." },
];

function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead center eyebrow="Why Phoenix Rising" title="The valley trusts us" accent="with its glass"
          lead="We built this company on the un-glamorous stuff: showing up, being insured, and finishing the edges." />
        <div className="grid grid-4 grid--mt">
          {WHY.map((w) => (
            <Card key={w.t} data-fade>
              <span className="svc__icon"><Icon name={w.icon} size={22} /></span>
              <h3 className="feature__t" style={{ marginTop: 16 }}>{w.t}</h3>
              <p className="feature__b">{w.b}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { q: "They got fifteen years of hard-water spotting off our patio glass. It looks like new construction. The crew was on time and spotless.", n: "Dana R.", m: "Arcadia · Residential", r: 5, img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { q: "We have Phoenix Rising on a monthly storefront plan. Our windows have never looked this consistent, and the COI made our property manager happy.", n: "Marcus T.", m: "Scottsdale · Commercial", r: 5, img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { q: "Booked online Sunday, cleaned Wednesday. Streak-free, screens wiped, tracks vacuumed. Exactly what was quoted, no upsell.", n: "Priya N.", m: "Chandler · Residential", r: 5, img: "https://randomuser.me/api/portraits/women/44.jpg" },
];

function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHead center eyebrow="What Neighbors Say" title="4.9 stars," accent="600+ jobs"
          lead="A few words from homeowners and businesses across the valley." />
        <div className="grid grid-3 grid--mt">
          {REVIEWS.map((rv) => (
            <Card key={rv.n} className="review" data-fade>
              <Stars value={rv.r} />
              <p className="review__quote">“{rv.q}”</p>
              <div className="review__by">
                <span className="review__avatar" style={{ position: "relative", background: "var(--chrome-100)", display: "grid", placeItems: "center" }}>
                  <span style={{ position: "absolute", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--phoenix-blue)" }}>{rv.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                  <img src={rv.img} alt={rv.n} loading="lazy" decoding="async"
                    style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </span>
                <span><span className="review__name">{rv.n}</span><br /><span className="review__meta">{rv.m}</span></span>
              </div>
            </Card>
          ))}
        </div>
        <div className="section__foot-cta"><Button variant="secondary" href="testimonials.html" rightIcon={<Icon name="arrow-right" size={17} />}>Read more reviews</Button></div>
      </div>
    </section>
  );
}

const ZONES = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria", "Paradise Valley"];
function AreaTeaser() {
  return (
    <section className="section">
      <div className="container split">
        <div data-fade><div className="map"><AreaPins /></div></div>
        <div data-fade>
          <Eyebrow>Proudly Local</Eyebrow>
          <h2 className="section__title">Serving the whole <span className="accent">Phoenix metro</span></h2>
          <hr className="headline-rule" />
          <p className="section__lead">From Surprise to Gilbert, if you can see the mountains from your
            window, we'll make sure the view is crystal-clear.</p>
          <div className="tag-list" style={{ marginTop: 24 }}>
            {ZONES.map((z) => <span className="kbd-pill" key={z}><Icon name="map-pin" size={14} style={{ color: "var(--ember)" }} /> {z}</span>)}
          </div>
          <div style={{ marginTop: 28 }}><Button variant="primary" href="service-area.html" rightIcon={chevron}>Check your address</Button></div>
        </div>
      </div>
    </section>
  );
}

function AreaPins() {
  // simple stylized valley map with pins
  const pins = [[30, 38], [52, 30], [60, 52], [44, 60], [70, 64], [38, 72], [22, 56], [78, 44]];
  return (
    <svg viewBox="0 0 100 75" style={{ width: "100%", height: "100%", display: "block" }} aria-label="Phoenix metro coverage map">
      <rect width="100" height="75" fill="#e7f0fa" />
      <path d="M0 58 L18 50 L32 56 L46 47 L60 53 L74 45 L88 51 L100 46 L100 75 L0 75 Z" fill="#d7e6f5" />
      <path d="M0 64 L20 58 L40 63 L62 57 L84 62 L100 57 L100 75 L0 75 Z" fill="#cadcef" />
      <g stroke="#9db9d8" strokeWidth="0.4" opacity="0.7">
        <line x1="0" y1="30" x2="100" y2="30" /><line x1="0" y1="45" x2="100" y2="45" />
        <line x1="35" y1="0" x2="35" y2="75" /><line x1="65" y1="0" x2="65" y2="75" />
      </g>
      {pins.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="2.4" fill="#1457A6" />
          <circle r="2.4" fill="none" stroke="#C45A1E" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  );
}

function FinalCTA() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="ctaband glint glint--animate" data-fade>
          <div>
            <h2>The valley's trusted glass, since day one.</h2>
            <p>Get a free, no-pressure quote, usually the same day, or book online in under two minutes.</p>
          </div>
          <div className="ctaband__cta"><Button variant="primary" size="lg" href="booking.html" rightIcon={chevron}>Book Now</Button></div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="site">
      <SiteHeader active="index.html" />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfterTeaser />
      <WhyUs />
      <Testimonials />
      <AreaTeaser />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

window.mount(Home);
