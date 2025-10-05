"use client";
import { baseUrl } from "@/lib/baseUrl";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const BlogEditPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [blogId, setBlogId] = useState<string | null>(null);
  const { data, isPending } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/blogs/${blogId}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },
  });

  useEffect(() => {
    params?.then((data) => {
      setBlogId(data.id);
    });
  }, [params]);

  if (isPending) {
    return <div>Loading...</div>;
  }
  const blog = data.data;
  console.log(blog);
  return (
    <div>
      <h1>{blog?.data?.title}</h1>
    </div>
  );
};

export default BlogEditPage;
