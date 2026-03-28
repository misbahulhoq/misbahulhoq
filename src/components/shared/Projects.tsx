"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { apiUrl } from "@/lib/urls";
import { Project } from "@/types/project";
import React, { useEffect, useState, useTransition } from "react";
import { Star } from "lucide-react";

const Projects = () => {
  const [pending, startTransition] = useTransition();
  const [projects, setProjects] = useState<Project[] | undefined>();

  useEffect(() => {
    startTransition(() => {
      fetch(`${apiUrl}/projects`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setProjects(data?.data);
          }
        })
        .catch(() => {
          console.log("error");
        });
    });
  }, []);
  if (pending) {
    return null;
  }
  return (
    <section
      id="projects"
      className="bg-background container mx-auto px-5 py-12"
    >
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mx-auto mb-12 text-center">
          <div className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Star className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">My Work</span>
          </div>
          <h1 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            Featured Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work showcasing full-stack development,
            design, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
