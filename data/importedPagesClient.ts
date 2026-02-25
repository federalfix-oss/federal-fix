import type { ImportedPage } from './importedPageTypes';

let importedPagesCache: ImportedPage[] | null = null;

const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';

export const loadImportedPages = async (): Promise<ImportedPage[]> => {
  if (importedPagesCache) return importedPagesCache;

  const response = await fetch('/imported-pages.json', { cache: 'force-cache' });
  if (!response.ok) {
    throw new Error(`Failed to load imported pages: ${response.status}`);
  }

  const payload = (await response.json()) as ImportedPage[];
  importedPagesCache = Array.isArray(payload) ? payload : [];
  return importedPagesCache;
};

export const getImportedPageByPath = async (path: string): Promise<ImportedPage | undefined> => {
  const pages = await loadImportedPages();
  const normalizedPath = normalizePath(path);
  return pages.find((page) => normalizePath(page.path) === normalizedPath);
};
