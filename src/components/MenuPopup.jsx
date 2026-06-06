'use client'

import { useState, useEffect } from 'react';
import { X, Search, Home, User, Briefcase, Zap, Code, Layers, MessageSquare, Mail, Link as LinkIcon } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const MenuPopup = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPages, setFilteredPages] = useState([]);
    const pinnedPages = [
        { name: 'Projects', icon: Layers, description: 'View my work', href: '/projects' }
    ];
    const pages = [
        { name: 'Home', icon: Home, description: 'Overview & entry point', href: '/' },
        { name: 'About', icon: User, description: 'Who I am & what I do', href: '/#about' },
        { name: 'Book a Call', icon: MessageSquare, description: 'Schedule a quick chat', href: '/#contact' },
        { name: 'Contact', icon: Mail, description: 'Reach out directly', href: '/#contact' },
        { name: 'Resume', icon: Briefcase, description: 'Work & internships', href: '/resume' },
        { name: 'Skills', icon: Zap, description: 'Technologies & expertise', href: '/#skills' },
        { name: 'Projects', icon: Code, description: 'Portfolio projects', href: '/projects' },
        { name: 'Services', icon: Layers, description: 'What I offer', href: '/#services' },
    ];

    useEffect(() => {
        const filtered = pages.filter(page =>
            page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredPages(filtered);
    }, [searchQuery]);

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleNavigate = (href) => {
        onClose();
        setSearchQuery('');
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-700"
            />
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
                <div className="bg-white dark:bg-[#1a1a1e] rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zinc-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Menu
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition"
                            aria-label="Close menu"
                        >
                            <X size={20} className="text-gray-600 dark:text-zinc-400" />
                        </button>
                    </div>
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 py-2">
                            <Search size={18} className="text-gray-400 dark:text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search pages, links..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500"
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto flex-1">
                        {!searchQuery && pinnedPages.length > 0 && (
                            <div className="px-6 py-4">
                                <h3 className="text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
                                    Pinned
                                </h3>
                                <div className="space-y-2">
                                    {pinnedPages.map((page, idx) => (
                                        <a
                                            key={idx}
                                            href={page.href}
                                            onClick={() => handleNavigate(page.href)}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer group"
                                        >
                                            <div className="mt-1 p-2 bg-gray-100 dark:bg-zinc-700 rounded-lg group-hover:bg-amber-400/20 transition">
                                                <page.icon size={18} className="text-gray-700 dark:text-gray-300" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {page.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-zinc-400">
                                                    {page.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className={`px-6 py-4 ${!searchQuery ? 'border-t border-gray-200 dark:border-zinc-700' : ''}`}>
                            <h3 className="text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
                                {searchQuery ? 'Search Results' : 'Pages'}
                            </h3>
                            {filteredPages.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {filteredPages.map((page, idx) => (
                                        <a
                                            key={idx}
                                            href={page.href}
                                            onClick={() => handleNavigate(page.href)}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer group"
                                        >
                                            <div className="mt-1 p-2 bg-gray-100 dark:bg-zinc-700 rounded-lg group-hover:bg-amber-400/20 transition shrink-0">
                                                <page.icon size={18} className="text-gray-700 dark:text-gray-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                    {page.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-1">
                                                    {page.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 dark:text-zinc-400 py-4">
                                    No pages found.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="px-6 py-3 border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-zinc-400">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <kbd className="px-2 py-1 bg-white dark:bg-zinc-800 rounded border border-gray-300 dark:border-zinc-600 font-sans text-[10px]">
                                        Enter
                                    </kbd>
                                    <span>to select</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="flex gap-0.5">
                                        <kbd className="px-1.5 py-1 bg-white dark:bg-zinc-800 rounded border border-gray-300 dark:border-zinc-600 font-sans text-[10px]">
                                            ↑
                                        </kbd>
                                        <kbd className="px-1.5 py-1 bg-white dark:bg-zinc-800 rounded border border-gray-300 dark:border-zinc-600 font-sans text-[10px]">
                                            ↓
                                        </kbd>
                                    </div>
                                    <span>to navigate</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <kbd className="px-2 py-1 bg-white dark:bg-zinc-800 rounded border border-gray-300 dark:border-zinc-600 font-sans text-[10px]">
                                        ESC
                                    </kbd>
                                    <span>to close</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="ml-2 pl-2 border-l border-gray-300 dark:border-zinc-600">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MenuPopup;
