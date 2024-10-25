import Image from "next/image";
import React from "react";

const ContactMe = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold">Contact Me</h2>
        <p className="mb-8 text-lg">
          Feel free to reach out via phone or email. I&apos;d love to connect
          with you!
        </p>

        <div className="flex flex-col items-center space-y-4">
          {/* Phone Number */}
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

          {/* Email Address */}
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
        </div>

        {/* Optional Message Form */}
        {/* <form className="mt-10 space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Type your message here..."
              className="textarea textarea-bordered w-full"
              //   rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default ContactMe;
