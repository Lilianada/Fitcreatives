import React from "react";
import { FiArrowDown, FiArrowRight, FiArrowUp } from "react-icons/fi";

export default function Process() {
  return (
    <section className="border rounded-2xl bg-background text-foreground p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid h-full w-full gap-4 grid-cols-4 md:grid-rows-4  ">

          <div className="col-span-2 row-span-1 border rounded-lg p-4">
            <div className="flex flex-col">
              <div className="border rounded-full h-6 w-6 text-xs flex justify-center items-center mb-2">
                <span>1</span>
              </div>
              <h3 className="text-base font-medium capitalize">
                Browse website
              </h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Explore our website to learn more about the services we offer, read success stories, and discover how we can help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border rounded-lg p-4">
            <div className="flex flex-col">
              <div className="border rounded-full h-6 w-6 text-xs flex justify-center items-center mb-2">
                <span>2</span>
              </div>
              <h3 className="text-base font-medium capitalize">
                Fill membership form
              </h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Complete the online membership form with your personal details and preferences. We’ll use this information to match you with the best program.
              </p>
            </div>
          </div>

          <div className="col-span-4 row-span-1 md:col-span-3 md:row-span-2 border rounded-lg p-4 flex">
            <div className="my-12 space-y-4">
              <div className="text-4xl text-orange-400 ">
                <FiArrowUp className="block" />
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo_bg.svg"
                  alt="avatar"
                  className="size-10 rounded-full"
                />

                <h2 className="text-3xl font-medium leading-tight">
                  Our Process
                </h2>
              </div>
              <div className="text-4xl text-orange-400 ">
                <FiArrowDown className="block" />
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2 border rounded-lg p-4">
            <div className="flex flex-col">
              <div className="border rounded-full h-6 w-6 text-xs flex justify-center items-center mb-2">
                <span>3</span>
              </div>
              <h3 className="text-base font-medium capitalize">
                Find a trainer and gym
              </h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Based on your preferences, we'll help you connect with a certified trainer and locate the nearest gym that suits your needs.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 md:col-span-4 md:row-span-2 border rounded-lg p-4">
            <div className="flex flex-col">
              <div className="border rounded-full h-6 w-6 text-xs flex justify-center items-center mb-2">
                <span>4</span>
              </div>
              <h3 className="text-base font-medium capitalize">
                Start your journey
              </h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Begin your fitness journey with a personalized plan tailored to your goals. Stay motivated and track your progress along the way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
