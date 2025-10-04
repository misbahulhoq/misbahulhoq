"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const techs = [
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "TypeScript",
  "MongoDB",
  "Jest",
  "Cypress",
];
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative container mx-auto px-5 py-16 lg:py-25">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content Section */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-4 py-2 backdrop-blur-sm">
              <div className="bg-accent h-2 w-2 animate-pulse rounded-full"></div>
              <span className="text-sm font-medium">
                Available for new projects
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="from-primary to-accent relative z-10 bg-gradient-to-r bg-clip-text text-transparent">
                    Mezbah
                  </span>
                  <span className="bg-primary/20 absolute bottom-2 left-0 -z-0 h-3 w-full"></span>
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl">Full Stack Developer</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              I craft exceptional digital experiences with modern web
              technologies. Specializing in building scalable web applications
              that solve real-world problems and delight users.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, index) => (
                <span
                  key={tech}
                  className="hover:border-accent/50 hover:text-accent dark:hover:text-accent cursor-pointer rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm transition-all duration-300 dark:border-[#1E293B] dark:bg-[#1E293B]/50 dark:text-[#A0AEC0]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={"#projects"}>
                <Button
                  variant={"outline"}
                  size="lg"
                  className="border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer rounded-full"
                >
                  View My Work
                </Button>
              </Link>
              {/* Download Resume Button */}
              <Button size="lg" className="rounded-full">
                <>
                  <Download />
                  <a
                    href="https://docs.google.com/document/d/1pDQoLB5JTBV-Q_QNMCulFohbcLhJZSyA-fli2lDb2uc/export?format=pdf"
                    target="_blank"
                    className="rounded-full"
                  >
                    Download Resume
                  </a>
                </>
              </Button>
            </div>
          </div>

          {/* Right Video Section */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="group relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-[#00D9FF] via-[#7C3AED] to-[#00D9FF] opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100"></div>

              {/* Video container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#060918] shadow-2xl">
                {/* Video placeholder - Replace with your actual video */}
                <div className="flex aspect-[9/16] items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#060918] sm:aspect-video">
                  <div className="h-full w-full text-center">
                    <iframe
                      // width="560"
                      //height="315"
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/ugmlP8v2y6E"
                      title="Embedded YouTube Short"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Floating stats/badges */}
              {/* <div className="absolute -bottom-6 -left-6 bg-[#060918] border border-[#1E293B] rounded-xl p-2.5 shadow-xl backdrop-blur-sm hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00D9FF] to-[#7C3AED] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    5+
                  </div>
                  <div>
                    <p className="text-white font-semibold">Years</p>
                    <p className="text-[#A0AEC0] text-xs">Experience</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute -top-6 -right-6 bg-[#060918] border border-[#1E293B] rounded-xl p-2.5 shadow-xl backdrop-blur-sm hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#00D9FF] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    5+
                  </div>
                  <div>
                    <p className="text-white font-semibold">Projects</p>
                    <p className="text-[#A0AEC0] text-xs">Completed</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform animate-bounce flex-col items-center gap-2 lg:flex">
          <span className="text-sm text-[#A0AEC0]">Scroll Down</span>
          <svg
            className="h-6 w-6 text-[#00D9FF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
