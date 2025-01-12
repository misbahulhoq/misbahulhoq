"use client";
import { baseUrl } from "@/api/api";
import React from "react";
import "../../../styles/editor.css";
import { processHtml } from "@/utils/htmlImageConverter";

const ProjectDetailsPage = ({ params }: { params: { slug: string } }) => {
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
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const processedHtml = processHtml(project?.html || "");

  return (
    <section className="project-details-page py-5">
      {/* Project Details      */}
      <div className="container-center project-details">
        <div dangerouslySetInnerHTML={{ __html: processedHtml }}></div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
