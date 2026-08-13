# Source association

repo: HackedByData/TheHairStudio
branch: main
path:

## Last sync

date: 2026-08-13T01:22:00Z

**The repository is empty.** `github_get_tree` returns GitHub's empty-repository response (HTTP 409) at both `main` and `master`, and no file reads succeed. Nothing in this design system was built from it. No commit is recorded because no commit exists to record.

The system was built instead from the uploaded logotype, the salon's Instagram pricing story, and the owner's written brief. When code lands in this repo, sync will pick it up and the screen map below becomes meaningful.

### Updated in this project

- Built the token layer, 27 components and three UI kits from brand materials, not from repo code.
- Copied the 24-glyph Lucide icon set from `lucide-icons/lucide@a7c781bd43db` into `assets/icons/`.
- Extracted a transparent white logotype from the supplied JPG.
- Flagged font and icon-set substitutions in `readme.md`.
- Switched the accent from bronze to oxblood (#8C1C2B) at the owner's direction.
- Added the owner's 13-stylist roster and the Booker booking link.

## Screen map

| Screen | Built from |
| --- | --- |
| `ui_kits/website/index.html` | `assets/source-pricing-story.png`, owner brief — no repo source |
| `ui_kits/booking/index.html` | Owner brief, salon hours — no repo source |
| `ui_kits/social/index.html` | `assets/source-pricing-story.png` — no repo source |

## Other sources

- Icons: `lucide-icons/lucide` @ `a7c781bd43db` (ISC) → `assets/icons/`
- Instagram `@_thehairstudio_` — blocked to automated access; no photography imported.
- Booking: `https://go.booker.com/location/TheHairStudio1/` — a client-rendered Booker app; no service or staff data is machine-readable from it. Wired as an outbound link only.
- Salon interior photograph supplied by the owner → `assets/photos/interior.jpg`.
