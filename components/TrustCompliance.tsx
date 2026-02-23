import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TrustCompliance: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const items = [
    {
      title: "Dubai Municipality Licensed",
      text: "Licensed contractor operating in Dubai with compliant project delivery workflows.",
      logo: "/logos/dubai-municipality-logo.png",
      alt: "Dubai Municipality logo",
    },
    {
      title: "ISO Certified",
      text: "Two active ISO certifications supporting quality, safety, and process discipline.",
      logo: "/logos/iso-logo.png",
      alt: "ISO certification logo",
    },
    {
      title: "SIRA Certified",
      text: "Execution and coordination aligned with required security and authority protocols.",
      logo: "/logos/sira-logo.png",
      alt: "SIRA logo",
    },
  ];

  return (
    <section ref={elementRef} className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="fx-grid absolute inset-0 opacity-30" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <p
            className={`text-xs font-bold uppercase tracking-[0.2em] text-[#bd1920] ${
              isVisible ? "animate-[fadeIn_0.6s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            Compliance And Trust
          </p>
          <h3
            className={`mt-3 text-3xl font-black text-gray-900 md:text-4xl ${
              isVisible ? "animate-[slideUp_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            Verified credentials clients can rely on
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item, idx) => {
            return (
              <article
                key={item.title}
                className={`fx-sheen rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-lg ${
                  isVisible ? `animate-[slideUp_${0.95 + idx * 0.08}s_ease-out_forwards]` : "opacity-0"
                }`}
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                  <img src={item.logo} alt={item.alt} className="h-full w-full object-contain" loading="lazy" />
                </span>
                <h4 className="mt-4 text-center text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-center text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
