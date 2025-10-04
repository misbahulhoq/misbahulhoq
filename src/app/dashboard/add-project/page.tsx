"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { FormData } from "@/types/project";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/lib/baseUrl";
import toast from "react-hot-toast";

const AddProjectPage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [description, setDescription] = useState("");
  const [thumbnails, setThumbnails] = useState("");
  const [features, setFeatures] = useState("");

  const onSubmit = async (data: FormData) => {
    const payload = {
      title: data.title,
      thumbnail: data.thumbnail.split(",").map((url) => url.trim()),
      repoLinks: {
        frontend: data.frontendRepo,
        backend: data.backendRepo || undefined,
      },
      liveSiteLink: data.liveSiteLink || undefined,
      description,
      features: data.features.split(",").map((feature) => feature.trim()),
      technologies: data.technologies.split(",").map((tech) => tech.trim()),
      displayOrder: Number(data.displayOrder),
    };

    console.log(payload);
    fetch(`${baseUrl}/projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });
    toast.success("Project added successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("title", { required: "Title is required." })}
        placeholder="Title"
        className={`block w-full border p-2`}
        required
      />

      <input
        {...register("frontendRepo")}
        placeholder="Frontend Repo Link"
        className="block w-full border p-2"
      />
      <input
        {...register("backendRepo")}
        placeholder="Backend Repo Link (optional)"
        className="block w-full border p-2"
      />
      <input
        {...register("liveSiteLink")}
        placeholder="Live Site Link (optional)"
        className="w-full border p-2"
      />

      <label className="mb-1 block">Thumbnail URLs (comma separated)</label>
      <ReactQuill value={thumbnails} onChange={setThumbnails} />

      <label className="mb-1 block">Description</label>
      <ReactQuill value={description} onChange={setDescription} />

      <label>Features (comma separated)</label>
      <ReactQuill value={features} onChange={setFeatures} />

      <input
        {...register("technologies")}
        placeholder="Technologies (comma separated)"
        className="block w-full border p-2"
      />

      <input
        type="number"
        {...register("displayOrder")}
        placeholder="Display Order"
        className="border p-2"
      />

      <Button className="block">Add Project</Button>
    </form>
  );
};

export default AddProjectPage;
