import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-dark py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="w-full flex justify-center">
          <h2 className="text-center text-base/7 font-semibold text-gray-600 w-fit px-4 rounded-lg bg-zinc-100 border-2">
            About Us
          </h2>
        </div>
        <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-light sm:text-5xl">
          Everything you need to know about Fitcreatives.
        </h3>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          <div className="hidden md:flex relative">
            <div className="w-full">
              <img
                className="size-full object-cover object-top rounded-lg"
                src="/assets/8.svg"
                alt="Fitcreatives"
              />
            </div>
          </div>

          <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative bg-light flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="p-8 sm:p-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Supportive Community
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We provide online spaces for our members to discuss fitness
                  goals, share workout routines, and offer support and
                  encouragement.
                </p>
              </div>
            </div>

            <div className="relative bg-light flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="p-8 sm:p-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                Expert Guidance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We provide online spaces for our members to discuss fitness
                  goals, share workout routines, and offer support and
                  encouragement.
                </p>
              </div>
            </div>

            <div className="relative bg-light flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="p-8 sm:p-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                Fitness Challenges & Competitions
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                We organize fitness challenges and competitions to keep our
                members motivated and engaged.
                </p>
              </div>
            </div>
            
            <div className="relative bg-light flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="p-8 sm:p-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Live Workouts & Classes
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We offer live workouts and classes to help our members stay
                  active and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
