import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const LocationBox = () => {
  return (
    <div className="border rounded-b-2xl p-4 mx-4 mb-4">
       <div className="grid place-items-center border p-4 rounded-lg">
        <h3 className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[350px] mb-4">
          Browse by city
        </h3>
       </div>
      <div className="sm:w-2/3 grid grid-cols-3 gap-4 m-auto">
        <div className="flex gap-2">
          <MapPinIcon className="h-4 w-4 text-light mt-1" />
          <div className="grid">
            <p className="text-sm text-light">Location</p>
            <p className="text-xs text-muted-foreground font-medium">
              Anywhere
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <MapPinIcon className="h-4 w-4 text-light mt-1" />
          <div className="grid">
            <p className="text-sm text-light">Location</p>
            <p className="text-xs text-muted-foreground font-medium">Lagos</p>
          </div>
        </div>
        <div className="flex gap-2">
          <MapPinIcon className="h-4 w-4 text-light mt-1" />
          <div className="grid">
            <p className="text-sm text-light">Location</p>
            <p className="text-xs text-muted-foreground font-medium">Lagos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground flex flex-col">
      <div className="grid place-items-center border m-4 bg-gymHeroBg bg-cover bg-center py-12  rounded-tl-2xl rounded-tr-2xl bg-opacity-70 filter grayscale">
        <h3 className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[350px] mb-4">
          Easily locate gyms around you
        </h3>
        <div className="rounded-lg border border-light text-sm border-dashed px-3 py-2 text-muted-foreground  flex gap-2 ">
          <div className="h-4 w-4 mr-4 rounded-full border-dashed border-2 border-light animate-spin"></div>
          <p className="text-sm font-medium text-light">Fitcreatives</p>
          <div className="h-4 w-4 ml-4 rounded-full border-dashed border-2 border-light animate-spin "></div>
        </div>
      </div>
    </section>
  );
}
