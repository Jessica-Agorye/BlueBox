import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-6grid place-items-center ">
      <div className="text-center mb-10">
        <div className="flex flex-wrap items-center justify-between px-40 py-6 gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/pef1.jpg"
              alt="herosection-Perfume"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>

          <div className="flex-1 space-y-4">
            <p className="text-5xl font-bold">
              Get The Best Perfumes on BlueBox
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur
            </p>
            <p className="text-3xl font-semibold leading-snug">
              Discover Your Favorite Scents, Wrapped in the Perfect BlueBox For
              You.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, quaerat.
            </p>
            <div className="flex  justify-center gap-4 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Shop Categories
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
                Contact Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
