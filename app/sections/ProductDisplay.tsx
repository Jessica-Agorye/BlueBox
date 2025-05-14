"use client";
import React from "react";
import productData from "../data/productdata";
// import { useCart } from "../context/cartContext";
import Image from "next/image";

const ProductDisplay = () => {
  // const { increaseCount, decrement } = useCart();

  return (
    <div className="min-h-screen grid place-items-center mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border border-gray-400 rounded-3xl"
          >
            <Image src={product.image} alt="perfume" width={300} height={400} />
            <p className="pt-10 text-2xl font-semibold">{product.name}</p>
            <p>{product.description}</p>
            {/* <div className="space-x-1">
              <button
                className="bg-black text-white px-4 py-1 rounded mt-2"
                onClick={() => increaseCount(product)}
              >
                {" "}
                +
              </button>

              <button
                onClick={decrement}
                className="bg-black text-white px-4 py-1 rounded mt-2"
              >
                -
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
