"use client";
import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import Projects from "./Shared/Projects";

const ProjectsHome = () => {
  return (
    <section>
      <SectionHeading sectionHeadingProps={{ heading: "My Projects" }} />
      <Projects isProjectsPage={false} />
    </section>
  );
};

export default ProjectsHome;
