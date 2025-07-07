"use client";

import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function NavbarAuth({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Nav Links (Desktop) */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center text-xl font-semibold text-gray-900">
              <FaBurger className="mr-2" />
              CookBook
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-black">Home</Link>
              <Link href="/explore" className="text-black">Explore</Link>
              <Link href="/create" className="text-black">Create</Link>
            </div>
          </div>

          {/* Right: Search + Bell + Profile (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-200 rounded-md px-3 py-1">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 w-24 md:w-32"
              />
            </div>

            {/* Bell Icon */}
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <FaBell className="text-gray-500 text-lg" />
            </button>

            {/* Avatar */}
            <Link href="/profile">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
                <Image src="/sophia.jpg" alt="Profile" width={32} height={32} />
              </div>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-3 text-sm text-gray-700 flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link href="/create" onClick={() => setMenuOpen(false)}>Create</Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
            <div className="flex items-center bg-gray-200 rounded-md px-3 py-1">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
