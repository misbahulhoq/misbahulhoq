"use client";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import ProjectsHome from "@/components/ProjectsHome";
import SectionHeading from "@/components/Shared/SectionHeading";
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
      <div>
        <SkillsNew />
      </div>
      {/* <ProjectsHome /> */}
      <Projects />
      {/* <HireMe /> */}
      <ContactMe />
    </main>
  );
}
