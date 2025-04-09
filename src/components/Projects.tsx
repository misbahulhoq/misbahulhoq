"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import useSectionObserver from "@/hooks/useSectionObserver";
import SectionHeading from "./Shared/SectionHeading";

const projects = [
  {
    name: "Tuition Batch",
    imgUrl: "/project-images/tuition-batch.png",
    subHeading: "An app that helps teachers to track attendance.",
    heading: "Tuition Batch",
    exampleContent: {
      heading: "Tuition Batch.",
      description:
        "A user friendly app to track attendance. Login with google and start working.",
      projectDetailsLink: "/projects/tuition-batch",
      liveLink: "https://tuitionbatch.vercel.app/",
    },
  },
];

export const Projects = () => {
  const ref = useSectionObserver("projects");
  return (
    <div id="projects" ref={ref} className="scroll-mt-16">
      <SectionHeading sectionHeadingProps={{ heading: "My Projects" }} />
      {projects.map((project) => {
        return (
          <TextParallaxContent
            key={project.heading}
            imgUrl={project.imgUrl}
            subheading={project.subHeading}
            heading={project.heading}
          >
            <ExampleContent props={project.exampleContent} />
          </TextParallaxContent>
        );
      })}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

interface ExampleContentProps {
  heading: string;
  description: string;
  projectDetailsLink: string;
  liveLink: string;
}
const ExampleContent = ({ props }: { props: ExampleContentProps }) => {
  const { heading, description, projectDetailsLink, liveLink } = props;
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{heading}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-6 text-xl md:text-2xl">{description}</p>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Link
            href={liveLink}
            className="btn btn-outline btn-primary !btn-block lg:!btn-wide"
          >
            Live Preview <FiArrowUpRight className="inline" />
          </Link>
          <Link
            href={projectDetailsLink}
            className="btn btn-primary !btn-block lg:!btn-wide"
          >
            Details <FiArrowUpRight className="inline" />
          </Link>
        </div>
      </div>
    </div>
  );
};
