"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiParty } from "react-icons/bi";

export default function EventInfo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    variableWidth: false, // Disable variable width to keep all slides uniform
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <div className="grid h-full w-full gap-4 p-2 grid-cols-4 sm:grid-rows-4">
          <div className="col-span-2 row-span-4 border p-4 rounded-lg flex flex-col justify-center bg-stone-50 dark:bg-stone-900/50 text-foreground">
            <h3 className="text-lg font-semibold">Events Access</h3>
            <p className="text-sm text-muted-foreground">
              For access to our events, you need to be a subscribed member of
              any one of our clubs.
              <br />
              If you are not a member, you can join any of our clubs by clicking
              the button.
            </p>
          </div>

          <div className="col-span-2 row-span-2 border p-4 rounded-lg flex flex-col">
            <h3 className="mb-3 text-base font-semibold">Join our clubs</h3>
            <form className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2 mt-2 sm:mt-0">
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

          <div className="col-span-2 row-span-2 border p-4 rounded-lg relative overflow-hidden h-fit">
            {/* Added `overflow-hidden` to keep items within the container */}
            <Slider {...settings} className="w-full">
              {clubs.map((club, index) => (
                <div key={index} className="p-2 min-w-fit">
                  {" "}
                  <div className="flex items-center gap-2">
                    <div className="bg-stone-900/65 rounded-lg py-2 px-3">
                      <BiParty />
                    </div>
                    <h4 className="text-sm font-semibold">{club}</h4>
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
