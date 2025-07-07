"use client";

import Link from "next/link";
import Navbar from "../components/navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-[#fff9f9]">
        <div className="w-full max-w-sm space-y-4 text-center">
          <h2 className="text-2xl font-bold text-[#1b0e0e]">Welcome back</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#f8e9ea] placeholder:text-[#994d51]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-[#f8e9ea] placeholder:text-[#994d51]"
          />
          <p className="text-sm text-left text-[#994d51] underline cursor-pointer">
            Forgot password?
          </p>
          <button className="w-full bg-[#e92932] text-white py-2 rounded-md font-bold">
            Log in
          </button>
          <p className="text-sm text-[#994d51]">
            Don’t have an account?{" "}
            <span className="underline cursor-pointer">
              {" "}
              <Link href="/signup">Sign up</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
