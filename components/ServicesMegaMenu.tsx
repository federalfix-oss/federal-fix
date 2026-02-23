import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Hammer, Wrench, Zap, Flame, Palette } from 'lucide-react';
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
  Waterproofing: '/specialty-safety-technical-services/',
  'Compliance Support': '/specialty-safety-technical-services/',
  'Safety Installation': '/specialty-safety-technical-services/',
  'Authority Coordination': '/specialty-safety-technical-services/',
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

  const toAnchor = (value: string) =>
    value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const getServiceHref = (item: string, category: string) => {
    const importedHref = IMPORTED_PAGE_LINKS[item];
    if (importedHref) return importedHref;

    const mappedSlug = SERVICE_NAME_TO_SLUG[item];
    if (mappedSlug) return `/services/${mappedSlug}`;
    return `/services#${toAnchor(category)}`;
  };

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
            className="absolute left-1/2 top-full -translate-x-1/2 z-50 w-screen max-w-6xl rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl backdrop-blur-xl md:p-10"
          >
            {/* Hover bridge to prevent accidental close while crossing the gap */}
            <span className="pointer-events-none absolute -top-2 left-0 right-0 h-2" />

            {/* Header */}
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#bd1920] mb-2">
                Our Services
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive fit-out, renovation, and MEP solutions for Dubai
              </p>
            </div>

            {/* Services Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.category}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-lg bg-[#bd1920]/10">
                        <Icon size={18} className="text-[#bd1920]" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">
                        {service.category}
                      </h4>
                    </div>

                    {/* Services List */}
                    <div className="space-y-2.5">
                      {service.items.map((item) => (
                        <a
                          key={item}
                          href={getServiceHref(item, service.category)}
                          className="text-gray-700 text-xs md:text-sm hover:text-[#bd1920] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#bd1920] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-gray-600 text-xs md:text-sm max-w-xs">
                Need a custom solution? We are ready to help.
              </p>
              <a
                href="/contact"
                className="bg-[#bd1920] text-white px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#a1151a] transition-all transform hover:scale-105 whitespace-nowrap"
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
