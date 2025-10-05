"use client";
import React from "react";
import { BookOpen, Search } from "lucide-react";
import BlogCard from "@/components/shared/BlogCard";
import { BlogType } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/lib/baseUrl";
import { usePathname } from "next/navigation";
const fetchProjects = async () => {
  const res = await fetch(baseUrl + "/blogs", {
    credentials: "include",
  });
  return res.json();
};

export default function BlogListing() {
  const { data, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchProjects,
  });

  const pathName = usePathname();

  if (isPending)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  const blogs = data?.data;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-5">
        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Learn & Grow
            </span>
          </div>
          <h1 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            Blog & Articles
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Insights, tutorials, and thoughts on web development, design, and
            technology.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 space-y-6">{/* Search Bar */}</div>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogs.map((blog: BlogType) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                adminMode={pathName.includes("dashboard")}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="bg-primary/10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
              <Search className="text-primary h-10 w-10" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-semibold">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
