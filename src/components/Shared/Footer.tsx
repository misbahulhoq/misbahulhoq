import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-9 bg-base-200 text-base-content mt-10">
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
