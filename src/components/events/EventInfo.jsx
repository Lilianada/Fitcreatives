"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BiParty } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventInfo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const clubs = [
    "Running Club",
    "Dance Club",
    "Yoga Club",
    "Strength Training Club",
  ];

  return (
    <section className="border p-4 rounded-2xl">
      <div className="flex h-full  w-full items-center justify-center">
        <div className="grid h-full w-full gap-4 p-2 grid-cols-4 lg:grid-rows-4">
          {/* Info */}
          <div className="col-span-4 lg:col-span-2 lg:row-span-4 border p-4 rounded-lg flex flex-col justify-center bg-stone-50 dark:bg-stone-900/50 text-foreground">
            <h3 className="text-xl sm:text-2xl mb-3 font-semibold">Events Access</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              For access to our events, you need to be a subscribed member of
              any one of our clubs. If you are not a member, you can join any of
              our clubs by filling the form.
            </p>
          </div>

          {/* Form */}
          <div className="col-span-4 lg:col-span-2 lg:row-span-2 border p-4 rounded-lg flex flex-col">
            <h3 className="mb-3 text-base sm:text-2xl font-semibold">Join our clubs</h3>
            <form className="flex flex-col md:flex-row sm:items-center gap-4 sm:gap-2 mt-2 sm:mt-0">
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

          <div className="col-span-4 lg:col-span-2 lg:row-span-2 border p-4 rounded-lg relative overflow-hidden h-12rem">
            {/* Added `overflow-hidden` to keep items within the container */}
            <Slider {...settings}>
              {clubs.map((club, index) => (
                <div key={index} className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-stone-900/65 rounded-lg py-2 px-3">
                      <BiParty />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold">{club}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
