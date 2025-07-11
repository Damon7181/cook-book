"use client";
import Image from "next/image";
import Navbar from "../components/navbar-auth";
import React, { useState } from "react";

function OverviewSection({ commentsData }) {
  return (
    <>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        About
      </h3>
      <p className="text-base font-normal leading-normal pb-3 pt-1">
        This creamy tomato pasta is a quick and easy weeknight meal that's
        packed with flavor. The sauce is made with fresh tomatoes, cream, and a
        touch of garlic, and it's tossed with your favorite pasta shape. Serve
        with a sprinkle of Parmesan cheese and fresh basil for a delicious and
        satisfying dish.
      </p>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Cuisine
      </h3>
      <p className="text-base font-normal leading-normal pb-3 pt-1">Italian</p>
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Cooking Time
      </h3>
      <p className="text-base font-normal leading-normal pb-3 pt-1">
        45 minutes
      </p>

      {/* Rating Section */}
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Rating
      </h3>
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
            4.5
          </p>
          {/* Stars */}
          <div className="flex gap-0.5 text-[#e92932]">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M234.5,114.38l-45.1,39.36 13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8 21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15 23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
              </svg>
            ))}
            {/* Half Star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17 142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17 30.61,86.32a16,16,0,0,0-9.11,28.06l45.11,39.36-13.52,58.6a16,16,0,0,0,23.84,17.34l51-31 51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6 45.1-39.36A16,16,0,0,0,239.2,97.29Z" />
            </svg>
          </div>
          <p className="text-base font-normal leading-normal">120 reviews</p>
        </div>

        {/* Rating Bars */}
        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
          {[5, 4, 3, 2, 1].map((star, i) => {
            const widths = [40, 30, 15, 10, 5]; // percentages
            return (
              <React.Fragment key={star}>
                <p className="text-sm font-normal">{star}</p>
                <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#e7d0d1]">
                  <div
                    className="rounded-full bg-[#e92932]"
                    style={{ width: `${widths[i]}%` }}
                  ></div>
                </div>
                <p className="text-sm font-normal text-[#994d51] text-right">
                  {widths[i]}%
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Rate Recipe Button */}
      <div className="flex py-3">
        <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold tracking-[0.015em]">
          <span className="truncate">Rate Recipe</span>
        </button>
      </div>

      {/* Comments */}
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
        Comments
      </h3>

      {commentsData.map((comment, i) => (
        <div key={i} className="flex flex-row items-start gap-3 py-4">
          <div className="rounded-full overflow-hidden w-10 h-10 relative shrink-0">
            <Image
              src={comment.avatar}
              alt={comment.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex gap-x-3">
              <p className="text-sm font-bold tracking-[0.015em]">
                {comment.name}
              </p>
              <p className="text-sm text-[#994d51]">{comment.time}</p>
            </div>
            <p className="text-sm">{comment.text}</p>
          </div>
        </div>
      ))}

      <div className="flex py-3">
        <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold tracking-[0.015em]">
          <span className="truncate">Add Comment</span>
        </button>
      </div>
    </>
  );
}

function IngredientsSection() {
  return (
    <div className="pt-6">
      <h3 className="text-lg font-bold mb-2">Ingredients</h3>
      <ul className="list-disc pl-6 text-base text-[#1b0e0e]">
        <li>400g pasta</li>
        <li>2 cups cherry tomatoes</li>
        <li>1/2 cup cream</li>
        <li>2 cloves garlic, minced</li>
        <li>1/4 cup grated Parmesan cheese</li>
        <li>Fresh basil leaves</li>
        <li>Salt & pepper to taste</li>
      </ul>
    </div>
  );
}

function InstructionsSection() {
  return (
    <div className="pt-6">
      <h3 className="text-lg font-bold mb-2">Instructions</h3>
      <ol className="list-decimal pl-6 text-base text-[#1b0e0e] space-y-2">
        <li>
          Cook the pasta according to package instructions. Drain and set aside.
        </li>
        <li>
          In a pan, heat a little olive oil and sauté the garlic until fragrant.
        </li>
        <li>
          Add cherry tomatoes and cook until soft. Add cream and simmer for 2-3
          minutes.
        </li>
        <li>Toss in the cooked pasta and Parmesan cheese. Mix well.</li>
        <li>
          Season with salt and pepper. Garnish with fresh basil and serve.
        </li>
      </ol>
    </div>
  );
}

import { useEffect } from "react";
import axios from "axios";

export default function RecipePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) {
      setError("No recipe id provided");
      return;
    }
    const fetchRecipe = async () => {
      setError("");
      try {
        const res = await axios.get(`https://cook-book-backend-production.up.railway.app/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError("Network error. Please try again.");
        }
      }
    };
    fetchRecipe();
  }, []);

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-red-500">{error}</div>
        </div>
      </>
    );
  }
  if (!recipe) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div>Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative min-h-screen bg-[#fcf8f8] overflow-x-hidden">
        {/* HEADER */}
        <Navbar />
        <div className="flex h-full grow flex-col">
          {/* MAIN CONTENT */}
          <main className="px-2 md:px-8 flex flex-col md:flex-row gap-8 md:gap-16 justify-center py-5 text-black w-full max-w-7xl mx-auto">
            {/* Recipe Content */}
            <div className="max-w-[600px] w-full flex-shrink-0 mx-auto md:mx-0 sticky top-24 self-start">
              <h4 className="text-red-900 text-sm mb-4">
                Recipe{" "}
                <span className="text-black font-semibold">
                  / {recipe.cuisine}
                </span>
              </h4>
              <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-[600px] h-[220px] md:h-[360px]">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="rounded-xl object-cover mb-6"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            {/* Tabs and Details (right/under on mobile) */}
            <div className="w-full max-w-xl px-2 md:px-4 mx-auto md:mx-0">
              <div className="flex border-b border-[#e7d0d1] px-2 md:px-4 gap-4 md:gap-8 overflow-x-auto">
                <a
                  className={`items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "overview"
                      ? "border-b-[#e92932] text-[#1b0e0e]"
                      : "border-b-transparent text-[#994d51]"
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("overview");
                  }}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Overview
                  </p>
                </a>
                <a
                  className={`items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "ingredients"
                      ? "border-b-[#e92932] text-[#1b0e0e]"
                      : "border-b-transparent text-[#994d51]"
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("ingredients");
                  }}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Ingredients
                  </p>
                </a>
                <a
                  className={`items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "instructions"
                      ? "border-b-[#e92932] text-[#1b0e0e]"
                      : "border-b-transparent text-[#994d51]"
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("instructions");
                  }}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Instructions
                  </p>
                </a>
              </div>
              <div className="pt-2 md:pt-6">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
                      About
                    </h3>
                    <p className="text-base font-normal leading-normal pb-3 pt-1">
                      {recipe.description}
                    </p>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
                      Cuisine
                    </h3>
                    <p className="text-base font-normal leading-normal pb-3 pt-1">
                      {recipe.cuisine}
                    </p>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
                      Cooking Time
                    </h3>
                    <p className="text-base font-normal leading-normal pb-3 pt-1">
                      {recipe.cookingTime} minutes
                    </p>
                    {/* Ratings and Comments can be added here */}
                  </div>
                )}
                {activeTab === "ingredients" && (
                  <div className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                    <ul className="list-disc pl-6 text-base text-[#1b0e0e]">
                      {recipe.ingredients.map((ing) => (
                        <li key={ing.id}>
                          {ing.name} {ing.quantity && `- ${ing.quantity}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === "instructions" && (
                  <div className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Instructions</h3>
                    <ol className="list-decimal pl-6 text-base text-[#1b0e0e] space-y-2">
                      {recipe.instructions.map((step) => (
                        <li key={step.id}>{step.text}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const commentsData = [
  {
    name: "Ethan Harper",
    time: "2 weeks ago",
    text: "This recipe is amazing! I've made it twice already and it's a huge hit with my family.",
    avatar: "/ethan.jpg",
  },
  {
    name: "Sophia Bennett",
    time: "1 month ago",
    text: "I love how easy this recipe is to make. It's perfect for a quick weeknight dinner.",
    avatar: "/sophia.jpg",
  },
];
