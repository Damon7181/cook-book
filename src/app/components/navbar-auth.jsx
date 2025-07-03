"use client";

import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import Image from "next/image";

export default function NavbarAuth({ user }) {
  return (
    <nav className="bg-white shadow-sm w-full border-b border-gray-200">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-6 ">
          <Link href="/">
            <span className="text-xl font-semibold text-gray-900 flex items-center">
              <FaBurger className="mr-2" /> CookBook
            </span>
          </Link>

          {/* Nav Links */}

          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="/explore" className="text-black">
            Explore
          </Link>
          <Link href="/create" className="text-black">
            Create
          </Link>
        </div>
        {/* Right: Search, Bell, Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-200 rounded-md px-3 py-1">
            <FaSearch className="text-gray-100 mr-2" />
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
          {/* Profile Avatar */}
          <Link href="/profile">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-gray-100">
              <Image src="/sophia.jpg" alt="Profile" width={32} height={32} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
