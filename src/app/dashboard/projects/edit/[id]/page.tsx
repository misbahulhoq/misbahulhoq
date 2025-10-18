"use client";
import React, { useEffect, useState } from "react";

const ProjectEditPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string | null>(null);
  console.log(id);
  useEffect(() => {
    params?.then((data) => {
      setId(data?.id);
    });
  }, []);
  return <div>ProjectEditPage</div>;
};

export default ProjectEditPage;
