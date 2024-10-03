/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#ffe14f',
        dark: '#191919',
        light: '#fffff9',
        blue: '#3052ab',
        lightblue: '#0076ce',
        purple: '#6b5c98',
        lightpurple: '#c2bef2',
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "backdrop": "url('/assets/Untitled-design.png')",
      },
    },
  },
  plugins: [],
};
