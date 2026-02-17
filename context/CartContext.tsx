"use client";

import { createContext, useContext, useState } from "react";

type CartContextType = {
  count: number;
  addToCart: () => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount((prev) => prev + 1);
  };

  const resetCart = () => {
    setCount(0);
  };

  return (
    <CartContext.Provider value={{ count, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
