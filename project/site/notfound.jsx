const { Icon, SiteHeader, SiteFooter, GlassSlot, mount } = window;
const { Button, Badge } = window.PhoenixRisingDesignSystem_61b068;
const chevron = <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />;

function NotFound() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container split" style={{ alignItems: "center" }}>
          <div data-fade>
            <span className="eyebrow-c">Error 404</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".02em", fontSize: "clamp(44px,7vw,84px)", lineHeight: .98, margin: "16px 0 0", color: "var(--slate-ink)" }}>
              That page slipped<br /><span className="accent">through a clean pane.</span>
            </h1>
            <hr className="headline-rule" />
            <p className="section__lead">We couldn't find what you were looking for, but your view's still
              crystal-clear from here. Let's get you back on track.</p>
            <div className="hero__cta">
              <Button variant="primary" size="lg" href="index.html" rightIcon={chevron}>Back to home</Button>
              <Button variant="secondary" size="lg" href="booking.html">Book a cleaning</Button>
            </div>
            <div className="tag-list" style={{ marginTop: 30 }}>
              {[["Services", "services.html"], ["Pricing", "pricing.html"], ["Gallery", "gallery.html"], ["Contact", "contact.html"]].map(([t, h]) => (
                <a key={t} href={h} className="kbd-pill">{t}</a>
              ))}
            </div>
          </div>
          <div data-fade><GlassSlot id="nf-glass" ratio="1/1" src="assets/shot-home-hero.jpg" label="Crystal-clear Arizona view" badge={<Badge tone="primary">404</Badge>} /></div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
window.mount(NotFound);
