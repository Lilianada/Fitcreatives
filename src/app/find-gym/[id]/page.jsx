"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 

export default function GymDetails() {
  const { id } = useParams(); 
  const [gym, setGym] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/gyms.json"); 
        const data = await response.json();

        let selectedGym = null;
        Object.keys(data).forEach((city) => {
          const gym = data[city].find((gym) => gym.id === id);
          if (gym) {
            selectedGym = gym;
          }
        });

        if (!selectedGym) {
          setError(<p className="my-6 text-center font-semibold">Gym not found.</p>);
        } else {
          setGym(selectedGym); 
        }
      } catch (error) {
        setError("Failed to fetch gym details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGymDetails();
  }, [id]); 

  if (isLoading) {
    return <p className="text-center my-6">Loading gym details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{gym.name}</h1>
      <p className="text-sm text-gray-500">{gym.location}</p>
      <img
        src={gym.images.gymImage}
        alt={gym.name}
        className="my-4 w-full h-64 object-cover rounded"
      />
      <p>{gym.openHour}</p>
    </div>
  );
}
