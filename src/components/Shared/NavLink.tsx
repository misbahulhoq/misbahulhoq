"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  activeClassName: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({
  href,
  className,
  activeClassName,
  children,
  onClick,
}: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${className} ${pathName === href && activeClassName}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
