"use client";
import React, { FormEvent, useState, useTransition } from "react";
import { Send, Loader } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, startSubmission] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    startSubmission(() => {});
  };
  return (
    <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg relative group">
      {/* Gradient border effect on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10"></div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:opacity-60"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:opacity-60"
            placeholder="your-name@domain.com"
            required
          />
        </div>

        {/* Subject Input */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:opacity-60"
            placeholder="Project Inquiry"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:opacity-60"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5" />
                Message sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
