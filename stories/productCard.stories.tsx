import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../components/ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const ExpensiveProduct = {
  args: {
    product: {
      id: 2,
      title: "Premium Watch",
      price: 9999,
      image: "/watch.jpg",
    },
  },
};
