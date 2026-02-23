import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'https://federalfix.com';
const rootDir = process.cwd();
const staticPaths = ['/', '/about', '/contact', '/services', '/blog', '/projects', '/privacy', '/terms'];

const readFileSafe = (filePath) => {
  try {
    return fs.readFileSync(path.join(rootDir, filePath), 'utf8');
  } catch {
    return '';
  }
};

const collectMatches = (text, regex) => [...text.matchAll(regex)].map((m) => m[1]).filter(Boolean);
const extractBlock = (text, startToken, endToken) => {
  const start = text.indexOf(startToken);
  if (start === -1) return '';
  const sliced = text.slice(start);
  const end = sliced.indexOf(endToken);
  if (end === -1) return sliced;
  return sliced.slice(0, end);
};

const servicesText = readFileSafe('data/services.ts');
const constantsText = readFileSafe('constants.tsx');
const importedPagesText = readFileSafe('data/importedPages.ts');
const blogBlock = extractBlock(constantsText, 'export const BLOG_POSTS = [', 'export const getBlogPostBySlug');
const projectsBlock = extractBlock(constantsText, 'export const PROJECTS: Project[] = [', 'export const getProjectBySlug');

const serviceSlugs = collectMatches(servicesText, /slug:\s*["']([^"']+)["']/g);
const blogSlugs = collectMatches(blogBlock, /slug:\s*'([^']+)'/g);
const projectSlugs = collectMatches(projectsBlock, /slug:\s*makeSlug\('([^']+)'\)/g).map((title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
);
const importedPaths = collectMatches(importedPagesText, /"path":\s*"([^"]+)"/g);

const servicePaths = serviceSlugs.map((slug) => `/services/${slug}`);
const blogPaths = blogSlugs.map((slug) => `/blog/${slug}`);
const projectPaths = projectSlugs.map((slug) => `/projects/${slug}`);

const allPaths = [...staticPaths, ...servicePaths, ...blogPaths, ...projectPaths, ...importedPaths].map((p) => {
  if (!p.startsWith('/')) return `/${p}`;
  return p === '//' ? '/' : p;
});

const uniquePaths = [...new Set(allPaths)].filter(Boolean);

const xmlEntries = uniquePaths
  .map((p) => `<url><loc>${baseUrl}${p}</loc></url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

const outDir = path.join(rootDir, 'public');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`sitemap.xml generated at public/sitemap.xml (${uniquePaths.length} URLs)`);
