
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-black pt-20">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
          src="https://www.youtube.com/embed/bGiqfPAwh4A?autoplay=1&mute=1&loop=1&playlist=bGiqfPAwh4A&controls=0&modestbranding=1&rel=0"
          title="Federal Fix - Dubai Renovation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-[5] bg-[linear-gradient(110deg,rgba(0,0,0,0.88)_12%,rgba(0,0,0,0.58)_54%,rgba(0,0,0,0.36)_100%)]" />

      {/* Floating Elements */}
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-[#bd1920]/10 opacity-50 blur-3xl animate-[floatGentle_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-red-500/5 opacity-30 blur-3xl animate-[driftX_12s_ease-in-out_infinite]" />
      <div className="fx-grid absolute inset-0 z-[6] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 z-[6] h-40 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-8 inline-flex -translate-y-4 cursor-default items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 opacity-0 backdrop-blur-md transition-colors hover:border-[#bd1920]/50 animate-[fadeIn_0.5s_ease-out_forwards]">
            <Sparkles className="h-4 w-4 text-[#bd1920]" />
            <span className="text-xs font-bold tracking-widest uppercase">Premium Dubai Contractor</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-[1.02] animate-[slideUp_0.8s_ease-out_forwards] md:text-7xl">
            Renovation & Fit-Out
            <span className="ms-5 bg-gradient-to-r from-[#bd1920] to-red-300 bg-clip-text text-transparent animate-[slideUp_0.8s_ease-out_forwards]">
              in Dubai
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-200 animate-[slideUp_1s_ease-out_forwards] md:text-xl">
            Shell & core to turnkey delivery for offices, villas, and commercial spaces. Expertly executed, authority-ready.
          </p>

          <div className="mb-9 flex flex-col items-center gap-4 animate-[slideUp_1.2s_ease-out_forwards] sm:flex-row">
            <a href="/contact" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#bd1920] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/50 transition-all hover:-translate-y-0.5 hover:bg-[#a1151a] hover:shadow-xl hover:shadow-red-900/50 active:scale-95 sm:w-auto">
              Request Site Visit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services" className="w-full rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black active:scale-95 sm:w-auto">
              Explore Services
            </a>
          </div>

          <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium tracking-wide text-gray-300 animate-[fadeIn_1.5s_ease-out_forwards]">
            <span className="flex items-center gap-2 text-white">
              <svg className="h-3 w-3 text-[#bd1920]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Authority-ready execution
            </span>
            <span className="flex items-center gap-2 text-white">
              <svg className="h-3 w-3 text-[#bd1920]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Clear scope
            </span>
            <span className="flex items-center gap-2 text-white">
              <svg className="h-3 w-3 text-[#bd1920]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              On-time delivery
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
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

export default Hero;
