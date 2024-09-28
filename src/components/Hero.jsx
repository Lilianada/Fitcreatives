import React from "react";

export default function Hero() {
  return (
    <section className="grid place-items-center w-full mt-16 ">
      <div className="bg-yellow px-3 py-1 w-fit rounded-lg">
        <p className="text-gray-700">Fitcreatives - Online fitness community</p>
      </div>
      <div className="bg-blue mt-4 w-full p-6 rounded-xl">
        <div className="flex flex-col justify-center items-center text-center w-full mb-12">
          <div className="w-2/3 mt-4">
            <h1 className="text-6xl font-bold text-gray">
              Stay Fit
              <br /> Stay Creative
            </h1>
            <p className="text-lg mt-2 text-center">
              Join a supportive community of creatives who prioritize fitness.
              Get expert guidance, community support, and tailored workouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
