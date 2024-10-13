import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function Process() {
  return (
    <section className="border rounded-2xl bg-background text-foreground p-4">
      {/* <div className="border rounded-lg p-4">
        <div className="my-12 space-y-4">
          <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="size-14 rounded-full"
          />
          <h2 className="text-3xl font-medium leading-tight">Our Process</h2>
          <div className="text-4xl text-orange-400 ">
            <FiArrowRight className="hidden sm:block" />
            <FiArrowDown className="block sm:hidden" />
          </div>
        </div>
      </div> */}

      <div className="flex h-full w-full items-center justify-center">
        <div className="grid h-full w-full gap-4 p-2 grid-cols-4 grid-rows-4 ">
          <div className="col-span-2 row-span-1 border rounded-lg p-4 flex items-center justify-center">
            1
          </div>

          <div className="col-span-2 row-span-1 border rounded-lg p-4 flex items-center justify-center">
            2
          </div>

          <div className="col-span-3 row-span-2 border rounded-lg p-4 flex items-center justify-center">
            3
          </div>

          <div className="col-span-1 row-span-2 border rounded-lg p-4 flex items-center justify-center">
            4
          </div>

          <div className="col-span-4 row-span-2 border rounded-lg p-4 flex items-center justify-center">
            5
          </div>
        </div>
      </div>
    </section>
  );
}
