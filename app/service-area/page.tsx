'use client';
import React, { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const ZONES = [
  { city: 'Phoenix', hoods: ['Arcadia', 'Biltmore', 'Ahwatukee', 'Downtown', 'Midtown', 'Desert Ridge'] },
  { city: 'Scottsdale', hoods: ['Old Town', 'North Scottsdale', 'McCormick Ranch', 'Gainey Ranch'] },
  { city: 'Tempe', hoods: ['Downtown Tempe', 'South Tempe', 'Warner Ranch'] },
  { city: 'Mesa', hoods: ['Las Sendas', 'Eastmark', 'Downtown Mesa'] },
  { city: 'Chandler', hoods: ['Ocotillo', 'Fulton Ranch', 'Downtown Chandler'] },
  { city: 'Gilbert', hoods: ['Val Vista Lakes', 'Power Ranch', 'Agritopia'] },
  { city: 'Glendale', hoods: ['Arrowhead', 'Westgate'] },
  { city: 'Peoria', hoods: ['Vistancia', 'Lake Pleasant'] },
  { city: 'Paradise Valley', hoods: ['Mummy Mountain', 'Camelback'] },
  { city: 'Surprise & Goodyear', hoods: ['Marley Park', 'Estrella', 'PebbleCreek'] },
];

const PINS: [string, number, number][] = [
  ['Phoenix', 42, 50], ['Scottsdale', 60, 36], ['Paradise Valley', 54, 42],
  ['Tempe', 52, 60], ['Mesa', 66, 58], ['Chandler', 60, 70],
  ['Gilbert', 70, 68], ['Glendale', 30, 42], ['Peoria', 24, 32], ['Surprise', 14, 28],
];

function MapArt() {
  return (
    <svg viewBox="0 0 100 78" style={{ width: '100%', height: '100%', display: 'block' }} aria-label="Phoenix metro coverage map">
      <rect width="100" height="78" fill="#e7f0fa" />
      <path d="M0 56 L16 48 L30 54 L46 45 L60 51 L74 43 L88 49 L100 44 L100 78 L0 78 Z" fill="#d7e6f5" />
      <path d="M0 64 L20 58 L40 63 L62 57 L84 62 L100 57 L100 78 L0 78 Z" fill="#cadcef" />
      <g stroke="#9db9d8" strokeWidth="0.35" opacity="0.6">
        <line x1="0" y1="40" x2="100" y2="40" />
        <line x1="0" y1="58" x2="100" y2="58" />
        <line x1="38" y1="0" x2="38" y2="78" />
        <line x1="64" y1="0" x2="64" y2="78" />
      </g>
      <ellipse cx="46" cy="52" rx="44" ry="30" fill="#1457A6" opacity="0.06" />
      <ellipse cx="46" cy="52" rx="44" ry="30" fill="none" stroke="#1457A6" strokeWidth="0.4" strokeDasharray="2 1.6" opacity="0.5" />
      {PINS.map(([name, x, y]) => (
        <g key={name} transform={`translate(${x} ${y})`}>
          <path d="M0 -3.4 C2 -3.4 3.4 -2 3.4 0 C3.4 2.2 0 5 0 5 C0 5 -3.4 2.2 -3.4 0 C-3.4 -2 -2 -3.4 0 -3.4 Z" fill="#1457A6" />
          <circle cy="0" r="1.1" fill="#fff" />
          <text x="0" y="9" textAnchor="middle" fontSize="2.6" fontFamily="Hanken Grotesk, sans-serif" fontWeight="600" fill="#18242F">{name}</text>
        </g>
      ))}
      <g transform="translate(82 16)" fill="#fff" opacity="0.9">
        <path d="M0 -4 L0.8 -0.8 L4 0 L0.8 0.8 L0 4 L-0.8 0.8 L-4 0 L-0.8 -0.8 Z" />
      </g>
    </svg>
  );
}

function AddressCheck() {
  const [zip, setZip] = useState('');
  const [res, setRes] = useState<boolean | null>(null);

  function check(e: React.FormEvent) {
    e.preventDefault();
    setRes(/^85\d{3}$/.test(zip.trim()));
  }

  return (
    <form className="panel" onSubmit={check}>
      <Eyebrow>Check Your Address</Eyebrow>
      <h3 className="svcrow__title" style={{ fontSize: 22, marginTop: 12 }}>Are we in your neighborhood?</h3>
      <p className="muted" style={{ marginTop: 8, fontSize: 14.5 }}>Pop in your ZIP, Phoenix-metro ZIPs start with 85.</p>
      <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
        <div style={{ flex: 1 }}>
          <Input placeholder="85016" value={zip} onChange={(e) => setZip(e.target.value)} />
        </div>
        <Button variant="primary" type="submit" rightIcon="chevron-right">Check</Button>
      </div>
      {res === true && (
        <div className="securenote" style={{ marginTop: 16 }}>
          <Icon name="check-circle" size={16} /> You&apos;re in our service area, let&apos;s get you booked!
        </div>
      )}
      {res === false && (
        <div className="securenote" style={{ marginTop: 16, color: 'var(--ember)' }}>
          <Icon name="map-pin" size={16} /> That&apos;s outside our usual radius, call us, we may still help.
        </div>
      )}
      {res === true && (
        <div style={{ marginTop: 16 }}>
          <Button variant="secondary" fullWidth href="/booking">Book a cleaning</Button>
        </div>
      )}
    </form>
  );
}

export default function ServiceAreaPage() {
  return (
    <div className="site">
      <SiteHeader active="/service-area" />

      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Service Area</span></div>
          <Eyebrow>Proudly Serving</Eyebrow>
          <h1 className="pagehead__title">All across the<br /><span className="accent">Phoenix metro</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">From Surprise to Gilbert, Peoria to Chandler, if you can see the
            mountains from your window, we&apos;ll make sure the view is crystal-clear.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split" style={{ gap: 44, alignItems: 'start' }}>
          <div>
            <div className="map"><MapArt /></div>
          </div>
          <AddressCheck />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="Coverage Zones" title="Cities &" accent="neighborhoods"
            lead="Ten-plus cities and dozens of neighborhoods. Don't see yours? Ask, our radius keeps growing." />
          <div className="grid grid-2 grid--mt">
            {ZONES.map((z) => (
              <Card key={z.city} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 24 }}>
                <span className="svc__icon" style={{ width: 42, height: 42 }}><Icon name="map-pin" size={19} /></span>
                <div>
                  <h3 className="feature__t" style={{ fontSize: 17 }}>{z.city}</h3>
                  <div className="tag-list" style={{ marginTop: 10 }}>
                    {z.hoods.map((h) => (
                      <span key={h} className="kbd-pill" style={{ fontSize: 12.5, padding: '5px 11px' }}>{h}</span>
                    ))}
                  </div>
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
              <h2>In the valley? You&apos;re covered.</h2>
              <p>Book online in minutes or grab a free same-day quote.</p>
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
