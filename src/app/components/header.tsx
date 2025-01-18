"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";

export function NavBar() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 container mx-auto px-4 ">
      {/* Hamburger Button */}
      <button
        className="block sm:hidden   ml-auto p-2"
        onClick={() => SetIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // Close icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
            }
          />
        </svg>
      </button>

      {/* Navbar Title */}
      <div className="text-2xl sm:text-3xl text-orange-700 font-bold m-3 sm:ml-20 italic text-center sm:text-left">
        Portfolio
      </div>

      {/* Links */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:block transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col sm:flex-row justify-center items-center text-lg sm:text-xl sm:mr-20 gap-4 sm:gap-6 text-gray-500">
          <Link href="./">
            <li className="hover:text-orange-500">Home</li>
          </Link>
          <Link href="./about">
            <li className="hover:text-orange-500">About</li>
          </Link>
          <Link href="projects">
            <li className="hover:text-orange-500">Projects</li>
          </Link>
          <Link href="contact">
            <li className="hover:text-orange-500">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
