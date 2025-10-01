"use client";
import React, { useState } from "react";
import { Code, Database, Rocket, Users, Award, Coffee } from "lucide-react";
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
    <section className="py-16 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl top-0 right-0 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl bottom-0 left-0 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Profile Image & Info */}
          <div className="space-y-8">
            <div className="relative group">
              {/* Image container with gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border">
                {/* Replace with your image */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary">
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
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <Rocket className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">
                  Fast Learner
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quick to adapt to new technologies
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <Database className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-1">
                  Problem Solver
                </h3>
                <p className="text-sm text-muted-foreground">
                  Love tackling complex challenges
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - About Text & Tabs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Building the web, one line of code at a time
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of
                  experience in building scalable web applications. I love
                  transforming complex problems into simple, beautiful, and
                  intuitive solutions.
                </p>
                <p>
                  My journey in tech started with a curiosity about how websites
                  work, and it has evolved into a career where I get to create
                  meaningful digital experiences every day. I believe in writing
                  clean, maintainable code and staying up-to-date with the
                  latest industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to
                  open-source projects, writing technical blogs, or exploring
                  new technologies that push the boundaries of what's possible
                  on the web.
                </p>
              </div>
            </div>

            {/* Tabbed Content */}
            <div>
              {/* Tab Buttons */}
              <div className="flex gap-2 border-b border-border mb-6">
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-6 py-3 font-medium transition-colors relative ${
                    activeTab === "skills"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Skills
                  {activeTab === "skills" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-6 py-3 font-medium transition-colors relative ${
                    activeTab === "experience"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Experience
                  {activeTab === "experience" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === "skills" && (
                  <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
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
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                          {index < experiences.length - 1 && (
                            <div className="w-0.5 h-full bg-border group-hover:bg-primary/50 transition-colors"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                            <p className="text-sm text-primary font-medium mb-2">
                              {exp.year}
                            </p>
                            <h4 className="text-lg font-semibold text-foreground mb-1">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="p-6 rounded-full">
            Let's work Together
          </Button>
        </div>
      </div>
    </section>
  );
}
