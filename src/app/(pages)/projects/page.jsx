'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '@/lib/data';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div className="w-full min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const colors = [
        'from-blue-600 to-blue-800',
        'from-orange-500 to-orange-700',
        'from-purple-600 to-purple-800',
        'from-green-600 to-green-800',
        'from-pink-600 to-pink-800',
    ];

    return (
        <div className="w-full min-h-screen bg-black">
            <div className="mx-auto w-full px-6 py-20">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                        SELECTED <span className="text-primary/80">Work</span>
                    </h1>
                    <p className="text-sm md:text-base text-neutral-400 uppercase tracking-widest">
                        SYSTEMS DESIGNED TO HANDLE USERS, DATA, AND COMPLEXITY.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-16 md:space-y-24">
                    {projects.map((project, index) => {
                        const colorClass = colors[index % colors.length];
                        const isEven = index % 2 === 0;

                        return (
                            <div key={project.id}>
                                {/* Dotted Divider */}
                                {index > 0 && (
                                    <div className="mb-16 md:mb-24 flex gap-2 justify-center">
                                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                                    </div>
                                )}

                                {/* Project Row */}
                                <div className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-stretch ${!isEven ? 'lg:grid-cols-2 lg:grid-flow-dense' : ''}`}>
                                    {/* Project Image */}
                                    <div >
                                        <div className=" flex items-center justify-center p-8">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1920}
                                                height={1080}
                                                className="rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className={`flex flex-col justify-between py-8 lg:py-0 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        {/* Header */}
                                        <div className="mb-8 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-secondery rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {project.title.substring(0, 1)}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                            {project.title}
                                        </h2>

                                        {/* Subtitle */}
                                        <p className="text-primary/80 text-lg md:text-xl mb-6 italic font-light">
                                            {project.description}
                                        </p>

                                        {/* Description */}
                                        <p className="text-neutral-300 text-base md:text-lg mb-8 leading-relaxed ">
                                            {project.projectDetails || project.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-4 mb-10">
                                            {(project.keyFeatures || project.tags || []).slice(0, 4).map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="text-primary/80 font-bold text-xl mt-1">*</span>
                                                    <p className="text-neutral-300 text-sm md:text-base">{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="border-t border-neutral-700 pt-8">
                                            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
                                                ENGINEERED WITH
                                            </p>
                                            <div className="flex flex-wrap gap-6 items-center">
                                                {(project.technologies || project.tags || []).slice(0, 6).map((tech, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-neutral-400 text-sm">
                                                        <div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center text-xs">
                                                            {tech.substring(0, 1)}
                                                        </div>
                                                        <span>{tech}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex gap-4 mt-8">
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-primary/20 text-primary/80 rounded-lg transition-colors border border-cyan-500/30"
                                            >
                                                View Live
                                                <ArrowUpRight size={18} />
                                            </Link>
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
                                            >
                                                GitHub
                                                <ArrowUpRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;