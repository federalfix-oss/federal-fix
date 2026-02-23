
import React from 'react';
import { INDUSTRIES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Industries: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="industries" ref={elementRef} className="py-32 relative bg-gradient-to-b from-black via-black to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bd1920]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#bd1920]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="fx-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#bd1920]/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#bd1920] rounded-full" />
              <span className="text-sm font-bold text-[#bd1920] tracking-[0.2em] uppercase">Sectors</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Industries We <span className="text-[#bd1920]">Serve</span>
            </h3>
            <p className="text-lg text-gray-400">Specialized solutions across diverse sectors</p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={idx}
              className={`group relative ${
                isVisible ? `animate-[slideUp_${0.5 + idx * 0.08}s_ease-out_forwards]` : 'opacity-0'
              }`}
            >
              {/* Gradient Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd1920]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Card */}
              <div className="fx-sheen relative bg-gradient-to-br from-black to-gray-950 p-8 rounded-2xl border border-gray-800 group-hover:border-[#bd1920]/50 transition-all duration-500 flex flex-col items-center text-center gap-5 h-full backdrop-blur-sm">
                {/* Icon Container */}
                <div className="relative">
                  {/* Icon Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bd1920] to-red-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

                  {/* Icon */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#bd1920]/20 to-[#bd1920]/5 border border-[#bd1920]/30 flex items-center justify-center text-[#bd1920] group-hover:bg-[#bd1920] group-hover:text-white group-hover:border-[#bd1920] transition-all duration-500 group-hover:scale-110">
                    {React.cloneElement(industry.icon as React.ReactElement, { size: 32 })}
                  </div>
                </div>

                {/* Label */}
                <span className="font-bold text-sm uppercase tracking-wider text-gray-200 leading-tight group-hover:text-white transition-colors">
                  {industry.name}
                </span>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#bd1920] to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
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

export default Industries;
