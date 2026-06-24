# Deployment

This app is a TanStack Start SSR project (Vite + Nitro). It is not a plain
static site — there is no single `dist/client/index.html`. Each route is
rendered by a server handler at request time. Deploy it to a host that can
run that handler.

## Netlify

1. Push the repo to GitHub and import it in Netlify.
2. `netlify.toml` already sets:
   - Build command: `NITRO_PRESET=netlify npm run build`
   - Publish directory: `dist/client`
3. Click Deploy. Nitro's `netlify` preset wires the SSR function and
   `_redirects` automatically.

## Vercel

1. Import the repo in Vercel.
2. Framework preset: **Other** (do NOT pick "Vite" — it overrides the
   output directory and breaks SSR).
3. `vercel.json` already sets:
   - Build command: `NITRO_PRESET=vercel npm run build`
   - Output directory: `.vercel/output`
4. Click Deploy. Nitro's `vercel` preset writes Vercel's Build Output API
   v3 directly.

## Local production preview

```bash
NITRO_PRESET=node-server npm run build
node .output/server/index.mjs
```

## GitHub Pages

Not supported. GitHub Pages is static-only and cannot run the SSR handler.
Use Netlify or Vercel, or ask to convert the app to a fully prerendered
SPA as a separate change.

## Environment variables

Set any required env vars (e.g. `LOVABLE_API_KEY`, Supabase keys) in the
host's project settings, not in the repo.