"use client";

import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

export function GuidanceSchoolZone(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" d="M11.5 23.5c-1 0-1.75-1.5-1.75-1.5C9 20.5 9 18.5 9 17v-.5L4 14v-.25l1.495-7.225M8.5 13.75l1.003-4.845A2 2 0 0 0 7.544 6.5H6q-.255 0-.505.025M.5 13l.6-2.603a5.03 5.03 0 0 1 4.395-3.872M6 17.5c-1 3-3 5-5.5 5m19.5 1c-.813 0-1.422-1.211-1.422-1.211c-.61-1.219-.61-2.844-.61-4.063v-.406l-4.124-2.031v-.203l1.214-5.87m2.442 5.87l.846-4.087a1.5 1.5 0 0 0-1.47-1.804H15.47q-.209 0-.41.021m-3.933 5.26l.435-2.098a3.99 3.99 0 0 1 3.497-3.162M19.92 13c1.165.837 2.623 1.164 4.08 1.164m-8.53 4.469c-.6 1.801-1.645 3.159-2.97 3.745M8.85 4.5s-1.6-1-1.6-2.25C7.25 1.284 8.034.5 9 .5c.967 0 1.746.784 1.746 1.75c0 1.25-1.596 2.25-1.596 2.25zm8.5 3s-1.6-1-1.6-2.25a1.746 1.746 0 1 1 3.495 0c0 1.25-1.595 2.25-1.595 2.25z"></path></svg>);}

export function GuidanceYoga(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" d="m2 14.5l1.654-.551a6 6 0 0 0 3.795-3.795L8 8.5s1.5-1 4-1s4 1 4 1l.551 1.654a6 6 0 0 0 3.795 3.795L22 14.5m-12.5-4v5l-4.25.85a.937.937 0 0 0-.042 1.825c1.305.332 4.198 1.095 6.792 1.99c2.657.916 5 1.97 5 2.835m-2.5-12.5v5l4.25.85a.937.937 0 0 1 .042 1.825c-.974.248-2.833.736-4.792 1.34m-4 1.397c-1.73.712-3 1.45-3 2.088m4.85-17.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></path></svg>);
}

export function GuidanceWeightlifting(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" d="M.5 11v5m2-6v7m21-6v5m-2-6v7m-19-3.5h19m-7.5 2l2 8.35m-6-8.35l-2 8.35m9.5-10.35l-1.5-6s-1.5-1-4-1s-4 1-4 1l-1.5 6m5.35-9s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></path></svg>);
}

export function GuidanceDiscotheque(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" d="M14 23.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-3.5-.75-5v-.5l-5-2.5V6.5h5V14m-3 3.5c-.21 0-.466.133-.737.344C5.958 19.24 5.5 21.718 5.5 24m-5-14l2.328-2.328A4 4 0 0 1 5.657 6.5h7.186a4 4 0 0 0 2.829-1.172L18 3m1.5 14.5a2 2 0 1 0-4 0a2 2 0 0 0 4 0Zm0 0v-8h.75s.75 4 3.75 4m-14.805-9s-1.81-.557-2.135-1.776A1.77 1.77 0 0 1 8.302.561a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"></path></svg>);
}

const clubs = [
  {
    title: "Running Club",
    icon: GuidanceSchoolZone,
    description:
      "For members who enjoy running and hitting new 'mile'-stones. Join our running club to get access to running routes, group runs and competitions.",
  },
  {
    title: "Strength Training Club",
    icon: GuidanceWeightlifting,
    description:
      "Looking to build muscles, strength and have a squad of people who you can workout with? Join our strength training club and get access to trainers, squad workouts and workout plans.",
  },
  {
    title: "Yoga Club",
    icon: GuidanceYoga,
    description:
      "Mindfulness and flexibility are key to a healthy lifestyle. Join our yoga club to get access to yoga classes, meditation sessions and yoga retreats.",
  },
  {
    title: "Dance Club",
    icon: GuidanceDiscotheque,
    description:
      "Dancing as a form of cardio for members who want a more fun way to stay fit. Join our dance club to learn new dance moves and stay fit.",
  },
]

export default function Clubs() {
  return (
    <section className="border rounded-2xl text-foreground bg-background p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col sm:grid h-full w-full gap-4 grid-cols-4 grid-rows-4 rounded-lg">
          <motion.div
            className="col-span-4 row-span-2 border p-4 rounded-lg bg-lightLogoBg dark:bg-darkLogoBg bg-cover bg-no-repeat bg-center grid content-center bg-opacity-35"
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
            className="hidden lg:block col-span-2 row-span-4 border p-4 rounded-lg"
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

          {clubs.map((club, index) => (
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
                <div className="h-7 w-8 rounded-lg dark:bg-[#161616] bg-[#e9e9e9] p-1 grid place-items-center">
                  <club.icon className="h-5 w-5 text-orange-400" />
                </div>
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
