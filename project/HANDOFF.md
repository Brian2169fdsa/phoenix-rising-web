# Handoff, Prototype → Production (Next.js 14 + Stripe + Resend)

This document is written for the developer (e.g. Claude Code) building the real app from this
prototype. The HTML prototype is the visual + behavioral spec; this maps it onto a production stack.

## Target stack
- **Next.js 14+ App Router, TypeScript, Tailwind CSS** (port the design tokens into `tailwind.config`
  + `globals.css` from `_ds/phoenix-rising-design-system-…/tokens/*.css`, names and hex values are
  the source of truth, do not re-interpret).
- **Stripe**, Checkout Sessions + webhooks + Customer Portal.
- **Resend**, transactional email (confirmations, receipts, contact, quote requests).
- **react-hook-form + zod** for all forms.
- **next/font/google** for Saira Condensed + Hanken Grotesk + IBM Plex Mono.
- **next/image** to replace every `<image-slot>` placeholder.
- Lighthouse 90+, WCAG 2.1 AA, JSON-LD LocalBusiness, sitemap, robots.

## Design tokens → Tailwind
Lift from `_ds/.../tokens/colors.css`, `typography.css`, `spacing.css`. Key CSS variables:
`--phoenix-blue #1457A6`, `--phoenix-blue-deep #0F4684`, `--slate-ink #18242F`, `--cool-gray #6C6F78`,
`--chrome-100/300/500`, `--sky-glass #C8E2F8`, `--ember #C45A1E` (hairline only), `--bone #FBFCFE`.
Radii 6/10/14; soft cool shadows; chrome + glass gradients + edge-highlight. Reuse the section
patterns and component classes in `site/site.css` as the basis for Tailwind component layers.

## Route map (App Router)
| Prototype file | Route | Prototype logic to port |
|---|---|---|
| `index.html` | `/` | Static marketing sections; CTAs → `/booking` |
| `services.html` | `/services` | 6 services (data array in `site/services.jsx`), anchor nav |
| `pricing.html` | `/pricing` | One-time vs recurring toggle; tier data in `site/pricing.jsx`; CTAs → checkout |
| `gallery.html` | `/gallery` | Filter state + before/after slider component |
| `booking.html` | `/booking` | **6-step wizard**, see flow below |
| `checkout.html` | `/checkout` | Build the real Stripe Checkout Session server-side (see Stripe) |
| `checkout-success.html` | `/checkout/success` | Read `session_id`, confirm, show next steps |
| `checkout-cancel.html` | `/checkout/cancel` | No-charge messaging, resume |
| `testimonials.html` | `/reviews` | Filterable reviews + aggregate rating |
| `about.html` | `/about` | Story, values, team, credentials |
| `service-area.html` | `/service-area` | Map (swap stylized SVG for real map if desired), address check |
| `contact.html` | `/contact` | Form → Resend; FAQ accordion |
| `blog.html` / `blog-post.html` | `/blog`, `/blog/[slug]` | MDX posts; seed the 5 titles in `site/blog.jsx` |
| `admin.html` | `/admin` | Auth gate (ADMIN_PASSWORD or magic link); read bookings + Stripe data |
| `privacy.html` / `terms.html` / `404.html` | `/privacy`, `/terms`, `not-found.tsx` | Copy is production-ready |

## Booking flow (port from `site/booking.jsx`)
Steps: **Service → Property → Address → Schedule → Contact → Review**.
- Conditional property fields by service type (residential: size/stories/windows/frequency/hard-water;
  solar: panel count; commercial/high-rise/post-construction/screens: sqft/floors/frequency/notes).
- Phoenix-metro address validation: ZIP must match `/^85\d{3}$/` (replace with a real geocode/zone
  check in production).
- `estimate(d)` computes the instant price for residential/solar/screens. **Move this server-side and
  validate against the catalog, never trust a client price.**
- Routing: residential/solar/screens → `/checkout` with the computed line item; commercial/high-rise/
  post-construction → quote request emailed via Resend + customer confirmation.

## Stripe integration
- **Typed catalog** mapping plan → Stripe Price ID (env vars in `.env.example`). One-time packages use
  `mode: 'payment'`; recurring maintenance uses `mode: 'subscription'`.
- **`POST /api/checkout`**, create a Checkout Session: line items resolved **server-side from the
  catalog** (recompute amount, ignore client price), `customer_email`, `metadata` (bookingId, service,
  address, date, slot), `automatic_tax: { enabled: true }`, `allow_promotion_codes: true`, optional
  deposit line item. `success_url`/`cancel_url` → the two result routes.
- **`POST /api/webhooks/stripe`**, verify signature against `STRIPE_WEBHOOK_SECRET` using the **raw
  body** (App Router: read `await req.text()`, disable body parsing). Handle
  `checkout.session.completed`, `payment_intent.succeeded`, `invoice.paid`,
  `customer.subscription.created|updated|deleted` → persist booking/order status + trigger Resend
  confirmation/receipt.
- **Customer Portal**, `POST /api/portal` returns a Billing Portal session URL (linked from success
  page + admin) so subscription customers manage/cancel.
- Receipts: rely on Stripe-hosted receipts + a branded Resend confirmation.

## Resend email flows
Booking confirmation (customer), receipt, contact-form notification (to `CONTACT_TO_EMAIL`) +
autoresponder, quote-request notification + customer confirmation. Brand the templates to match the
site (Slate Ink header band, Phoenix Blue CTA, hairline ember rule).

## Admin
Gate `/admin` (credential via `ADMIN_PASSWORD` or magic link). Read bookings/quotes from your data
store; read payments/subscriptions live via the Stripe API. The prototype's tables in `site/admin.jsx`
show the intended columns and statuses.

## SEO / a11y / perf
Per-page metadata + OG/Twitter, JSON-LD `LocalBusiness` (name, geo, areaServed = Phoenix metro, hours,
aggregateRating), `sitemap.xml`, `robots.txt`. Keyboard-navigable, focus-visible rings (already in the
DS focus ring token), semantic landmarks, alt text on all images, `prefers-reduced-motion` respected
(the prototype's entrance reveal already gates on it).

## Motion
One orchestrated hero load (staggered fades, see `usePageFade` in `site/shared.jsx`), a subtle
glint/shimmer on hero/CTA glass panels (`.glint--animate`), gentle hover lift on cards/buttons.
Understated and premium, never bouncy.
