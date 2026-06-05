import AboutSec from "@/components/home/AboutSec";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSec from "@/components/home/HeroSec";
import Projects from "@/components/home/Projects";
import SkillsSec from "@/components/home/SkillsSec";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <HeroSec />
        <Projects />
        {/* <ExperienceSection/> */}
        <SkillsSec/>
        <AboutSec/>
      </div>
    </div>
  );
}
