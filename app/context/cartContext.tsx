"use client";

import { useState, createContext, useContext, ReactNode } from "react";

type CartContextType = {
  cartCount: number;
  increaseCount: () => void;
  decrement: () => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, increaseCount, decrement }}>
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
