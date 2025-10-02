import React from "react";

import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Facebook,
  PhoneCall,
} from "lucide-react";
const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "mezbah.dev@gmail.com",
      link: "mailto:mezbah.dev@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+8801521377999",
      link: "tel:+8801521377999",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dhaka, Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/misbahulhoq/",
      color: "hover:bg-primary/10",
    },
    {
      icon: PhoneCall,
      name: "What's App",
      link: "https://wa.me/+8801521377999",
      color: "hover:bg-primary/10",
    },
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/misbahulhoq",
      color: "hover:bg-foreground/10",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/Misbah900920",
      color: "hover:bg-primary/10",
    },
  ];
  return (
    <>
      {/* Contact Info Cards */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Contact Information
        </h3>

        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">
                  {info.title}
                </h4>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Connect With Me
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group flex flex-col items-center text-center ${social.color}`}
            >
              <social.icon className="w-8 h-8 text-foreground mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Availability Card */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <h4 className="font-semibold text-foreground">Currently Available</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          I&apos;m open to freelance opportunities and full-time positions.
          Let&apos;s create something amazing together!
        </p>
      </div>

      {/* Response Time */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
        <p className="text-sm text-muted-foreground">
          I typically respond within{" "}
          <span className="text-primary font-medium">24 hours</span> during
          business days.
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
