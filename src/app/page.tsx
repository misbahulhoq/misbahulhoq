import AboutMeSection from "@/components/home/AboutMe";
import ContactMeSection from "@/components/home/ContactMe";
import HeroSection from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="font-sans ">
      <HeroSection />

      <AboutMeSection />

      <ContactMeSection />
    </div>
  );
}
