# Go-Live Checklist

## Required Inputs
- `VITE_GTM_ID` (optional if GA-only setup)
- `VITE_GA_MEASUREMENT_ID` (optional if GTM handles GA4)
- `VITE_META_PIXEL_ID`
- `VITE_GOOGLE_SITE_VERIFICATION` (optional; DNS/HTML file is preferred)

## Configuration
- Create `.env` from `.env.example`
- Set Netlify environment variables for production and preview
- Ensure canonical domain is correct (`https://federalfix.com`)

## Tracking Validation
- Verify `page_view` events fire on page load/navigation
- Verify lead events from:
  - Contact section form submit
  - Contact page form submit
  - Floating WhatsApp click
  - Floating phone click
- Confirm Meta Pixel events in Meta Events Manager
- Confirm GA4 events in DebugView / Realtime

## SEO Validation
- Confirm sitemap generation includes all expected routes
- Submit `https://federalfix.com/sitemap.xml` in Google Search Console
- Confirm robots file is accessible at `/robots.txt`
- Validate title/description/canonical/OG on key pages

## Quality and Release
- Run `npm run lint`
- Run `npm run build`
- Test `npm run preview` locally
- Validate top pages on mobile + desktop
- Deploy to Netlify production
