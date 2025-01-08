"use client";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center gap-5">
        <Link
          href={`/dashboard/addproject`}
          className="flex h-28 items-center justify-center rounded-md border border-black p-6"
        >
          Add New Project
        </Link>
        <Link
          href={`/dashboard/editproject`}
          className="flex h-28 items-center justify-center rounded-md border border-black p-6"
        >
          {" "}
          Edit Project
        </Link>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
