'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AboutSec() {
    return (
        <section className="min-h-screen w-full mx-auto max-w-6xl grid py-16 px-6 sm:px-12 lg:px-20 place-items-center overflow-hidden">
            {/* Subtle background grid pattern */}
            {/* <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      /> */}
            <div>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(49, 229, 141, 0.5)',
                        color: '#31e58d'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-2.5 rounded-full border border-gray-300 dark:border-neutral-700 bg-transparent text-[11px] tracking-[0.25em] uppercase text-gray-600 dark:text-gray-400 font-medium transition-colors"
                >
                    THIS IS ME
                </motion.button>
            </div>

            <div className="mx-auto w-full items-center">
                {/* Left Column - Text */}
                <div className="order-2 lg:order-1">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif italic text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-10 text-gray-900 dark:text-white"
                    >
                        Full Stack Developer{' '}
                        <span className="block">building</span>
                        <span className="block">
                            scalable &{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #00d4ff, #31e58d)',
                                }}
                            >
                                real-time systems
                            </span>
                        </span>
                    </motion.h1>

                    {/* Paragraphs */}
                    <div className="space-y-5 max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            I&apos;m{' '}
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                Rj Roy
                            </span>
                            , a software engineer focused on building high-performance web applications. From frontend to backend, I enjoy turning complex
                            ideas into products that actually work at scale.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            Primarily working with{' '}
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                React, Next.js, and Node.js
                            </span>
                            , I&apos;ve built everything from AI-powered developer tools to full
                            SaaS platforms. I care deeply about clean architecture and
                            shipping fast without breaking things.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            I believe great software isn&apos;t just written — it&apos;s crafted with
                            intent.
                        </motion.p>
                    </div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center gap-5 mt-10"
                    >
                        <Link
                            href="https://www.linkedin.com/in/roy-jibon/"
                            className="group"
                            aria-label="LinkedIn"
                            target='blank'
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://github.com/rj-roy"
                            className="group"
                            aria-label="GitHub"
                            target='blank'
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/royjibon65/"
                            className="group"
                            aria-label="Instagram"
                            target='blank'
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}