"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/login", form);
      const data = res.data;
      // Store JWT in localStorage for future requests
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
      }
      window.location.href = "/profile";
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-[#fff9f9]">
        <form
          className="w-full max-w-sm space-y-4 text-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-[#1b0e0e]">Welcome back</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f8e9ea] placeholder:text-[#994d51]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f8e9ea] placeholder:text-[#994d51]"
            required
          />
          <p className="text-sm text-left text-[#994d51] underline cursor-pointer">
            Forgot password?
          </p>
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#e92932] text-white py-2 rounded-md font-bold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
          <p className="text-sm text-[#994d51]">
            Don’t have an account?{" "}
            <span className="underline cursor-pointer">
              {" "}
              <Link href="/signup">Sign up</Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
