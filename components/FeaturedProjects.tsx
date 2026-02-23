import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, MapPin } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const [leadProject, ...otherProjects] = PROJECTS;
  const getVisibleTags = (tags: string[]) => tags.slice(0, 2);

  const projectNotes = [
    'Authority-ready commercial fit-out with strict scope controls and phased delivery.',
    'Turnkey workplace execution with schedule-driven procurement and clean handover.',
    'Residential renovation focused on finish quality, utility upgrades, and detailing.',
  ];

  if (!leadProject) {
    return null;
  }

  return (
    <section id="projects" ref={elementRef} className="relative overflow-hidden bg-[#090b10] py-24 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-[#bd1920]/20 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-[#bd1920]/15 blur-3xl" />
        <div className="fx-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
            isVisible ? 'animate-[slideUp_0.7s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ff7b80]">Portfolio</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              Built Work, Not Just Renderings
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300">
              Real project snapshots from Dubai sites where planning, execution, and finishing were delivered under one team.
            </p>
          </div>

          <a href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-bold text-white transition-all hover:border-[#bd1920]/60 hover:bg-[#bd1920]/15 hover:text-[#ff9a9e]">
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <article
          className={`fx-sheen overflow-hidden rounded-[2rem] border border-white/15 bg-[#11141b] shadow-[0_30px_70px_rgba(0,0,0,0.45)] ${
            isVisible ? 'animate-[slideUp_0.85s_ease-out_forwards]' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative h-[360px] overflow-hidden md:h-[430px]">
              <img src={leadProject.image} alt={leadProject.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                {getVisibleTags(leadProject.tags).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                  >
                    {tag}
                  </span>
                ))}
                {leadProject.tags.length > 2 && (
                  <span className="rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    +{leadProject.tags.length - 2}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col p-7 md:p-9">
              <div className="flex items-center gap-2 text-[#ff7b80]">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{leadProject.location}</span>
              </div>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white">{leadProject.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{projectNotes[0]}</p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Delivery Mode</p>
                  <p className="mt-1 text-sm font-semibold text-white">Design + Build</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Client Type</p>
                  <p className="mt-1 text-sm font-semibold text-white">Private</p>
                </div>
              </div>

              <button className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-[#bd1920] px-6 py-3 font-bold text-white transition-colors hover:bg-[#a1151a]">
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, idx) => (
            <article
              key={project.title}
              className={`group fx-sheen h-full overflow-hidden rounded-3xl border border-white/15 bg-[#11141b] transition-all duration-300 hover:-translate-y-1 hover:border-[#bd1920]/50 hover:shadow-[0_18px_34px_rgba(0,0,0,0.4)] ${
                isVisible ? `animate-[slideUp_${0.95 + idx * 0.1}s_ease-out_forwards]` : 'opacity-0'
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {getVisibleTags(project.tags).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex h-[calc(100%-13rem)] flex-col p-6">
                <div className="flex items-center gap-2 text-[#ff7b80]">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">{project.location}</span>
                </div>

                <h4 className="mt-3 text-xl font-black leading-tight text-white">{project.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{projectNotes[idx + 1] ?? 'Delivered with scope clarity and execution control.'}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Private Client</span>
                  <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all group-hover:border-[#bd1920] group-hover:bg-[#bd1920] group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
