import { apiUrl } from "@/lib/urls";
import React from "react";
import { Badge } from "@/components/ui/badge";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const res = await params;
  const blogRes = await fetch(`${apiUrl}/blogs/${res.id}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await blogRes.json();
  const blog = data?.data;

  return (
    <main className="bg-background text-foreground py-5">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="border-border mb-8 border-b pb-6">
          {/* Status Badge */}
          <div className="mb-4 flex items-center justify-between"></div>

          {/* Title */}
          <h1 className="text-primary text-4xl font-extrabold tracking-tight md:text-5xl">
            {blog.title}
          </h1>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {blog.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Blog Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </main>
  );
};

export default BlogDetailsPage;
