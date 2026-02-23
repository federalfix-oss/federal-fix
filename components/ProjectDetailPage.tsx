import React from 'react';
import SEO from './SEO';
import { getProjectBySlug } from '../constants';

const ProjectDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const project = getProjectBySlug(slug);
  if (!project) {
    return (
      <section className="bg-white pt-40 pb-24 text-center">
        <SEO
          title="Project Not Found - Federal Fix"
          description="Requested project details could not be located."
          canonical="https://federalfix.com/projects"
          noIndex
        />
        <h1 className="text-4xl font-black text-gray-900">Project Not Found</h1>
        <p className="mt-4 text-gray-600">Please return to the projects list below.</p>
        <a href="/projects" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3 font-bold text-white hover:bg-[#a1151a]">
          View Projects
        </a>
      </section>
    );
  }

  return (
    <section className="bg-white pt-40 pb-24 md:pt-44 md:pb-28">
      <SEO
        title={`${project.title} - Federal Fix`}
        description={`Case study: ${project.title} in ${project.location}.`}
        canonical={`https://federalfix.com/projects/${project.slug}`}
        ogImage={project.image}
      />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.location}</p>
        <img src={project.image} alt={project.title} className="w-full rounded-2xl mb-8" />
        <p className="text-gray-700">Detailed case study content will be added here describing scope, challenges, solutions, and results.</p>
        <a href="/projects" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3 font-bold text-white hover:bg-[#a1151a]">
          Back to Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
