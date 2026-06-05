'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    general: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Experience', href: '/#experience' },
    ],
    socials: [
      { label: 'Guild Board', href: '#' },
      { label: 'Connect', href: '#' },
    ],
    support: [
      { label: 'Book a call', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <h2 className="text-white font-bold text-2xl mb-4">RAJ</h2>
            <p className="text-sm leading-relaxed mb-4 text-gray-500">
              The best way to predict the future is to build it. Thanks for checking out my site!
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">DMCA</div>
              <div className="bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded">PROTECTED</div>
            </div>
          </div>

          {/* General Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">General</h3>
            <ul className="space-y-3">
              {footerLinks.general.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-300 transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Socials</h3>
            <ul className="space-y-3">
              {footerLinks.socials.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-300 transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-300 transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Raj . All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-gray-600 hover:text-gray-400 transition">
              Security
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-400 transition">
              System Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
