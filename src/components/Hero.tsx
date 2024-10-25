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
    <section className="hero-section bg-base-200 min-h-[calc(100vh-64px)] pt-12 lg:pt-0">
      <div className="container-center flex flex-col md:flex-row items-center justify-between ">
        <div className="left-content text-wrapper space-y-5 max-w-[450px]">
          <h2 className="text-5xl font-bold ">
            Developer <br /> <span className="">Mezbah Uddin </span>
            here.
          </h2>

          <p className="">Passionate about web development.</p>

          {/* Icons wrapper */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-4">
            {skillImages.map((item) => (
              <div key={item.img} className="tooltip" data-tip={item.tooltip}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  height={100}
                  width={100}
                  style={{ backgroundColor: "transparent" }}
                  className={` bg-transparent border-none shadow-none select-none h-[60px] w-[60px] cursor-pointer ${
                    item.img === "/mezbah-skills/react.svg" && "spin-slow"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="buttons flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="" className="btn btn-outline btn-primary">
              Learn More
            </Link>
            <button className="btn btn-primary rounded-full ">
              Download Resume
            </button>
            {/* <Link className="btn btn-outline btn-primary"></Link> */}
          </div>
        </div>

        <div className="image-wrapper">
          <Image
            src="/mezbah-photo.png"
            height={100}
            width={300}
            alt="Mezbah's Photo"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
