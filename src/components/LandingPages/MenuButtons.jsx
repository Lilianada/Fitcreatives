"use client";

import Link from "next/link";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";


export default function MenuButtons({ icon: Icon, text, href }) {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText); // Toggle text display when button is clicked
  };

  return (
    <div className="w-auto h-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref className="p-0">
              <NavigationMenuLink
                onClick={handleClick}
                className="relative flex items-center justify-start gap-2 w-auto h-10 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-900 border border-stone-300 dark:border-stone-700 transition-colors duration-300"
              >
                <Icon
                  className="h-[1.2rem] w-[1.2rem] text-stone-900 dark:text-orange-400 transition-transform duration-500"
                />
                {/* Conditionally show text when clicked */}
                {showText && (
                  <span className="text-stone-900 dark:text-orange-400 transition-opacity duration-300">
                    {text}
                  </span>
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
