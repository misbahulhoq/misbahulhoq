import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import { PiDotsNine } from "react-icons/pi";

const AboutMe = () => {
  return (
    <section className="about-me-section relative bg-neutral py-12 text-neutral-content lg:py-16">
      <div className="container-center relative">
        <SectionHeading sectionHeadingProps={{ heading: "About Me" }} />
        <p className="mt-7">
          Hi! I&apos;m a passionate front-end developer with a keen eye for
          design and user experience. I specialize in building responsive,
          dynamic websites and applications using modern technologies like
          React, Tailwind CSS, and JavaScript. My focus is on creating clean,
          efficient code while delivering seamless, user-friendly interfaces. I
          enjoy working with tools like React Hook Form, Axios, and Firebase,
          and I&apos;m always eager to learn and implement the latest trends in
          web development. When I&apos;m not coding, I&apos;m exploring new
          problem-solving techniques and enhancing my skills in data structures
          and algorithms.
        </p>
        <div className="absolute -top-12 right-20 h-64 w-64 rounded-full bg-secondary opacity-30 blur-xl"></div>
      </div>
      <div className="dots-wrapper flex items-center space-x-[-7px] text-4xl">
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
