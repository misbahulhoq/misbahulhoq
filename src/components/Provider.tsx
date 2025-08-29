import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./shared/Navbar";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
