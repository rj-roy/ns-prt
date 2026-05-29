'use client';

const AboutPage = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-white">
                    About Me
                </h1>
                
                <div className="prose prose-invert dark:prose max-w-none">
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                        I'm a Full Stack Developer passionate about creating intuitive and engaging user experiences.
                    </p>
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                        With over 12 years of experience in web design and development, I've worked on projects ranging from
                        startups to established companies worldwide.
                    </p>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 text-neutral-900 dark:text-white">
                        What I Do
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
                        I specialize in transforming ideas into beautifully crafted products. Whether it's designing intuitive interfaces
                        or building robust backends, I'm committed to delivering exceptional results.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;