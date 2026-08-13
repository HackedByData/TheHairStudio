Boxed vertical radio list — the booking flow's picker.

```jsx
<RadioGroup label="Stylist" value={who} onChange={setWho} options={[{ value: 'angie', label: 'Angie', meta: 'Owner · 12 yrs' }, { value: 'any', label: 'First available' }]} />
```

`meta` right-aligns a small detail (duration, price, seniority). The selected row gets an oxblood border and a 9% oxblood wash.
