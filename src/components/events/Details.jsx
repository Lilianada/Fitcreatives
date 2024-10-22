import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const events = [
  {
    id: 1,
    eventName: "Morning Yoga Retreat",
    date: "2024-11-10",
    time: "7:00 AM - 9:00 AM",
    place: "Millennium Park, Abuja",
    details:
      "Join us for a calming morning yoga session at Millennium Park. Suitable for all fitness levels, focusing on mindfulness, flexibility, and relaxation.",
  },
  {
    id: 2,
    eventName: "Strength Training Bootcamp",
    date: "2024-11-15",
    time: "6:00 PM - 8:00 PM",
    place: "Bodyline Gym, Wuse II, Abuja",
    details:
      "A high-intensity strength training session with professional coaches. Participants will engage in muscle-building exercises with a focus on form and endurance.",
  },
  {
    id: 3,
    eventName: "Run for Fun Marathon",
    date: "2024-11-20",
    time: "8:00 AM - 12:00 PM",
    place: "Lekki Conservation Centre, Lagos",
    details:
      "An exciting marathon event for runners of all levels. This 5K fun run will take you through scenic routes with support stations along the way. Prizes for top finishers!",
  },
  {
    id: 4,
    eventName: "Dance Fitness Party",
    date: "2024-11-25",
    time: "5:00 PM - 7:00 PM",
    place: "The Palms Mall, Lekki, Lagos",
    details:
      "Get your groove on at our Dance Fitness Party! A fun cardio workout set to upbeat music, perfect for burning calories while learning new dance moves.",
  },
  {
    id: 5,
    eventName: "Wellness Workshop",
    date: "2024-11-30",
    time: "10:00 AM - 12:00 PM",
    place: "Sheraton Hotel, Central Area, Abuja",
    details:
      "A wellness workshop focusing on nutrition and healthy living. Learn from expert nutritionists about meal planning, healthy eating habits, and how to fuel your fitness journey.",
  },
];

export default function Details() {
  return (
    <section className="w-full border rounded-2xl bg-background text-foreground p-4">
      <div className="border rounded-xl mb-4">
        <p className="text-3xl font-medium p-4 text-center">Upcoming Events</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {events.map((item) => {
          return (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className="text-orange-300 underline-offset-0 w-full">
                <h3 className="flex justify-between items-center font-semibold text-xl w-full">
                  {item.eventName}
                  <span className="text-muted-foreground text-sm mr-4">
                    {item.date}
                  </span>
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-normal md:w-2/3">{item.details}</p>
                <p className="mt-2">
                  <span className="text-muted-foreground text-sm mr-2">
                    Venue:
                  </span>
                  {item.place}
                </p>
                <p>
                <span className="text-muted-foreground text-sm mr-4">
                    Time:
                    </span>
                    {item.time}
                    </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
