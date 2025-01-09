"use client";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center gap-5">
        <Link
          href={`/dashboard/addproject`}
          className="flex h-28 items-center justify-center rounded-md border border-accent p-6 text-accent"
        >
          Add New Project
        </Link>
        <Link
          href={`/dashboard/addarticle`}
          className="flex h-28 items-center justify-center rounded-md border border-accent p-6 text-accent"
        >
          Add New Article
        </Link>
        <Link
          href={`/dashboard/editproject`}
          className="flex h-28 items-center justify-center rounded-md border border-accent p-6 text-accent"
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
