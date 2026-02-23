import React from 'react';
import {
  ArrowRight,
  Building2,
  Flame,
  Hammer,
  Palette,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import { CORE_SERVICES, SECONDARY_SERVICES } from '../constants';
import { SERVICE_NAME_TO_SLUG } from '../data/services';
import { TECHNICAL_GUIDE_LINKS } from '../data/internalLinks';
import SEO from './SEO';

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#12141c" offset="0"/><stop stop-color="#2a2f3d" offset="1"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="50%" y="50%" fill="#ffffff" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" dominant-baseline="middle">Federal Fix Services</text></svg>'
  );

type ServiceItem = {
  name: string;
  slug: string;
};

type ServiceCategory = {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  accent: string;
  items: ServiceItem[];
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === 'true') return;
  img.dataset.fallbackApplied = 'true';
  img.src = FALLBACK_IMAGE;
};

const ServicesPage: React.FC = () => {
  const coreSlugById: Record<string, string> = {
    'shell-core': 'shell-core-fit-out',
    turnkey: 'turnkey-fit-out',
    renovation: 'villa-renovation',
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'fit-out-services',
      category: 'Fit-Out Services',
      icon: Hammer,
      image: '/Images/Commercial-Fitouts-dubai.webp',
      accent: '#ff7d82',
      items: [
        'Shell & Core Fit-Out',
        'Office Fit-Out',
        'Villa Fit-Out',
        'Retail & Showroom Fit-Out',
        'Restaurant & Cafe Fit-Out',
        'Full Turnkey Execution',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
    {
      id: 'interior-works',
      category: 'Interior Works',
      icon: Palette,
      image: '/Images/false-ceiling-in-dubai.webp',
      accent: '#ff9f63',
      items: [
        'Gypsum Partitions & Drywall',
        'False Ceiling Works',
        'Joinery & Carpentry',
        'Flooring Installation',
        'Wall Finishes',
        'Decorative Works',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
    {
      id: 'renovation-refurbishment',
      category: 'Renovation & Refurbishment',
      icon: Wrench,
      image: '/Images/home-renovation-dubai.webp',
      accent: '#7bd88f',
      items: [
        'Villa Renovation',
        'Apartment Renovation',
        'Kitchen Renovation',
        'Bathroom Renovation',
        'Office Renovation',
        'Shop & Retail Renovation',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
    {
      id: 'mep-services',
      category: 'MEP Services',
      icon: Zap,
      image: '/Images/MEP-works.webp',
      accent: '#6ec7ff',
      items: [
        'HVAC Installation',
        'Electrical Works',
        'Power & Lighting',
        'Plumbing Installation',
        'MEP Commissioning',
        'System Testing',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
    {
      id: 'structural-works',
      category: 'Structural Works',
      icon: Building2,
      image: '/Images/civil-works-dubai.webp',
      accent: '#c7a6ff',
      items: [
        'Structural Modifications',
        'Block Work & Masonry',
        'Concrete Repairs',
        'Floor Screeding',
        'Wall Openings',
        'Civil Works',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
    {
      id: 'safety-compliance',
      category: 'Safety & Compliance',
      icon: Flame,
      image: '/Images/fire-safety.webp',
      accent: '#ffd56a',
      items: [
        'Fire Alarm Systems',
        'Firefighting Systems',
        'Waterproofing',
        'Compliance Support',
        'Safety Installation',
        'Authority Coordination',
      ].map((name) => ({ name, slug: toSlug(name) })),
    },
  ];

  const coreVisuals: Record<string, string> = {
    'full-fitout': '/Images/fit-out-projects.webp',
    'shell-core-fitout': '/Images/civil-works-dubai.webp',
    'office-fitout-renovation': '/Images/office-renovation.webp',
    'villa-renovation': '/Images/villa-renovation.webp',
    'mep-works': '/Images/MEP-works.webp',
    'interior-finishing-works': '/Images/false-ceiling-in-dubai.webp',
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] pt-36 pb-24 md:pt-40 md:pb-28">
      <SEO
        title="Services – Federal Fix"
        description="Explore our full range of fit-out, renovation and MEP services in Dubai."
        canonical="https://federalfix.com/services"
      />
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#bd1920]/15 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#0f1118] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-12">
          <img
            src="/Images/Commercial-Fitouts-dubai.webp"
            alt="Dubai fit-out services"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
            decoding="async"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/55" />

          <div className="relative z-10 max-w-3xl animate-[slideUp_0.7s_ease-out_forwards]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff7d82]">
              <ShieldCheck className="h-4 w-4" />
              Full Service Coverage
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Modern renovation and fit-out services, built end-to-end.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-gray-300 md:text-lg">
              From shell and core to final handover, we deliver commercial and residential projects
              with structured planning, technical control, and finish quality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bd1920] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CORE_SERVICES.map((service, idx) => (
            <article
              id={service.id}
              key={service.id}
              className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(17,17,17,0.1)] animate-[slideUp_${0.75 + idx * 0.1}s_ease-out_forwards]`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={coreVisuals[service.id] ?? FALLBACK_IMAGE}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-white">
                  {service.number}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-gray-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
                <a
                  href={`/services/${coreSlugById[service.id] ?? service.id}`}
                  data-service-slug={service.id}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#bd1920] transition-all hover:gap-3"
                >
                  View Service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 animate-[slideUp_1s_ease-out_forwards]">
          <h3 className="text-3xl font-black text-gray-900">Additional Services</h3>
          <p className="mt-2 text-gray-600">
            Specialized support for interiors, technical systems, and compliance requirements.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECONDARY_SERVICES.map((service, idx) => (
              <a
                key={service.title}
                href={
                  SERVICE_NAME_TO_SLUG[service.title]
                    ? `/services/${SERVICE_NAME_TO_SLUG[service.title]}`
                    : `/services#${toSlug(service.title)}`
                }
                data-service-slug={toSlug(service.title)}
                className={`group rounded-xl border border-gray-200 bg-[#fafafa] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/40 hover:bg-white animate-[slideUp_${1.05 + idx * 0.05}s_ease-out_forwards]`}
              >
                <div id={toSlug(service.title)} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1920]/10 text-[#bd1920] transition-all group-hover:bg-[#bd1920] group-hover:text-white">
                    {service.icon}
                  </span>
                  <p className="font-bold text-gray-900">{service.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {serviceCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <article
                id={group.id}
                key={group.category}
                className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(17,17,17,0.08)] animate-[slideUp_${1.1 + idx * 0.08}s_ease-out_forwards]`}
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.category}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/40" />
                  <div className="absolute inset-0 flex items-center gap-3 px-6">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm"
                      style={{ boxShadow: `0 0 0 1px ${group.accent}66` }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-2xl font-black text-white">{group.category}</h4>
                  </div>
                </div>
                <ul className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.slug} id={item.slug}>
                      <a
                        href={
                          SERVICE_NAME_TO_SLUG[item.name]
                            ? `/services/${SERVICE_NAME_TO_SLUG[item.name]}`
                            : `/services#${item.slug}`
                        }
                        data-service-slug={item.slug}
                        className="group/item flex items-center justify-between rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-[#bd1920]/50 hover:bg-white"
                      >
                        {item.name}
                        <ArrowRight className="h-4 w-4 text-gray-400 transition-all group-hover/item:translate-x-1 group-hover/item:text-[#bd1920]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 animate-[slideUp_1.3s_ease-out_forwards]">
          <h3 className="text-3xl font-black text-gray-900">Technical Service Guides</h3>
          <p className="mt-2 text-gray-600">
            Explore detailed pages for specialized scopes to compare methods, materials, and maintenance priorities.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNICAL_GUIDE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group/item flex items-center justify-between rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-[#bd1920]/50 hover:bg-white"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-gray-400 transition-all group-hover/item:translate-x-1 group-hover/item:text-[#bd1920]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-gray-200 bg-white p-7 md:p-9 animate-[slideUp_1.35s_ease-out_forwards]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-900 md:text-3xl">
                Need help selecting the right package?
              </h3>
              <p className="mt-2 text-gray-600">
                Tell us your scope and we will recommend the most practical service mix for your
                project.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bd1920] px-8 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]"
            >
              Talk to Our Team
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ServicesPage;




