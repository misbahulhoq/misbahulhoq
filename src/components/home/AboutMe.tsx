"use client";
import React, { useState } from "react";
import { Code, Database, Rocket, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Daisyui",
        "ShadCN",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Database",
      items: ["MongoDB", "Prisma", "Mongoose", "PostgreSQL"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Git"],
    },
  ];

  const experiences = [
    {
      year: "Aug, 2022 - Dec, 2023",
      role: "Stock Manager",
      company: "Nourish Poultry and Hatchery",
    },
    {
      year: "May, 2024 - 2025",
      role: "Front-end developer Intern",
      company: "TechJoule",
    },
  ];

  const stats = [
    { icon: Code, value: "5+", label: "Projects Completed" },
    { icon: Users, value: "5+", label: "Happy Clients" },
    // { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    // { icon: Award, value: "15+", label: "Awards Won" },
  ];

  return (
    <section
      id="about"
      className="bg-background relative overflow-hidden py-16 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="bg-primary absolute top-0 right-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"></div>
        <div
          className="bg-accent absolute bottom-0 left-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-5">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-primary text-sm font-medium">
              Get to know me
            </span>
          </div>
          <h2 className="text-foreground mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            About Me
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Profile Image & Info */}
          <div className="space-y-8">
            <div className="group relative">
              {/* Image container with gradient border */}
              <div className="from-primary to-accent absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
              <div className="bg-card border-border relative overflow-hidden rounded-2xl border">
                {/* Replace with your image */}
                <div className="from-primary/20 to-accent/20 flex aspect-square items-center justify-center bg-gradient-to-br">
                  <div className="space-y-4 p-8 text-center">
                    <div className="bg-primary/20 border-primary mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2">
                      <Image
                        src={"/mezbah-professional.png"}
                        alt="Md Mezbah Uddin"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border-border hover:border-primary/50 rounded-xl border p-6 transition-colors">
                <Rocket className="text-primary mb-3 h-8 w-8" />
                <h3 className="text-foreground mb-1 font-semibold">
                  Fast Learner
                </h3>
                <p className="text-muted-foreground text-sm">
                  Quick to adapt to new technologies
                </p>
              </div>
              <div className="bg-card border-border hover:border-accent/50 rounded-xl border p-6 transition-colors">
                <Database className="text-accent mb-3 h-8 w-8" />
                <h3 className="text-foreground mb-1 font-semibold">
                  Problem Solver
                </h3>
                <p className="text-muted-foreground text-sm">
                  Love tackling complex challenges
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - About Text & Tabs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-foreground text-2xl font-bold">
                Building the web, one line of code at a time
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer in building
                  scalable web applications. I love transforming complex
                  problems into simple, beautiful, and intuitive solutions.
                </p>
                <p>
                  My journey in tech started with a curiosity about how websites
                  work, and it has evolved into a career where I get to create
                  meaningful digital experiences every day. I believe in writing
                  clean, maintainable code and staying up-to-date with the
                  latest industry trends.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to
                  open-source projects, writing technical blogs, or exploring
                  new technologies that push the boundaries of what&apos;s
                  possible on the web.
                </p>
              </div>
            </div>

            {/* Tabbed Content */}
            <div>
              {/* Tab Buttons */}
              <div className="border-border mb-6 flex gap-2 border-b">
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`relative px-6 py-3 font-medium transition-colors ${
                    activeTab === "skills"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Skills
                  {activeTab === "skills" && (
                    <div className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`relative px-6 py-3 font-medium transition-colors ${
                    activeTab === "experience"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Experience
                  {activeTab === "experience" && (
                    <div className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"></div>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === "skills" && (
                  <div className="animate-in fade-in grid gap-6 duration-300 sm:grid-cols-2">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-3">
                        <h4 className="text-foreground flex items-center gap-2 font-semibold">
                          <div className="bg-primary h-2 w-2 rounded-full"></div>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="bg-secondary text-secondary-foreground border-border hover:border-primary/50 hover:bg-primary/10 cursor-default rounded-lg border px-3 py-1.5 text-sm transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="animate-in fade-in space-y-6 duration-300">
                    {experiences.map((exp, index) => (
                      <div key={index} className="group flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-primary ring-primary/20 h-3 w-3 rounded-full ring-4"></div>
                          {index < experiences.length - 1 && (
                            <div className="bg-border group-hover:bg-primary/50 h-full w-0.5 transition-colors"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="bg-card border-border hover:border-primary/50 rounded-xl border p-6 transition-colors">
                            <p className="text-primary mb-2 text-sm font-medium">
                              {exp.year}
                            </p>
                            <h4 className="text-foreground mb-1 text-lg font-semibold">
                              {exp.role}
                            </h4>
                            <p className="text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border-border hover:border-primary/50 hover:shadow-primary/10 group rounded-xl border p-6 text-center transition-all hover:shadow-lg"
            >
              <stat.icon className="text-primary mx-auto mb-4 h-10 w-10 transition-transform group-hover:scale-110" />
              <div className="text-foreground mb-2 text-3xl font-bold">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="cursor-pointer rounded-full">
            Let&apos;s work Together
          </Button>
        </div>
      </div>
    </section>
  );
}
