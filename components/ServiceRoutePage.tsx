import React from 'react';
import ServiceDetailPage, { ServiceNotFound } from './ServiceDetailPage';
import { getServiceBySlug } from '../data/services';

const ServiceRoutePage: React.FC<{ slug: string }> = ({ slug }) => {
  const serviceData = getServiceBySlug(slug);
  if (!serviceData) return <ServiceNotFound />;
  return <ServiceDetailPage service={serviceData} />;
};

export default ServiceRoutePage;
