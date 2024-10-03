'use client';
import AboutUs from "@/components/AboutUs";
import FrequentlyAsked from "@/components/Faq";
import FindTrainer from "@/components/FindTrainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-4 sm:px-8 sm:py-4 bg-dark">
      <Header />
      <Hero />
      <AboutUs />
      <FindTrainer />
      <FrequentlyAsked />
      <Footer />
    </div>
  );
}
