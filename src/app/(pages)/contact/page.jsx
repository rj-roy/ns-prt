'use client';

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 text-neutral-900 dark:text-white">
                    Get In Touch
                </h1>
                
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
                    I'd love to hear from you. Whether you have a question or want to work together, feel free to reach out.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex flex-col">
                        <label className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="px-4 py-3 bg-gray-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your name"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="px-4 py-3 bg-gray-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your@email.com"
                        />
                    </div>
                    
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-2">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            className="px-4 py-3 bg-gray-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                </div>
                
                <button className="mt-6 sm:mt-8 w-full sm:w-auto px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-300 text-sm sm:text-base">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default ContactPage;