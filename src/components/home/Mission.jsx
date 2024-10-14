"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export const Block = ({ className, children, whileHover }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      whileHover={whileHover}
      className={twMerge(
        "col-span-4 rounded-lg border  bg-background text-foreground p-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-4 grid items-center my-auto bg-background text-foreground">
    <div className="my-12 space-y-4">
      <img
        src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
        alt="avatar"
        className="size-14 rounded-full"
      />
      <h2 className="text-3xl font-medium leading-tight">
        Our Mission
      </h2>
      <div className="text-4xl text-orange-400 ">
        <FiArrowRight className="hidden sm:block" />
        <FiArrowDown className="block sm:hidden" />
      </div>
    </div>
  </Block>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-snug  bg-background text-foreground">
    <p className="text-base">
      Fitcreatives is community platform for creatives{" "}
      <span className="text-muted-foreground">
        share experiences, and motivate each other to stay fit and maintain a
        healthy lifestyle amidst busy creative careers. We offer resources,
        tips, and workout routines tailored to creatives' unique needs and
        schedules.
      </span>
    </p>
  </Block>
);

export const Blocks = ({ title, text, whileHover }) => (
  <Block
    whileHover={whileHover}
    className="border col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-2"
  >
    <h3 className="text-base font-medium">{title}</h3>
    <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">{text}</p>
  </Block>
);

export const MissionSection = () => (
  <motion.div
    initial="initial"
    animate="animate"
    transition={{
      staggerChildren: 0.05,
    }}
    className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 border p-4 rounded-2xl"
  >
    <HeaderBlock />
    <Blocks
      title="Supportive Community"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam."
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    />
    <Blocks
      title="Expert Guidance"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam."
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    />
    <Blocks
      title="Fitness"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam."
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
    />
    <Blocks
      title="Network"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam."
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
    />
    <AboutBlock />
  </motion.div>
);
