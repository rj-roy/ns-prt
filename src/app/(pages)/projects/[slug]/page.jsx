import { getProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TechnologyGrid } from "@/components/ui/TechnologyGrid";

const ProjectsDetails = async ({ params }) => {
    const { slug } = await params;
    const allProjects = await getProjects();
    const filtered = allProjects?.find((pr) => pr?.slug === slug)
    if (!filtered) {
        return notFound();
    };

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto space-y-5">
                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-500 dark:text-neutral-400 dark:hover:text-white hover:text-black transition-colors group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* About Section */}
                <section className="space-y-5 my-10 mb-20">
                    <h2 className="text-2xl font-bold text-black dark:text-white">{filtered.title}</h2>
                    <p className="text-[#2e2f2e] dark:text-[#c8d0c9] leading-relaxed w-full">
                        {filtered.projectDetails}
                    </p>
                </section>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-5">
                    {/* Left Content */}
                    <div className="space-y-2  p-10 rounded-2xl shadow-xs shadow-primary bg-primary/2 grid place-content-center">
                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-neutral-400">
                            <span className="px-3 py-1 rounded-full bg-d-white dark:bg-neutral-800 border border-neutral-700">
                                {filtered.stack}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                            {filtered.title}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-500 dark:text-neutral-400 leading-relaxed">
                            {filtered.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={filtered.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 hover:bg-primary/70 text-[#072a0d] dark:text-white rounded-full font-medium bg-primary transition-colors group"
                            >
                                View Live
                                <FaExternalLinkAlt className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href={filtered.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 rounded-full font-medium  hover:bg-primary/10 hover:border-primary dark:hover:bg-neutral-900 transition-all group"
                            >
                                <FaGithub className="text-lg" />
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="p-10 rounded-2xl shadow-xs shadow-primary bg-primary/2">
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technologies</h2>
                        <TechnologyGrid technologies={filtered?.technologies} />
                    </div>

                    {/* Right Image */}
                    {/* <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden border">
                            <Image
                                src={filtered.image}
                                alt={filtered.title}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div> */}
                </div>

                {/* About Section */}
                {/* <section className=" p-5 rounded-2xl shadow-xs shadow-primary bg-primary/2">
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-6">About This Project</h2>
                    <p className="text-neutral-500 leading-relaxed max-w-4xl">
                        {filtered.projectDetails}
                    </p>
                </section> */}

                {/* Features & Technologies Grid */}
                <div className="p-5 rounded-2xl shadow-xs shadow-primary bg-primary/2">
                    {/* Key Features */}
                    <div className="">
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Key Features</h2>
                        <ul className="space-y-4">
                            {filtered?.keyFeatures?.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-gray-500 dark:text-neutral-400 group"
                                >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-neutral-400 transition-colors shrink-0 " />
                                    <span className="leading-relaxed hover:text-black dark:hover:text-d-white">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    {/* <div>
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {filtered?.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;