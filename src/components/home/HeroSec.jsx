// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const HeroSec = () => {
//     const [mounted, setMounted] = useState(false);

//     // Prevent hydration mismatch by only rendering theme-dependent UI after mount
//     useEffect(() => {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setMounted(true);
//     }, []);

//     const stats = [
//         { value: '+5', label: 'Years of Experience' },
//         { value: '+46', label: 'Projects Completed' },
//         { value: '+20', label: 'Worldwide Clients' },
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.5, ease: 'easeOut' },
//         },
//     };

//     const statVariants = {
//         hidden: { opacity: 0, scale: 0.5 },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             transition: { type: 'spring', stiffness: 100, damping: 15 },
//         },
//     };

//     return (
//         <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:pl-0 transition-colors duration-500">


//             <div className='w-full max-w-3xl md:max-w-5xl mx-auto'>
//                 {/* Background Gradient */}
//                 {/* <div className="absolute inset-0 bg-linear-to-tl from-primary/20 via-transparent to-transparent pointer-events-none" /> */}

//                 {/* Animated Blobs */}
//                 <motion.div
//                     className="fixed top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl"
//                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//                     transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//                 />
//                 <motion.div
//                     className="fixed bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl"
//                     animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
//                     transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//                 />

//                 <motion.div
//                     className="relative max-w-5xl mx-auto  text-left"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={mounted ? 'visible' : 'hidden'}
//                 >
//                     {/* Main Heading */}
//                     <motion.h1
//                         variants={itemVariants}
//                         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-neutral-900 leading-tight mb-6"
//                     >
//                         Transforming Your{' '}
//                         <br className="hidden sm:block" />
//                         Ideas into{' '}
//                         <span className="text-primary relative inline-block">
//                             Reality
//                             <motion.span
//                                 className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
//                                 initial={{ scaleX: 0 }}
//                                 animate={{ scaleX: 1 }}
//                                 transition={{ delay: 1, duration: 0.8 }}
//                             />
//                         </span>
//                     </motion.h1>

//                     {/* Subtitle */}
//                     <div className="flex justify-start items-start w-full">
//                         <motion.p
//                             variants={itemVariants}
//                             initial="hidden"
//                             animate="visible"
//                             className="text-base text-left sm:text-lg md:text-xl dark:text-neutral-400 text-neutral-600 max-w-2xl mb-12 leading-relaxed"
//                         >
//                             Passionate about creating intuitive and engaging user experiences.
//                             <br className="hidden sm:block" />
//                             Specialize in transforming ideas into beautifully crafted products.
//                         </motion.p>
//                     </div>

//                     {/* Stats Grid */}
//                     <motion.div
//                         variants={containerVariants}
//                         className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12"
//                     >
//                         {stats.map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={statVariants}
//                                 className="flex flex-col items-start"
//                             >
//                                 <motion.span
//                                     className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-neutral-900 mb-2"
//                                     whileHover={{ scale: 1.1 }}
//                                     transition={{ type: 'spring', stiffness: 300 }}
//                                 >
//                                     {stat.value}
//                                 </motion.span>
//                                 <span className="text-xs sm:text-sm dark:text-neutral-500 text-neutral-500 uppercase tracking-wider text-center">
//                                     {stat.label}
//                                 </span>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* CTA Buttons */}
//                     <motion.div
//                         variants={itemVariants}
//                         className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center w-full px-2"
//                     >
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg shadow-primary/25"
//                         >
//                             <Link href={'#contact'}>
//                                 Let&apos;s Talk
//                             </Link>
//                         </motion.button>

//                         <motion.button
//                             whileHover={{ scale: 1.05, x: 5 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="w-full sm:w-auto  text-sm sm:text-base bg-transparent dark:border-neutral-700 border-neutral-300 hover:border-primary dark:text-white text-neutral-800 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
//                         >
//                             <Link href={'#projects'} className='px-6 sm:px-8 py-3 sm:py-4'>
//                                 My Work
//                             </Link>
//                             <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
//                         </motion.button>
//                     </motion.div>

//                     {/* Scroll Indicator */}
//                     <motion.div
//                         className="flex items-center justify-center mt-20"
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={mounted ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: 1.5, duration: 0.5 }}
//                     >
//                         <motion.div
//                             animate={{ y: [0, 10, 0] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                             className="w-6 h-10 border-2 dark:border-neutral-600 border-neutral-400 rounded-full flex justify-center pt-2"
//                         >
//                             <motion.div className="w-1 h-2 dark:bg-neutral-400 bg-neutral-500 rounded-full" />
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>


//             </div>
//         </section>
//     );
// };

// export default HeroSec;