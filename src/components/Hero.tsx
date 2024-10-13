import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-section container-center flex flex-col md:flex-row items-center justify-between">
      <div className="text-wrapper space-y-3 max-w-96">
        <h2 className="text-5xl font-bold">
          I am <span className="text-primary">Developer</span> Mezbah Uddin
        </h2>
        <p></p>
        <div className="buttons">
          <Link
            href="/contact"
            className="btn btn-primary rounded-full btn-wide"
          >
            Hire Me
          </Link>
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
  );
};

export default Hero;
