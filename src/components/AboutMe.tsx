"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./Shared/SectionHeading";
import { PiDotsNine } from "react-icons/pi";
import Image from "next/image";

const AboutMe = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  return (
    <section
      id="about-me"
      className="about-me-section relative items-center overflow-hidden bg-neutral py-12 text-neutral-content lg:flex lg:h-[calc(100vh-100px)] lg:py-0"
    >
      <motion.div
        ref={ref}
        className="container-center relative z-10 min-h-fit"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="left-and-right-wrapper items-center justify-between py-6 lg:grid lg:grid-cols-2 lg:gap-5 lg:py-0">
          <motion.div className="left-content image-wrapper hidden lg:block">
            <Image
              src="/ilustrations/using-laptop-two.webp"
              alt="Computer  Illustration"
              height={500}
              width={500}
              className="h-[350px] w-[350px] rounded-full object-cover"
            />
          </motion.div>

          <div className="right-content about-me-text">
            <SectionHeading
              sectionHeadingProps={{
                heading: "About Me",
                className: "!text-left ",
              }}
            />
            <p className="">
              I am a passionate MERN stack developer. I have a deep interest in
              full stack development. I have built some projects using MERN
              stack, where I have also used TypeScript (in both front-end and
              back-end), Nextjs, Redux toolkit, Mongoose.I love building
              projects from scratch. My next target is to learn DevOps and
              Mobile App Development. As I am dedicated to learn new
              technologies, I believe that hiring me will be a good choice for
              any company. I am working as a part time (4 pm to 9 pm) front-end
              developer at Techjoule from June 2024. Currently I am a student of
              B.Sc(Honors) Fourth Year at National University. Having passion in
              web development has moved me from being a Soil Science specialist
              to a web developer.
            </p>
          </div>
        </div>
        <div className="absolute -top-12 right-20 h-56 w-56 rounded-full bg-purple-600 opacity-20 blur-xl"></div>
      </motion.div>

      <div className="bottom-right-dots-wrapper absolute -bottom-5 right-0 z-[1] flex items-center space-x-[-7px] text-4xl text-primary text-opacity-60">
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

      <div className="top-left-dots-wrapper absolute -top-5 left-0 z-[1] flex items-center space-x-[-7px] text-4xl text-primary text-opacity-60">
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
