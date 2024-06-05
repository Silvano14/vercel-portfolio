import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/desk.jpg')",
      },
      fontFamily: {
        Inconsolata: ["Source Code Pro", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
