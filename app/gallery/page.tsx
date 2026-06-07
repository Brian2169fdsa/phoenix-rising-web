'use client';
import React, { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ITEMS = [
  { id: 'g1', cat: 'Residential', title: 'Arcadia ranch, patio glass', note: '15 years of hard water, gone.' },
  { id: 'g2', cat: 'Commercial', title: 'Scottsdale storefront', note: 'Monthly plan, daily first-impression.' },
  { id: 'g3', cat: 'High-Rise', title: 'Downtown tower, floors 1–12', note: 'Rope-access façade detail.' },
  { id: 'g4', cat: 'Residential', title: 'Chandler two-story', note: 'Interior + exterior, screens & tracks.' },
  { id: 'g5', cat: 'Commercial', title: 'Tempe office lobby', note: 'Partitions and entry glass.' },
  { id: 'g6', cat: 'Residential', title: 'Paradise Valley estate', note: 'Floor-to-ceiling desert views.' },
  { id: 'g7', cat: 'High-Rise', title: 'Midtown mixed-use', note: 'Lift cleaning, spandrel glass.' },
  { id: 'g8', cat: 'Commercial', title: 'Mesa retail row', note: 'Multi-site quarterly account.' },
];
const FILTERS = ['All', 'Residential', 'Commercial', 'High-Rise'];

export default function GalleryPage() {
  const [f, setF] = useState('All');
  const items = f === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === f);

  return (
    <div className="site">
      <SiteHeader active="/gallery" />

      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Gallery</span></div>
          <Eyebrow>Before &amp; After</Eyebrow>
          <h1 className="pagehead__title">The streak-free<br /><span className="accent">difference</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">Real Phoenix-metro homes and businesses, no stock photos, no
            filters, just clean glass, crystal-clear edge to edge.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chips" style={{ marginBottom: 36, justifyContent: 'center' }}>
            {FILTERS.map((c) => (
              <button key={c} className={`chip${f === c ? ' on' : ''}`} onClick={() => setF(c)}>{c}</button>
            ))}
          </div>
          <div className="grid grid-2">
            {items.map((it) => (
              <Card key={it.id} className="postcard" interactive>
                <div className="postcard__media">
                  <img
                    src={`/assets/shot-${it.id}.jpg`}
                    alt={it.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: '18px 20px 20px' }}>
                  <div>
                    <h3 className="feature__t" style={{ fontSize: 16 }}>{it.title}</h3>
                    <p className="muted" style={{ fontSize: 13.5, marginTop: 4 }}>{it.note}</p>
                  </div>
                  <Badge tone="primary">{it.cat}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate">
            <div>
              <h2>Want your windows on this wall?</h2>
              <p>Book a clean and we&apos;ll show you the before-and-after in person.</p>
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
