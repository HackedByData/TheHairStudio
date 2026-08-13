# Website UI kit

A five-view recreation of the salon's public site, built entirely from this system's components.

| View | What it shows |
| --- | --- |
| Home | Centred 3D hero — the back of a head, hair cut as you scroll (three.js, loaded via the pinned import map in `index.html`), mission strip on bone, pricing menu, stylist highlights, work grid, client voices, oxblood booking band |
| Services | Page header + the full pricing list with the length disclaimer |
| Stylists | The Instagram "highlights" pattern — one portrait card per stylist |
| Work | Filterable 4-up feed grid, credited on hover |
| Visit | Address, phone, hours, storefront frame, compact menu |

**Files** — `index.html` (mount), `data.js` (all copy and pricing), `Sections.jsx` (page sections), `App.jsx` (nav + routing shell).

**Content status** — pricing, address, phone, hours, mission and years in business are the salon's own. Stylist names and every photograph are placeholders pending the owner: `PhotoFrame` deliberately renders a labelled empty frame rather than a stand-in image.
