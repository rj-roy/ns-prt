import HomeNav from "@/components/header/HomeNav";
import HeroSec from "@/components/home/HeroSec";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <HeroSec />
        <Projects />
      </div>
    </div>
  );
}
