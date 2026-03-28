"use client";
import { apiUrl } from "@/lib/urls";
import { BlogFormData } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const isEmptyRegex = /^(?:\s|<[^>]+>|&nbsp;|&#160;)*$/;
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
function hasRealText(htmlString: string): boolean {
  // Return the opposite of whether it's an "empty" string
  return !isEmptyRegex.test(htmlString);
}
const BlogEditPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [blogId, setBlogId] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<BlogFormData & { tags: string }>();
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published" | "archived">(
    "draft",
  );
  const { data, isPending } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/blogs/${blogId}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },
  });

  const blog = data?.data;

  useEffect(() => {
    params?.then((data) => {
      setBlogId(data.id);
    });

    if (blog) {
      setExcerpt(blog.excerpt);
      setContent(blog.content);
      setStatus(blog.status);
    }
  }, [params, data, blog]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  const onSubmit = async (data: BlogFormData & { tags: string }) => {
    if (!hasRealText(content)) {
      toast.error("Content is required!");
      return;
    }
    if (!hasRealText(excerpt)) {
      toast.error("Excerpt is required!");
      return;
    }
    const payload: BlogFormData = {
      title: data.title,
      slug: data.title.replace(/\s+/g, "-").toLowerCase(),
      content,
      excerpt,
      tags: data.tags.split(",").map((tag) => tag.trim()),
      status,
    };

    console.log(payload);

    try {
      const response = await fetch(`${apiUrl}/blogs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        if (response.status === 409) {
          toast.error("Blog with same title already exists!");
        } else {
          toast.error("Something went wrong!");
        }
      } else {
        toast.success("Blog updated successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="add-blog" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="mb-4 block w-full border p-2"
        placeholder="Title"
        {...register("title")}
        defaultValue={blog?.title}
        required
      />
      <label className="mb-1 block">Excerpt</label>
      <ReactQuill value={excerpt} onChange={setExcerpt} />
      <label className="mt-4 mb-1 block">Content</label>
      <ReactQuill value={content} onChange={setContent} />
      <input
        type="text"
        className="mt-4 mb-4 block w-full border p-2"
        placeholder="Tags (comma separated)"
        {...register("tags")}
        required
        defaultValue={blog?.tags?.join(", ")}
      />
      <Select
        required
        defaultValue="draft"
        {...register("status")}
        onValueChange={(value: "draft" | "published" | "archived") =>
          setStatus(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select blog status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="mt-4 block">Submit</Button>
    </form>
  );
};

export default BlogEditPage;
