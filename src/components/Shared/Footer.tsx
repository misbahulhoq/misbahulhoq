import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-base-200 px-4 py-9 text-base-content">
      <div className="text-center">
        <p className="text-center">
          © {new Date().getFullYear()} Created by Md Mezbah Uddin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
