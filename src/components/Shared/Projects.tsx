"use client";
import { baseUrl } from "@/api/api";
import ProjectCard from "@/components/ProjectCard";
import Spinner from "@/components/Shared/Spinner";
import { ProjectDetails } from "@/types/projectType";
import React from "react";

const Projects = ({ isProjectsPage }: { isProjectsPage: boolean }) => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      const res = await fetch(`${baseUrl}/api/projects`);
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects().then(() => {
      setLoading(false);
    });
  }, [projects.length]);

  if (loading)
    return isProjectsPage ? (
      <Spinner />
    ) : (
      <div className="flex h-[500px] justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );

  return (
    <section
      className={`projects-page ${isProjectsPage && "min-h-[90vh] py-6"}`}
    >
      <div className="container-center">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project: ProjectDetails) => (
            <ProjectCard key={project?._id} props={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
