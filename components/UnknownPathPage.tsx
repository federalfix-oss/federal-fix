import React, { useEffect, useState } from 'react';
import NotFoundPage from './NotFoundPage';
import ServiceDetailPage from './ServiceDetailPage';
import { getImportedPageByPath } from '../data/importedPagesClient';
import { mapImportedPageToServiceData } from '../data/importedPageAdapter';
import type { ImportedPage } from '../data/importedPageTypes';

const UnknownPathPage: React.FC<{ pathname: string }> = ({ pathname }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [importedPage, setImportedPage] = useState<ImportedPage | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    setLoadFailed(false);
    setImportedPage(null);

    getImportedPageByPath(pathname)
      .then((page) => {
        if (isCancelled) return;
        setImportedPage(page ?? null);
      })
      .catch(() => {
        if (isCancelled) return;
        setLoadFailed(true);
      })
      .finally(() => {
        if (isCancelled) return;
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  if (isLoading) {
    return <section className="bg-white pt-40 pb-24" aria-busy="true" />;
  }

  if (!importedPage || loadFailed) return <NotFoundPage />;

  return (
    <ServiceDetailPage
      service={mapImportedPageToServiceData(importedPage)}
      canonicalPath={importedPage.path}
    />
  );
};

export default UnknownPathPage;
