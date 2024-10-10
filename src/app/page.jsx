"use client";

import { RevealBento } from "@/components/LandingPages/Block";
import Hero from "@/components/LandingPages/Hero";

export default function Index() {
  return (
    <div className="w-full min-h-[calc(100vh_-_12rem)] grid gap-8">
      <Hero />
      <RevealBento/>
    </div>
  );
}
