import React from "react";
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

const places = [
  {
    name: "Lagos",
    id: "lagos",
  },
  {
    name: "Abuja",
    id: "abuja",
  },
  {
    name: "Port Harcourt",
    id: "port-harcourt",
  },
  {
    name: "Ibadan",
    id: "ibadan",
  },
  {
    name: "Enugu",
    id: "enugu",
  },
  {
    name: "Awka",
    id: "awka",
  },
]

const GymCard = ({ name, location, image }) => {
  return (
    <div className="border rounded-2xl p-4 grid gap-4">
      <div className="grid place-items-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="grid place-items-center">
        <h3 className="text-lg font-medium text-center text-light">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  );
};

export default function Gyms() {
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
        <Tabs defaultValue="lagos" className="w-full grid">
          <TabsList className="border rounded-xl bg-background mx-auto px-4 h-14 flex gap-3">
            {
              places.map((place) => (
                <TabsTrigger key={place.id} value={place.id} className="rounded-lg font-semibold px-8 py-2">
                  {place.name}
                </TabsTrigger>
              ))
            }
          </TabsList>
          <TabsContent value="lagos">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="abuja">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
