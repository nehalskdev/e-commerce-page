"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-48"
        />

        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>

        <p className="text-gray-600 mb-4">₹{product.price}</p>

        <Button className="w-full">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
