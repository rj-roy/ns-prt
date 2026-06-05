'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProjects } from '@/lib/data';
import MatrixLoader from '../ui/MatrixLoader';

const ProjectsCompo = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                console.log(data);
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
        return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <MatrixLoader />
            </div>
        );
    }

    const colors = [
        'from-blue-600 to-blue-800',
        'from-orange-500 to-orange-700',
        'from-purple-600 to-purple-800',
        'from-green-600 to-green-800',
        'from-pink-600 to-pink-800',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <div className="w-full">
            <div className="mx-auto w-full px-6 py-6">
                {/* Section Header */}
                <motion.div
                    className="mb-8 md:mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={headerVariants}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black dark:text-white">
                        SELECTED <span className="text-primary/80">Work</span>
                    </h1>
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                        SYSTEMS DESIGNED TO HANDLE USERS, DATA, AND COMPLEXITY.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="space-y-10 md:space-y-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {projects?.map((project, index) => {
                        const colorClass = colors[index % colors.length];
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                            >
                                {/* Dotted Divider */}
                                {index > 0 && (
                                    <motion.div
                                        className="mb-10 md:mb-16 flex gap-2 justify-center"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                                    </motion.div>
                                )}

                                {/* Project Row */}
                                <motion.div
                                    className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-stretch ${!isEven ? 'lg:grid-cols-2 lg:grid-flow-dense' : ''}`}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Project Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="flex items-center justify-center p-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1920}
                                                height={1080}
                                                className="rounded-2xl"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Project Details */}
                                    <div className={`flex flex-col justify-between py-4 lg:py-0 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        {/* Header */}
                                        <div className="mb-4 flex items-center gap-2">
                                            <div className="w-8 h-8 bg-secondery rounded-full flex items-center justify-center text-white dark:text-black font-bold text-xs">
                                                {project.title.substring(0, 1)}
                                            </div>
                                            <h3 className="text-sm md:text-base font-bold text-black dark:text-white">{project.title}</h3>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-1">
                                            {project.title}
                                        </h2>

                                        {/* Subtitle */}
                                        <p className="text-primary/80 dark:text-primary/70 text-sm md:text-base mb-3 italic font-light">
                                            {project.description}
                                        </p>

                                        {/* Description */}
                                        <p className="text-neutral-600 dark:text-neutral-300 text-xs md:text-sm mb-4 leading-relaxed">
                                            {project.projectDetails || project.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-4">
                                            {(project.keyFeatures || project.tags || []).slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <span className="text-primary/80 dark:text-primary/70 font-bold text-sm mt-0.5">*</span>
                                                    <p className="text-neutral-600 dark:text-neutral-300 text-xs md:text-sm">{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-3">
                                            <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-2">
                                                ENGINEERED WITH
                                            </p>
                                            <div className="flex flex-wrap gap-3 items-center">
                                                {(project.technologies || project.tags || []).map((tech, idx) => (
                                                    <div key={idx} className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 text-xs">
                                                        <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-800 rounded flex items-center justify-center text-xs text-black dark:text-white">
                                                            {tech.substring(0, 1)}
                                                        </div>
                                                        <span>{tech}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex gap-2 mt-8">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-3 py-2 bg-cyan-500/10 hover:bg-primary/20 dark:bg-cyan-500/10 dark:hover:bg-primary/20 text-primary/80 dark:text-primary/70 rounded text-xs transition-colors border border-cyan-500/30"
                                                >
                                                    View Live
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-3 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white rounded text-xs transition-colors"
                                                >
                                                    GitHub
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsCompo;