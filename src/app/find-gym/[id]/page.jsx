"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import Link from "next/link";

export default function GymDetails() {
  const { id } = useParams(); 
  const [gym, setGym] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/gyms.json"); 
        const data = await response.json();

        let selectedGym = null;
        Object.keys(data).forEach((city) => {
          const gym = data[city].find((gym) => gym.id === id);
          if (gym) selectedGym = gym;
        });

        if (!selectedGym) {
          setError("Gym not found.");
        } else {
          setGym(selectedGym);
        }
      } catch (err) {
        setError("Failed to fetch gym details.");
      } finally {
        setLoading(false);
      }
    };

    fetchGymDetails();
  }, [id]);

  if (loading) {
    return <p>Loading gym details...</p>;
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
      <div className="flex gap-3">
      <p>{gym.openHour}</p> -
      <p>{gym.closeHour}</p>
      </div>
      <p className="py-4">Get more info aout this gym by visiting their official <Link href={gym.website} className="text-[#FF9933]"> Website</Link></p>
    </div>
  );
}
