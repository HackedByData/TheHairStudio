Square checkbox, oxblood when on.

```jsx
<Checkbox label="Text me a reminder" description="The day before, once." checked={remind} onChange={e => setRemind(e.target.checked)} />
```

Use `description` rather than a separate hint line.
