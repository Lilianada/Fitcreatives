import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function Clubs() {
  return (
    <section className="border rounded-2xl text-foreground bg-background p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col sm:grid h-full w-full gap-4 grid-cols-4 grid-rows-5 rounded-lg">
          <div className="col-span-4 row-span-2 border p-4 rounded-lg bg-logoBackdrop bg-cover">
            <div className="my-12 space-y-4">
              <img
                src="/assets/logo_bg.svg"
                alt="avatar"
                className="size-14 rounded-full bg-light"
              />
              <h2 className="text-3xl font-medium leading-tight">
                Join our clubs
              </h2>
              <div className="text-4xl text-orange-400">
                {/* <FiArrowRight className="hidden sm:block" /> */}
                <FiArrowDown className="block" />
              </div>
            </div>
          </div>

          <div
            className="hidden sm:block col-span-2 row-span-4 border p-4 rounded-lg"
            style={{ backgroundImage: `url("/assets/clubs.png")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
          ></div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Running Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                For members who enjoy running and hitting new 'mile'-stones.
                Join our running club to get access to running routes, group
                runs and competitions.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Strength Training Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Looking to build muscles, strength and have a squad of people
                who you can workout with? Join our strength training club and
                get access to trainers, squad workouts and workout plans.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Yoga Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Mindfulness and flexibility are key to a healthy lifestyle. Join
                our yoga club to get access to yoga classes, meditation sessions
                and yoga retreats.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-1 border p-4 rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Dance Club</h3>
              <p className="mt-1 text-xs text-stone-400 dark:text-stone-400 ">
                Dancing as a form of cardio for members who want a more fun way
                to stay fit. Join our dance club to learn new dance moves and
                stay fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 