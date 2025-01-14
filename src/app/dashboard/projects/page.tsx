"use client";
import { baseUrl } from "@/api/api";
import Spinner from "@/components/Shared/Spinner";
import { ProjectDetails } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPageDashboard = () => {
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

  const handleDelete = async (slug: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const res = await fetch(`${baseUrl}/api/projects/${slug}`, {
        method: "DELETE",
        headers: {
          dashboardtoken: process.env.NEXT_PUBLIC_DASHBOARD_TOKEN as string,
        },
      });
      if (res.ok) {
        const newProjects = projects.filter(
          (project: ProjectDetails) => project.slug !== slug,
        );
        setProjects(newProjects);
      }
    }
  };

  if (loading) <Spinner />;

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
              <div className="card-actions w-full flex-grow">
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

                <button
                  onClick={() => handleDelete(project.slug)}
                  className="btn btn-outline btn-warning btn-sm max-w-fit justify-self-end"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPageDashboard;
