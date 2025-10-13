"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export const Footer = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/misbahulhoq", label: "GitHub", icon: Github },
    {
      href: "https://linkedin.com/in/misbahulhoq",
      label: "LinkedIn",
      icon: Linkedin,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Side: Your Name */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold">
              Md Mezbah Uddin.
            </Link>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer.
            </p>
          </div>

          {/* Center: Quick Nav Links */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Text */}
        <div className="text-muted-foreground mt-8 flex items-center justify-between gap-4 border-t pt-8 pb-14 text-center text-sm md:flex-row">
          <p>&copy; {currentYear} Mezbah.</p>
          <ThemeToggler />
        </div>
      </div>
    </footer>
  );
};
