import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function EventInfo() {
  return (
    <section className="border p-4 rounded-2xl">
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid h-full w-full gap-4  p-2 grid-cols-4 grid-rows-4">
          <div className="col-span-2 row-span-4 border p-4 rounded-lg flex flex-col justify-center bg-stone-50 dark:bg-stone-900/50 text-foreground">
          <h3 className="mb- text-lg font-semibold">Events Access</h3>
            <p className="text-base">
              For access to our events, you need to be a subscribed member of any one of our clubs. 
              <br/>
              If you are not a
              member, you can join any of our clubs by clicking the button and .
            </p>
          </div>

          <div className="col-span-2 row-span-2 border p-4 rounded-lg flex flex-col">
          <h3 className="mb-3 text-base font-semibold">Join our clubs</h3>
            <form
              // onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border px-3 py-1.5 transition-colors focus:border-orange-300 focus:outline-0"
              />
              <Button
                type="submit"
                variety="secondary"
                className="flex items-center gap-2 whitespace-nowrap bg-stone-50 px-3 py-2 text-sm rounded-lg font-medium text-stone-900 transition-colors hover:bg-stone-300"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="col-span-2 row-span-2 border p-4 rounded-lg flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </section>
  );
}
