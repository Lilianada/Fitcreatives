"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";

export default function TrainerCard() {
  const url = "https://randomuser.me/api/?results=12";
  const [trainers, setTrainers] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrainers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrainers(data.results);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <section className="mt-8 w-full">
      {
        loading && <p className="text-foreground w-full text-center">Loading trainers...</p>
      }
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {trainers.map((trainer, index) => (
        <div className="border rounded-lg p-4" key={index}>
        <Card
          key={index}
          className="w-full h-[300px] bg-cover relative p-4 flex items-end"
          style={{ backgroundImage: `url(${trainer.picture.large})` }}
          >
          <CardContent className="w-full p-0">
            <div className="w-full mx-auto bg-stone-900 bg-opacity-70 text-white p-3 rounded-lg">
              <h3 className="font-bold text-sm capitalize truncate">{`${trainer.name.first} ${trainer.name.last}`}</h3>
              <p className="text-xs truncate">{trainer.email}</p>
            </div>
          </CardContent>
        </Card>

        </div>
      ))}
      </div>
    </section>
  );
}
