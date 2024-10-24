import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-section bg-base-200 min-h-[calc(100vh-64px)]">
      <div className=" container-center flex flex-col md:flex-row items-center justify-between ">
        <div className="text-wrapper space-y-3 max-w-[450px]">
          <h2 className="text-5xl font-bold">
            Developer <br /> <span className="text-primary">Mezbah Uddin </span>
            here.
          </h2>
          <p>Passionate about web development.</p>
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
    </section>
  );
};

export default Hero;
