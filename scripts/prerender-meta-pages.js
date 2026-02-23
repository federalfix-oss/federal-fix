import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://federalfix.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/Projects/Dubai%20Airport.jpg`;
const DIST_DIR = path.resolve('dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const IMPORTED_PAGES_SOURCE = path.resolve('data', 'importedPages.ts');

const STATIC_ROUTES = [
  {
    route: '/',
    title: 'Federal Fix | Renovation & Fit-Out Dubai',
    description:
      'Dubai-based renovation and fit-out contractor specialising in shell & core, turnkey projects and villa refurbishments. Contact us for authority-ready delivery.',
  },
  {
    route: '/about',
    title: 'About Federal Fix - Dubai Fit-Out Contractor',
    description:
      'Learn about Federal Fix, a Dubai fit-out and renovation contractor delivering shell and core, turnkey, and authority-ready projects.',
  },
  {
    route: '/contact',
    title: 'Contact Federal Fix - Get a Quote',
    description:
      'Contact Federal Fix in Dubai for renovation, fit-out, MEP, and maintenance projects. Request a consultation and quotation.',
  },
  {
    route: '/services',
    title: 'Services - Federal Fix',
    description:
      'Explore Federal Fix services including fit-out, renovation, MEP, civil works, and maintenance solutions across Dubai.',
  },
  {
    route: '/projects',
    title: 'Projects and Case Studies - Federal Fix',
    description:
      'Browse Federal Fix projects and case studies showcasing delivered fit-out, renovation, and technical service work in Dubai.',
  },
  {
    route: '/blog',
    title: 'Insights and Blog - Federal Fix',
    description:
      'Read Federal Fix insights and practical guides on fit-out, renovation, maintenance, and project delivery in Dubai.',
  },
  {
    route: '/privacy',
    title: 'Privacy Policy - Federal Fix',
    description: 'Read the Federal Fix privacy policy for website and customer data handling.',
  },
  {
    route: '/terms',
    title: 'Terms of Service - Federal Fix',
    description: 'Read the Federal Fix terms of service for website usage and service conditions.',
  },
];

function toAbsoluteUrl(route) {
  if (!route || route === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${route.startsWith('/') ? route : `/${route}`}`;
}

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applyMeta(html, meta) {
  const title = escapeHtmlAttr(meta.title || STATIC_ROUTES[0].title);
  const description = escapeHtmlAttr(meta.description || STATIC_ROUTES[0].description);
  const canonical = escapeHtmlAttr(meta.canonical || toAbsoluteUrl(meta.route));
  const ogImage = escapeHtmlAttr(meta.ogImage || DEFAULT_OG_IMAGE);

  let updated = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  updated = updated.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );
  updated = updated.replace(
    /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="robots" content="index, follow" />`
  );
  updated = updated.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`
  );
  updated = updated.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`
  );
  updated = updated.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );
  updated = updated.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`
  );
  updated = updated.replace(
    /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:image" content="${ogImage}" />`
  );
  updated = updated.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  updated = updated.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  updated = updated.replace(
    /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  return updated;
}

function routeToDistPath(route) {
  if (route === '/') {
    return INDEX_HTML_PATH;
  }
  const normalized = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST_DIR, normalized, 'index.html');
}

function loadImportedRoutes() {
  if (!fs.existsSync(IMPORTED_PAGES_SOURCE)) {
    return [];
  }

  const source = fs.readFileSync(IMPORTED_PAGES_SOURCE, 'utf8');
  const match = source.match(
    /export const IMPORTED_PAGES: ImportedPage\[\] = (\[[\s\S]*?\]);\s*export const getImportedPageByPath/
  );

  if (!match) {
    return [];
  }

  const parsed = JSON.parse(match[1]);
  return parsed.map((page) => ({
    route: (page.path || '/').replace(/\/+$/, '') || '/',
    title: page.title,
    description: page.description,
    canonical: page.url || toAbsoluteUrl(page.path || '/'),
  }));
}

function dedupeByRoute(routes) {
  const byRoute = new Map();
  routes.forEach((routeMeta) => {
    const normalizedRoute = routeMeta.route === '/' ? '/' : `/${routeMeta.route.replace(/^\/+|\/+$/g, '')}`;
    byRoute.set(normalizedRoute, { ...routeMeta, route: normalizedRoute });
  });
  return Array.from(byRoute.values());
}

function main() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error('dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  const routeMeta = dedupeByRoute([...STATIC_ROUTES, ...loadImportedRoutes()]);

  routeMeta.forEach((meta) => {
    const outputPath = routeToDistPath(meta.route);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, applyMeta(baseHtml, meta), 'utf8');
  });

  console.log(`Prerendered metadata pages: ${routeMeta.length}`);
}

main();

