import React, { useEffect, useState, useTransition } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/lib/baseUrl";
const navLinks: { href: string; label: string }[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<null | any>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      fetch(`${baseUrl}/auth/me`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data?.success) {
            setUser(data?.data);
          }
        });
    });
  }, []);
  if (pending) return null;
  if (pathName.includes("dashboard")) return null;
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold">
          Mezbah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {!user ? (
            <Link
              href={"/login"}
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Login
            </Link>
          ) : (
            <Link
              href={"/dashboard"}
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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
                {!user ? (
                  <Link
                    href={"/login"}
                    className="hover:text-foreground/80 text-foreground transition-colors"
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    href={"/dashboard"}
                    className="hover:text-foreground/80 text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
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
