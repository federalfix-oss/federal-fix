import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const clientLogos = Array.from({ length: 42 }, (_, i) => `/Clients/client-${i + 1}.png`);
const firstRow = clientLogos.slice(0, 21);
const secondRow = clientLogos.slice(21);

const Clients: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-6 h-64 w-64 rounded-full bg-[#bd1920]/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-[#bd1920]/10 blur-3xl" />
        <div className="fx-grid absolute inset-0 opacity-30" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p
            className={`text-xs font-bold uppercase tracking-[0.24em] text-[#bd1920] ${
              isVisible ? "animate-[fadeIn_0.6s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            Clients
          </p>
          <h3
            className={`mt-3 text-3xl font-black text-white md:text-4xl ${
              isVisible ? "animate-[slideUp_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            <span className="text-gray-900">Trusted by brands across</span> <span className="text-[#bd1920]">Dubai</span>
          </h3>
        </div>

        <div
          className={`rounded-3xl border border-gray-200 bg-white/90 p-5 shadow-[0_20px_55px_rgba(17,17,17,0.08)] backdrop-blur-sm md:p-6 ${
            isVisible ? "animate-[slideUp_0.95s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          <LogoRail logos={firstRow} reverse={false} />
          <LogoRail logos={secondRow} reverse />
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const LogoRail: React.FC<{ logos: string[]; reverse?: boolean }> = ({ logos, reverse = false }) => (
  <div className="group relative overflow-hidden py-2">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
    <div
      className="flex w-max gap-3"
      style={{
        animation: `logoMarquee ${reverse ? "52s" : "46s"} linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...logos, ...logos].map((logo, idx) => (
        <div
          key={`${logo}-${idx}`}
          className="fx-sheen flex h-[4.5rem] w-40 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-[#fcfcfc] px-4 transition-all duration-300 hover:border-[#bd1920]/50 hover:bg-white hover:shadow-md"
        >
          <img
            src={logo}
            alt={`Client logo ${idx + 1}`}
            className="max-h-9 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Clients;
