/* ============================================================
   Phoenix Rising, shared site components (header, footer, helpers)
   Loaded on every page after the DS bundle.
   Exposes components on window for page scripts to use.
   ============================================================ */

/* ---------- Iconography (Lucide paths, inherit currentColor) ---------- */
const ICON_PATHS = {
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  "phone": '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384z"/>',
  "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.123 2.123 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.123 2.123 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.123 2.123 0 0 0 1.597-1.16z"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  "sparkles": '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  "droplets": '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.8 7 3.5c-.29 1.3-1.15 2.66-2.29 3.56S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
  "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  "home": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "menu": '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "check-circle": '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "calendar": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  "calendar-check": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  "credit-card": '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "award": '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "leaf": '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  "layers": '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  "truck": '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  "send": '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  "percent": '<line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  "quote": '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  "instagram": '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "minus": '<path d="M5 12h14"/>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  "clipboard-list": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  "dollar-sign": '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "settings": '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
};

function Icon({ name, size = 20, strokeWidth = 1.9, className = "", style }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flex: "none", ...style }} aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || "" }} />
  );
}

/* ---------- Brand wordmark ---------- */
function Wordmark({ light = false }) {
  return (
    <a className="wm" href="index.html" aria-label="Phoenix Rising Window Cleaning, home">
      <img className="wm__mark" src={light ? "assets/logo-mark-knockout.png" : "assets/logo-mark.png"} alt="" />
      <span className="wm__txt">
        <span className={"wm__name" + (light ? " wm__name--light" : "")}>PHOENIX <span className="rise">RISING</span></span>
        <span className="wm__sub">Window Cleaning</span>
      </span>
    </a>
  );
}

/* ---------- Navigation model ---------- */
const NAV = [
  { label: "Services", href: "services.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Reviews", href: "testimonials.html" },
  { label: "About", href: "about.html" },
  { label: "Service Area", href: "service-area.html" },
  { label: "Contact", href: "contact.html" },
];

function SiteHeader({ active }) {
  const { Button } = window.PhoenixRisingDesignSystem_61b068;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="hdr">
      <div className="container hdr__inner">
        <Wordmark />
        <nav className="hdr__nav" aria-label="Primary">
          {NAV.map((l) => (
            <a className={"hdr__link" + (active === l.href ? " hdr__link--active" : "")} href={l.href} key={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="hdr__right">
          <a className="hdr__phone" href="tel:+16025550147"><Icon name="phone" size={16} /> (602) 555-0147</a>
          <Button variant="primary" size="sm" href="booking.html"
            rightIcon={<Icon name="chevron-right" size={15} style={{ color: "var(--ember)" }} />}>Book Now</Button>
        </div>
        <button className="hdr__burger" aria-label="Open menu" onClick={() => setOpen(true)}><Icon name="menu" size={24} /></button>
      </div>
      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <div className="drawer__panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer__top">
              <Wordmark />
              <button className="modal__close" aria-label="Close menu" onClick={() => setOpen(false)}><Icon name="x" size={24} /></button>
            </div>
            <nav className="drawer__nav">
              <a href="index.html" className={active === "index.html" ? "drawer__link drawer__link--active" : "drawer__link"}>Home</a>
              {NAV.map((l) => (
                <a className={"drawer__link" + (active === l.href ? " drawer__link--active" : "")} href={l.href} key={l.href}>{l.label}</a>
              ))}
            </nav>
            <div className="drawer__cta">
              <Button variant="primary" size="lg" fullWidth href="booking.html"
                rightIcon={<Icon name="chevron-right" size={18} style={{ color: "var(--ember)" }} />}>Book Now</Button>
              <a className="hdr__phone" href="tel:+16025550147" style={{ marginTop: 18, justifyContent: "center" }}><Icon name="phone" size={16} /> (602) 555-0147</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer band (Slate Ink, full-width) ---------- */
function SiteFooter() {
  const cols = [
    { h: "Services", links: [
      { t: "Residential", href: "services.html" }, { t: "Commercial / Storefront", href: "services.html" },
      { t: "High-Rise / Multi-Story", href: "services.html" }, { t: "Hard-Water Removal", href: "services.html" },
      { t: "Solar Panel Cleaning", href: "services.html" }, { t: "Post-Construction", href: "services.html" } ] },
    { h: "Company", links: [
      { t: "About Us", href: "about.html" }, { t: "Reviews", href: "testimonials.html" },
      { t: "Gallery", href: "gallery.html" }, { t: "Service Area", href: "service-area.html" },
      { t: "Resources", href: "blog.html" }, { t: "Contact", href: "contact.html" } ] },
    { h: "Get Started", links: [
      { t: "Pricing & Plans", href: "pricing.html" }, { t: "Book a Cleaning", href: "booking.html" },
      { t: "Get a Free Quote", href: "booking.html" }, { t: "(602) 555-0147", href: "tel:+16025550147" },
      { t: "hello@phoenixrisingwindowcleaning.com", href: "mailto:hello@phoenixrisingwindowcleaning.com" } ] },
  ];
  return (
    <footer className="ftr">
      <div className="container ftr__service">
        <span className="ftr__service-left"><Icon name="map-pin" size={18} style={{ color: "var(--ember)" }} /> PROUDLY SERVING PHOENIX &amp; SURROUNDING AREAS</span>
        <a className="ftr__service-right" href="index.html"><Icon name="globe" size={18} /> PHOENIXRISINGWINDOWCLEANING.COM</a>
      </div>
      <div className="container ftr__inner">
        <div className="ftr__brand-col">
          <div className="ftr__brand">
            <img className="ftr__mark" src="assets/logo-mark-knockout.png" alt="" />
            <div className="ftr__name">PHOENIX <span className="rise">RISING</span><span className="ftr__name-sub">Window Cleaning</span></div>
          </div>
          <p className="ftr__blurb">Premium residential &amp; commercial window cleaning for the Phoenix
            metro. Insured, certified, and obsessive about a streak-free finish.</p>
          <div className="ftr__social">
            <a aria-label="Facebook" href="#"><Icon name="facebook" size={18} /></a>
            <a aria-label="Instagram" href="#"><Icon name="instagram" size={18} /></a>
            <a aria-label="Email" href="mailto:hello@phoenixrisingwindowcleaning.com"><Icon name="mail" size={18} /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div className="ftr__col" key={c.h}>
            <h4>{c.h}</h4>
            {c.links.map((l) => <a key={l.t} href={l.href}>{l.t}</a>)}
          </div>
        ))}
      </div>
      <div className="container ftr__bar">
        <span>© 2026 Phoenix Rising Window Cleaning · ROC #321845 · Licensed, Bonded &amp; Insured</span>
        <span className="ftr__legal">
          <a href="privacy.html">Privacy</a><span className="dot">·</span><a href="terms.html">Terms</a>
        </span>
      </div>
    </footer>
  );
}

/* ---------- Section helpers ---------- */
function Eyebrow({ children, center }) {
  return <span className={"eyebrow-c" + (center ? " eyebrow-c--center" : "")}>{children}</span>;
}

function SectionHead({ eyebrow, title, accent, lead, center, children }) {
  return (
    <div className={"section__head" + (center ? " section__head--center" : "")}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="section__title">{title} {accent && <span className="accent">{accent}</span>}</h2>
      <hr className="headline-rule" />
      {lead && <p className="section__lead">{lead}</p>}
      {children}
    </div>
  );
}

/* A glass image-slot panel with the signature glint + streak overlay */
function GlassSlot({ id, ratio = "4/5", label = "Drop a photo", badge, glint = true, style, slotStyle, src }) {
  return (
    <div className="glasswrap" style={{ aspectRatio: ratio, ...style }}>
      {src
        ? <img src={src} alt={label} draggable="false" loading="lazy" decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...slotStyle }} />
        : <image-slot id={id} shape="rounded" radius="14" placeholder={label}
            style={{ width: "100%", height: "100%", display: "block", ...slotStyle }}></image-slot>}
      <span className="glasswrap__streak" />
      {glint && <span className="glasswrap__glint"><Icon name="sparkles" size={28} strokeWidth={1.4} /></span>}
      {badge && <span className="glasswrap__badge">{badge}</span>}
    </div>
  );
}

/* Stagger page-load reveal on [data-fade] elements.
   JS-driven (not pure CSS) so it survives capture harnesses that freeze the
   animation clock: a real-time setTimeout finalizes every element to visible. */
function usePageFade() {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-fade]"));
    document.body.classList.add("fade-ready");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !els.length) return;
    els.forEach((el, i) => {
      const d = (i % 8) * 60;
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = `opacity .6s cubic-bezier(.22,.61,.36,1) ${d}ms, transform .6s cubic-bezier(.22,.61,.36,1) ${d}ms`;
    });
    const reveal = () => els.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
    requestAnimationFrame(() => requestAnimationFrame(reveal));
    const t = setTimeout(() => els.forEach((el) => { el.style.transition = "none"; el.style.opacity = "1"; el.style.transform = "none"; }), 700);
    return () => clearTimeout(t);
  }, []);
}

/* Star rating row */
function Stars({ value = 5, size = 16 }) {
  return (
    <span className="stars" aria-label={value + " out of 5 stars"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={size} strokeWidth={0} style={{ fill: i < value ? "var(--ember)" : "var(--chrome-300)", color: i < value ? "var(--ember)" : "var(--chrome-300)" }} />
      ))}
    </span>
  );
}

/* Before / After draggable comparison slider.
   Pass beforeSrc/afterSrc for fixed images, or omit for drag-drop image slots. */
function BeforeAfter({ id, beforeLabel = "Before", afterLabel = "After", ratio = "4/3", beforeSrc, afterSrc }) {
  const [split, setSplit] = React.useState(50);
  const imgStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
  return (
    <div className="ba" style={{ "--split": split + "%", aspectRatio: ratio }}>
      <div className="ba__layer">
        {beforeSrc
          ? <img src={beforeSrc} alt={beforeLabel} style={imgStyle} draggable="false" />
          : <image-slot id={id + "-before"} shape="rounded" radius="0" placeholder="Drop BEFORE photo"></image-slot>}
      </div>
      <div className="ba__layer ba__after">
        {afterSrc
          ? <img src={afterSrc} alt={afterLabel} style={imgStyle} draggable="false" />
          : <image-slot id={id + "-after"} shape="rounded" radius="0" placeholder="Drop AFTER photo"></image-slot>}
      </div>
      <span className="ba__tag ba__tag--before">{beforeLabel}</span>
      <span className="ba__tag ba__tag--after">{afterLabel}</span>
      <span className="ba__handle"><span className="ba__grip"><Icon name="chevron-left" size={14} /><Icon name="chevron-right" size={14} /></span></span>
      <input className="ba__range" type="range" min="0" max="100" value={split}
        aria-label="Drag to compare before and after"
        onChange={(e) => setSplit(Number(e.target.value))} />
    </div>
  );
}

function mount(Component) {
  const App = () => { usePageFade(); return <Component />; };
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}

Object.assign(window, { Icon, Wordmark, SiteHeader, SiteFooter, Eyebrow, SectionHead, GlassSlot, Stars, BeforeAfter, usePageFade, mount, NAV });
