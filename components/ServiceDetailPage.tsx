import React from "react";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { SERVICES_CONTENT, ServicePageData, getServiceBySlug } from "../data/services";
import SEO from "./SEO";

type ServiceDetailPageProps = {
  service: ServicePageData;
  canonicalPath?: string;
};

const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#11131b" offset="0"/><stop stop-color="#20283a" offset="1"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="50%" y="50%" fill="#ffffff" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" dominant-baseline="middle">Federal Fix Service</text></svg>'
  );

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === "true") return;
  img.dataset.fallbackApplied = "true";
  img.src = FALLBACK_IMAGE;
};

const serviceQuickStats: Record<string, { label: string; value: string }[]> = {
  "shell-core-fit-out": [
    { label: "Typical Timeline", value: "8-16 Weeks" },
    { label: "Execution Model", value: "Phase-Controlled" },
    { label: "Handover Focus", value: "Authority-Ready" },
  ],
  "turnkey-fit-out": [
    { label: "Typical Timeline", value: "10-18 Weeks" },
    { label: "Execution Model", value: "End-to-End" },
    { label: "Handover Focus", value: "Launch Ready" },
  ],
  "villa-renovation": [
    { label: "Typical Timeline", value: "12-24 Weeks" },
    { label: "Execution Model", value: "Zone-Phased" },
    { label: "Handover Focus", value: "Detail Quality" },
  ],
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, canonicalPath }) => {
  const normalizedTitle = service.title.replace(/\s+/g, " ").trim();
  const conciseFromTitle = normalizedTitle
    .replace(/^Expert\s+/i, "")
    .replace(/\s+in\s+Dubai\b.*$/i, "")
    .trim();
  const isLongTitle = normalizedTitle.length > 52 || normalizedTitle.split(" ").length > 7;
  const displayTitle =
    isLongTitle && service.shortTitle && service.shortTitle.length < normalizedTitle.length
      ? service.shortTitle
      : isLongTitle
        ? conciseFromTitle
        : normalizedTitle;
  const titleSizeClass =
    displayTitle.length > 52 || displayTitle.split(" ").length > 7
      ? "text-3xl md:text-4xl lg:text-5xl"
      : "text-4xl md:text-5xl lg:text-6xl";

  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServicePageData => Boolean(item));

  const stats = serviceQuickStats[service.slug] ?? [];

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] pt-36 pb-24 md:pt-40 md:pb-28">
      <SEO
        title={`${service.title} | Federal Fix`}
        description={service.intro}
        canonical={canonicalPath ? `https://federalfix.com${canonicalPath}` : `https://federalfix.com/services/${service.slug}`}
        ogImage={service.heroImage}
      />
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${service.accentColor}30` }} />
        <div className="absolute bottom-10 right-[8%] h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#0f1118] text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            loading="eager"
            decoding="async"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/45" />

          <div className="relative z-10 grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="animate-[slideUp_0.75s_ease-out_forwards]">
              <a href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                Services
                <ArrowRight className="h-4 w-4" />
              </a>

              <h1 className={`mt-6 max-w-4xl break-words font-black leading-[1.08] [text-wrap:balance] ${titleSizeClass}`}>
                {displayTitle}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: service.accentColor }} />
                  {service.location}
                </span>
                <span
                  className="max-w-full truncate rounded-full border border-white/20 bg-white/10 px-3 py-1 font-semibold md:max-w-[32rem]"
                  style={{ color: service.accentColor }}
                  title={service.primaryKeyword}
                >
                  {service.primaryKeyword}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">{service.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]">
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="/#projects" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black">
                  View Projects
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 animate-[slideUp_0.95s_ease-out_forwards]">
              <div className="col-span-2 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <img
                  src={service.galleryImages[0] ?? service.heroImage}
                  alt={`${service.shortTitle} highlight`}
                  className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <img
                  src={service.galleryImages[1] ?? service.heroImage}
                  alt={`${service.shortTitle} detail 1`}
                  className="h-28 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <img
                  src={service.galleryImages[2] ?? service.heroImage}
                  alt={`${service.shortTitle} detail 2`}
                  className="h-28 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-[slideUp_${0.95 + idx * 0.08}s_ease-out_forwards]`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" style={{ color: service.accentColor }} />
            <h2 className="text-3xl font-black text-gray-900">Project Visual Highlights</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
            {service.galleryImages.map((image, idx) => (
              <article
                key={image}
                className={`group overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] ${
                  idx === 0 ? "md:col-span-7" : idx === 1 ? "md:col-span-5" : idx === 2 ? "md:col-span-5" : "md:col-span-7"
                } animate-[slideUp_${1 + idx * 0.08}s_ease-out_forwards]`}
              >
                <img
                  src={image}
                  alt={`${service.shortTitle} gallery image ${idx + 1}`}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {service.sections.map((section, idx) => (
            <article key={section.title} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className={`grid grid-cols-1 ${idx % 2 === 0 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
                <div className={`relative overflow-hidden ${idx % 2 === 0 ? "order-1" : "order-2"}`}>
                  <img
                    src={service.sectionImages[idx % service.sectionImages.length] ?? service.heroImage}
                    alt={`${service.shortTitle} section ${idx + 1}`}
                    className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
                <div className={`p-7 md:p-8 ${idx % 2 === 0 ? "order-2" : "order-1"}`}>
                  <h2 className="text-3xl font-black text-gray-900">{section.title}</h2>
                  <p className="mt-4 max-w-4xl text-gray-600">{section.content}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-[#bd1920]/40 hover:bg-white">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#bd1920]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-[#fafafa] p-7 md:p-8">
          <h2 className="text-3xl font-black text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
            {service.faqs.map((faq, idx) => (
              <article
                key={faq.question}
                className={`rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#bd1920]/40 animate-[slideUp_${1.1 + idx * 0.08}s_ease-out_forwards]`}
              >
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Related Services</h2>
              <p className="mt-2 text-gray-600">
                Explore connected solutions and build a complete project scope. You can also review our
                <a href="/services" className="mx-1 font-semibold text-[#bd1920] hover:underline">full services catalog</a>
                or jump to
                <a href="/#projects" className="mx-1 font-semibold text-[#bd1920] hover:underline">recent projects</a>
                for live examples.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {related.map((item, idx) => (
              <a
                key={item.slug}
                href={`/services/${item.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] p-5 transition-all hover:-translate-y-1 hover:border-[#bd1920]/50 hover:bg-white animate-[slideUp_${1.2 + idx * 0.08}s_ease-out_forwards]`}
              >
                <img
                  src={item.galleryImages[0] ?? item.heroImage}
                  alt={item.shortTitle}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
                <div className="relative z-10">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#bd1920]">Service</p>
                  <h3 className="mt-2 text-2xl font-black text-gray-900">{item.shortTitle}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.primaryKeyword}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#bd1920]">
                    View Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-[#11141b] p-7 text-white md:p-9">
          <h2 className="text-3xl font-black">Need a tailored scope for your project?</h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            For best results, combine this service with related solutions from our full services catalog and project delivery team.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bd1920] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]">
              Contact Our Team
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black">
              Back to Services
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export const ServiceNotFound: React.FC = () => (
  <section className="bg-white pt-40 pb-24">
    <SEO
      title="Service Not Found - Federal Fix"
      description="Browse our current fit-out and renovation services."
      canonical="https://federalfix.com/services"
      noIndex
    />
    <div className="mx-auto max-w-3xl px-6 text-center">
      <h1 className="text-4xl font-black text-gray-900">Service Not Found</h1>
      <p className="mt-4 text-gray-600">
        The requested service page is not available yet. You can browse all current services below.
      </p>
      <a href="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-7 py-3.5 font-bold text-white">
        View Services
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </section>
);

export default ServiceDetailPage;

export const serviceSlugs = SERVICES_CONTENT.map((service) => service.slug);
