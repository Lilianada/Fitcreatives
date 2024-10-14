'use client';

import React from "react";
import HoverDevCards from "./HoverCards";
import CustomDialog from "../form";

export default function Hero() {

  return (
    <section className="w-full border rounded-2xl bg-background text-foreground">
      <div className="grid py-8 px-4 place-items-center gap-3">
        <div className="w-fit flex justify-center p-2 border rounded-lg bg-card text-muted-foreground">
          <p className="text-base">Fitcreatives Club</p>
        </div>
        <p className="text-2xl sm:text-3xl font-medium text-center">
          Your fitness journey starts here
        </p>

        {/* Using the reusable dialog */}
        <CustomDialog
          triggerText={
            <>
              <div className="h-4 w-4 mr-2 rounded-full border-dashed border-2 border-primary animate-spin"></div>
              Join the community
              <div className="h-4 w-4 ml-2 rounded-full border-dashed border-2 border-primary animate-spin"></div>
            </>
          }
        />
      </div>

      <div className="border-t">
        <HoverDevCards />
      </div>
    </section>
  );
}
