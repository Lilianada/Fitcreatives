import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 w-full">
      <div className="bg-light rounded-xl p-2 sm:p-4">
      <div className="bg-yellow rounded-xl px-4 py-12 sm:p-20">
      <div className="mx-auto max-w-7xl px-0 lg:px-8 flex flex-col justify-center items-center">
        <div className="mb-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-gray-700 text-4xl">
            Join our fitness community and embark on your journey to optimal fitness & health!
          </h1>
          <p className="text-lg text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit animi possimus mollitia.
          </p>
        </div>

        <div className="">
          <button className="bg-light px-8 py-2 text-gray-700 font-medium hover:text-gray-400 rounded-lg">
            Join Now
          </button>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
