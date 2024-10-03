'use client'

import Image from "next/image"

export default function Hero() {

  return (
    <div className="w-full max-4xl rounded-xl mt-12">

      <div className="relative isolate overflow-hidden">
        <Image
          alt="Fitcreatives"
          width={1020}
          height={900}
          src="/assets/Untitled-design.png"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right rounded-xl"
        />
        <div className="mx-auto max-w-2xl py-32 px-8">
          <div className="hidden sm:mb-4 sm:flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-light ring-1 ring-black/10 hover:ring-white/20">
            Stay Fit, Stay Creative
            </div>
          </div>
          <div className="text-center sm:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yellow bg-clip-text sm:text-6xl">
            A community of like minded individuals that support your fitness journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-light">
            Discover personalized workouts, expert advice, and a supportive community at FitCreatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
