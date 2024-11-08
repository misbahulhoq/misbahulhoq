"use client";
import { baseUrl } from "@/api/api";
import React, { FormEvent, useEffect, useState } from "react";

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModaltext] = useState("");
  useEffect(() => {
    if (showModal) {
      document.querySelector("#my_modal_5")?.classList.add("modal-open");
    }
  }, [showModal]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(false);
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

    try {
      const response = await fetch(`${baseUrl}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setModaltext("Something went wrong");
        throw new Error("Failed to send message");
      }

      // const result = await response.json();
      setModaltext("Your email has been sent successfully!");
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setModaltext("Something went wrong");
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
            required
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
            required
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
            required
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
            required
          ></textarea>
        </div>

        {isLoading ? (
          <button className="btn btn-disabled max-[400px]:btn-block">
            <span className="loading loading-spinner"></span>
            Sending...
          </button>
        ) : (
          <button
            disabled={isLoading}
            className="btn btn-primary max-[400px]:btn-block"
          >
            Submit
          </button>
        )}
      </form>

      {showModal && (
        <>
          <dialog
            id="my_modal_5"
            className="modal modal-open modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div role="alert" className="alert alert-success py-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold">{modalText}</h3>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => {
                      document
                        .querySelector("#my_modal_5")
                        ?.classList.remove("modal-open");
                    }}
                    className="btn btn-warning"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default ContactForm;
