import React from "react";
import { Send } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactMeSection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl top-1/4 left-0 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl bottom-1/4 right-0 animate-pulse"
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="order-2 lg:order-1 lg:max-w-[500px]">
            <ContactForm />
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="order-1 lg:order-2 space-y-8">
            <ContactInfo />
          </div>
        </div>

        {/* Bottom Divider with Quote */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            <blockquote className="text-lg italic text-muted-foreground">
              &quot;Great things are never done by one person. They&apos;re done
              by a team of people.&quot;
            </blockquote>
            <p className="text-sm text-muted-foreground mt-2">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
