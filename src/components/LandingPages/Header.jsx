'use client'; 

import { UsersIcon, MapPinIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import MenuButtons from "./MenuButtons";
import { ModeToggle } from "./ModeToggle";
import { BiParty, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
  {
    title: "Trainers",
    url: "trainers",
    icon: UsersIcon,
  },
  {
    title: "Find Gym",
    url: "/find-gyms",
    icon: MapPinIcon,
  },
  {
    title: "Events",
    url: "pricing",
    icon: BiParty,
  },
  {
    title: "Shop",
    url: "shop",
    icon: ShoppingCartIcon,
  },
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function MobileNavItem({ url, children }) {
  return (
    <motion.li variants={itemVariants}>
      <Button variant="outline" href={url} className="flex gap-3 p-2 border rounded-lg w-full justify-normal">
        {children}
      </Button>
    </motion.li>
  );
}

export function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
      {...props}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center py-2 text-sm font-medium border rounded-lg p-4"
      >
        <BiMenuAltRight className="size-8 text-orange-400" />
      </motion.button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            opacity: 0,
            y: -20,
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            },
          },
        }}
        className="fixed inset-x-4 top-32 z-50 origin-top rounded-2xl bg-background border px-4 py-8"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.div className="flex justify-between items-center">
          <h2 className="text-base font-medium">Explore</h2>
          <ModeToggle />
        </motion.div>

        <nav className="mt-6">
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
              closed: {
                opacity: 0,
              },
            }}
            className="-my-2 text-base space-y-3"
          >
            {navItems.map((item) => (
              <MobileNavItem key={item} url={item.url}>
                <item.icon className="size-5 text-orange-400" />
                {item.title}
              </MobileNavItem>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </motion.nav>
  );
}


export default function Header() {
  return (
    <header className="w-full m-4">
      <div className="flex justify-between border border-[hsl(var(--border))] rounded-2xl px-4 py-3">
        <div className="flex items-center">
          {/* <Image
            src="/assets/Logo-icon.svg"
            alt="Fitcreatives"
            width={30}
            height={15}
          /> */}
          <h2 className="text-foreground font-medium">Fitcreatives</h2>
        </div>

        {/* desktop */}
        <div className="hidden md:flex gap-3">
          <MenuButtons icon={UsersIcon} text="Trainers" href="/trainers" />
          <MenuButtons icon={MapPinIcon} text="Find Gym" href="/gym" />
          <MenuButtons icon={BiParty} text="Events" href="/events" />
          <MenuButtons icon={ShoppingCartIcon} text="Shop" href="/shop" />
          <ModeToggle />
        </div>

        {/* mobile */}
        <div className="flex md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
