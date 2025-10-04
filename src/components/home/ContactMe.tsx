import React from "react";
import { Send } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactMeSection() {
  return (
    <section
      id="contact"
      className="bg-background relative overflow-hidden py-16 lg:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="bg-primary absolute top-1/4 left-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"></div>
        <div
          className="bg-accent absolute right-0 bottom-1/4 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          color: "var(--foreground)",
        }}
      ></div>

      <div className="relative container mx-auto px-5">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Send className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-foreground mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="order-2 lg:order-1 lg:max-w-[500px]">
            <ContactForm />
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="order-1 space-y-8 lg:order-2">
            <ContactInfo />
          </div>
        </div>

        {/* Bottom Divider with Quote */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="mx-auto max-w-3xl">
            <div className="via-border mb-8 h-px bg-gradient-to-r from-transparent to-transparent"></div>
            <blockquote className="text-muted-foreground text-lg italic">
              &quot;Great things are never done by one person. They&apos;re done
              by a team of people.&quot;
            </blockquote>
            <p className="text-muted-foreground mt-2 text-sm">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
