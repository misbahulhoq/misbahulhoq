"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import ContactForm from "./ContactForm";
import useSectionObserver from "@/hooks/useSectionObserver";

const ContactMe = () => {
  const ref = useSectionObserver("contact");
  return (
    <section id="contact" ref={ref} className="scroll-mt-16 py-12">
      <div className="heading-wrapper text-center">
        <SectionHeading sectionHeadingProps={{ heading: "Contact Me" }} />
        {/* <p className="mb-8 text-lg">
          Feel free to reach out via phone or email. I&apos;d love to connect
          with you!
        </p> */}

        {/* <div className="flex flex-col items-center space-y-4">
          <a
            href="tel:+8801521377999"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <Image
              src="/phone.svg"
              alt=""
              height={25}
              width={25}
              className=""
            />
            +8801521377999
          </a>

          <a
            href="mailto:extraordinarymisbah@gmail.com"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <Image
              src="/gmail.svg"
              alt=""
              height={25}
              width={25}
              className=""
            />
            extraordinarymisbah@gmail.com
          </a>
        </div> */}
      </div>

      <div className="container-center grid items-center gap-5 lg:grid-cols-2">
        {/* <Image
          src={`/ilustrations/contact-3.jpg`}
          alt="Contact illustration"
          height={500}
          width={500}
          className="mr-auto hidden grow lg:block"
        /> */}
        <Image
          src={`/ilustrations/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.webp`}
          alt="Contact illustration"
          height={500}
          width={500}
          className="mr-auto hidden grow lg:block"
        />
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
