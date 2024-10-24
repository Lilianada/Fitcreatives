import Details from "@/components/events/Details";
import Organizers from "@/components/events/Organizers";
import Process from "@/components/home/Process";
import React from "react";

export default function Events() {
  return (
    <div className="w-full grid gap-8">
      <Organizers />
      <Details />

      <div className="border p-4 rounded-2xl">
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-full w-full gap-4  p-2 grid-cols-4 grid-rows-4 ">
            <div className="col-span-2 row-span-4 border p-4 rounded-lg flex items-center justify-center">
              1
            </div>

            <div className="col-span-2 row-span-2 border p-4 rounded-lg flex items-center justify-center">
              2
            </div>

            <div className="col-span-2 row-span-2 border p-4 rounded-lg flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
