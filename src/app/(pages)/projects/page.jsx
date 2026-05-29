'use client';

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A beautiful web application built with Next.js and React',
            tags: ['Next.js', 'React', 'Tailwind CSS'],
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Full stack application with modern technologies',
            tags: ['Node.js', 'MongoDB', 'React'],
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Mobile-first responsive design project',
            tags: ['Responsive', 'UI/UX', 'JavaScript'],
        },
    ];
    
    return (
        <div className="w-full min-h-screen">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-neutral-900 dark:text-white">
                    My Work
                </h1>
                
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-12 sm:mb-16 leading-relaxed max-w-2xl">
                    Here are some of my recent projects and achievements.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 dark:bg-neutral-800/50 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-white">
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;