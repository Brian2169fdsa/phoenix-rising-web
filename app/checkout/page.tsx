'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';

const PLANS: Record<string, { name: string; base: number; recurring?: boolean }> = {
  standard: { name: 'Residential · Standard', base: 189 },
  deluxe: { name: 'Residential · Deluxe', base: 249 },
  premium: { name: 'Residential · Premium', base: 329 },
  'standard-recurring': { name: 'Standard · Recurring Plan', base: 159, recurring: true },
  'deluxe-recurring': { name: 'Deluxe · Recurring Plan', base: 209, recurring: true },
  'premium-recurring': { name: 'Premium · Recurring Plan', base: 279, recurring: true },
  residential: { name: 'Residential Window Cleaning', base: 249 },
  solar: { name: 'Solar Panel Cleaning', base: 149 },
  screens: { name: 'Screens & Tracks', base: 59 },
};

function CheckoutContent() {
  const params = useSearchParams();
  const planKey = params.get('plan') || 'deluxe';
  const plan = PLANS[planKey] || PLANS.deluxe;
  const base = Number(params.get('price')) || plan.base;
  const date = params.get('date');
  const slot = params.get('slot');
  const city = params.get('city');

  const [payType, setPayType] = useState<'full' | 'deposit'>('full');
  const [promo, setPromo] = useState('');
  const [applied, setApplied] = useState<string | false | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const discount = applied === 'PHX10' ? Math.round(base * 0.1) : 0;
  const taxable = base - discount;
  const tax = Math.round(taxable * 0.086);
  const total = taxable + tax;
  const dueNow = payType === 'deposit' ? Math.round(total * 0.25) : total;

  function applyPromo() {
    if (promo.trim().toUpperCase() === 'PHX10') setApplied('PHX10');
    else setApplied(false);
  }

  async function pay() {
    if (!email) { setError('Email is required'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey, amount: dueNow, email, promo: applied || undefined, mode: plan.recurring ? 'subscription' : 'payment' }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        window.location.href = `/checkout/success?plan=${planKey}&total=${dueNow}&date=${date || ''}&slot=${encodeURIComponent(slot || '')}`;
      }
    } catch {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <section className="pagehead">
        <div className="container pagehead__inner" style={{ padding: '48px 0' }}>
          <div className="crumbs"><a href="/booking">Booking</a> / <span>Checkout</span></div>
          <h1 className="pagehead__title" style={{ fontSize: 'clamp(32px,4vw,44px)' }}>Secure <span className="accent">checkout</span></h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="checkout">
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
                  <button className={'opt' + (payType === 'full' ? ' sel' : '')} onClick={() => setPayType('full')} style={{ display: 'block' }}>
                    <span className="opt__t">Pay in full</span><span className="opt__d">Settle the whole job now, nothing on cleaning day.</span>
                  </button>
                  <button className={'opt' + (payType === 'deposit' ? ' sel' : '')} onClick={() => setPayType('deposit')} style={{ display: 'block' }}>
                    <span className="opt__t">25% deposit</span><span className="opt__d">Hold your slot now, pay the rest after service.</span>
                  </button>
                </div>
              </div>

              <div className="panel" data-fade style={{ marginTop: 18 }}>
                <Eyebrow>Card Details</Eyebrow>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '16px 0 12px' }}>
                  <span style={{ fontSize: 13, color: 'var(--cool-gray)' }}>Powered by Stripe</span>
                  <span style={{ display: 'inline-flex', gap: 6 }}>
                    <Badge tone="neutral">VISA</Badge><Badge tone="neutral">MC</Badge><Badge tone="neutral">AMEX</Badge>
                  </span>
                </div>
                <div className="field-stack">
                  <div className="stripe-card"><span>Card number processed securely by Stripe</span><Icon name="credit-card" size={18} style={{ color: 'var(--chrome-500)' }} /></div>
                </div>
                <div className="securenote"><Icon name="lock" size={15} /> Card details are tokenized by Stripe and never touch our servers.</div>
              </div>

              {error && <p style={{ color: 'var(--error)', fontSize: 13, marginTop: 12 }}>{error}</p>}

              <div style={{ marginTop: 22 }}>
                <Button variant="primary" size="lg" fullWidth disabled={loading} onClick={pay}
                  rightIcon={!loading ? 'chevron-right' : undefined}>
                  {loading ? 'Processing…' : `Pay $${dueNow} now`}
                </Button>
              </div>
              <p style={{ fontSize: 12.5, marginTop: 14, textAlign: 'center', color: 'var(--cool-gray)' }}>
                By paying you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>. Streak-free guarantee included.
              </p>
            </div>

            <aside>
              <Card className="sumcard" data-fade>
                <Eyebrow>Order Summary</Eyebrow>
                <div className="linerow" style={{ marginTop: 8 }}>
                  <span className="linerow__ico"><Icon name="sparkles" size={20} /></span>
                  <span>
                    <span className="linerow__t">{plan.name}</span>
                    <span className="linerow__d">{date ? `June ${date}, 2026` : 'Scheduling TBD'}{slot ? ' · ' + slot : ''}{city ? ' · ' + city : ''}</span>
                  </span>
                  <span className="linerow__amt">${base}</span>
                </div>

                <div style={{ display: 'flex', gap: 8, margin: '18px 0 6px' }}>
                  <div style={{ flex: 1 }}>
                    <Input placeholder="Promo code" value={promo} onChange={(e) => setPromo(e.target.value)} />
                  </div>
                  <Button variant="secondary" onClick={applyPromo}>Apply</Button>
                </div>
                {applied === 'PHX10' && <div className="securenote"><Icon name="check-circle" size={15} /> PHX10 applied — 10% off.</div>}
                {applied === false && <div className="securenote" style={{ color: 'var(--error)' }}><Icon name="x" size={15} /> Code not recognized. Try PHX10.</div>}

                <div style={{ marginTop: 14 }}>
                  <div className="sumline"><span>Subtotal</span><span>${base}</span></div>
                  {discount > 0 && <div className="sumline"><span>Discount (PHX10)</span><span>−${discount}</span></div>}
                  <div className="sumline"><span>Estimated tax (8.6%)</span><span>${tax}</span></div>
                  {payType === 'deposit' && <div className="sumline"><span>Due after service</span><span>${total - dueNow}</span></div>}
                </div>
                <div className="sumtotal"><span className="label-top" style={{ margin: 0 }}>Due now</span><b>${dueNow}</b></div>
                {plan.recurring && <p style={{ fontSize: 12.5, color: 'var(--cool-gray)', marginTop: 10 }}>Recurring plan — billed each visit at this rate. Manage or cancel anytime in your customer portal.</p>}
                <div className="securenote" style={{ marginTop: 14 }}><Icon name="shield-check" size={15} /> 48-hour streak-free guarantee on every job.</div>
              </Card>
              <p style={{ marginTop: 16, textAlign: 'center' }}><a href="/booking" style={{ fontSize: 13.5, fontWeight: 600 }}>← Edit booking details</a></p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div className="section"><div className="container">Loading…</div></div>}>
        <CheckoutContent />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
