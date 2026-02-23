import React from "react";
import { STATS } from "../constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCounterAnimation } from "../hooks/useCounterAnimation";

const Stats: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bd1920]/10 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bd1920]/5 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="fx-grid absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bd1920] mb-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Our Track Record
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 animate-[slideUp_0.8s_ease-out_forwards]">
            Proven Excellence in Execution
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-[slideUp_1s_ease-out_forwards]">
            Years of experience delivering exceptional results for hundreds of
            satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <StatCard
              key={idx}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              isVisible={isVisible}
              delay={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{
  number: number;
  label: string;
  suffix: string;
  isVisible: boolean;
  delay: number;
}> = ({ number, label, suffix, isVisible, delay }) => {
  const count = useCounterAnimation(number, isVisible, 2500);
  const isAreaStat = label === "Total Area Delivered" && suffix.toLowerCase().includes("sqm");
  const primarySuffix = isAreaStat ? suffix.replace(/\s*sqm/i, "").trim() : suffix;

  return (
    <div
      className={`relative group h-full ${isVisible ? `animate-[slideUp_${0.5 + delay * 0.1}s_ease-out_forwards]` : "opacity-0"}`}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-[#bd1920]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="fx-sheen relative flex h-full min-h-[230px] flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center backdrop-blur transition-all duration-500 group-hover:border-[#bd1920]/50">
        <div className="mb-4 flex min-h-[84px] items-center justify-center">
          <div className="whitespace-nowrap text-5xl font-black leading-none text-[#bd1920] transition-transform duration-500 group-hover:scale-110 lg:text-6xl">
            {count}
            <span className="ml-1 text-[0.62em] align-middle">{primarySuffix}</span>
          </div>
        </div>
        <p className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">
          {isAreaStat ? `sqm ${label}` : label}
        </p>
      </div>
    </div>
  );
};

export default Stats;
