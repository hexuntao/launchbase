# e2e test :: apps/web

Install the Chromium browser before running the suite locally:

```bash
pnpm --filter @e2e/web exec playwright install chromium
```

Run the smoke tests:

```bash
pnpm web:e2e
```

The suite starts the built web app on `localhost:3000`. Set `PLAYWRIGHT_PORT` if that port is already occupied.
