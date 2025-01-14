"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import NavLink from "./NavLink";

const Header = () => {
  const [theme, setTheme] = useState("");
  const [showBlur, setShowBlur] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMe, setIsMe] = useState(false);

  const navLinksPc = (
    <>
      <NavLink activeClassName="text-primary" href="/">
        Home
      </NavLink>
      <NavLink activeClassName="text-primary" href="/about">
        About
      </NavLink>
      <NavLink activeClassName="text-primary" href="/skills">
        Skills
      </NavLink>
      <NavLink activeClassName="text-primary" href="/projects">
        Projects
      </NavLink>
      <NavLink activeClassName="text-primary" href="/blogs">
        Blogs
      </NavLink>
      <NavLink activeClassName="text-primary" href="/contact">
        Contact
      </NavLink>
      {isMe && (
        <NavLink activeClassName="text-primary" href="/dashboard">
          Dashboard
        </NavLink>
      )}
    </>
  );

  const navLinksMobile = (
    <>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary "
        href="/"
        onClick={() => setShowMenu(false)}
      >
        Home
      </NavLink>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary"
        href="/about"
        onClick={() => setShowMenu(false)}
      >
        About
      </NavLink>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary"
        href="/skills"
        onClick={() => setShowMenu(false)}
      >
        Skills
      </NavLink>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary"
        href="/projects"
        onClick={() => setShowMenu(false)}
      >
        Projects
      </NavLink>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary"
        href="/blogs"
        onClick={() => setShowMenu(false)}
      >
        Blogs
      </NavLink>
      <NavLink
        className="block rounded-xl py-3 text-center"
        activeClassName="text-primary-content bg-primary "
        href="/contact"
        onClick={() => setShowMenu(false)}
      >
        Contact
      </NavLink>
    </>
  );

  useEffect(() => {
    // Initialize theme
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    // Initialize user role (isMe)
    const dashboardToken = localStorage.getItem("dashboardToken");
    setIsMe(dashboardToken === process.env.NEXT_PUBLIC_DASHBOARD_TOKEN);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowBlur(true);
      } else {
        setShowBlur(false);
      }
    });
  }, []);

  useEffect(() => {
    document.getElementById("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dim" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={`sticky top-0 z-20 py-3 lg:py-3 ${
        showBlur ? "bg-base-100" : "bg-base-200"
      } ${showBlur ? "bg-opacity-80" : "bg-opacity-100"} ${
        showBlur && "shadow-[0_4px_10px_rgba(128,0,128,0.5) backdrop-blur-lg"
      } ${
        showBlur &&
        "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="container-center flex items-center justify-between gap-5">
        {/* dropdown menu-- visible only on small devices and hidden on large devices */}
        <div className="relative lg:hidden">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={() => setShowMenu(!showMenu)}
              checked={showMenu}
            />
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            className={`menu dropdown-content z-[1] ${showMenu ? "block" : "hidden"} absolute w-52 space-y-1 rounded-box bg-base-200 p-2 shadow`}
          >
            {navLinksMobile}
          </ul>
        </div>

        <div className="links order-1 hidden items-center gap-6 font-medium lg:flex">
          {navLinksPc}
        </div>

        <Link href="/" className={``}>
          <Image
            src={`${theme === "light" ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"}`}
            alt="Logo"
            height={30}
            width={75}
            className="h-[30px] w-[75px]"
          />
        </Link>

        {/* theme changer */}
        <label className="swap swap-rotate order-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleThemeChange}
            checked={theme === "dim"}
          />

          {/* sun icon */}
          <svg
            className="swap-on h-9 w-9 fill-current lg:h-10 lg:w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-9 w-9 fill-current lg:h-10 lg:w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Header;
