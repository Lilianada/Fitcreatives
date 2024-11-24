"use client";

import { MissionSection } from "@/components/home/Mission";
import FrequentlyAskedQtn from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Clubs from "@/components/home/Clubs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ scrollBehavior: "smooth" }}
     className="w-full grid gap-8">
      <Hero />
      <MissionSection/>
      <Clubs />
      <FrequentlyAskedQtn />
    </motion.div>
  );
}
