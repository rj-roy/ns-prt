'use client';

import { useState } from 'react';
import { Download, File } from 'lucide-react';

// export const metadata = {
//   title: "Rj Roy | Resume",
//   description: "Download my professional CV - Full Stack Developer",
// };

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/CV_Rj_Roy.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Jibon_Roy_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 dark:bg-linear-to-r from-cyan-500/20 to-green-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
            <File className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Professional Resume</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My CV & Resume
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Download my professional CV or view it below. This resume showcases my 
            experience as a Full Stack Developer with 46+ projects delivered for 20+ clients.
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 disabled:from-gray-500 disabled:to-gray-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
          >
            <Download className="w-5 h-5" />
            {isLoading ? 'Downloading...' : 'Download CV (PDF)'}
          </button>
        </div>

        {/* CV Viewer */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">CV Preview</h2>
              <p className="text-sm text-slate-600 mt-1">Jibon Roy - Full Stack Developer</p>
            </div>
            <a
              href="/CV_Rj_Roy.pdf"
              download="Jibon_Roy_CV.pdf"
              className="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* PDF Iframe */}
          <div className="w-full" style={{ height: '900px' }}>
            <iframe
              src="/CV_Rj_Roy.pdf#toolbar=0"
              title="Jibon Roy CV"
              className="w-full h-full border-none"
              type="application/pdf"
            />
          </div>

          {/* Fallback for browsers that don't support PDF preview */}
          <div className="hidden" id="pdf-fallback">
            <div className="p-8 text-center">
              <p className="text-slate-700 mb-4">
                PDF viewer not supported in your browser.
              </p>
              <a
                href="/CV_Rj_Roy.pdf"
                download="Jibon_Roy_CV.pdf"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV Instead
              </a>
            </div>
          </div>
        </div>

        {/* Alternative Download Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="dark:bg-slate-700/50 border border-slate-600 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
            <div className="text-cyan-400 mb-3">
              <File className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="dark:text-white text-black font-semibold mb-2">Full CV</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Complete professional CV with detailed experience and skills.
            </p>
            <a
              href="/CV_Rj_Roy.pdf"
              download="Jibon_Roy_CV.pdf"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Download <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="dark:bg-slate-700/50 border border-slate-600 rounded-lg p-6 text-center hover:border-green-500/50 transition-colors">
            <div className="text-green-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="dark:text-white text-black font-semibold mb-2">View Online</h3>
            <p className="dark:text-slate-400 text-slate-600 text-sm mb-4">
              Preview your CV in your browser right now.
            </p>
            <button
              onClick={() => document.querySelector('iframe')?.focus()}
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              View CV <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="dark:bg-slate-700/50 border border-slate-600 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h3 className="dark:text-white text-black font-semibold mb-2">Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Reach out to discuss projects and opportunities.
            </p>
            <a
              href="mailto:dpjdeveloper.me@gmail.com"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Get in Touch <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
