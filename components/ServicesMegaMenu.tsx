import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Hammer, Wrench, Zap, Flame, Palette, ShieldCheck } from 'lucide-react';
import { SERVICE_NAME_TO_SLUG } from '../data/services';

const IMPORTED_PAGE_LINKS: Record<string, string> = {
  'Gypsum Partitions & Drywall': '/gypsum-board-installation-dubai/',
  'False Ceiling Works': '/false-ceiling-installation-and-repair-in-dubai/',
  'Joinery & Carpentry': '/carpentry-fixing/',
  'Flooring Installation': '/floor-and-wall-tiles-fixing-in-dubai/',
  'Wall Finishes': '/painting-services/',
  'Decorative Works': '/wallpaper-fixing/',
  'Apartment Renovation': '/home-renovation/',
  'Kitchen Renovation': '/home-renovation/',
  'Bathroom Renovation': '/home-renovation/',
  'Villa Renovation': '/services/villa-renovation',
  'Office Renovation': '/building-refurbishment/',
  'Shop & Retail Renovation': '/fit-out-projects/',
  'HVAC Installation': '/mechanical-hvac/',
  'Electrical Works': '/electrical-maintenance-services/',
  'Power & Lighting': '/electrical-and-it/',
  'Plumbing Installation': '/plumbing-and-water/',
  'MEP Commissioning': '/mep-works/',
  'System Testing': '/specialty-safety-technical-services/',
  'Structural Modifications': '/structural-construction-maintenance/',
  'Block Work & Masonry': '/civil-works/',
  'Concrete Repairs': '/civil-works/',
  'Floor Screeding': '/building-refurbishment/',
  'Wall Openings': '/civil-works/',
  'Civil Works': '/civil-works/',
  'Fire Alarm Systems': '/specialty-safety-technical-services/',
  'Firefighting Systems': '/firefighting-system-maintenance-in-dubai/',
  'Waterproofing': '/specialty-safety-technical-services/',
  'Compliance Support': '/specialty-safety-technical-services/',
  'Safety Installation': '/specialty-safety-technical-services/',
  'Authority Coordination': '/specialty-safety-technical-services/',
};

const CATEGORY_SECTION_IDS: Record<string, string> = {
  'Fit-Out Services': 'fit-out-services',
  'Interior Works': 'interior-works',
  'Renovation & Refurbishment': 'renovation-refurbishment',
  'MEP Services': 'mep-services',
  'Smart Systems & Security': 'smart-systems-security',
  'Structural Works': 'structural-works',
  'Safety & Compliance': 'safety-compliance',
};

const ServicesMegaMenu: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  const closeMenuWithDelay = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  const services = [
    {
      category: 'Fit-Out Services',
      icon: Hammer,
      items: [
        'Shell & Core Fit-Out',
        'Office Fit-Out',
        'Villa Fit-Out',
        'Retail & Showroom Fit-Out',
        'Restaurant & Cafe Fit-Out',
        'Full Turnkey Execution'
      ]
    },
    {
      category: 'Interior Works',
      icon: Palette,
      items: [
        'Gypsum Partitions & Drywall',
        'False Ceiling Works',
        'Joinery & Carpentry',
        'Flooring Installation',
        'Wall Finishes',
        'Decorative Works'
      ]
    },
    {
      category: 'Renovation & Refurbishment',
      icon: Wrench,
      items: [
        'Villa Renovation',
        'Apartment Renovation',
        'Kitchen Renovation',
        'Bathroom Renovation',
        'Office Renovation',
        'Shop & Retail Renovation'
      ]
    },
    {
      category: 'MEP Services',
      icon: Zap,
      items: [
        'HVAC Installation',
        'Electrical Works',
        'Power & Lighting',
        'Plumbing Installation',
        'MEP Commissioning',
        'System Testing'
      ]
    },
    {
      category: 'Smart Systems & Security',
      icon: ShieldCheck,
      items: [
        'Audio Visuals',
        'Smart Home Solutions',
        'Structured Cabling',
        'CCTV',
        'Telephony Systems',
        'Gate Barriers',
        'Wi-Fi & Network Setup',
        'Access Control',
        'IPTV Installation'
      ]
    },
    {
      category: 'Structural Works',
      icon: Hammer,
      items: [
        'Structural Modifications',
        'Block Work & Masonry',
        'Concrete Repairs',
        'Floor Screeding',
        'Wall Openings',
        'Civil Works'
      ]
    },
    {
      category: 'Safety & Compliance',
      icon: Flame,
      items: [
        'Fire Alarm Systems',
        'Firefighting Systems',
        'Waterproofing',
        'Compliance Support',
        'Safety Installation',
        'Authority Coordination'
      ]
    }
  ];

  const DESKTOP_PREVIEW_COUNT = 5;

  const getServiceHref = (item: string, category: string) => {
    const mappedSlug = SERVICE_NAME_TO_SLUG[item];
    if (mappedSlug) return `/services/${mappedSlug}`;
    const importedHref = IMPORTED_PAGE_LINKS[item];
    if (importedHref) return importedHref;
    return `/services#${CATEGORY_SECTION_IDS[category] ?? 'fit-out-services'}`;
  };

  const getCategoryHref = (category: string) =>
    `/services#${CATEGORY_SECTION_IDS[category] ?? 'fit-out-services'}`;

  return (
    <>
      {/* Desktop Mega Menu */}
      <div
        className="hidden lg:block relative"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenuWithDelay}
      >
        <button
          onMouseEnter={openMenu}
          onFocus={openMenu}
          onBlur={closeMenuWithDelay}
          className={`text-sm font-medium transition-all duration-300 relative group flex items-center gap-2 ${
            isScrolled ? 'text-gray-700 hover:text-[#bd1920]' : 'text-white hover:text-[#bd1920]'
          }`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          Services
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#bd1920] to-red-600 group-hover:w-full transition-all duration-300" />
        </button>

        {/* Desktop Mega Menu Dropdown */}
        {isOpen && (
          <div
            onMouseEnter={openMenu}
            onMouseLeave={closeMenuWithDelay}
            className="absolute left-1/2 top-full z-50 w-screen max-w-6xl -translate-x-1/2 rounded-3xl border border-gray-200/90 bg-white/95 p-6 shadow-[0_34px_80px_rgba(16,24,40,0.18)] backdrop-blur-xl md:p-7"
          >
            {/* Hover bridge to prevent accidental close while crossing the gap */}
            <span className="pointer-events-none absolute -top-2 left-0 right-0 h-2" />

            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-gray-200 pb-5">
              <div>
                <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#bd1920]">
                Our Services
                </h3>
                <p className="text-sm text-gray-600">
                  Explore service categories and jump straight to the right scope page.
                </p>
              </div>
              <a
                href="/services"
                className="inline-flex shrink-0 items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-[#bd1920]/40 hover:bg-white hover:text-[#bd1920]"
              >
                View All Services
              </a>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.category}
                    className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-[#fcfcfd] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd1920]/35 hover:shadow-[0_14px_34px_rgba(17,17,17,0.08)]"
                  >
                    {/* Category Header */}
                    <div className="mb-3 flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-lg bg-[#bd1920]/10 p-2">
                          <Icon size={15} className="text-[#bd1920]" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-900">
                          {service.category}
                        </h4>
                      </div>
                      <a
                        href={getCategoryHref(service.category)}
                        className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#bd1920] transition-colors hover:text-[#a1151a]"
                      >
                        Browse
                      </a>
                    </div>

                    {/* Services List */}
                    <div className="space-y-1.5">
                      {service.items.slice(0, DESKTOP_PREVIEW_COUNT).map((item) => (
                        <a
                          key={item}
                          href={getServiceHref(item, service.category)}
                          className="flex items-center gap-2 rounded-md px-1 py-0.5 text-xs text-gray-700 transition-all duration-300 hover:bg-[#bd1920]/5 hover:text-[#bd1920]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#bd1920]/70" />
                          {item}
                        </a>
                      ))}
                      {service.items.length > DESKTOP_PREVIEW_COUNT && (
                        <a
                          href={getCategoryHref(service.category)}
                          className="inline-flex pt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#bd1920] hover:text-[#a1151a]"
                        >
                          More in {service.category}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs text-gray-600">
                Need a bundled scope across fit-out, MEP, interiors, and smart systems?
              </p>
              <a
                href="/contact"
                className="whitespace-nowrap rounded-full bg-[#bd1920] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#a1151a]"
              >
                Get a Consultation
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Services Dropdown */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-[#bd1920]/10 hover:text-[#bd1920] transition-all duration-300 w-full text-left flex items-center justify-between"
        >
          Services
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isMobileOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Mobile Services List */}
        {isMobileOpen && (
          <div className="bg-white rounded-lg mt-2 overflow-hidden">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={service.category} className={idx !== services.length - 1 ? 'border-b border-gray-200' : ''}>
                  <div className="px-4 py-3">
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-[#bd1920]/10">
                        <Icon size={16} className="text-[#bd1920]" />
                      </div>
                      <h5 className="font-semibold text-gray-900 text-sm">
                        {service.category}
                      </h5>
                    </div>

                    {/* Services List */}
                    <div className="space-y-2 ml-10">
                      {service.items.map((item) => (
                        <a
                          key={item}
                          href={getServiceHref(item, service.category)}
                          className="text-gray-700 text-xs hover:text-[#bd1920] transition-all duration-300 block"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          - {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile CTA */}
            <div className="px-4 py-4 border-t border-gray-200 bg-white">
              <a
                href="/contact"
                className="bg-[#bd1920] text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#a1151a] transition-all w-full text-center block"
                onClick={() => setIsMobileOpen(false)}
              >
                Get a Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesMegaMenu;
