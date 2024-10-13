import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-base-content space-y-10">
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
