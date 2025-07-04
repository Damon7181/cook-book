"use client";

import Image from "next/image";
import Navbar from "../components/navbar-auth";
import React, { useState } from "react";

const recipes = [
  {
    title: "Spicy Chicken Tacos",
    cuisine: "Mexican",
    image: "/tacos.jpg",
  },
  {
    title: "Creamy Tomato Pasta",
    cuisine: "Italian",
    image: "/pasta.jpg",
  },
  {
    title: "Vegetable Stir-Fry",
    cuisine: "Asian",
    image: "/stirfry.jpg",
  },
  {
    title: "Chocolate Chip Cookies",
    cuisine: "Desserts",
    image: "/cookies.jpg",
  },
  {
    title: "Grilled Salmon with Asparagus",
    cuisine: "American",
    image: "/salmon.jpg",
  },
  { title: "Beef and Broccoli", cuisine: "Asian", image: "/beef.jpg" },
  { title: "Lemon Bars", cuisine: "Desserts", image: "/lemonbars.jpg" },
  {
    title: "Chicken Fajitas",
    cuisine: "Mexican",
    image: "/fajitas.jpg",
  },
  {
    title: "Mushroom Risotto",
    cuisine: "Italian",
    image: "/risotto.jpg",
  },
  { title: "Apple Pie", cuisine: "Desserts", image: "/applepie.jpg" },
];

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [activeCuisine, setActiveCuisine] = useState("All");

  const cuisines = [
    "All",
    "Italian",
    "Mexican",
    "Asian",
    "Desserts",
    "American",
    "Desi",
  ];

  const filteredRecipes = recipes.filter((item) => {
    const matchesCuisine =
      activeCuisine === "All" || item.cuisine === activeCuisine;
    const matchesSearch = item.cuisine
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-screen py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1b0e0e] mb-1">Recipes</h1>
        <p className="text-[#994d51] mb-6">
          Explore recipes from our community
        </p>

        <input
          type="text"
          placeholder="Search recipes by cuisine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-[#f8e9ea] placeholder:text-[#994d51]"
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {cuisines.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveCuisine(filter)}
              className={`px-3 py-1 rounded-full text-[#1b0e0e] ${
                activeCuisine === filter
                  ? "bg-[#e92932] text-white"
                  : "bg-[#f8e9ea]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center text-[#994d51]">
              No recipes found.
            </div>
          ) : (
            filteredRecipes.map((item, idx) => (
              <div key={idx} className="text-center space-y-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full h-[180px]"
                />
                <p className="mt-2 font-medium text-[#1b0e0e] text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-[#994d51]">{item.cuisine}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
