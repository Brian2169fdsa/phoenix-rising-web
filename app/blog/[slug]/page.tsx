import Icon from '@/components/Icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import GlassSlot from '@/components/GlassSlot';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

const SLUGS = [
  'how-often-phoenix-windows-dust-season',
  'hard-water-spots-arizona-glass',
  'commercial-vs-residential-window-cleaning',
  'solar-panel-cleaning-desert',
  'seasonal-window-maintenance-guide',
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default function BlogPost() {
  return (
    <div className="site">
      <SiteHeader active="/blog" />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container article">
          <div className="crumbs" style={{ color: 'var(--cool-gray)' }}><a href="/blog">Resources</a> / <span>Dust Season</span></div>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 18 }}>
            <Badge tone="primary">Maintenance</Badge>
            <span className="postcard__meta"><Icon name="clock" size={14} /> 6 min read · May 2026</span>
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', fontSize: 'clamp(30px,4.4vw,44px)', lineHeight: 1.05, margin: '16px 0 0', color: 'var(--slate-ink)' }}>
            How Often Should Phoenix Windows Be Cleaned in Dust Season?
          </h1>
          <hr className="headline-rule" />
          <p className="muted" style={{ fontSize: 18, lineHeight: 1.6, marginTop: 18 }}>Monsoon dust, haboobs, and
            relentless sun mean valley glass gets dirty faster than almost anywhere in the country. Here's a realistic
            cadence, and the signs it's time to call.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="container article">
          <GlassSlot ratio="16/8" src="/assets/shot-g4.jpg" label="Dusty vs. clean glass" badge={<Badge tone="primary">Dust season</Badge>} />

          <p>If you've lived through a Phoenix summer, you know the drill: a haboob rolls through, and the next
            morning every west-facing window wears a film of fine desert grit. Add sprinkler overspray and our
            mineral-heavy water, and glass here simply doesn't stay clean as long as it does in milder climates.</p>

          <h2>The short answer</h2>
          <p>For most valley homes, we recommend a professional exterior clean <strong>every quarter</strong>, with a
            full interior-and-exterior clean <strong>twice a year</strong>. Homes near construction, golf-course
            overspray, or with lots of west-facing glass often benefit from a bi-monthly exterior touch-up during
            peak dust months (June through September).</p>

          <h2>A simple cadence by property type</h2>
          <ul>
            <li><strong>Standard home, average exposure:</strong> exterior quarterly, full clean twice a year.</li>
            <li><strong>West-facing or lots of glass:</strong> exterior every 6–8 weeks in dust season.</li>
            <li><strong>Near construction or new builds:</strong> monthly until the dust settles, then quarterly.</li>
            <li><strong>Storefronts &amp; offices:</strong> weekly to monthly, first impressions live on the glass.</li>
          </ul>

          <h2>Signs it's time, regardless of the calendar</h2>
          <ul>
            <li>You notice the film only when the afternoon sun hits at an angle.</li>
            <li>Water spots have started to ring the lower corners of the pane.</li>
            <li>Screens look gray and the tracks have visible grit.</li>
            <li>You're prepping for guests, a listing photo, or a property walkthrough.</li>
          </ul>

          <h2>Why frequency beats intensity</h2>
          <p>Letting dust and hard-water spotting build up doesn't just look worse, it gets harder to remove. Mineral
            deposits left through several monsoon cycles can begin to etch the glass, which is far costlier to restore
            than to prevent. A steady, lighter cadence keeps glass in restorable condition and your per-visit cost
            predictable.</p>

          <h2>The Phoenix Rising approach</h2>
          <p>Every clean includes the parts that actually hold dust, screens, tracks, and sills, not just the pane.
            On recurring plans we lock your rate and put you on a cadence that fits your exposure, so you never have
            to think about it again. And it's all backed by our 48-hour streak-free guarantee.</p>

          <div className="panel" style={{ marginTop: 36, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <h3 className="feature__t" style={{ fontSize: 18 }}>Not sure what cadence you need?</h3>
              <p className="muted" style={{ marginTop: 6, fontSize: 14.5 }}>Tell us about your home and we'll recommend one, free.</p>
            </div>
            <Button variant="primary" href="/booking" rightIcon={chevron}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <Eyebrow center>Keep Reading</Eyebrow>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {([
              ['Hard Water', 'Hard-Water Spots on Arizona Glass', '/assets/shot-g1.jpg', 'hard-water-spots-arizona-glass'],
              ['Solar', 'Solar Panel Cleaning in the Desert', '/assets/shot-svc-solar.jpg', 'solar-panel-cleaning-desert'],
              ['Seasonal', 'A Seasonal Window-Maintenance Guide', '/assets/shot-g6.jpg', 'seasonal-window-maintenance-guide'],
            ] as [string, string, string, string][]).map(([c, t, img, slug]) => (
              <a key={slug} href={'/blog/' + slug}>
                <Card className="postcard" interactive data-fade>
                  <div className="postcard__media">
                    <img src={img} alt={t} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div className="postcard__body">
                    <span className="postcard__cat">{c}</span>
                    <h3 className="postcard__t">{t}</h3>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
