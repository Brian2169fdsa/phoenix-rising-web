'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

function SuccessContent() {
  const params = useSearchParams();
  const isQuote = params.get('type') === 'quote';
  const total = params.get('total');
  const date = params.get('date');
  const slot = params.get('slot');
  const ref = 'PR-' + Math.random().toString(36).slice(2, 7).toUpperCase();

  const steps = isQuote
    ? [
        ['mail', 'Quote on the way', 'An estimator reviews your details and emails a clear, flat price, usually the same day.'],
        ['phone', 'We\'ll reach out', 'A quick call or text to confirm scope and lock a date that works for you.'],
        ['sparkles', 'Crystal-clear glass', 'Our insured crew shows up on time and doesn\'t leave until it\'s glint-clear.'],
      ]
    : [
        ['mail', 'Confirmation sent', 'A receipt and booking confirmation are in your inbox. Stripe emails a separate card receipt.'],
        ['calendar-check', 'You\'re on the schedule', date ? `June ${date}, 2026${slot ? ' · ' + decodeURIComponent(slot) : ''}` : "We'll text your arrival window."],
        ['sparkles', 'Crystal-clear glass', 'We text when the crew is on the way. Streak-free, guaranteed.'],
      ];

  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="result" data-fade>
          <div className={`result__icon result__icon--ok`}>
            <Icon name={isQuote ? 'send' : 'check-circle'} size={40} strokeWidth={2} />
          </div>
          <h1>{isQuote ? 'Quote request received' : 'Booking confirmed'}</h1>
          <p>
            {isQuote
              ? 'Thanks, neighbor. Your request is in and a Phoenix Rising estimator is already on it.'
              : `You're all set${total ? `, $${total} paid` : ''}. Reference ${ref}. We can't wait to make your view crystal-clear.`}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 26, flexWrap: 'wrap' }}>
            <Button variant="primary" href="/" rightIcon={chevron}>Back to home</Button>
            {!isQuote && <Button variant="secondary" href="/admin">View in dashboard</Button>}
          </div>
        </div>

        <div className="grid grid-3" style={{ marginTop: 56, maxWidth: 980, marginInline: 'auto' }}>
          {steps.map(([ic, t, b], i) => (
            <Card key={t} data-fade>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="bk__num" style={{ background: 'var(--phoenix-blue)', color: '#fff', borderColor: 'var(--phoenix-blue)' }}>{i + 1}</span>
                <span className="svc__icon" style={{ width: 40, height: 40 }}><Icon name={ic} size={19} /></span>
              </div>
              <h3 className="feature__t" style={{ marginTop: 16 }}>{t}</h3>
              <p className="feature__b">{b}</p>
            </Card>
          ))}
        </div>

        {!isQuote && (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: 'var(--cool-gray)' }}>On a recurring plan? Manage or cancel anytime.</p>
            <div style={{ marginTop: 12 }}>
              <Button variant="tertiary" href="/api/portal" rightIcon={<Icon name="external-link" size={16} />}>Open customer portal</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div className="section"><div className="container"><p>Loading...</p></div></div>}>
        <SuccessContent />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
