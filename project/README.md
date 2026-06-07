# Phoenix Rising Window Cleaning, Website

A complete, high-fidelity **HTML prototype** of the Phoenix Rising marketing + booking + payments
website, built pixel-faithfully on the locked Phoenix Rising brand (Saira Condensed / Hanken Grotesk,
Phoenix Blue + chrome + hairline ember, the "Arizona in the glass" motif). Every one of the 13 page
areas in the brief is designed, responsive, and clickable, with the booking and Stripe checkout
**flows fully mocked**.

This repo is the **design source of truth and developer handoff** for building the production
**Next.js 14 + TypeScript + Tailwind + Stripe + Resend** site. See `HANDOFF.md` for the full
prototype → production mapping and `.env.example` for required secrets.

---

## What's here (the prototype)

Open `index.html` in a browser (or any page below). Pages are standalone HTML files linked by a
shared sticky header + footer, rendered with React 18 (via in-browser Babel) on top of the bound
Phoenix Rising design-system bundle.

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, trust bar, services, before/after, why-us, testimonials, area teaser, CTA |
| Services | `services.html` | 6 detailed services, price chips, checklists, anchor nav |
| Pricing | `pricing.html` | Residential tiers + **one-time/recurring toggle**, commercial options |
| Gallery | `gallery.html` | **Filterable** grid with **draggable before/after sliders** |
| Booking | `booking.html` | **Full 6-step wizard** → instant price (routes to checkout) or quote |
| Checkout | `checkout.html` | Mocked Stripe: line items, deposit/full, promo (`PHX10`), tax |
| Success / Cancel | `checkout-success.html` · `checkout-cancel.html` | Confirmation + next steps |
| Reviews | `testimonials.html` | Aggregate rating, filterable review cards |
| About | `about.html` | Brand story, values, team, credentials |
| Service Area | `service-area.html` | Coverage map, zone list, **address checker** |
| Contact | `contact.html` | Form + hours + map + **FAQ accordion** |
| Resources | `blog.html` · `blog-post.html` | Blog index + one full sample article |
| Admin | `admin.html` | **Login gate** → dashboard, bookings, payments, reviews, pricing, settings |
| Legal / 404 | `privacy.html` · `terms.html` · `404.html` | |

### Project structure
```
/                      ← all page HTML files (must stay at root for image-slot persistence)
/site/                 ← shared.jsx (header/footer/helpers), site.css, one .jsx per page
/assets/               ← logos, image-slot.js
/_ds/phoenix-rising…/  ← bound Phoenix Rising design system (tokens + compiled component bundle)
.env.example           ← secrets the production app needs
HANDOFF.md             ← prototype → Next.js build plan
```

> **Image slots:** photo placeholders across the site are drag-and-drop `<image-slot>` targets
> drop your own photos in and they persist. Replace with `next/image` in production.

---

## Brand system (LOCKED, match exactly)

- **Type:** Saira Condensed (Black/800, ALL-CAPS, tight tracking) for display; Hanken Grotesk (400–700)
  for body; eyebrows uppercase + 0.18em tracking.
- **Color:** Phoenix Blue `#1457A6` (workhorse), Slate Ink `#18242F` (anchor), chrome
  `#E6F0FA→#C0C8D2→#9AA4B0` (premium depth), Sky Glass `#C8E2F8`, Bone `#FBFCFE`.
  **Ember `#C45A1E` is a hairline accent only, never a fill, never a button.**
- All tokens live in `_ds/phoenix-rising-design-system-…/tokens/*.css` (the single source of truth
  lift exact values from there). Headlines are two-tone (lead word Slate Ink, emphasis word Phoenix
  Blue) with a short ember rule beneath.

---

## Building the production site (Next.js + Stripe)

This prototype is the spec. To ship the real app, see **`HANDOFF.md`**, it maps every page and flow
to App-Router routes, lists the Stripe Checkout / webhook / Customer Portal work, the Resend email
flows, and the typed product catalog. Quick start once the Next.js app is scaffolded:

1. `cp .env.example .env.local` and fill in Stripe + Resend keys.
2. Create Stripe Products/Prices, paste the Price IDs into env.
3. `npm install && npm run dev`.
4. Configure the webhook endpoint (`/api/webhooks/stripe`) in the Stripe dashboard; use
   `stripe listen --forward-to localhost:3000/api/webhooks/stripe` locally.
5. Deploy to Vercel; add all env vars in Project → Settings → Environment Variables; point the live
   webhook at `https://<your-domain>/api/webhooks/stripe`.

---

## Note on fonts in screenshots

In some screenshot/preview harnesses the Google Fonts (Saira/Hanken) don't load and text falls back
to a system font, which can wrap differently. In a normal browser with internet the fonts load and
the layout is exactly as intended.
