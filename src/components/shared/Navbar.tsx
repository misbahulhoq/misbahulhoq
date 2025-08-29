import React from "react";
import ThemeToggler from "./ThemeToggler";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

const navLinks: { href: string; label: string }[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-5 flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Mezbah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side Action Button (Desktop) */}
        <div className="hidden md:block">
          <Button size="default" className="rounded-full">
            <>
              <Download />
              <a
                href="https://docs.google.com/document/d/1pDQoLB5JTBV-Q_QNMCulFohbcLhJZSyA-fli2lDb2uc/export?format=pdf"
                target="_blank"
                className="rounded-full"
              >
                Download Resume
              </a>
            </>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-4 py-3">
              <DialogTitle className="sr-only">Menu items</DialogTitle>
              <div className="grid gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4 rounded-full">
                  <Download />
                  <a
                    href="https://docs.google.com/document/d/1pDQoLB5JTBV-Q_QNMCulFohbcLhJZSyA-fli2lDb2uc/export?format=pdf"
                    target="_blank"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
