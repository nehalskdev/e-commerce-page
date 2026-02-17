import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      title: "Minimal Sneakers",
      price: 2499,
      image: "/shoes.jpg",
    },
    {
      id: 2,
      title: "Modern Hoodie",
      price: 1799,
      image: "/hoodie.jpg",
    },
    {
      id: 3,
      title: "Classic Watch",
      price: 4999,
      image: "/watch.jpg",
    },
  ];

  return NextResponse.json(products);
}
