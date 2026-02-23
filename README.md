<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Federal Fix Website (Vite + React)

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Netlify Deployment

1. Build locally (optional check):
   `npm run build`
2. In Netlify, deploy this repository (or upload the generated `dist` folder).
3. Netlify uses:
   - build command: `npm run build`
   - publish directory: `dist`
4. SPA/deep-link fallback is already configured via `netlify.toml` and `public/_redirects`.

## Tracking Setup

1. Copy `.env.example` to `.env`
2. Fill required IDs:
   - `VITE_GTM_ID` (if using GTM)
   - `VITE_GA_MEASUREMENT_ID` (if GA direct tracking is needed)
   - `VITE_META_PIXEL_ID`
   - `VITE_GOOGLE_SITE_VERIFICATION`
3. Add the same variables in Netlify environment settings for production.

## Project Documentation

- Project overview: `PROJECT_OVERVIEW.md`
- Go-live checklist: `GO_LIVE_CHECKLIST.md`
