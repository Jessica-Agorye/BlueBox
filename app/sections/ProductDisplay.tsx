"use client";
import React from "react";
import productData from "../data/productdata";
import Image from "next/image";

const ProductDisplay = () => {
  return (
    <div className="min-h-screen grid place-items-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {productData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover rounded-2xl"
                priority={index < 3} // prioritize first 3 images
              />
            </div>
            <p className="pt-6 text-2xl font-semibold text-gray-900">
              {product.name}
            </p>
            <p className="mt-2 text-gray-600">{product.description}</p>
            {product.price && (
              <p className="mt-4 text-xl font-bold text-blue-600">
                ${product.price}
              </p>
            )}
            {/* You can uncomment and style buttons below if needed */}
            {/* <div className="space-x-3 mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
                Details
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
