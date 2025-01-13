import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
// import HireMe from "@/components/HireMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="space-y-10 text-base-content md:text-lg lg:space-y-16">
      <div>
        <Hero />
        <div className="mb-20">
          <AboutMe />
        </div>
      </div>
      <Skills />
      <Projects />
      {/* <HireMe /> */}
      <ContactMe />
    </main>
  );
}
