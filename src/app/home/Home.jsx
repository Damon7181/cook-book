"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setError("");
      setLoading(true);
      try {
        const res = await axios.get("https://cook-book-backend-production.up.railway.app/recipes");
        setRecipes(res.data);
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <main className=" min-h-screen ">
      <Navbar />
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
              <input
                type="text"
                placeholder="Paste a recipe URL"
                className="w-full px-4 py-2 text-sm text-black focus:outline-none rounded-md sm:rounded-none sm:rounded-l-md"
              />
              <button className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 text-sm rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-red-600 transition duration-200">
                Import
              </button>
            </div>
          </div>
        </section>

        {/* Popular Recipes */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-black">
            Popular Recipes
          </h2>
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recipes.slice(0, 6).map((recipe) => (
                <Link key={recipe.id} href={`/recipe?id=${recipe.id}`}>
                  <div className="rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition">
                    <Image
                      src={recipe.image || "/pasta.jpg"}
                      alt={recipe.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-black">
                        {recipe.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {recipe.description || "A delicious recipe."}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
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
      </div>
    </main>
  );
}
