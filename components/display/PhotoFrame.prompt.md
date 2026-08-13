Every image goes through this; without a src it shows an honest placeholder.

```jsx
<PhotoFrame src="/assets/photos/balayage.jpg" alt="Balayage by Angie" ratio="4 / 5" />
<PhotoFrame ratio="1 / 1" label="Salon interior" />
```

Default ratio is 4:5 (portrait) — the Instagram crop. Use `overlay` when text sits on top. Never substitute a stock or generated image for missing photography; leave the placeholder so the gap is visible.
