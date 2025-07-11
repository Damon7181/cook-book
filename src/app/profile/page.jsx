"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Navbar from "../components/navbar-auth";

// Subcomponents
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

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      setError("");
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const res = await axios.get("https://cook-book-backend-production.up.railway.app/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        if (err.response?.data?.error) {
          setError(err.response.data.error);
        } else {
          setError("Network error. Please try again.");
        }
      }
    };
    fetchProfile();
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

  if (!profile) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div>Loading...</div>
        </div>
      </>
    );
  }

  const savedRecipes = profile.savedRecipes.map((s) => s.recipe);
  const cookedRecipes = profile.cookedRecipes.map((c) => c.recipe);

  return (
    <>
      <Navbar user={{ name: profile.name }} />
      <div className="max-w-5xl mx-auto py-10 px-4 min-h-screen">
        <div className="flex flex-col items-center text-center">
          <Image
            src={profile.image || "/ethan.jpg"}
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-full"
          />
          <h1 className="text-xl font-semibold mt-4">{profile.name}</h1>
          <p className="text-gray-500">
            Joined {new Date(profile.createdAt).getFullYear()}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            {profile.followedBy?.length || 0} followers ·{" "}
            {profile.following?.length || 0} following
          </p>
          <button className="mt-3 px-4 py-2 rounded-md bg-gray-200 text-sm font-medium">
            Edit profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b mt-8 flex-wrap gap-2">
          {["all", "saved", "cooked", "about"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-sm font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-red-500 text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
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

export default ProfilePage;
