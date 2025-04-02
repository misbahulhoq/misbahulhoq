import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  icon: string;
  description: string;
  percentage?: number;
}
const SkillCard = ({ props }: { props: Props }) => {
  const { title, icon, description } = props;
  return (
    <div className="skill-box relative z-[10] w-[350px] cursor-pointer rounded-lg border p-6 transition-all duration-300 hover:border-primary hover:bg-base-200">
      <div className="mb-3 flex flex-col justify-between gap-5">
        <Image
          src={`${icon}`}
          alt={title}
          height={55}
          width={55}
          className={`${icon === "/mezbah-skills/mongodb.svg" && "h-16 w-16"} ${title === "React" && "spin spin-slow"}`}
        />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
