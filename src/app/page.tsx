import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-base-content space-y-10 lg:space-y-24 selection:bg-secondary selection:text-secondary-content">
      <Hero />
      <AboutMe />
      <Skills />
      <HireMe />
      <ContactMe />
    </main>
  );
}
