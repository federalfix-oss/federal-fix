import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-12 h-56 w-56 rounded-full bg-[#bd1920]/8 blur-3xl animate-[floatGentle_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-[10%] h-64 w-64 rounded-full bg-[#bd1920]/10 blur-3xl animate-[driftX_11s_ease-in-out_infinite]" />
        <div className="fx-grid absolute inset-0 opacity-35" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span
            className={`inline-block rounded-full border border-[#bd1920]/30 bg-[#fff3f3] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#bd1920] ${
              isVisible ? 'animate-[fadeIn_0.6s_ease-out_forwards]' : 'opacity-0'
            }`}
          >
            Our Process
          </span>
          <h2
            className={`mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-gray-900 md:text-6xl ${
              isVisible ? 'animate-[slideUp_0.75s_ease-out_forwards]' : 'opacity-0'
            }`}
          >
            6 clear steps from kickoff to handover.
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg ${
              isVisible ? 'animate-[slideUp_0.9s_ease-out_forwards]' : 'opacity-0'
            }`}
          >
            A practical structure that keeps scope, timelines, and quality under control.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((item, idx) => (
            <article
              key={item.step}
              className={`fx-sheen relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/40 hover:shadow-[0_12px_24px_rgba(17,17,17,0.06)] ${
                isVisible ? `animate-[slideUp_${1 + idx * 0.07}s_ease-out_forwards]` : 'opacity-0'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#bd1920] via-red-400 to-transparent" />
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#bd1920] text-sm font-black text-white">
                  {item.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-[#bd1920]">{item.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className={`fx-sheen mt-10 rounded-2xl border border-gray-200 bg-[#fafafa] p-6 md:p-8 ${
            isVisible ? 'animate-[slideUp_1.3s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-900">Ready to start your project?</h3>
              <p className="mt-2 text-gray-600">Book a site visit and get a clear scope with timeline guidance.</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bd1920] px-7 py-3 font-bold text-white transition-all hover:bg-[#a1151a]">
              Request Site Visit
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
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

export default Process;
