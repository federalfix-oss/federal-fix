import React from "react";
import { ArrowRight, BadgeCheck, Building2, Clock3, ShieldCheck } from "lucide-react";
import SEO from "./SEO";

const AboutPage: React.FC = () => {
  const highlights = [
    {
      title: "Authority-Ready Execution",
      text: "Approvals, documentation, and site delivery coordinated by one accountable team.",
      icon: ShieldCheck,
    },
    {
      title: "Timeline Discipline",
      text: "Structured sequencing and active supervision to keep milestones predictable.",
      icon: Clock3,
    },
    {
      title: "Quality at Handover",
      text: "Practical detailing standards from technical works to final finishes.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="bg-white pt-40 pb-24 md:pt-44 md:pb-28">
      <SEO
        title="About Federal Fix – Dubai Fit-Out Contractor"
        description="Federal Fix is a Dubai-based renovation and fit-out contractor focused on realistic planning and clean execution. Learn more about us."
        canonical="https://federalfix.com/about"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bd1920]/30 bg-[#fff3f3] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#bd1920]">
              <Building2 className="h-4 w-4" />
              About Federal Fix
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
              Fit-Out, Renovation & MEP Execution Built for UAE Standards
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Federal Fix was established in 2014 to deliver reliable fit-out, renovation, and MEP execution across Dubai and the UAE. We support residential, commercial and large-scale developments through disciplined site supervision, structured sequencing, and consistent finishing standards. Our priority is dependable delivery—clear scope control, controlled workmanship, and handovers with minimal snags.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bd1920] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 font-bold text-gray-900 transition-colors hover:border-[#bd1920] hover:text-[#bd1920]"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
            <img
              src="/Images/Commercial-Fitouts-dubai.webp"
              alt="Federal Fix fit-out and renovation project"
              className="h-[360px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-[0_14px_24px_rgba(17,17,17,0.08)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/10 text-[#bd1920]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;





