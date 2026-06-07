'use client';
import React, { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PricingTier from '@/components/ui/PricingTier';

const RES = {
  oneTime: [
    {
      name: 'Standard', price: '$189', period: '/ visit',
      desc: 'Up to 20 panes · single-story homes.',
      features: ['Interior & exterior glass', 'Screen wipe-down', 'Sill & ledge detailing', 'Streak-free guarantee'],
      href: '/checkout?plan=standard',
    },
    {
      name: 'Deluxe', price: '$249', period: '/ visit',
      desc: 'Up to 35 panes · most valley homes.', featured: true,
      features: ['Everything in Standard', 'Track deep-cleaning', 'Hard-water spot touch-up', 'Priority scheduling', 'Skylights & sliders'],
      href: '/checkout?plan=deluxe',
    },
    {
      name: 'Premium', price: '$329', period: '/ visit',
      desc: 'Large & two-story homes, 35+ panes.',
      features: ['Everything in Deluxe', 'Full hard-water removal', 'Frame & track restoration', '2-story exterior reach', 'Solar panel add-on rate'],
      href: '/checkout?plan=premium',
    },
  ],
  recurring: [
    {
      name: 'Standard', price: '$159', period: '/ visit',
      desc: 'Up to 20 panes · billed each visit.',
      features: ['Interior & exterior glass', 'Screen wipe-down', 'Sill & ledge detailing', 'Streak-free guarantee'],
      href: '/checkout?plan=standard-recurring',
    },
    {
      name: 'Deluxe', price: '$209', period: '/ visit',
      desc: 'Up to 35 panes · best value on a plan.', featured: true,
      features: ['Everything in Standard', 'Track deep-cleaning', 'Hard-water spot touch-up', 'Priority scheduling', 'Locked-in plan rate'],
      href: '/checkout?plan=deluxe-recurring',
    },
    {
      name: 'Premium', price: '$279', period: '/ visit',
      desc: 'Large & two-story homes on a plan.',
      features: ['Everything in Deluxe', 'Full hard-water removal', 'Frame & track restoration', '2-story exterior reach', 'Dedicated crew'],
      href: '/checkout?plan=premium-recurring',
    },
  ],
};

const COMMERCIAL = [
  { icon: 'building-2', t: 'Per-Pane', d: 'Simple, transparent rate for storefronts and small offices.', p: '$3.50', u: '/ pane' },
  { icon: 'clock', t: 'Hourly Crew', d: 'Two-tech crew for larger or mixed jobs, billed by the hour.', p: '$140', u: '/ hour' },
  { icon: 'layers', t: 'Custom Contract', d: 'Multi-site, high-rise, or recurring accounts scoped to you.', p: 'Quote', u: '' },
];

export default function PricingPage() {
  const [recurring, setRecurring] = useState(false);
  const tiers = recurring ? RES.recurring : RES.oneTime;

  return (
    <div className="site">
      <SiteHeader active="/pricing" />

      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Pricing</span></div>
          <Eyebrow>Straightforward Pricing</Eyebrow>
          <h1 className="pagehead__title">No surprises,<br /><span className="accent">ever.</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">Flat per-visit pricing for most homes, real plan discounts when you
            schedule recurring service, and clear options for commercial accounts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow center>Residential Packages</Eyebrow>
            <h2 className="section__title">Pick a package, <span className="accent">book in minutes</span></h2>
            <hr className="headline-rule" style={{ margin: '12px auto 0' }} />
            <div className="pricetoggle" role="tablist" aria-label="Billing type">
              <button className={!recurring ? 'on' : ''} onClick={() => setRecurring(false)}>One-time</button>
              <button className={recurring ? 'on' : ''} onClick={() => setRecurring(true)}>Recurring plan</button>
            </div>
          </div>
          <div className="tiers">
            {tiers.map((t) => (
              <PricingTier
                key={t.name}
                name={t.name}
                price={t.price}
                period={t.period}
                description={t.desc}
                features={t.features}
                featured={t.featured}
                ctaHref={t.href}
                ctaLabel={t.featured ? `Book ${t.name}` : `Choose ${t.name}`}
                flag="Most Popular"
              />
            ))}
          </div>
          <div className="note-row">
            <Icon name="percent" size={17} />
            {recurring
              ? <span>Recurring plans bill per visit at your chosen interval, monthly, bi-monthly, or quarterly. Cancel anytime in the customer portal.</span>
              : <span>Homes over 35 panes or 2+ stories may need a Premium or custom quote, we&apos;ll confirm on arrival, never after.</span>}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="Commercial & Multi-Site" title="Built for" accent="business glass"
            lead="Storefronts, offices, and high-rises on the schedule that fits your operation. COI always provided." />
          <div className="grid grid-3 grid--mt">
            {COMMERCIAL.map((c) => (
              <Card key={c.t} style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
                <span className="svc__icon"><Icon name={c.icon} size={22} /></span>
                <h3 className="svc__title">{c.t}</h3>
                <p className="svc__body" style={{ flex: 1 }}>{c.d}</p>
                <div className="pricechip" style={{ marginTop: 18 }}>
                  {c.p === 'Quote'
                    ? <span style={{ fontSize: 16, fontWeight: 600 }}>Free quote</span>
                    : <>{c.p}<span>{c.u}</span></>}
                </div>
                <div style={{ marginTop: 18 }}>
                  <Button variant="secondary" fullWidth href="/booking">Request a quote</Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="note-row">
            <Icon name="trending-up" size={17} />
            <span>Volume discounts start at 5+ recurring sites. Ask about quarterly billing and net-30 terms for established accounts.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel--pad-lg">
            <div className="split" style={{ alignItems: 'center', gap: 40 }}>
              <div>
                <Eyebrow>What&apos;s Always Included</Eyebrow>
                <h2 className="section__title" style={{ fontSize: 30 }}>Every price includes the <span className="accent">whole job</span></h2>
                <hr className="headline-rule" />
                <p className="section__lead" style={{ fontSize: 16 }}>No line-item surprises. Insurance, the streak-free
                  guarantee, and the unglamorous details are baked into every quote.</p>
              </div>
              <ul className="checklist" style={{ marginTop: 0 }}>
                {['$2M liability insurance', '48-hour streak-free guarantee', 'Screens & tracks included', 'Eco-friendly, pet-safe solutions', 'Uniformed, background-checked crew', 'Text-ahead arrival windows'].map((x) => (
                  <li key={x}><Icon name="check" size={17} strokeWidth={2.4} /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate">
            <div>
              <h2>Ready for a crystal-clear view?</h2>
              <p>Book a one-time clean now or start a plan and lock in your rate.</p>
            </div>
            <div className="ctaband__cta">
              <Button variant="primary" size="lg" href="/booking" rightIcon="chevron-right">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
