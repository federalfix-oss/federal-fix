import React from 'react';
import NotFoundPage from './NotFoundPage';
import ServiceDetailPage from './ServiceDetailPage';
import { getImportedPageByPath } from '../data/importedPages';
import { mapImportedPageToServiceData } from '../data/importedPageAdapter';

const UnknownPathPage: React.FC<{ pathname: string }> = ({ pathname }) => {
  const importedPage = getImportedPageByPath(pathname);
  if (!importedPage) return <NotFoundPage />;

  return (
    <ServiceDetailPage
      service={mapImportedPageToServiceData(importedPage)}
      canonicalPath={importedPage.path}
    />
  );
};

export default UnknownPathPage;
