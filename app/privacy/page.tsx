import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';

const SECTIONS = [
  ['Information We Collect', 'We collect the details you provide when you request a quote, book a service, or contact us, your name, address, email, phone number, and notes about your property. When you pay, card details are collected and tokenized directly by our payment processor (Stripe); we never see or store your full card number.'],
  ['How We Use Your Information', 'To schedule and deliver your window-cleaning service, send confirmations and arrival texts, process payments, respond to inquiries, and, only if you opt in, share occasional maintenance reminders. We do not sell your personal information.'],
  ['Payments & Stripe', "Payments are processed by Stripe, Inc. Your card data is handled under Stripe's PCI-DSS-compliant systems. We retain only a payment reference, the amount, and the service it relates to."],
  ['Email & Communications', 'Transactional emails (confirmations, receipts, quotes) are sent via Resend on our behalf. You can opt out of non-essential messages at any time using the unsubscribe link.'],
  ['Cookies & Analytics', 'We use minimal, privacy-respecting analytics to understand site usage and improve the experience. You can disable cookies in your browser without losing core functionality.'],
  ['Your Rights', 'You may request access to, correction of, or deletion of your personal information at any time by emailing hello@phoenixrisingwindowcleaning.com. We respond to verified requests within 30 days.'],
  ['Data Retention & Security', 'We keep service and payment records as required for accounting and warranty purposes, then securely delete them. We use industry-standard safeguards to protect your data.'],
  ['Contact', 'Questions about this policy? Email hello@phoenixrisingwindowcleaning.com or call (602) 555-0147.'],
];

export const metadata = {
  title: 'Privacy Policy · Phoenix Rising Window Cleaning',
};

export default function PrivacyPage() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="pagehead">
        <div className="container pagehead__inner" style={{ padding: '56px 0' }}>
          <div className="crumbs"><a href="/">Home</a> / <span>Privacy</span></div>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="pagehead__title" style={{ fontSize: 'clamp(34px,4.5vw,48px)' }}>
            Privacy <span className="accent">Policy</span>
          </h1>
          <p className="pagehead__sub">Last updated June 2026. Plain-English summary of what we collect and why.</p>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          {SECTIONS.map(([h, b], i) => (
            <div key={i} data-fade style={{ paddingBottom: 4 }}>
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
