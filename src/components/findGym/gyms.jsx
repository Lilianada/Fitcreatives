"use client";

import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LocationBox = () => {
  return (
    <div className="border rounded-b-2xl p-4 mx-4 mb-4">
      {/* <div className="sm:w-2/3 grid grid-cols-3 gap-4 m-auto">
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
      </div> */}
    </div>
  );
};

const GymCard = ({ name, location, image }) => {
  return (
    <div className="border rounded-2xl p-4 grid gap-4">
      <div className="grid place-items-center">
        <img
          src={image}
          alt='gym'
          className="h-56 sm:h-40 min-800:h-56 lg:h-40 w-full rounded-lg bg-gray-700 object-cover"
        />
      </div>
      <div className="grid place-items-center">
        <p className="text-base font-medium text-center text-light">{name}</p>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  );
};

export default function Gyms() {
  const [loading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState({});
  const [selectedCity, setSelectedCity] = useState("lagos"); // Default to any city

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("/data/gyms.json");
        const data = await response.json();
        setPlaces(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <section className="border rounded-2xl p-4 grid gap-4">
      <div className="grid place-items-center border p-4 rounded-xl">
        <h3 className="text-2xl sm:text-3xl font-medium text-center text-light max-w-[280px] sm:max-w-[350px]">
          Browse by city
        </h3>
        <p className="text-muted-foreground text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      <div className="grid place-items-center w-full">
        {
          loading ? (
            <div className="grid place-items-center">
              <p className="text-muted-foreground text-base">Loading...</p>
            </div>
          ) : (
        <Tabs
          defaultValue="lagos"
          className="w-full grid"
          onValueChange={setSelectedCity}
        >
          <TabsList className="border rounded-xl bg-background mx-auto px-4 h-14 flex gap-3">
            {Object.keys(places).map((city) => (
              <TabsTrigger key={city} value={city} className="rounded-lg font-semibold px-8 py-2">
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(places).map((city) => (
            <TabsContent key={city} value={city}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {places[city].map((place) => (
                  <GymCard
                    key={place.id}
                    name={place.name}
                    image={place.images.gymImage}
                    location={place.location}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
          )}
      </div>
    </section>
  );
}
