# Federal Fix Website: Project Overview

## 1) Purpose
This project is the production website for Federal Fix (Dubai renovation and fit-out services).  
It is a React + TypeScript single-page application (SPA) built with Vite, optimized for:
- Service discovery and lead generation
- SEO visibility (metadata, canonical, sitemap, robots)
- Fast static deployment on Netlify

## 2) Tech Stack
- Frontend: React 19, TypeScript
- Build tool: Vite 6
- Styling: Tailwind CSS 4 + custom CSS
- Icons: `lucide-react`, `react-icons`
- Deployment: Netlify (`netlify.toml`, `_redirects`)

## 3) Application Architecture
- Entry point: `index.tsx`
- Main composition and route switching: `App.tsx`
- Route model: pathname-based conditional rendering (no external router package)
- Shared SEO handling: `components/SEO.tsx`
- Content source:
  - `data/services.ts`
  - `constants.tsx` (projects/blog/static data)
  - `data/importedPages.ts` + adapter

## 4) Key User Flows
- Homepage with trust, services, process, projects, and contact CTA
- Service listing + service detail pages
- Projects listing + project detail pages
- Blog listing + blog article pages
- Contact page/form (WhatsApp + mailto)
- Floating quick actions (WhatsApp + phone)

## 5) SEO and Discoverability
Current implementation includes:
- Canonical URLs and dynamic page metadata (`components/SEO.tsx`)
- Open Graph and Twitter metadata
- `robots.txt` with sitemap reference (`public/robots.txt`)
- Auto-generated sitemap via `scripts/generate-sitemap.js`
- Meta prerender step after build (`scripts/prerender-meta-pages.js`)

## 6) Analytics and Tracking (Now Integrated)
Tracking is centralized in `lib/tracking.ts` and initialized from `index.tsx`.

Supported integrations (env-driven):
- Google Tag Manager: `VITE_GTM_ID`
- Google Analytics (gtag fallback when GTM is not set): `VITE_GA_MEASUREMENT_ID`
- Meta Pixel: `VITE_META_PIXEL_ID`
- Google site verification meta tag: `VITE_GOOGLE_SITE_VERIFICATION`

Tracked events:
- `page_view` on route/path render (`App.tsx`)
- `generate_lead` on:
  - Homepage contact form submit (`components/Contact.tsx`)
  - Contact page form submit (`components/ContactPage.tsx`)
  - Floating WhatsApp click (`components/FloatingActionButton.tsx`)
  - Floating phone click (`components/FloatingActionButton.tsx`)

## 7) Build and Release
Commands:
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback configured

## 8) Production Readiness Status
Strong:
- Structured component architecture
- SEO baseline and sitemap generation
- Static deployment pipeline
- Lead capture surfaces
- Tracking foundation now added

Recommended before go-live:
- Add real production tracking IDs and verify event flow
- Add/confirm cookie consent mode for analytics/pixels (regional compliance)
- Configure Search Console verification using DNS or HTML file (preferred over JS meta)
- Add uptime/performance/error monitoring (e.g., Sentry, uptime checks)
- Run final QA pass on mobile, tablet, and key landing pages
