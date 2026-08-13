# Booking UI kit

> **Bookings are taken on Booker** — `https://go.booker.com/location/TheHairStudio1/`. This kit is a design reference for what an on-site flow would look like, not a replacement. Every real CTA in the website kit links out to Booker.

A working four-step reservation flow: **Service → Stylist → Time → Details**, ending in a confirmation dialog and a toast.

Clickable throughout — pick a category, pick a service, choose a stylist or "first available", pick a day (Monday is deliberately empty so the `EmptyState` is reachable), pick a slot, fill the form, confirm.

The sticky summary panel carries the starting-price asterisk at every step, which is the flow's single most important piece of copy: the price shown is for bra length or shorter.

**Files** — `index.html` (mount), `Booking.jsx` (flow). Content comes from `../website/data.js`.
