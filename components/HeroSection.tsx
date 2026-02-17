import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-extrabold mb-6">Welcome to Nehal Store</h2>
      <p className="text-gray-600 text-lg mb-8">
        Modern products for modern lifestyle.
      </p>
      <Link href="/products">
        <Button size="lg">Explore Products</Button>
      </Link>
    </section>
  );
}
