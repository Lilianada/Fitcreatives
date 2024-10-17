import { useState, forwardRef } from "react";
import Link from "next/link";
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

const MenuButtons = forwardRef(function MenuButtons(
  { icon: Icon, text, href, activeLink, setActiveLink },
  ref // accept ref here
) {
  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="w-auto h-10">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                ref={ref} // forward ref to this element
                onClick={() => handleClick(href)}
                className={`text-xs sm:text-base relative flex items-center justify-center gap-2 min-w-14 w-auto h-10 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-900 border border-stone-300 dark:border-stone-700 transition-colors duration-300 ${
                  activeLink === href ? "bg-stone-100 dark:bg-stone-900" : ""
                }`}
              >
                <Icon className="h-[1.2rem] w-[1.2rem] text-orange-400 transition-transform duration-500" />
                {activeLink === href && (
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
});

export default function Menu({ navItems = [] }) {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <div className="flex gap-4">
      {navItems.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <MenuButtons
                icon={item.icon}
                text={item.title}
                href={item.url}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-orange-400">{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}