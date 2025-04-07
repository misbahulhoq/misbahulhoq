"use client";

import Projects from "@/components/Shared/Projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className={`projects-page pt-7`}>
      <div className="container-center">
        <h1 className="mb-6 text-center text-3xl font-bold">My Projects</h1>
        <Projects isProjectsPage={true} />
      </div>
    </section>
  );
};

export default ProjectsPage;
