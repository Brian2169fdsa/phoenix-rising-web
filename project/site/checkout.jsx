const { Icon, SiteHeader, SiteFooter, Eyebrow, mount } = window;
const { Button, Card, Badge, Input } = window.PhoenixRisingDesignSystem_61b068;

const PLANS = {
  standard: { name: "Residential · Standard", base: 189 }, deluxe: { name: "Residential · Deluxe", base: 249 },
  premium: { name: "Residential · Premium", base: 329 }, "standard-recurring": { name: "Standard · Recurring Plan", base: 159, recurring: true },
  "deluxe-recurring": { name: "Deluxe · Recurring Plan", base: 209, recurring: true }, "premium-recurring": { name: "Premium · Recurring Plan", base: 279, recurring: true },
  residential: { name: "Residential Window Cleaning", base: 249 }, solar: { name: "Solar Panel Cleaning", base: 149 }, screens: { name: "Screens & Tracks", base: 59 },
};

function CheckoutPage() {
  const params = new URLSearchParams(location.search);
  const planKey = params.get("plan") || "deluxe";
  const plan = PLANS[planKey] || PLANS.deluxe;
  const base = Number(params.get("price")) || plan.base;
  const date = params.get("date"), slot = params.get("slot"), city = params.get("city");

  const [payType, setPayType] = React.useState("full"); // full | deposit
  const [promo, setPromo] = React.useState("");
  const [applied, setApplied] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const discount = applied ? Math.round(base * 0.1) : 0;
  const taxable = base - discount;
  const tax = Math.round(taxable * 0.086);
  const total = taxable + tax;
  const dueNow = payType === "deposit" ? Math.round(total * 0.25) : total;

  function applyPromo() { if (promo.trim().toUpperCase() === "PHX10") setApplied("PHX10"); else setApplied(false); }
  function pay() { setLoading(true); setTimeout(() => { location.href = `checkout-success.html?plan=${planKey}&total=${dueNow}&date=${date || ""}&slot=${encodeURIComponent(slot || "")}`; }, 1400); }

  return (
    <div className="site">
      <SiteHeader />
      <section className="pagehead">
        <div className="container pagehead__inner" style={{ padding: "48px 0 48px" }}>
          <div className="crumbs"><a href="booking.html">Booking</a> / <span>Checkout</span></div>
          <h1 className="pagehead__title" style={{ fontSize: "clamp(32px,4vw,44px)" }}>Secure <span className="accent">checkout</span></h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="checkout">
            {/* Left: payment form */}
            <div>
              <div className="panel" data-fade>
                <Eyebrow>Contact</Eyebrow>
                <div style={{ marginTop: 16 }}>
                  <Input label="Email for receipt" type="email" placeholder="jane@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="panel" data-fade style={{ marginTop: 18 }}>
                <Eyebrow>Payment Option</Eyebrow>
                <div className="optgrid optgrid--2" style={{ marginTop: 16 }}>
                  <button className={"opt" + (payType === "full" ? " sel" : "")} onClick={() => setPayType("full")} style={{ display: "block" }}>
                    <span className="opt__t">Pay in full</span><span className="opt__d">Settle the whole job now, nothing on cleaning day.</span></button>
                  <button className={"opt" + (payType === "deposit" ? " sel" : "")} onClick={() => setPayType("deposit")} style={{ display: "block" }}>
                    <span className="opt__t">25% deposit</span><span className="opt__d">Hold your slot now, pay the rest after service.</span></button>
                </div>
              </div>

              <div className="panel" data-fade style={{ marginTop: 18 }}>
                <Eyebrow>Card Details</Eyebrow>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0 12px" }}>
                  <span className="muted" style={{ fontSize: 13 }}>Powered by Stripe, test mode</span>
                  <span style={{ display: "inline-flex", gap: 6 }}><Badge tone="neutral">VISA</Badge><Badge tone="neutral">MC</Badge><Badge tone="neutral">AMEX</Badge></span>
                </div>
                <div className="field-stack">
                  <div className="stripe-card"><span>1234 1234 1234 1234</span><Icon name="credit-card" size={18} style={{ color: "var(--chrome-500)" }} /></div>
                  <div className="field-row">
                    <div className="stripe-card"><span>MM / YY</span></div>
                    <div className="stripe-card"><span>CVC</span><Icon name="lock" size={16} style={{ color: "var(--chrome-500)" }} /></div>
                  </div>
                  <div className="stripe-card"><span>ZIP</span></div>
                </div>
                <div className="securenote"><Icon name="lock" size={15} /> Card details are tokenized by Stripe and never touch our servers.</div>
              </div>

              <div style={{ marginTop: 22 }}>
                <Button variant="primary" size="lg" fullWidth disabled={loading} onClick={pay}
                  rightIcon={!loading && <Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />}>
                  {loading ? "Processing…" : `Pay $${dueNow} now`}
                </Button>
              </div>
              <p className="muted center" style={{ fontSize: 12.5, marginTop: 14 }}>By paying you agree to our <a href="terms.html">Terms</a> and <a href="privacy.html">Privacy Policy</a>. Streak-free guarantee included.</p>
            </div>

            {/* Right: order summary */}
            <aside>
              <Card className="sumcard" data-fade>
                <Eyebrow>Order Summary</Eyebrow>
                <div className="linerow" style={{ marginTop: 8 }}>
                  <span className="linerow__ico"><Icon name="sparkles" size={20} /></span>
                  <span><span className="linerow__t">{plan.name}</span>
                    <span className="linerow__d">{date ? `June ${date}, 2026` : "Scheduling TBD"}{slot ? " · " + slot : ""}{city ? " · " + city : ""}</span></span>
                  <span className="linerow__amt">${base}</span>
                </div>

                <div style={{ display: "flex", gap: 8, margin: "18px 0 6px" }}>
                  <div style={{ flex: 1 }}><Input placeholder="Promo code" value={promo} onChange={(e) => setPromo(e.target.value)} /></div>
                  <Button variant="secondary" onClick={applyPromo}>Apply</Button>
                </div>
                {applied === "PHX10" && <div className="securenote"><Icon name="check-circle" size={15} /> PHX10 applied, 10% off.</div>}
                {applied === false && <div className="securenote" style={{ color: "var(--error)" }}><Icon name="x" size={15} /> Code not recognized. Try PHX10.</div>}

                <div style={{ marginTop: 14 }}>
                  <div className="sumline"><span>Subtotal</span><span>${base}</span></div>
                  {discount > 0 && <div className="sumline"><span>Discount (PHX10)</span><span>−${discount}</span></div>}
                  <div className="sumline"><span>Estimated tax (8.6%)</span><span>${tax}</span></div>
                  {payType === "deposit" && <div className="sumline"><span>Due after service</span><span>${total - dueNow}</span></div>}
                </div>
                <div className="sumtotal"><span className="label-top" style={{ margin: 0 }}>Due now</span><b>${dueNow}</b></div>
                {plan.recurring && <p className="muted" style={{ fontSize: 12.5, marginTop: 10 }}>Recurring plan, billed each visit at this rate. Manage or cancel anytime in your customer portal.</p>}
                <div className="securenote" style={{ marginTop: 14 }}><Icon name="shield-check" size={15} /> 48-hour streak-free guarantee on every job.</div>
              </Card>
              <p className="center" style={{ marginTop: 16 }}><a href="booking.html" style={{ fontSize: 13.5, fontWeight: 600 }}>← Edit booking details</a></p>
            </aside>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

window.mount(CheckoutPage);
