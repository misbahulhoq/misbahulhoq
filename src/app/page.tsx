import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import ProjectsHome from "@/components/ProjectsHome";
import { TextParallaxContentExample } from "@/components/Scroll";
import SectionHeading from "@/components/Shared/SectionHeading";
// import HireMe from "@/components/HireMe";
// import Skills from "@/components/Skills";
import SkillsNew from "@/components/SkillsNew";

export default function Home() {
  return (
    <main className="space-y-10 text-base-content md:text-lg lg:space-y-16">
      <div>
        <Hero />
        <div className="mb-20">
          <AboutMe />
        </div>
      </div>
      {/* <Skills /> */}
      <SkillsNew />
      <ProjectsHome />
      {/* <HireMe /> */}
      <ContactMe />
      <div>
        <SectionHeading sectionHeadingProps={{ heading: "My Projects" }} />
        <TextParallaxContentExample />
      </div>
    </main>
  );
}
