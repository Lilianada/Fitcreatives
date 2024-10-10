import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";

const Block = ({ className, children, whileHover }) => {
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
        "col-span-4 rounded-lg border  bg-background text-foreground p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-4 grid items-center my-auto bg-background text-foreground">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h2 className="text-3xl font-medium leading-tight">
      Our Mission<br/>
      <span className="flex items-center gap-1 text-orange-400 hover:underline"
    >
       <FiArrowRight />
      </span>
    </h2>
  </Block>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-snug  bg-background text-foreground">
    <p>
    Fitcreatives is community platform for creatives {" "}
      <span className="text-muted-foreground">
      share experiences, and motivate each other to stay fit and maintain a healthy lifestyle amidst busy creative careers. We offer resources, tips, and workout routines tailored to creatives' unique needs and schedules.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-muted-foreground">Worldwide community</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join the community</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-stone-700 bg-stone-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-stone-50 px-3 py-2 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300"
      >
        <FiMail /> Join the community
      </button>
    </form>
  </Block>
);

export const RevealBento = () => (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
    >
      <HeaderBlock />
      <BlockSocials
        title="Supportive Community"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam. Culpa, ducimus numquam!"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      />
      <BlockSocials
        title="Expert Guidance"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam. Culpa, ducimus numquam!"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      />
      <BlockSocials
        title="Fitness"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam. Culpa, ducimus numquam!"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      />
      <BlockSocials
        title="Network"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus illum totam. Culpa, ducimus numquam!"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      />
      <AboutBlock />
      <LocationBlock />
      <EmailListBlock />
    </motion.div>
);

const BlockSocials = ({ title, text, whileHover }) => (
  <Block
    whileHover={whileHover}
    className="border col-span-6 md:col-span-4 flex flex-col gap-2"
  >
    <h3 className="text-base font-medium">{title}</h3>
    <p
      className="mt-1 text-xs text-stone-400 dark:text-stone-400 "
    >
      {text}
    </p>
  </Block>
);
