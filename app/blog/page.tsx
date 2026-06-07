import Icon from '@/components/Icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

const POSTS = [
  { cat: 'Maintenance', t: 'How Often Should Phoenix Windows Be Cleaned in Dust Season', ex: "Monsoon dust and haboobs coat glass fast. Here's a realistic cleaning cadence for valley homes through the dusty months.", read: '6 min', date: 'May 2026', slug: 'how-often-phoenix-windows-dust-season', feat: true, img: '/assets/shot-g4.jpg' },
  { cat: 'Hard Water', t: 'Hard-Water Spots on Arizona Glass, and How to Beat Them', ex: 'Sprinkler overspray and mineral-heavy water etch desert glass. What actually removes the spots, and what just hides them.', read: '5 min', date: 'Apr 2026', slug: 'hard-water-spots-arizona-glass', img: '/assets/shot-g1.jpg' },
  { cat: 'Commercial', t: "Commercial vs. Residential Window Cleaning: What's Different", ex: 'Frequency, access, insurance, and scheduling all change at scale. A quick guide for property managers.', read: '4 min', date: 'Apr 2026', slug: 'commercial-vs-residential-window-cleaning', img: '/assets/shot-svc-commercial.jpg' },
  { cat: 'Solar', t: 'Solar Panel Cleaning in the Desert: Is It Worth It?', ex: 'Desert dust can quietly cut panel output. We break down when cleaning pays for itself in Arizona sun.', read: '5 min', date: 'Mar 2026', slug: 'solar-panel-cleaning-desert', img: '/assets/shot-svc-solar.jpg' },
  { cat: 'Seasonal', t: 'A Seasonal Window-Maintenance Guide for the Valley', ex: 'Spring pollen, summer dust, monsoon spotting, winter snowbird prep, a month-by-month rhythm for clear glass.', read: '7 min', date: 'Mar 2026', slug: 'seasonal-window-maintenance-guide', img: '/assets/shot-g6.jpg' },
];

export default function BlogPage() {
  const [feat, ...rest] = POSTS;
  return (
    <div className="site">
      <SiteHeader active="/blog" />
      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>Resources</span></div>
          <Eyebrow>Resources</Eyebrow>
          <h1 className="pagehead__title">Keeping Arizona<br /><span className="accent">glass clear</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">Practical guides on desert dust, hard water, solar arrays, and the
            seasonal rhythm of keeping valley windows crystal-clear.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <a href={'/blog/' + feat.slug} className="panel" data-fade style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, padding: 0, overflow: 'hidden', marginBottom: 36 }}>
            <div style={{ aspectRatio: '16/11', position: 'relative' }}>
              <img src={feat.img} alt={feat.t} width={966} height={664} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Badge tone="ember">Featured</Badge><span className="postcard__cat">{feat.cat}</span></span>
              <h2 className="section__title" style={{ fontSize: 28, marginTop: 14 }}>{feat.t}</h2>
              <p className="muted" style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.6 }}>{feat.ex}</p>
              <p className="postcard__meta" style={{ marginTop: 16 }}><Icon name="clock" size={14} /> {feat.read} · {feat.date}</p>
              <div style={{ marginTop: 18 }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600, color: 'var(--phoenix-blue)' }}>Read the guide <Icon name="chevron-right" size={16} /></span></div>
            </div>
          </a>

          <div className="grid grid-2">
            {rest.map((p) => (
              <a key={p.slug} href={'/blog/' + p.slug}>
                <Card className="postcard" interactive data-fade>
                  <div className="postcard__media">
                    <img src={p.img} alt={p.t} width={966} height={604} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className="postcard__body">
                    <span className="postcard__cat">{p.cat}</span>
                    <h3 className="postcard__t">{p.t}</h3>
                    <p className="postcard__ex">{p.ex}</p>
                    <p className="postcard__meta"><Icon name="clock" size={14} /> {p.read} · {p.date}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate" data-fade>
            <div>
              <h2>Reading about it is the easy part.</h2>
              <p>Let our crew handle the dust, hard water, and ladders. Book a clean today.</p>
            </div>
            <div className="ctaband__cta">
              <Button variant="primary" size="lg" href="/booking" rightIcon={chevron}>Book Now</Button>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
