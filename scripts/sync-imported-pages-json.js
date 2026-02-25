import fs from 'node:fs';
import path from 'node:path';

const SOURCE = path.resolve('data', 'importedPages.ts');
const OUTPUT = path.resolve('public', 'imported-pages.json');
const IMPORTED_PAGES_REGEX =
  /export const IMPORTED_PAGES: ImportedPage\[\] = (\[[\s\S]*?\]);\s*export const getImportedPageByPath/;

const source = fs.readFileSync(SOURCE, 'utf8');
const match = source.match(IMPORTED_PAGES_REGEX);

if (!match) {
  console.error('Could not parse IMPORTED_PAGES from data/importedPages.ts');
  process.exit(1);
}

const payload = JSON.parse(match[1]);
fs.writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`Synced ${payload.length} imported pages to public/imported-pages.json`);
