import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="w-full flex justify-center">
          <h2 className="text-center text-base/7 font-semibold text-gray-600 w-fit px-4 rounded-lg bg-zinc-100 border-2">
            About Us
          </h2>
        </div>
        <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-light sm:text-5xl">
          Everything you need to know about Fitcreatives.
        </h3>
        <div className="mt-10 grid gap-y-2 gap-x-4 lg:gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="hidden lg:flex relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-light lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="relative w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <img
                  className="size-full object-cover object-top"
                  src="/assets/8.svg"
                  alt=""
                />
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden  "></div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-light max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
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
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-light max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="p-8 sm:p-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Expert Guidance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-light"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
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
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-3 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-light"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
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
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
