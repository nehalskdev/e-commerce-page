import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
