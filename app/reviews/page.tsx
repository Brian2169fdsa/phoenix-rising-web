'use client';
import React, { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import Stars from '@/components/Stars';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const REVIEWS = [
  { q: 'They got fifteen years of hard-water spotting off our patio glass. It looks like new construction. The crew was on time, tidy, and genuinely kind.', n: 'Dana R.', m: 'Arcadia', cat: 'Residential', r: 5, img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { q: 'We keep Phoenix Rising on a monthly storefront plan. Our windows have never looked this consistent, and the COI made our property manager\'s day.', n: 'Marcus T.', m: 'Scottsdale', cat: 'Commercial', r: 5, img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { q: 'Booked online Sunday, cleaned Wednesday. Streak-free, screens wiped, tracks vacuumed. Exactly what was quoted, zero upsell pressure.', n: 'Priya N.', m: 'Chandler', cat: 'Residential', r: 5, img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { q: 'Rope-access crew did all twelve floors of our building\'s street side. Professional, fully insured, and the glass is immaculate.', n: 'Building ops · Vance Plaza', m: 'Downtown Phoenix', cat: 'High-Rise', r: 5, img: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { q: 'Post-construction cleanup on our remodel. Stucco splatter and stickers all gone, not a single scratch. Saved us before the final walkthrough.', n: 'Hector M.', m: 'Gilbert', cat: 'Residential', r: 5, img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { q: 'Our solar production jumped noticeably after they cleaned the array. They did the windows the same visit. Easy, honest, thorough.', n: 'Sandra & Bill K.', m: 'Peoria', cat: 'Residential', r: 5, img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { q: 'Three retail locations on a quarterly account. One invoice, one point of contact, spotless every time. Couldn\'t ask for more.', n: 'Regional manager', m: 'Mesa & Tempe', cat: 'Commercial', r: 5, img: 'https://randomuser.me/api/portraits/women/29.jpg' },
  { q: 'Two-story house, west-facing sun glare hid years of film. Now the mountains look painted on. Worth every dollar.', n: 'Yolanda P.', m: 'Paradise Valley', cat: 'Residential', r: 5, img: 'https://randomuser.me/api/portraits/women/90.jpg' },
  { q: 'Quote was clear, crew was early, and they re-did one pane I pointed out without a word of complaint. That\'s the guarantee in action.', n: 'Trevor B.', m: 'Glendale', cat: 'Residential', r: 4, img: 'https://randomuser.me/api/portraits/men/15.jpg' },
];

const ini = (n: string) =>
  n.split(/[^A-Za-z]+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

const FILTERS = ['All', 'Residential', 'Commercial', 'High-Rise'];

export default function ReviewsPage() {
  const [f, setF] = useState('All');
  const list = f === 'All' ? REVIEWS : REVIEWS.filter((r) => r.cat === f);

  return (
    <div className="site">
      <SiteHeader active="/reviews" />

      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Reviews</span></div>
          <Eyebrow>What Neighbors Say</Eyebrow>
          <h1 className="pagehead__title">The valley<br /><span className="accent">vouches for us</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">We earn every five-star review the slow way, by showing up, finishing
            the edges, and standing behind the work.</p>
        </div>
      </section>

      <section className="section--alt section--tight">
        <div className="container">
          <div className="panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
            <div className="ratingbig">
              <span className="ratingbig__num">4.9</span>
              <div>
                <Stars value={5} size={20} />
                <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>Average across 600+ completed jobs</p>
              </div>
            </div>
            <div className="statrow" style={{ flex: 1, minWidth: 320 }}>
              {([['600+', 'Jobs completed'], ['98%', 'Would refer us'], ['100%', 'Insured & bonded'], ['<24h', 'Avg. quote time']] as [string, string][]).map(([n, l]) => (
                <div className="stat" key={l}>
                  <div className="stat__num" style={{ fontSize: 34 }}>{n}</div>
                  <div className="stat__lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chips" style={{ marginBottom: 34, justifyContent: 'center' }}>
            {FILTERS.map((c) => (
              <button key={c} className={`chip${f === c ? ' on' : ''}`} onClick={() => setF(c)}>{c}</button>
            ))}
          </div>
          <div className="grid grid-3">
            {list.map((rv, i) => (
              <Card key={i} className="review">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stars value={rv.r} />
                  <Badge tone="primary">{rv.cat}</Badge>
                </div>
                <p className="review__quote">&ldquo;{rv.q}&rdquo;</p>
                <div className="review__by">
                  <span className="review__avatar" style={{ position: 'relative', background: 'var(--chrome-100)', display: 'grid', placeItems: 'center' }}>
                    <span style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--phoenix-blue)' }}>{ini(rv.n)}</span>
                    <img
                      src={rv.img}
                      alt={rv.n}
                      loading="lazy"
                      decoding="async"
                      style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </span>
                  <span>
                    <span className="review__name">{rv.n}</span><br />
                    <span className="review__meta">{rv.m} · Verified job</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
          <div className="note-row" style={{ marginTop: 36 }}>
            <Icon name="star" size={16} />
            <span>Reviews mirrored from Google &amp; Nextdoor. We never edit or cherry-pick, the occasional 4-star keeps us honest.</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate">
            <div>
              <h2>Join 600+ happy valley neighbors</h2>
              <p>See the difference for yourself, book a clean or grab a free quote today.</p>
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
