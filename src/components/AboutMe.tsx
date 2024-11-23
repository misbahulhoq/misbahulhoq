import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import { PiDotsNine } from "react-icons/pi";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="about-me-section relative overflow-hidden bg-neutral py-12 text-neutral-content lg:py-16"
    >
      <div className="container-center relative z-10 min-h-fit">
        <div className="left-and-right-wrapper items-center justify-between py-6 lg:grid lg:grid-cols-2 lg:gap-5 lg:py-0">
          <div className="left-content image-wrapper hidden lg:block">
            <Image
              src="/ilustrations/using-laptop-two.webp"
              alt="Computer Illustration"
              height={500}
              width={500}
              className="h-[350px] w-[350px] rounded-full object-cover"
            />
          </div>

          <div className="right-content">
            <SectionHeading sectionHeadingProps={{ heading: "About Me" }} />
            <p className="mt-7">
              I am a self taught front end developer working with some of the
              most popular front end development tools mentoined above.Currently
              I am a student of B.Sc(Honors) Fourth Year at National University.
              Having passion in web development has moved me from being a Soil
              Science specialist to a web developer. Addiction to develop eye
              cathing and user friendly web applications may make me a better
              developer.Currently I am working at TechJoule, a web and mobile
              application development company.I have been working here for the
              last 6 months. I have a deeper interest in back end development as
              well as data structures and algorithms. My next plan is to play
              the role of a full stack developer.
            </p>
          </div>
        </div>
        <div className="absolute -top-12 right-20 h-56 w-56 rounded-full bg-purple-600 opacity-20 blur-xl"></div>
      </div>

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
