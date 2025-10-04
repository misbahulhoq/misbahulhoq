"use client";
import React, { useEffect, useState, useTransition } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Heart,
  Share2,
  CheckCircle,
  Code,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { baseUrl } from "@/lib/baseUrl";
import { Project } from "@/types/project";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    params?.then((data) => {
      setProjectId(data.id);
    });
  }, []);

  useEffect(() => {
    startTransition(() => {
      if (!projectId) {
        return;
      }
      fetch(`${baseUrl}/projects/${projectId}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setProject(data?.data);
          }
        })
        .catch(() => {
          console.log("error");
        });
    });
  }, [projectId]);

  if (pending || !project) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    features,
    technologies,
    thumbnail,
    liveSiteLink,
    repoLinks,
    duration,
  } = project;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % thumbnail.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + thumbnail.length) % thumbnail.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b border-border">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl top-0 right-0 animate-pulse"></div>
          <div
            className="absolute w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl bottom-0 left-0 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative mx-auto container px-6 py-8">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {/* {project.tagline} */}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href={repoLinks.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                Frontend
              </a>
              {repoLinks.backend && (
                <a
                  href={repoLinks.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Backend
                </a>
              )}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  isLiked
                    ? "bg-accent/10 text-accent border border-accent/50"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Liked" : "Like"}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto container px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Project Gallery
              </h2>
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img
                    src={thumbnail[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                {thumbnail.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {thumbnail.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary w-6"
                          : "bg-card/50 hover:bg-card"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-4">
                {thumbnail.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-primary scale-95"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent" />
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Technologies Used
              </h2>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Project Info Card */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-foreground mb-4">
                  Project Information
                </h3>

                <div className="space-y-3">
                  <div className="h-px bg-border"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Duration
                    </p>
                    <p className="text-foreground font-medium">{duration}</p>
                  </div>
                  <div className="h-px bg-border"></div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </a>
                  <a
                    href={repoLinks.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Frontend Repository
                  </a>
                  {repoLinks.backend && (
                    <a
                      href={repoLinks.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Backend Repository
                    </a>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <h3 className="font-bold text-foreground mb-2">
                  Like this project?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's work together on your next big idea!
                </p>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
