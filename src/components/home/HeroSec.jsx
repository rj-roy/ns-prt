const HeroSec = () => {
    return (
        <section id="hero"
            className="min-h-screen pt-32.5 pb-20 px-12 flex flex-col justify-end relative overflow-hidden md:pt-30 md:px-6">

            <div className="hero-index absolute top-35 right-12 hidden md:block
              text-[11px] font-medium text-mid tracking-widest uppercase
              [writing-mode:vertical-rl] rotate-180
               animate-fade-in [animation-delay:1.2s]">
                Portfolio <span className="text-red">/ 2025</span>
            </div>

            <div className="hero-year flex items-center gap-3
              text-[11px] font-mono text-mid tracking-widest uppercase mb-10
               animate-slide-up [animation-delay:0.2s]">
                Est. 2019 — Creative Developer &amp; Designer
            </div>

            <h1 className="hero-h1 font-serif font-light leading-none tracking-tighter text-ink relative">
                <span className="block overflow-hidden"><span
                    className="word w1 inline-block  animate-word-up [animation-delay:0.15s]">Making</span></span>
                <span className="block overflow-hidden"><span
                    className="word w2 inline-block  animate-word-up [animation-delay:0.25s] italic text-red">ideas</span></span>
                <span className="block overflow-hidden"><span
                    className="word w3 inline-block  animate-word-up [animation-delay:0.35s]">feel</span></span>
                <span className="block overflow-hidden"><span
                    className="word w4 inline-block  animate-word-up [animation-delay:0.45s] italic">alive.</span></span>
            </h1>

            <div className="flex items-end justify-between mt-15
               animate-slide-up [animation-delay:0.8s]
              flex-col gap-7 md:flex-row md:items-end">
                <p className="max-w-85 text-[15px] leading-[1.7] text-mid font-normal">
                    I&apos;m Nora — a <strong className="text-ink font-medium">creative developer</strong> crafting digital experiences where
                    <strong className="text-ink font-medium">design precision</strong> meets engineering clarity. Based in Amsterdam,
                    working worldwide.
                </p>
                <div className="flex flex-col items-end gap-3 md:items-end">
                    <a href="#work" className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-wide uppercase
                text-parchment bg-ink no-underline px-7 py-3.5 rounded-full
                transition-[background,transform] duration-200 hover:bg-red hover:-translate-y-0.5">
                        See my work
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12L12 2M12 2H5M12 2v7" />
                        </svg>
                    </a>
                    <div className="flex items-center gap-2 text-[11px] text-mid tracking-widest uppercase">
                        <span className="animate-bounce-arr">↓</span> Scroll to explore
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSec;