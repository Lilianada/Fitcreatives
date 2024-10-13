import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";


export default function Process() {
  return (
    <section className="border rounded-2xl bg-background text-foreground p-4">
      <div className="border rounded-lg p-4">
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
      </div>
    </section>
  );
}
