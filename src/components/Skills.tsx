import Image from "next/image";
import React from "react";

// const skillImages = [
//   {
//     img: "/mezbah-skills/js.svg",
//     alt: "JS",
//   },
//   {
//     img: "/mezbah-skills/react.svg",
//     alt: "React",
//   },
//   {
//     img: "/mezbah-skills/next.svg",
//     alt: "Next.Js",
//   },
//   {
//     img: "/mezbah-skills/css.svg",
//     alt: "CSS",
//   },
//   {
//     img: "/mezbah-skills/tailwind.svg",
//     alt: "TailwindCSS",
//   },
//   {
//     img: "/mezbah-skills/html.svg",
//     alt: "CSS",
//   },
//   {
//     img: "/mezbah-skills/node.svg",
//     alt: "NodeJS",
//   },
//   {
//     img: "/mezbah-skills/firebase.svg",
//     alt: "Firebase Auth",
//   },
//   {
//     img: "/mezbah-skills/linux.svg",
//     alt: "Linux",
//   },
// ];

const skills = [
  {
    title: "JavaScript",
    percentage: 50,
    icon: "/mezbah-skills/js.svg",
    description:
      "While it's not possible for a developer to know all about javascript or any other programming language, but having 50-60% knowledge about it may get the job done.",
  },

  {
    title: "React",
    percentage: 60,
    icon: "/mezbah-skills/react.svg",
    description:
      "Developing an application only with vanilla javascript takes more time. This is where a library or framework comes into play.I choose React as it's one of the most popular library and it has a large community with huge learning resources",
  },

  {
    title: "Node.JS",
    percentage: 20,
    icon: "/mezbah-skills/node.svg",
    description:
      "I have just basic knowledge about Node.Js and Express. I already built some applications using node and express. I am currenty learning Node.JS.",
  },

  {
    title: "ExpressJS",
    icon: "/mezbah-skills/express.png",
    description:
      "Structuring an app only with NodeJs will take longer time and that's where Express comes into the picture. ",
  },

  {
    title: "MongoDB",
    icon: "/mezbah-skills/mongodb.svg",
    description:
      "Structuring an app only with NodeJs will take longer time and that's where Express comes into the picture. ",
  },

  {
    title: "TypeScript",
    percentage: 40,
    icon: "/mezbah-skills/typescript.svg",
    description:
      "I use typescript for type safety and I also like the fact when typescript suggests me the code snippets.This behavior of typescript reduce the chance of making spelling mistakes.",
  },

  {
    title: "Next.JS",
    percentage: 60,
    icon: "/mezbah-skills/next.svg",
    description:
      "As React is a library, it does not come up with all the needed feature for an web application such as routing, authentication etc. In my opinion, Next.js is the best solution for these features. That's why I choose it.",
  },
  // {
  //   title: "CSS",
  //   percentage: 50,
  //   icon: "/mezbah-skills/css.svg",
  //   description:
  //     "While I am writing css for a long time, still I can't say that I know all about it. As there's a vast amount of topics which I don't know still. But the requirement of several projects will teach me along the way.",
  // },

  // {
  //   title: "Firebase",
  //   percentage: 30,
  //   description:
  //     "Firebase is a great tool as I don't need to write all the logic for authentication from scratch. I use it only for authenticaion.",
  // },
  // {
  //   title: "Redux",
  //   percentage: 10,
  //   description:
  //     "I have just some basic idea about it. I am still learing it...",
  // },
  {
    title: "Linux",
    percentage: 20,
    icon: "/mezbah-skills/linux.svg",
    description:
      "As it is one of the most popular OS for servers, so I have a deeper interest about it. I am just familiar with it's command line. I am using it as my primary OS.",
  },
];

const Skills = () => {
  return (
    <div className="container-center">
      <h2 className="mb-10 text-center text-4xl font-bold lg:text-5xl">
        My <span className="text-success">Skills</span>
      </h2>
      <div className="grid gap-x-6 gap-y-6 pb-11 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return (
            <div
              key={skill.title}
              className="skill-box relative z-[10] cursor-pointer rounded-lg border p-6 transition-all duration-300 hover:border-primary hover:bg-base-200"
            >
              <div className="mb-3 flex flex-col justify-between gap-5">
                <Image
                  src={`${skill.icon}`}
                  alt={skill.title}
                  height={55}
                  width={55}
                  className={`${skill.icon === "/mezbah-skills/mongodb.svg" && "h-16 w-16"} ${skill.title === "React" && "spin spin-slow"}`}
                />
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                {/* <p className="">
                  {skill.percentage}
                  <span className="text-success">%</span>{" "}
                </p> */}
              </div>
              <p>{skill.description}</p>
              {/* <progress
                className="progress progress-success absolute -bottom-5 mt-4 w-full"
                value={skill.percentage}
                max="100"
              ></progress> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
