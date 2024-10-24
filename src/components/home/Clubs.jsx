'use client';

import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Clubs() {
  return (
    <section
      className="border rounded-2xl text-foreground bg-background p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col sm:grid h-full w-full gap-4 grid-cols-4 grid-rows-5 rounded-lg">
          <motion.div
            className="col-span-4 row-span-2 border p-4 rounded-lg bg-logoBackdrop bg-cover bg-no-repeat bg-center grid content-center bg-opacity-35" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="my-6 space-y-4">
              <motion.img
                src="/assets/logo_bg.svg"
                alt="avatar"
                className="size-14 rounded-full bg-light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h2
                className="text-3xl font-medium leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Join our clubs
              </motion.h2>
              <motion.div
                className="text-4xl text-orange-400"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <FiArrowDown className="block" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="hidden sm:block col-span-2 row-span-4 border p-4 rounded-lg"
            style={{
              backgroundImage: `url("/assets/clubs.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          ></motion.div>

          {[
            {
              title: "Running Club",
              description:
                "For members who enjoy running and hitting new 'mile'-stones. Join our running club to get access to running routes, group runs and competitions.",
            },
            {
              title: "Strength Training Club",
              description:
                "Looking to build muscles, strength and have a squad of people who you can workout with? Join our strength training club and get access to trainers, squad workouts and workout plans.",
            },
            {
              title: "Yoga Club",
              description:
                "Mindfulness and flexibility are key to a healthy lifestyle. Join our yoga club to get access to yoga classes, meditation sessions and yoga retreats.",
            },
            {
              title: "Dance Club",
              description:
                "Dancing as a form of cardio for members who want a more fun way to stay fit. Join our dance club to learn new dance moves and stay fit.",
            },
          ].map((club, index) => (
            <motion.div
              key={index}
              className="col-span-2 row-span-1 border p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col gap-2">
                <div className="h-7 w-8 rounded-lg dark:bg-[#161616] bg-[#e9e9e9] p-[10px]"></div>
                <h3 className="text-base font-medium">{club.title}</h3>
                <p className="text-xs text-stone-400 dark:text-stone-400 ">
                  {club.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
