import React from "react";

export default function Hero() {
  return (
    <section className="w-full border border-zinc-700 rounded-lg p-4">
      <div className="m-8 grid place-items-center gap-3">
        <div className="w-fit flex justify-center border border-zinc-700 rounded-lg">
          <p className="text-base text-zinc-400 py-2 px-4">
            Fitcreatives Club
          </p>
        </div>
        <p className="text-3xl font-medium text-zinc-600 dark:text-zinc-200">
          Your fitness journey starts here
        </p>
        <div className="w-fit flex justify-center border border-zinc-700 rounded-lg">
          <p className="text-base text-zinc-400 py-2 px-4">
            with us
          </p>
        </div>
      </div>
    </section>
  );
}
