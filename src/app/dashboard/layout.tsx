"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <DashboardSidebar user={user as { name: string; email: string }} />

      {/* Main Content Area - Demo */}
      <main className="flex-1 px-6 pt-16 lg:px-8 lg:pt-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
