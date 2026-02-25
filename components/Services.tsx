import React from 'react';
import { CORE_SERVICES, SECONDARY_SERVICES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HOME_GUIDE_LINKS } from '../data/internalLinks';

const Services: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const coreSlugById: Record<string, string> = {
    'shell-core': 'shell-core-fit-out',
    turnkey: 'turnkey-fit-out',
    renovation: 'villa-renovation',
  };

  const serviceVisuals = [
    '/Images/fit-out-projects-1024x538.webp',
    '/Images/civil-works-dubai.webp',
    '/Images/office-renovation.webp',
    '/Images/villa-renovation.webp',
    '/Images/electrical-works.webp',
    '/Images/false-ceiling-in-dubai.webp'
  ];

  return (
    <section id="services" ref={elementRef} className="relative overflow-hidden">
      <div className="relative bg-[#0d0d10] text-white">
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#bd1920]/20 blur-3xl" />
          <div className="absolute bottom-0 right-[12%] h-72 w-72 rounded-full bg-[#bd1920]/15 blur-3xl" />
          <div className="fx-grid absolute inset-0 opacity-25" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff7e83] ${
                isVisible ? 'animate-[fadeIn_0.6s_ease-out_forwards]' : 'opacity-0'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Core Services
            </div>
            <h2
              className={`mt-6 text-4xl font-black leading-tight text-white md:text-6xl ${
                isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'
              }`}
            >
              Fit-out solutions built for,
              <span className="text-[#bd1920]"> quality, and control.</span>
            </h2>
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg ${
                isVisible ? 'animate-[slideUp_0.95s_ease-out_forwards]' : 'opacity-0'
              }`}
            >
              From shell and core through turnkey handover, we run tight scopes with technical
              accuracy and reliable execution.
            </p>
            <div
              className={`mt-6 flex flex-wrap gap-2 ${isVisible ? 'animate-[slideUp_1.02s_ease-out_forwards]' : 'opacity-0'}`}
            >
              {[
                { label: 'Fit-Out', href: '/services' },
                { label: 'Renovations', href: '/services/villa-renovation' },
                { label: 'Annual Maintenance Contracts', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:border-[#bd1920]/70 hover:bg-[#bd1920]/20"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div
              className={`mt-4 flex flex-wrap gap-2 ${isVisible ? 'animate-[slideUp_1.08s_ease-out_forwards]' : 'opacity-0'}`}
            >
              {HOME_GUIDE_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-200 transition-all hover:border-[#bd1920]/70 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CORE_SERVICES.map((service, idx) => (
              <article
                key={service.id}
                className={`group fx-sheen relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-[0_18px_34px_rgba(0,0,0,0.35)] ${
                  isVisible ? `animate-[slideUp_${1 + idx * 0.1}s_ease-out_forwards]` : 'opacity-0'
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={serviceVisuals[idx]}
                    alt={service.title}
                    width={1024}
                    height={538}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-white">
                    {service.number}
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                  <a
                    href={`/services/${coreSlugById[service.id] ?? service.id}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#bd1920]/40 bg-[#bd1920]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ff8f94] transition-all hover:-translate-y-0.5 hover:border-[#bd1920] hover:bg-[#bd1920] hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-[#fbfbfb] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-12">
            <h3
              className={`text-3xl font-black text-gray-900 md:text-4xl ${
                isVisible ? 'animate-[slideUp_1.05s_ease-out_forwards]' : 'opacity-0'
              }`}
            >
              Additional <span className="text-[#bd1920]">Services</span>
            </h3>
            <p
              className={`mt-3 max-w-2xl text-gray-600 ${
                isVisible ? 'animate-[slideUp_1.15s_ease-out_forwards]' : 'opacity-0'
              }`}
            >
              Specialized support packages that complete your project scope.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECONDARY_SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className={`group fx-sheen rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-[0_14px_26px_rgba(17,17,17,0.08)] ${
                  isVisible
                    ? `animate-[slideUp_${1.2 + idx * 0.06}s_ease-out_forwards]`
                    : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/10 text-[#bd1920] transition-colors group-hover:bg-[#bd1920] group-hover:text-white">
                    {service.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Services;




