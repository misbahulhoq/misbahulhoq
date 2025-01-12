"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Spinner from "@/components/Shared/Spinner";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const dashboardToken = localStorage.getItem("dashboardToken");
    if (dashboardToken !== process.env.NEXT_PUBLIC_DASHBOARD_TOKEN) {
      router.push("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <Spinner />; // Show a loading state or nothing while checking authentication
  }

  return <div className="container-center min-h-screen py-6">{children}</div>;
};

export default DashboardLayout;
