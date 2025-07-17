"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import NavbarAuth from "../components/navbar-auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [importUrl, setImportUrl] = useState("");
  const [importLoading, setImportLoading] = useState(false);
  const [importError, setImportError] = useState("");
  const [importSuccess, setImportSuccess] = useState("");

  useEffect(() => {
    // Check login status (JWT in localStorage)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setIsLoggedIn(!!token);

    const fetchRecipes = async () => {
      setError("");
      setLoading(true);
      try {
        const res = await axios.get(
          "https://cook-book-backend-production.up.railway.app/recipes"
        );
        setRecipes(res.data);
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // If not logged in, override all navbar link clicks to redirect to signup
  const handleNavClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = "/signup";
    }
  };

  const handleImport = async () => {
    setImportError("");
    setImportSuccess("");
    if (!isLoggedIn) {
      window.location.href = "/signup";
      return;
    }
    if (!importUrl.trim() || !/^https?:\/\/.+/.test(importUrl)) {
      setImportError("Please enter a valid recipe or video URL.");
      return;
    }
    setImportLoading(true);
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      // Match CreatePage logic: send videoUrl and image only
      const payload = {
        videoUrl: importUrl,
        image: "",
      };
      const config = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {};
      const res = await axios.post(
        "https://cook-book-backend-production.up.railway.app/recipes",
        payload,
        config
      );
      setRecipes((prev) => [...prev, res.data ]);
      setImportUrl("");
      setImportSuccess("Recipe created!");
    } catch (err) {
      setImportError(
        err.response?.data?.error ||
          "Failed to import recipe. Please try again."
      );
    } finally {
      setImportLoading(false);
    }
  };

  return (
    <main className=" min-h-screen ">
      {isLoggedIn ? (
        <NavbarAuth />
      ) : (
        <div onClick={handleNavClick}>
          <Navbar />
        </div>
      )}
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <section className="relative h-96 sm:h-[30rem] rounded-xl overflow-hidden mt-6">
          <Image
            src="/hero.jpg"
            alt="Cooking background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Share and discover recipes from any website
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg mb-4 max-w-2xl">
              Paste a URL to import a recipe or browse our communitys favorites.
            </p>
            <div className="w-full max-w-md px-2 py-3 bg-white rounded-md shadow-lg flex flex-col sm:flex-row gap-2 sm:gap-0 items-center">
              {importSuccess && (
                <div className="w-full text-center text-green-600 text-xs mt-2">
                  {importSuccess}
                </div>
              )}
              <input
                type="url"
                placeholder="Paste a recipe or video URL"
                value={importUrl}
                onChange={(e) => setImportUrl(e.target.value)}
                className="w-full px-4 py-2 text-sm text-black focus:outline-none rounded-md sm:rounded-none sm:rounded-l-md"
                disabled={importLoading}
                required
                pattern="https?://.+"
              />
              <button
                className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 text-sm rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-red-600 transition duration-200"
                onClick={handleImport}
                disabled={importLoading}
              >
                {importLoading ? "Importing..." : "Import"}
              </button>
              {importError && (
                <div className="w-full text-center text-red-500 text-xs mt-2">
                  {importError}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Signup Section */}
        {!isLoggedIn && (
          <section className="text-center py-16">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Join our community of food lovers
            </h2>
            <Link href="/signup">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-sm">
                Sign Up
              </button>
            </Link>
          </section>
        )}

        {/* Popular Recipes Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Popular Recipes
          </h2>
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.slice(0, 6).map((recipe) => (
                  <Link key={recipe.id} href={`/recipe?id=${recipe.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 border border-gray-100 flex flex-col h-full relative">
                      <div className="relative">
                        <Image
                          src={recipe.image || "/pasta.jpg"}
                          alt={recipe.title}
                          width={400}
                          height={220}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between p-5">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                            {recipe.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {recipe.description || "A delicious recipe."}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Image
                              src={
                                recipe.author?.image
                                  ? recipe.author.image
                                  : "/sophia.jpg"
                              }
                              alt={recipe.author?.name || "Unknown"}
                              width={28}
                              height={28}
                              className="rounded-full border border-gray-300"
                            />
                            <span className="text-xs text-gray-700 font-medium">
                              {recipe.author?.name || "Unknown"}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {recipe.createdAt
                              ? new Date(recipe.createdAt).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {recipes.length > 6 && (
                <div className="col-span-full flex justify-center mt-4">
                  <button
                    className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition"
                    onClick={() => {
                      if (!isLoggedIn) {
                        window.location.href = "/signup";
                      } else {
                        window.location.href = "/explore";
                      }
                    }}
                  >
                    View All
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
