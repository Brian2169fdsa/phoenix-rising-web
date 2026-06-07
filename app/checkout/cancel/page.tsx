import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import Button from '@/components/ui/Button';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

export const metadata = {
  title: 'Checkout Cancelled · Phoenix Rising Window Cleaning',
};

export default function CancelPage() {
  return (
    <div className="site">
      <SiteHeader />
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="result" data-fade>
            <div className="result__icon result__icon--warn">
              <Icon name="arrow-left" size={38} strokeWidth={2} />
            </div>
            <h1>Checkout cancelled</h1>
            <p>No worries, and no charge was made. Your booking details are saved, so you can pick up right where you left off.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 26, flexWrap: 'wrap' }}>
              <Button variant="primary" href="/booking" rightIcon={chevron}>Resume booking</Button>
              <Button variant="secondary" href="/contact">Talk to us first</Button>
            </div>
            <p style={{ fontSize: 14, color: 'var(--cool-gray)', marginTop: 28 }}>
              Questions about pricing or scope? Call <a href="tel:+16025550147">(602) 555-0147</a>, we&apos;re happy to walk you through it.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
