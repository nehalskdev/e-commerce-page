import type { Product } from "./product";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  count: number;
  addToCart: (product?: Product) => void;
  resetCart: () => void;
};
