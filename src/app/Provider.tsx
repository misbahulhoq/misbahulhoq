"use client";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type SectionContextType = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

const SectionContext = createContext<SectionContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};
const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>("");
  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      <Header />
      {children}
      <Footer />
    </SectionContext.Provider>
  );
};

export default Provider;

export const useCurrentSection = () => {
  const context = useContext(SectionContext);
  if (!context)
    throw new Error("useCurrentSection must be used within a Provider");

  return context;
};
