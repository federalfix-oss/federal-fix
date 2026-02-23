import { ImportedPage } from './importedPages';
import { ServicePageData } from './services';

const STOCK_IMAGES = [
  '/Images/Commercial-Fitouts-dubai.webp',
  '/Images/MEP-works.webp',
  '/Images/false-ceiling-in-dubai.webp',
  '/Images/home-renovation-dubai.webp',
  '/Images/villa-renovation.webp',
];

const pickStockImagesByPath = (path: string): string[] => {
  const value = path.toLowerCase();

  if (value.includes('office')) {
    return [
      '/Images/office-renovation.webp',
      '/Images/Glass-Partitions-and-Office-Fit-Outs.webp',
      '/Images/false-ceiling-in-dubai.webp',
      '/Images/MEP-works.webp',
      '/Images/Commercial-Fitouts-dubai.webp',
    ];
  }

  if (value.includes('villa') || value.includes('home') || value.includes('residential')) {
    return [
      '/Images/villa-renovation.webp',
      '/Images/home-renovation-dubai.webp',
      '/Images/Kitchen-renovation.webp',
      '/Images/Bathroom-Works-in-Dubai.webp',
      '/Images/false-ceiling-in-dubai.webp',
    ];
  }

  if (value.includes('retail') || value.includes('showroom') || value.includes('shop')) {
    return [
      '/Images/Retail-stores-Fit-outs-in-Dubai.webp',
      '/Images/Commercial-Fitouts-dubai.webp',
      '/Images/office-renovation.webp',
      '/Images/fit-out-projects.webp',
      '/Images/false-ceiling-in-dubai.webp',
    ];
  }

  if (value.includes('restaurant') || value.includes('cafe') || value.includes('hospitality')) {
    return [
      '/Images/Hospitality-fit-out-in-dubai.webp',
      '/Images/Kitchen-renovation.webp',
      '/Images/MEP-works.webp',
      '/Images/Commercial-Fitouts-dubai.webp',
      '/Images/false-ceiling-in-dubai.webp',
    ];
  }

  if (
    value.includes('mep') ||
    value.includes('hvac') ||
    value.includes('electrical') ||
    value.includes('plumbing') ||
    value.includes('fire') ||
    value.includes('safety')
  ) {
    return [
      '/Images/MEP-works.webp',
      '/Images/Mechanical-and-HVAC.webp',
      '/Images/electrical-works.webp',
      '/Images/plumbing.webp',
      '/Images/fire-safety.webp',
    ];
  }

  if (
    value.includes('interior') ||
    value.includes('gypsum') ||
    value.includes('ceiling') ||
    value.includes('tile') ||
    value.includes('painting') ||
    value.includes('wallpaper')
  ) {
    return [
      '/Images/false-ceiling-in-dubai.webp',
      '/Images/gypsum-ceiling-dubai.webp',
      '/Images/painting-services-in-dubai.webp',
      '/Images/Tile-Repairs-and-Replacements-dubai.webp',
      '/Images/home-renovation-dubai.webp',
    ];
  }

  if (value.includes('shell') || value.includes('core') || value.includes('civil') || value.includes('structural')) {
    return [
      '/Images/civil-works-dubai.webp',
      '/Images/building-refurbishment.webp',
      '/Images/MEP-works.webp',
      '/Images/fit-out-projects.webp',
      '/Images/Commercial-Fitouts-dubai.webp',
    ];
  }

  return STOCK_IMAGES;
};

const FALLBACK_BULLETS = [
  'Scope review and technical planning',
  'Material and method selection',
  'Execution with QA checkpoints',
  'Snag closure and handover readiness',
];

const clean = (value: string) => value.replace(/\s+/g, ' ').trim();

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const toTitleFromPath = (path: string) =>
  path
    .replace(/^\/+|\/+$/g, '')
    .replace(/%[0-9a-f]{2}/gi, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const buildShortTitle = (value: string) => {
  const base = clean(value)
    .replace(/^expert\s+/i, '')
    .replace(/\s+in\s+dubai\b.*$/i, '')
    .replace(/\s+-\s+federal fix.*$/i, '')
    .trim();

  if (base.length <= 44) return base;

  const words = base.split(' ');
  if (words.length <= 6) return base;
  return words.slice(0, 6).join(' ');
};

const pickColor = (input: string) => {
  const palette = ['#bd1920', '#e67e22', '#4a6fa5', '#7dcfa0', '#9b59b6', '#ff7b80'];
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) hash = (hash << 5) - hash + input.charCodeAt(i);
  return palette[Math.abs(hash) % palette.length];
};

const pickRelatedServices = (path: string): string[] => {
  const value = path.toLowerCase();
  if (value.includes('hvac') || value.includes('ac') || value.includes('electrical') || value.includes('plumbing')) {
    return ['mep-works', 'full-fitout'];
  }
  if (value.includes('gypsum') || value.includes('ceiling') || value.includes('tiles') || value.includes('painting') || value.includes('wallpaper') || value.includes('carpentry') || value.includes('marble')) {
    return ['interior-finishing-works', 'villa-renovation'];
  }
  if (value.includes('civil') || value.includes('structural') || value.includes('refurbishment') || value.includes('fit-out')) {
    return ['full-fitout', 'shell-core-fitout'];
  }
  if (value.includes('fire') || value.includes('safety')) {
    return ['mep-works', 'shell-core-fitout'];
  }
  return ['full-fitout', 'villa-renovation'];
};

const buildSections = (blocks: string[]) => {
  const content = blocks.filter((item) => item.length > 50).slice(0, 14);
  const bullets = blocks.filter((item) => item.length >= 18 && item.length <= 95).slice(0, 12);

  const partA = content.slice(0, 2).join(' ');
  const partB = content.slice(2, 4).join(' ');
  const partC = content.slice(4, 6).join(' ');

  return [
    {
      title: 'Overview',
      content: partA || 'This page outlines key scope, standards, and value drivers for this service in Dubai.',
      bullets: bullets.slice(0, 4).length ? bullets.slice(0, 4) : FALLBACK_BULLETS,
    },
    {
      title: 'Scope and Standards',
      content: partB || 'Execution covers planning, technical review, installation quality, and closeout controls.',
      bullets: bullets.slice(4, 8).length ? bullets.slice(4, 8) : FALLBACK_BULLETS,
    },
    {
      title: 'Execution Approach',
      content: partC || 'Delivery is structured with supervision, QC checks, and handover-focused completion.',
      bullets: bullets.slice(8, 12).length ? bullets.slice(8, 12) : FALLBACK_BULLETS,
    },
  ];
};

export const mapImportedPageToServiceData = (page: ImportedPage): ServicePageData => {
  const pathSlug = slugify(page.path.replace(/^\/+|\/+$/g, '')) || 'service-page';
  const heading = clean(page.h1 || page.title || toTitleFromPath(page.path) || 'Federal Fix Service');
  const shortTitle = buildShortTitle(heading.split('|')[0].replace(/Federal Fix/gi, '').trim() || heading);
  const intro =
    clean(page.description) ||
    page.contentBlocks.find((line) => line.length > 80) ||
    'Professional technical services delivered with quality, safety, and practical execution control.';

  const sections = buildSections(page.contentBlocks.map(clean));
  const relatedServices = pickRelatedServices(page.path);
  const accentColor = pickColor(page.path);
  const selectedStockImages = pickStockImagesByPath(page.path);

  return {
    slug: pathSlug,
    title: heading,
    shortTitle,
    heroImage: selectedStockImages[0],
    heroAlt: shortTitle,
    accentColor,
    location: 'Dubai, UAE',
    primaryKeyword: shortTitle,
    secondaryKeywords: page.contentBlocks.slice(0, 4).map(clean),
    intro,
    galleryImages: selectedStockImages.slice(1, 5),
    sectionImages: selectedStockImages.slice(0, 3),
    sections,
    faqs: [
      {
        question: `What is included in ${shortTitle}?`,
        answer: 'Scope typically includes assessment, planning, execution, quality checks, and closeout support based on project needs.',
      },
      {
        question: 'How is quality controlled during execution?',
        answer: 'Work is delivered with stage-wise supervision, method compliance, and inspection checkpoints before handover.',
      },
      {
        question: 'Can this service be integrated with other trades?',
        answer: 'Yes. The scope can be coordinated with MEP, finishing, and fit-out packages under a single execution plan.',
      },
    ],
    relatedServices,
  };
};




