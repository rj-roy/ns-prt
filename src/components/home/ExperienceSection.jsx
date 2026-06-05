'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Sun, Moon } from 'lucide-react';

const experiences = [
  {
    id: '1',
    company: 'Stellar Code',
    logo: 'S',
    location: 'Mumbai, Maharashtra, IN',
    type: 'Full-time · Remote',
    period: 'Apr 2025 — Aug 2025',
    position: 'Fullstack Developer',
    highlights: [
      {
        title: 'Platform Architecture',
        description: 'Developed core platform features including user dashboards, activity feeds, referral visualization systems, and NFT minting flows.'
      },
      {
        title: 'Real-time Infrastructure',
        description: 'Implemented real-time notifications using WebSockets for live interactions and seamless user experiences.'
      },
      {
        title: 'E-Learning Ecosystem',
        description: 'Built and maintained the E-Learning platform, developing course management features (CRUD), video streaming, quizzes, and score tracking.'
      },
      {
        title: 'Admin Tools & Automation',
        description: 'Built Admin Dashboards for document and voucher management. Automated scripts for data migration, NFT distribution, and business logic.'
      }
    ],
    technologies: [
      'Next.js', 'React.js', 'Chakra UI', 'TypeScript', 
      'Socket.io', 'Figma', 'REST APIs', 'MongoDB', 
      'Postman', 'Express.js', 'JWT', 'Redux', 'Framer Motion'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: '100%',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5
    }
  }
};

export default function ExperienceSection() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 lg:px-16 relative">
      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-5 h-5 text-gray-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gray-900 dark:text-white">EXPERIENCE</span>
          <span className="italic text-[#31e58d] ml-2 drop-shadow-[0_0_20px_rgba(49,229,141,0.3)]">
            That Matters
          </span>
        </h2>
        <p className="text-sm sm:text-base tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400">
          Building real-world solutions and growing every day.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Company Info */}
              <motion.div 
                variants={itemVariants}
                className="lg:w-1/3 flex flex-col items-center lg:items-start"
              >
                {/* Date */}
                <div className="mb-6 text-center lg:text-left">
                  <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Company Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative pl-6 w-full"
                  style={{
                    borderLeft: '3px solid transparent',
                    borderImage: 'linear-gradient(to bottom, #31e58d, #ff3c00) 1'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <span className="text-2xl font-bold text-[#31e58d]">{exp.logo}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="hidden lg:flex mt-8 relative"
                >
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(49, 229, 141, 0.7)",
                        "0 0 0 10px rgba(49, 229, 141, 0)",
                        "0 0 0 0 rgba(49, 229, 141, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-800 border-2 border-[#31e58d] flex items-center justify-center shadow-lg"
                  >
                    <span className="text-[#31e58d] font-bold text-xs">{exp.logo}</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Job Details */}
              <motion.div 
                variants={itemVariants}
                className="lg:w-2/3"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-serif italic text-gray-900 dark:text-white mb-6"
                >
                  {exp.position}
                </motion.h3>

                {/* Highlights */}
                <div className="space-y-4 mb-8">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (idx * 0.1) }}
                      className="flex gap-3 group"
                    >
                      <motion.div 
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        className="mt-2 w-2 h-2 rotate-45 bg-[#31e58d] flex-shrink-0 shadow-[0_0_10px_rgba(49,229,141,0.5)]"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#31e58d] transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-2"
                >
                  {exp.technologies.map((tech, idx) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 + (idx * 0.05) }}
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: '#31e58d',
                        boxShadow: '0 0 12px rgba(49, 229, 141, 0.25)'
                      }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 cursor-pointer transition-all"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Vertical Timeline Line */}
        <motion.div
          variants={lineVariants}
          className="hidden lg:block absolute left-[16.5%] top-10 bottom-10 w-px z-0"
          style={{
            background: 'linear-gradient(to bottom, #31e58d, #ff3c00)'
          }}
        />
      </div>
    </div>
  );
}