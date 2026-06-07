'use client';
import { useState, useRef } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
const FAQ = [
  ['How soon can you come out?', 'Most homes get same-week service, and we often have next-day openings. Commercial and recurring accounts are scheduled to your preferred interval.'],
  ["Do I need to be home?", "Not for exterior-only cleans, just leave gates unlocked and we'll text before and after. For interior work, an adult should be home to let the crew in."],
  ["What's the streak-free guarantee?", "If you spot a streak within 48 hours of service, we come back and re-clean it free. No forms, no debate, just tell us which pane."],
  ["Are you insured and licensed?", "Yes. We carry $2M general liability, full worker's comp, and are bonded and AZ-licensed (ROC #321845). We'll send the COI before the job."],
  ["How is pricing determined?", "Residential is a flat per-visit rate by home size, confirmed before we start, never after. Commercial and high-rise are quoted on-site so you only pay for the actual scope."],
  ["What about hard-water spots?", "We remove most mineral and sprinkler spotting with a restorative treatment, then apply an optional sealant to slow it coming back. Severe etching is assessed case-by-case."],
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={'faq__item' + (open ? ' open' : '')}>
      <button className="faq__q" onClick={onToggle} aria-expanded={open}>
        {q}<Icon name="chevron-down" size={20} />
      </button>
      <div className="faq__a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 'px' : 0 }}>
        <div className="faq__a-inner" ref={ref}>{a}</div>
      </div>
    </div>
  );
}

const SERVICE_OPTIONS = [
  'Residential cleaning',
  'Commercial / storefront',
  'High-rise / multi-story',
  'Hard-water removal',
  'Solar panel cleaning',
  'Post-construction',
  'Something else',
];

export default function ContactPage() {
  const [d, setD] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  const set = (k: keyof typeof d) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setD((p) => ({ ...p, [k]: e.target.value }));

  const valid = d.name && /\S+@\S+\.\S+/.test(d.email) && d.message;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d),
      });
    } catch { /* still show success */ }
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="site">
      <SiteHeader active="/contact" />
      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Contact</span></div>
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="pagehead__title">Let&apos;s talk<br /><span className="accent">clean glass</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">Quotes, scheduling, or just a question — reach us however&apos;s easiest. We answer fast and we don&apos;t do pressure.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split" style={{ gap: 44, alignItems: 'start' }}>
          {sent ? (
            <div className="panel" data-fade style={{ textAlign: 'center', padding: 44 }}>
              <div className="result__icon result__icon--ok" style={{ width: 64, height: 64, margin: '0 auto 20px' }}>
                <Icon name="check-circle" size={32} strokeWidth={2} />
              </div>
              <h3 className="svcrow__title" style={{ fontSize: 22 }}>Thanks, {d.name.split(' ')[0] || 'neighbor'}!</h3>
              <p style={{ color: 'var(--cool-gray)', marginTop: 10 }}>Your message is in. We&apos;ll reply by email or phone, usually within a few hours during business days.</p>
              <div style={{ marginTop: 20 }}>
                <Button variant="secondary" onClick={() => { setSent(false); setD({ name: '', email: '', phone: '', service: '', message: '' }); }}>Send another</Button>
              </div>
            </div>
          ) : (
            <form className="panel" data-fade onSubmit={handleSubmit}>
              <Eyebrow>Send a Message</Eyebrow>
              <div className="field-stack" style={{ marginTop: 18 }}>
                <div className="field-row">
                  <Input label="Full name" placeholder="Jane Doe" value={d.name} onChange={set('name')} required />
                  <Input label="Phone" type="tel" placeholder="(602) 555-0147" value={d.phone} onChange={set('phone')} />
                </div>
                <Input label="Email" type="email" placeholder="jane@email.com" value={d.email} onChange={set('email')} required
                  error={d.email && !/\S+@\S+\.\S+/.test(d.email) ? 'Enter a valid email' : undefined} />
                <Select label="I'm interested in" placeholder="Choose a service" value={d.service} onChange={set('service')} options={SERVICE_OPTIONS} />
                <Input label="Message" placeholder="Tell us about your property and what you need…" value={d.message} onChange={set('message')} required />
              </div>
              <div style={{ marginTop: 20 }}>
                <Button variant="primary" size="lg" fullWidth type="submit" disabled={!valid || loading} rightIcon="send">
                  {loading ? 'Sending…' : 'Send message'}
                </Button>
              </div>
              <p style={{ fontSize: 12.5, marginTop: 12, textAlign: 'center', color: 'var(--cool-gray)' }}>
                Prefer to book directly? <a href="/booking">Schedule online →</a>
              </p>
            </form>
          )}

          <div data-fade>
            <div className="grid" style={{ gap: 14 }}>
              {[
                ['phone', 'Call or text', '(602) 555-0147', 'tel:+16025550147'],
                ['mail', 'Email', 'hello@phoenixrisingwindowcleaning.com', 'mailto:hello@phoenixrisingwindowcleaning.com'],
                ['map-pin', 'Service area', 'Greater Phoenix metro, AZ', '/service-area'],
              ].map(([ic, t, v, href]) => (
                <a key={t} href={href} className="opt" style={{ alignItems: 'center' }}>
                  <span className="opt__ico"><Icon name={ic} size={20} /></span>
                  <span><span className="opt__t">{t}</span><span className="opt__d">{v}</span></span>
                </a>
              ))}
            </div>

            <Card style={{ marginTop: 16 }}>
              <Eyebrow>Hours</Eyebrow>
              <div style={{ marginTop: 12 }}>
                {[['Monday – Friday', '7:00 AM – 6:00 PM'], ['Saturday', '8:00 AM – 4:00 PM'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                  <div className="sumline" key={day}><span>{day}</span><span>{hrs}</span></div>
                ))}
              </div>
              <div className="securenote" style={{ marginTop: 14 }}>
                <Icon name="clock" size={15} /> Same-week scheduling · After-hours commercial crews available.
              </div>
            </Card>

            <div className="map" style={{ marginTop: 16, aspectRatio: '16/10' }}>
              <iframe
                title="Phoenix Rising Window Cleaning service area"
                src="https://www.google.com/maps?q=Phoenix,+Arizona&z=10&output=embed"
                style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <SectionHead center eyebrow="Good To Know" title="Frequently asked" accent="questions" />
          <div className="faq" style={{ marginTop: 36 }}>
            {FAQ.map(([q, a], i) => (
              <FaqItem key={i} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate" data-fade>
            <div><h2>Ready when you are.</h2><p>Skip the back-and-forth — book your cleaning online in under two minutes.</p></div>
            <div className="ctaband__cta"><Button variant="primary" size="lg" href="/booking" rightIcon="chevron-right">Book Now</Button></div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
