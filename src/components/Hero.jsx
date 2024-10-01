'use client'

import Image from "next/image"

export default function Hero() {

  return (
    <div className="w-full sm:w-[90%] max-4xl rounded-xl mt-12">

      <div className="relative isolate overflow-hidden">
        <Image
          alt="Fitcreatives"
          width={1020}
          height={900}
          src="/assets/Untitled-design.svg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right rounded-xl"
        />
        <div className="mx-auto max-w-2xl py-20 px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-light ring-1 ring-black/10 hover:ring-white/20">
            Stay Fit, Stay Creative
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yellow bg-clip-text sm:text-6xl">
            A community of like minded individuals that support your fitness journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-light">
            Discover personalized workouts, expert advice, and a supportive community at FitCreatives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-lightblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightblue"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
