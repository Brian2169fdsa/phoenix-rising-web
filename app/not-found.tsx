import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import GlassSlot from '@/components/GlassSlot';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

export default function NotFound() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container split" style={{ alignItems: 'center' }}>
          <div data-fade>
            <span className="eyebrow-c">Error 404</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', fontSize: 'clamp(44px,7vw,84px)', lineHeight: 0.98, margin: '16px 0 0', color: 'var(--slate-ink)' }}>
              That page slipped<br /><span className="accent">through a clean pane.</span>
            </h1>
            <hr className="headline-rule" />
            <p className="section__lead">We couldn&apos;t find what you were looking for, but your view&apos;s still
              crystal-clear from here. Let&apos;s get you back on track.</p>
            <div className="hero__cta">
              <Button variant="primary" size="lg" href="/" rightIcon={chevron}>Back to home</Button>
              <Button variant="secondary" size="lg" href="/booking">Book a cleaning</Button>
            </div>
            <div className="tag-list" style={{ marginTop: 30 }}>
              {[['Services', '/services'], ['Pricing', '/pricing'], ['Gallery', '/gallery'], ['Contact', '/contact']].map(([t, h]) => (
                <Link key={t} href={h} className="kbd-pill">{t}</Link>
              ))}
            </div>
          </div>
          <div data-fade>
            <GlassSlot ratio="1/1" src="/assets/shot-home-hero.jpg" label="Crystal-clear Arizona view" badge={<Badge tone="primary">404</Badge>} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
