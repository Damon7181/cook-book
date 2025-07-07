"use client";
import Image from "next/image";
import Navbar from "../components/navbar-auth";
import React, { useState } from "react";

function AllRecipes({ savedRecipes, cookedRecipes }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">All recipes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...savedRecipes, ...cookedRecipes].map((recipe) => (
          <div key={recipe.title}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[150px]"
            />
            <p className="text-sm mt-1">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function SavedRecipes({ savedRecipes }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Saved recipes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {savedRecipes.map((recipe) => (
          <div key={recipe.title}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[150px]"
            />
            <p className="text-sm mt-1">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CookedRecipes({ cookedRecipes }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-3">Cooked recipes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cookedRecipes.map((recipe) => (
          <div key={recipe.title}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[150px]"
            />
            <p className="text-sm mt-1">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="mt-8 text-gray-700 text-base">
      <h2 className="text-lg font-semibold mb-3">About</h2>
      <p>
        Welcome to your profile! Here you can view your saved and cooked
        recipes, edit your profile, and see your cooking journey. More features
        coming soon!
      </p>
    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("all");
  const savedRecipes = [
    { title: "Spicy Thai Basil Chicken", image: "/spicy-thai.jpg" },
    { title: "Creamy Tomato Pasta", image: "/creamy-tomato.jpg" },
    { title: "Lemon Herb Roasted Salmon", image: "/lemon-salmon.jpg" },
    { title: "Chocolate Chip Cookies", image: "/cookies.jpg" },
  ];
  const cookedRecipes = [
    { title: "Classic Margherita Pizza", image: "/margherita.jpg" },
    { title: "Beef Stir-Fry with Noodles", image: "/beef-noodles.jpg" },
    { title: "Avocado Toast with Poached Egg", image: "/avocado-toast.jpg" },
    { title: "Blueberry Muffins", image: "/blueberry-muffins.jpg" },
  ];

  return (
    <>
      <Navbar user={{ name: "Sophia Bennett" }} />
      <div className="max-w-5xl mx-auto py-10 px-4 min-h-screen">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/sophia.jpg"
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-full"
          />
          <h1 className="text-xl font-semibold mt-4">Sophia Bennett</h1>
          <p className="text-gray-500">Joined in 2021</p>
          <p className="text-gray-500 text-sm mt-1">
            123 followers · 45 following
          </p>
          <button className="mt-3 px-4 py-2 rounded-md bg-gray-200 text-sm font-medium">
            Edit profile
          </button>
        </div>
        {/* Tabs */}
        <div className="flex justify-center border-b mt-8 flex-wrap gap-2">
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "all"
                ? "border-b-2 border-red-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "saved"
                ? "border-b-2 border-red-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "cooked"
                ? "border-b-2 border-red-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("cooked")}
          >
            Cooked
          </button>

          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "about"
                ? "border-b-2 border-red-500 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "saved" && <SavedRecipes savedRecipes={savedRecipes} />}
        {activeTab === "cooked" && (
          <CookedRecipes cookedRecipes={cookedRecipes} />
        )}
        {activeTab === "all" && (
          <AllRecipes
            savedRecipes={savedRecipes}
            cookedRecipes={cookedRecipes}
          />
        )}
        {activeTab === "about" && <AboutSection />}
      </div>
    </>
  );
}
