# JomBina Digital Solutions — Portfolio Site

Marketing & portfolio site for JomBina Digital Solutions, a Malaysian web development consultancy.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **Icons:** lucide-react
- **Language:** TypeScript (strict)
- **Tests:** Vitest + Testing Library (jsdom)
- **Lint/Format:** ESLint (next/core-web-vitals + typescript) + Prettier
- **Git hooks:** Husky + lint-staged

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Script          | Purpose                      |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm start`     | Run production build         |
| `npm run lint`  | Run ESLint                   |
| `npm test`      | Run Vitest suite             |

## Project layout

```
src/
  app/                 App Router routes
    page.tsx           Home (composes all marketing sections)
    contact/           Contact page (form, info)
    privacy/           Privacy policy
    terms/             Terms of service
    work/[slug]/       Case study pages (SSG via generateStaticParams)
    not-found.tsx      404 page
    opengraph-image.tsx  Edge-rendered OG image
    layout.tsx         Root layout (Navbar + Footer + Inter font)
    globals.css        Tailwind import + theme tokens
  components/          Section + UI components (Hero, Work, FAQ, etc.)
  constants/data.ts    Single source of truth for projects, services,
                       pricing plans, FAQs, testimonials
  lib/utils.ts         `cn()` helper (clsx + tailwind-merge)
public/work/           Case-study cover images (.webp)
```

## Adding a project case study

1. Drop the cover image in `public/work/`.
2. Add an entry to `projectsData` in [`src/constants/data.ts`](src/constants/data.ts).
3. The home grid ([`Work.tsx`](src/components/Work.tsx)) and the static page at `/work/[slug]` are generated from the same source.

## Deployment

Designed to deploy to Vercel — no server runtime is required for the main site (`/opengraph-image` uses the edge runtime).
