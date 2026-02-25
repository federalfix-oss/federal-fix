import React from "react";
import { ArrowUpRight, Camera, Eye, Layers3 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const VisualShowcase: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const visuals = [
    {
      src: '/Services/full-fitout-hero.webp',
      label: "Premium Materials",
      size: "md:col-span-7 md:row-span-2",
      width: 1024,
      height: 538,
    },
    {
      src: "/Services/Custom-Finishes.webp",
      label: "Custom Finishes",
      size: "md:col-span-5",
      width: 1070,
      height: 617,
    },
    {
      src: "/Services/Quality-Control.webp",
      label: "On-Site Quality Control",
      size: "md:col-span-5",
      width: 574,
      height: 331,
    },
  ];

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff6f6] to-[#fffdfd] py-24 md:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-6 h-60 w-60 rounded-full bg-[#bd1920]/10 blur-3xl animate-[floatGentle_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl animate-[driftX_12s_ease-in-out_infinite]" />
        <div className="fx-grid absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className={`inline-flex items-center gap-2 rounded-full border border-[#bd1920]/25 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#bd1920] ${
                isVisible ? "animate-[fadeIn_0.65s_ease-out_forwards]" : "opacity-0"
              }`}
            >
              <Camera className="h-4 w-4" />
              Visual Proof
            </p>
            <h2
              className={`mt-5 max-w-3xl text-4xl font-black leading-tight text-gray-900 md:text-5xl ${
                isVisible ? "animate-[slideUp_0.8s_ease-out_forwards]" : "opacity-0"
              }`}
            >
              Details you can see
              <span className="text-[#bd1920]"> before handover.</span>
            </h2>
          </div>

          <div
            className={`rounded-2xl border border-gray-200 bg-white/90 px-5 py-4 shadow-sm ${
              isVisible ? "animate-[slideUp_0.95s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <Eye className="h-4 w-4 text-[#bd1920]" />
              Site progress visuals, finish close-ups, and delivery snapshots.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {visuals.map((item, idx) => (
            <article
              key={item.label}
              className={`group fx-sheen relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_16px_36px_rgba(17,17,17,0.08)] ${
                item.size
              } ${
                idx === 0 ? "h-[420px] md:h-[428px]" : "h-[210px] md:h-[206px]"
              } ${isVisible ? `animate-[slideUp_${1 + idx * 0.08}s_ease-out_forwards]` : "opacity-0"}`}
            >
              <img
                src={item.src}
                alt={item.label}
                width={item.width}
                height={item.height}
                className={`block w-full object-cover transition-transform duration-700 ${
                  idx === 0
                    ? "h-full group-hover:scale-105"
                    : "h-full scale-[1.1] group-hover:scale-[1.16]"
                }`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {item.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 ${
            isVisible ? "animate-[slideUp_1.2s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {[
            "Material boards approved before procurement",
            "Supervision with photo-based updates",
            "Finishing quality checks before final handover",
          ].map((point) => (
            <div
              key={point}
              className="fx-sheen flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#bd1920]/10 text-[#bd1920]">
                <Layers3 className="h-4 w-4" />
              </span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
