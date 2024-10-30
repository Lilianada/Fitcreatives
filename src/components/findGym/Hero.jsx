import React from "react";

const LocationBox = () => {
    return(
        <div className="border rounded-b-2xl p-4 mx-4 mb-4">ki</div>
    )
};

export default function Hero() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground flex flex-col">
      <div className="grid place-items-center border m-4 bg-gymHeroBg bg-cover bg-center py-12  rounded-tl-2xl rounded-tr-2xl bg-opacity-70 filter grayscale">
        <p className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[350px] mb-4">
          Easily locate gyms around you
        </p>
        <div className="rounded-lg border border-light text-sm border-dashed px-3 py-2 text-muted-foreground  flex gap-2 ">
          <div className="h-4 w-4 mr-4 rounded-full border-dashed border-2 border-light animate-spin"></div>
          <p className="text-sm font-medium text-light">Fitcreatives</p>
          <div className="h-4 w-4 ml-4 rounded-full border-dashed border-2 border-light animate-spin "></div>
        </div>
      </div>
      <LocationBox />
    </section>
  );
}

