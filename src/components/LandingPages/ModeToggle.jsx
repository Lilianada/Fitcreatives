import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Assuming you're using Heroicons

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the theme is applied after mounting
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents hydration mismatch

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-14 h-10 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {/* Render both icons but control visibility with scale and rotate */}
      <SunIcon
        className={`h-[1.5rem] w-[1.5rem] absolute transition-transform duration-500 ${
          theme === "dark"
            ? "scale-0 rotate-90"
            : "scale-100 rotate-0 text-zinc-600"
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
