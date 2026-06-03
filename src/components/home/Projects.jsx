import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '@/lib/data';
import ProjectCard from '../ui/ProjectCard';
import Link from 'next/link';

const Projects = async () => {
  const projects = await getProjects();
  
  return (
    <section className="recent-projects py-24 md:py-32" id="projects">
      <div className="projects-container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="projects-header mb-16">
          <h2 className="projects-title text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight">
            <span className="title-main block text-black dark:text-white">RECENT</span>
            <span className="title-secondary block text-black/30 dark:text-white/30 mt-2">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {projects?.slice(0, 4).map((project, index) => (
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