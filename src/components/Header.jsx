import { useState } from "react";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Trainers",
    url: "trainers",
  },
  {
    title: "Find Gym",
    url: "/find-gyms",
  },
  {
    title: "Events",
    url: "pricing",
  },
  {
    title: "Blog",
    url: "blog",
  },
  {
    title: "Shop",
    url: "shop",
  },
];

function DesktopHeader() {
  return (
    <div className="hidden w-full max-w-3xl md:flex justify-between items-center bg-yellow rounded-xl px-4 py-2 mt-4 mb-4">
      <div className="flex text-xl gap-1">
        <Image
          src="/assets/Fitcreative-Logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <nav className="flex gap-6 items-center justify-center text-dark">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item}
            className="text-base font-medium hover:text-yellow"
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/login"
          className="text-base font-medium bg-dark text-light px-4 py-2 rounded-lg hover:bg-dark/85"
        >
          Join community
        </Link>
      </nav>
    </div>
  );
}

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
      <Link href={url} className="block py-2">
        {children}
      </Link>
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
        className="group flex items-center py-2 text-sm font-medium text-dark"
      >
        <BiMenuAltRight className="size-8 text-dark" />
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
        className="fixed inset-x-4 top-28 z-50 origin-top rounded-3xl bg-light p-8 ring-1 ring-zinc-300/5"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.div className="flex">
          <h2 className="text-sm font-medium text-yellow">Explore</h2>
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
            className="-my-2 divide-y divide-zinc-100 text-base text-gray-100"
          >
            {navItems.map((item) => (
              <MobileNavItem key={item} url={item.url}>
                {item.title}
              </MobileNavItem>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </motion.nav>
  );
}

function MobileHeader() {
  return (
    <div className="flex justify-between w-full md:hidden bg-light rounded-lg px-2 py-3">
      <div className="flex text-xl gap-1">
        <Image src="/assets/Logo-icon.svg" alt="logo" width={60} height={50} />
      </div>
      <MobileNavigation />
    </div>
  );
}

export default function Header() {
  return (
    <header className="w-full sm:w-[90%] m-auto grid place-items-center sticky">
      <DesktopHeader className="pointer-events-auto" />
      <MobileHeader />
    </header>
  );
}
