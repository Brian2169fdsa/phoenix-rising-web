# Claude Code Build Prompt — Phoenix Rising Window Cleaning

Paste this entire file into Claude Code at the root of a new repo. It is the complete spec to build
and maintain the Phoenix Rising Window Cleaning website **exactly as designed**, as a
production-ready, Vercel-deployable Next.js app with live Stripe payments and Resend email.

A finished, pixel-faithful **HTML/React prototype** of every page already exists (see "Source
prototype" below). Treat that prototype as the visual + behavioral source of truth. Your job is to
port it 1:1 to the production stack, wire up real Stripe + Resend, and keep it maintainable.

---

## 0. Objective

Build the complete marketing + booking + payments website for **Phoenix Rising Window Cleaning**, a
premium residential & commercial window-cleaning company serving the Phoenix, Arizona metro. Every
page fully built and styled to the locked brand. Live Stripe Checkout (payments + subscriptions +
webhooks + Customer Portal). Transactional email via Resend. Deployable to Vercel out of the box.

The brand reads as: established, high-trust, premium local trade. Cool, clean, architectural.
"Insured, certified, the valley trusts us." Worth a premium price, not cheap-and-fast.

## 1. Tech stack (required)

- **Next.js 14+ (App Router), TypeScript, Tailwind CSS.**
- **Stripe** — Checkout Sessions (`payment` + `subscription`), webhooks, Customer Portal.
- **Resend** — transactional email (booking confirmations, receipts, contact, quote requests).
- **react-hook-form + zod** for all forms.
- **next/font/google** for the fonts. `next/image` for all imagery.
- Animations CSS-first; reserve any JS motion for the signature hero glint only.
- Fully responsive, mobile-first. Lighthouse 90+ (perf, SEO, a11y). WCAG 2.1 AA.
- Clean, documented, well-organized codebase. `README.md` with Vercel deploy steps + `.env.example`.
- All secrets via env vars — never hardcode keys. Validate all prices server-side from a catalog;
  never trust client-sent amounts.

## 2. Source prototype (your reference — port it exactly)

The prototype is plain HTML + in-browser-Babel React, one file per page, composing a bound design
system. Do not invent UI — lift the exact markup, copy, layout, and logic from these files.

```
/                         ← 18 page shells (index.html, services.html, … ) — head + script tags only
/site/*.jsx               ← the actual page content & logic (one per page) + shared.jsx + site.css
/assets/                  ← logos, baked photos (shot-*.jpg), before/after JPGs, image-slot.js
/_ds/phoenix-rising-…/    ← the bound Phoenix Rising design system (TOKENS = source of truth)
  tokens/colors.css typography.css spacing.css fonts.css base.css
  styles.css              ← imports all tokens
  _ds_bundle.js           ← compiled React components (Button, Card, Badge, Eyebrow, Input,
                            Select, TrustBadge, PricingTier) on window.PhoenixRisingDesignSystem_61b068
README.md  HANDOFF.md  .env.example
```

Page file → route → logic source:

| Page | Route | Content/logic file |
|---|---|---|
| Home | `/` | `site/home.jsx` |
| Services | `/services` | `site/services.jsx` |
| Pricing | `/pricing` | `site/pricing.jsx` |
| Gallery | `/gallery` | `site/gallery.jsx` |
| Booking | `/booking` | `site/booking.jsx` (6-step wizard — the centerpiece) |
| Checkout | `/checkout` | `site/checkout.jsx` (mocked Stripe → build real Checkout) |
| Success / Cancel | `/checkout/success`, `/checkout/cancel` | `site/checkout-success.jsx`, `checkout-cancel.jsx` |
| Reviews | `/reviews` | `site/testimonials.jsx` |
| About | `/about` | `site/about.jsx` |
| Service Area | `/service-area` | `site/servicearea.jsx` |
| Contact | `/contact` | `site/contact.jsx` |
| Blog | `/blog`, `/blog/[slug]` | `site/blog.jsx`, `site/blogpost.jsx` (MDX in prod) |
| Admin | `/admin` | `site/admin.jsx` (auth-gated dashboard) |
| Legal / 404 | `/privacy`, `/terms`, `not-found.tsx` | `site/privacy.jsx`, `terms.jsx`, `notfound.jsx` |

Shared header (sticky, chrome hairline border, logo left, nav, phone, blue "Book Now" with ember
chevron, mobile drawer) and footer (Slate-Ink band: map-pin + "PROUDLY SERVING PHOENIX & SURROUNDING
AREAS", globe + domain, services/company/get-started columns, social, ROC #321845, legal links) live
in `site/shared.jsx` — port to `components/SiteHeader.tsx` / `SiteFooter.tsx`.

## 3. Design system (LOCKED — match exactly; tokens are the source of truth)

Port `/_ds/phoenix-rising-…/tokens/*.css` into `globals.css` + `tailwind.config`. Use the exact hex
values and CSS variable names; do not re-interpret.

**Color**
- `--phoenix-blue #1457A6` — primary: buttons, links, emphasis headline word, key accents.
- `--phoenix-blue-deep #0F4684` — hover/pressed.
- `--slate-ink #18242F` — headlines, dark sections, footer band.
- `--cool-gray #6C6F78` — body / secondary text.
- `--chrome-100 #E6F0FA / --chrome-300 #C0C8D2 / --chrome-500 #9AA4B0` — depth, frames, dividers,
  hairline borders. Chrome gradient: `linear-gradient(135deg,#E6F0FA,#C0C8D2 55%,#9AA4B0)`.
- `--sky-glass #C8E2F8` — tinted reflective panels.
- `--ember #C45A1E` — **ACCENT ONLY**: thin rules, button chevrons, map pin, tiny highlights.
  **Never a fill, never a button background, at most once or twice per screen.**
- `--bone #FBFCFE` — page background. `--white #FFFFFF` — cards.
- Semantic: success `#1E8E5A`, error `#C0392B`, info `#1457A6`.

**Type**
- Display/headings: **Saira Condensed**, Black/800, **ALL-CAPS**, tight tracking (~0.005–0.03em).
  Headlines are two-tone: lead word Slate Ink, emphasis word Phoenix Blue, with a short ember rule
  beneath (`.headline-rule`).
- Body: **Hanken Grotesk** 400/500/600, line-height 1.6.
- Eyebrows/labels: Hanken Grotesk UPPERCASE, letter-spacing 0.18em, Cool Gray, paired with a thin
  chrome/ember rule.
- Mono: **IBM Plex Mono** for numeric/technical detail only.
- Load all three via `next/font/google`.

**Shape / elevation**
- Radii: `--r-sm 6px`, `--r-md 10px`, `--r-lg 14px`. No pill-everything (pills only for real
  toggles/chips). Soft cool shadows `0 8px 30px rgba(24,36,47,.10)`. Signature chrome/glass edge
  highlight on key panels (1px inner-top white highlight over faint chrome border).
- Spacing scale (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. 12-col responsive grid,
  generous negative space. Max content width 1180px.

**Backgrounds & motif**
- Mostly solid Bone/White. Two sanctioned gradients only: chrome gradient and glass gradient. No
  purple/teal tech gradients, ever.
- Signature motif "Arizona in the glass": crisp glass with skyline/mountains/saguaro reflected,
  bright AZ daylight, a recurring **starburst light glint** (echoing the logo sparkle).
- Iconography: **Lucide** line icons, 1.8–2px stroke. The prototype inlines a Lucide path set in
  `site/shared.jsx` (the `ICON_PATHS` map) — reuse it or swap to `lucide-react`.

**Motion**: one orchestrated hero load (staggered fades — see `usePageFade` in `shared.jsx`), a
subtle glint/shimmer on a hero/CTA glass panel (`.glint--animate`), gentle hover lift + chrome-edge
brighten on cards/buttons. Understated, premium, never bouncy. Respect `prefers-reduced-motion`.

**Anti-patterns (do NOT):** orange fills, purple/teal gradients, neon, floating rounded cards on
pastel, generic stock filler, bouncy motion, lowercase headlines, cluttered layouts.

**Logo:** `assets/logo-full.png`, `logo-mark.png`, `logo-mark-knockout.png` (on-dark). Never recolor,
stretch, or crop. Wire a favicon from the mark.

## 4. Pricing model & business logic (port these exact numbers)

> These are placeholder prices the owner will refine — keep them in one typed config so they're easy
> to change. Source: `site/pricing.jsx`, `site/booking.jsx`, `site/checkout.jsx`.

**Residential packages (per visit):**
- Standard — one-time **$189**, recurring **$159**. Up to 20 panes.
- Deluxe (Most Popular) — one-time **$249**, recurring **$209**. Up to 35 panes.
- Premium — one-time **$329**, recurring **$279**. Large/2-story, 35+ panes.

**Commercial:** Per-pane **$3.50/pane** · Hourly crew **$140/hr** · Custom contract — quote. Volume
discounts at 5+ recurring sites; net-30 for established accounts.

**Other services (from):** High-Rise — quote · Screens & Tracks **$59** · Solar **$149** ·
Post-construction **$299** · Hard-water removal **$249**.

**Booking instant-estimate logic** (`estimate()` in `booking.jsx` — move server-side):
- Residential base by size: small **189**, medium **249**, large **329**.
  `+60` if 2 stories, `+140` if 3+ stories, `+80` if hard-water add-on.
  Frequency multiplier: monthly `×0.84`, quarterly `×0.92`, one-time `×1`.
- Solar: base **149** `+50` for 10–20 panels, `+100` for 20+.
- Screens: flat **59**.
- Commercial / high-rise / post-construction: **no instant price** → quote request flow.

**Checkout math** (`checkout.jsx`): tax **8.6%** (AZ/Maricopa est.), promo code **`PHX10`** = 10% off,
deposit option = **25%** of total due now (balance after service). Pay-in-full = total now.

**Routing rule:** residential / solar / screens with an instant price → `/checkout` (Stripe). Quote
services → emailed quote request + customer confirmation (Resend), land on a "quote received" success
state.

## 5. Booking flow (6 steps — port from `booking.jsx`)

Service → Property → Address → Schedule → Contact → Review. Sticky step rail + progress bar.
- Service step: 6 options (Residential, Commercial, High-Rise, Solar, Post-construction, Screens);
  residential/solar/screens show an "Instant price" badge.
- Property step: conditional fields by service — residential (size, stories, # windows, frequency,
  hard-water toggle); solar (panel count, location); others (sq ft, floors, frequency, notes).
- Address step: Phoenix-metro validation — ZIP must match `/^85\d{3}$/` and city from the metro list
  (Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Paradise Valley,
  Avondale, Goodyear). **In production replace the regex with a real geocode/zone check.**
- Schedule step: calendar (closed Sundays, no past dates) + 2-hour arrival windows
  (7–9, 9–11, 11–1, 1–3, 3–5).
- Contact step: name, phone, email (validated), optional gate-code/notes.
- Review step: summary + instant total or "Free quote"; CTA continues to Checkout or submits quote.
- Per-step "Continue" is gated by a `canNext[step]()` validator. Phoenix-Blue focus rings; zod
  validation in production.

## 6. Stripe integration (complete)

- **Typed catalog** mapping plan → Stripe Price ID via env (see `.env.example`). One-time packages
  use `mode: 'payment'`; recurring maintenance uses `mode: 'subscription'`.
- **`POST /api/checkout`** — create a Checkout Session: line items resolved **server-side from the
  catalog** (recompute amount; ignore any client price), `customer_email`, `metadata`
  (bookingId, service, address, date, slot), `automatic_tax: { enabled: true }`,
  `allow_promotion_codes: true`, optional deposit line item. `success_url`/`cancel_url` → the two
  result routes.
- **`POST /api/webhooks/stripe`** — verify signature against `STRIPE_WEBHOOK_SECRET` using the **raw
  body** (App Router: `await req.text()`, disable body parsing). Handle
  `checkout.session.completed`, `payment_intent.succeeded`, `invoice.paid`,
  `customer.subscription.created|updated|deleted` → persist booking/order status + trigger Resend
  confirmation/receipt.
- **Customer Portal** — `POST /api/portal` returns a Billing Portal URL (link from success page +
  admin) so subscription customers manage/cancel.
- Receipts: Stripe-hosted receipts + a branded Resend confirmation email.
- Promo `PHX10` should be a real Stripe promotion code; deposit handled as a separate line item or a
  reduced one-time amount with the balance invoiced after service.

## 7. Resend email flows

Booking confirmation (customer), payment receipt, contact-form notification to `CONTACT_TO_EMAIL` +
customer autoresponder, quote-request notification + customer confirmation. Brand the templates:
Slate-Ink header band, Phoenix-Blue CTA, a single hairline ember rule, Saira/Hanken type.

## 8. Admin (`/admin`)

Auth-gate with `ADMIN_PASSWORD` (or magic link). Port `admin.jsx`: sidebar (Dashboard, Bookings,
Payments, Reviews, Pricing, Settings), KPI cards, bookings/quote-requests table, Stripe
payments/subscriptions (read live via Stripe API), reviews moderation, editable pricing content,
integrations status. Statuses: Confirmed / Scheduled / Quote sent / Completed / Paid / Pending /
Refunded.

## 9. Imagery system (important for maintenance)

The prototype uses two image mechanisms — handle both when porting to `next/image`:
- **Baked photos** in `/assets/shot-*.jpg` — used on Home hero, all 6 Services, all 8 Gallery
  before/afters (plus `window-clean.jpg` / `window-dirty.jpg` for the home before/after slider), one
  team headshot (`shot-team-1.jpg`), and blog thumbnails. These are the owner's real photos; keep
  them, just move to `/public` and load via `next/image`.
- **Drop-in placeholders** (`<image-slot>`) — only remaining on the About page (story image + Sierra
  Largo's headshot). In production these become normal `next/image` slots the owner can replace; add
  a simple CMS/upload or just swap the file.
- Review/testimonial avatars currently use `randomuser.me` portraits with an initials fallback —
  replace with real customer photos or keep the initials-circle fallback (gender-matched).

## 10. Content, voice & house rules

- **Voice:** confident, local, premium. "We" (the crew) to "you" (the homeowner/business). Leads with
  reliability, insurance, results — never discounts/hype. Tone words: crystal-clear, streak-free,
  trusted, insured, certified, guaranteed, the valley, Phoenix-strong, architectural.
- **Casing:** hero/section titles ALL-CAPS condensed; eyebrows small-caps; body sentence case;
  buttons UPPERCASE ("BOOK NOW", "GET A QUOTE").
- **No emoji**, ever. Icons carry visual emphasis.
- **NO EM-DASHES (—) anywhere** in copy, titles, metadata, or code comments. This was explicitly
  removed site-wide and must stay gone. Use commas in prose, the middot ( · ) for title/label
  separators (e.g. "Services · Phoenix Rising Window Cleaning"), and hyphens for empty table cells.
  En-dashes in numeric ranges (1–12, 6–8) are fine. **Add a lint check or CI grep for `—` and fail
  the build if any are found.**
- Numbers as earned proof only ($2M liability, 100% guarantee, same-week scheduling, 4.9 across 600+
  jobs, ROC #321845) — never invented decorative stat-grids.
- Company facts used throughout: founder/CEO **Sierra Largo**; **Brian Reinhart, President**; est.
  **2025**; ROC **#321845**; phone **(602) 555-0147**; email **hello@phoenixrisingwindowcleaning.com**;
  domain **phoenixrisingwindowcleaning.com**. (Confirm/replace any placeholders with the owner.)

## 11. SEO / performance / accessibility

Per-page metadata + Open Graph/Twitter, JSON-LD **LocalBusiness** (name, geo, areaServed = Phoenix
metro, hours, aggregateRating), `sitemap.xml`, `robots.txt`. Optimized images, lazy loading, font
preloading via `next/font`, minimal CLS. Keyboard-navigable, focus-visible rings, semantic landmarks,
alt text on every image, AA contrast.

## 12. Deliverables & deploy

Complete Next.js codebase (all pages + components above), working Stripe checkout/webhooks/portal,
Resend flows, brand tokens in Tailwind + `globals.css`, logo + favicon wired, seed content (services,
pricing, 5 blog posts, testimonials), `README.md` (Vercel + Stripe setup) and `.env.example` (already
present — keys: `NEXT_PUBLIC_SITE_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`,
`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_PRICE_RESIDENTIAL_STANDARD|DELUXE|PREMIUM`,
`STRIPE_PRICE_MAINTENANCE_MONTHLY|QUARTERLY`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `ADMIN_PASSWORD`).

**Deploy:** `cp .env.example .env.local` → fill keys → create Stripe Products/Prices and paste Price
IDs → `npm i && npm run dev` → configure webhook (`stripe listen --forward-to
localhost:3000/api/webhooks/stripe`) → deploy to Vercel, add env vars, point the live webhook at
`https://<domain>/api/webhooks/stripe`.

## 13. Maintenance rules (keep it exactly as-is)

- The design tokens in `globals.css` are the single source of truth — change a color/size there, not
  in component files. Never introduce a color outside the palette in §3.
- Keep Ember as a hairline accent only. Keep headlines two-tone ALL-CAPS with the ember rule.
- Keep all pricing in one typed config (§4) so the owner can adjust numbers without touching UI.
- Enforce the no-em-dash rule in CI.
- When adding a page or section, reuse the existing components (Button, Card, Badge, Eyebrow, Input,
  Select, TrustBadge, PricingTier) and the section patterns from `site/site.css` — don't restyle raw
  HTML to look like them.

---

**Final reminder:** match the locked palette, Saira Condensed / Hanken Grotesk type, the "Arizona in
the glass" motif, the shared footer band / trust badges / blue CTA components, and the hairline-only
use of ember — so the production site reads identically to the prototype.
