import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import Link from 'next/link';
import { getProjects } from '@/lib/data';

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="recent-projects py-24 md:py-32" id="projects">
      <div className="projects-container max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="projects-header mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gray-900 dark:text-white font-sans">Selected</span>
            <span className="text-primary italic font-serif ml-2 font-normal">
              Work
            </span>
          </h2>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 font-medium">
            Systems designed to handle users, data, and complexity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* See All Link */}
        <div className="see-all-container text-center pt-5">
          <Link
            href="/projects"
            className="see-all-link hover:shadow-2xl inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-black/20 dark:border-white/20 rounded-full  font-semibold text-base hover:bg-white hover:text-black hover:border-white hover:translate-x-2 transition-all duration-300 ease-out"
          >
            <span>See All Projects</span>
            <ArrowUpRight className="arrow-icon transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1" size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
};
export default Projects;