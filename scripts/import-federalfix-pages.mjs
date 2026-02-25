import fs from 'node:fs/promises';

const URL_ENTRIES = [
  ['https://federalfix.com/', '2025-11-21 07:34 +00:00'],
  ['https://federalfix.com/gypsum-board-installation-dubai/', '2026-01-15 08:35 +00:00'],
  ['https://federalfix.com/home-renovation/', '2026-01-06 13:45 +00:00'],
  ['https://federalfix.com/home-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9/', '2025-11-12 10:22 +00:00'],
  ['https://federalfix.com/floor-and-wall-tiles-fixing-in-dubai/', '2024-12-24 11:03 +00:00'],
  ['https://federalfix.com/hvac-maintenance/', '2024-12-17 10:10 +00:00'],
  ['https://federalfix.com/ac-maintenance-repair-and-install/', '2024-11-21 07:29 +00:00'],
  ['https://federalfix.com/civil-works/', '2024-11-20 07:23 +00:00'],
  ['https://federalfix.com/mep-works/', '2024-11-13 15:22 +00:00'],
  ['https://federalfix.com/electrical-and-it/', '2024-10-14 09:55 +00:00'],
  ['https://federalfix.com/electrical-maintenance-services/', '2024-10-14 07:15 +00:00'],
  ['https://federalfix.com/mechanical-hvac/', '2024-10-11 06:46 +00:00'],
  ['https://federalfix.com/air-duct-installation/', '2024-10-09 08:12 +00:00'],
  ['https://federalfix.com/ac-coil-maintenance/', '2024-10-07 14:30 +00:00'],
  ['https://federalfix.com/building-refurbishment/', '2024-10-04 13:23 +00:00'],
  ['https://federalfix.com/structural-construction-maintenance/', '2024-10-02 09:44 +00:00'],
  ['https://federalfix.com/marble-works/', '2024-10-02 09:43 +00:00'],
  ['https://federalfix.com/painting-services/', '2024-10-02 09:04 +00:00'],
  ['https://federalfix.com/wallpaper-fixing/', '2024-10-02 08:32 +00:00'],
  ['https://federalfix.com/carpentry-fixing/', '2024-10-01 08:17 +00:00'],
  ['https://federalfix.com/contact-us/', '2024-09-27 08:34 +00:00'],
  ['https://federalfix.com/aluminum-and-glass-works/', '2024-09-02 07:13 +00:00'],
  ['https://federalfix.com/false-ceiling-installation-and-repair-in-dubai/', '2024-08-30 06:29 +00:00'],
  ['https://federalfix.com/fit-out-projects/', '2024-08-28 14:35 +00:00'],
  ['https://federalfix.com/firefighting-system-maintenance-in-dubai/', '2024-08-23 13:20 +00:00'],
  ['https://federalfix.com/specialty-safety-technical-services/', '2024-08-23 13:18 +00:00'],
  ['https://federalfix.com/plumbing-maintenance-in-dubai/', '2024-08-23 13:14 +00:00'],
  ['https://federalfix.com/plumbing-and-water/', '2024-08-20 08:08 +00:00'],
];

const decodeHtmlEntities = (text) =>
  text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€\u009d/g, '"')
    .replace(/â€“/g, '-')
    .replace(/â€”/g, '-')
    .replace(/Â/g, '');

const stripTags = (html) =>
  decodeHtmlEntities(
    html
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();

const cleanHtml = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '');

const getFirstMatch = (html, regex) => {
  const match = html.match(regex);
  return match?.[1] ? stripTags(match[1]) : '';
};

const getBlocks = (html, regex) => {
  const values = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = stripTags(match[2]);
    if (text) values.push(text);
  }
  return values;
};

const buildRecord = async (url, lastmod) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; FederalFixContentImporter/1.0)',
      Accept: 'text/html,application/xhtml+xml',
    },
  });

  if (!response.ok) {
    return {
      url,
      path: new URL(url).pathname || '/',
      lastmod,
      title: '',
      h1: '',
      description: '',
      contentBlocks: [],
      error: `HTTP ${response.status}`,
    };
  }

  const htmlRaw = await response.text();
  const html = cleanHtml(htmlRaw);
  const body = getFirstMatch(html, /<body[^>]*>([\s\S]*?)<\/body>/i) || stripTags(html);

  const title = getFirstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const h1 = getFirstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const description = getFirstMatch(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["'][^>]*>/i
  );

  const headingBlocks = getBlocks(html, /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi);
  const paragraphBlocks = getBlocks(html, /<(p|li)[^>]*>([\s\S]*?)<\/\1>/gi);

  const candidateBlocks = [...headingBlocks, ...paragraphBlocks]
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter((line) => line.length > 35)
    .filter((line) => !/^skip to content/i.test(line))
    .filter((line) => !/^copyright/i.test(line))
    .filter((line) => !/^menu$/i.test(line))
    .filter((line) => !/^home\s+about/i.test(line));

  const deduped = [];
  const seen = new Set();
  for (const block of candidateBlocks) {
    const key = block.toLowerCase();
    if (seen.has(key)) continue;
    if (body && !body.toLowerCase().includes(key.slice(0, Math.min(50, key.length)))) continue;
    seen.add(key);
    deduped.push(block);
    if (deduped.length >= 24) break;
  }

  return {
    url,
    path: new URL(url).pathname || '/',
    lastmod,
    title,
    h1,
    description,
    contentBlocks: deduped,
  };
};

const run = async () => {
  const output = [];

  for (const [url, lastmod] of URL_ENTRIES) {
    try {
      // eslint-disable-next-line no-console
      console.log(`Fetching ${url}`);
      const record = await buildRecord(url, lastmod);
      output.push(record);
    } catch (error) {
      output.push({
        url,
        path: new URL(url).pathname || '/',
        lastmod,
        title: '',
        h1: '',
        description: '',
        contentBlocks: [],
        error: error instanceof Error ? error.message : 'Unknown fetch error',
      });
    }
  }

  const tsFile = `import type { ImportedPage } from './importedPageTypes';\n\nexport const IMPORTED_PAGES: ImportedPage[] = ${JSON.stringify(output, null, 2)};\n\nexport const getImportedPageByPath = (path: string) =>\n  IMPORTED_PAGES.find((page) => page.path === path || page.path === \`\${path}/\`);\n`;

  await fs.writeFile('data/importedPages.ts', tsFile, 'utf8');
  await fs.writeFile('public/imported-pages.json', `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Generated imported pages payload with ${output.length} records`);
};

run();
