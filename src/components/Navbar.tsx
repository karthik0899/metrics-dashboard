'use client';
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md p-4 relative flex items-center">
      {/* Left: Burger Icon and Brand Name */}
      <div className="flex items-center">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href="/" className="ml-2 text-xl font-bold text-white">
        ECPass
        </Link>
      </div>

      {/* Center: Search Bar with Search Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1116.65 2a7 7 0 010 14z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute left-4 top-full mt-2 w-40 bg-gray-800 rounded shadow-lg z-10 transition-all duration-300">
          {/* Dropdown header */}
          {/* <div className="px-4 py-2 border-b border-gray-700 text-white font-semibold">
            My App
          </div> */}
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setDropdownOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setDropdownOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
