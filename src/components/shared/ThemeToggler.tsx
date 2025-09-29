"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="flex border px-1.5 py-0.5 items-center gap-2 md:gap-1.5 rounded-full">
      <Button
        variant={theme === "light" ? "default" : "outline"}
        size="icon"
        className={`cursor-pointer rounded-full`}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Button
        variant={theme === "dark" ? "default" : "outline"}
        size={"icon"}
        className={`cursor-pointer rounded-full`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Button
        variant={theme === "system" ? "default" : "outline"}
        size="icon"
        className={`cursor-pointer rounded-full`}
        onClick={() => setTheme("system")}
      >
        <Laptop className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
