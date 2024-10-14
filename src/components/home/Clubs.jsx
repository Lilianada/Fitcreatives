import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function Clubs() {
  return (
    <section className="border rounded-2xl text-foreground bg-background p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col sm:grid h-full w-full gap-4 grid-cols-4 grid-rows-5 rounded-lg">
          <div className="col-span-4 row-span-2 border p-4 rounded-lg">
            <div className="my-12 space-y-4">
              <img
                src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                alt="avatar"
                className="size-14 rounded-full"
              />
              <h2 className="text-3xl font-medium leading-tight">
                Join our clubs
              </h2>
              <div className="text-4xl text-orange-400 ">
                {/* <FiArrowRight className="hidden sm:block" /> */}
                <FiArrowDown className="block" />
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-4 border p-4 rounded-lg">Add Image</div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Running Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                pariatur.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Yoga Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                pariatur.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Dance Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                pariatur.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Strength Training Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
