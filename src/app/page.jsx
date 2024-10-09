"use client";

import Hero from "@/components/LandingPages/Hero";
import Header from "@/components/LandingPages/Header";

export default function Index() {
  return (
    <div className="grid gap-4 items-center justify-items-center p-4 sm:px-8 sm:py-4 max-w-4xl mx-auto">
      <Header />
      <Hero />
    </div>
  );
}
