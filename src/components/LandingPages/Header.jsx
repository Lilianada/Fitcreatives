'use client';
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { BiParty } from "react-icons/bi";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MapPinIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/outline";

function MenuButtons({ icon: Icon, text, href }) {
  return (
    <div className="border border-zinc-300 dark:border-zinc-700 rounded-md w-14 h-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={href} legacyBehavior passHref className="p-0">
                <NavigationMenuLink className="relative flex items-center justify-center w-14 h-10 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 transition-colors duration-300">
                  <Icon
                    className={`h-[1.2rem] w-[1.2rem] transition-transform duration-500 text-zinc-900 dark:text-orange-400`}
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


export default function Header() {
  return (
    <header className="w-full m-4">
      <div className="flex justify-between border rounded-lg px-4 py-3">
        <div className="flex items-center">
          <Image
            src="/assets/Logo-icon.svg"
            alt="Fitcreatives"
            width={30}
            height={15}
          />
          <h2>Fitcreatives</h2>
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
