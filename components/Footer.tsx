import React from 'react';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceLinks = [
  { label: 'Shell & Core Fit-Out', href: '/services/shell-core-fit-out' },
  { label: 'Turnkey Solutions', href: '/services/turnkey-fit-out' },
  { label: 'Villa Renovations', href: '/services/villa-renovation' },
  { label: 'MEP Services', href: '/services#mep-services' },
  { label: 'All Services', href: '/services' },
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/federalfix/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/federalfix/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Federalfixae', label: 'Facebook' },
];

const Footer: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <footer
      ref={elementRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#050608] pb-10 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(189,25,32,0.24),transparent_38%),radial-gradient(circle_at_82%_10%,rgba(255,102,0,0.14),transparent_34%),radial-gradient(circle_at_50%_120%,rgba(189,25,32,0.18),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl md:p-8 ${
            isVisible ? 'animate-[slideUp_0.7s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff5c62]">
                Federal Fix Dubai
              </p>
              <h3 className="max-w-2xl text-xl font-semibold leading-tight text-white md:text-2xl">
                Building high-performance interiors for offices, villas, and commercial spaces.
              </h3>
            </div>
            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a1151a] hover:shadow-[0_12px_30px_rgba(189,25,32,0.35)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 xl:grid-cols-12">
          <div className={`xl:col-span-4 ${isVisible ? 'animate-[slideUp_0.75s_ease-out_forwards]' : 'opacity-0'}`}>
            <a href="/" className="inline-flex items-center">
              <img src="/logos/logo-light.svg" alt="Federal Fix" className="h-10 w-auto" />
            </a>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-300">
              Dubai&apos;s premier fit-out and renovation contractor. We deliver shell & core, turnkey,
              MEP, and custom interior execution with precision.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd1920] hover:bg-[#bd1920] hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={`xl:col-span-2 ${isVisible ? 'animate-[slideUp_0.85s_ease-out_forwards]' : 'opacity-0'}`}>
            <h5 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">Services</h5>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 transition-colors hover:text-[#ff5c62]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`xl:col-span-3 ${isVisible ? 'animate-[slideUp_0.95s_ease-out_forwards]' : 'opacity-0'}`}>
            <h5 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">Quick Links</h5>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 transition-colors hover:text-[#ff5c62]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`xl:col-span-3 ${isVisible ? 'animate-[slideUp_1.05s_ease-out_forwards]' : 'opacity-0'}`}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h5 className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">Contact Us</h5>

              <div className="space-y-4 text-gray-200">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c62]" />
                  1110, Clover Bay Tower, Al Abraj St - Business Bay, P.O.Box 72177, Dubai
                </p>
                <a
                  href="tel:+971543004006"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-all hover:border-[#bd1920]/80 hover:bg-[#bd1920]/10"
                >
                  <Phone className="h-4 w-4 text-[#ff5c62]" />
                  <span className="text-sm font-semibold">+971 54 300 4006</span>
                </a>
                <a
                  href="mailto:info@federalfix.com"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white transition-all hover:border-[#bd1920]/80 hover:bg-[#bd1920]/10"
                >
                  <Mail className="h-4 w-4 text-[#ff5c62]" />
                  <span className="text-sm font-semibold">info@federalfix.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.2em] text-gray-500 md:flex-row md:items-center md:justify-between ${
            isVisible ? 'animate-[fadeIn_1s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <p>© {new Date().getFullYear()} Federal Fix. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="transition-colors hover:text-[#ff5c62]">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-[#ff5c62]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

