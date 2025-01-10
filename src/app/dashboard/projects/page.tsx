"use client";
import { baseUrl } from "@/api/api";
import Spinner from "@/components/Shared/Spinner";
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
  return <div>ProjectsPage</div>;
};

export default ProjectsPage;
