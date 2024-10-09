'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiParty } from "react-icons/bi";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/outline";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

// MenuButtons Component
function MenuButtons({ icon: Icon, text, href }) {
  return (
    <div className="w-14 h-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={href} legacyBehavior passHref className="p-0">
                <NavigationMenuLink className="relative flex items-center justify-center w-14 h-10 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-900 border border-stone-300 dark:border-stone-700 transition-colors duration-300">
                  <Icon
                    className="h-[1.2rem] w-[1.2rem] text-stone-900 dark:text-orange-400 transition-transform duration-500"
                  />
                  <span className="sr-only">{text}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}



// Header Component
export default function Header() {
  return (
    <header className="w-full m-4">
      <div className="flex justify-between border border-[hsl(var(--border))] rounded-2xl px-4 py-3">
        <div className="flex items-center">
          <Image
            src="/assets/Logo-icon.svg"
            alt="Fitcreatives"
            width={30}
            height={15}
          />
          <h2 className="text-[hsl(var(--foreground))]">Fitcreatives</h2>
        </div>
        <div className="flex gap-3">
          <MenuButtons icon={UsersIcon} text="Trainers" href="/trainers" />
          <MenuButtons icon={MapPinIcon} text="Find Gym" href="/gym" />
          <MenuButtons icon={BiParty} text="Events" href="/events" />
          <MenuButtons icon={ShoppingCartIcon} text="Shop" href="/shop" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
