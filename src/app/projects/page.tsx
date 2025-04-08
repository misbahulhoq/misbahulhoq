"use client";

import { Projects } from "@/components/Projects";
// import SectionHeading from "@/components/Shared/SectionHeading";
import React from "react";

const ProjectsHome = () => {
  return (
    <section className="py-5">
      {/* <SectionHeading sectionHeadingProps={{ heading: "My Projects" }} /> */}
      <Projects />
    </section>
  );
};

export default ProjectsHome;
