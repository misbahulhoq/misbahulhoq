"use client";
import ProjectsPage from "@/app/projects/page";
import React from "react";
import SectionHeading from "./Shared/SectionHeading";

const Projects = () => {
  return (
    <section>
      <SectionHeading sectionHeadingProps={{ heading: "My Projects" }} />
      <ProjectsPage isProjectsPage={false} />
    </section>
  );
};

export default Projects;
