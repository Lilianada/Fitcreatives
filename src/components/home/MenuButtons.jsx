'use client'; // Ensure client-side component

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function MenuButtons({ icon: Icon, text, href, activeLink }) {
  const isActive = activeLink === href;

  return (
    <div className="w-auto h-10">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`text-xs sm:text-base relative flex items-center justify-center gap-2 min-w-14 w-auto h-10 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-900 border border-stone-300 dark:border-stone-700 transition-colors duration-300 ${
                  isActive ? "bg-stone-100 dark:bg-stone-900" : ""
                }`}
              >
                <Icon className="h-[1.2rem] w-[1.2rem] text-orange-400 transition-transform duration-500" />
                {isActive && (
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

export default function Menu({ navItems = [] }) {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState(pathname); // Set initial active link

  useEffect(() => {
    // Update active link when the pathname changes
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="flex gap-4">
      {navItems.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <MenuButtons
                  icon={item.icon}
                  text={item.title}
                  href={item.url}
                  activeLink={activeLink}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-light">{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
