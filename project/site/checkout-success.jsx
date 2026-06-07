const { Icon, SiteHeader, SiteFooter, Eyebrow, mount } = window;
const { Button, Card, Badge } = window.PhoenixRisingDesignSystem_61b068;
const chevron = <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />;

function SuccessPage() {
  const p = new URLSearchParams(location.search);
  const isQuote = p.get("type") === "quote";
  const total = p.get("total"), date = p.get("date"), slot = p.get("slot");
  const ref = "PR-" + Math.random().toString(36).slice(2, 7).toUpperCase();

  const steps = isQuote
    ? [["mail", "Quote on the way", "An estimator reviews your details and emails a clear, flat price, usually the same day."],
       ["phone", "We'll reach out", "A quick call or text to confirm scope and lock a date that works for you."],
       ["sparkles", "Crystal-clear glass", "Our insured crew shows up on time and doesn't leave until it's glint-clear."]]
    : [["mail", "Confirmation sent", "A receipt and booking confirmation are in your inbox. Stripe emails a separate card receipt."],
       ["calendar-check", "You're on the schedule", date ? `June ${date}, 2026${slot ? " · " + decodeURIComponent(slot) : ""}` : "We'll text your arrival window."],
       ["sparkles", "Crystal-clear glass", "We text when the crew is on the way. Streak-free, guaranteed."]];

  return (
    <div className="site">
      <SiteHeader />
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="result" data-fade>
            <div className="result__icon result__icon--ok"><Icon name={isQuote ? "send" : "check-circle"} size={40} strokeWidth={2} /></div>
            <h1>{isQuote ? "Quote request received" : "Booking confirmed"}</h1>
            <p>{isQuote
              ? "Thanks, neighbor. Your request is in and a Phoenix Rising estimator is already on it."
              : `You're all set${total ? `, $${total} paid` : ""}. Reference ${ref}. We can't wait to make your view crystal-clear.`}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 26, flexWrap: "wrap" }}>
              <Button variant="primary" href="index.html" rightIcon={chevron}>Back to home</Button>
              {!isQuote && <Button variant="secondary" href="admin.html">View in dashboard</Button>}
            </div>
          </div>

          <div className="grid grid-3" style={{ marginTop: 56, maxWidth: 980, marginInline: "auto" }}>
            {steps.map(([ic, t, b], i) => (
              <Card key={t} data-fade>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="bk__num" style={{ background: "var(--phoenix-blue)", color: "#fff", borderColor: "var(--phoenix-blue)" }}>{i + 1}</span>
                  <span className="svc__icon" style={{ width: 40, height: 40 }}><Icon name={ic} size={19} /></span>
                </div>
                <h3 className="feature__t" style={{ marginTop: 16 }}>{t}</h3>
                <p className="feature__b">{b}</p>
              </Card>
            ))}
          </div>

          {!isQuote && (
            <div className="center" style={{ marginTop: 40 }}>
              <p className="muted" style={{ fontSize: 14 }}>On a recurring plan? Manage or cancel anytime.</p>
              <div style={{ marginTop: 12 }}><Button variant="tertiary" href="#" rightIcon={<Icon name="external-link" size={16} />}>Open customer portal</Button></div>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

window.mount(SuccessPage);
