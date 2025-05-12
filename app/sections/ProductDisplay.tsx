"use client";
import React from "react";
import productData from "../data/productdata";
import { useCart } from "../context/cartContext";
import Image from "next/image";

const ProductDisplay = () => {
  const { increaseCount, decrement } = useCart();

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded shadow"
          >
            <Image src={product.image} alt="perfume" width={200} height={200} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <div className="space-x-1">
              <button
                onClick={increaseCount}
                className="bg-green-500 text-white px-4 py-1 rounded mt-2"
              >
                Add +
              </button>
              <button
                onClick={decrement}
                className="bg-orange-500 text-white px-4 py-1 rounded mt-2"
              >
                - Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
