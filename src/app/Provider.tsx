"use client";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import React, { ReactNode } from "react";
import { createContext } from "react";

const SectionContext = createContext(null);

type ProviderProps = {
  children: ReactNode;
};
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <SectionContext.Provider value={null}>
      <Header />
      {children}
      <Footer />
    </SectionContext.Provider>
  );
};

export default Provider;
