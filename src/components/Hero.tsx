import Image from "next/image";
import Link from "next/link";
import React from "react";

const skillImages = [
  {
    img: "/mezbah-skills/js.svg",
    alt: "JS",
    tooltip: "JavaScript",
  },
  {
    img: "/mezbah-skills/typescript.svg",
    alt: "TypeScript",
    tooltip: "TypeScript",
  },
  {
    img: "/mezbah-skills/react.svg",
    alt: "React",
    tooltip: "React",
  },
  {
    img: "/mezbah-skills/next.svg",
    alt: "Next.Js",
    tooltip: "Next.JS",
  },
  {
    img: "/mezbah-skills/css.svg",
    alt: "CSS",
    tooltip: "CSS3",
  },
  {
    img: "/mezbah-skills/tailwind.svg",
    alt: "TailwindCSS",
    tooltip: "Tailwind CSS",
  },
  {
    img: "/mezbah-skills/html.svg",
    alt: "HTML",
    tooltip: "HTML",
  },
  {
    img: "/mezbah-skills/node.svg",
    alt: "NodeJS",
    tooltip: "NodeJS",
  },
  {
    img: "/mezbah-skills/firebase.svg",
    alt: "Firebase Auth",
    tooltip: "Firebase Auth",
  },
  {
    img: "/mezbah-skills/linux.svg",
    alt: "Linux",
    tooltip: "Linux",
  },
];

const Hero = () => {
  return (
    <section className="hero-section min-h-[calc(100vh-64px)] bg-base-200 pt-12 lg:pt-0">
      <div className="container-center items- flex flex-col justify-between lg:flex-row">
        <div className="left-content text-wrapper max-w-[450px] space-y-5 self-center">
          <h2 className="text-5xl font-bold">
            Developer <br /> <span className="">Mezbah Uddin </span>
            here.
          </h2>

          <p className="">
            I am a front end developer. Creating front end web applications
            using React, Next.JS, TypeScript, Firebase, TailwindCSS since the
            last 1 year. I am currently interested to learn backend development.
          </p>

          {/* Icons wrapper */}
          <div className="grid grid-cols-3 gap-y-4 md:grid-cols-5">
            {skillImages.map((item) => (
              <div key={item.img} className="tooltip" data-tip={item.tooltip}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  height={100}
                  width={100}
                  // style={{ backgroundColor: "transparent" }}
                  className={`h-[60px] w-[60px] cursor-pointer select-none ${
                    item.img === "/mezbah-skills/react.svg" && "spin-slow"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="buttons flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="" className="btn btn-outline btn-primary">
              Learn More
            </Link>
            <button className="btn btn-primary rounded-full">
              Download Resume
            </button>
            {/* <Link className="btn btn-outline btn-primary"></Link> */}
          </div>
        </div>

        <div className="image-wrapper lg:overflow-x- relative z-10 flex h-fit flex-grow justify-center overflow-y-hidden lg:justify-end">
          <div>
            <div className="absolute -bottom-16 left-1/2 right-0 z-[1] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary sm:h-96 sm:w-96 lg:static lg:h-[420px] lg:w-[420px] lg:translate-x-0"></div>
            <Image
              src="/mezbah-photo.png"
              height={100}
              width={300}
              alt="Mezbah's Photo"
              className="relative z-10 lg:right-16"
            />
            <div className="bg-lines"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
