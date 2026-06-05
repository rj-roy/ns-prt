'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const mathFormulas = [
    { text: 'ω = √(k/m)', x: '85%', y: '15%', rotate: -5, size: 'text-lg' },
    { text: 'T = 2π/ω = 2π√(R₀/g)', x: '82%', y: '25%', rotate: 3, size: 'text-sm' },
    { text: '∫x²e^(ax)dx', x: '45%', y: '20%', rotate: -8, size: 'text-base' },
    { text: 'Q_total = Q₁ + Q₂', x: '78%', y: '65%', rotate: 2, size: 'text-sm' },
    { text: '1 - (-1/(n+2))^(n+1)', x: '20%', y: '18%', rotate: 5, size: 'text-sm' },
    { text: '(-1)^(n+1) · 1/(n+2)^n', x: '18%', y: '45%', rotate: -3, size: 'text-xs' },
    { text: 'C₁ = C₂ = ε₀·S/d₁', x: '75%', y: '72%', rotate: 4, size: 'text-xs' },
    { text: 'x[m]', x: '8%', y: '12%', rotate: 0, size: 'text-sm' },
    { text: 'S_F', x: '10%', y: '35%', rotate: -2, size: 'text-base' },
    { text: 'ω = √(g₀/R₀)', x: '88%', y: '22%', rotate: -4, size: 'text-sm' },
    { text: 'e^(ax)', x: '55%', y: '30%', rotate: 6, size: 'text-xs' },
    { text: 'dF/dh', x: '90%', y: '55%', rotate: -6, size: 'text-xs' },
    { text: 'CO₂', x: '65%', y: '8%', rotate: 2, size: 'text-sm' },
    { text: 'Hg', x: '80%', y: '50%', rotate: 0, size: 'text-xs' },
    { text: 'H₂O', x: '82%', y: '48%', rotate: -1, size: 'text-xs' },
    { text: 'S₁, S₂', x: '40%', y: '10%', rotate: 3, size: 'text-xs' },
    { text: 'n+1/n+2', x: '25%', y: '25%', rotate: -4, size: 'text-xs' },
    { text: 'ε^(ax)', x: '50%', y: '35%', rotate: 5, size: 'text-xs' },
];

const geometricShapes = [
    { type: 'triangle', x: '15%', y: '70%', size: 120, rotate: 15, opacity: 100 },
    { type: 'circle', x: '85%', y: '75%', size: 100, rotate: 0, opacity: 1 },
    { type: 'square', x: '75%', y: '20%', size: 80, rotate: 25, opacity: 1 },
    { type: 'triangle', x: '60%', y: '80%', size: 90, rotate: -10, opacity: 1 },
    { type: 'circle', x: '25%', y: '85%', size: 70, rotate: 0, opacity: 1 },
];

const graphs = [
    { x: '5%', y: '20%', width: 150, height: 100 },
    { x: '70%', y: '40%', width: 120, height: 80 },
];

export default function TopHeroSec() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    document.body.setAttribute('data-hero-visible', 'true');
                } else {
                    document.body.setAttribute('data-hero-visible', 'false');
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0" />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(49,229,141,0.08)_0%,transparent_70%)]" />

            {/* Mathematical Formulas Background */}
            <div className="absolute inset-0 overflow-hidden">
                {mathFormulas.map((formula, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: index * 0.05, duration: 1 }}
                        className={`absolute ${formula.size}  font-mono`}
                        style={{
                            left: formula.x,
                            top: formula.y,
                            transform: `rotate(${formula.rotate}deg)`,
                        }}
                    >
                        {formula.text}
                    </motion.div>
                ))}

                {/* Geometric Shapes */}
                {geometricShapes.map((shape, index) => (
                    <motion.div
                        key={`shape-${index}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: shape.opacity, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
                        className="absolute"
                        style={{
                            left: shape.x,
                            top: shape.y,
                            transform: `rotate(${shape.rotate}deg)`,
                        }}
                    >
                        {shape.type === 'triangle' && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                                <polygon
                                    points="50,10 90,90 10,90"
                                    fill="none"
                                    stroke="#31e58d"
                                    strokeWidth="1"
                                    opacity="0.3"
                                />
                            </svg>
                        )}
                        {shape.type === 'circle' && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#ff3c00"
                                    strokeWidth="1"
                                    opacity="0.3"
                                />
                            </svg>
                        )}
                        {shape.type === 'square' && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
                                <rect
                                    x="10"
                                    y="10"
                                    width="80"
                                    height="80"
                                    fill="none"
                                    stroke="#31e58d"
                                    strokeWidth="1"
                                    opacity="0.3"
                                />
                            </svg>
                        )}
                    </motion.div>
                ))}

                {/* Graph Axes */}
                {graphs.map((graph, index) => (
                    <motion.div
                        key={`graph-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ delay: 1 + index * 0.2 }}
                        className="absolute"
                        style={{ left: graph.x, top: graph.y }}
                    >
                        <svg width={graph.width} height={graph.height}>
                            <line x1="0" y1="0" x2="0" y2={graph.height} stroke="#31e58d" strokeWidth="1" />
                            <line x1="0" y1={graph.height} x2={graph.width} y2={graph.height} stroke="#31e58d" strokeWidth="1" />
                            <path
                                d={`M 0 ${graph.height} Q ${graph.width / 2} ${graph.height / 3} ${graph.width} 0`}
                                fill="none"
                                stroke="#ff3c00"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </motion.div>
                ))}

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(49, 229, 141, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(49, 229, 141, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Available Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary dark:border-gray-800 bg-d-white/50 dark:bg-black/50 backdrop-blur-sm mb-8"
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 0 0 rgba(49, 229, 141, 0.7)',
                                '0 0 0 8px rgba(49, 229, 141, 0)',
                                '0 0 0 0 rgba(49, 229, 141, 0)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-primary"
                    />
                    <span className="text-sm text-black dark:text-gray-300">Available for new projects</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight"
                >
                    <span className="text-dark dark:text-white">Jibon</span>{' '}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #31e58d 0%, #00d4ff 50%, #ff3c00 100%)',
                        }}
                    >
                        Roy
                    </span>
                </motion.h1>

                {/* Handle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-500 text-sm mb-8 font-mono"
                >
                    @rj-roy
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Full Stack Developer building intelligent systems — AI Driven <br />
                    Turning research into products.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-[#28d47f] transition-colors shadow-[0_0_20px_rgba(49,229,141,0.3)]"
                    >
                        <Link href={'#projects'}>
                            View Projects
                        </Link>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg border border-primary dark:border-gray-700 text-primary dark:text-d-white font-semibold text-sm hover:border-secondery hover:text-secondery transition-colors"
                    >
                        <Link href={'#contact'}>
                            Get In Touch
                        </Link>
                    </motion.button>

                    <motion.a
                        href="https://github.com/rj-roy"
                        target='blank'
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg border border-dark dark:border-gray-700 text-dark dark:text-gray-400 hover:border-primary hover:text-primary transition-colors"
                    >
                        <FaGithub size={20} />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/roy-jibon/"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg border dark:border-gray-700 border-dark dark:text-gray-400 text-dark hover:border-secondery hover:text-secondery transition-colors"
                    >
                        <FaLinkedin size={20}/>
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-25"
                >
                    <div className="flex flex-col items-center gap-2 dark:text-gray-300 text-dark/90">
                        <span className="text-xs tracking-widest uppercase">scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowDown size={16} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Vignette effect */}
            {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
        }}
      /> */}
        </section>
    );
}