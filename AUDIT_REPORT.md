**Audit Report — Federal Fix website**

Summary
- **Scope**: repository scan of code and content to verify production readiness, SEO, accessibility, performance, and internal-link opportunities.
- **Primary files inspected**: [package.json](package.json), [tsconfig.json](tsconfig.json), [vite.config.ts](vite.config.ts), [index.html](index.html), [data/internalLinks.ts](data/internalLinks.ts), [data/services.ts](data/services.ts), [data/importedPages.ts](data/importedPages.ts), [components/SEO.tsx](components/SEO.tsx), [components/Navbar.tsx](components/Navbar.tsx), [components/ServicesMegaMenu.tsx](components/ServicesMegaMenu.tsx), [components/Footer.tsx](components/Footer.tsx), .eslintrc.cjs

High-level findings
- Build & toolchain: Vite + React + TypeScript present; `npm run build` uses `vite build`. [package.json](package.json)
- TypeScript config enables `strict: true` and `noEmit: true` — good for type safety. [tsconfig.json](tsconfig.json)
- ESLint + Prettier configured; lint/format scripts exist and `.eslintrc.cjs` is present.
- SEO: `index.html` contains basic meta tags and Open Graph defaults. Components use a client-side `SEO` component which mutates head via `document` at runtime — works for SPA but not ideal for crawlers.
- Sitemap generator exists (`scripts/generate-sitemap.js` / `.ts`). `data/importedPages.ts` contains crawled/imported content metadata.
- Accessibility: many images include `alt` attributes; there are several `aria-*` attributes and keyboard-friendly controls. Some alt texts are generic and could be improved.

Detailed checklist (code, build, production readiness)
- Dependencies
  - **Pin and audit**: run `npm audit` and pin transitive deps. Consider lockfile hygiene. See [package.json](package.json).
  - **Production versions**: confirm Tailwind major version compatibility (package.json lists `tailwindcss@^4.1.18` — ensure installed version is intended).

- Build & CI
  - Add a CI workflow (GitHub Actions) to run `npm ci`, `npm run lint`, `npm run build`, and tests (if any) on PRs.
  - Fail fast on lint/type errors. Use `--max-warnings=0` for CI lint runs.

- Environment & Secrets
  - `vite.config.ts` defines `process.env.GEMINI_API_KEY` at build-time — ensure real secrets are not committed to env files or logged. Use runtime server environment or secret manager for sensitive keys. [vite.config.ts](vite.config.ts)

- Security headers & production server
  - Ensure the production webserver adds these headers: `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy` (CSP), `Permissions-Policy`.
  - If embedding external content (YouTube, Google Maps), adopt a CSP and provide user consent for tracking if required.

- Static assets & caching
  - Serve static assets with long cache TTL and content-hash filenames (Vite does this for build output). Confirm CDN/edge configuration for `public/` assets.
  - Enable Brotli/Gzip compression at CDN or server.

- Performance
  - Defer non-critical JS and enable code-splitting (Vite auto-splits dynamic imports). Verify largest bundle via `vite build --report` or `rollup` analyzer.
  - Optimize images: use WebP/AVIF, responsive `srcset`, and an image CDN for on-the-fly resizing. Several images are full-size in `public/Projects`.
  - Add `loading="lazy"` to non-critical `img` tags (many components lack lazy loading). Example: `ProjectDetailPage.tsx` images, `FeaturedProjects.tsx`.
  - Fonts: use `font-display:swap` and consider preloading the main font(s) to avoid FOIT.

- Accessibility & semantics
  - Improve image `alt` texts where currently generic (e.g., `alt="thumb"`, `alt="transformation"`) to be descriptive and useful for screen readers.
  - Ensure all interactive elements have keyboard focus states and `aria-` attributes where needed (most present in navigation and mega menu).
  - Verify color contrast for text against backgrounds (especially CTA and navbar variants).

- SEO / Crawlability
  - Client-side `SEO` component updates meta at runtime; for best SEO use prerendering or SSG (Vite + `@vitejs/plugin-ssg` or prerender plugin), or server-side rendering so bots get per-page meta on first load. [components/SEO.tsx](components/SEO.tsx)
  - Canonical tags are present in many components; confirm canonical values match deployed URLs. See `[index.html](index.html)` and per-page `canonical` props across components.
  - Sitemap generation exists — integrate it into build/CI to regenerate on content changes (`npm run sitemap`).
  - Robots: `public/robots.txt` exists — verify it allows crawling and points to sitemap.

- Analytics & privacy
  - No analytics/tracking found in repo. If using analytics, add privacy policy updates and cookie consent. Social embeds (YouTube/Maps) are present — consider lazy loading and consent.

- Accessibility & Content audit specifics
  - Find and fix generic image alt text: search results show `alt="thumb"`, `alt="transformation"`, `alt={`Client logo ${idx + 1}`} ` (client logo alt could include client name when available). Files: [BeforeAfter.tsx](components/BeforeAfter.tsx), [VisualShowcase.tsx](components/VisualShowcase.tsx), [Clients.tsx](components/Clients.tsx).
  - Add `loading="lazy"` to `img` elements that are not critical LCP images: e.g., `FeaturedProjects.tsx`, `ProjectDetailPage.tsx`, `ServicesPage.tsx`.

Internal linking & content opportunities
- Files that house central link data: [data/internalLinks.ts](data/internalLinks.ts) — current arrays include `TECHNICAL_GUIDE_LINKS`, `FOOTER_GUIDE_LINKS`, `HOME_GUIDE_LINKS`, `FAQ_GUIDE_LINKS`. Use these to programmatically inject contextual links into service pages and blog posts.
- `ServicesMegaMenu.tsx` already maps many visible items to service slugs and to `IMPORTED_PAGE_LINKS` mapping. Verify every `IMPORTED_PAGE_LINKS` key has a matching page in `data/importedPages.ts` or `SERVICES_CONTENT`. If missing, add the missing target or make it point to a top-level `/services` anchor.
- Suggested internal linking opportunities (examples):
  - On each service page (from `data/services.ts`): add an inline “Related services” section that links to `relatedServices` slugs listed in each service object.
  - From technical guide pages in `data/importedPages.ts` (long content blocks) add contextual inline links to the matching service pages (e.g., the gypsum guide should link to `/services/full-fitout` or a gypsum-specific service page). Use `data/internalLinks.ts` mapping.
  - Add “Related articles” (blog) on service pages linking to helpful blog posts in the `/blog` list for topical authority.
  - Add project case-studies links on service pages (show real-world examples) — crosslink from project pages to the services used.
  - Add breadcrumb navigation to `ServiceDetailPage.tsx` and `ProjectDetailPage.tsx` to improve internal linking and UX.

Concrete internal-link checklist (actionable)
  - [ ] Verify `SERVICES_CONTENT[*].relatedServices` slugs resolve to existing `/services/{slug}` pages. (See [data/services.ts](data/services.ts)).
  - [ ] For each entry in `IMPORTED_PAGES` (from [data/importedPages.ts](data/importedPages.ts)), add 1–3 contextual links to service pages where relevant.
  - [ ] Add a “Related Projects” widget on service pages with links to matching projects (use `public/Projects` metadata or create a lightweight index).
  - [ ] Ensure `ServicesMegaMenu` `IMPORTED_PAGE_LINKS` mapping is kept in sync with `data/importedPages.ts` and `data/services.ts`.

Other recommendations and best-practice checks
- Runtime safety
  - Guard `window`/`document` usage when pre-rendering/SSR: many components read `window.location` directly (e.g., `Navbar.tsx`). Wrap these accesses in `typeof window !== 'undefined'` checks or move route logic to React Router where SSR is supported.

- SEO structured data
  - Add JSON-LD schema for Organization, LocalBusiness, BreadcrumbList, and Service where appropriate (inline in server-rendered head or via prerender). This helps local search and rich results.

- Images
  - Replace large JPG/PNG with WebP/AVIF. Add `srcset`/`sizes` for responsive images. Consider automated image optimization via an image CDN.

- Performance metrics to run and track
  - Run Lighthouse (Performance, Accessibility, Best Practices, SEO) and track LCP, CLS, FID/INP. Aim for LCP < 2.5s, CLS < 0.1, INP < 200ms.

- Monitoring & error reporting
  - Add Sentry (or similar) for runtime error monitoring in production.

Next steps I can take for you (pick any)
- Run an automated link-checker across the site and report broken internal/external links.
- Generate a per-page internal-link plan that maps `IMPORTED_PAGES` entries to the best 1–3 service pages to link to (I can produce a CSV).
- Implement a PR that: adds `loading="lazy"` to non-critical images, improves several alt texts, and adds missing `rel="noopener"` where needed.
- Add a CI GitHub Action template to run lint/build/sitemap on push.

Appendix — quick scans & notes
- Client-side SEO: [components/SEO.tsx](components/SEO.tsx) mutates head via `document` in a `useEffect` hook — good for SPA UX but not for initial bot crawl. Consider SSG/prerender.
- Sitemap: `scripts/generate-sitemap.js` and `.ts` present — ensure it runs in CI and writes to `public/sitemap.xml`.
- Map/YT embeds: present in `ContactPage.tsx` and `Hero.tsx` — consider lazy loading and cookie-consent gating for privacy.
- Social links (Footer) use `target="_blank"` with `rel="noopener noreferrer"` present.

-- end of report
