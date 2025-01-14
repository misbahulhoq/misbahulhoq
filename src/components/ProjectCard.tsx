"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { ProjectDetails } from "@/types/projectType";

/**
 * A single project card in the projects list.
 *
 * This component renders a Tailwind CSS card with a 400x225 image, a title, and
 * a link to the project page.
 *
 * @returns a JSX element representing a project card.
 */

const ProjectCard = ({ props }: { props: ProjectDetails }) => {
  const { title, thumbnail, slug, liveUrl } = props || {};

  return (
    <div className="card card-bordered card-compact mx-auto h-[300px] max-w-96 bg-base-100 shadow-xl">
      <figure className="border-b border-primary">
        <Image
          src={thumbnail || "/phone.svg"}
          alt={title + " Thumbnail"}
          width={300}
          height={500}
          className="h-[290px] w-full object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center gap-4">
          <Link
            href={`/projects/${slug}`}
            className="btn btn-outline btn-primary btn-sm max-w-fit"
          >
            Details
          </Link>
          <a
            href={liveUrl}
            target="_blank"
            className="btn btn-primary btn-sm max-w-fit rounded-sm"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
