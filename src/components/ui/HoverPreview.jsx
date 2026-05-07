const HoverPreview = () => {
    return (
        <div id="preview"
            className="preview-img fixed top-0 left-0 w-65 aspect-4/3 rounded-2xl overflow-hidden pointer-events-none z-200 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <div id="preview-inner" className="pi-1 w-full h-full flex items-center justify-center">
                <span className="font-serif italic text-[32px] font-light text-black/15">Project</span>
            </div>
        </div>
    );
};

export default HoverPreview;