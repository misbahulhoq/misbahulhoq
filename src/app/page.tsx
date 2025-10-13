import AboutMeSection from "@/components/home/AboutMe";
import Chatbox from "@/components/home/ChatBox";
import ContactMeSection from "@/components/home/ContactMe";
import HeroSection from "@/components/home/Hero";
import Projects from "@/components/shared/Projects";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />

      <AboutMeSection />

      <Projects />

      <ContactMeSection />

      <Chatbox />
    </div>
  );
}
