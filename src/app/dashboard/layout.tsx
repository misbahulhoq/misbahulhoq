"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <DashboardSidebar user={user as { name: string; email: string }} />

      {/* Main Content Area - Demo */}
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
};

export default layout;
