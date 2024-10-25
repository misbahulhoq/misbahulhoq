import Image from "next/image";
import React from "react";

const skillImages = [
  {
    img: "/mezbah-skills/js.svg",
    alt: "JS",
  },
  {
    img: "/mezbah-skills/react.svg",
    alt: "React",
  },
  {
    img: "/mezbah-skills/next.svg",
    alt: "Next.Js",
  },
  {
    img: "/mezbah-skills/css.svg",
    alt: "CSS",
  },
  {
    img: "/mezbah-skills/tailwind.svg",
    alt: "TailwindCSS",
  },
  {
    img: "/mezbah-skills/html.svg",
    alt: "CSS",
  },
  {
    img: "/mezbah-skills/node.svg",
    alt: "NodeJS",
  },
  {
    img: "/mezbah-skills/firebase.svg",
    alt: "Firebase Auth",
  },
  {
    img: "/mezbah-skills/linux.svg",
    alt: "Linux",
  },
];

const Skills = () => {
  return (
    <div className="container-center">
      <h2 className="mb-8 text-center text-5xl font-bold">
        My <span className="text-secondary">Skills</span>
      </h2>
      <div className="mx-auto grid max-w-[500px] grid-cols-6 gap-6 pb-11">
        {skillImages.map((item) => (
          <Image
            key={item.img}
            src={item.img}
            alt={item.alt}
            height={500}
            width={500}
            className={`${
              item.img === "/mezbah-skills/react.svg" && "spin-slow"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
