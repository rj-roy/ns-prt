import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <article
            className={`project-card group relative bg-zinc-100 dark:bg-[#111] rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 cursor-pointer ${project.featured ? 'ring-2 ring-[#ff3b3b]' : ''
                }`}
        >
            {/* Image Wrapper */}
            <div className="card-image-wrapper relative aspect-video overflow-hidden">
                <div className="card-image w-full h-full flex items-center justify-center">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        loading="eager"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay Links - Show on Hover */}
                <div className="card-overlay absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-link w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ff3b3b] hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="View live project"
                    >
                        <ExternalLink size={20} />
                    </Link>
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-link w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ff3b3b] hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="View source code"
                    >
                        <FaGithub size={20} />
                    </Link>
                </div>
            </div>

            {/* Card Content */}
            <div className="card-content p-6">
                <div className="flex justify-between items-center">
                    <h3 className="card-title text-xl font-bold mb-2">
                        {project.title}
                    </h3>
                    <Link href={`/projects/${project.slug}`} className="text-xs border-b border-primary hover:underline flex items-center rounded-full p-1.5">
                        See Details
                    </Link>
                </div>
                <p className="card-description text-black/60 dark:text-white/60 text-base leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="tag px-3 py-1.5 bg-d-white border dark:bg-white/10 rounded-full text-xs font-medium text-black/80 dark:text-white/80 hover:bg-white/20 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};
export default ProjectCard;