import Image from "next/image";
import RJR from "@/assets/images/roy-ji.png"
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const LeftAbout = () => {
    return (
        <div className="z-40 w-full lg:w-120 flex justify-center items-center lg:fixed lg:top-50 lg:bottom-50 lg:left-1 px-2 py-5">
            <div className="w-full rounded-[32px] border-r border-r-primary shadow-xs shadow-primary bg-d-white dark:bg-background p-6">
                {/* <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-4xl font-semibold">RJ Roy</h1>

                        <span className="flex items-center justify-center p-0.5 w-7 h-7 pt-1 rounded-full border border-zinc-400 text-xs" >
                            JS
                        </span>
                    </div>

                    <p className="text-right text-lg leading-8 text-gray-700 dark:text-zinc-200">
                        Full Stack Developer
                    </p>

                </div> */}

                <div className="mt-6 overflow-hidden rounded-[36px] flex justify-center">
                    <Image
                        src={RJR}
                        alt='jibon_roy'
                        width={500}
                        height={500}
                        loading="eager"
                        className="w-90 object-cover grayscale"
                    />
                </div>

                <div className="mt-8 text-center space-y-2">
                    {/* <h2 className="font-light tracking-tight">
                        dpjdeveloper.me@gmail.com
                    </h2> */}

                    <p className="mt-2 text-4xl font-bold tracking-tight">
                        Jibon Roy (RJ)
                    </p>

                    <p className="">
                        Full Stack Developer,<br/>
                        Rangpur, BD
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-center gap-5">
                    <Link
                        href="https://www.linkedin.com/in/roy-jibon/"
                        className="h-13 w-13 rounded-full border border-zinc-600 dark:text-zinc-300  transition hover:border-primary dark:hover:text-white text-black flex justify-center items-center">
                        <FaLinkedin size={30} />
                    </Link>
                    <Link
                        href="https://github.com/rj-roy"
                        className="h-13 w-13 rounded-full border border-zinc-600 dark:text-zinc-300  transition hover:border-primary dark:hover:text-white text-black flex justify-center items-center">
                        <FaGithub size={30} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/royjibon65/"
                        className=" h-13 w-13 rounded-full border border-zinc-600 dark:text-zinc-300  transition hover:border-primary dark:hover:text-white text-black flex justify-center items-center">
                        <FaInstagram size={30} />
                    </Link>
                    <Link
                        href="https://x.com/JibonRo22074491"
                        className="h-13 w-13 rounded-full border border-zinc-600 dark:text-zinc-300  transition hover:border-primary dark:hover:text-white text-black flex justify-center items-center">
                        <FaTwitter size={30} />
                    </Link>
                </div>

                <a href="/contact"
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-primary text-black py-4 text-xl font-medium transition hover:opacity-90" >
                    Let&apos;s Talk
                </a>
            </div>
        </div>
    );
};

export default LeftAbout;