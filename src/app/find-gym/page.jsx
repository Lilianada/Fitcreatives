'use client';
import Gyms from '@/components/findGym/Gyms'
import Hero from '@/components/findGym/Hero'
import { motion } from 'framer-motion'
import React from 'react'

export default function FindGym() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid gap-4 overflow-y-auto h-screen"
      style={{ scrollBehavior: "smooth" }}
    >
      <Hero />
      <Gyms />
    </motion.div>
  );
}