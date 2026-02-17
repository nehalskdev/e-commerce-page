"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100 -z-10" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover Products That <br />
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Elevate Your Style
          </span>
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Curated collection designed for modern lifestyle.
        </p>

        <Link href="/products">
          <Button size="lg" className="px-8 py-6 text-lg">
            Explore Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
