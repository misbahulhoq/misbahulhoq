"use client";
import { baseUrl } from "@/api/api";
import Spinner from "@/components/Shared/Spinner";
import React from "react";

const ProjectEditPage = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = React.useState<{
    title: string;
    html: string;
    thumbnail: string;
    liveUrl: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/projects/${params.slug}`);
      const project = await response.json();
      setProject(project);
      setLoading(false);
    };
    fetchProject();
  }, [params.slug]);

  if (loading) {
    return <Spinner />;
  }
  console.log(project);
  return <div>ProjectEditPage</div>;
};

export default ProjectEditPage;
