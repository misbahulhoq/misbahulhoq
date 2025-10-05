"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { BlogFormData } from "@/types/blog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { baseUrl } from "@/lib/baseUrl";
const isEmptyRegex = /^(?:\s|<[^>]+>|&nbsp;|&#160;)*$/;

function hasRealText(htmlString: string): boolean {
  // Return the opposite of whether it's an "empty" string
  return !isEmptyRegex.test(htmlString);
}
const AddBlog = () => {
  const { register, handleSubmit } = useForm<BlogFormData & { tags: string }>();
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published" | "archived">(
    "draft",
  );
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

    try {
      const response = await fetch(`${baseUrl}/blogs`, {
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
        toast.success("Blog added successfully!");
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

export default AddBlog;
