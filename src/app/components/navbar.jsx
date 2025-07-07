"use client";

import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-semibold text-gray-900"
          >
            <FaBurger className="mr-2" />
            CookBook
          </Link>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/create">Create</Link>
            <Link
              href="/signup"
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-md"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-3 text-sm text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/explore" onClick={() => setMenuOpen(false)}>
              Explore
            </Link>
            <Link href="/create" onClick={() => setMenuOpen(false)}>
              Create
            </Link>
            <Link
              href="/signup"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
