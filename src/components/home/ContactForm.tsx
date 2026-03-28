"use client";

import React, { FormEvent, useState } from "react";
import { Send, Loader } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { baseUrl } from "@/lib/urls";

const sendMessage = async (body: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const res = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Failed to send message");
  }
  return res.json();
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { isPending: isSubmitting, mutate } = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Send the form data to the server
    mutate(formData);
  };
  return (
    <div className="bg-card border-border group relative rounded-2xl border p-6 shadow-lg lg:p-8">
      {/* Gradient border effect on hover */}
      <div className="from-primary to-accent absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur transition duration-500 group-hover:opacity-20"></div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="text-foreground mb-2 block text-sm font-medium"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all placeholder:opacity-60 focus:border-transparent focus:ring-2 focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="text-foreground mb-2 block text-sm font-medium"
          >
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all placeholder:opacity-60 focus:border-transparent focus:ring-2 focus:outline-none"
            placeholder="your-name@domain.com"
            required
          />
        </div>

        {/* Subject Input */}
        <div>
          <label
            htmlFor="subject"
            className="text-foreground mb-2 block text-sm font-medium"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all placeholder:opacity-60 focus:border-transparent focus:ring-2 focus:outline-none"
            placeholder="Project Inquiry"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="text-foreground mb-2 block text-sm font-medium"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 transition-all placeholder:opacity-60 focus:border-transparent focus:ring-2 focus:outline-none"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group bg-primary text-primary-foreground hover:shadow-primary/50 relative w-full overflow-hidden rounded-lg px-7 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader className="h-5 w-5" />
                Message sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                Send Message
              </>
            )}
          </span>
          <div className="from-primary to-accent absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
