"use client";

import Link from "next/link";
import { FaBurger } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm w-full border-b border-gray-200">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 max-w-7xl">
        {/* left */}
        <div className="text-xl font-semibold text-gray-800 flex-shrink-0">
          <Link href="/">
            <span className="text-xl font-semibold text-gray-900 flex items-center">
              <FaBurger className="mr-2" /> CookBook
            </span>
          </Link>
        </div>
        {/* Nav Links*/}
        <div className="flex items-center space-x-6 text-sm text-gray-700">
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/create">Create</Link>
          </div>
          <div className="flex items-center space-x-3">
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
      </div>
    </nav>
  );
}
