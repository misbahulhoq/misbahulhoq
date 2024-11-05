"use client";
import React from "react";

const DownloadButton = () => {
  const downloadResume = () => {
    const fileUrl = "/mezbah-resume.pdf";
    const fileName = "Resume-Mezbah.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button onClick={downloadResume} className="btn btn-primary rounded-full">
      Download Resume
    </button>
  );
};

export default DownloadButton;
