import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link).js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#3333ff",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/desk.jpg')",
      },
      fontFamily: {
        Inconsolata: ["Source Code Pro", "serif"],
        DMSerifDisplay: ["DM Serif Display", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
