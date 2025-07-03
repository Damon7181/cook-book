"use client";
import Image from "next/image";
import Navbar from "../components/navbar-auth";

export default function ProfilePage() {
  const savedRecipes = [
    { title: "Spicy Thai Basil Chicken", image: "/spicy-thai.jpg" },
    { title: "Creamy Tomato Pasta", image: "/creamy-tomato.jpg" },
    { title: "Lemon Herb Roasted Salmon", image: "/lemon-salmon.jpg" },
    { title: "Chocolate Chip Cookies", image: "/cookies.jpg" },
  ];

  const cookedRecipes = [
    { title: "Classic Margherita Pizza", image: "/margherita.jpg" },
    { title: "Beef Stir-Fry with Noodles", image: "/beef-noodles.jpg" },
    {
      title: "Avocado Toast with Poached Egg",
      image: "/avocado-toast.jpg",
    },
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
        <div className="flex justify-center border-b mt-8">
          <button className="py-2 px-4 border-b-2 border-red-500 font-semibold text-sm text-black">
            Saved
          </button>
          <button className="py-2 px-4 text-sm text-gray-500">Cooked</button>
          <button className="py-2 px-4 text-sm text-gray-500">About</button>
        </div>

        {/* Saved Recipes */}
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

        {/* Cooked Recipes */}
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
      </div>
    </>
  );
}
