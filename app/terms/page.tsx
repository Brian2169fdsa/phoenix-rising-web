import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';

const SECTIONS = [
  ['Agreement to Terms', "By using phoenixrisingwindowcleaning.com or booking our services, you agree to these terms. If you don't agree, please don't use the site or services."],
  ['Services', 'Phoenix Rising Window Cleaning provides residential and commercial window cleaning and related services within the greater Phoenix, Arizona metro. Service availability, pricing, and scheduling are subject to confirmation.'],
  ['Quotes & Pricing', 'Residential package prices are flat per-visit rates confirmed before work begins. Commercial, high-rise, and post-construction jobs are quoted based on on-site assessment. Quotes are valid for 30 days unless stated otherwise.'],
  ['Booking, Deposits & Payment', 'Some bookings require a deposit to reserve a slot; the balance is due on or after the service date as shown at checkout. Payments are processed securely by Stripe. Recurring plans bill per visit at the stated interval until cancelled.'],
  ['Cancellations & Rescheduling', "You may reschedule or cancel up to 24 hours before your appointment at no charge. Cancellations inside 24 hours, or lockouts on arrival, may incur a trip fee. Recurring plans can be cancelled anytime via the customer portal."],
  ['Streak-Free Guarantee', 'If you find a streak on serviced glass within 48 hours, contact us and we\'ll re-clean the affected panes free of charge. The guarantee covers cleaning quality, not pre-existing damage such as scratches, etching, or hard-water pitting.'],
  ['Property & Liability', 'We are licensed (ROC #321845), bonded, and carry $2M general liability insurance. We treat your property with care; in the rare event of damage caused by our negligence, our liability is limited to the cost of repair or the service amount, as applicable by law.'],
  ['Access & Safety', 'You agree to provide safe, reasonable access to the windows to be cleaned. We reserve the right to decline or pause work where conditions are unsafe (severe weather, unsafe structures, hazardous access).'],
  ['Changes to These Terms', 'We may update these terms from time to time. Continued use of the site or services after changes means you accept the updated terms.'],
  ['Contact', 'Questions about these terms? Email hello@phoenixrisingwindowcleaning.com or call (602) 555-0147.'],
];

export const metadata = {
  title: 'Terms of Service · Phoenix Rising Window Cleaning',
};

export default function TermsPage() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="pagehead">
        <div className="container pagehead__inner" style={{ padding: '56px 0' }}>
          <div className="crumbs"><a href="/">Home</a> / <span>Terms</span></div>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="pagehead__title" style={{ fontSize: 'clamp(34px,4.5vw,48px)' }}>
            Terms of <span className="accent">Service</span>
          </h1>
          <p className="pagehead__sub">Last updated June 2026. The terms that govern our site and services.</p>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          {SECTIONS.map(([h, b], i) => (
            <div key={i} data-fade>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', fontSize: 22, color: 'var(--slate-ink)', marginTop: i ? 40 : 8 }}>{h}</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--cool-gray)', marginTop: 12 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
