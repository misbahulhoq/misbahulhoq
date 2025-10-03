"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { baseUrl } from "@/lib/baseUrl";
import { Project } from "@/types/project";
import React, { useEffect, useState, useTransition } from "react";
import { Star } from "lucide-react";

const ViewProjectsPage = () => {
  const [pending, startTransition] = useTransition();
  const [projects, setProjects] = useState<Project[] | undefined>();

  console.log(projects);
  useEffect(() => {
    startTransition(() => {
      fetch(`${baseUrl}/projects`, {
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
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">My Work</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work showcasing full-stack development,
            design, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectsPage;
