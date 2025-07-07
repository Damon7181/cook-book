"use client";

import Navbar from "../components/navbar";
import React, { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8f8] px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
        >
          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Sign Up
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-200"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-200"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-200"
            required
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
