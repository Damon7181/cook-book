import Link from "next/link";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        {/* <section className="relative h-96 rounded-xl overflow-hidden mt-6">
          <Image
            src="/hero.jpg"
            alt="Cooking background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Share and discover recipes from any website
            </h1>
            <p className="text-white text-sm md:text-base mb-4">
              Paste a URL to import a recipe or browse our communitys favorites.
            </p>
            <div className="flex w-full max-w-md px-2 py-4  bg-white rounded-md overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Paste a recipe URL"
                className="flex-grow px-4 py-2 text-sm focus:outline-none text-black"
              />
              <button className="bg-red-500 text-white rounded-md px-6 py-2 text-sm hover:bg-red-600">
                Import
              </button>
            </div>
          </div>
        </section> */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link href="/recipe">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/pasta.jpg"
                  alt="Tomato Pasta"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-black">
                    Classic Tomato Pasta
                  </h3>
                  <p className="text-sm text-gray-500">
                    A simple yet flavorful pasta dish.
                  </p>
                </div>
              </div>
            </Link>
            {/* Card 2 */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/cake.jpg"
                alt="Chocolate Cake"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-black">
                  Decadent Chocolate Cake
                </h3>
                <p className="text-sm text-gray-500">
                  Rich and moist chocolate cake.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/salmon.jpg"
                alt="Grilled Salmon"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-black">
                  Grilled Salmon with Asparagus
                </h3>
                <p className="text-sm text-gray-500">
                  Healthy and delicious grilled salmon.
                </p>
              </div>
            </div>
          </div>
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
