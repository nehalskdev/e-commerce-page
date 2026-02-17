"use client";

import { Github, Linkedin, Youtube } from "lucide-react";

export default function SocialLinks() {
  return (
    <section className="text-center pt-10 border-t">
      <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

      <div className="flex justify-center gap-8">
        <a href="#" className="hover:text-indigo-600 transition">
          <Github size={28} />
        </a>

        <a href="#" className="hover:text-indigo-600 transition">
          <Linkedin size={28} />
        </a>

        <a href="#" className="hover:text-indigo-600 transition">
          <Youtube size={28} />
        </a>
      </div>
    </section>
  );
}
