'use client'

import Image from "next/image"

export default function SecondHero() {

  return (
    <div className="w-full mt-24">

      <div className="relative isolate overflow-hidden ">
        <Image
          alt="Fitcreatives"
          width={920}
          height={900}
          src="/assets/PrecisionPilates.jpeg"
          className="absolute inset-0 -z-10 h-full w-full object-cover rounded-xl"
        />
        <div className="mx-auto max-w-2xl py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-dark ring-1 ring-black/10 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-lightblue">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yellow bg-clip-text sm:text-6xl">
              Find a community that supports your fitness journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-light">
            Join a supportive community of creatives who prioritize fitness.
            Get expert guidance, community support, and tailored workouts.
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
