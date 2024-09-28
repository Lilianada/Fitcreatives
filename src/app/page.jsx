'use client';
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-4 sm:px-8 sm:py-4">
      <Header />
      <Hero />
    </div>
  );
}
