const { Icon, SiteHeader, SiteFooter, mount } = window;
const { Button, Card } = window.PhoenixRisingDesignSystem_61b068;
const chevron = <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />;

function CancelPage() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="result" data-fade>
            <div className="result__icon result__icon--warn"><Icon name="arrow-left" size={38} strokeWidth={2} /></div>
            <h1>Checkout cancelled</h1>
            <p>No worries, and no charge was made. Your booking details are saved, so you can pick up right where you left off.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 26, flexWrap: "wrap" }}>
              <Button variant="primary" href="booking.html" rightIcon={chevron}>Resume booking</Button>
              <Button variant="secondary" href="contact.html">Talk to us first</Button>
            </div>
            <p className="muted" style={{ fontSize: 14, marginTop: 28 }}>Questions about pricing or scope? Call <a href="tel:+16025550147">(602) 555-0147</a>, we're happy to walk you through it.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

window.mount(CancelPage);
