import Link from "next/link";
import React from "react";

const trainers = [
  {
    name: "Maery Jane",
    speciality: "Yoga and Pilates",
    image: "/assets/Athleta.jpeg",
    location: "Lagos, Nigeria",
  },
  {
    name: "Jane Doe",
    speciality: "Body Building",
    image: "/assets/ActiveBlack.jpeg",
    location: "Abuja, Nigeria",
  },
  {
    name: "John Doe",
    speciality: "Weight Loss",
    image: "/assets/NeverBetter.jpeg",
    location: "Port Harcort, Nigeria",
  },
  {
    name: "Jane Doe",
    speciality: "Body Building",
    image: "/assets/RaceTights.jpeg",
    location: "Lagos, Nigeria",
  },
];

export default function FindTrainer() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full flex justify-center">
          <h2 className="text-center text-base/7 font-semibold text-gray-600 w-fit px-4 rounded-lg bg-zinc-100 border-2">
            Find a trainer
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <h3 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-light sm:text-5xl">
            Choose from our pool of experienced trainers.
          </h3>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {trainers.map((trainer) => (
            <li key={trainer.name}>
              <img
                alt=""
                src={trainer.image}
                className="aspect-[14/13] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {trainer.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">
                {trainer.speciality}
              </p>
              <p className="text-sm leading-6 text-gray-500">
                {trainer.location}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-16">
          <Link
          href="/login"
          className="text-base font-medium bg-yellow text-dark px-8 py-2 rounded-lg hover:bg-lime-200"
        >
          View all trainers
        </Link>
        </div>
      </div>
    </section>
  );
}
