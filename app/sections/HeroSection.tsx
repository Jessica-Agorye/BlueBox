import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-10 lg:px-20 py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/pef1.jpg"
            alt="herosection-Perfume"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
            Get The Best Perfumes on{" "}
            <span className="text-blue-600">BlueBox</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg">
            Indulge in luxurious scents crafted to elevate your essence.
          </p>
          <p className="text-xl sm:text-2xl font-medium leading-snug text-gray-700">
            Discover Your Favorite Scents, Wrapped in the Perfect BlueBox For
            You.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Experience the perfect blend of elegance and freshness with our
            exclusive perfume collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow-md">
              Shop Categories
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 transition px-6 py-3 rounded-lg">
              Contact Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
