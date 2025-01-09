"use client";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const dashboardToken =
    typeof localStorage !== "undefined" &&
    localStorage.getItem("dashboardToken");
  if (dashboardToken !== process.env.NEXT_PUBLIC_DASHBOARD_TOKEN)
    return redirect("/");
  return <div className="container-center min-h-screen py-6">{children}</div>;
};

export default DashboardLayout;
