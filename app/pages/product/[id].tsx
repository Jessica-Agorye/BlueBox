/* eslint-disable @next/next/no-img-element */
// pages/product/[id].tsx

"use client";

import { useRouter } from "next/router";
import productData from "../../data/productdata";
import { useCart } from "../../context/cartContext";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { increaseCount } = useCart();
  const numericId = parseInt(id as string, 10);
  const product = productData.find((p) => p.id === numericId);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-80 object-cover rounded-xl mb-4"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-indigo-600 mb-6">
        ${product.price}
      </p>

      <button
        onClick={() => increaseCount(product)}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
