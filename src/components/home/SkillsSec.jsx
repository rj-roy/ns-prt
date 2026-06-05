'use client';

import { motion } from 'framer-motion';
import {
  FileCode, Atom, Zap, Box, Diamond,
  RefreshCcw, PenTool, Smartphone, Play, Monitor,
  Server, Terminal, Database, Flame, Hexagon
} from 'lucide-react';

const techStack = [
  { name: 'TypeScript', icon: FileCode, color: '#3178C6' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'Next.js', icon: null, color: '#ffffff', text: 'N' },
  { name: 'Framer Motion', icon: Zap, color: '#a855f7' },
  { name: 'Chakra UI', icon: Box, color: '#38b2ac' },
  { name: 'Shadcn UI', icon: Diamond, color: '#ffffff' },
  { name: 'Redux Toolkit', icon: RefreshCcw, color: '#764ABC' },
  { name: 'Figma', icon: PenTool, color: '#F24E1E' },
  { name: 'React Native', icon: Smartphone, color: '#61DAFB' },
  { name: 'Expo', icon: Play, color: '#ffffff' },
  { name: 'Electron', icon: Monitor, color: '#47848F' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Express', icon: Terminal, color: '#9ca3af' },
  { name: 'MongoDB', icon: Database, color: '#47A248' },
  { name: 'PostgreSQL', icon: Database, color: '#336791' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'Docker', icon: Box, color: '#2496ED' },
  { name: 'Kubernetes', icon: Hexagon, color: '#326CE5' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export default function SkillsSec() {

  return (
    <div id='skills' className="min-h-[50dvh] my-[10dvh] py-5 px-4 sm:px-8 flex flex-col items-center justify-between overflow-hidden">


      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-gray-900 dark:text-white font-sans">TECH</span>
          <span className="text-primary italic font-serif ml-2 font-normal">
            / Use
          </span>
        </h2>
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-500 font-medium">
          Tools behind the systems I design and develop.
        </p>
      </motion.div>

      {/* Tech Pills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-20"
      >
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(49, 229, 141, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-200 dark:border-neutral-800 bg-primary/10 dark:bg-neutral-900/80 cursor-pointer transition-colors group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-5 h-5">
                {IconComponent ? (
                  <IconComponent
                    size={16}
                    className="transition-transform group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                ) : (
                  <span
                    className="text-sm font-bold transition-transform group-hover:scale-110"
                    style={{ color: tech.color }}
                  >
                    {tech.text}
                  </span>
                )}
              </div>
              {/* Text */}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* "THIS IS ME" Button */}
      {/* <motion.button
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
      </motion.button> */}
    </div>
  );
}