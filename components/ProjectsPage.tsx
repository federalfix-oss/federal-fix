import React from 'react';
import SEO from './SEO';
import { PROJECTS } from '../constants';
import { ArrowRight, MapPin } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <section className="bg-white pb-24 pt-40 md:pb-28 md:pt-44">
      <SEO
        title="Projects and Case Studies - Federal Fix"
        description="Browse our portfolio of fit-out and renovation projects across Dubai."
        canonical="https://federalfix.com/projects"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900">Our Projects</h1>
          <p className="mt-4 text-gray-600">Real work delivered by our team across Dubai.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((proj) => (
            <article
              key={proj.slug}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <a href={`/projects/${proj.slug}`} className="block overflow-hidden rounded-t-2xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="p-6">
                <a href={`/projects/${proj.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-[#bd1920]">
                    {proj.title}
                  </h2>
                </a>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{proj.location}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <a
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#bd1920]"
                  >
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
