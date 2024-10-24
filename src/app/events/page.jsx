import React from "react";
import Details from "@/components/events/Details";
import EventInfo from "@/components/events/EventInfo";
import Organizers from "@/components/events/Organizers";
import Partners from "@/components/events/Partners";

export default function Events() {
  return (
    <div className="w-full grid gap-8">
      <Organizers />
      <Partners />
      <Details />
      <EventInfo />
    </div>
  );
}
