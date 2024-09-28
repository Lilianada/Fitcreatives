import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative grid place-items-center w-full pt-16 pb-32 sm:pb-52">
      <div className="bg-blue mt-4 w-full p-6 rounded-xl relative grid place-items-center h-[500px] content-start">
      <div className=" px-3 py-1 w-fit rounded-lg">
        <p className="text-yellow text-xs">Fitcreatives - Online fitness community</p>
      </div>
        <div className="flex flex-col justify-center items-center text-center w-full mb-12">
          <div className="w-full md:w-2/3 mt-4">
            <h1 className="text-6xl font-bold text-gray">
              Stay Fit
              <br /> Stay Creative
            </h1>
            <p className="w-full text-lg mt-2 text-center">
              Join a supportive community of creatives who prioritize fitness.
              Get expert guidance, community support, and tailored workouts.
            </p>
          </div>
        </div>
      <div className="bg-yellow h-72 md:h-[400px] w-[90%] md:w-[85%] rounded-xl absolute top-2/3 md:top-[60%]">
        <Image src="/assets/IMG_6380.jpg" alt="hero image" layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
      </div>
    </section>
  );
}
