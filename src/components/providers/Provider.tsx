"use client";
import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Footer } from "../shared/Footer";
import Navbar from "../shared/Navbar";

const queryClient = new QueryClient();
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
