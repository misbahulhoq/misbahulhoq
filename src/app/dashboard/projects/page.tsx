"use client";
import { baseUrl } from "@/api/api";
import Spinner from "@/components/Shared/Spinner";
import { ProjectDetails } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const fetchProjects = React.useCallback(async () => {
    setLoading(true);
    const res = await fetch(`${baseUrl}/api/projects`);
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading) return <Spinner />;
  console.log(projects);

  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold">Projects</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project: ProjectDetails) => (
          <div
            key={project._id}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                src={project.thumbnail || "/phone.svg"}
                alt="project"
                width={400}
                height={350}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              {/* <p>{project}</p> */}
              <div className="card-actions justify-end">
                <Link
                  href={`/projects/${project.slug}`}
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary btn-sm max-w-fit"
                >
                  View
                </Link>
                <Link
                  href={`/dashboard/projects/edit/${project.slug}`}
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm max-w-fit"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
