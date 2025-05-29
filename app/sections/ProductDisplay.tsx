"use client";
import React from "react";
import productData from "../data/productdata";
import Image from "next/image";
import Link from "next/link";

const ProductDisplay = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        The Best Perfume Deals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {productData.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="flex flex-col items-center text-center p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 bg-white">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover rounded-xl"
                  priority={product.id < 3}
                />
              </div>
              <p className="pt-5 text-xl font-medium text-gray-800">
                {product.name}
              </p>
              <p className="mt-2 text-sm text-gray-500 px-2">
                {product.description}
              </p>
              {product.price && (
                <p className="mt-3 text-lg font-semibold text-indigo-600">
                  ${product.price}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
