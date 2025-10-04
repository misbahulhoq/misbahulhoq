import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  const { thumbnail, title, description, repoLinks, liveSiteLink } = project;
  return (
    <div className="bg-card border-border group w-full max-w-sm overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Thumbnail */}
      <div className="from-primary/20 to-accent/20 relative aspect-video overflow-hidden bg-gradient-to-br">
        {/* Replace this div with actual image */}
        <div className="flex h-full w-full items-center justify-center">
          <Image
            fill
            src={thumbnail[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay on hover */}
        <div className="from-background/90 via-background/50 absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground cursor-pointer rounded-full p-3 shadow-lg transition-transform hover:scale-110"
            title="View Live Site"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href={repoLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border-border text-foreground hover:border-primary rounded-full border p-3 shadow-lg transition-all hover:scale-110"
            title="Frontend Repository"
          >
            <Github className="h-5 w-5" />
          </a>
          {repoLinks.backend && (
            <a
              href={repoLinks.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border-border text-foreground hover:border-primary rounded-full border p-3 shadow-lg transition-all hover:scale-110"
              title="Backend Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-accent/90 text-accent-foreground flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-lg backdrop-blur-sm">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-foreground group-hover:text-primary mb-2 line-clamp-1 text-lg font-bold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-muted-foreground mb-3 line-clamp-2 text-sm leading-relaxed"
        ></div>

        {/* Technologies */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground border-border hover:border-primary/50 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-secondary text-secondary-foreground border-border rounded-full border px-2.5 py-0.5 text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="border-border flex items-center justify-end border-t pt-3">
          {/* Stats */}
          {/* Actions */}
          <Link
            href={`/projects/${project._id}`}
            className="bg-primary text-primary-foreground cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="from-primary via-accent to-primary h-1 bg-gradient-to-r"></div>
    </div>
  );
}
