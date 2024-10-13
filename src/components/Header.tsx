import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="py-3">
      <div className="container-center flex justify-between items-center gap-5">
        <Link href="/" className="btn btn-outline rounded-full btn-sm">
          Home
        </Link>
        <Link href="/contact" className="btn btn-primary rounded-full btn-sm">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Header;
