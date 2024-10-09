"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-14 h-10 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-900 border border-stone-300 dark:border-stone-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <SunIcon
        className={`h-[1.5rem] w-[1.5rem] absolute transition-transform duration-500 ${
          theme === "dark"
            ? "scale-0 rotate-90"
            : "scale-100 rotate-0 text-orange-400"
        }`}
      />
      <MoonIcon
        className={`h-[1.5rem] w-[1.5rem] absolute transition-transform duration-500 ${
          theme === "dark"
            ? "scale-100 rotate-0 text-orange-400"
            : "scale-0 rotate-90"
        }`}
      />
    </button>
  );
}
