"use client";
import React from "react";
import Link from "next/link";
import { RiArrowDropDownFill } from "react-icons/ri";
const Navbar = () => {
  const navItems = [
    { href: "/about-us", label: "About us" },
    { href: "/our-portfolio", label: "Our Portfolio" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact-us", label: "Contact us" },
  ];
  return (
    <nav className="p-4 bg-background flex justify-between items-center w-full px-12">
      <img
        src="/images/MAIN-IFNOTGODTECH-LOGO.png"
        className="w-24"
        alt="logo"
      />
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer">
          <p>Services</p>
          <RiArrowDropDownFill />
        </div>

        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="capitalize cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button className="button-primary">Book a free call</button>
    </nav>
  );
};

export default Navbar;
