'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import { ChevronLeftCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "Imran Pradhan",
        role: "Senior Backend Developer",
        company: "Stellar Code",
        companyLogo: "S",
        avatar: "https://i.pravatar.cc/150?img=11",
        text: "I had the pleasure of working with Rj Roy, and I was always impressed by how quickly he understands problems and comes up with effective solutions. He is a talented developer and a great team player who is always willing to help others. It was great collaborating with him.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Tech Lead",
        company: "TechVentures Inc.",
        companyLogo: "T",
        avatar: "https://i.pravatar.cc/150?img=5",
        text: "Rj Roy is one of those rare engineers who can seamlessly switch between frontend and backend. His work on our real-time analytics dashboard was exceptional. He optimized our WebSocket implementation which reduced latency by 60%. Highly recommend him for any complex system architecture.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        role: "Engineering Manager",
        company: "CloudScale Systems",
        companyLogo: "C",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "Working with Rj Roy was a game-changer for our team. He architected our entire microservices infrastructure from scratch and mentored junior developers along the way. His code reviews are thorough, and his documentation is always top-notch. A true professional.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Product Manager",
        company: "InnovateLabs",
        companyLogo: "I",
        avatar: "https://i.pravatar.cc/150?img=9",
        text: "Rj Roy has an incredible ability to translate complex technical concepts into understandable terms for non-technical stakeholders. He delivered our SaaS platform 2 weeks ahead of schedule without compromising on quality. His attention to detail is remarkable.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 5,
        name: "David Kim",
        role: "Senior Full Stack Developer",
        company: "DataFlow Solutions",
        companyLogo: "D",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "I've paired with Rj Roy on multiple projects, and his problem-solving skills are outstanding. He introduced Next.js to our stack and improved our SEO rankings by 40%. His expertise in React and Node.js is evident in every line of code he writes.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 6,
        name: "Emily Watson",
        role: "CTO",
        company: "StartupHub",
        companyLogo: "S",
        avatar: "https://i.pravatar.cc/150?img=10",
        text: "Rj Roy is the kind of engineer every startup needs. He built our MVP in 6 weeks, scaled it to handle 10k+ users, and maintained 99.9% uptime. His knowledge of cloud infrastructure and DevOps practices saved us thousands in hosting costs. Exceptional talent!",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 7,
        name: "Ahmed Hassan",
        role: "Lead DevOps Engineer",
        company: "CloudNative Corp",
        companyLogo: "C",
        avatar: "https://i.pravatar.cc/150?img=13",
        text: "Rj Roy's understanding of containerization and CI/CD pipelines is impressive. He implemented our Kubernetes cluster and automated our deployment process, reducing deployment time from 2 hours to 15 minutes. He's a valuable asset to any engineering team.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 8,
        name: "Lisa Thompson",
        role: "Senior UX Designer",
        company: "DesignFirst Studio",
        companyLogo: "D",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "As a designer, I love working with Rj Roy because he truly understands the importance of user experience. He implements designs pixel-perfectly and always suggests technical improvements that enhance the UX. His Framer Motion animations are smooth and delightful.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 9,
        name: "James Wilson",
        role: "Founder & CEO",
        company: "FinanceFlow",
        companyLogo: "F",
        avatar: "https://i.pravatar.cc/150?img=8",
        text: "Rj Roy built our entire fintech platform with security and scalability in mind. His implementation of real-time payment processing and blockchain integration was flawless. He's not just a developer; he's a strategic technical partner who cares about business outcomes.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    },
    {
        id: 10,
        name: "Nina Patel",
        role: "Staff Software Engineer",
        company: "AI Innovations",
        companyLogo: "A",
        avatar: "https://i.pravatar.cc/150?img=16",
        text: "Rj Roy's expertise in building AI-powered tools is remarkable. He integrated machine learning models into our web application and optimized the inference time by 70%. His ability to work with complex algorithms while maintaining clean, maintainable code is truly impressive.",
        social: { linkedin: "https://www.linkedin.com/in/roy-jibon/", github: "https://github.com/rj-roy" }
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function TestimonialCard({ testimonial, index }) {
    return (
        <motion.div
            variants={cardVariants}
            className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group"
            whileHover={{ y: -4 }}
        >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary/20">
                <FaQuoteLeft size={32} fill="currentColor" />
            </div>

            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                    >
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={200}
                            height={200}
                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 dark:border-neutral-700"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                    </motion.div>

                    {/* Name & Role */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                        </p>
                        <p className="text-xs text-primary font-medium mt-0.5">
                            @{testimonial.company}
                        </p>
                    </div>
                </div>

                {/* Company Logo */}
                {/* <div className="w-12 h-12 rounded-lg bg-linear-to-br from-secondery to-[#ff6b3c] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.companyLogo}
                </div> */}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                {testimonial.text}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-neutral-800">
                {testimonial.social.linkedin && (
                    <motion.a
                        href={testimonial.social.linkedin}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaLinkedin size={18} />
                    </motion.a>
                )}
                {testimonial.social.github && (
                    <motion.a
                        href={testimonial.social.github}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaGithub size={18} />
                    </motion.a>
                )}
                {testimonial.social.twitter && (
                    <motion.a
                        href={testimonial.social.twitter}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaTwitter size={18} />
                    </motion.a>
                )}
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-secondery/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
}

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    return (
        <section id='testimonials' className="relative py-20 px-4 sm:px-8 lg:px-26 overflow-hidden mx-auto">
            <div className="mx-auto max-w-5xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gray-900 dark:text-white">What People</span>
                        <span className="block">
                            <span className="text-gray-900 dark:text-white">Say About</span>
                            <span className="italic text-primary ml-2 drop-shadow-[0_0_20px_rgba(49,229,141,0.3)]">
                                My Work
                            </span>
                        </span>
                    </h2>
                    <p className="text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mt-4">
                        Testimonials from colleagues and clients
                    </p>
                </motion.div>

                {/* Desktop Grid View */}
                {/* <div className="hidden lg:block">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div> */}

                {/* Mobile/Tablet Carousel View */}
                <div className="relative">
                    <div className="overflow-hidden py-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TestimonialCard
                                    testimonial={testimonials[currentIndex]}
                                    index={currentIndex}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevTestimonial}
                            className="p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 hover:border-primary transition-colors"
                        >
                            <ChevronLeftCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'w-8 bg-primary'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextTestimonial}
                            className="p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 hover:border-primary transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </motion.button>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-neutral-800"
                >
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">20+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-secondery mb-2">46+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-white dark:text-gray-200 mb-2">100%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Rate</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}