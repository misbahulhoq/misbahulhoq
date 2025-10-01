import AboutMeSection from "@/components/home/AboutMe";
import HeroSection from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="font-sans ">
      <HeroSection />

      <AboutMeSection />
    </div>
  );
}
