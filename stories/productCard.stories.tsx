import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../components/ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: {
      id: 1,
      title: "Minimal Sneakers",
      price: 2499,
      image: "/shoes.jpg",
    },
  },
};
