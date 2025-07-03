"use client";

import Navbar from "../components/navbar-auth";
import React, { useState } from "react";

export default function CreatePage() {
  const [url, setUrl] = useState("");

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8f8] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Paste a Recipe URL
          </h1>
          <input
            type="url"
            placeholder="Enter recipe URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-200"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
            disabled={!url}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
