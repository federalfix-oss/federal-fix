import React, { useEffect } from 'react';

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
};

const SITE_URL = 'https://federalfix.com';
const DEFAULT_TITLE = 'Federal Fix | Renovation & Fit-Out Dubai';
const DEFAULT_DESCRIPTION =
  'Dubai-based renovation and fit-out contractor specialising in shell & core, turnkey projects and villa refurbishments.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/Projects/Dubai%20Airport.jpg`;

const toAbsoluteUrl = (value: string) => {
  if (!value) return SITE_URL;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
};

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setCanonical = (href: string) => {
  let tag = document.querySelector("link[rel='canonical']");
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage, noIndex = false }) => {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const resolvedCanonical =
      canonical || `${SITE_URL}${window.location.pathname.replace(/\/+$/, '') || '/'}`;
    const resolvedOgImage = toAbsoluteUrl(ogImage || DEFAULT_OG_IMAGE);

    document.title = resolvedTitle;
    setMeta("meta[name='description']", 'name', 'description', resolvedDescription);
    setCanonical(toAbsoluteUrl(resolvedCanonical));

    setMeta("meta[property='og:type']", 'property', 'og:type', 'website');
    setMeta("meta[property='og:title']", 'property', 'og:title', resolvedTitle);
    setMeta("meta[property='og:description']", 'property', 'og:description', resolvedDescription);
    setMeta("meta[property='og:url']", 'property', 'og:url', toAbsoluteUrl(resolvedCanonical));
    setMeta("meta[property='og:image']", 'property', 'og:image', resolvedOgImage);

    setMeta("meta[name='twitter:card']", 'name', 'twitter:card', 'summary_large_image');
    setMeta("meta[name='twitter:title']", 'name', 'twitter:title', resolvedTitle);
    setMeta("meta[name='twitter:description']", 'name', 'twitter:description', resolvedDescription);
    setMeta("meta[name='twitter:image']", 'name', 'twitter:image', resolvedOgImage);
    setMeta(
      "meta[name='robots']",
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow'
    );
  }, [title, description, canonical, ogImage, noIndex]);

  return null;
};

export default SEO;
