# The Hair Studio — Design System

A premium hair salon at **16923 Sierra Lakes Pkwy, Unit 107, Fontana, CA 92336**. Open **11+ years**. Owner-operated, family-run, all-black interior.

> **Mission, in the owner's words:** to make everyone feel beautiful and happier than when they walked in the door.

The salon sells expertise, not product: colour, cuts and treatments delivered by named stylists who have worked the same chairs for a decade. The brand job is **trust** — a client hands over their hair and $295, and everything on screen has to say *these are steady hands in a clean room*. The black interior is the anchor: the system is black-first, spare, warm at the edges, and never shouty.

---

## Sources this was built from

| Source | What it gave us | Status |
| --- | --- | --- |
| `uploads/logohairstudio.jpg` | The logotype — white condensed grotesque on black. Copied to `assets/logo-mark.jpg` and machine-extracted to a transparent `assets/logo-mark-white.png`. | ✅ Used |
| Pricing story screenshot (`assets/source-pricing-story.png`) | The complete service menu and prices, the address, the dotted-leader motif, the bone-card-on-black layout and the script sign-off. All pricing in this system is **verbatim** from it. | ✅ Used |
| Owner's brief (chat) | 11+ years in business; the mission statement; the starting-price rule ("bra length or shorter, length and thickness extra"); the request to mirror Instagram's stylist-highlight pattern. | ✅ Used |
| **`https://github.com/HackedByData/TheHairStudio`** | Nothing — the repository is **empty** at `main` and `master`. No code, no styles, no screens were available to read. | ⚠️ Empty |
| **`https://www.instagram.com/_thehairstudio_/`** | Nothing. Instagram blocks automated access, so **no photography could be pulled.** Every image in this system is a labelled placeholder. | ⚠️ Blocked |
| Owner's stylist roster (chat) | Thirteen names: Angie (owner), Ashlynn, Ashley, Cindi, Melissa, Jade, Liliana, Stephanie, Malia, Crystal, Lorne, Jasmine, Anne. | ✅ Used |
| Salon interior photograph (owner) | `assets/photos/interior.jpg` — the black room. Used full-bleed in the hero and on the Visit view. | ✅ Used |
| [Booker booking page](https://go.booker.com/location/TheHairStudio1/) | The live booking destination. It is a client-rendered app, so no service or staff data could be read from it — wired as an outbound link on every booking CTA. | ⚠️ Link only |
| Public directory listings (Yelp, Fresha, ThreeBestRated) | Phone `(909) 365-4443` and opening hours. | ⚠️ Unverified |
| [`lucide-icons/lucide`](https://github.com/lucide-icons/lucide) @ `a7c781bd43db` | The 24-glyph icon set in `assets/icons/`. | ✅ Copied |

**If you have access to the sources, explore them further** — the GitHub repo above is the intended home of the salon's own code, and reading the real Instagram grid will tell you far more about crop, grade and caption voice than this document can.

### Known gaps

1. **One photograph.** The salon interior is real; everything else — stylist portraits, before/afters, the work grid — is a labelled `PhotoFrame` placeholder. Do not fill these with stock or generated imagery. Instagram blocks automated access, so these must be uploaded.
2. **No stylist specialties.** The thirteen names are correct; what each of them is known for is not yet supplied. `StylistCard` omits the line rather than inventing one.
3. **Fonts are substitutions.** No brand font files were supplied. See *Typography* below.
4. **Phone and hours are unverified**, taken from third-party listings.

---

## Content fundamentals

**Voice: confident and spare.** The salon has been doing this for eleven years and does not need to argue for itself. Sentences are short and declarative. No exclamation marks outside the one script flourish. No hedging, no "we strive to".

**Person.** *We* for the salon, *you* for the client. Never "our team is passionate about" — name the stylist instead. "Angie has been behind the chair twelve years" beats any adjective.

**Casing.** Display type is **always uppercase** and widely tracked. Overlines and labels are uppercase. Everything else is sentence case. Never title case in running copy — "Book an appointment", not "Book An Appointment".

**Numbers and prices.** Always a dollar sign, never decimals: `$295`, not `$295.00`. Every price is a *starting* price and must carry the `from` prefix and the asterisk. The disclaimer is non-negotiable and appears wherever a price appears:

> *Starting prices are for bra length or shorter. Length and thickness are extra.*

The salon's own print wording — *"Hair Length & Density will be considered"* — is kept alongside it.

**No emoji.** The salon's own material uses ✨ and ✔ on Instagram; this system does not carry them into product surfaces. Checkmarks in the printed menu are replaced by the dotted leader, which does the same job with more restraint. If a social caption wants a sparkle, that is a caption, not an interface.

**What copy sounds like here:**

- ✅ "Eleven years on Sierra Lakes Parkway."
- ✅ "Pick the hands you want, or take the first available."
- ✅ "We text a reminder the day before. Once."
- ✅ "Starting price shown. Length and thickness are extra — your stylist confirms in the chair."
- ❌ "Unlock your best hair yet! ✨"
- ❌ "Our passionate team of beauty professionals is dedicated to excellence."
- ❌ "Prices starting at just $295!!"

**Length.** A section lede is one or two sentences, capped at 560px. A card body is one sentence. If a paragraph needs a third sentence, it belongs on a longer page.

---

## Visual foundations

### Colour

Black-first, and the black is the room. `--black-void` (#000000) for full-bleed sections and the footer; `--black-ink` (#0B0B0B) for the page; `--black-raised` (#141414) for cards. Three blacks is the whole structure — depth comes from hairlines, not from tinting.

Against it, two warm families:

- **Bone / greige** (`#FAF8F5` → `#6E665C`) — lifted straight from the salon's printed pricing card. This is the light surface: the mission strip, the testimonial band, the price card. It is never white. White on this brand looks like a dentist.
- **Oxblood** (`--accent-500` `#8C1C2B` primary, `--accent-300` `#D4949B` for text on dark) — the single accent, chosen by the owner. Buttons, prices, active states, the overline, the diamond ornament. Deep salon red, closer to *wine on a black tablecloth* than to a bright red; never a gradient, never a glow.

Because the accent is dark, it does **not** hold up as a fill over photography. Over an image the primary action switches to `variant="light"` (bone), and the header's booking button does the same until the page scrolls. On flat black, oxblood fill with bone text is the primary.

Status colours are deliberately desaturated — a confirmed booking is `#7FA37A`, not a bright green. Semantic saturation would break the room. Keep `--status-cancelled` (`#C15F52`) away from the accent: they are close enough to confuse, so an error and a primary action never sit side by side.

**Ratio in practice:** roughly 80% black, 15% bone, 5% oxblood. If a screen looks red, it is.

### Typography

| Role | Face | Notes |
| --- | --- | --- |
| Display & headings | **Bodoni Moda** (300) | High-contrast didone. Always uppercase, tracked `+0.09em` to `+0.14em`. 88 / 64 / 44 / 36 / 28 / 22 / 18px. |
| Body & UI | **Karla** (300–700) | Quiet grotesque. 18 / 16 / 14 / 13px, line-height 1.6–1.7. Light (300) for ledes, regular for running text, semibold for buttons and prices. |
| Flourish | **Sacramento** | The script from the salon's own flyer, kept at the owner's request. One use per surface, maximum — a booking sign-off. Never in UI, never for information. |

> ⚠️ **Font substitution — please confirm.** No brand font files were supplied. The logotype is a bold condensed grotesque (Helvetica/Univers family); the pricing flyer sets headlines in a light spaced serif and the sign-off in a monoline script. Bodoni Moda, Karla and Sacramento are the closest Google Fonts matches and are loaded from the Google CDN in `tokens/fonts.css`. **If the salon licenses real faces, send the files and this is a one-file change.**

Two rules that carry the brand more than the faces do: **uppercase display type always gets wide tracking**, and **body copy never goes above 18px**. The size contrast between an 82px headline and 16px body is the luxury signal.

### Spacing & layout

A 2 → 160px scale. Sections breathe at **96px** vertical (`--section-y`), tightening to 64px and opening to 160px for the hero. Page gutter is 40px desktop, 20px mobile. Content caps at 1280px; prose caps at 760px; a lede caps at 560px.

Grids are plain: 3-up for the service menu, 4-up for stylists and the work feed, 2-up for split sections. The header is 76px and sticky. Nothing else is fixed.

### Backgrounds & imagery

The home hero is the one moving background: `HaircutScene`, a 3D scene driven entirely by scroll position — it renders on demand, one frame per scroll change, with no idle animation loop. Nothing else in the system animates on scroll beyond a fade-and-rise.

The subject is centred, so hero copy is centred over it and carries its own shadow rather than sitting behind a heavy scrim — a centre-weighted scrim would bury the head. This is the system's one use of WebGL; everything else is DOM and CSS.

No gradients as decoration — the only gradients in the system are **scrims** (`--scrim-bottom`, `--scrim-top`) that sit over photography so type stays legible. No patterns, no textures, no noise overlays, no hand-drawn illustration. The background is either black, bone, or a photograph.

Photography is **warm, low-contrast, and cropped portrait** — 4:5 for editorial, 1:1 for the feed grid, 9:16 for stories. Images get **no corner radius**. Hair colour is the subject, so the grade must not cool it off or crush it; a `grayscale` prop exists on `PhotoFrame` but is for archival/detail shots only, never for a colour service.

### Borders, radii and cards

**Sharp by default.** `--radius-xs` (2px) on cards and inputs, 0 on buttons and images. The one exception is `--radius-lg` (14px), reserved for the bone "flier card" that reproduces the printed pricing list — that radius is inherited from the salon's own material and should not spread to other elements. Tags are the only pill.

A card on black is `#141414` + a 1px `rgba(255,255,255,.11)` hairline + a barely-there `0 1px 2px` shadow. On black, **the hairline is the card** — shadows are a second, weaker signal. On bone, real warm shadows are allowed (`0 10px 30px rgba(30,24,16,.10)`).

### Shadows, transparency and blur

Five dark elevations (`sm` → `modal`) plus `--glow-oxblood` for focus emphasis. Transparency is used in exactly three places: the scrolled header (86% black + an 18px backdrop blur), modal scrims (72% black + 6px blur), and the `--veil-4` / `--veil-8` hover washes. Nowhere else — frosted glass on a card would read as tech, not salon.

### Motion

**No bounce, ever.** The house easing is `cubic-bezier(.22,.61,.36,1)`; reveals use `cubic-bezier(.16,1,.30,1)`. Durations: 90ms press, 140ms colour, 240ms panels, 480ms image scale, 900ms scroll-in. Scroll reveals are a fade plus an 8px rise — nothing slides in from the side, nothing scales up from zero.

### Interaction states

- **Hover, dark surfaces:** background warms one step (`#141414` → `#1C1C1C`) and the border goes oxblood. Cards lift 2px.
- **Hover, oxblood button:** lightens to `--oxblood-400`. Never darkens.
- **Hover, images:** 1.02–1.03 scale over 480ms, inside `overflow: hidden`.
- **Press:** `translateY(1px)`. Never a scale-down.
- **Focus:** a 2px oxblood ring offset by the page black — visible, never a glow blur.
- **Disabled:** 38% opacity, no colour change.
- **Links:** oxblood text with a `rgba(168,129,78,.45)` underline; hover lifts both a step lighter.

---

## Iconography

**One set: [Lucide](https://lucide.dev), copied into `assets/icons/`** from `lucide-icons/lucide@a7c781bd43db` (ISC licensed). 24 glyphs, chosen for what the salon actually needs: `scissors`, `palette`, `droplet`, `sparkles`, `calendar`, `clock`, `map-pin`, `phone`, `mail`, `user`, `star`, `heart`, `check`, `circle-check`, `x`, `plus`, `minus`, `menu`, `search`, `arrow-left`, `arrow-right`, `chevron-down`, `chevron-right`, `external-link`.

> ⚠️ **Substitution flagged.** The salon has no icon set of its own — there was no codebase to copy one from. Lucide was chosen because its thin, open, geometric line matches the logotype's weight far better than a filled or rounded set would. Swap freely if a real set turns up.

**Rules.**
- Stroke weight is **1.5** everywhere. 1.2 only inside a filled star. Never above 2.
- Icons are `currentColor`, sized 13–20px in UI, never larger than the text they sit beside.
- Access them only through the `Icon` component. Never inline a one-off SVG, never mix a second set.
- **No emoji in product surfaces** (see *Content fundamentals*). No unicode dingbats as icons — the printed menu's ✔ becomes a dotted leader here.
- Icons are functional, not decorative. An icon appears next to an address, a phone number, a time; it does not appear next to a heading to make it friendlier.

The wordmark is the only brand image asset: `assets/logo-mark.jpg` (as supplied) and `assets/logo-mark-white.png` (transparent, machine-extracted from the same file — not redrawn). Where a mark is too heavy, the `Logo` component sets the name in tracked Bodoni instead.

---

## Components

`window.TheHairStudioDesignSystem_03d078` · 27 exports. No component library was defined by any source, so this is an authored set sized to the salon's surfaces.

**Core** — `components/core/`
`Icon` · `Button` · `IconButton` · `Logo` · `Badge` · `Tag` · `Divider` · `SectionHeading`

**Forms** — `components/forms/`
`Input` · `Textarea` · `Select` · `Checkbox` · `Switch` · `RadioGroup`

**Display** — `components/display/`
`PhotoFrame` · `Card` · `ServiceRow` · `StylistCard` · `WorkTile` · `Rating` · `Testimonial` · `HaircutScene`

**Navigation** — `components/navigation/`
`NavBar` · `Tabs` · `Footer`

**Feedback** — `components/feedback/`
`Dialog` · `Toast` · `EmptyState`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (one-line what-and-when, a usage example, and the variants that matter). Read the `.prompt.md` before using a component — several carry brand rules the props don't express.

### Intentional additions

Nothing in the sources defined a component inventory, so the whole set is authored. Three are brand-specific rather than generic, and are the ones worth knowing:

- **`ServiceRow`** — the dotted-leader price line from the printed menu. The salon's single strongest visual signature.
- **`StylistCard`** — the Instagram "highlights" pattern the owner explicitly asked to mirror.
- **`PhotoFrame`** — wraps every image so that missing photography renders as a visible, labelled gap instead of a plausible-looking substitute.
- **`HaircutScene`** — the home hero. A real-time **3D** scene: the back of a woman's head, ~2,800 clump-groomed ribbon strands under a film-style dual-highlight hair shader. As the page scrolls, her dark lengths transform to a warm ombre — colour melting up from the ends, soft layers settling in, gloss building to the finished look — every frame a pure function of scroll progress. No scissors; it is the colour chair. three.js; two named standard materials (figure, cape) plus the custom hair shader. The host page must load three.js through the pinned import map — see `ui_kits/website/index.html`.

---

## UI kits

| Kit | Path | What it covers |
| --- | --- | --- |
| **Website** | `ui_kits/website/` | Five views — home, services, stylists, work, visit. Full-bleed hero, bone mission strip, three-column pricing menu, stylist highlights, filterable work grid, testimonials, oxblood booking band, footer. |
| **Booking** | `ui_kits/booking/` | A clickable four-step reservation: service → stylist → time → details, with a sticky summary, an empty state for closed Mondays, a confirmation dialog and a toast. |
| **Social** | `ui_kits/social/` | Instagram templates at export size — 1080×1920 pricing story, 1080×1080 stylist highlight / mission post / service card, and the 3-up feed grid. *Built before the surface list was narrowed; kept because the pricing story is the salon's existing artwork.* |

Each kit has its own `README.md`. All three share content from `ui_kits/website/data.js` — the pricing, address, hours, roster, mission and the Booker link live there, so correcting a price corrects it everywhere.

Every booking CTA opens `https://go.booker.com/location/TheHairStudio1/` in a new tab. The `ui_kits/booking/` flow is a **design reference** for what an on-site booking experience would look like, not a replacement for Booker.

---

## Templates

| Template | Path | What it is |
| --- | --- | --- |
| **Price list** | `templates/price-list/` | A printable letter-size service menu — black sheet, bone card, dotted leaders, script sign-off and the starting-price disclaimer. The salon's pricing story, rebuilt as a one-sheet. |

---

## Index

```
readme.md              this file
SKILL.md               agent-skill entry point
github.md              source-repo association
thumbnail.html         homepage tile
styles.css             ← consumers link this one file

tokens/                fonts · colors · typography · spacing
                       radii · elevation · motion · layout · base
guidelines/            19 specimen cards (Colors, Type, Spacing, Brand)
components/            core · forms · display · navigation · feedback
ui_kits/               website · booking · social
templates/             price-list
assets/                logo-mark.jpg, logo-mark-white.png,
                       source-pricing-story.png, icons/ (24 Lucide SVGs)
```

Everything a consumer needs is reachable from `styles.css` (tokens and fonts) and the generated bundle (components). Start with the specimen cards in the Design System tab, then read the `.prompt.md` for whatever you are about to build with.
