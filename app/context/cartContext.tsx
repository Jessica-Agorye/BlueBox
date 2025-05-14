"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import productData from "../data/productdata";
import { ProductType } from "../data/productdata";

type CartContextType = {
  cartCount: number;
  cartItems: ProductType[];
  increaseCount: (product: ProductType) => void;
  decrement: () => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<typeof productData>([]);
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCartItems((prevItems) => prevItems.slice(0, -1));
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, increaseCount, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within the cartprovider");
  }
  return context;
}
