Native select with the house chevron.

```jsx
<Select label="Service" options={['Balayage', 'Full highlights', 'Root touch-up']} value={service} onChange={e => setService(e.target.value)} />
```

Options may be strings or `{value, label}`. For fewer than five choices with metadata, prefer `RadioGroup`.
