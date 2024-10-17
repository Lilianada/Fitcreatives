"use client";

import React from "react";
import HoverDevCards from "./HoverCards";
import CustomDialog from "../form";

export default function Hero() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground flex flex-col">
      <div className="grid place-items-center gap-3 border m-4 bg-backdrop bg-cover bg-center py-12  rounded-tl-2xl rounded-tr-2xl bg-opacity-70 filter grayscale">
        
        {/* <div className="w-full h-full">
          <img src="/assets/Untitled-design.png" alt="" className="bg-cover bg-center w-full h-full rounded-tl-2xl rounded-tr-2xl"/>
        </div> */}
        <div className="w-fit flex justify-center py-2 px-4 border border-foreground rounded-lg text-muted-foreground">
          <p className="text-base">Fitness Club</p>
        </div>
        <p className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[350px]">
          Your fitness journey gets easier with us
        </p>
        <CustomDialog
          triggerText={
            <>
              <div className="h-4 w-4 mr-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
              Fitcreatives
              <div className="h-4 w-4 ml-4 rounded-full border-dashed border-2 border-primary animate-spin"></div>
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
