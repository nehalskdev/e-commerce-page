import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10 text-center">Our Collection</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
