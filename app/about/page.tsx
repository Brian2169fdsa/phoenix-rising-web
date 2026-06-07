import Icon from '@/components/Icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Eyebrow from '@/components/Eyebrow';
import SectionHead from '@/components/SectionHead';
import GlassSlot from '@/components/GlassSlot';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import TrustBadge from '@/components/ui/TrustBadge';

const chevron = <Icon name="chevron-right" size={18} style={{ color: 'var(--ember)' }} />;

const VALUES = [
  { icon: 'sparkles', t: 'Obsessive Detail', b: 'The job is the edges, the corners, the tracks, the parts nobody photographs. We finish them anyway.' },
  { icon: 'shield-check', t: 'Insured & Accountable', b: '$2M liability, bonded, background-checked. We hand you the paperwork before we touch a pane.' },
  { icon: 'users', t: 'Local & Loyal', b: 'Phoenix born. The same crew, the same faces, building relationships one clean view at a time.' },
  { icon: 'leaf', t: 'Eco & Pet Safe', b: 'Pure-water systems and biodegradable solutions. Safe for kids, pets, plants, and the valley.' },
];

const TEAM = [
  { n: 'Sierra Largo', r: 'CEO / Founder' },
  { n: 'Brian Reinhart', r: 'President', img: '/assets/shot-team-1.jpg' },
];

export default function AboutPage() {
  return (
    <div className="site">
      <SiteHeader active="/about" />
      <section className="pagehead">
        <div className="container pagehead__inner">
          <div className="crumbs"><a href="/">Home</a> / <span>About</span></div>
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="pagehead__title">Risen from the<br /><span className="accent">Phoenix dust</span></h1>
          <hr className="headline-rule" />
          <p className="pagehead__sub">One ladder, one squeegee, and a refusal to leave a single streak.
            That's how Phoenix Rising started, and how we still work today.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-fade>
            <Eyebrow>How It Began</Eyebrow>
            <h2 className="section__title">From a single ladder to the <span className="accent">valley's trusted glass</span></h2>
            <hr className="headline-rule" />
            <p className="section__lead" style={{ fontSize: 16 }}>In 2025, founder Sierra Largo noticed something about
              Phoenix: the light here is relentless, and it shows every speck on a window. Dust season, monsoon
              spotting, hard-water film, desert glass takes a beating.</p>
            <p className="section__lead" style={{ fontSize: 16 }}>She built Phoenix Rising on a simple promise, show up
              insured, finish the edges, and guarantee the work. A decade and 600+ jobs later, that promise hasn't
              changed. Just the size of the ladder rack.</p>
            <div className="svcrow__foot">
              <Button variant="primary" href="/booking" rightIcon={chevron}>Work with our crew</Button>
            </div>
          </div>
          <div data-fade>
            <GlassSlot ratio="4/5" label="Drop a crew photo" badge={<Badge tone="primary">Est. 2025</Badge>} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="What We Stand For" title="Values you can" accent="see through" />
          <div className="grid grid-4 grid--mt">
            {VALUES.map((v) => (
              <Card key={v.t} data-fade>
                <span className="svc__icon"><Icon name={v.icon} size={22} /></span>
                <h3 className="feature__t" style={{ marginTop: 16 }}>{v.t}</h3>
                <p className="feature__b">{v.b}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="The Crew" title="Real people," accent="real ladders"
            lead="No franchise call-center, no rotating subcontractors. Meet the team that shows up at your door." />
          <div className="grid grid-2 grid--mt" style={{ maxWidth: 680, marginInline: 'auto' }}>
            {TEAM.map((t, i) => (
              <Card key={t.n} data-fade style={{ padding: 20 }}>
                <div style={{ aspectRatio: '1', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--chrome-300)' }}>
                  {t.img
                    ? <img src={t.img} alt={t.n} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: 'var(--chrome-100)', color: 'var(--cool-gray)', fontSize: 14 }}>
                        Drop {t.n.split(' ')[0]}&apos;s photo
                      </div>}
                </div>
                <h3 className="feature__t" style={{ marginTop: 16, fontSize: 16 }}>{t.n}</h3>
                <p className="postcard__cat" style={{ marginTop: 4 }}>{t.r}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead center eyebrow="Credentials" title="Licensed, bonded," accent="insured" />
          <div className="trustbar__inner" style={{ marginTop: 40, justifyContent: 'center', gap: 48 }}>
            <TrustBadge title="$2M Liability" subtitle="Fully insured" icon={<Icon name="shield-check" size={17} />} />
            <TrustBadge title="ROC #321845" subtitle="AZ licensed" icon={<Icon name="award" size={17} />} />
            <TrustBadge title="Bonded" subtitle="Worker's comp" icon={<Icon name="lock" size={17} />} />
            <TrustBadge title="IRATA Trained" subtitle="Rope-access certified" icon={<Icon name="layers" size={17} />} />
            <TrustBadge title="Background-Checked" subtitle="Every technician" icon={<Icon name="users" size={17} />} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="ctaband glint glint--animate" data-fade>
            <div>
              <h2>Phoenix-strong, since day one.</h2>
              <p>Put a decade of streak-free obsession to work on your glass.</p>
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
