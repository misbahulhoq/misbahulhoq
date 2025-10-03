import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { thumbnail, title, description, features, technologies, repoLinks } =
    project;
  return (
    <div className="w-full max-w-sm bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
        {/* Replace this div with actual image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
            title="View Live Site"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={repoLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border text-foreground rounded-full hover:scale-110 hover:border-primary transition-all shadow-lg"
            title="Frontend Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          {repoLinks.backend && (
            <a
              href={repoLinks.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border text-foreground rounded-full hover:scale-110 hover:border-primary transition-all shadow-lg"
              title="Backend Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-full text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        {/* <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed"
        ></div> */}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end pt-3 border-t border-border">
          {/* Stats */}
          {/* Actions */}
          <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:scale-105 transition-transform">
            View Details
          </button>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </div>
  );
}
