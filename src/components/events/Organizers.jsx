import { HandshakeIcon } from "lucide-react";
import React from "react";

const organizers = [
  {
    id: 1,
    name: "Jahn Doe",
    role: "Event Coordinator",
    image:
      "https://images.unsplash.com/photo-1659242855207-eeeba9c6b648?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmaXRuZXNzfGVufDB8fDB8fHww&w=400",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Fitness Trainer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHdoaXRlJTIwd29tYW58ZW58MHx8fHwxNjM4MzA2MTcx&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Nutritionist",
    image:
      "https://plus.unsplash.com/premium_photo-1661963315272-744f2d64a40a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=400",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=400",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D&w=400",
  },
  {
    id: 6,
    name: "Sarah Clark",
    role: "Yoga Instructor",
    image:
      "https://images.unsplash.com/photo-1662092687016-e2f436c44605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&w=400",
  }
];

export default function Organizers() {
  return (
    <section className="w-full grid sm:place-items-center border rounded-2xl p-4">
      <div className="border rounded-xl mb-4 w-full">
        <h3 className="text-xl md:text-3xl font-medium py-4 text-center">
        <HandshakeIcon className="inline-block text-xl mr-3 text-orange-400" />
          Meet the Organizers
          <HandshakeIcon className="inline-block text-xl ml-3 text-orange-400" />
          </h3>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 justify-between">
        {organizers.map((organizer) => (
          <div className="w-auto flex flex-col items-center border rounded-lg py-3 px-3" key={organizer.id}>
            <img
              src={organizer.image}
              alt="avatar"
              className="rounded-lg w-full h-28 sm:h-36 object-cover filter grayscale"
            />
            <h4 className="mt-2 text-sm lg:text-base font-semibold">{organizer.name}</h4>
            <p className="text-xs text-muted-foreground">{organizer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
