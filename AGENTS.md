# Project index — RR soft solutions website

## Purpose

Marketing / company site: static export, App Router, SEO-focused pages and sitemap.

## Stack

- **Next.js** 16 (`output: 'export'` in `next.config.ts` — no server at runtime; build emits `out/`)
- **React** 19, **TypeScript** strict
- **Tailwind CSS** v4 (`@tailwindcss/postcss`, `app/globals.css`)
- **Icons:** `lucide-react`
- **Deploy:** `npm run deploy` → Wrangler Pages to `out` (see `package.json`)

## Routes (`app/`)

| Path | File |
|------|------|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/industries` | `app/industries/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/careers` | `app/careers/page.tsx` |
| `/sitemap.xml` | `app/sitemap.ts` |

Root shell: `app/layout.tsx` (metadata, Inter font, `Header` + `main` + `Footer`).

## Shared UI (`components/`)

- `Header.tsx`, `Footer.tsx` — chrome
- `Hero.tsx` — home hero
- `ServiceCard.tsx`, `IndustryCard.tsx` — listing cards
- `ContactForm.tsx` — client validation; no API wired (see README)

## Imports

Path alias: `@/*` → repo root (`tsconfig.json`).

## SEO / site URL

- Default metadata and OG/Twitter: `app/layout.tsx` (`metadataBase` / URLs use `https://www.rrsoftsolutions.net`).
- Sitemap base URL: `app/sitemap.ts` (keep in sync with layout if domain changes).

## Human docs

Longer setup, customization, and deployment notes: `README.md`.
