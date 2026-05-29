import HeroSec from "@/components/home/HeroSec";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <HeroSec />
        <HeroSec />
        <Projects />
      </div>
    </div>
  );
}
