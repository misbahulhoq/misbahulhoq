import React from "react";

const ContactMe = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out via phone or email. I&apos;d love to connect
          with you!
        </p>

        <div className="flex flex-col items-center space-y-4">
          {/* Phone Number */}
          <a href="tel:+8801521377999" className="text-xl font-semibold">
            <i className="fas fa-phone-alt mr-2"></i>+8801521377999
          </a>

          {/* Email Address */}
          <a
            href="mailto:extraordinarymisbah@gmail.com"
            className="text-xl font-semibold"
          >
            <i className="fas fa-envelope mr-2"></i>
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
