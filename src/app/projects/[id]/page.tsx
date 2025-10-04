"use client";
import React, { useEffect, useState, useTransition } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  Code,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { baseUrl } from "@/lib/baseUrl";
import { Project } from "@/types/project";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    params?.then((data) => {
      setProjectId(data.id);
    });
  }, [params]);

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
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner height={100} width={100} />
      </div>
    );
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
      (prev) => (prev - 1 + thumbnail.length) % thumbnail.length,
    );
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section with Background */}
      <div className="from-primary/10 via-accent/5 to-background border-border relative border-b bg-gradient-to-br">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="bg-primary absolute top-0 right-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"></div>
          <div
            className="bg-accent absolute bottom-0 left-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 py-8">
          {/* Back Button */}
          <button className="text-muted-foreground hover:text-foreground group mb-6 flex items-center gap-2 transition-colors">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h1 className="text-foreground mb-3 text-4xl font-bold lg:text-5xl">
                {title}
              </h1>
              <p className="text-muted-foreground mb-6 text-xl">
                {/* {project.tagline} */}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground flex items-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition-transform hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </a>
              <a
                href={repoLinks.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border-border text-foreground hover:border-primary/50 flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-colors"
              >
                <Github className="h-5 w-5" />
                Frontend
              </a>
              {repoLinks.backend && (
                <a
                  href={repoLinks.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border-border text-foreground hover:border-primary/50 flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Backend
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Project Gallery
              </h2>
              <div className="group relative">
                <div className="border-border aspect-video overflow-hidden rounded-2xl border shadow-xl">
                  <Image
                    fill
                    src={thumbnail[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                {thumbnail.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="bg-card/90 border-border text-foreground hover:bg-primary hover:text-primary-foreground absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-card/90 border-border text-foreground hover:bg-primary hover:text-primary-foreground absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {thumbnail.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
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
                    className={`aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-primary scale-95"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image
                      fill
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-foreground mb-4 flex items-center gap-2 text-2xl font-bold">
                <Layers className="text-primary h-6 w-6" />
                Project Overview
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-muted-foreground leading-relaxed"
              ></div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-foreground mb-6 flex items-center gap-2 text-2xl font-bold">
                <Zap className="text-accent h-6 w-6" />
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card border-border hover:border-primary/50 flex items-start gap-3 rounded-xl border p-4 transition-colors"
                  >
                    <CheckCircle className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-foreground mb-6 flex items-center gap-2 text-2xl font-bold">
                <Code className="text-primary h-6 w-6" />
                Technologies Used
              </h2>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground border-border hover:border-primary/50 hover:bg-primary/10 rounded-lg border px-4 py-2 font-medium transition-all"
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
              <div className="bg-card border-border space-y-4 rounded-2xl border p-6">
                <h3 className="text-foreground mb-4 font-bold">
                  Project Information
                </h3>

                <div className="space-y-3">
                  <div className="bg-border h-px"></div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">
                      Duration
                    </p>
                    <p className="text-foreground font-medium">{duration}</p>
                  </div>
                  <div className="bg-border h-px"></div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="from-primary/10 to-accent/10 border-primary/20 rounded-2xl border bg-gradient-to-br p-6">
                <h3 className="text-foreground mb-4 font-bold">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </a>
                  <a
                    href={repoLinks.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Frontend Repository
                  </a>
                  {repoLinks.backend && (
                    <a
                      href={repoLinks.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Backend Repository
                    </a>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-card border-border rounded-2xl border p-6 text-center">
                <h3 className="text-foreground mb-2 font-bold">
                  Like this project?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Let&apos;s work together on your next big idea!
                </p>
                <Link
                  href={"/#contact"}
                  className="bg-primary text-primary-foreground w-full rounded-lg px-6 py-3 font-semibold transition-transform hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
