"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SkillCard from "./SkillCard";
import useSectionObserver from "@/hooks/useSectionObserver";

const skills = [
  {
    title: "JavaScript",
    percentage: 50,
    icon: "/mezbah-skills/js.svg",
    // description:
    //   "While it's not possible for a developer to know all about javascript or any other programming language, but having 50-60% knowledge about it may get the job done.",
    description: "The most popular programming language for web development.",
  },

  {
    title: "React",
    percentage: 60,
    icon: "/mezbah-skills/react.svg",
    description: "The most popular library for building user interfaces.",
    // description:
    //   "Developing an application only with vanilla javascript takes more time. This is where a library or framework comes into play.I choose React as it's one of the most popular library and it has a large community with huge learning resources",
  },

  {
    title: "Node.JS",
    percentage: 20,
    icon: "/mezbah-skills/node.svg",
    description:
      "The most popular backend javascript runtime for web applications.",
    // description:
    //   "I have just basic knowledge about Node.Js and Express. I already built some applications using node and express. I am currenty learning Node.JS.",
  },

  {
    title: "ExpressJS",
    icon: "/mezbah-skills/express.png",
    description: "A lightweight framework for Node.Js.",
    // description:
    //   "Structuring an app only with NodeJs will take longer time and that's where Express comes into the picture. ",
  },

  {
    title: "MongoDB",
    icon: "/mezbah-skills/mongodb.svg",
    description: "A NoSQL database for storing and retrieving data.",
    // description:
    //   "Structuring an app only with NodeJs will take longer time and that's where Express comes into the picture. ",
  },

  {
    title: "TypeScript",
    percentage: 40,
    icon: "/mezbah-skills/typescript.svg",
    description: "A statically typed superset of JavaScript.",
    // description:
    //   "I use typescript for type safety and I also like the fact when typescript suggests me the code snippets.This behavior of typescript reduce the chance of making spelling mistakes.",
  },

  {
    title: "Next.JS",
    percentage: 60,
    icon: "/mezbah-skills/next.png",
    description:
      "The most popular framework of React for building web applications.",
    // description:
    //   "As React is a library, it does not come up with all the needed feature for an web application such as routing, authentication etc. In my opinion, Next.js is the best solution for these features. That's why I choose it.",
  },
  // {
  //   title: "Linux",
  //   percentage: 20,
  //   icon: "/mezbah-skills/linux.svg",
  //   description: "The most popular open source operating system.",
  // },
  {
    title: "Jest",
    percentage: 20,
    icon: "/mezbah-skills/jest.svg",
    description: "The most popular testing framework for JavaScript.",
  },
  {
    title: "Redux Toolkit",
    percentage: 20,
    icon: "/mezbah-skills/redux.svg",
    description: "The most popular state management library for React.",
  },
];

const SkillsNew = () => {
  const ref = useSectionObserver("skills");

  return (
    <div id="skills" className="relative min-h-screen scroll-mt-16">
      <div ref={ref} className="absolute top-0 h-[1px] w-full" />
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h2 className="text-center text-4xl font-bold lg:text-5xl">
        My <span className="text-success">Skills</span>
      </h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {skills.map((skill) => {
            return <SkillCard key={skill.title} props={skill} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNew;
