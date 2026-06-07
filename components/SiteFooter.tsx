import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';

const SERVICES = [
  { label: 'Residential Window Cleaning', href: '/services#residential' },
  { label: 'Commercial Window Cleaning', href: '/services#commercial' },
  { label: 'High-Rise & Storefront', href: '/services#high-rise' },
  { label: 'Solar Panel Cleaning', href: '/services#solar' },
  { label: 'Screen Cleaning & Repair', href: '/services#screens' },
  { label: 'Post-Construction Cleanup', href: '/services#post-construction' },
];

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const GET_STARTED = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Book Now', href: '/booking' },
  { label: 'Get a Free Quote', href: '/contact#quote' },
  { label: 'Maintenance Plans', href: '/pricing#plans' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Referral Program', href: '/referral' },
];

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="ftr__service">
        <div className="ftr__service-left">
          <Icon name="map-pin" size={16} />
          Serving the Greater Phoenix Metro Area
        </div>
        <div className="ftr__service-right">
          <Icon name="phone" size={16} />
          <a href="tel:+16025550100">(602) 555-0100</a>
          <Icon name="mail" size={16} />
          <a href="mailto:hello@phoenixrisingwc.com">hello@phoenixrisingwc.com</a>
        </div>
      </div>

      <div className="ftr__inner">
        <div className="ftr__brand-col">
          <Link href="/" className="ftr__brand">
            <span className="ftr__mark">
              <Image src="/assets/logo-mark.png" alt="" width={40} height={40} />
            </span>
            <span>
              <span className="ftr__name">
                Phoenix <span className="rise">Rising</span>
              </span>
              <span className="ftr__name-sub">Window Cleaning</span>
            </span>
          </Link>
          <p className="ftr__blurb">
            Phoenix&apos;s most trusted window cleaning company. Streak-free results, insured professionals, and satisfaction guaranteed on every job.
          </p>
          <div className="ftr__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
              <Icon name="globe" size={20} />
            </a>
          </div>
        </div>

        <div className="ftr__col">
          <h3>Services</h3>
          <ul>
            {SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__col">
          <h3>Company</h3>
          <ul>
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__col">
          <h3>Get Started</h3>
          <ul>
            {GET_STARTED.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ftr__bar">
        <p className="ftr__legal">
          &copy; {new Date().getFullYear()} Phoenix Rising Window Cleaning. All rights reserved.
          <span className="dot" />
          <Link href="/privacy">Privacy Policy</Link>
          <span className="dot" />
          <Link href="/terms">Terms of Service</Link>
          <span className="dot" />
          <Link href="/sitemap">Sitemap</Link>
        </p>
      </div>
    </footer>
  );
}
