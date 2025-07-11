"use client";

import Navbar from "../components/navbar-auth";
import React, { useState } from "react";
import axios from "axios";

export default function CreatePage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    cuisine: "",
    image: "",
    cookingTime: "",
    ingredients: "",
    instructions: "",
    videoUrl: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      // If videoUrl is provided, only send videoUrl, image, and leave other fields blank (backend will fill them)
      // console.log("TOken:", token);
      let payload;
      if (form.videoUrl) {
        payload = {
          videoUrl: form.videoUrl,
          image: form.image,
        };
      } else {
        payload = {
          ...form,
          cookingTime: Number(form.cookingTime),
          ingredients: form.ingredients
            .split("\n")
            .map((i) => ({ name: i, quantity: "1" })),
          instructions: form.instructions
            .split("\n")
            .map((t, idx) => ({ step: idx + 1, text: t })),
        };
      }
      await axios.post("http://localhost:5000/recipes", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Recipe created!");
      setForm({
        title: "",
        description: "",
        cuisine: "",
        image: "",
        cookingTime: "",
        ingredients: "",
        instructions: "",
        videoUrl: "",
      });
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8f8] px-4">
        <form
          className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Create Recipe
          </h1>
          <input
            type="url"
            name="videoUrl"
            placeholder="Paste recipe/video URL (optional)"
            value={form.videoUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
          />
          <div className="text-xs text-gray-500 mb-2">
            Paste a recipe or video URL to auto-fill details using Gemini AI, or
            fill the form manually.
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            value={form.cuisine}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
          />
          <input
            type="number"
            name="cookingTime"
            placeholder="Cooking Time (minutes)"
            value={form.cookingTime}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          <textarea
            name="ingredients"
            placeholder="Ingredients (one per line)"
            value={form.ingredients}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          <textarea
            name="instructions"
            placeholder="Instructions (one step per line)"
            value={form.instructions}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-base"
            required={!form.videoUrl}
            disabled={!!form.videoUrl}
          />
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-center text-sm">{success}</div>
          )}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
