'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright Text */}
          <div className="text-xs sm:text-sm text-gray-500">
            <p>
              © {currentYear}{' '}
              <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                Roy Jibon
              </Link>
              . All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
