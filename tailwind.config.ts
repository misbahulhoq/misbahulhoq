import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-200": "#FFF4EA",
          primary: "#FF6B00",
          "primary-content": "#fff",
          secondary: "#6B00FF",
          accent: "#0094FF",
        },
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          primary: "#B26DEB",
          "primary-content": "#fff",
          secondary: "#EB6DE5",
          "secondary-content": "#fff",
          accent: "#A6EB6D",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
