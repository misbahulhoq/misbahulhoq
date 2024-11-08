import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className={`mt-10 bg-neutral pt-10 text-neutral-content`}>
      <div className="container-center grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* <div></div> */}
        <div>
          <h3 className="mb-3 text-2xl font-semibold">Contact Info</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="mailto:extraordinarymisbah@gmail.com">
                extraordinarymisbah@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+8801521377999">+8801521377999</a>
            </li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-2xl font-semibold">Social Media</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-2xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 py-8 text-center lg:py-6">
        <p className="text-center">
          © {new Date().getFullYear()} Created by Md Mezbah Uddin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
