"use client";
import { baseUrl } from "@/api/api";
import React, { FormEvent } from "react";

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)
        .value,
      subject: (
        e.currentTarget.elements.namedItem("subject") as HTMLInputElement
      ).value,
      message: (
        e.currentTarget.elements.namedItem("message") as HTMLInputElement
      ).value,
    };
    console.log(formData);

    try {
      const response = await fetch(`${baseUrl}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Message sent successfully:", result);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="">
      <form
        className="mx-auto max-w-md space-y-6 rounded-lg bg-opacity-20"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="name">
            Full name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name ..."
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email ..."
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Subject <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject ..."
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="message">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Enter your message ..."
            rows={10}
            className="input input-bordered min-h-44 w-full py-3"
          ></textarea>
        </div>

        <button className="btn btn-primary max-[400px]:btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
