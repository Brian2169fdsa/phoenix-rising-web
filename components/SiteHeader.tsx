'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';

const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'Contact', href: '/contact' },
];

interface SiteHeaderProps {
  active?: string;
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="hdr">
        <div className="hdr__inner">
          <Link href="/" className="wm" aria-label="Phoenix Rising Window Cleaning home">
            <span className="wm__mark">
              <Image src="/assets/logo-mark.png" alt="" width={36} height={36} />
            </span>
            <span className="wm__txt">
              <span className="wm__name">
                Phoenix <span className="rise">Rising</span>
              </span>
              <span className="wm__sub">Window Cleaning</span>
            </span>
          </Link>

          <nav className="hdr__nav" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hdr__link${active === item.href ? ' hdr__link--active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hdr__right">
            <a href="tel:+16025550100" className="hdr__phone">
              <Icon name="phone" size={16} />
              (602) 555-0100
            </a>
            <Button href="/booking" size="sm">Book Now</Button>
            <button
              className="hdr__burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' drawer--open' : ''}`} aria-modal="true" role="dialog">
        <div className="drawer__panel">
          <div className="drawer__top">
            <Link href="/" className="wm" onClick={() => setOpen(false)}>
              <span className="wm__mark">
                <Image src="/assets/logo-mark.png" alt="" width={32} height={32} />
              </span>
              <span className="wm__txt">
                <span className="wm__name">
                  Phoenix <span className="rise">Rising</span>
                </span>
                <span className="wm__sub">Window Cleaning</span>
              </span>
            </Link>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="x" size={22} />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`drawer__link${active === item.href ? ' drawer__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="drawer__cta">
            <Button href="/booking" fullWidth onClick={() => setOpen(false)}>
              Book Now
            </Button>
            <a href="tel:+16025550100" className="hdr__phone">
              <Icon name="phone" size={16} />
              (602) 555-0100
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
