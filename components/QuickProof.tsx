import React from "react";
import {
  Building2,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const QuickProof: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const highlights = [
    {
      title: "Authority-Ready",
      text: "Seamless coordination with all Dubai authorities for approvals",
    },
    {
      title: "On-Time Delivery",
      text: "Strict project schedules with transparent progress tracking",
    },
    {
      title: "Quality Assured",
      text: "Premium materials and expert craftsmanship in every detail",
    },
  ];

  const proofImages = [
    {
      src: "/Images/villa-renovation.webp",
      label: "Villa Renovation",
    },
    {
      src: "/Images/Commercial-Fitouts-dubai.webp",
      label: "Office Fit-Out",
    },
    {
      src: "/Images/false-ceiling-in-dubai.webp",
      label: "Interior Finishes",
    },
  ];

  return (
    <section
      id="about"
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f5f4] via-[#fff9f9] to-white py-24 md:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-28 left-[14%] h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl" />
        <div className="absolute -bottom-24 right-[10%] h-80 w-80 rounded-full bg-[#bd1920]/10 blur-3xl" />
        <div className="fx-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 md:mb-16">
          <a
            href="/about"
            className={`inline-flex items-center gap-2 rounded-full border border-[#bd1920]/35 bg-[#bd1920]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e35c62] ${
              isVisible
                ? "animate-[fadeIn_0.6s_ease-out_forwards]"
                : "opacity-0"
            }`}
          >
            <Building2 className="h-4 w-4" />
            About Us
          </a>
          <h2
            className={`mt-6 max-w-5xl text-4xl font-black leading-tight text-gray-900 md:text-6xl ${
              isVisible
                ? "animate-[slideUp_0.8s_ease-out_forwards]"
                : "opacity-0"
            }`}
          >
            Built for clients who want sharp execution,
            <span className="text-[#bd1920]"> not excuses.</span>
          </h2>
          <p
            className={`mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg ${
              isVisible
                ? "animate-[slideUp_0.9s_ease-out_forwards]"
                : "opacity-0"
            }`}
          >
            We run fit-out and renovation projects in Dubai with disciplined
            planning, transparent communication, and finish quality that holds
            up at handover.
          </p>
        </div>

        <div
          className={`rounded-[2rem] border border-[#bd1920]/15 bg-white/85 p-4 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur-sm md:p-6 ${
            isVisible
              ? "animate-[slideUp_0.95s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <article className="group fx-sheen relative overflow-hidden rounded-3xl">
              <img
                src={proofImages[0].src}
                alt={proofImages[0].label}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                On-Site Execution
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="max-w-xl text-2xl font-black leading-tight text-white md:text-3xl">
                  Controlled timelines and handover-ready detailing from day
                  one.
                </h3>
              </div>
            </article>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {proofImages.slice(1).map((item, idx) => (
                <article
                  key={item.label}
                  className={`group fx-sheen relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 ${
                    isVisible
                      ? `animate-[slideUp_${1.05 + idx * 0.08}s_ease-out_forwards]`
                      : "opacity-0"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-800">
                    {item.label}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20">
          <div
            className={`text-center ${isVisible ? "animate-[fadeIn_0.9s_ease-out_forwards]" : "opacity-0"}`}
          >
            <h3 className={`mb-12  text-3xl font-black leading-tight text-gray-900 md:text-6xl ${
              isVisible
                ? "animate-[slideUp_0.8s_ease-out_forwards]"
                : "opacity-0"
            }`}>Why Choose <span className="text-[#bd1920]">Federal Fix? </span></h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className={`group fx-sheen rounded-2xl border border-gray-200 bg-white p-7 text-left shadow-[0_12px_28px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-[0_16px_34px_rgba(189,25,32,0.12)] ${
                    isVisible
                      ? `animate-[slideUp_${0.95 + idx * 0.1}s_ease-out_forwards]`
                      : "opacity-0"
                  }`}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/10 text-[#bd1920] transition-colors group-hover:bg-[#bd1920] group-hover:text-white">
                    <span className="text-xl font-black">&#10003;</span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickProof;




