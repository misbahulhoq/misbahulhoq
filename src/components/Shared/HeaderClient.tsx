"use client";
import React from "react";
import dynamic from "next/dynamic";

const NavClient = dynamic(() => import("@/components/Shared/Header"));
const HeaderClient = () => {
  return <NavClient />;
};

export default HeaderClient;
