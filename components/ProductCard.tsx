import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
}
