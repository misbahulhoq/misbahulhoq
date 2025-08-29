"use client";
import { Github, Linkedin, Twitter, Moon, Sun, Computer } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import ThemeToggler from "./ThemeToggler";

export const Footer = () => {
  const { setTheme } = useTheme();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/your-username", label: "GitHub", icon: Github },
    {
      href: "https://linkedin.com/in/your-username",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://twitter.com/your-username",
      label: "Twitter",
      icon: Twitter,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8 mx-auto px-5">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Side: Your Name */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold">
              Md Mezbah Uddin.
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer.
            </p>
          </div>

          {/* Center: Quick Nav Links */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
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
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Text */}
        <div className="mt-8 pt-8 flex gap-4 items-center justify-between md:flex-row border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Mezbah.</p>
          <ThemeToggler />
        </div>
      </div>
    </footer>
  );
};
