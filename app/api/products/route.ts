import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      title: "Minimal Leather Chair",
      description: "Premium handcrafted leather chair",
      price: 249,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    },
    {
      id: 2,
      title: "Modern Wooden Table",
      description: "Sleek solid wood dining table",
      price: 799,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    {
      id: 3,
      title: "Cozy Fabric Sofa",
      description: "Comfortable 3-seater sofa with soft fabric",
      price: 499,
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
    },
    {
      id: 4,
      title: "Elegant Floor Lamp",
      description: "Stylish floor lamp with adjustable brightness",
      price: 129,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    {
      id: 5,
      title: "Contemporary Wall Art",
      description: "Abstract canvas wall art for modern interiors",
      price: 199,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    {
      id: 6,
      title: "Stylish Area Rug",
      description: "Soft and durable area rug for living rooms",
      price: 299,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
  ];

  return NextResponse.json(products);
}
