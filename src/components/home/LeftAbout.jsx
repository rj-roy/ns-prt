import Image from "next/image";
import RJR from "@/assets/images/roy-ji.png"

const LeftAbout = () => {
    return (
        <div className="w-full lg:w-130 lg:flex lg:justify-center lg:items-center  2xl:fixed top-30 bottom-30 left-20 px-2 py-5">
            <div className="rounded-[32px] border border-zinc-700 bg-[#1b1b1f] p-8 text-white">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-4xl font-semibold">RJ Roy</h1>

                        <span className="flex items-center justify-center p-0.5 w-7 h-7 pt-1 rounded-full border border-zinc-400 text-xs" >
                            RJ
                        </span>
                    </div>

                    <p className="text-right text-lg leading-8 text-zinc-200">
                        Full Stack Developer
                    </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-[36px] flex justify-center">
                    <Image
                    src={RJR}
                        alt='jibon_roy'
                        width={500}
                        height={500}
                        className="w-90 object-cover grayscale"
                    />
                </div>

                <div className="mt-12 text-center">
                    <h2 className="font-light tracking-tight">
                        dpjdeveloper.me@gmail.com
                    </h2>

                    <p className="mt-2 text-3xl font-light tracking-tight">
                        Based in Dinajpur, BD
                    </p>

                    <p className="mt-8 text-zinc-400 text-sm">
                        ©2026 Jibon Roy. All Rights Reserved
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-5">
                    {["IG", "TW", "DB", "GH"].map((item) => (
                        <button
                            key={item}
                            className=" h-13 w-13 rounded-full border border-zinc-600 text-sm text-zinc-300  transition hover:border-white hover:text-white ">
                            {item}
                            
                        </button>
                        
                    ))}
                </div>

                {/* Button */}
                <button
                    className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#31e58d] py-5 text-xl font-medium text-black transition hover:opacity-90" >
                    ✉ HIRE ME!
                </button>
            </div>
        </div>
    );
};

export default LeftAbout;