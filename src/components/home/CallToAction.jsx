"use client";

import React from "react";
import { FiMail } from "react-icons/fi";
import { Button } from "../ui/button";
import { Block } from "./Mission";
import { Input } from "../ui/input";
import { motion } from "framer-motion";

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Subscribe to our newsletter</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border px-3 py-1.5 transition-colors focus:border-orange-300 focus:outline-0"
      />
      <Button
        type="submit"
        variety="secondary"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-stone-50 px-3 py-2 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300"
      >
        <FiMail /> Subscribe
      </Button>
    </form>
  </Block>
);

const AvatarStack = () => (
  <>
    <div className="isolate flex -space-x-1 overflow-hidden">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-orange-400"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-orange-400"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-orange-400"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-orange-400"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-orange-400"
      />
    </div>
  </>
);

export default function CallToAction() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="border p-8 rounded-2xl w-full"
    >
      <div className="grid place-items-center">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-medium text-center">
            Ready to Ignite Your Creative Spark and Your Fitness Goals?
          </h2>
          <div className="flex flex-col justify-center items-center gap-3 m-4">
            <div className="grid place-items-center gap-2">
              <AvatarStack />
              <p className="text-muted-foreground text-sm">Join 1k+ Members</p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg border text-sm border-dashed px-3 py-2 text-muted-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex gap-2"
            >
              <div className="h-4 w-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
              Join the Community
              <div className="h-4 w-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
            </Button>
          </div>
        </div>
      </div>
      {/* <LocationBlock /> */}
      {/* <EmailListBlock /> */}
    </motion.section>
  );
}
