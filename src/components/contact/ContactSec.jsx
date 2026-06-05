'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import rj from '@/assets/images/roy-ji.png';
import { Calendar, ExternalLink, Globe, Mail } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';


const socialLinks = [
  {
    id: 1,
    platform: 'GitHub',
    handle: '@rj-roy',
    icon: FaGithub,
    category: 'code',
    href: 'https://github.com/rj-roy',
    color: '#31e58d'
  },
  // {
  //   id: 2,
  //   platform: 'LeetCode',
  //   handle: '364+ Solved',
  //   icon: Trophy,
  //   category: 'code',
  //   href: '#',
  //   color: '#ffa116',
  //   gradient: 'from-yellow-500/20 to-orange-500/20'
  // },
  // {
  //   id: 3,
  //   platform: 'Guildboard',
  //   handle: 'Join the community',
  //   icon: Users,
  //   category: 'code',
  //   href: '#',
  //   color: '#31e58d'
  // },
  {
    id: 4,
    platform: 'LinkedIn',
    handle: 'in/roy-jibon',
    icon: FaLinkedin,
    category: 'connect',
    href: 'https://www.linkedin.com/in/roy-jibon/',
    color: '#0077b5'
  },
  {
    id: 5,
    platform: 'Instagram',
    handle: '@royjibon65',
    icon: FaInstagram,
    category: 'connect',
    href: 'https://www.instagram.com/royjibon65/',
    color: '#e4405f'
  },
  {
    id: 6,
    platform: 'Twitter',
    handle: 'JibonRo22074491',
    icon: FaTwitter,
    category: 'connect',
    href: 'https://x.com/JibonRo22074491',
    color: '#1877f2'
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

export default function ContactSec() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const codeLinks = socialLinks.filter(link => link.category === 'code');
  const connectLinks = socialLinks.filter(link => link.category === 'connect');

  return (
    <section id='contact' className="relative min-h-[90dvh] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          color: '#31e58d'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondery/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="">CONNECT</span>
            <span className=" mx-2">&</span>
            <span
              className="italic bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #31e58d 0%, #00d4ff 50%, #ff3c00 100%)'
              }}
            >
              Craft
            </span>
          </h2>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Find me across the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Sidebar - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="sticky top-8 p-6 rounded-2xl bg-linear-to-b border-primary dark:from-gray-900/80 dark:to-black/80 border dark:border-gray-800 backdrop-blur-sm">
              {/* Profile Image */}
              <div className="relative mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 p-1">
                    <Image
                      src={rj}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />

                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-primary rounded-full" />
                </motion.div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-3 py-1 text-xs rounded-full dark:bg-gray-800 dark:text-gray-300 border dark:border-gray-700">
                  Software Engineer
                </span>
                <span className="px-3 py-1 text-xs rounded-full dark:bg-gray-800 dark:text-gray-300 border dark:border-gray-700">
                  Full Stack Developer
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#ffffff' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar size={16} />
                  Let&apos;s Talk
                </motion.button>

                <div className="grid grid-cols-2 gap-3">
                  <Link href={'https://www.royjibon.online/'} target='blank'>
                    <motion.button
                      whileHover={{ scale: 1.05, borderColor: '#31e58d' }}
                      whileTap={{ scale: 0.95 }}
                      className="py-2.5 px-4 rounded-xl dark:bg-gray-800/50 dark:text-gray-300 text-xs font-medium flex items-center justify-center gap-2 border border-gray-700 hover:text-primary transition-colors"
                    >
                      <Globe size={14} />
                      Website
                    </motion.button>
                  </Link>

                  <motion.a
                    href='mailto:dpjdeveloper.me@gmail.com'
                    whileHover={{ scale: 1.05, borderColor: '#ff3c00' }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2.5 px-4 rounded-xl dark:bg-gray-800/50 dark:text-gray-300 text-xs font-medium flex items-center justify-center gap-2 border border-gray-700 hover:text-secondery transition-colors"
                  >
                    <Mail size={14} />
                    Gmail
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            {/* Code & Craft Section */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondery to-transparent" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Code & Craft</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondery to-transparent" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {codeLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target='blank'
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      onMouseEnter={() => setHoveredCard(link.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ y: -4 }}
                      className="group relative p-5 rounded-xl text-dark dark:bg-linear-to-b from-gray-900/60 to-black/60 border dark:border-gray-800 border-gray-400 hover:border-gray-700 transition-all overflow-hidden"
                    >
                      {/* Hover Gradient */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r ${link.gradient || 'from-primary/10 to-transparent'}`}
                      />

                      <div className="relative flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                          <Icon
                            size={24}
                            className="dark:text-gray-400 group-hover:text-white transition-colors"
                            style={{ color: hoveredCard === link.id ? link.color : undefined }}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="dark:text-white text-dark font-semibold mb-1 group-hover:text-primary transition-colors">
                            {link.platform}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {link.handle}
                          </p>
                        </div>

                        <ExternalLink
                          size={16}
                          className="dark:text-gray-600 text-dark group-hover:text-primary transition-colors"
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            {/* Connect Section */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondery to-transparent" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Connect</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondery to-transparent" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {connectLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target='blank'
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.9 + (index * 0.1) }}
                      onMouseEnter={() => setHoveredCard(link.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ y: -4 }}
                      className="group relative p-5 rounded-xl text-dark dark:bg-linear-to-b from-gray-900/60 to-black/60 border dark:border-gray-800 border-gray-400 hover:border-gray-700 transition-all overflow-hidden"
                    >
                      {/* Hover Gradient */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r ${link.gradient || 'from-secondery/10 to-transparent'}`}
                      />

                      <div className="relative flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                          <Icon
                            size={24}
                            className="dark:text-gray-400 text-dark group-hover:text-white transition-colors"
                            style={{ color: hoveredCard === link.id ? link.color : undefined }}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="dark:text-white text-dark font-semibold mb-1 group-hover:text-secondery transition-colors">
                            {link.platform}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {link.handle}
                          </p>
                        </div>

                        <ExternalLink
                          size={16}
                          className="text-gray-600 group-hover:text-secondery transition-colors"
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}