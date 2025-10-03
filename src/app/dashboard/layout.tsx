"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <DashboardSidebar />

      {/* Main Content Area - Demo */}
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
};

export default layout;
