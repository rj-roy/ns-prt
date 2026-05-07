import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    // const cur = document.getElementById('cur');
    // let cx = 0, cy = 0;
    // document.addEventListener('mousemove', e => {
    //     cx = e.clientX; cy = e.clientY;
    //     cur.style.left = cx + 'px';
    //     cur.style.top = cy + 'px';
    // });
    // document.querySelectorAll('a').forEach(el => {
    //     el.addEventListener('mouseenter', () => cur.classList.add('cur-big'));
    //     el.addEventListener('mouseleave', () => cur.classList.remove('cur-big'));
    // });

    // // PROJECT HOVER PREVIEW
    // const preview = document.getElementById('preview');
    // const previewInner = document.getElementById('preview-inner');
    // const colors = ['pi-1', 'pi-2', 'pi-3', 'pi-4', 'pi-5'];
    // const labels = ['EcoSphere', 'Forma', 'Proxity', 'ClimatePal', 'Luna'];

    // document.querySelectorAll('.project-row').forEach(row => {
    //     const idx = parseInt(row.dataset.preview) - 1;
    //     row.addEventListener('mouseenter', () => {
    //         previewInner.className = 'preview-inner ' + colors[idx];
    //         previewInner.querySelector('.preview-label').textContent = labels[idx];
    //         preview.classList.add('show');
    //     });
    //     row.addEventListener('mouseleave', () => preview.classList.remove('show'));
    //     row.addEventListener('mousemove', e => {
    //         preview.style.left = (e.clientX + 24) + 'px';
    //         preview.style.top = (e.clientY - 80) + 'px';
    //     });
    // });
    // const links = (
    //     <>
    //         <li><Link className="nav-link" href="/">Home</Link></li>
    //         <li><Link className="nav-link" href="/about">About</Link></li>
    //         <li><Link className="nav-link" href="/projects">Projects</Link></li>
    //         <li><Link className="nav-link" href="/contact">Contact</Link></li>
    //     </>
    // )

    return (
        <nav className="fixed top-0 left-0 right-0 z-100 px-12 py-7 flex justify-between items-center mix-blend-multiply">
            <a href="#" className="font-serif text-lg font-bold italic text-ink no-underline tracking-snug">Nora.</a>
            <div className="flex items-center gap-9">
                <a href="#work"
                    className="nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200">Work</a>
                <a href="#about"
                    className="nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200">About</a>
                <a href="#services"
                    className="nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200">Services</a>
                <a href="#contact"
                    className="nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200">Contact</a>
                <div className="hidden md:flex items-center gap-1.75 text-[12px] text-mid">
                    <div className="w-1.75 h-1.75 rounded-full bg-green-500 animate-pulse-dot"></div>
                    Available now
                </div>
            </div>
        </nav>
    );
};

export default NavBar;