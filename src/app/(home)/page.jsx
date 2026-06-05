import ContactSec from "@/components/contact/ContactSec";
import Copyright from "@/components/Copyright";
import AboutSec from "@/components/home/AboutSec";
import Projects from "@/components/home/Projects";
import SkillsSec from "@/components/home/SkillsSec";
import TestimonialsSection from "@/components/home/TestimonialsSec";
import TopHeroSec from "@/components/home/TopHeroSec";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <TopHeroSec/>
        <Projects />
        <SkillsSec/>
        <AboutSec/>
        <TestimonialsSection/>
        <ContactSec/>
        <Copyright/>
      </div>
    </div>
  );
}
