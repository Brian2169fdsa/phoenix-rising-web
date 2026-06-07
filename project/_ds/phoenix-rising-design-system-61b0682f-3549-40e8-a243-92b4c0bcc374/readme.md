# Phoenix Rising — Design System

A complete, production-ready design system for **Phoenix Rising Window Cleaning**, a premium
residential & commercial window cleaning company serving the Phoenix, Arizona metro.

Every choice derives from the brand logo: a royal-blue-and-chrome phoenix rising through a clean
pane of glass, with the Arizona skyline, mountains, and a saguaro reflected in the window, and a
starburst glint of light on the glass.

**Positioning:** established, high-trust, premium local trade — *"insured, certified, the valley
trusts us."* Worth a premium price, not cheap-and-fast. The system feels cool, clean, and
architectural.

> **Sources given to build this system:** a single brand description / spec document
> (color tokens sampled from the logo, typographic intent, component spec). The referenced
> **logo image was *not* attached** to the project — see CAVEATS at the bottom. No codebase,
> Figma, or slide deck was provided.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `styles.css` | **Global entry point.** Consumers link this one file. `@import` lines only. |
| `tokens/colors.css` | Color custom properties (source of truth, sampled from logo) + gradients. |
| `tokens/typography.css` | Font families, weights, type scale, tracking. |
| `tokens/spacing.css` | Spacing scale, radii, shadows, edge-highlight, focus ring, layout. |
| `tokens/fonts.css` | Webfont loading (Saira Condensed, Hanken Grotesk, IBM Plex Mono). |
| `tokens/base.css` | Reset + base element styles, eyebrow/rule/glint helpers. |
| `components/core/` | Button, Card, Badge, Eyebrow. |
| `components/forms/` | Input, Select. |
| `components/marketing/` | TrustBadge, PricingTier. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `ui_kits/marketing-site/` | Marketing website UI kit (recreated screens). |
| `assets/` | Logos, icons, imagery (see `assets/README.md`). |
| `SKILL.md` | Agent Skill manifest for use in Claude Code. |

**Components (window.PhoenixRisingDesignSystem_61b068):**
`Button`, `Card`, `Badge`, `Eyebrow`, `Input`, `Select`, `TrustBadge`, `PricingTier`.

---

## CONTENT FUNDAMENTALS — how the brand writes

**Voice:** confident, local, trustworthy, premium. Plain and direct, never gimmicky. Leads with
reliability, insurance, and results — not discounts or hype.

- **Person:** speaks as **"we"** (the crew/company) to **"you"** (the homeowner/business).
  *"We're insured, certified, and obsessive about a streak-free finish."*
- **Casing:** Hero and section **titles are ALL-CAPS** with wide tracking, echoing the logo's
  wordmark. Section **eyebrows are small-caps** ("WINDOW CLEANING", "MOST REQUESTED"). Body copy is
  sentence case. Buttons are uppercase ("BOOK NOW", "GET A QUOTE").
- **Tone words:** crystal-clear, streak-free, trusted, insured, certified, guaranteed, the valley,
  Phoenix-strong, premium, architectural.
- **Taglines (examples of register):** *"Crystal-clear views, Phoenix strong."* ·
  *"The valley's trusted glass, since day one."*
- **Numbers as proof, not slop:** use specific, earned figures ("$2M liability", "100% satisfaction
  guarantee", "same-week scheduling") — never invented stat-grids for decoration.
- **Emoji:** **none.** This is a client-facing trade brand. Iconography carries any visual emphasis.
- **Vibe:** an established local tradesperson who takes obvious pride in the craft — calm, precise,
  premium. Not bubbly, not "disruptive," not corporate-SaaS.

---

## VISUAL FOUNDATIONS

**Color.** Phoenix Blue (`#1457A6`) is the workhorse — links, primary buttons, key accents. Slate
Ink (`#18242F`) anchors text and dark sections. **Chrome/silver** (`#E6F0FA → #C0C8D2 → #9AA4B0`)
creates depth and the premium metallic read — this is the brand's signature. **Ember** (`#C45A1E`)
appears **at most once or twice per screen** as a thin rule or micro-detail — **never a fill, never
a button.** Backgrounds are Bone (`#FBFCFE`) with White cards; tinted glass panels use Sky Glass
(`#C8E2F8`). All text meets WCAG 2.1 AA.

**Type.** Display/headings: **Saira Condensed** — a condensed grotesque, Black/800 weight, set
ALL-CAPS with tight tracking (`letter-spacing: ~0.005em`) for an engineered, architectural feel.
Headlines are two-tone — the lead word in Slate Ink, the emphasis word in Phoenix Blue — with a
short ember rule beneath (`.headline-rule`). Body: **Hanken Grotesk** — clean grotesque, 400–600,
line-height 1.6.
Labels/eyebrows: Hanken Grotesk uppercase, `letter-spacing: 0.18em`, Cool Gray, paired with a thin
chrome or ember rule. Mono: IBM Plex Mono for numeric/technical detail. Scale (rem): 4.0 / 3.0 / 2.25 / 1.75 / 1.375
/ 1.125 / 1.0 / 0.875.

**Spacing & layout.** 12-column responsive grid, mobile-first, generous negative space — *let the
work breathe.* Spacing scale (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Thin chrome rule
lines (1px, chrome-300) plus small-caps labels organize sections — the "established trade" cue.

**Shape.** Restrained, architectural radii: `--r-sm 6px`, `--r-md 10px`, `--r-lg 14px`. **No
pill-shaped everything** — pills are reserved for genuine toggles/chips.

**Elevation & borders.** Soft, **cool-toned** shadows (`0 8px 30px rgba(24,36,47,0.10)`). The
signature move is a **chrome/glass edge highlight** on key panels: a 1px inner-top highlight
(`rgba(255,255,255,0.6)`) over a faint chrome border (`--panel-elevation`). Borders are hairline
chrome-300; they go chrome-500 on hover.

**Backgrounds.** Mostly solid Bone/White — *not* gradient-heavy. Two sanctioned gradients only:
the **chrome gradient** (metallic frames, dividers, depth) and the **glass gradient** (tinted glass
panels). No purple-blue tech gradients, ever. Photography (when present) is crystal-clear windows in
bright Arizona daylight; warm desert light contrasted against cool chrome UI; before/after pairs.

**Decorative motifs.** Clean glass + reflection. A faint **starburst glint** (echoing the logo
sparkle) recurs as a micro-detail. Thin diagonal **light-streak** reflections sweep across glass and
chrome panels. Textures stay restrained and premium.

**Motion.** Smooth, understated, premium — **never bouncy.** One orchestrated page-load reveal with
staggered fades. A light glint/shimmer on the logo or a hero glass panel is the signature moment
(`.glint--animate`, a slow 4.5s sweep). Easing is gentle ease / ease-in-out, ~150–220ms for UI
transitions. Everything respects `prefers-reduced-motion`.

**Hover / press states.** Hover = **gentle lift** (`translateY(-1px → -3px)`) + chrome edge brighten
(border chrome-300 → chrome-500) and, for primary buttons, deep-blue (`--phoenix-blue-deep`). Press =
return to `translateY(0)` and the deep color — no shrink, no bounce. Links go deep-blue; tertiary
buttons grow an **ember underline** on hover.

**Transparency & blur.** Used sparingly: tinted-glass panels use translucent sky-glass over a faint
blue wash. No heavy glassmorphism/backdrop-blur as a default; the "glass" read comes from color +
edge highlight + light streaks, not blur.

**Cards.** White (or sky-glass) surface, 1px chrome-300 border, `--panel-elevation` (soft shadow +
inner-top highlight), `--r-lg` corners. Featured/premium cards get a single **2px ember rule across
the top** — nothing else changes color.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — thin, rounded-cap line icons (1.8–2.4 stroke
  weight) that match the cool, engineered feel. Components that ship a glyph (e.g. `TrustBadge`'s
  sparkle, `Select`'s chevron, `PricingTier`'s check) embed the relevant Lucide path inline as SVG
  with `stroke: currentColor`, so icons inherit the local text color and scale with `em`.
- **In HTML mockups / UI kits:** load Lucide from CDN —
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or paste
  individual SVGs. Keep stroke width consistent (≈1.8–2px at body scale).
- **Signature glyph:** a 4-point **starburst sparkle** echoing the logo's glass glint — used for
  trust signals and premium accents. It is the one motif that may render filled/white on glass.
- **Emoji:** **never** used in product or marketing surfaces.
- **Unicode glyphs:** avoided as icons; use real SVGs.

> **Substitution flag:** Lucide is used as the icon set because no proprietary icon assets were
> supplied. If Phoenix Rising has its own icon library, drop it into `assets/icons/` and update this
> section.

---

## CAVEATS (read me)

1. **The logo image was not attached.** Color tokens are taken from the spec (which states they were
   sampled from the logo), but the actual artwork isn't in `assets/`. The brand cards and UI kit
   currently use a **text wordmark lockup placeholder**. Please attach the logo so I can place the
   real mark.
2. **Fonts load from Google Fonts CDN** (`tokens/fonts.css`), not self-hosted binaries. The locked
   families are **Saira Condensed** (display) and **Hanken Grotesk** (body), plus IBM Plex Mono.
   For production (Next.js) load them via `next/font/google`; for static self-hosting, swap the
   `@import` for local `@font-face` rules.
3. **No photography** was provided; imagery slots in the UI kit use labelled placeholders.
