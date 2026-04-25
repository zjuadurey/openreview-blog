import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        paper: "#ffffff",
        line: "#d8d8d8",
        field: "#f7f7f7",
        review: {
          red: "#8f1d21",
          redDark: "#681216",
          redSoft: "#f8e9e9",
          redLine: "#d8a2a4",
          blue: "#2c5f8f",
          green: "#37694a",
        },
      },
      boxShadow: {
        line: "0 1px 0 rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
