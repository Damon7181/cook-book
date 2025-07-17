"use client";

import Image from "next/image";
import Navbar from "../components/navbar-auth";
import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [activeCuisine, setActiveCuisine] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchRecipes = async () => {
      setError("");
      try {
        const res = await axios.get(
          "https://cook-book-backend-production.up.railway.app/recipes"
        );
        setRecipes(res.data);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError("Network error. Please try again.");
        }
      }
    };
    fetchRecipes();
  }, []);

  const cuisines = [
    "All",
    ...Array.from(new Set(recipes.map((r) => r.cuisine))).filter(Boolean),
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

        {error && (
          <div className="col-span-full text-center text-[#e92932] mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center text-[#994d51]">
              No recipes found.
            </div>
          ) : (
            filteredRecipes.map((item, idx) => (
              <a
                key={item.id || idx}
                href={`/recipe?id=${item.id}`}
                className="block hover:shadow-lg transition-shadow rounded-xl bg-white overflow-hidden relative"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/pasta.jpg"}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="rounded-t-xl object-cover w-full h-[180px]"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-[#1b0e0e] text-sm line-clamp-1 mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#994d51] line-clamp-1 mb-4">
                    {item.cuisine}
                  </p>
                  <div className="flex justify-center">
                    <div
                      className="flex items-center gap-2 bg-white bg-opacity-95 px-4 py-2 rounded-full shadow-sm border border-gray-200"
                      style={{ minWidth: "140px" }}
                    >
                      <Image
                        src={
                          item.author?.image ? item.author.image : "/sophia.jpg"
                        }
                        alt={item.author?.name || "Unknown"}
                        width={28}
                        height={28}
                        className="rounded-full border border-gray-300"
                      />
                      <div className="flex flex-col items-start ml-2">
                        <span className="text-xs font-semibold text-[#1b0e0e] leading-tight">
                          {item.author?.name || "Unknown"}
                        </span>
                        <span className="text-xs text-gray-500 leading-tight">
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString()
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </>
  );
}

// export default function RecipesPage() {
//   const [search, setSearch] = useState("");
//   const [activeCuisine, setActiveCuisine] = useState("All");

//   const cuisines = [
//     "All",
//     "Italian",
//     "Mexican",
//     "Asian",
//     "Desserts",
//     "American",
//     "Desi",
//   ];

//   const filteredRecipes = recipes.filter((item) => {
//     const matchesCuisine =
//       activeCuisine === "All" || item.cuisine === activeCuisine;
//     const matchesSearch = item.cuisine
//       .toLowerCase()
//       .includes(search.toLowerCase());
//     return matchesCuisine && matchesSearch;
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-6xl mx-auto min-h-screen py-10 px-4">
//         <h1 className="text-3xl font-bold text-[#1b0e0e] mb-1">Recipes</h1>
//         <p className="text-[#994d51] mb-6">
//           Explore recipes from our community
//         </p>

//         <input
//           type="text"
//           placeholder="Search recipes by cuisine..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-4 p-3 rounded-lg bg-[#f8e9ea] placeholder:text-[#994d51]"
//         />

//         <div className="flex flex-wrap gap-2 mb-12">
//           {cuisines.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveCuisine(filter)}
//               className={`px-3 py-1 rounded-full text-[#1b0e0e] ${
//                 activeCuisine === filter
//                   ? "bg-[#e92932] text-white"
//                   : "bg-[#f8e9ea]"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {filteredRecipes.length === 0 ? (
//             <div className="col-span-full text-center text-[#994d51]">
//               No recipes found.
//             </div>
//           ) : (
//             filteredRecipes.map((item, idx) => (
//               <div key={idx} className="text-center space-y-3">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={200}
//                   height={150}
//                   className="rounded-lg object-cover w-full h-[180px]"
//                 />
//                 <p className="mt-2 font-medium text-[#1b0e0e] text-sm">
//                   {item.title}
//                 </p>
//                 <p className="text-xs text-[#994d51]">{item.cuisine}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
