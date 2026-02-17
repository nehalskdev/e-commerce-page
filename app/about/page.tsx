import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About This Project</h2>

        <p className="text-gray-600 leading-8">
          This e-commerce project is built using Next.js, Tailwind, shadcn/ui
          and Storybook. It demonstrates component driven development and
          scalable architecture.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="About us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Why I Built This</h3>
          <p className="text-gray-600 leading-7">
            To master Next.js architecture, API routes, global state management,
            UI consistency, and Storybook isolation.
          </p>
        </div>
      </section>

      <SocialLinks />
    </div>
  );
}
