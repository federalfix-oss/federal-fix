import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ServicesMegaMenu from "./ServicesMegaMenu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";
  const isStaticPage =
    currentPath === "/about" || currentPath === "/contact" || currentPath.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
  ];
  const activePath = currentPath === "/" ? "/#projects" : currentPath;

  const mobileLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 animate-[slideDown_0.6s_ease-out_forwards] transition-all duration-300 ${
        isScrolled || isStaticPage ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 md:px-5 ${
            isScrolled || isStaticPage
              ? "border-gray-200/90 bg-white/95 shadow-[0_10px_28px_rgba(17,17,17,0.08)] backdrop-blur-xl"
              : "border-white/20 bg-black/25 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={
                isScrolled
                  ? "/logos/Logo.svg"
                  : "/logos/logo-light.svg"
              }
              alt="Federal Fix"
              className="h-16 transition-all duration-300"
            />
          </a>

          {/* Desktop Nav Links - Centered */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {navLinks.slice(0, 1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled || isStaticPage
                    ? "text-gray-700 hover:text-[#bd1920]"
                    : "text-white hover:text-[#bd1920]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#bd1920] to-red-500 transition-all duration-300 ${
                    activePath === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
            <ServicesMegaMenu isScrolled={isScrolled || isStaticPage} />
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled || isStaticPage
                    ? "text-gray-700 hover:text-[#bd1920]"
                    : "text-white hover:text-[#bd1920]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#bd1920] to-red-500 transition-all duration-300 ${
                    activePath === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#bd1920]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a1151a] hover:shadow-xl hover:shadow-[#bd1920]/25 active:scale-95">
              Get a Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-xl p-2.5 transition-colors hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className={isScrolled || isStaticPage ? "text-black" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={isScrolled || isStaticPage ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[calc(100%+0.4rem)] left-0 right-0 overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-xl">
            <div className="px-6 py-6 flex flex-col gap-2">
              {mobileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-[#bd1920]/10 hover:text-[#bd1920] transition-all duration-300"
                  onClick={handleMobileMenuClose}
                >
                  {link.name}
                </a>
              ))}
              <a href="/contact" className="bg-[#bd1920] text-white px-6 py-3 rounded-lg font-semibold w-full mt-4 hover:bg-[#a1151a] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-lg">
                Get a Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
