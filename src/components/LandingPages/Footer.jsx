'use client';

import React, { useEffect, useState } from "react";
import MenuButtons from "./MenuButtons";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { MessageSquareIcon } from "lucide-react";

export default function Footer() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Function to format the date and time
    const updateDateTime = () => {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = now.toLocaleDateString("en-US", options);
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setDateTime(`${date} - ${time}`);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-stone-100/50 dark:bg-stone-900/20 w-full border rounded-2xl text-foreground">
      <div className="p-4">
        <div className="grid gap-2 place-items-center">
          <h2 className="text-foreground font-medium text-xl">Fitcreatives</h2>

          <div className="flex flex-col text-center">
            <p className="text-foreground text-sm">{dateTime}</p>
            <div className="text-muted-foreground text-xs">Local time in Lagos, Nigeria</div>
          </div>

          <div className="flex flex-wrap gap-2 my-2">
            <MenuButtons icon={TwitterLogoIcon} text="Twitter" href="#" />
            <MenuButtons icon={InstagramLogoIcon} text="Instagram" href="#" />
            <MenuButtons icon={MessageSquareIcon} text="Contact Us" href="/contact" />
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2024 Fitcreatives. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
